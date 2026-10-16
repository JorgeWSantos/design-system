import type { SVGProps } from 'react';
const GenderAmbiguousIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gender-ambiguous_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        fillRule="evenodd"
        d="M17.25 1.5a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0V2.56l-5.175 5.176a6 6 0 0 1-4.575 8.719V19.5H15a.75.75 0 1 1 0 1.5h-2.25v2.25a.75.75 0 1 1-1.5 0V21H9a.75.75 0 1 1 0-1.5h2.25v-3.045a6 6 0 1 1 5.206-9.972L21.44 1.5zm-1.496 6.519a4.5 4.5 0 1 0-7.509 4.966 4.5 4.5 0 0 0 7.51-4.967z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="gender-ambiguous_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GenderAmbiguousIcon;
