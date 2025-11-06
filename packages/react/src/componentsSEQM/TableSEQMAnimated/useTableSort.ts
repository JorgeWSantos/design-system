import { useState } from 'react';
import { TableSEQMAnimatedProps } from './types';

export const useTableSort = ({ columns, data }: TableSEQMAnimatedProps) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Função para ordenar os dados mantendo referência dos objetos
  const getSortedData = () => {
    if (!sortKey) return data;

    const col = columns.find((c) => c.key === sortKey);
    if (!col) return data;

    // Algoritmo de ordenação estável (decorate-sort-undecorate)
    const decorated = (data || []).map((item, idx) => ({
      item,
      idx,
      value: item[sortKey]?.valueToSort || item[sortKey]?.value,
    }));

    decorated.sort((a, b) => {
      const aValue = a.value;
      const bValue = b.value;

      // Tratar nulos/undefined sempre no final
      if (aValue == null && bValue == null) return a.idx - b.idx;
      if (aValue == null) return sortOrder === 'asc' ? 1 : -1;
      if (bValue == null) return sortOrder === 'asc' ? -1 : 1;

      // Números
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      // Datas
      if (aValue instanceof Date && bValue instanceof Date) {
        return sortOrder === 'asc'
          ? aValue.getTime() - bValue.getTime()
          : bValue.getTime() - aValue.getTime();
      }

      // Strings numéricas ordinais (ex: '1°', '10°')
      const ordinalRegex = /^\s*(\d+)[°º]?\s*$/;
      const aMatch = typeof aValue === 'string' && aValue.match(ordinalRegex);
      const bMatch = typeof bValue === 'string' && bValue.match(ordinalRegex);

      if (aMatch && bMatch) {
        const aNum = parseInt(aMatch[1], 10);
        const bNum = parseInt(bMatch[1], 10);
        return sortOrder === 'asc' ? aNum - bNum : bNum - aNum;
      }

      // Strings (case insensitive)
      const aStr = String(aValue).toLocaleLowerCase();
      const bStr = String(bValue).toLocaleLowerCase();
      if (aStr < bStr) return sortOrder === 'asc' ? -1 : 1;
      if (aStr > bStr) return sortOrder === 'asc' ? 1 : -1;
      return a.idx - b.idx; // mantém ordem original se iguais
    });

    // Undecorate: retorna apenas os objetos originais, mantendo referência
    return decorated.map((d) => d.item);
  };

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = getSortedData();

  return {
    sortedData,
    sortKey,
    sortOrder,
    handleSort,
  };
};
