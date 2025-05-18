import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 13"
    {...props}
  >
    <path
      fill="#001007"
      fillOpacity={0.75}
      d="M12 6.095C12 2.761 9.314.058 6 .058S-.001 2.76-.001 6.096c0 3.013 2.194 5.51 5.062 5.963V7.841H3.539V6.096h1.524V4.765c0-1.513.896-2.348 2.266-2.348.657 0 1.343.117 1.343.117V4.02h-.756c-.745 0-.978.466-.978.944v1.132h1.664L8.336 7.84H6.938v4.219C9.806 11.606 12 9.109 12 6.095"
    />
  </svg>
);
export default SvgFacebook;
