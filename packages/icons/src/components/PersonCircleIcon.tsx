import type { SVGProps } from 'react';
const PersonCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 38 38"
    {...props}
  >
    <g fill="#002710" fillOpacity={0.25} clipPath="url(#PersonCircle_svg__a)">
      <path d="M26.031 14.313a7.03 7.03 0 1 1-14.061 0 7.03 7.03 0 0 1 14.061 0" />
      <path
        fillRule="evenodd"
        d="M.25 19a18.75 18.75 0 1 1 37.5 0 18.75 18.75 0 0 1-37.5 0M19 2.594A16.406 16.406 0 0 0 6.184 29.242c1.664-2.681 5.328-5.555 12.816-5.555s11.15 2.872 12.816 5.555A16.406 16.406 0 0 0 19 2.594"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="PersonCircle_svg__a">
        <path fill="#fff" d="M.25.25h37.5v37.5H.25z" />
      </clipPath>
    </defs>
  </svg>
);
export default PersonCircleIcon;
