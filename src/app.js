const express = require('express');
const { exec } = require('child_process');
const { promisify } = require('util');
const {
  authenticateToken,
  createAudioFile,
  deleteTempFiles,
  readJSON,
  getTranscriptionArray,
  generateFilesPath,
} = require('./utils');

const app = express();
app.use(express.json({ limit: '50mb' }));

const execPromise = promisify(exec);

app.post('/transcribe', authenticateToken, async (req, res) => {
  const { audio, model } = req.body;

  const { tempAudioFilePath, tempTranscriptionFilePath } = generateFilesPath();

  if (!audio) return res.status(400).send('No audio provided.');

  if (!['base', 'small', 'tiny'].includes(model)) {
    return res.status(400).send('Model must be one of: base, small or tiny.');
  }

  try {
    await createAudioFile(audio, tempAudioFilePath);

    const whisperCommand = `whisper ${tempAudioFilePath} --model ${
      model || 'base'
    } --language pt  --fp16 False --verbose False --output_dir ./transcriptions --output_format json`;

    const { stderr } = await execPromise(whisperCommand);

    if (stderr.includes('error')) return res.status(500).send(`Error during Whisper, ${stderr}`);

    const result = await readJSON(tempTranscriptionFilePath);

    return res.json({
      transcriptionText: result.text,
      transcriptionArray: getTranscriptionArray(result.text),
      transcriptionArrayNumbers: getTranscriptionArray(result.text).map((item) => parseInt(item, 10))
    });
  } catch (error) {
    return res.status(500).send(error.message);
  } finally {
    await deleteTempFiles([tempAudioFilePath, tempTranscriptionFilePath]);
  }
});

app.listen(3000, () => {
  console.log('Server running.');
});
