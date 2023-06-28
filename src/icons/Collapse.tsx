import {SVGAttributes} from 'react';

const SvgCollapse = (props: SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M97 772v64h830v-64H97zm128-388L97 514.137 225 640V384zm64 96v64h638v-64H289zM97 188v64h830v-64H97z"
    />
  </svg>
);

export default SvgCollapse;
