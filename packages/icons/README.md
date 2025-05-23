# @abqm-ui2/icons

> Biblioteca de ícones em React baseada em SVGs personalizados da ABQM.

Esta biblioteca fornece ícones SVG como componentes React, permitindo o uso simples, estilização via props, e integração fluida com projetos em React ou design systems internos.

---

## 📦 Instalação

No seu projeto React (com suporte a pacotes do monorepo):

```bash
yarn add @abqm-ui2/icons
# ou
npm install @abqm-ui2/icons
```

---

### ⚙️ Como Funciona

1. Adicione os arquivos **SVG** que deseja converter na pasta src/icons:

   > OBS: a nomenclaruta dos icones deve ser capitalized, ex:
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
   - Em seguida, são organizados e movidos para a pasta `componentes`.

> 💡 Esse processo evita que todos os ícones existentes sejam modificados a cada nova adição. O script verifica se um ícone já existe e somente cria ou atualiza os que são realmente novos ou alterados.

---

## 💡 Como Usar

Importe o componente do ícone desejado diretamente:

```tsx
import { Facebook, Instagram, Youtube, Horse } from '@abqm-ui2/icons';

export function Example() {
  return (
    <div style={ display: 'flex', gap: 16 }>
      <Facebook width={24} height={24} fill="#1877F2" />
      <Instagram width={24} height={24} fill="#E1306C" />
      <Youtube width={24} height={24} fill="#FF0000" />
      <Horse width={32} height={32} />
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
│   ├── _temp/           # Svgs Temporários
│   └── index.ts         # Exportações centralizadas
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧪 Exemplo de Estilização via Tailwind

```tsx
<FacebookIcon className="w-6 h-6 text-blue-600" />
```

---

## 🤝 Contribuição

Para adicionar novos ícones:

1. Adicione o SVG em `src/icons/`
2. Rode `npm run generate`
3. Adicione ao a exportação em `src/index.ts`
4. Teste no seu projeto local

---

## 📃 Licença

Este projeto é privado e pertence à ABQM. Uso externo é restrito.
