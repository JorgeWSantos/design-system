import { Meta, StoryObj } from '@storybook/react';
import { Button, Box, Text, Toast, ToastRoot } from '@abqm-ds/react';

// Documentação principal do componente Toast
export default {
  title: 'Feedback/Toast',
  parameters: {
    docs: {
      description: {
        component: `
O componente **Toast** exibe mensagens temporárias de feedback para o usuário, como sucesso, erro, aviso e informação.

### Como implementar

1. **Adicione o ToastRoot no topo da sua aplicação**  
No seu \`App.tsx\` ou equivalente:

\`\`\`tsx
import { ToastRoot } from '@abqm-ds/react';

function App() {
  return (
    <>
      <ToastRoot />
      {/* ...restante da aplicação... */}
    </>
  );
}
\`\`\`

### Tipos disponíveis

- \`success\`: Mensagem de sucesso
- \`error\`: Mensagem de erro
- \`info\`: Mensagem informativa
- \`warning\`: Mensagem de aviso

O Toast desaparece automaticamente após alguns segundos.
        `,
      },
    },
  },
} as Meta;

// --- Componentes de exemplo para cada tipo de Toast ---

function ToastButton({
  label,
  message,
  type,
}: {
  label: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}) {
  return (
    <Button
      text={label}
      onClick={() =>
        Toast.show({
          message,
          type,
        })
      }
    />
  );
}

// --- Story: Exemplo geral com todos os tipos ---
export const Exemplos: StoryObj = {
  render: () => (
    <>
      <ToastRoot />
      <Box style={{ gap: 16 }}>
        <>
          <Text fontSize="sm" style={{ marginBottom: 8 }}>
            Clique nos botões para exibir diferentes tipos de Toast:
          </Text>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <ToastButton
              label="Sucesso"
              message="Operação realizada com sucesso!"
              type="success"
            />
            <ToastButton
              label="Erro"
              message="Ocorreu um erro inesperado."
              type="error"
            />
            <ToastButton
              label="Info"
              message="Esta é uma informação importante."
              type="info"
            />
            <ToastButton
              label="Aviso"
              message="Atenção: verifique os dados."
              type="warning"
            />
          </div>
        </>
      </Box>
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: `
// ...veja a documentação acima para exemplos de uso...
        `.trim(),
        language: 'tsx',
      },
    },
  },
};

// --- Stories individuais para cada tipo ---

const SuccessExample = () => (
  <>
    <ToastRoot />
    <Button
      text="Mostrar Toast de Sucesso"
      onClick={() =>
        Toast.show({
          message: 'Operação realizada com sucesso!',
          type: 'success',
          timeout: 3000,
        })
      }
    />
  </>
);

export const Success: StoryObj = {
  render: () => <SuccessExample />,
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **success**.' },
    },
  },
};

const ErrorExample = () => (
  <>
    <ToastRoot />
    <Button
      text={'Mostrar Toast de Erro'}
      onClick={() =>
        Toast.show({
          message: 'Ocorreu um erro inesperado.',
          type: 'error',
        })
      }
    />
  </>
);

export const Error: StoryObj = {
  render: () => <ErrorExample />,
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **error**.' },
    },
  },
};

const InfoExample = () => (
  <>
    <ToastRoot />
    <Button
      text="Mostrar Toast de Informação"
      onClick={() =>
        Toast.show({
          message: 'Esta é uma informação importante.',
          type: 'info',
          timeout: 100000,
        })
      }
    />
  </>
);

export const Info: StoryObj = {
  render: () => <InfoExample />,
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **info**.' },
    },
  },
};

const WarningExample = () => (
  <>
    <ToastRoot />
    <Button
      text="Mostrar Toast de Aviso"
      onClick={() =>
        Toast.show({
          message: 'Atenção: verifique os dados.',
          type: 'warning',
        })
      }
    />
  </>
);

export const Warning: StoryObj = {
  render: () => <WarningExample />,
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **warning**.' },
    },
  },
};
