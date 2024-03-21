import { Link } from "react-router-dom";

import { ROUTES } from "../router/router";

import HomeLayout from "../layouts/HomeLayout";

import Button from "../components/Button";
import HangmanTitle from "../components/icons/HangmanTitle";
import Modal from "../components/Modal";
import PlayButton from "../components/PlayButton";

const Home = () => {
  return (
    <HomeLayout>
      <Modal title={<HangmanTitle />}>
        <Link to={ROUTES.pickCategory}>
          <PlayButton style={{ margin: "1rem 0" }} />
        </Link>
        <Link to={ROUTES.howToPlay}>
          <Button text="HOW TO PLAY" variant="primary" />
        </Link>
      </Modal>
    </HomeLayout>
  );
};
export default Home;
