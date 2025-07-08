import type { SVGProps } from 'react';
const CaretLeftFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.79 13.13 8.223 7.193c.969.85 2.487.16 2.487-1.129V4.806a1.5 1.5 0 0 0-2.488-1.13l-8.22 7.195a1.5 1.5 0 0 0 0 2.258z"
    />
  </svg>
);
export default CaretLeftFillIcon;
