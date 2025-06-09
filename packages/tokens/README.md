# @abqm-ds/tokens

Tokens de design compartilhados para o Design System ABQM.

Este pacote fornece variáveis de design (cores, espaçamentos, tipografia, radii, breakpoints, etc.) para uso consistente em todos os projetos que utilizam o design system.

---

## 📦 Instalação.

```bash
yarn add @abqm-ds/tokens
# ou
npm install @abqm-ds/tokens
```

---

## ✨ O que está incluído

- **Cores:** Paleta de cores oficial ABQM
- **Espaçamentos:** Valores de espaçamento em `rem`
- **Radii:** Raio de borda para componentes
- **Breakpoints:** Pontos de quebra para responsividade
- **Fontes:** Família, tamanhos, pesos e alturas de linha

---

## 💡 Como Usar

Importe os tokens diretamente do pacote:

```typescript
import {
  colors,
  space,
  radii,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@abqm-ds/tokens';

const primary = colors.green500;
const padding = space[4];
const borderRadius = radii.sm;
```

---

## 📁 Estrutura

```bash
packages/tokens/
├── src/
│   ├── colors.ts
│   ├── space.ts
│   ├── radii.ts
│   ├── breakpoints.ts
│   ├── fonts.ts
│   ├── font-sizes.ts
│   ├── font-weights.ts
│   ├── line-heights.ts
│   └── index.ts
├── package.json
└── README.md
```

---

## 🤝 Contribuição

Para sugerir alterações ou adicionar novos tokens, abra um PR ou entre em contato com o time de design.

---

## 📃 Licença

Este projeto é privado e pertence à ABQM. Uso externo é restrito.
