import type { SVGProps } from 'react';
const ArrowLeftSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow-left-square_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        fillRule="evenodd"
        d="M22.5 3A1.5 1.5 0 0 0 21 1.5H3A1.5 1.5 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h18a1.5 1.5 0 0 0 1.5-1.5zM0 3a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm17.25 8.25a.75.75 0 1 1 0 1.5H8.56l3.221 3.219a.752.752 0 0 1-1.062 1.062l-4.5-4.5a.75.75 0 0 1 0-1.062l4.5-4.5a.75.75 0 1 1 1.062 1.062l-3.22 3.219z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="arrow-left-square_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowLeftSquareIcon;
