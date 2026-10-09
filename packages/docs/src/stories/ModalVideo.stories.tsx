import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ModalVideo, Button } from '@abqm-ds/react';

export default {
  title: 'Feedback/ModalVideo',
  component: ModalVideo,
  parameters: {
    docs: {
      description: {
        component: `
O componente **ModalVideo** exibe um vídeo sobre fundo escuro, usando o **Modal** no modo \`full\`.

### Como implementar

\`\`\`tsx
import { ModalVideo } from '@abqm-ds/react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} text="Assistir" />
      <ModalVideo
        isOpen={open}
        onClose={() => setOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=Z3ArB5j2wbM"
      />
    </>
  );
}
\`\`\`

#### Props principais

- \`isOpen\`: boolean - Controla a visibilidade do modal.
- \`onClose\`: () => void - Função chamada ao fechar o modal.
- \`videoUrl\`: string - URL do vídeo.
  - Arquivos de vídeo (\`.mp4\`, \`.webm\`, \`.ogg\`, \`.mov\`, \`.m4v\`) tocam no player nativo do navegador.
  - Links do YouTube (\`watch\`, \`youtu.be\`, \`live\`, \`shorts\`) são convertidos para \`embed\` automaticamente.
  - Qualquer outra URL é exibida em um iframe.
- \`title\`: string - Texto acessível do vídeo. Padrão: \`'Vídeo'\`.
- \`autoPlay\`: boolean - Começa a tocar ao abrir. Padrão: \`true\`.

#### Comportamento

- O vídeo fica centralizado em 16:9, limitado pela largura (retrato) ou pela altura (paisagem) da tela.
- Ao fechar, o player é desmontado e o vídeo para.
- Enquanto aberto, o \`backdrop-filter\` da página de trás fica desligado: com o fundo translúcido, o navegador refaria esse desfoque a cada quadro do vídeo e o fps cairia pela metade.
- O navegador pode bloquear o autoplay com som; nesse caso o vídeo abre pausado.

        `,
      },
    },
  },
} as Meta;

const ExampleModalVideo = ({ videoUrl }: { videoUrl: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} text="Assistir" />
      <ModalVideo isOpen={open} onClose={() => setOpen(false)} videoUrl={videoUrl} />
    </>
  );
};

export const YouTube: StoryObj = {
  render: () => (
    <ExampleModalVideo videoUrl="https://www.youtube.com/watch?v=Z3ArB5j2wbM" />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Link do YouTube, convertido para embed.',
      },
    },
  },
};

export const ArquivoMp4: StoryObj = {
  render: () => (
    <ExampleModalVideo videoUrl="https://abqm-stream.b-cdn.net/Passadas/38-301177-1-54.mp4" />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Arquivo de vídeo direto, tocado no player nativo do navegador.',
      },
    },
  },
};
