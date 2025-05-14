import { theme } from '../../styles';
import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  padding: ${theme.space[6]};
  border-radius: ${theme.radii.md};
  background-color: ${theme.colors.gray600};
  border: 1px solid ${theme.colors.gray700};
`;
