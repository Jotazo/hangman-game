import { Link } from "react-router-dom";

import { ROUTES } from "../router/constants";

import { Button, Modal, PlayButton } from "@/components";

import { HangmanTitle } from "@/components/icons";

const Home = () => {
  return (
    <div className="container d-flex items-centered">
      <Modal title={<HangmanTitle />}>
        <Link to={ROUTES.pickCategory}>
          <PlayButton style={{ margin: "1rem 0" }} />
        </Link>
        <Link to={ROUTES.howToPlay}>
          <Button text="HOW TO PLAY" variant="primary" />
        </Link>
      </Modal>
    </div>
  );
};
export default Home;
