import { XIcon } from '@abqm-ds/icons';
import { breakpointsPx, colors, fontSizes, fontWeights, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  height: 1.875rem;

  gap: 0.125rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 ${space[1.5]};
  gap: ${space[2]};
  height: 0.75rem;
  font-size: ${fontSizes.xxs};
  font-weight: ${fontWeights.regular};
  line-height: 0.75rem;
  text-align: center;
  color: ${colors.white75};

  @media (max-width: ${breakpointsPx.lg}) {
    color: ${colors.emeraldGreen75};
  }
`;

export const CardFilterContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.125rem 0.125rem 0.125rem 0.375rem;
  gap: ${space[1]};
  height: 1.125rem;
  background: ${colors.emeraldGreen25};
  border: 0.031rem solid ${colors.emeraldGreen25};
  border-radius: 0.25rem;
  white-space: nowrap;
  /* min-width: 0; */
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FilterText = styled.span`
  height: 0.875rem;
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.xxs};
  line-height: 0.875rem;
  color: ${colors.white75};
`;

export const StyledXIcon = styled(XIcon)`
  width: 0.75rem;
  min-width: 0.75rem;
  max-width: 0.75rem;

  min-height: 0.75rem;
  max-height: 0.75rem;
  height: 0.75rem;
  cursor: pointer;
`;
