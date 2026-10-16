import type { SVGProps } from 'react';
const FilterCircleFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#filter-circle-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24M5.25 7.5h13.5a.75.75 0 1 1 0 1.5H5.25a.75.75 0 0 1 0-1.5m2.25 5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m3 4.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
      />
    </g>
    <defs>
      <clipPath id="filter-circle-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FilterCircleFillIcon;
