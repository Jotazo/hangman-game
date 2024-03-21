import BackHeader from "./Headers/BackHeader";

import HowToPlayTitle from "../components/icons/HowToPlayTitle";

import styles from "./HowToPlay.module.css";

const data = [
  {
    number: "01",
    title: "CHOOSE A CATEGORY",
    info: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    number: "02",
    title: "GUESS LETTERS",
    info: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    number: "03",
    title: "WIN OR LOSE",
    info: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];

const HowToPlay = () => {
  return (
    <div className={`container d-flex flex-col`}>
      <BackHeader title={<HowToPlayTitle />} />
      <section className={styles.list}>
        {data.map((element) => (
          <article
            key={element.number}
            className={`${styles.listItem} d-flex flex-col`}
          >
            <header className={styles.listItem_header}>
              <span className={styles.listItem_number}>{element.number}</span>
              <h4 className={styles.listItem_title}>{element.title}</h4>
            </header>
            <p className={styles.listItem_paragraph}>{element.info}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
export default HowToPlay;
