import type { SVGProps } from 'react';
const CaretRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 7 10"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#fff'}
      fillOpacity={0.85}
      d="M6.105 5.565 1.994 9.162A.75.75 0 0 1 .75 8.597V1.403A.75.75 0 0 1 1.994.838l4.11 3.597a.75.75 0 0 1 0 1.13z"
    />
  </svg>
);
export default CaretRightIcon;
