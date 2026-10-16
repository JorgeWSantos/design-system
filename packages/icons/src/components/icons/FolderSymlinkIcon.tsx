import type { SVGProps } from 'react';
const FolderSymlinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.697 12.407-4.773 2.955c-.405.249-.924-.054-.924-.558V13.65s-3.857-.45-6 3.6c.856-7.2 4.714-7.2 6-7.2V8.897c0-.504.519-.807.924-.557l4.773 2.954a.662.662 0 0 1 0 1.113"
    />
    <path
      fill={props?.fill ? props.fill : '#1E1E1E'}
      d="m.75 4.5.06 1.305a3 3 0 0 0-.513 1.967l.955 10.5A3 3 0 0 0 4.24 21H19.76a3 3 0 0 0 2.986-2.729l.956-10.5A3 3 0 0 0 20.715 4.5h-5.973a3 3 0 0 1-2.121-.879l-1.242-1.242A3 3 0 0 0 9.258 1.5H3.75a3 3 0 0 0-3 3m1.04 3.135A1.5 1.5 0 0 1 3.286 6h17.43a1.5 1.5 0 0 1 1.494 1.635l-.954 10.5A1.5 1.5 0 0 1 19.76 19.5H4.239a1.5 1.5 0 0 1-1.493-1.365zM9.259 3a1.5 1.5 0 0 1 1.06.44l1.06 1.06H3.286c-.36 0-.705.063-1.025.18l-.01-.21A1.5 1.5 0 0 1 3.75 3z"
    />
  </svg>
);
export default FolderSymlinkIcon;
