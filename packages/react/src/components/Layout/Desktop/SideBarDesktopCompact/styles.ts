import { ArrowRightSquareIcon, LogoSeqmMobileIcon } from '@abqm-ds/icons';
import { colors, fontSizes, radii, space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const StyledSideBarDesktopCompact = styled.div`
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompactHeader = styled(LogoSeqmMobileIcon)`
  width: 100%;
  height: 2.01306rem;
  align-self: stretch;
  margin-bottom: ${space[4]};
`;

export const CompactUserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[3]};
  padding-bottom: ${space[4]};
  border-top: ${radii.px} solid ${colors.white25};
  border-bottom: ${radii.px} solid ${colors.white25};
  padding-top: ${space[4]};
  margin-bottom: ${space[4]};
`;

export const CompactUserName = styled(Text).attrs({
  fontWeight: 'regular',
  fontSize: 'ssm',
  lineHeight: 'tight',
})`
  color: ${colors.white75};
  width: 100%;
  text-align: center;
  max-width: 3.25rem;
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
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ExpandMenuButtonIcon = styled(ArrowRightSquareIcon)`
  width: 1.25rem;
  height: 1.25rem;

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
