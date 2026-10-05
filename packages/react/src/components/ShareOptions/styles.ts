import { breakpointsPx, radii, space } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';
import { ShareOptionsAnchorTypes, ShareOptionsVariantArrowTypes } from '.';

/**
 * Ancora o popover logo abaixo do botão que o abriu, em vez de fixá-lo acima do
 * rodapé. Usado quando o botão de compartilhar vive no HeaderMobileNavigator.
 */
const anchoredToButton = css`
  /* O "&&" dobra a especificidade: o stylis emite as declarações soltas do
     componente antes dos blocos @media, então sem isso o bloco mobile venceria. */
  && {
    top: calc(100% + 0.5rem);
    right: 0;
    bottom: unset;
    left: unset;
    transform: none;
  }

  &&::after {
    top: -0.5rem;
    right: 1rem;
    left: unset;
    transform: translateX(50%);
    border-width: 0 ${radii.md} ${radii.md} ${radii.md};
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

export const ShareOptionsContainer = styled.div<{
  $variantArrow: ShareOptionsVariantArrowTypes;
  $anchor: ShareOptionsAnchorTypes;
}>`
  position: absolute;
  right: 5rem;
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
          top: 4rem;
        `}
      display: block;
    }
  }

  /* Declarado por último para vencer o bloco mobile acima na cascata. */
  ${({ $anchor }) => $anchor === 'button' && anchoredToButton}
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
