import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  resetMocks: true,
  setupFilesAfterEnv: ['jest-extended/all'],
  modulePathIgnorePatterns: ['<rootDir>/bin/'],
};

export default config;
