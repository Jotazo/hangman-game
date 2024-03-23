import { Word } from "../../data";

import { generateRandomID } from "../../utils/generateRandomId";

import Letter from "../../components/Letter";

import styles from "./ScreenWord.module.css";

const ScreenWord = ({
  rndWord,
  keysPressed,
}: {
  rndWord: Word;
  keysPressed: string[];
}) => {
  return (
    <section className={styles.gameScreen}>
      {rndWord.name.split(" ").map((word) => {
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
