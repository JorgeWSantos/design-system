import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'], // Only ESM for import.meta.env support
  dts: true,
  external: ['react', '@abqm-ds/icons'],
  clean: true,
});
