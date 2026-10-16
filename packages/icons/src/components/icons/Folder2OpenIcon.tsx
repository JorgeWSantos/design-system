import type { SVGProps } from 'react';
const Folder2OpenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h4.146c1.437 0 2.64.84 3.467 1.776C11.978 5.472 12.72 6 13.5 6h6.75a2.25 2.25 0 0 1 2.25 2.25v.96a2.25 2.25 0 0 1 1.284 2.319l-.96 7.686A3.75 3.75 0 0 1 19.1 22.5H4.9a3.75 3.75 0 0 1-3.722-3.285l-.96-7.686A2.25 2.25 0 0 1 1.5 9.21zM3 9h18v-.75a.75.75 0 0 0-.75-.75H13.5c-1.446 0-2.565-.944-3.26-1.731C9.56 5.001 8.73 4.5 7.895 4.5H3.75a.75.75 0 0 0-.75.75zm-.55 1.5a.75.75 0 0 0-.744.843l.96 7.686A2.25 2.25 0 0 0 4.899 21h14.202a2.25 2.25 0 0 0 2.234-1.971l.96-7.686a.75.75 0 0 0-.744-.843z"
    />
  </svg>
);
export default Folder2OpenIcon;
