import { generateRandomID } from "@/utils";

import { Letter } from "@/components";

import styles from "./ScreenWord.module.css";

const ScreenWord = ({
  randomAnswer,
  keysPressed,
}: {
  randomAnswer: string;
  keysPressed: string[];
}) => {
  return (
    <section className={styles.gameScreen}>
      {randomAnswer.split(" ").map((word) => {
        return (
          <div key={generateRandomID(12)} className="d-flex">
            {word.split("").map((letter) => (
              <Letter
                key={generateRandomID(12)}
                letter={letter}
                variant="playable"
                disabled={!keysPressed.includes(letter)}
              />
            ))}
          </div>
        );
      })}
    </section>
  );
};
export default ScreenWord;
