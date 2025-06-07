import { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast, Button, Box, Text } from '@abqm-ui2/react';

// Documentação principal do componente Toast
export default {
  title: 'Feedback/Toast',
  component: ToastProvider,
  parameters: {
    docs: {
      description: {
        component: `
O componente **Toast** exibe mensagens temporárias de feedback para o usuário, como sucesso, erro, aviso e informação.

### Como implementar

1. **Envolva sua aplicação com o \`ToastProvider\`:**

\`\`\`tsx
import { ToastProvider } from '@abqm-ui2/react';

function App() {
  return (
    <ToastProvider>
      {/* ...restante da aplicação... */}
    </ToastProvider>
  );
}
\`\`\`

2. **Use o hook \`useToast\` para disparar toasts em qualquer componente filho:**

\`\`\`tsx
import { useToast } from '@abqm-ui2/react';

function MeuComponente() {
  const { showToast } = useToast();

  return (
    <button onClick={() => showToast('Mensagem de sucesso!', 'success')}>
      Mostrar Toast
    </button>
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
  const { showToast } = useToast();
  return <Button onClick={() => showToast(message, type)}>{label}</Button>;
}

// --- Story: Exemplo geral com todos os tipos ---
export const Exemplos: StoryObj = {
  render: () => (
    <ToastProvider>
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
    </ToastProvider>
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

const SuccessExample = () => {
  const { showToast } = useToast();
  return (
    <Button onClick={() => showToast('Operação realizada com sucesso!', 'success', 3000)}>
      Mostrar Toast de Sucesso
    </Button>
  );
};

export const Success: StoryObj = {
  render: () => (
    <ToastProvider>
      <SuccessExample />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **success**.' },
    },
  },
};

const ErrorExample = () => {
  const { showToast } = useToast();
  return (
    <Button onClick={() => showToast('Ocorreu um erro inesperado.', 'error')}>
      Mostrar Toast de Erro
    </Button>
  );
};

export const Error: StoryObj = {
  render: () => (
    <ToastProvider>
      <ErrorExample />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **error**.' },
    },
  },
};

const InfoExample = () => {
  const { showToast } = useToast();
  return (
    <Button
      onClick={() => showToast('Esta é uma informação importante.', 'info', 100000)}
    >
      Mostrar Toast de Informação
    </Button>
  );
};

export const Info: StoryObj = {
  render: () => (
    <ToastProvider>
      <InfoExample />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **info**.' },
    },
  },
};

const WarningExample = () => {
  const { showToast } = useToast();
  return (
    <Button onClick={() => showToast('Atenção: verifique os dados.', 'warning')}>
      Mostrar Toast de Aviso
    </Button>
  );
};

export const Warning: StoryObj = {
  render: () => (
    <ToastProvider>
      <WarningExample />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: { story: 'Exemplo de Toast do tipo **warning**.' },
    },
  },
};
