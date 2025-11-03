import React, { useEffect } from 'react';

interface UseAutoScrollProps {
  tableRef: React.RefObject<HTMLTableElement | null>;
}

const useAutoScroll = ({ tableRef }: UseAutoScrollProps) => {
  useEffect(() => {
    if (!tableRef.current) {
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
  }, [tableRef.current]);
};

export { useAutoScroll };
