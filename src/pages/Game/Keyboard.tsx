import { getAlphabet } from "@/utils";

import { Letter } from "@/components";

import styles from "./Keyboard.module.css";

const Keyboard = ({
  keysPressed,
  onClickLetter,
}: {
  keysPressed: string[];
  onClickLetter: (letter: string) => void;
}) => {
  return (
    <section className={styles.keyboard}>
      {getAlphabet().map((letter) => (
        <Letter
          letter={letter}
          variant="keyboard"
          key={letter}
          disabled={keysPressed.includes(letter)}
          onClick={onClickLetter}
        />
      ))}
    </section>
  );
};
export default Keyboard;
