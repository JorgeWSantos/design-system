import { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary, Button, Box, Text } from '@abqm-ds/react';
import { useState } from 'react';

export default {
  title: 'Feedback/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    docs: {
      description: {
        component: `
O componente **ErrorBoundary** captura erros de renderização em seus componentes filhos e exibe uma mensagem de fallback amigável.

### Como implementar

\`\`\`tsx
import { ErrorBoundary } from '@abqm-ds/react';

function BuggyComponent() {
  throw new Error('Erro de teste!');
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
\`\`\`

- Use para evitar que erros de componentes quebrem toda a aplicação.
- O fallback padrão exibe a mensagem de erro e o stack trace.
        `,
      },
    },
  },
} as Meta;

function BuggyComponent() {
  throw new Error('Erro de teste!');

  return <></>;
}

export const ComponenteQueQuebra: StoryObj = {
  render: () => (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de ErrorBoundary capturando erro de um componente que lança erro ao renderizar.',
      },
    },
  },
};

export const Exemplo: StoryObj = {
  render: () => {
    const [showError, setShowError] = useState(false);
    return (
      <Box>
        <Text fontSize="sm" style={{ marginBottom: 16 }}>
          Clique no botão abaixo para disparar um erro e ver o ErrorBoundary em ação:
        </Text>
        <ErrorBoundary>
          {showError ? (
            <BuggyComponent />
          ) : (
            <Button text="Disparar erro" onClick={() => setShowError(true)} />
          )}
        </ErrorBoundary>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de uso do ErrorBoundary envolvendo um botão que dispara um erro ao renderizar o componente.',
      },
    },
  },
};
