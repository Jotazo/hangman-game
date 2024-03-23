import { IconButtonMenu, IconHeart } from "@/components/icons";

import styles from "./GameHeader.module.css";

const getLifeColor = (errors: number) => {
  const COLORS = {
    default: "#162676", // blue navy
    warning: "#CC5500", // orange
    error: "#FF0000", // red
  };

  return errors >= 5
    ? COLORS.error
    : errors >= 3
    ? COLORS.warning
    : COLORS.default;
};

const GameHeader = ({
  title,
  errors,
  onOpenMenu,
}: {
  title: string;
  errors: number;
  onOpenMenu: () => void;
}) => {
  const lifeColor = getLifeColor(errors);

  return (
    <header className={styles.header}>
      <IconButtonMenu onClick={onOpenMenu} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.lifeContainer}>
        <div
          className={styles.life}
          style={{
            width: `${100 - 12.5 * errors}%`,
            backgroundColor: lifeColor,
          }}
        ></div>
      </div>
      <IconHeart />
    </header>
  );
};
export default GameHeader;
