import { colors, space } from '@abqm-ui2/tokens';
import { Avatar } from '@components/Avatar';
import styled from 'styled-components';

export const UserDropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const AvatarDiv = styled(Avatar)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Dropdown = styled.div`
  display: flex;
  padding: 0rem ${space[2]} 0rem ${space[12]};
  align-items: center;
  justify-content: space-between;

  height: 2.25rem;
  width: 8.75rem;

  position: absolute;

  border-radius: 2.5rem;
  border: 1px solid ${colors.white25};
  background: ${colors.emeraldGreen25};
`;
