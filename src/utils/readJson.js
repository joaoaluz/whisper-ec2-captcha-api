const fs = require('fs').promises;

/**
 * @name readJSON
 * @description Helper function to read json file
 */
const readJSON = async (jsonPath) => {
  const jsonString = await fs.readFile(jsonPath, 'utf8');
  const data = JSON.parse(jsonString);

  return data;
};

module.exports = readJSON;
