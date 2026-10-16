import type { SVGProps } from 'react';
const FilterSquareFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#filter-square-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M3 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm.75 7.5h16.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 0 1 0-1.5M6 12.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5H6.75a.75.75 0 0 1-.75-.75m3 4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
      />
    </g>
    <defs>
      <clipPath id="filter-square-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FilterSquareFillIcon;
