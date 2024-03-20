import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  text: string;
}

const Button = ({ variant, text, ...rest }: ButtonProps) => {
  return (
    <button className={`heading-s ${styles.btn} ${styles[variant]}`} {...rest}>
      <span>{text}</span>
    </button>
  );
};
export default Button;
