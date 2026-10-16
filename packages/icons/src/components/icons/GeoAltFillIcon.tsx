import type { SVGProps } from 'react';
const GeoAltFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#geo-alt-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M12 24s9-8.529 9-15A9 9 0 1 0 3 9c0 6.471 9 15 9 15m0-10.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"
      />
    </g>
    <defs>
      <clipPath id="geo-alt-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GeoAltFillIcon;
