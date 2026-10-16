import type { SVGProps } from 'react';
const Folder2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h4.146c1.437 0 2.64.84 3.467 1.776C11.977 5.472 12.72 6 13.5 6h6.75a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 21H3.75a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75V9h18v-.75a.75.75 0 0 0-.75-.75H13.5c-1.446 0-2.565-.944-3.261-1.731C9.561 5.001 8.73 4.5 7.896 4.5zm17.25 6H3v8.25a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75z"
    />
  </svg>
);
export default Folder2Icon;
