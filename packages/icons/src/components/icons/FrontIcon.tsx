import type { SVGProps } from 'react';
const FrontIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#front_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3H3a3 3 0 0 1-3-3zm7.5 15v3A1.5 1.5 0 0 0 9 22.5h12a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 21 7.5h-3V15a3 3 0 0 1-3 3z"
      />
    </g>
    <defs>
      <clipPath id="front_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FrontIcon;
