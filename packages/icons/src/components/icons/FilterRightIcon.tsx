import type { SVGProps } from 'react';
const FilterRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 15.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 .75-.75m0-4.5a.75.75 0 0 0-.75-.75H9.75a.75.75 0 1 0 0 1.5h10.5a.75.75 0 0 0 .75-.75m0-4.5a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 .75-.75"
    />
  </svg>
);
export default FilterRightIcon;
