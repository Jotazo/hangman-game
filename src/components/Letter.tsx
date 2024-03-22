import styles from "./Letter.module.css";

interface LetterProps {
  disabled?: boolean;
  letter: string;
  variant: "playable" | "keyboard";
}

const Letter = ({
  letter,
  variant = "playable",
  disabled = false,
}: LetterProps) => {
  const showLetter = (disabled && variant === "keyboard") || !disabled;
  return (
    <div
      className={`${styles.letterContainer} ${styles[variant]} ${
        disabled && styles.disabled
      }`}
    >
      <span className={styles.letter}>{showLetter && letter}</span>
    </div>
  );
};
export default Letter;
