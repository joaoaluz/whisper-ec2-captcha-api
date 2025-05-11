/**
 * @getTranscriptionArray
 * Helper function to transform string in array
 */
const getTranscriptionArray = (transcriptionText) => transcriptionText
    .replace(/\./g, '')
    .trim()
    .split(',')
    .flatMap((value) => value.split('-'))
    .flatMap((value) => value.split(' '))
    .map((value) => value.trim())
    .filter(Boolean);

module.exports = getTranscriptionArray;
