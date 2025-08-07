// Função utilitária para converter número em formato de dinheiro BRL
// exemplo: 123456.789 -> R$ 123.456,79
export function formatToBRL({
  value,
  fallback,
}: {
  value?: number | string | null;
  fallback?: string;
}): string {
  if (value === undefined || value === null || value === '' || isNaN(Number(value))) {
    return fallback || '-';
  }
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
}
