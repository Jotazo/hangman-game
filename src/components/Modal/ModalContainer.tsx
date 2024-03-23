import { CSSProperties, ReactNode } from "react";

import { Modal } from "..";

import styles from "./ModalContainer.module.css";

const ModalContainer = ({
  title,
  children,
  sxTitle,
}: {
  title: ReactNode;
  children: ReactNode;
  sxTitle?: CSSProperties;
}) => {
  return (
    <div className={styles.modalContainer}>
      <Modal title={title} sxTitle={sxTitle}>
        {children}
      </Modal>
    </div>
  );
};
export default ModalContainer;
