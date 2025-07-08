import type { SVGProps } from 'react';
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#facebook_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M24 12.074C24 5.403 18.627-.002 12-.002 5.37 0-.003 5.405-.003 12.075c0 6.026 4.39 11.02 10.125 11.927v-8.438H7.077v-3.489h3.048V9.413c0-3.026 1.793-4.697 4.533-4.697 1.314 0 2.687.236 2.687.236v2.97H15.83c-1.49 0-1.954.931-1.954 1.887v2.265h3.327l-.531 3.489h-2.798V24C19.611 23.094 24 18.099 24 12.074"
      />
    </g>
    <defs>
      <clipPath id="facebook_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FacebookIcon;
