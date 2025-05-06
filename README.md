### Geral

Node Version 22.14.0
NPM Version 10.9.2

Para Instalar os pacotes rodar 'npm i' na pasta raiz

Para testar, rodar 'npm run dev' na pasta raiz

## StoryBook

```
npx storybook init --builder @storybook/builder-vite --type react --use-npm
OR
npm create storybook@latest
```

### TurboRepo ChangeSet

```
npm i @changesets/cli
npx changeset init
```

Quando for adicionado ou alterado algo no changeset rodar o comando

```
npm run changeset // criará um versionamento
```

Para fazer real alteração rodar dos packages.json

```
npm run version-packages // alterará os packages.json e os changelog.md das libs selecionadas
```

Para publicar no NPM

```
npm run release // alterará os packages.json e os changelog.md das libs selecionadas
```

referências:
https://turborepo.com/docs/guides/publishing-libraries#publishing
https://github.com/changesets/changesets/blob/main/packages/cli/README.md
