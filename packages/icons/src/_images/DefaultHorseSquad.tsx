import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDefaultHorseSquad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 328 328"
    {...props}
  >
    <g filter="url(#default-horse-squad_svg__a)">
      <mask id="default-horse-squad_svg__b" fill="#fff">
        <rect width={320} height={320} x={4} rx={6} />
      </mask>
      <rect
        width={320}
        height={320}
        x={4}
        fill="#fff"
        fillOpacity={0.85}
        rx={6}
        shapeRendering="crispEdges"
      />
      <rect
        width={320}
        height={320}
        x={4}
        stroke="#fff"
        strokeWidth={16}
        mask="url(#default-horse-squad_svg__b)"
        rx={6}
        shapeRendering="crispEdges"
      />
      <path
        fill="#002710"
        fillOpacity={0.25}
        fillRule="evenodd"
        d="M137.63 32.3c0 2.293 1.437 10.712 2.886 14.555 1.431 3.813 12.803 22.674 12.957 22.93.082.042 11.188 5.82 15.488 9.545 4.018 3.487 7.503 2.707 12.224 1.65l1.035-.23c10.818-2.315 90.654 44.412 127.37 86.933 1.19 1.374 11.41 9.203 11.41 9.203V316H215.117s1.687-19.961 1.687-23.625c0-8.915-5.43-18.577-11.401-29.204-2.725-4.849-5.562-9.898-8.048-15.169-7.926-16.835-28.789-61.162-30.19-64.253-1.486-3.041-10.798-10.7-25.928-3.826-9.631 4.379-20.128 3.813-27.603 3.41-4.262-.23-7.541-.406-9.118.416-4.322 2.284-20.11 7.639-27.331 8.428-4.173.438-5.689 3.699-7.205 6.961-1.101 2.37-2.203 4.739-4.323 6.029-5.032 3.079-19.436-5.378-19.436-5.378-.164-.086-7.2-3.805-8.616-6.863-.654-1.406-1.007-3.071-1.48-5.301-.558-2.629-1.282-6.043-2.861-10.739-4.202-12.809 3.4-14.225 3.633-14.265 0 0 12.212-11.241 16.537-15.094 4.315-3.805 22.57-25.398 23.003-33.369.576-10.012 7.511-16.84 12.997-22.241 1.642-1.617 3.155-3.106 4.328-4.514.897-1.115 2.213-2.227 3.616-3.412 2.47-2.087 5.207-4.401 6.404-7.356 1.918-4.547 0-10.65 0-10.65-7.81-6.063-.135-30.951 0-31.383h2.898c0 .204.045 6.929 2.859 10.728.726.954 1.626 2.478 2.626 4.168 3.011 5.091 6.918 11.698 9.636 8.835 3.606-3.87 10.059.75 10.059.75-5.703-8.332 2.725-28.76 2.859-29.083h2.911z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="default-horse-squad_svg__a"
        width={328}
        height={328}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2700_12067" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_2700_12067" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgDefaultHorseSquad;
