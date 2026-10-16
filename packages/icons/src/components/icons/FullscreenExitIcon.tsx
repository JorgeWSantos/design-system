import type { SVGProps } from 'react';
const FullscreenExitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fullscreen-exit_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M8.25 0A.75.75 0 0 1 9 .75v6A2.25 2.25 0 0 1 6.75 9h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 0 .75-.75v-6A.75.75 0 0 1 8.25 0m7.5 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 0 .75.75h6a.75.75 0 1 1 0 1.5h-6A2.25 2.25 0 0 1 15 6.75v-6a.75.75 0 0 1 .75-.75M0 15.75A.75.75 0 0 1 .75 15h6A2.25 2.25 0 0 1 9 17.25v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 1-.75-.75m15 1.5A2.25 2.25 0 0 1 17.25 15h6a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 0-.75.75v6a.75.75 0 1 1-1.5 0z"
      />
    </g>
    <defs>
      <clipPath id="fullscreen-exit_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FullscreenExitIcon;
