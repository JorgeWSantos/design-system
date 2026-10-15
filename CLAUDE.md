@CLAUDE.base.md

# CLAUDE.md — design-system (`@abqm-ds/*`)

> Derivado de `bd_sql/PADRAO_CLAUDE/CLAUDE.react.md`, adaptado para biblioteca de
> componentes. As regras gerais vêm do `CLAUDE.base.md` ao lado (carregado pela linha
> `@CLAUDE.base.md` — não apague). 🚫 Não repita aqui regra do base: este arquivo é só o
> que é **deste** projeto.

## Visão geral

Monorepo (Turborepo + npm workspaces) do **design system da ABQM**, publicado no npm
como `@abqm-ds/*`. Não é um app: o produto é o pacote publicado. **Tudo que muda aqui
chega a 10 apps** na próxima atualização deles — `react-seqm-` `aovivo` · `calendarios` ·
`campeonato` · `eventos` · `financeiro` · `login` · `participacoes` · `ranking` ·
`resultados` e o `site-abqm` (todos com `^4.x`, `link:monorepo` e `update:ui`).

| Pacote | Publicado | O que é |
|---|---|---|
| `packages/react` → `@abqm-ds/react` | ✅ | componentes, hooks (`useDeviceType`, `useOrientation`…), `Toast`, layouts desktop/mobile |
| `packages/icons` → `@abqm-ds/icons` | ✅ | ícones, logos e imagens SVG como componentes React (gerados) |
| `packages/tokens` → `@abqm-ds/tokens` | ✅ | `colors`, `fonts`, `fontSizes`, `fontWeights`, `lineHeights`, `radii`, `space`, `breakpoints`/`breakpointsPx` |
| `packages/docs` → `@abqm-ds/docs` | 🚫 privado | Storybook — documentação, publicado no GitHub Pages |
| `packages/ts-config` | 🚫 privado | `base.json` / `react.json` compartilhados |

| React | Linguagem | Build | Estilo | Docs | Versionamento |
|---|---|---|---|---|---|
| 19.1 | TS 5.8 strict | tsup 8 (esm + cjs + dts) | styled-components 6 | Storybook 9 | Changesets 2 |

```bash
npm run dev                           # turbo: tsup --watch nos pacotes + Storybook (porta 6006)
npm run build                         # build de todos os pacotes (dist/ + storybook-static/)
npm run build -w @abqm-ds/react       # só um pacote — o app linkado lê o dist/
npx eslint <arquivos> · npx tsc --noEmit -p packages/react   # ✅ limpos antes de dar por pronto
npm run generate:icons                # SVG → componentes React (pacote icons)
npm run changeset · npm run version-packages                  # ver "Versionamento e release"
npm run link:monorepo                 # npm link dos 3 pacotes para um app local
```

⚠️ O `npm run lint` de cada pacote roda `eslint --fix` e **altera arquivos**: para só
checar, use `npx eslint` sem `--fix`.

Node `22.14.0` · npm `10.9`. Não há suíte de testes de unidade: o "pronto" é lint +
`tsc` + `build` limpos e o componente conferido no Storybook **e** num app consumidor
linkado, desktop e mobile.

## Estrutura e aliases

```
packages/react/src/
  components/<Comp>/   index.tsx · styles.ts · types.ts   (+ subcomponentes em subpastas)
  componentsSEQM/      componentes específicos do SEQM (TableSEQM, InfoEventDetails…)
  hooks/ · utils/ · styles/ (GlobalStyle) · types/ · assets/
  index.tsx            barrel — todo export público passa por aqui
packages/icons/src/
  icons/ · iconsSEQM/ · logos/ · images/   SVG de origem
  components/{icons,iconsSEQM,logos,images}/   ⚙️ gerado pelo generate:icons
  index.ts             ⚙️ gerado — exporta só as 4 subpastas
packages/tokens/src/   um arquivo por grupo de token, reexportado no index.ts
packages/docs/src/stories/<Comp>.stories.tsx
```

