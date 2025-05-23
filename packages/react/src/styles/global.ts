// src/styles/global.ts
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '@abqm-ui2/tokens';

export const GlobalStyle = createGlobalStyle`
  /* 1. Box sizing */
*,
*::before,
*::after {
  box-sizing: border - box;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', Arial, Helvetica, sans - serif;
}

:root {
  height: 100vh;
}

/* 2. Remoção de margens e paddings padrões */
body,
  h1, h2, h3, h4, h5, h6,
  p, figure, blockquote,
  dl, dd {
  margin: 0;
  padding: 0;
}

/* 3. Remoção de lista padrão */
ul, ol {
  list-style:none;
  padding: 0;
  margin: 0;
}

/* 4. Base do body */
body {
  min-height: 100vh;
  line-height: 1.5;
  font-family: system - ui, sans - serif;
  background-color: #fff;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: ${fonts.default}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

/* 5. Imagens e mídias responsivas */
img,
  picture,
  video,
  canvas,
  svg {
  display: block;
  max-width: 100%;
  height: auto;
}

/* 6. Formulários sem estilos padrão */
input,
  button,
  textarea,
  select {
  font: inherit;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
}

/* 7. Links sem underline por padrão */
a {
  text-decoration: none;
  color: inherit;
}

/* 8. Tabelas com colapso de borda */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
