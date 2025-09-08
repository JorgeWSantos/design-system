// Formata número com separador de milhar como ponto (ex: 2.414)
export function formatNumberWithDot(value: number | string): string {
  if (typeof value === 'string') value = Number(value);
  if (isNaN(value)) return '-';
  return value.toLocaleString('pt-BR');
}
