import type { SVGProps } from 'react';
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#Search_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M17.613 15.515a9.75 9.75 0 1 0-2.095 2.097h-.002q.067.09.147.173l5.775 5.775a1.5 1.5 0 0 0 2.123-2.121l-5.775-5.775a1.5 1.5 0 0 0-.173-.15zM18 9.75a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0"
      />
    </g>
    <defs>
      <clipPath id="Search_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SearchIcon;