Aliases do `@abqm-ds/react` (só no `packages/react/tsconfig.json`; o tsup/esbuild resolve
por ele): `@components/*` · `@componentsSEQM/*` · `@styles/*` · `@assets/*` · `hooks/*` ·
`types/*` · `utils`. ✅ Sempre alias — 🚫 import relativo profundo.

## Componentes

- ✅ Uma pasta por componente com `index.tsx` + `styles.ts` (+ `types.ts` quando há tipos
  públicos). Export **nomeado** (`export const Comp`) com `Comp.displayName = 'Comp'` e
  reexport em `src/index.tsx` — o que não está no barrel não chega aos apps, e o barrel
  usa `export *`, que **ignora `export default`** (diferente da regra dos apps).
- ✅ Prop de estilo do styled-components com prefixo `$` (`$size`, `$variant`): sem `$` a
  prop vaza para o DOM e gera warning no console do app.
- ✅ Cor, fonte, espaçamento e breakpoint de `@abqm-ds/tokens`. 🚫 Valor mágico.
- ✅ Prop nova é **opcional e com default que mantém o comportamento atual**. Mudou o
  comportamento de componente compartilhado (ex.: `Tooltip`, que é usado por `Avatar`,
  `AnimalImageWithTooltip` e `UserDropdown`)? Diga ao usuário quais componentes e apps
  são afetados.
- 🚫 Remover ou renomear componente, prop ou export, ou mudar tipo de prop de forma
  incompatível, sem ⛔ — quebra os apps na próxima atualização (é `major`).
- ✅ Componente novo ou prop nova ganha story em
  `packages/docs/src/stories/<Comp>.stories.tsx` (descrição em `parameters.docs` + uma
  story do caso novo). 💡 JSDoc nas props novas — hoje só ~5 componentes têm.
- ✅ Toda interação funciona no toque: nada que só abre com hover. O `Tooltip` abre por
  `mousemove` **e** clique, e fecha com `mouseleave`, clique fora ou qualquer scroll; o
  conteúdo vai por portal no `body` com posição `fixed` calculada pelo primeiro filho.
- 🚫 `import.meta.env` novo dentro da lib sem ⛔: a variável passa a ser obrigação de
  todo app consumidor. Prefira receber o valor por prop.

## Ícones

SVG novo entra em `packages/icons/src/{icons,iconsSEQM,logos,images}/` e vira componente
com `npm run generate:icons` (svgr → `scripts/move-icons.js`, que grava em
`src/components/<pasta>/` e reescreve os `index.ts`). 🚫 Editar à mão os `.tsx` gerados —
o próximo `generate:icons` sobrescreve.

🚫 **Nunca criar SVG de ícone** (desenhar, inventar ou copiar paths de Bootstrap Icons e
similares). Todo SVG que entra em `packages/icons/src/` vem do **design system no Figma**.
Precisa de um ícone que não existe no pacote? Pare e peça ao dev para pegá-lo no Figma e
fornecer o SVG — só então rode `generate:icons`. Não improvise substituto, nem inline no
componente.

## Uso local num app (npm link)

1. Aqui: `npm run link:monorepo`. No app: `npm run link:monorepo`.
2. O app — e o Storybook, via symlink do workspace — lê o **`dist/`**: depois de alterar,
   rode o build do pacote (ou `npm run dev`, que fica em watch). Sem build, os dois
   continuam com o código antigo.
3. ⚠️ `npm install` no app desfaz o link — avise antes e refaça o link depois.

Depois de publicado, o app atualiza com `npm run update:ui` (dentro do range `^4`).

## Versionamento e release

**Processo para subir versão** (na branch `feat/*`/`fix/*`, nunca na `master`):

1. Lint + `tsc` limpos (ver comandos acima).
2. **Changeset**: `npm run changeset` ou um `.md` em `.changeset/` com o bump de cada
   pacote alterado (`'@abqm-ds/react': patch`) e, de resumo, o subject do commit
   (`fix(Comp): 🐛 Corrigirá …`) — ele vira a linha do `CHANGELOG.md`. O changeset vai
   **no mesmo commit** da alteração.
