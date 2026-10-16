import type { SVGProps } from 'react';
const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M.81 5.805.75 4.5a3 3 0 0 1 3-3h5.508a3 3 0 0 1 2.121.879l1.242 1.242a3 3 0 0 0 2.121.879h5.973a3 3 0 0 1 2.988 3.271l-.955 10.5A3 3 0 0 1 19.76 21H4.24a3 3 0 0 1-2.986-2.729l-.956-10.5A3 3 0 0 1 .81 5.807zM3.285 6a1.5 1.5 0 0 0-1.494 1.635l.956 10.5A1.5 1.5 0 0 0 4.239 19.5h15.522a1.5 1.5 0 0 0 1.493-1.365l.955-10.5A1.5 1.5 0 0 0 20.715 6zm7.035-2.56A1.5 1.5 0 0 0 9.258 3H3.75a1.5 1.5 0 0 0-1.5 1.471l.01.209c.32-.117.665-.18 1.025-.18h8.094l-1.06-1.06z"
    />
  </svg>
);
export default FolderIcon;
