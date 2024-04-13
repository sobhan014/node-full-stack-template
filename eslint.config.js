import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'max-len': [
        'warn',
        { code: 80 },
      ],
    }
  },
  {
    ignores: ['eslint.config.js', 'server/dist'],
  },
  {
    files: ['client/src/index.js'],
    languageOptions: {
      globals: {
        document: 'readonly',
      }
    }
  }
);