3. `npm run version-packages`: consome os changesets, sobe a versão no `package.json` e
   escreve o `CHANGELOG.md`. O resultado (com a remoção do changeset) vai num commit
   próprio: `release(<pacote>): 🦋 Nova versão X.Y.Z` (scope obrigatório — monorepo).
4. Merge fast-forward na `master` (`git switch master && git merge --ff-only <branch>`) e
   push da `master` e da branch. ⛔ É esse push que publica no npm (ver abaixo).
5. Confira no GitHub Actions o `release.yml`: pacote publicado e tag criada.

- Bump: o histórico usa `patch` até para feature compatível (nunca houve `minor`);
  `major` só para quebra (⛔) — a última foi a 4.0.0.
- **Quem publica é o CI.** Push na `master` dispara `.github/workflows/release.yml`
  (`changesets/action`): sem changeset pendente roda `npm run release` (build +
  `changeset publish`), publica no npm e cria a tag `@abqm-ds/<pacote>@X.Y.Z`; com
  changeset pendente, abre o PR "Version Packages". O `deploy.yaml` publica o Storybook
  no GitHub Pages no mesmo push.
- ⛔ Push na `master` = publicação no npm para todos os apps (base §4).
  🚫 `npm run release` / `changeset publish` local.
- Branches: trabalho em `feat/*`/`fix/*` → merge fast-forward na `master` → push. O
  histórico tem commits direto na `master` — não siga (base §5). A `develop` existe mas
  está defasada e fora do fluxo de release.

## Dívidas conhecidas

Existem no código e **não são padrão** — não copie. Mexeu perto? Aponte; corrigir é ⛔.

- `packages/react/.env` está versionado (sem `.env` no `.gitignore`) e, como o
  `package.json` não tem `files`, **vai junto no pacote publicado no npm** (o tarball leva
  também `src/` e os configs). Hoje só tem `VITE_URL_CONSULTA_ANIMAL` (URL pública, sem
  credencial) e nem chega ao build: o tsup mantém o `import.meta.env` e quem resolve é o
  Vite do app. 🚫 Segredo nesse arquivo — seria publicado no npm.
- `TooltipContentComponent` (tooltip do animal) lê `import.meta.env.VITE_URL_CONSULTA_ANIMAL`:
  depende de o app declarar a env, e no build CJS vira `import_meta = {}` — o clique
  lança `TypeError`.
- `packages/react/tsup.config.ts` diz "Only ESM", mas o script `build` passa
  `--format esm,cjs` e é ele que vale.
- `AnimalTableDataWithouTooltip` tem erro de digitação no nome — é API pública, não
  renomeie sem ⛔.
- `packages/icons/src/components/` tem 53 `.tsx` soltos na raiz (52 duplicados das
  subpastas) que o `index.ts` não exporta — resto do layout antigo.
- Fora do padrão de componente: `DateTimePicker` (export nomeado **e** default),
  `ShareOptions`, `Toast` e `ElementList` sem `displayName`; 4 styled com prop sem `$`
  (`MultiStep`, `RadioGroup`); ~19 cores literais em vez de token.
- `packages/docs`: `eslint.config.js.old` versionado e sem uso; `vitest.workspace.ts` e
  deps de vitest/playwright são resto de setup (não há script de teste).
- `README.md` da raiz tem a seção do Storybook quebrada (bloco de código vazio).

## O que NÃO fazer neste projeto

🚫 Quebrar API pública (prop, export, componente) sem ⛔ · 🚫 componente fora do barrel
`src/index.tsx` · 🚫 prop de estilo sem `$` · 🚫 valor mágico no lugar de token ·
🚫 interação só por hover · 🚫 editar ícone gerado à mão · 🚫 publicar local
(`npm run release`) · 🚫 `npm run lint` achando que só checa (ele aplica `--fix`) ·
🚫 `console.log` novo
