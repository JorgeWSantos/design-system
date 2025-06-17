import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from '@abqm-ds/react';
import { HorseIcon, PlusIcon, PrinterIcon } from '@abqm-ds/icons';
import { action } from '@storybook/addon-actions';
import { colors } from '@abqm-ds/tokens';

// Documentação principal do componente Header
export default {
  title: 'Surfaces/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: `
O componente **Header** exibe um cabeçalho de página com título e botões de ação opcionais.

### Como implementar

\`\`\`tsx
import { Header } from '@abqm-ds/react';
import { PrinterIcon } from '@abqm-ds/icons';

<Header
  text="Calendários"
  fontWeight="semiBold"
  buttons={[
    {
      icon: <PrinterIcon />,
      label: 'imprimir',
      onClick: () => alert('Imprimir'),
    },
  ]}
/>
\`\`\`

- O título é exibido à esquerda.
- Os botões de ação são opcionais e aparecem à direita.
        `,
      },
    },
  },
} as Meta<HeaderProps>;

export const Primary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    fontWeight: 'semiBold',
  },
};

export const Secondary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    fontWeight: 'bold',
  },
};

export const WithButtons: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    buttons: [
      {
        icon: <HorseIcon fill={colors.emeraldGreen50} />,
        label: 'animais',
        onClick: action('animais'),
      },
      {
        icon: <PrinterIcon fill={colors.emeraldGreen50} />,
        label: 'imprimir',
        onClick: action('imprimir'),
      },
      {
        icon: <PlusIcon fill={colors.emeraldGreen50} />,
        label: 'filtro',
        onClick: action('filtro'),
        // onClick: () => console.log('clicou em animais'), //exibe o console no devtools do chrome
      },
    ],
  },
};

export const WithButtonsDisabled: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    buttons: [
      {
        icon: <PrinterIcon fill={colors.emeraldGreen50} />,
        label: 'imprimir',
        disabled: true,
      },
      {
        icon: <PlusIcon fill={colors.emeraldGreen50} />,
        label: 'filtro',
      },
    ],
  },
};
