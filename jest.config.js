const transformIgnoreModules = [
  'react-native',
  'react-native-permissions',
  '@react-native',
  'react-native-iphone-x-helper',
  'react-native-modal',
  'react-native-animatable',
  'react-native-qrcode-scanner',
];

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    `node_modules/(?!(${transformIgnoreModules.join('|')})/)`,
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
  },
};
