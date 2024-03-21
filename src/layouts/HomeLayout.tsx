import { ReactNode } from "react";

import { checkDevice } from "../utils/checkDevice";

import bgMobile from "../assets/images/background-mobile.png";
import bgTablet from "../assets/images/background-tablet.png";
import bgDesktop from "../assets/images/background-desktop.png";

import styles from "./HomeLayout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  const device = checkDevice();

  const bgToShow =
    device === "mobile" ? bgMobile : device === "tablet" ? bgTablet : bgDesktop;

  return (
    <div className={styles.layout}>
      <img
        src={bgToShow}
        alt="background"
        className={styles.layoutBackground}
      />
      {children}
    </div>
  );
};
export default HomeLayout;
