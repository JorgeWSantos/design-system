import type { SVGProps } from 'react';
const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 7"
    {...props}
  >
    <path
      fill="#001007"
      fillOpacity={0.5}
      d="M4.25 6.188a.437.437 0 0 1 .438-.438h2.625a.437.437 0 1 1 0 .875H4.688a.437.437 0 0 1-.438-.437M2.5 3.563a.437.437 0 0 1 .438-.438h6.124a.437.437 0 1 1 0 .875H2.939a.437.437 0 0 1-.438-.437M.75.938A.44.44 0 0 1 1.188.5h9.625a.438.438 0 0 1 0 .875H1.188A.437.437 0 0 1 .75.938"
    />
  </svg>
);
export default FilterIcon;
