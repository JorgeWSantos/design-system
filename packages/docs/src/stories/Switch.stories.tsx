import { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchVariants } from '@abqm-ds/react';
import React from 'react';
import { colors } from '@abqm-ds/tokens';

export default {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
O componente **Switch** é utilizado para alternar entre dois estados, geralmente ligado/desligado.

### Como usar

\`\`\`tsx
import { Switch } from '@abqm-ds/react';

<Switch checked={true} onChange={() => {}} label="Ativo" variant="primary" />
\`\`\`

#### Props

- **checked**: \`boolean\` _(obrigatório)_ — Estado atual do switch (ligado/desligado).
- **onChange**: \`() => void\` _(obrigatório)_ — Função chamada ao alternar o switch.
- **variant**: \`'primary' | 'filter'\` _(opcional)_ — Define o estilo visual do switch.
- **label**: \`string\` _(opcional)_ — Texto exibido ao lado do switch.
- Aceita também outras props nativas de \`div\`.

> **Atenção:** O Switch não possui prop \`disabled\` atualmente. Caso precise, solicite a implementação.
        `,
      },
    },
  },
} as Meta<typeof Switch>;

interface SBRenderSwitch {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  variant?: SwitchVariants;
}

const renderSwitch = (args: SBRenderSwitch) => {
  const [checked, setChecked] = React.useState(args.checked);

  const handleChange = () => {
    setChecked(!checked);
    if (args.onChange) args.onChange(!checked);
  };

  return (
    <div
      style={{
        backgroundColor: args.variant === 'primary' ? colors.green300 : colors.white,
        width: '300px',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <Switch checked={checked} onChange={handleChange} variant={args.variant} />
    </div>
  );
};

export const Primary: StoryObj<SBRenderSwitch> = {
  args: {
    checked: true,
    onChange: () => {},
    variant: 'primary',
  },
  render: renderSwitch,
};

export const Filter: StoryObj<SBRenderSwitch> = {
  args: {
    checked: true,
    onChange: () => {},
    variant: 'filter',
  },
  render: renderSwitch,
};
