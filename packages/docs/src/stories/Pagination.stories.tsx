import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, usePaginationParams, useSearchParamsMock } from '@abqm-ds/react';
import { colors } from '@abqm-ds/tokens';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    totalPages: 10,
    pageSize: 10,
    page: 1,
    isLoading: false,
    setIsLoading: () => {},
    onPageChange: () => {},
    onPageSizeChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente de paginação para navegação entre páginas de dados.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const { page, pageSize, onPageSizeChange, onPageChange } = usePaginationParams({
      useSearchParams: useSearchParamsMock,
    });

    return (
      <div
        style={{
          maxWidth: 600,
          backgroundColor: colors.emeraldGreen50,
          padding: 10,
          borderRadius: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Pagination
          {...args}
          page={page}
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          onPageChange={onPageChange}
        />
      </div>
    );
  },
};
