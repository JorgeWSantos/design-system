import { Meta, StoryObj } from '@storybook/react';
import { RoundedButton, RoundedButtonProps } from '@abqm-ui2/react';
import { ArrowRight } from 'phosphor-react';
import { PlusIcon } from '@abqm-ui2/icons';

export default {
  title: 'Components/RoundedButton',
  component: RoundedButton,
  args: {
    children: <PlusIcon width={14} height={14} />,
    size: 'md',
    label: 'Enviar',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'click' },
  },
} as Meta<RoundedButtonProps>;

export const Primary: StoryObj<RoundedButtonProps> = {};

export const Secondary: StoryObj<RoundedButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Criar',
  },
};

export const Tertiary: StoryObj<RoundedButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancelar',
  },
};

export const Small: StoryObj<RoundedButtonProps> = {
  args: {
    size: 'sm',
    children: 'Enviar',
  },
};

export const WithIcon: StoryObj<RoundedButtonProps> = {
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

export const Disabled: StoryObj<RoundedButtonProps> = {
  args: {
    children: 'Desabilitado',
    disabled: true,
  },
};
