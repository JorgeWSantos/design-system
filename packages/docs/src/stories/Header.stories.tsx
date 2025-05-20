import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from '@abqm-ui2/react';
import { HorseIcon, PlusIcon, PrinterIcon } from '@abqm-ui2/icons';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Surfaces/Header',
  component: Header,
} as Meta<HeaderProps>;

export const Primary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    size: 'md',
    fontWeight: 'semi',
  },
};

export const Secondary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    size: 'md',
    // fontWeight: 'regular',
  },
};

export const Tertiary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    size: 'sm',
    // fontWeight: 'regular',
  },
};

export const WithButtons: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    size: 'md',
    buttons: [
      {
        icon: <HorseIcon />,
        label: 'animais',
        onClick: action('animais'),
      },
      {
        icon: <PrinterIcon />,
        label: 'imprimir',
        onClick: action('imprimir'),
      },
      {
        icon: <PlusIcon />,
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
    size: 'md',
    buttons: [
      {
        icon: <PrinterIcon />,
        label: 'imprimir',
        disabled: true,
      },
      {
        icon: <PlusIcon />,
        label: 'filtro',
      },
    ],
  },
};
