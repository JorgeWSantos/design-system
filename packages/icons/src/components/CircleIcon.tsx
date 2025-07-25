import type { SVGProps } from 'react';
const CircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M12 22.5a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21m0 1.5a12 12 0 1 0 0-24 12 12 0 0 0 0 24"
      />
    </g>
    <defs>
      <clipPath id="circle_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CircleIcon;
