import type { SVGProps } from 'react';
const CaretLeftFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 18"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="m.79 10.13 8.223 7.193c.969.85 2.487.16 2.487-1.129V1.806A1.5 1.5 0 0 0 9.012.676L.792 7.87a1.5 1.5 0 0 0 0 2.26z"
    />
  </svg>
);
export default CaretLeftFillIcon;
