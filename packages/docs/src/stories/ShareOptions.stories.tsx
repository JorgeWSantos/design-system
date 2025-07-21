import { Meta, StoryObj } from '@storybook/react';
import { ShareOptions } from '@abqm-ds/react';
import { useState } from 'react';
import { Button } from '@abqm-ds/react';
import { colors } from '@abqm-ds/tokens';

export default {
  title: 'Feedback/ShareOptions',
  component: ShareOptions,
  parameters: {
    docs: {
      description: {
        component: `
O componente **ShareOptions** exibe opções rápidas para compartilhar um link em redes sociais como Facebook e Twitter.

### Como implementar

\`\`\`tsx
import { ShareOptions } from '@abqm-ds/react';

<ShareOptions url="https://meusite.com/pagina" />
\`\`\`

- Recebe a prop \`url\` (string) que será compartilhada.
- Exibe botões para Facebook e Twitter (X).
- Pode ser posicionado de forma absoluta sobre outros elementos.
        `,
      },
    },
  },
} as Meta<typeof ShareOptions>;

// Exemplo interativo com botão para mostrar/ocultar ShareOptions
const RenderWithToggle = (args: any) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        position: 'relative',
        minHeight: 120,
        maxWidth: 400,
        backgroundColor: colors.green900,
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <Button text={'Compartilhar'} onClick={() => setShow((v) => !v)} />
      {show && (
        <div style={{ position: 'absolute', top: 0, right: '60%' }}>
          <ShareOptions {...args} />
        </div>
      )}
    </div>
  );
};

export const Primary: StoryObj = {
  args: {
    url: 'https://abqm.com.br',
    variantArrow: 'top',
  },
  render: RenderWithToggle,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo com botão que controla a visibilidade do ShareOptions.',
      },
    },
  },
};

export const WithArrowBottom: StoryObj = {
  args: {
    url: 'https://abqm.com.br',
    variantArrow: 'bottom',
  },
  render: RenderWithToggle,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo com botão que controla a visibilidade do ShareOptions.',
      },
    },
  },
};
