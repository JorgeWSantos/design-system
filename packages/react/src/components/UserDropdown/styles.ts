import { colors, radii, space } from '@abqm-ds/tokens';
import { Avatar } from '@components/Avatar';
import styled from 'styled-components';

export const UserDropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 12.375rem;
`;

export const UserDropdownContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;

  cursor: pointer;
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
  border: ${radii.px} solid ${colors.white25};
  background: ${colors.emeraldGreen25};
`;

export const DivTooltip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 0.25rem; */
  padding: ${space[1]};
  width: 8rem;
`;

export const ButtonTooltip = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 2rem;
  border-radius: ${radii.xs};
  background-color: ${colors.white};

  padding: ${space[1]} ${space[2]};

  transition: filter 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9) grayscale(1.2);
  }
`;
