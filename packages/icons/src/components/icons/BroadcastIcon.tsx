import type { SVGProps } from 'react';
const BroadcastIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#Broadcast_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M4.575 4.575a10.5 10.5 0 0 0 0 14.85.75.75 0 0 1-1.06 1.06 12 12 0 0 1 0-16.97.75.75 0 0 1 1.06 1.06m3.183 3.183a6 6 0 0 0 0 8.484.75.75 0 1 1-1.062 1.062 7.5 7.5 0 0 1 0-10.608.75.75 0 1 1 1.062 1.062m8.484-1.062a.75.75 0 0 1 1.062 0 7.5 7.5 0 0 1 0 10.608.752.752 0 0 1-1.062-1.062 6 6 0 0 0 0-8.484.75.75 0 0 1 0-1.062m3.183-3.18a.75.75 0 0 1 1.06 0 12 12 0 0 1 0 16.97.75.75 0 0 1-1.06-1.061 10.5 10.5 0 0 0 0-14.85.75.75 0 0 1 0-1.06zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </g>
    <defs>
      <clipPath id="Broadcast_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default BroadcastIcon;
