import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../router/constants";

import IconButtonBack from "../../components/icons/IconButtonBack";

import styles from "./BackHeader.module.css";

interface BackHeaderProps {
  title: ReactNode;
}

const BackHeader = ({ title }: BackHeaderProps) => {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.home}>
        <IconButtonBack />
      </Link>
      {title}
    </header>
  );
};
export default BackHeader;
