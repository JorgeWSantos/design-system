import React, { useEffect, useState } from 'react';

interface UseAutoScrollProps {
  tableRef: React.RefObject<HTMLTableElement | null>;
  autoScroll: boolean;
  setAutoScroll: (value: boolean) => void;
}

const useAutoScroll = ({ tableRef, autoScroll, setAutoScroll }: UseAutoScrollProps) => {
  useEffect(() => {
    if (!tableRef.current) return;

    const handleUserScroll = () => {
      setAutoScroll(false);
    };

    const tableElem = tableRef.current;
    tableElem.addEventListener('wheel', handleUserScroll, { passive: true });
    tableElem.addEventListener('touchmove', handleUserScroll, { passive: true });

    return () => {
      tableElem.removeEventListener('wheel', handleUserScroll);
      tableElem.removeEventListener('touchmove', handleUserScroll);
    };
  }, [tableRef]);

  useEffect(() => {
    if (!tableRef.current || !autoScroll) {
      return;
    }

    const tbody = tableRef.current?.querySelector('tbody');
    const currentPlayerRow = tbody?.querySelector('.currentplayer-styles');

    if (currentPlayerRow) {
      currentPlayerRow.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [tableRef.current, autoScroll]);
};

export { useAutoScroll };
