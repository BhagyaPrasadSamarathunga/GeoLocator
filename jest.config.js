module.exports = {
  rootDir: '.',
  
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'css'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',

  roots: ['<rootDir>'],

  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!(your-package-to-transform|other-package))/',
  ],

  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

};