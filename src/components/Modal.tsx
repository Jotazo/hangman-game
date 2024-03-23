import { CSSProperties, ReactNode } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  title,
  children,
  sxTitle,
}: {
  title: ReactNode;
  children: ReactNode;
  sxTitle?: CSSProperties;
}) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header} style={sxTitle}>
        {title}
      </header>
      {children}
    </div>
  );
};
export default Modal;
