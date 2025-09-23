import { useState } from 'react';

// Simula o comportamento básico do useSearchParams do react-router-dom
export function useSearchParamsMock(): [
  URLSearchParams,
  (params: URLSearchParams) => void
] {
  const [params, setParams] = useState<URLSearchParams>(new URLSearchParams());

  const updateParams = (newParams: URLSearchParams) => {
    setParams(newParams);
  };

  return [params, updateParams];
}
