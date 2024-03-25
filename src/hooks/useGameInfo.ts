import { useEffect, useState } from "react";

import { getRandomAnswer, isValidCategory, getOnlyAnswerLetters } from "@/data";

interface GameInfo {
  randomAnswer: string;
  keysPressed: string[];
  errors: number;
  isWin: boolean;
  isLose: boolean;
}

const useGameInfo = (categorySelected: string | null) => {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    randomAnswer: !isValidCategory(categorySelected)
      ? ""
      : getRandomAnswer(categorySelected).name,
    keysPressed: [],
    errors: 0,
    isWin: false,
    isLose: false,
  });

  const { randomAnswer, keysPressed, errors } = gameInfo;

  useEffect(() => {
    if (errors === 8) setLosedGame();
  }, [errors]);

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

  const setLosedGame = () => {
    setGameInfo((prevGameInfo) => ({
      ...prevGameInfo,
      isLose: true,
    }));
  };

  const setWinedGame = () => {
    setGameInfo((prevGameInfo) => ({
      ...prevGameInfo,
      isWin: true,
    }));
  };

  const isAnsweredCorrectly = (letter: string) => {
    const randomAnswerLetters = getOnlyAnswerLetters(randomAnswer);
    const uniqueAnswerLetters = [...new Set(randomAnswerLetters)];
    const updatedKeysPressed = [...keysPressed, letter];
    return uniqueAnswerLetters.every((uniqueLetter) =>
      updatedKeysPressed.includes(uniqueLetter)
    );
  };

  const onClickLetter = (letter: string) => {
    if (keysPressed.includes(letter)) return;
    if (!randomAnswer.includes(letter)) addError();
    addKeyPressed(letter);

    if (isAnsweredCorrectly(letter)) setWinedGame();
  };

  const resetGame = () => {
    setGameInfo({
      randomAnswer: !isValidCategory(categorySelected)
        ? ""
        : getRandomAnswer(categorySelected).name,
      keysPressed: [],
      errors: 0,
      isWin: false,
      isLose: false,
    });
  };

  return { gameInfo, onClickLetter, resetGame };
};
export default useGameInfo;
