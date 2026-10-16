import type { SVGProps } from 'react';
const FileZipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#1E1E1E" clipPath="url(#file-zip_svg__a)">
      <path d="M9.75 11.25a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1.407l.6 2.399a1.5 1.5 0 0 1-.624 1.61l-1.395.93a1.5 1.5 0 0 1-1.663 0l-1.395-.93a1.5 1.5 0 0 1-.623-1.61l.6-2.399zm3 0h-1.5v1.407q0 .185-.045.364l-.6 2.397 1.395.93 1.395-.93-.6-2.396a1.5 1.5 0 0 1-.045-.365z" />
      <path d="M3 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm8.25-1.5H6A1.5 1.5 0 0 0 4.5 3v18A1.5 1.5 0 0 0 6 22.5h12a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 18 1.5h-4.5V3H12v1.5h1.5V6H12v1.5h1.5V9h-2.25V7.5h-1.5V6h1.5V4.5h-1.5V3h1.5z" />
    </g>
    <defs>
      <clipPath id="file-zip_svg__a">
        <path fill={props?.fill ? props.fill : '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FileZipIcon;
