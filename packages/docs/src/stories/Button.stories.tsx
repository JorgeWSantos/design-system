import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@abqm-ds/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'click' },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Criar',
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancelar',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Enviar',
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Desabilitado',
    disabled: true,
  },
};
