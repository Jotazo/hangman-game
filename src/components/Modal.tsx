import { ReactNode } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>{title}</header>
      {children}
    </div>
  );
};
export default Modal;
