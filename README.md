# Projeto Monorepo com TurboRepo, Storybook e Changesets

## 🛠️ Configurações Gerais

- **Node.js**: `v22.14.0`
- **NPM**: `v10.9.2`

### ▶️ Instalação

Na raiz do projeto, execute:

```bash
npm install
```

### 🚀 Execução Local

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

### 🚀 Desenvolvimento local em projeto externo ao monorepo com `npm link`

Para testar o pacote localmente em um projeto externo ao monorepo, siga os passos abaixo:

```bash
cd packages/react && npm link
cd packages/icons && npm link
cd packages/token && npm link
npm run dev
```

#### 🧪 No projeto externo (fora do monorepo):

```bash
npm link @abqm-ui2/tokens @abqm-ui2/react @abqm-ui2/icons
```

> ⚠️ Atenção: Executar npm install no projeto externo irá sobrescrever o link local e reinstalar a versão publicada no NPM.
> Caso isso ocorra, repita o processo de npm link para restaurar a referência ao pacote local.

---

## 📚 Storybook

É a ferramenta de documentação do código.

O projeto está localizado em packages/docs:

````

---

## ⚡ Changesets (Gerenciador de Versões NPM)

### Instalação

```bash
npm install @changesets/cli
npx changeset init
````

## 🚀 Publicação no NPM

Sempre que adicionar ou modificar algo em uma lib, execute:

```bash
npm run changeset
```

Um prompt será exibido com a lista de pacotes disponíveis para versionamento.

_Os pacotes modificados serão destacados automaticamente._

Isso criará um arquivo de versionamento na pasta `.changesets` que será usado nos próximos passos.

### 🎸 Versionamento

Para aplicar as versões nos `package.json` e gerar os arquivos `CHANGELOG.md`:

```bash
npm run version-packages
```

### 🎡 Publicação

Para publicar manualmente:

```bash
npm run release
```

> ⚙️ Um **workflow automatizado** também foi configurado para publicar no NPM automaticamente ao fazer push para o GitHub.

---

-

## 📎 Referências

- [TurboRepo: Publicando bibliotecas](https://turborepo.com/docs/guides/publishing-libraries#publishing)
- [Changesets: Documentação oficial](https://github.com/changesets/changesets/blob/main/packages/cli/README.md)
