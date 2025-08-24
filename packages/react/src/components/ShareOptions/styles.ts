import { breakpointsPx, radii, space } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';
import { ShareOptionsVariantArrowTypes } from '.';

export const ShareOptionsContainer = styled.div<{
  $variantArrow: ShareOptionsVariantArrowTypes;
}>`
  position: absolute;
  right: 1.5rem;
  top: 3rem;
  z-index: 9999;
  background: white;
  border: ${radii.px} solid #eee;
  border-radius: ${space[2]};
  padding: ${space[4]};
  display: flex;
  gap: ${space[3]};
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 50%;
    right: unset;
    transform: translateX(-50%);
    border-width: 0 ${radii.md} ${radii.md} ${radii.md};
    border-style: solid;
    border-color: transparent transparent white transparent;

    ${({ $variantArrow }) =>
      $variantArrow === 'bottom' &&
      css`
        border-width: ${radii.md} ${radii.md} 0 ${radii.md};
        border-style: solid;
        border-color: white transparent transparent transparent;
        top: 4rem;
      `}
    display: block;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    top: unset;
    bottom: 4.5rem;
    left: 50%;
    right: unset;
    transform: translateX(-50%);

    &::after {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: 50%;
      right: unset;
      transform: translateX(-50%);
      border-width: 0 ${radii.md} ${radii.md} ${radii.md};
      border-style: solid;
      border-color: transparent transparent white transparent;

      ${({ $variantArrow }) =>
        $variantArrow === 'bottom' &&
        css`
          border-width: ${radii.md} ${radii.md} 0 ${radii.md};
          border-style: solid;
          border-color: white transparent transparent transparent;
          top: 4.4rem;
        `}
      display: block;
    }
  }
`;

export const WrapperWhatsapp = styled.a`
  text-decoration: none;
`;

export const IconButton = styled.div`
  background: none;
  border: none;
  padding: 0;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
