import type { SVGProps } from 'react';
const GeoAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#geo-alt_svg__a)">
      <path d="M18.249 13.41c-.786 1.593-1.851 3.18-2.94 4.605A47 47 0 0 1 12 21.87a47 47 0 0 1-3.309-3.855c-1.089-1.425-2.154-3.012-2.94-4.605C4.956 11.8 4.5 10.293 4.5 9a7.5 7.5 0 0 1 15 0c0 1.293-.457 2.8-1.251 4.41M12 24s9-8.529 9-15A9 9 0 1 0 3 9c0 6.471 9 15 9 15" />
      <path d="M12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" />
    </g>
    <defs>
      <clipPath id="geo-alt_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GeoAltIcon;
