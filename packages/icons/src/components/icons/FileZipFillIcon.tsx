import type { SVGProps } from 'react';
const FileZipFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#file-zip-fill_svg__a)">
      <path d="M12.75 14.157V12.75h-1.5v1.407q0 .185-.045.364l-.6 2.398 1.395.93 1.395-.93-.6-2.398a1.5 1.5 0 0 1-.045-.364" />
      <path d="M6 0h12a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m3.75 12.75v1.407l-.6 2.398a1.5 1.5 0 0 0 .624 1.611l1.395.93a1.5 1.5 0 0 0 1.663 0l1.395-.93a1.5 1.5 0 0 0 .623-1.61l-.6-2.399V12.75a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5m1.5-8.25h-1.5V6h1.5v1.5h-1.5V9h1.5v1.5h2.25V9H12V7.5h1.5V6H12V4.5h1.5V3H12V1.5H9.75V3h1.5z" />
    </g>
    <defs>
      <clipPath id="file-zip-fill_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FileZipFillIcon;
