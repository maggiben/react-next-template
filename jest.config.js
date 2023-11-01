const {
  generateConfig,
} = require("@fravega-it/react-next-template-config/config/jest/jest.config");

const config = generateConfig(__dirname);

module.exports = { ...config };
