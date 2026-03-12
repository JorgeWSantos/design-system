import { ArrowRightSquareIcon, LogoSeqmMobileIcon } from '@abqm-ds/icons';
import { colors, fontSizes, radii, space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const StyledSideBarDesktopCompact = styled.div`
  display: flex;
  width: 3.125rem;
  max-width: 3.125rem;
  padding-top: 0.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Divisor = styled.div`
  width: 3.125rem;
  height: 0.0625rem;
  flex-shrink: 0;
  border-top: 0.5px solid ${colors.white25};
`;

export const CompactHeader = styled(LogoSeqmMobileIcon)`
  width: 100%;
  height: 2.01306rem;
  align-self: flex-start;
`;

export const CompactUserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[1]};
  cursor: pointer;
`;

export const CompactUserName = styled(Text).attrs({
  fontWeight: 'regular',
  fontSize: 'ssm',
  lineHeight: 'tight',
})`
  color: ${colors.white75};
  width: 100%;
  text-align: center;
  max-width: 3.125rem;
  word-break: break-word;
`;

export const ExpandMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[1]};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.white75};
  padding: 0;
`;

export const ExpandMenuButtonIconBox = styled.span`
  width: 1.125rem;
  height: 1.125rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ExpandMenuButtonIcon = styled(ArrowRightSquareIcon)`
  width: 1.125rem;
  height: 1.125rem;

  path {
    fill: ${colors.white75};
  }
`;

export const ExpandMenuButtonText = styled.span`
  font-size: ${fontSizes.xs};
  line-height: 1;
  color: ${colors.white75};
  text-transform: lowercase;
`;
