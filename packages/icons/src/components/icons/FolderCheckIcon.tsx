import type { SVGProps } from 'react';
const FolderCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#folder-check_svg__a)">
      <path d="m.75 4.5.06 1.305a3 3 0 0 0-.513 1.967l.956 10.5A3 3 0 0 0 4.239 21H13.5v-1.5H4.24a1.5 1.5 0 0 1-1.493-1.365l-.956-10.5A1.5 1.5 0 0 1 3.285 6h17.43a1.5 1.5 0 0 1 1.494 1.635L21.81 12h1.508l.384-4.228A3 3 0 0 0 20.715 4.5h-5.973a3 3 0 0 1-2.12-.879l-1.243-1.242A3 3 0 0 0 9.26 1.5H3.75a3 3 0 0 0-3 3M9.258 3a1.5 1.5 0 0 1 1.06.44L11.38 4.5H3.285c-.36 0-.705.063-1.024.18l-.01-.21A1.5 1.5 0 0 1 3.75 3z" />
      <path d="M23.781 15.219a.75.75 0 0 1 0 1.062l-4.5 4.5a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.062l1.72 1.72 3.968-3.97a.75.75 0 0 1 1.062 0" />
    </g>
    <defs>
      <clipPath id="folder-check_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FolderCheckIcon;
