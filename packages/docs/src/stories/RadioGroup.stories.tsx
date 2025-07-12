import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '@abqm-ds/react';
import { useState } from 'react';

const options = [
  { id: '1', label: 'Opção 1', value: 'opcao1' },
  { id: '2', label: 'Opção 2', value: 'opcao2' },
  { id: '3', label: 'Opção 3', value: 'opcao3' },
];

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: `
O componente **RadioGroup** exibe um grupo de opções do tipo radio.

### Como implementar

\`\`\`tsx
import { RadioGroup } from '@abqm-ds/react';

const options = [
  { id: '1', label: 'Opção 1', value: 'opcao1' },
  { id: '2', label: 'Opção 2', value: 'opcao2' },
];

const [selectedOption, setSelectedOption] = useState(options[0]);

<RadioGroup
  options={options}
  selectedOption={selectedOption}
  setSelectedOption={setSelectedOption}
/>
\`\`\`

#### Props principais

- \`options\`: array de opções (cada opção deve ter \`id\`, \`label\` e \`value\`)
- \`selectedOption\`: opção atualmente selecionada
- \`setSelectedOption\`: função para atualizar a opção selecionada
- \`direction\`: 'horizontal' | 'vertical' (padrão: 'horizontal')
        `,
      },
    },
  },
} as Meta<typeof RadioGroup>;

const Render = (args: any) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div
      style={{
        maxWidth: '400px',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <RadioGroup
        {...args}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export const Primary: StoryObj = {
  render: Render,
  args: {
    direction: 'horizontal',
  },
};

export const Vertical: StoryObj = {
  render: Render,
  args: {
    direction: 'vertical',
  },
};
