import type { SVGProps } from 'react';
const DashIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 12a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5H6.75A.75.75 0 0 1 6 12"
    />
  </svg>
);
export default DashIcon;
