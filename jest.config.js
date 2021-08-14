const tsPreset = require('ts-jest/jest-preset')

module.exports = {
  roots: ['<rootDir>/src'],
  ...tsPreset
}
