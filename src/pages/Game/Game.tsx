import { useState } from "react";

import { Navigate, useSearchParams } from "react-router-dom";

import { ROUTES } from "../../router/constants";

import { getRandomWord, isValidCategory } from "@/data";

import GameHeader from "../Headers/GameHeader";
import ScreenWord from "./ScreenWord";
import Keyboard from "./Keyboard";

import styles from "./Game.module.css";

const Game = () => {
  const [searchParams] = useSearchParams();
  const categorySelected = searchParams.get("Category");

  const [rndWord, setRndWord] = useState(() => {
    if (!isValidCategory(categorySelected))
      return { name: "", selected: false };
    return getRandomWord(categorySelected);
  });

  const [keysPressed, setKeysPressed] = useState<string[]>([]);

  if (!isValidCategory(categorySelected)) return <Navigate to={ROUTES.home} />;

  const onClickLetter = (letter: string) => {
    if (keysPressed.includes(letter)) return;
    setKeysPressed((prevKeys) => [...prevKeys, letter]);
  };

  return (
    <div className="container">
      <GameHeader title={categorySelected} />
      <main className={styles.main}>
        <ScreenWord rndWord={rndWord} keysPressed={keysPressed} />
        <Keyboard keysPressed={keysPressed} onClickLetter={onClickLetter} />
      </main>
    </div>
  );
};
export default Game;
