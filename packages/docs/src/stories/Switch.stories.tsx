import { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@abqm-ds/react';
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

### Como implementar

\`\`\`tsx
import { Switch } from '@abqm-ds/react';

<Switch checked={true} onChange={() => {}} />
\`\`\`

- Aceita as props \`checked\`, \`onChange\`, \`disabled\` e outras nativas de input.
        `,
      },
    },
  },
} as Meta<typeof Switch>;

const renderSwitch = (args: {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}) => {
  const [checked, setChecked] = React.useState(args.checked);

  const handleChange = () => {
    setChecked(!checked);
    if (args.onChange) args.onChange(!checked);
  };

  return (
    <div
      style={{
        backgroundColor: colors.green300,
        width: '300px',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};

export const Primary: StoryObj<{ checked: boolean; onChange?: () => void }> = {
  args: {
    checked: true,
    onChange: () => {},
  },
  render: renderSwitch,
};
