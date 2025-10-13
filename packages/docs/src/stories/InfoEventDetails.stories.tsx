import { Meta, StoryObj } from '@storybook/react';
import { InfoEventDetails } from '@abqm-ds/react';
import { colors } from '@abqm-ds/tokens';

export default {
  title: 'Navigation/InfoEventDetails',
  component: InfoEventDetails,
  parameters: {
    docs: {
      description: {
        component: `
O componente **InfoEventDetails** exibe um cabeçalho de navegação para ambientes desktop, com suporte opcional a botão de voltar, subtítulo (\`subtitle\`) e conteúdo customizável via \`children\`.

### Como implementar

\`\`\`tsx
import { InfoEventDetails } from '@abqm-ds/react';

<InfoEventDetails hasBackButton onGoBack={() => alert('Voltar!')} title="Título" subtitle="Subtítulo opcional">
  <span>Conteúdo do cabeçalho</span>
</InfoEventDetails>
\`\`\`
`,
      },
    },
  },
} as Meta<typeof InfoEventDetails>;

const eventInfoData = {
  logotipo: '',
  data_inicio: '20/10/2024',
  data_fim: '24/10/2024',
  local: 'Centro de Eventos do Ceará - Fortaleza, CE',
  organizador: 'Associação Brasileira de Criadores de Cavalo Quarto de Milha (ABQM)',
};

const render = () => {
  return (
    <div
      style={{
        padding: '1.5rem',
        backgroundColor: colors.greenTransparent30,
        borderRadius: '4px',
      }}
    >
      <InfoEventDetails data={eventInfoData} />
    </div>
  );
};

export const Primary: StoryObj = {
  render,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico do InfoEventDetails sem children.',
      },
    },
  },
};
