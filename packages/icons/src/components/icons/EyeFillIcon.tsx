import type { SVGProps } from 'react';
const EyeFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill={props?.fill ? props.fill : '#1E1E1E'} d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0" />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M0 12s4.5-8.25 12-8.25S24 12 24 12s-4.5 8.25-12 8.25S0 12 0 12m12 5.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5"
    />
  </svg>
);
export default EyeFillIcon;
