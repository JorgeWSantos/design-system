// eslint.config.js (modo ESM)
import js from '@eslint/js';
import { fileURLToPath } from 'url';
import path from 'path';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

export default [
  // ...compat.extends('@abqm-ds/eslint-config'),
  js.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
    },
  },

  // Pacote: react
  {
    files: ['packages/react/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./packages/react/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        requestAnimationFrame: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // regras específicas do pacote react (opcional)
      'no-unused-vars': 'off', // Desativar regra para evitar conflitos com o TypeScript
    },
  },

  // Pacote: tokens
  {
    files: ['packages/tokens/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./packages/tokens/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },

  // Adicione mais blocos conforme necessário para outros pacotes...
];
