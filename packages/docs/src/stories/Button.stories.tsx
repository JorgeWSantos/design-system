import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@abqm-ds/react';
import { CaretRightFillIcon } from '@abqm-ds/icons';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    text: 'Enviar',
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
  parameters: {
    docs: {
      description: {
        component: `
O componente **Button** é utilizado para ações e interações do usuário.

### Como implementar

\`\`\`tsx
import { Button } from '@abqm-ds/react';

<Button variant="primary" size="md" onClick={() => alert('Clicou!')}>
  Enviar
</Button>
\`\`\`

#### Variantes disponíveis

- \`primary\`
- \`secondary\`
- \`tertiary\`
- \`login\`
- \`login-mobile\`
- \`dark\`

#### Tamanhos disponíveis

- \`sm\`
- \`md\`
- \`lg\`
- \`xlg\`

- Aceita qualquer conteúdo como filho.
        `,
      },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    text: 'Criar',
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    text: 'Cancelar',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    text: 'Small',
  },
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
    text: 'Medium',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
    text: 'Large',
  },
};

export const WithIconLeft: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    text: 'With Icon',
    iconLeft: <CaretRightFillIcon width={16} />,
  },
};

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    text: 'With Icon',
    iconRight: <CaretRightFillIcon width={16} />,
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
};
