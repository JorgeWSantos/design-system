import type { SVGProps } from 'react';
const TrophyFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#trophy-fill_svg__a)">
      <path
        fill={props?.fill ? props.fill : '#1E1E1E'}
        d="M3.75.75A.75.75 0 0 1 4.5 0h15a.75.75 0 0 1 .75.75q-.001 1.21-.05 2.304a4.5 4.5 0 1 1-1.7 8.835c-1.185 2.798-2.817 4.166-4.25 4.517v3.259l2.138.534c.29.072.565.202.805.382l2.757 2.069A.75.75 0 0 1 19.5 24h-15a.75.75 0 0 1-.45-1.35l2.757-2.068c.24-.18.515-.311.806-.383l2.137-.534v-3.26c-1.432-.35-3.064-1.719-4.25-4.518a4.5 4.5 0 1 1-1.697-8.834A50 50 0 0 1 3.75.75M3.9 4.56a3 3 0 0 0 1.08 5.903c-.5-1.575-.882-3.52-1.08-5.903m15.124 5.903a3 3 0 0 0 1.08-5.903c-.2 2.385-.582 4.328-1.08 5.903"
      />
    </g>
    <defs>
      <clipPath id="trophy-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TrophyFillIcon;
