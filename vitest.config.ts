/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
  ],
  define: {
    // Define global constants that might be used in the code, e.g., by Vite's define feature
    '__APP_VERSION__': JSON.stringify('test-version'), // Provide a mock version
    '__BUILD_TIME__': JSON.stringify(new Date().toISOString()), // Provide a mock build time
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['lib/**/{tests,src,__tests__}/**/*.{test,spec}.[jt]s?(x)'],
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['lib/**/*.{ts,tsx,js,jsx}'], // Define what files to include in coverage
      exclude: [ // Define what files/patterns to exclude from coverage
        'lib/**/{dev,docs,tests,__tests__}/**/*',
        'lib/**/main.{ts,js}',
        'lib/**/index.{ts,js}',
        'lib/**/*.d.ts',
        'lib/**/types/**/*', // Often type definitions don't need coverage
        // Add other patterns like example files, stories, etc.
      ],
    },
  },
  // No explicit resolve.alias needed here if tsconfigPaths is working correctly
});
