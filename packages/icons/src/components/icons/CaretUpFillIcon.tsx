import type { SVGProps } from 'react';
const CaretUpFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.87 7.29-7.194 8.221C2.827 16.482 3.517 18 4.806 18h14.388a1.5 1.5 0 0 0 1.13-2.488l-7.195-8.22a1.5 1.5 0 0 0-2.259 0z"
    />
  </svg>
);
export default CaretUpFillIcon;
