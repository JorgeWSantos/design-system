// .storybook/manager.ts
import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const customTheme = create({
  base: 'light',
  brandTitle: 'ABQM Design System',
  brandUrl: 'https://abqm.com.br',
  // brandImage: 'https://abqm.com.br/logo.png', // Opcional
})

addons.setConfig({
  theme: customTheme,
})
