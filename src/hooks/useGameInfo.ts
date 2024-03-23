import { useState } from "react";

import { getRandomWord, isValidCategory } from "@/data";

interface GameInfo {
  randomAnswer: string;
  keysPressed: string[];
  errors: number;
}

const useGameInfo = (categorySelected: string | null) => {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    randomAnswer: !isValidCategory(categorySelected)
      ? ""
      : getRandomWord(categorySelected).name,
    keysPressed: [],
    errors: 0,
  });

  const { randomAnswer, keysPressed, errors } = gameInfo;

  const addError = () => {
    setGameInfo((prevGameInfo) => ({
      ...prevGameInfo,
      errors: prevGameInfo.errors + 1,
    }));
  };

  const addKeyPressed = (letter: string) => {
    setGameInfo((prevGameInfo) => ({
      ...prevGameInfo,
      keysPressed: [...prevGameInfo.keysPressed, letter],
    }));
  };

  const onClickLetter = (letter: string) => {
    if (keysPressed.includes(letter)) return;
    if (!randomAnswer.includes(letter)) addError();
    addKeyPressed(letter);
  };

  return { randomAnswer, keysPressed, errors, onClickLetter };
};
export default useGameInfo;
