// (AAAA-MM-DD) para o formato ISO (DD/MM/AAAA)
export const convertToBrazilDate = (dataToParse: string) => {
  // Cria um objeto Date a partir da string ISO
  const data = new Date(dataToParse);

  // Extrai o dia, mês e ano
  const dia = String(data.getDate()).padStart(2, '0'); // Garantir dois dígitos
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
  const ano = data.getFullYear();

  // Retorna a data no formato brasileiro (DD/MM/AAAA)
  return `${dia}/${mes}/${ano}`;
};
