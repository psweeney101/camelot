import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/lib/storybook/*.stories.tsx'],
  addons: ['@storybook/addon-themes'],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    allowedHosts: ['0.0.0.0'],
  },

  viteFinal: config =>
    mergeConfig(config, {
      resolve: {
        tsconfigPaths: true,
      },
      plugins: [react(), tailwindcss()],
    }),
};

function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
