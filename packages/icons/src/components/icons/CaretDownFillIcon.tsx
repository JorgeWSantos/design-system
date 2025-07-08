import type { SVGProps } from 'react';
const CaretDownFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.87 16.71 3.678 8.487C2.827 7.519 3.517 6 4.806 6h14.388a1.5 1.5 0 0 1 1.13 2.489l-7.195 8.22a1.5 1.5 0 0 1-2.258 0z"
    />
  </svg>
);
export default CaretDownFillIcon;
