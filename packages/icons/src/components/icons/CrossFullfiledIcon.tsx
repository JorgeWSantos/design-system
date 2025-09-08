import type { SVGProps } from 'react';
const CrossFullfiledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 22"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#000'}
      d="M17.25 7.625v2.25a1.5 1.5 0 0 1-1.5 1.5h-4.125V20a1.5 1.5 0 0 1-1.5 1.5h-2.25a1.5 1.5 0 0 1-1.5-1.5v-8.625H2.25a1.5 1.5 0 0 1-1.5-1.5v-2.25a1.5 1.5 0 0 1 1.5-1.5h4.125V2a1.5 1.5 0 0 1 1.5-1.5h2.25a1.5 1.5 0 0 1 1.5 1.5v4.125h4.125a1.5 1.5 0 0 1 1.5 1.5"
    />
  </svg>
);
export default CrossFullfiledIcon;
