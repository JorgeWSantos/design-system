# @abqm-ds/icons

> Biblioteca de ícones em React baseada em SVGs personalizados da ABQM.

Esta biblioteca fornece ícones SVG como componentes React, permitindo uso simples, estilização via props e integração fluida com projetos em React ou design systems internos.

---

## 📦 Instalação.

No seu projeto React (com suporte a pacotes do monorepo):

```bash
yarn add @abqm-ds/icons
# ou
npm install @abqm-ds/icons
```

---

## ⚙️ Como Funciona

1. Adicione os arquivos **SVG** que deseja converter na pasta `src/icons/`:

   > **Atenção:** A nomenclatura dos ícones deve ser capitalizada, ex:
   >
   > ❌ caretright.svg
   >
   > ✅ CaretRight.svg

2. Em seguida, execute o comando abaixo no terminal:

```bash
npm run generate:icons
```

3. O processo de geração segue estas etapas:
   - Os ícones são convertidos e salvos temporariamente na pasta `_temp`.
   - Em seguida, são organizados e movidos para a pasta `components`.

> 💡 Esse processo evita que todos os ícones existentes sejam modificados a cada nova adição. O script verifica se um ícone já existe e somente cria ou atualiza os que são realmente novos ou alterados.

---

## 💡 Como Usar

Importe o componente do ícone desejado diretamente:

```tsx
import { FacebookIcon, InstagramIcon, YoutubeIcon, HorseIcon } from '@abqm-ds/icons';

export function Example() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <FacebookIcon width={24} height={24} fill="#1877F2" />
      <InstagramIcon width={24} height={24} fill="#E1306C" />
      <YoutubeIcon width={24} height={24} fill="#FF0000" />
      <HorseIcon width={32} height={32} />
    </div>
  );
}
```

---

## 🎯 Props Aceitas

Todos os ícones exportados são componentes React SVG e aceitam todas as propriedades nativas de SVG:

| Prop        | Tipo                          | Exemplo                    |
| ----------- | ----------------------------- | -------------------------- |
| `width`     | `number \| string`            | `24`, `"1em"`              |
| `height`    | `number \| string`            | `24`, `"1.5rem"`           |
| `fill`      | `string` (cor em HEX ou nome) | `"#333"`, `"currentColor"` |
| `className` | `string`                      | `"icon-large"`             |
| `style`     | `React.CSSProperties`         | `{ marginRight: 8 }`       |

---

## 🛠 Desenvolvimento

### Gerar componentes a partir de SVGs

1. Coloque seus arquivos SVG em `src/icons/`.
2. Rode o comando:

```bash
npm run generate
```

Isso irá converter todos os SVGs para componentes React TypeScript (`.tsx`) e salvá-los em `src/components/`.

### Compilar a lib

```bash
npm run build
```

Esse comando usa o `tsup` para gerar a pasta `dist/` com módulos `esm`, `cjs` e os arquivos `.d.ts`.

---

## 📁 Estrutura

```bash
packages/icons/
├── scripts/             # Scripts de desenvolvimento
├── src/
│   ├── icons/           # SVGs originais
│   ├── components/      # Componentes React (.tsx)
│   ├── _temp/           # SVGs temporários
│   └── index.ts         # Exportações centralizadas
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🤝 Contribuição

Para adicionar novos ícones:

1. Adicione o SVG em `src/icons/`
2. Rode `npm run generate`
3. Adicione à exportação em `src/index.ts`
4. Teste no seu projeto local

---

## 📃 Licença

Este projeto é privado e pertence à ABQM. Uso externo é restrito.
