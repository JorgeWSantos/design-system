// Função para converter string para PascalCase
function toPascalCase(str) {
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/(?:^|\s|\b)(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/\s+/g, '');
}

export { toPascalCase };
