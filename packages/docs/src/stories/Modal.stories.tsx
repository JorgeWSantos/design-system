import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, Button, Box, Text } from '@abqm-ds/react';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
O componente **Modal** exibe uma janela sobreposta à interface, centralizada ou alinhada à esquerda/direita/topo/baixo.

### Como implementar

\`\`\`tsx
import { Modal } from '@abqm-ds/react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        positionHorizontal="center"
        positionVertical="center"
      >
        <div>Conteúdo do modal</div>
      </Modal>
    </>
  );
}
\`\`\`

#### Props principais

- \`isOpen\`: boolean - Controla a visibilidade do modal.
- \`onClose\`: () => void - Função chamada ao fechar o modal.
- \`children\`: ReactNode - Conteúdo do modal.
- \`positionHorizontal\`: 'left' | 'right' | 'center' - Posição horizontal do modal.
- \`positionVertical\`: 'top' | 'bottom' | 'center' - Posição vertical do modal.
- \`styleContent\`: React.CSSProperties - Estilos adicionais para o conteúdo.
- \`size\`: 'normal' | 'full' - Tamanho do modal.
  - 'full' preenche toda a tela, deve ser usado para imagens ou documentos.
  - 'normal' é o modal padrão das aplicações.
- \`maxHeight\`: string - Define o tamanho máximo do conteúdo do modal (ex: \`'90vh'\`). Por padrão, o modal se ajusta ao conteúdo até esse limite.

#### Comportamento

- O modal ajusta sua altura automaticamente ao conteúdo, até o limite de \`maxHeight\`.
- Se o conteúdo for maior que \`maxHeight\`, será exibido um scroll interno.
- O modal pode ser fechado clicando fora dele ou no botão de fechar.

        `,
      },
    },
  },
} as Meta;

const ExampleModal = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} text="Abrir Modal" />
      <Modal isOpen={open} onClose={() => setOpen(false)} {...props}>
        <Box style={{ minWidth: 300 }}>
          <Text fontSize="lg" fontWeight="bold">
            Título do Modal
          </Text>
          <Text fontSize="sm" style={{ margin: '16px 0' }}>
            Este é um exemplo de conteúdo do modal.
          </Text>
          <Button onClick={() => setOpen(false)} text="Fechar" />
        </Box>
      </Modal>
    </>
  );
};

const ExampleModalFull = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} text="Abrir Modal" />
      <Modal isOpen={open} onClose={() => setOpen(false)} {...props}>
        <img
          src={
            'https://www.harasvistaverde.com.br/blog/wp-content/uploads/2023/12/melhores-do-ano.jpg'
          }
        />
      </Modal>
    </>
  );
};

export const Primary: StoryObj = {
  render: () => <ExampleModal />,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico de uso do Modal centralizado.',
      },
    },
  },
};

export const Left: StoryObj = {
  render: () => <ExampleModal positionHorizontal="left" />,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de Modal alinhado à esquerda.',
      },
    },
  },
};

export const Right: StoryObj = {
  render: () => <ExampleModal positionHorizontal="right" />,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de Modal alinhado à direita.',
      },
    },
  },
};

export const FullSize: StoryObj = {
  render: () => <ExampleModalFull size="full" />,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de Modal no modo full (sem bordas e preenchendo a tela).',
      },
    },
  },
};
