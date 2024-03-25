import { CSSProperties, ReactNode } from "react";
import { motion as m } from "framer-motion";

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
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: .5 }}
      className={styles.modalContainer}
    >
      <Modal title={title} sxTitle={sxTitle}>
        {children}
      </Modal>
    </m.div>
  );
};
export default ModalContainer;
