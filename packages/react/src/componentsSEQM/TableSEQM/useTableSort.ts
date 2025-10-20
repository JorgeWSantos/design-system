import { useState } from 'react';
import { TableSEQMProps } from './types';

export const useTableSort = ({ columns, data }: TableSEQMProps) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Função para ordenar os dados
  const getSortedData = () => {
    if (!sortKey) return data;

    const col = columns.find((c) => c.key === sortKey);

    if (!col) return data;

    const sorted = [...(data || [])].sort((a, b) => {
      const aValue = a[sortKey]?.valueToSort || a[sortKey]?.value;
      const bValue = b[sortKey]?.valueToSort || b[sortKey]?.value;

      // Tratar nulos/undefined sempre no final
      if (aValue == null && bValue == null) return 0;
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

      // Strings numéricas ordinais (ex: '1°', '10°')
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
      return 0;
    });

    return sorted;
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
