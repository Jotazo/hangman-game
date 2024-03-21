import HomeLayout from "../layouts/HomeLayout";

import Button from "../components/Button";
import HangmanTitle from "../components/icons/HangmanTitle";
import Modal from "../components/Modal";
import PlayButton from "../components/PlayButton";

const Home = () => {
  return (
    <HomeLayout>
      <Modal title={<HangmanTitle />}>
        <PlayButton style={{ margin: "1rem 0" }} />
        <Button text="HOW TO PLAY" variant="primary" />
      </Modal>
    </HomeLayout>
  );
};
export default Home;
