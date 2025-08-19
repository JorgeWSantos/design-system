import type { SVGProps } from 'react';
const FilterCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#filter-circle_svg__a)">
      <path d="M12 22.5a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21m0 1.5a12 12 0 1 0 0-24 12 12 0 0 0 0 24" />
      <path d="M10.5 17.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m-3-4.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m-3-4.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 1 1 0 1.5H5.25a.75.75 0 0 1-.75-.75" />
    </g>
    <defs>
      <clipPath id="filter-circle_svg__a">
        <path fill={props?.fill ? props.fill : 'currentColor'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FilterCircleIcon;
