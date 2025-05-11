const readJSON = require('./readJson');
const getTranscriptionArray = require('./getTranscriptionArray');
const generateFilesPath =  require('./generateFilesPath');
const deleteTempFiles = require('./deleteTempFiles');
const createAudioFile = require('./createAudioFile');
const authenticateToken = require('./authenticateToken');

module.exports = {
  authenticateToken,
  createAudioFile,
  deleteTempFiles,
  readJSON,
  getTranscriptionArray,
  generateFilesPath,
};
