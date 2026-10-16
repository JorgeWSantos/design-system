import type { SVGProps } from 'react';
const FolderXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M.81 5.805.75 4.5a3 3 0 0 1 3-3h5.508a3 3 0 0 1 2.121.879l1.242 1.242a3 3 0 0 0 2.121.879h5.973a3 3 0 0 1 2.988 3.271L23.32 12H21.81l.398-4.365A1.5 1.5 0 0 0 20.715 6H3.285a1.5 1.5 0 0 0-1.494 1.635l.956 10.5A1.5 1.5 0 0 0 4.239 19.5H13.5V21H4.24a3 3 0 0 1-2.987-2.729l-.956-10.5A3 3 0 0 1 .81 5.807zM10.32 3.44A1.5 1.5 0 0 0 9.259 3H3.75a1.5 1.5 0 0 0-1.5 1.471l.01.209c.32-.117.665-.18 1.025-.18h8.094z"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="M17.781 15.219a.75.75 0 0 0-1.06 1.062L18.44 18l-1.72 1.719a.751.751 0 0 0 1.061 1.062l1.72-1.72 1.718 1.72a.75.75 0 1 0 1.062-1.062l-1.72-1.72 1.72-1.718a.75.75 0 1 0-1.06-1.062l-1.72 1.72z"
    />
  </svg>
);
export default FolderXIcon;
