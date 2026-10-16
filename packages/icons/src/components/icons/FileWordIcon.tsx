import type { SVGProps } from 'react';
const FileWordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#file-word_svg__a)">
      <path d="M7.319 6.773a.75.75 0 0 1 .908.546l1.554 6.216 1.496-5.483a.75.75 0 0 1 1.446 0l1.495 5.483 1.555-6.216a.75.75 0 0 1 1.454.362l-2.25 9a.75.75 0 0 1-1.45.015L12 11.104l-1.527 5.595a.75.75 0 0 1-1.45-.015l-2.25-9a.75.75 0 0 1 .546-.909z" />
      <path d="M6 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm0 1.5h12A1.5 1.5 0 0 1 19.5 3v18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 21V3A1.5 1.5 0 0 1 6 1.5" />
    </g>
    <defs>
      <clipPath id="file-word_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FileWordIcon;
