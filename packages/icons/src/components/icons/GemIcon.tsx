import type { SVGProps } from 'react';
const GemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M4.65 1.05a.75.75 0 0 1 .6-.3h13.5a.75.75 0 0 1 .6.3l4.464 5.961a.786.786 0 0 1 .015.966L12.6 22.95a.75.75 0 0 1-1.2 0L.15 7.95a.75.75 0 0 1 0-.9zm17.079 5.678L19.02 3.113l-1.164 3.619zm-5.45.006 1.442-4.484H6.279l1.444 4.493zM8.205 8.242 12 20.05l3.798-11.814zM6.149 6.744l-1.17-3.633-2.727 3.637zm-3.9 1.506 7.669 10.226L6.63 8.246zm11.833 10.226L21.767 8.23l-4.392.002z"
    />
  </svg>
);
export default GemIcon;
