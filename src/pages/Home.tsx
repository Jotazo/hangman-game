import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

import { ROUTES } from "../router/constants";

import { Button, Modal, PlayButton } from "@/components";

import { HangmanTitle } from "@/components/icons";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="container d-flex items-centered"
    >
      <Modal title={<HangmanTitle />} sxTitle={{ top: "-60px" }}>
        <Link to={ROUTES.pickCategory}>
          <PlayButton style={{ margin: "1rem 0" }} />
        </Link>
        <Link to={ROUTES.howToPlay}>
          <Button text="HOW TO PLAY" variant="primary" />
        </Link>
      </Modal>
    </m.div>
  );
};
export default Home;
