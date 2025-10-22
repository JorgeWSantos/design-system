import React, { ComponentProps, useMemo } from 'react';
import { useDeviceType } from 'hooks/useDeviceType';
import {
  PaginationContainer,
  PageButton,
  ArrowButton,
  StyledText,
  ContainerPageSize,
  ContainerPageNavigation,
  ContainerPageOptions,
} from './styles';
import { colors } from '@abqm-ds/tokens';
import { CaretLeftFillIcon, CaretRightFillIcon } from '@abqm-ds/icons';

import { v4 as uuidv4 } from 'uuid';
import { Dropdown } from '@components/Dropdown';

interface PaginationProps extends ComponentProps<typeof PaginationContainer> {
  page: number;
  pageSize: number;
  totalPages: number;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onPageChange: (value: number) => void;
  onPageSizeChange: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  onPageChange,
  totalPages,
  isLoading,
  setIsLoading,
  onPageSizeChange,
  ...rest
}) => {
  const optionsSizePage = useMemo(
    () => [
      { label: '10', value: '10', id: '0' },
      { label: '50', value: '50', id: '1' },
      { label: '100', value: '100', id: '2' },
      { label: '150', value: '150', id: '3' },
      { label: '200', value: '200', id: '4' },
    ],
    []
  );

  if (!Number(pageSize)) return null;

  const { isTabletOrMobile } = useDeviceType();

  const handlePrev = () => {
    setIsLoading(true);
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    setIsLoading(true);
    if (page < totalPages) onPageChange(page + 1);
  };

  const renderPages = () => {
    const pages = [];
    const total = totalPages;
    if (total <= 1) return null;

    // Sempre mostra a primeira e última página
    const first = 1;
    const last = total;
    let start = Math.max(page - 1, 2);
    let end = Math.min(page + 1, total - 1);

    // Ajusta para sempre mostrar até 3 páginas próximas do selecionado
    if (page === first) {
      start = 2;
      end = Math.min(3, total - 1);
    } else if (page === last) {
      start = Math.max(total - 2, 2);
      end = total - 1;
    } else if (page === first + 1) {
      start = 2;
      end = Math.min(4, total - 1);
    } else if (page === last - 1) {
      start = Math.max(total - 3, 2);
      end = total - 1;
    }

    // Sempre mostra a primeira página
    pages.push(
      <PageButton
        key={first}
        onClick={() => onPageChange(first)}
        $selected={first === page}
        disabled={first === page}
      >
        <StyledText $selected={first === page}>{first}</StyledText>
      </PageButton>
    );

    // Ellipsis if needed
    if (start > 2) {
      pages.push(<StyledText key={uuidv4()}>...</StyledText>);
    }

    // Middle pages
    for (let i = start; i <= end; i++) {
      pages.push(
        <PageButton
          key={uuidv4()}
          onClick={() => {
            if (isLoading) return;
            setIsLoading(true);
            onPageChange(i);
          }}
          $selected={i === page}
          disabled={i === page}
        >
          <StyledText $selected={i === page}>{i}</StyledText>
        </PageButton>
      );
    }

    // Ellipsis if needed
    if (end < total - 1) {
      pages.push(<StyledText key={uuidv4()}>...</StyledText>);
    }

    // Always show last page if more than 1
    if (last > 1) {
      pages.push(
        <PageButton
          key={last}
          onClick={() => onPageChange(last)}
          $selected={last === page}
          disabled={last === page}
        >
          <StyledText $selected={last === page}>{last}</StyledText>
        </PageButton>
      );
    }

    return pages;
  };

  return (
    <PaginationContainer {...rest}>
      {totalPages > 1 && (
        <ContainerPageNavigation>
          {page > 1 && (
            <ArrowButton
              onClick={!isLoading ? handlePrev : undefined}
              disabled={isLoading}
            >
              <CaretLeftFillIcon fill={colors.white60} width={12} height={12} />
            </ArrowButton>
          )}

          {<ContainerPageOptions>{renderPages()}</ContainerPageOptions>}

          {page < totalPages && (
            <ArrowButton
              onClick={!isLoading ? handleNext : undefined}
              disabled={isLoading}
            >
              <CaretRightFillIcon fill={colors.white60} width={12} height={12} />
            </ArrowButton>
          )}
        </ContainerPageNavigation>
      )}

      <ContainerPageSize>
        <Dropdown
          style={{ width: '5rem' }}
          stylesContainerOptions={{
            maxHeight: '6.5rem',
            zIndex: 2,
          }}
          variant="quinary"
          openToTop={isTabletOrMobile}
          data={optionsSizePage}
          value={optionsSizePage.find((option) => option.value === String(pageSize))}
          setValue={(option) => {
            onPageSizeChange(Number(option.value));
          }}
        />
      </ContainerPageSize>
    </PaginationContainer>
  );
};

Pagination.displayName = 'Pagination';

export { Pagination };

export * from './usePaginationParams';
