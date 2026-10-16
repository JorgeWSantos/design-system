import type { SVGProps } from 'react';
const GiftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gift_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M4.5 3.75a3.75 3.75 0 0 1 7.5 0 3.75 3.75 0 0 1 7.5 0v.009c0 .105 0 .405-.057.741H22.5A1.5 1.5 0 0 1 24 6v3a1.5 1.5 0 0 1-1.5 1.5v11.25A2.25 2.25 0 0 1 20.25 24H3.75a2.25 2.25 0 0 1-2.25-2.25V10.5A1.5 1.5 0 0 1 0 9V6a1.5 1.5 0 0 1 1.5-1.5h3.057a4.5 4.5 0 0 1-.057-.741zm1.602.75H10.5v-.75a2.25 2.25 0 1 0-4.5 0c0 .127.003.411.067.645q.014.053.035.105m7.398 0h4.398a1 1 0 0 0 .035-.105c.064-.234.067-.517.067-.645a2.25 2.25 0 0 0-4.5 0zM1.5 6v3h9V6zm12 0v3h9V6zm7.5 4.5h-7.5v12h6.75a.75.75 0 0 0 .75-.75zm-10.5 12v-12H3v11.25a.75.75 0 0 0 .75.75z"
      />
    </g>
    <defs>
      <clipPath id="gift_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GiftIcon;
