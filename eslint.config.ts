import eslint from '@eslint/js';
import nx from '@nx/eslint-plugin';
import { Config, defineConfig } from 'eslint/config';
import tailwindcss from 'eslint-plugin-better-tailwindcss';
import imports from 'eslint-plugin-import';
import jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // Nx configs
  nx.configs['flat/base'],
  nx.configs['flat/javascript'] as Config,
  nx.configs['flat/typescript'] as Config,
  nx.configs['flat/react'] as Config,
  // JSON
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      '@nx/dependency-checks': 'error',
    },
  },
  // JS/TS
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      tailwindcss.configs['recommended-error'],
    ],
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/lib/theme.css',
      },
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['.*\\/eslint\\.config$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/unbound-method': [
        'error',
        {
          ignoreStatic: true,
        },
      ],
      ...imports.flatConfigs.recommended.rules,
      'import/named': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '@camelot/**',
              group: 'external',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
          },
          'newlines-between': 'never',
        },
      ],
      'import/prefer-default-export': 'off',
    },
  },
  // JS
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },
]);
