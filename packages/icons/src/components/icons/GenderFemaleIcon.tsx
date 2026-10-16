import type { SVGProps } from 'react';
const GenderFemaleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gender-female_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        fillRule="evenodd"
        d="M12 1.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-7.5 6a7.5 7.5 0 1 1 8.25 7.462V18h3a.75.75 0 1 1 0 1.5h-3v3.75a.75.75 0 1 1-1.5 0V19.5h-3a.75.75 0 1 1 0-1.5h3v-3.038A7.5 7.5 0 0 1 4.5 7.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="gender-female_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GenderFemaleIcon;
