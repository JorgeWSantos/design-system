import type { SVGProps } from 'react';
const CaretRightFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="m18.21 13.13-8.223 7.193c-.969.85-2.487.16-2.487-1.129V4.806a1.5 1.5 0 0 1 2.489-1.13l8.22 7.195a1.5 1.5 0 0 1 0 2.258z"
    />
  </svg>
);
export default CaretRightFillIcon;
