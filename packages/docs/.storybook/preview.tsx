import type { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';
import theme from './theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],

  // decorators: [withResponsiveBackground],
  parameters: {
    backgrounds: {
      default: theme,
      values: [
        {
          name: 'dark',
          value: themes.dark.appBg, // Use a dark color from the theme
        },
        {
          name: 'light',
          value: themes.light.appBg, // Optional: Add a light option too
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes[theme],
    },
  },

  tags: ['autodocs'],
};

export default preview;
