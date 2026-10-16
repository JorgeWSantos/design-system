import type { SVGProps } from 'react';
const FilterSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#filter-square_svg__a)">
      <path d="M21 1.5A1.5 1.5 0 0 1 22.5 3v18a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 21V3A1.5 1.5 0 0 1 3 1.5zM3 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z" />
      <path d="M9 17.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m-3-4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5H6.75a.75.75 0 0 1-.75-.75m-3-4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.75A.75.75 0 0 1 3 8.25" />
    </g>
    <defs>
      <clipPath id="filter-square_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FilterSquareIcon;
