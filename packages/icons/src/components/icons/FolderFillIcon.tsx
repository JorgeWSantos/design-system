import type { SVGProps } from 'react';
const FolderFillIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.742 4.5h5.973a3 3 0 0 1 2.988 3.271l-.955 10.5A3 3 0 0 1 19.76 21H4.238a3 3 0 0 1-2.987-2.729l-.955-10.5a3 3 0 0 1 .513-1.965L.75 4.5a3 3 0 0 1 3-3h5.508a3 3 0 0 1 2.121.879l1.242 1.242a3 3 0 0 0 2.121.879M2.26 4.68c.321-.117.666-.18 1.026-.18h8.094l-1.06-1.06A1.5 1.5 0 0 0 9.259 3H3.75a1.5 1.5 0 0 0-1.5 1.471z"
    />
  </svg>
);
export default FolderFillIcon;
