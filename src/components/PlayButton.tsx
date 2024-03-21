import IconPlay from "./icons/IconPlay";
import styles from "./PlayButton.module.css";

const PlayButton = () => {
  return (
    <button className={styles.button}>
      <IconPlay />
    </button>
  );
};
export default PlayButton;
