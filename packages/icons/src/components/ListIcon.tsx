import type { SVGProps } from 'react';
const ListIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M3.75 18a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15A.75.75 0 0 1 3.75 6"
      clipRule="evenodd"
    />
  </svg>
);
export default ListIcon;
