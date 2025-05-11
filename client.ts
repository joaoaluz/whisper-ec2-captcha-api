import axios from 'axios';
import fs from 'fs';

async function transcribeAudio(audioFilePath: string) {
  try {
    const audioBuffer = fs.readFileSync(audioFilePath);
    const audioBase64 = audioBuffer.toString('base64');

    const response = await axios.post('https://ec2-34-204-37-76.compute-1.amazonaws.com/transcribe',  {
        audio: audioBase64,
        model: 'base'
    }, { headers: { Authorization: 'TOKEN'}});

    console.log('Transcription:', response.data);
  } catch (error) {
    console.error('Error transcribing audio:', error);
  }
}

const audioFilePath = './audio.wav';
(async () => {
  await transcribeAudio(audioFilePath);
})();