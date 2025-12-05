import nextJest from 'next/jest.js';

/**
 * Jest configuration for Next.js project with React Testing Library
 */
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default createJestConfig(customJestConfig);

