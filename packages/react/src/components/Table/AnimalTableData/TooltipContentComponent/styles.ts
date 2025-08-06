import styled from 'styled-components';

/// tooltip
export const TooltipContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  .tooltip-image,
  .tooltip-svg {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

export const TooltipContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 10rem;
  overflow: hidden;

  padding: 0.25rem 0rem;
`;

export const ImagesAchivements = styled.div`
  display: flex;
  flex-direction: row;
  width: 9.75rem;
  height: 5rem;
  /* padding-left: 0.5rem; */
  align-items: center;
  gap: 1rem;
  overflow-x: scroll;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }
`;
