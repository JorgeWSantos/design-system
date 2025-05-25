import type { SVGProps } from 'react';
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <g clipPath="url(#Search_svg__a)">
      <path
        fill="#fff"
        fillOpacity={0.5}
        d="M8.807 7.758a4.875 4.875 0 1 0-1.048 1.048q.033.045.073.086l2.887 2.888a.75.75 0 0 0 1.061-1.06L8.893 7.831a1 1 0 0 0-.086-.075M9 4.875a4.125 4.125 0 1 1-8.25 0 4.125 4.125 0 0 1 8.25 0"
      />
    </g>
    <defs>
      <clipPath id="Search_svg__a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SearchIcon;
