import type { SVGProps } from 'react';
const PersonCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#person-circle_svg__a)">
      <path d="M16.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" />
      <path
        fillRule="evenodd"
        d="M0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0M12 1.5a10.5 10.5 0 0 0-8.202 17.055C4.863 16.839 7.208 15 12 15c4.793 0 7.136 1.837 8.202 3.555A10.5 10.5 0 0 0 12 1.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="person-circle_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PersonCircleIcon;
