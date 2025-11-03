import React, { useEffect } from 'react';

interface UseAutoScrollProps {
  tableRef: React.RefObject<HTMLTableElement | null>;
  autoScroll: boolean;
}

const useAutoScroll = ({ tableRef, autoScroll }: UseAutoScrollProps) => {
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
