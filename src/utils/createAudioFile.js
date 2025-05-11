const fs = require('fs').promises;

/**
 * @name createAudioFile
 * @description Helper function to create audio file buffer 
 */
async function createAudioFile(audio, path) {
  const audioBuffer = Buffer.from(audio, 'base64');
  await fs.writeFile(path, audioBuffer);
}

module.exports = createAudioFile;