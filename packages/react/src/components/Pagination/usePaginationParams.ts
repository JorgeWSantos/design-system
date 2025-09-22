import { useCallback, useState } from 'react';

export interface PaginationParams {
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  onPageSizeChange: (value: number) => void;
  onPageChange: (value: number) => void;
}

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 100;

export function usePaginationParams({
  useSearchParams,
}: {
  useSearchParams: () => [URLSearchParams, (params: URLSearchParams) => void];
}): PaginationParams {
  const [searchParams, setSearchParams] = useSearchParams();
  const _page = searchParams.get('pagina');
  const _pageSize = searchParams.get('total_pagina');

  const [page, setPage] = useState(_page ? Number(_page) : DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(
    _pageSize ? Number(_pageSize) : DEFAULT_PAGE_SIZE
  );

  const onPaginationChange = useCallback(
    (
      param: 'pagina' | 'total_pagina',
      value: number,
      setter: (v: number) => void,
      current: number
    ) => {
      setter(value ? Number(value) : current);

      const newParams = new URLSearchParams(searchParams);
      newParams.set(param === 'pagina' ? 'pagina' : 'total_pagina', String(value));
      setSearchParams(newParams);
    },
    [setSearchParams, searchParams]
  );

  const onPageSizeChange = (value: number) =>
    onPaginationChange('total_pagina', value, setPageSize, pageSize);

  const onPageChange = (value: number) =>
    onPaginationChange('pagina', value, setPage, page);

  return { page, pageSize, setPage, setPageSize, onPageSizeChange, onPageChange };
}
