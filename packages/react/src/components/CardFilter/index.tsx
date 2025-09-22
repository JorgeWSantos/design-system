import { type ComponentProps } from 'react';

// import { XIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';

import { Container, CardFilterContent, Title, FilterText, StyledXIcon } from './styles';

interface CardFilterProps extends ComponentProps<typeof Container> {
  title: string;
  filter: string | boolean | number | undefined;
  onRemove: () => void;
}

const CardFilter = ({ title, filter, onRemove, ...rest }: CardFilterProps) => (
  <Container {...rest}>
    <Title>{title}</Title>
    <CardFilterContent>
      <FilterText>{filter}</FilterText>
      <StyledXIcon fill={colors.white50} onClick={onRemove} />
    </CardFilterContent>
  </Container>
);

CardFilter.displayName = 'CardFilter';

export { CardFilter };
