import type { SVGProps } from 'react';
const GenderTransIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gender-trans_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        fillRule="evenodd"
        d="M0 .75A.75.75 0 0 1 .75 0h4.5a.75.75 0 1 1 0 1.5H2.56l2.69 2.69.969-.971a.75.75 0 1 1 1.062 1.062l-.97.969 1.233 1.233A5.99 5.99 0 0 1 12 4.5a5.98 5.98 0 0 1 4.456 1.983L21.44 1.5H17.25a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0V2.56l-5.175 5.176a6 6 0 0 1-4.575 8.719V19.5H15a.75.75 0 1 1 0 1.5h-2.25v2.25a.75.75 0 1 1-1.5 0V21H9a.75.75 0 1 1 0-1.5h2.25v-3.045a6 6 0 0 1-4.575-8.721L5.25 6.311l-.969.97a.751.751 0 0 1-1.062-1.062l.97-.969L1.5 2.56v2.69a.75.75 0 0 1-1.5 0zm8.235 7.284a4.5 4.5 0 1 0 7.53 4.932 4.5 4.5 0 0 0-7.53-4.932"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="gender-trans_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GenderTransIcon;
