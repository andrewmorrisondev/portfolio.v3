import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',  // Use ts-jest to handle TypeScript and JSX/TSX files
  testEnvironment: 'jest-environment-jsdom',  // Simulate browser environment for Jest
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mock CSS imports
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],  // Ignore node_modules
};

export default config;
