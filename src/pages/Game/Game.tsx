import { useState } from "react";

import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

import { ROUTES } from "../../router/constants";

import { isValidCategory } from "@/data";

import useGameInfo from "@/hooks/useGameInfo";

import GameHeader from "../Headers/GameHeader";
import ScreenWord from "./ScreenWord";
import Keyboard from "./Keyboard";

import { Button, ModalContainer } from "@/components";
import PausedTitle from "@/components/icons/PausedTitle";

import styles from "./Game.module.css";

const Game = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const categorySelected = searchParams.get("Category");

  const { randomAnswer, keysPressed, errors, onClickLetter } =
    useGameInfo(categorySelected);

  if (!isValidCategory(categorySelected)) return <Navigate to={ROUTES.home} />;

  return (
    <div className="container">
      <GameHeader
        title={categorySelected}
        errors={errors}
        onOpenMenu={() => setIsModalOpen(true)}
      />
      <main className={styles.main}>
        <ScreenWord randomAnswer={randomAnswer} keysPressed={keysPressed} />
        <Keyboard keysPressed={keysPressed} onClickLetter={onClickLetter} />
      </main>
      {isModalOpen && (
        <ModalContainer title={<PausedTitle />} sxTitle={{ top: "-30px" }}>
          <Button
            variant="primary"
            text="CONTINUE"
            onClick={() => setIsModalOpen(false)}
          />
          <Button
            variant="primary"
            text="NEW CATEGORY"
            onClick={() => navigate(ROUTES.pickCategory)}
          />
          <Button
            variant="secondary"
            text="QUIT GAME"
            onClick={() => navigate(ROUTES.home)}
          />
        </ModalContainer>
      )}
    </div>
  );
};
export default Game;
