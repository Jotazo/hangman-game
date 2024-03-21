import { ButtonHTMLAttributes } from "react";
import IconPlay from "./icons/IconPlay";
import styles from "./PlayButton.module.css";

interface PlayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PlayButton = ({ className, ...props }: PlayButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <IconPlay />
    </button>
  );
};
export default PlayButton;
