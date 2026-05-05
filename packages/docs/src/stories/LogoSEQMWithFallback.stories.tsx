import { Meta, StoryObj } from '@storybook/react';
import { LogoSEQMWithFallback, LogoSEQMWithFallbackProps } from '@abqm-ds/react';
import { colors } from '@abqm-ds/tokens';

export default {
  title: 'Data Display/LogoSEQMWithFallback',
  component: LogoSEQMWithFallback,
  parameters: {
    docs: {
      description: {
        component: `
O componente **LogoSEQMWithFallback** exibe o logotipo de um evento SEQM quando disponível, ou um ícone padrão da ABQM como fallback.

### Como implementar

\`\`\`tsx
import { LogoSEQMWithFallback } from '@abqm-ds/react';

// Com logotipo
<LogoSEQMWithFallback data={{ logotipo: 'https://url-do-logo.png' }} />

// Sem logotipo (exibe fallback)
<LogoSEQMWithFallback data={null} />

// Variante clara (fallback branco)
<LogoSEQMWithFallback data={null} light />
\`\`\`

- Exibe a imagem se \`data.logotipo\` for fornecido e carregado com sucesso.
- Exibe o ícone \`LogoAbqmBorderedEmeraldIcon\` como fallback quando \`data\` é \`null\` ou a imagem falha ao carregar.
- Prop \`light\` troca o fallback para \`LogoAbqmBorderedWhiteIcon\`, ideal para fundos escuros.
        `,
      },
    },
  },
} as Meta<typeof LogoSEQMWithFallback>;

const wrapperStyle = (bg: string) => ({
  padding: '.25rem',
  backgroundColor: bg,
  borderRadius: '4px',
  display: 'inline-flex',
});

export const ComLogotipo: StoryObj<LogoSEQMWithFallbackProps> = {
  args: {
    data: { logotipo: 'https://github.com/jorgewsantos.png' },
    light: false,
  },
  render: (args) => (
    <div style={wrapperStyle(colors.greenTransparent30)}>
      <LogoSEQMWithFallback {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exibe o logotipo do evento quando a URL da imagem é válida.',
      },
    },
  },
};

export const SemLogotipo: StoryObj<LogoSEQMWithFallbackProps> = {
  args: {
    data: null,
    light: false,
  },
  render: (args) => (
    <div style={wrapperStyle(colors.white50)}>
      <LogoSEQMWithFallback {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exibe o ícone fallback emerald quando `data` é `null`.',
      },
    },
  },
};

export const FallbackClaro: StoryObj<LogoSEQMWithFallbackProps> = {
  args: {
    data: null,
    light: true,
  },
  render: (args) => (
    <div style={{ ...wrapperStyle(colors.greenTransparent30) }}>
      <LogoSEQMWithFallback {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Variante `light` — exibe o ícone fallback branco, indicada para fundos escuros.',
      },
    },
  },
};

export const ImagemInvalida: StoryObj<LogoSEQMWithFallbackProps> = {
  args: {
    data: { logotipo: 'https://url-invalida.exemplo/logo.png' },
    light: false,
  },
  render: (args) => (
    <div style={wrapperStyle(colors.white50)}>
      <LogoSEQMWithFallback {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Quando a URL da imagem falha ao carregar, o componente exibe automaticamente o ícone fallback.',
      },
    },
  },
};
