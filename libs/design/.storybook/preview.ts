import { withThemeByClassName } from '@storybook/addon-themes';
import { type Preview, ReactRenderer } from '@storybook/react-vite';
import '../src/lib/theme.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
