const path = require('path');
const { v4 } = require('uuid');

/**
 * @name generateFilesPath
 * @description Helper function to generate audio and transcription file path
 */
const generateFilesPath = () => {
  const audioId = v4();
  const tempAudioFilePath = path.resolve('uploads', `${audioId}-audio.wav`);
  const tempTranscriptionFilePath = path.resolve('transcriptions', `${audioId}-audio.json`);

  return { tempAudioFilePath, tempTranscriptionFilePath };
};

module.exports = generateFilesPath;
