import type { SVGProps } from 'react';
const PlayCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#play-circle_svg__a)">
      <path d="M12 22.5a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21m0 1.5a12 12 0 1 0 0-24 12 12 0 0 0 0 24" />
      <path d="M9.407 7.582a.75.75 0 0 1 .78.057l5.25 3.75a.75.75 0 0 1 0 1.222l-5.25 3.75A.751.751 0 0 1 9 15.75v-7.5a.75.75 0 0 1 .406-.668" />
    </g>
    <defs>
      <clipPath id="play-circle_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PlayCircleIcon;
