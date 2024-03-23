import { IconButtonMenu, IconHeart } from "@/components/icons";

import styles from "./GameHeader.module.css";

const GameHeader = ({ title }: { title: string }) => {
  return (
    <header className={styles.header}>
      <IconButtonMenu />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.lifeContainer}>
        <div className={styles.life}></div>
      </div>
      <IconHeart />
    </header>
  );
};
export default GameHeader;
