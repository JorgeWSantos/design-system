// .storybook/manager.ts
import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import theme from './theme'

const customTheme = create({
  base: theme,
  brandTitle: 'ABQM Design System',
  brandUrl: 'https://abqm.com.br',
  // brandImage: 'https://abqm.com.br/logo.png', // Opcional
})

addons.setConfig({
  theme: customTheme,
})
