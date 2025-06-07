import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from '@abqm-ds/react';
import { HorseIcon, PlusIcon, PrinterIcon } from '@abqm-ds/icons';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Surfaces/Header',
  component: Header,
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
