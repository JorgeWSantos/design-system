import { colors, space, radii } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 14px 0 ${space[3]};
  height: 3.875rem;
  position: relative;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: ${space[3]};
  height: 2.25rem;
  flex-grow: 1;
  position: relative;
  z-index: 1;
`;

export const Tab = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: ${space[1]} ${space[4]};
  height: 1.5rem;
  border-width: ${radii.px} ${radii.px} 0 ${radii.px};
  border-style: solid;
  border-radius: ${radii.sm} ${radii.sm} 0 0;
  text-align: center;
  background: none;
  cursor: pointer;
  border-color: ${colors.white25};
  z-index: 2;

  p {
    min-width: max-content;
  }

  ${({ active }) =>
    active &&
    css`
      border-color: ${colors.white85};
    `}
`;

export const TabsBarLine = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: ${radii.px} solid ${colors.white25};
`;

interface TabStateFirstProps {
  $active?: boolean;
  $secondIsNotSelected?: boolean;
}

interface TabStateOthersProps {
  $active?: boolean;
  $isOtherSelected?: boolean;
  $nextIsSelected?: boolean;
  $isFirstSelected?: boolean;
}

export const TabFirst = styled.div<TabStateFirstProps>`
  width: fit-content;
  border-bottom: ${({ $active }) =>
    $active ? 'none' : `${radii.px} solid ${colors.white25}`};

  color: ${({ $active }) => ($active ? `${colors.white85}` : `${colors.white50}`)};
  padding: ${({ $active }) => ($active ? '0' : `0 ${space[1]} 0 0`)};

  ${({ $secondIsNotSelected, $active }) =>
    $secondIsNotSelected &&
    !$active &&
    css`
      padding-right: 0;
    `}
`;

export const TabOther = styled.div<TabStateOthersProps>`
  border-bottom: ${({ $active }) =>
    $active ? 'none' : `${radii.px} solid ${colors.white25}`};

  color: ${({ $active }) => ($active ? `${colors.white85}` : `${colors.white50}`)};
  padding: ${({ $active }) => ($active ? '0' : `0 ${space[1]} 0 ${space[1]}`)};

  ${({ $isFirstSelected }) =>
    $isFirstSelected &&
    css`
      padding-right: 0;
    `}

  ${({ $isOtherSelected }) =>
    $isOtherSelected &&
    css`
      padding-right: 0;
    `};

  ${({ $isOtherSelected, $nextIsSelected }) =>
    $isOtherSelected &&
    $nextIsSelected &&
    css`
      padding-right: ${space[1]};
    `};
`;

export const ChildrenWrapper = styled.div<{
  $extendThisDiv: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 0.5rem;
  /* width: 100%; */
  height: 36px;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  ${({ $extendThisDiv }) =>
    $extendThisDiv &&
    css`
      width: 100%;
    `}
`;
