import type { SVGProps } from 'react';
const Calendar4WeekIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill={props?.fill ? props.fill : '#fff'} clipPath="url(#calendar4-week_svg__a)">
      <path d="M5.25 0A.75.75 0 0 1 6 .75v.75h12V.75a.75.75 0 1 1 1.5 0v.75H21a3 3 0 0 1 3 3V21a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V4.5a3 3 0 0 1 3-3h1.5V.75A.75.75 0 0 1 5.25 0M3 3a1.5 1.5 0 0 0-1.5 1.5V6h21V4.5A1.5 1.5 0 0 0 21 3zm19.5 4.5h-21V21A1.5 1.5 0 0 0 3 22.5h18a1.5 1.5 0 0 0 1.5-1.5z" />
      <path d="M16.5 11.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm-4.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm-3 4.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm-4.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75z" />
    </g>
    <defs>
      <clipPath id="calendar4-week_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Calendar4WeekIcon;
