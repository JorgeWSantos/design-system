import type { SVGProps } from 'react';
const GiftFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gift-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M4.5 3.75a3.75 3.75 0 0 1 7.5 0 3.75 3.75 0 0 1 7.5 0v.009c0 .105 0 .405-.057.741H22.5A1.5 1.5 0 0 1 24 6v1.5A1.5 1.5 0 0 1 22.5 9h-21A1.5 1.5 0 0 1 0 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3.057a4.5 4.5 0 0 1-.057-.741zm1.602.75H10.5v-.75a2.25 2.25 0 1 0-4.5 0c0 .127.003.411.067.645q.014.053.035.105m7.398 0h4.398a1 1 0 0 0 .035-.105c.064-.234.067-.517.067-.645a2.25 2.25 0 0 0-4.5 0zm9 6v11.25A2.25 2.25 0 0 1 20.25 24H13.5V10.5zM3.75 24a2.25 2.25 0 0 1-2.25-2.25V10.5h9V24z"
      />
    </g>
    <defs>
      <clipPath id="gift-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GiftFillIcon;
