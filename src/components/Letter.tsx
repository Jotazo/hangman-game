import styles from "./Letter.module.css";

interface LetterProps {
  disabled?: boolean;
  letter: string;
  variant: "playable" | "keyboard";
  onClick?: (letter: string) => void;
}

const Letter = ({
  letter,
  variant = "playable",
  disabled = false,
  onClick,
}: LetterProps) => {
  const showLetter = (disabled && variant === "keyboard") || !disabled;
  return (
    <div
      className={`${styles.letterContainer} ${styles[variant]} ${
        disabled && styles.disabled
      }`}
      onClick={() => onClick && onClick(letter)}
    >
      <span className={styles.letter}>{showLetter && letter}</span>
    </div>
  );
};
export default Letter;
