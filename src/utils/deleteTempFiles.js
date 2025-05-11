const fs = require('fs').promises;

/**
 * @name deleteTempFiles
 * @description Helper function to delete temp files
 */
async function deleteTempFiles(tempFilesPaths) {
  Promise.all(tempFilesPaths.map(async (filePath) => fs.unlink(filePath)));
}

module.exports = deleteTempFiles;
