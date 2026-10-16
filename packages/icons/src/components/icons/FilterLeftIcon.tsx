import type { SVGProps } from 'react';
const FilterLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 15.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m0-4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m0-4.5A.75.75 0 0 1 3.75 6h16.5a.75.75 0 1 1 0 1.5H3.75A.75.75 0 0 1 3 6.75"
    />
  </svg>
);
export default FilterLeftIcon;
