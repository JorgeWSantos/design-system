import type { SVGProps } from 'react';
const FullscreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fullscreen_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M2.25 1.5a.75.75 0 0 0-.75.75v6a.75.75 0 0 1-1.5 0v-6A2.25 2.25 0 0 1 2.25 0h6a.75.75 0 1 1 0 1.5zM15 .75a.75.75 0 0 1 .75-.75h6A2.25 2.25 0 0 1 24 2.25v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 0-.75-.75h-6A.75.75 0 0 1 15 .75M.75 15a.75.75 0 0 1 .75.75v6a.75.75 0 0 0 .75.75h6a.75.75 0 1 1 0 1.5h-6A2.25 2.25 0 0 1 0 21.75v-6A.75.75 0 0 1 .75 15m22.5 0a.75.75 0 0 1 .75.75v6A2.25 2.25 0 0 1 21.75 24h-6a.75.75 0 1 1 0-1.5h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 1 .75-.75"
      />
    </g>
    <defs>
      <clipPath id="fullscreen_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FullscreenIcon;
