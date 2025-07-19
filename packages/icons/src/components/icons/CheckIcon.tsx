import type { SVGProps } from 'react';
const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.455 7.455A1.125 1.125 0 0 1 18.06 9.03l-5.985 7.485a1.124 1.124 0 0 1-1.62.03l-3.969-3.969a1.125 1.125 0 1 1 1.59-1.59l3.141 3.14 5.21-6.638.03-.033z"
    />
  </svg>
);
export default CheckIcon;
