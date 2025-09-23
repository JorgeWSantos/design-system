import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '@abqm-ds/react';
import { colors } from '@abqm-ds/tokens';

const optionsAutoComplete = ['Option1', 'Option2', 'Test1', 'Test2', 'Data1', 'Data2'];

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: `
  O componente **Autocomplete** é utilizado para campos de seleção com sugestão automática conforme o usuário digita.

  ### Como implementar

  \`\`\`tsx
  import { Autocomplete } from '@abqm-ds/react';

  <Autocomplete placeholder="Digite" suggestions={["Opção 1", "Opção 2"]} />
  \`\`\`

  #### Props principais

  - \`prefix\`: string — Texto exibido antes do valor digitado.
  - \`size\`: 'sm' | 'md' | 'lg' — Tamanho do campo (padrão: 'sm').
  - \`variant\`: 'primary' | 'secondary' | 'tertiary' — Variação de cor/estilo do campo.
  - \`icon\`: ReactNode — Ícone exibido à esquerda do campo.
  - \`onChange\`: (event) => void — Função chamada ao alterar o valor do input.
  - \`debounceDelay\`: number — Tempo de debounce em milissegundos para o onChange.
  - \`label\`: string — Texto exibido acima do campo.
  - \`suggestions\`: string[] — Lista de sugestões exibidas conforme o texto digitado.
  - \`onSelectSuggestion\`: (value: string) => void — Função chamada ao selecionar uma sugestão.
  - \`value\`: string — Valor controlado do input.
  - \`...props\`: Aceita todas as props nativas de \`<input>\`.

  #### Exemplo de uso com sugestões e seleção

  \`\`\`tsx
  <Autocomplete
    placeholder="Digite o nome do animal"
    variant="tertiary"
    label="Nome"
    value={filter.animal.name || ''}
    suggestions={animalSuggestions.map((s) => s.nome)}
    onSelectSuggestion={(value) => {
      const selected = animalSuggestions.find((s) => s.nome === value);
      setFilter((prev) => ({
        ...prev,
        animal: {
          ...prev.animal,
          name: value,
          id: selected?.id || null,
          register: selected?.register || prev.animal.register,
        },
      }));
    }}
    onChange={handleAnimalAutoComplete}
    debounceDelay={400}
  />
  \`\`\`

  #### Acessibilidade

  - O componente propaga todas as props nativas de \`input\`, incluindo \`aria-*\` e \`role\`.
  - Use \`aria-label\` ou associe um \`<label>\` para melhor acessibilidade.

  ---
          `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {},
  render: () => {
    const [inputValue, setInputValue] = React.useState('');

    const suggestionsFiltered = inputValue
      ? optionsAutoComplete.filter((option) => {
          console.log(inputValue);
          console.log(option);
          console.log('-----');

          return option.toLowerCase().includes(inputValue.toLowerCase());
        })
      : [];

    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    }, []);

    return (
      <div
        style={{
          maxWidth: 300,
          backgroundColor: colors.emeraldGreen50,
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Autocomplete
          onChange={onChange}
          placeholder="Digite"
          suggestions={suggestionsFiltered}
          onSelectSuggestion={(value) => alert(`Selecionado: ${value}`)}
          debounceDelay={400}
        />
      </div>
    );
  },
};
