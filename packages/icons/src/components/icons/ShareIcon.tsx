import type { SVGProps } from 'react';
const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#share_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M20.25 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M16.5 3.75a3.75 3.75 0 1 1 .904 2.442l-10.077 4.68a3.75 3.75 0 0 1 0 2.256l10.077 4.68a3.75 3.75 0 1 1-.732 1.314l-10.077-4.68a3.75 3.75 0 1 1 0-4.884l10.077-4.68A3.8 3.8 0 0 1 16.5 3.75m-12.75 6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M20.25 18a2.25 2.25 0 1 0 0 4.501 2.25 2.25 0 0 0 0-4.5"
      />
    </g>
    <defs>
      <clipPath id="share_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ShareIcon;
