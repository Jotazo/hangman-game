import styles from "./IconHeart.module.css";

const IconHeart = () => {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <path
        d="M13.921 24L12.0245 22.2736C5.28883 16.1657 0.841965 12.1243 0.841965 7.19346C0.841965 3.15204 4.00709 0 8.03543 0C10.3112 0 12.4954 1.0594 13.921 2.72044C15.3466 1.0594 17.5308 0 19.8065 0C23.8349 0 27 3.15204 27 7.19346C27 12.1243 22.5531 16.1657 15.8174 22.2736L13.921 24Z"
        fill="url(#paint0_linear_69_7)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_69_7"
          x1="13.921"
          y1="3.9403"
          x2="13.921"
          y2="24"
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
export default IconHeart;
