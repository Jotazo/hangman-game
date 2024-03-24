import { SVGProps } from "react";

import styles from "./IconButtonMenu.module.css";

const IconButtonMenu = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      {...props}
    >
      <g filter="url(#filter0_i_51_605)">
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_51_605)"
        />
      </g>
      <rect
        x="11.9149"
        y="13.1914"
        width="16.1702"
        height="2.97872"
        fill="white"
      />
      <rect
        x="11.9149"
        y="18.7236"
        width="16.1702"
        height="2.55319"
        fill="white"
      />
      <rect
        x="11.9149"
        y="23.8301"
        width="16.1702"
        height="2.97872"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_i_51_605"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_51_605"
          />
          <feOffset dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.616642 0 0 0 0 0.176458 0 0 0 0 0.9625 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_51_605"
          />
        </filter>
        <linearGradient
          id="paint0_linear_51_605"
          x1="20"
          y1="6.56716"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE71FE" />
          <stop offset="0.11" stopColor="#EE75FE" />
          <stop offset="1" stopColor="#7199FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default IconButtonMenu;
