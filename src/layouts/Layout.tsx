import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { ROUTES } from "../router/constants";

import { checkDevice } from "../utils/checkDevice";

import bgMobile from "../assets/images/background-mobile.png";
import bgTablet from "../assets/images/background-tablet.png";
import bgDesktop from "../assets/images/background-desktop.png";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === ROUTES.home;
  const device = checkDevice();

  const bgToShow =
    device === "mobile" ? bgMobile : device === "tablet" ? bgTablet : bgDesktop;

  return (
    <div className={`${styles.layout} ${!isHome && styles.bgFilled}`}>
      <img
        src={bgToShow}
        alt="background"
        className={styles.layoutBackground}
      />
      {children}
    </div>
  );
};
export default Layout;
