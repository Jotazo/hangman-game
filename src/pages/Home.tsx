import { Link } from "react-router-dom";

import { ROUTES } from "../router/constants";

import Button from "../components/Button";
import HangmanTitle from "../components/icons/HangmanTitle";
import Modal from "../components/Modal";
import PlayButton from "../components/PlayButton";

const Home = () => {
  return (
    <Modal title={<HangmanTitle />}>
      <Link to={ROUTES.pickCategory}>
        <PlayButton style={{ margin: "1rem 0" }} />
      </Link>
      <Link to={ROUTES.howToPlay}>
        <Button text="HOW TO PLAY" variant="primary" />
      </Link>
    </Modal>
  );
};
export default Home;
