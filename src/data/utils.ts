import { DATA } from "./data";

import { Category, Answer } from "./types";

export const getCategories = (): Category[] => {
  return (Object.keys(DATA.categories) as Category[]).map(
    (category) => category
  );
};

export const getAnswers = (category: Category): Answer[] => {
  return DATA.categories[category].map((answer) => ({
    ...answer,
    name: answer.name.toUpperCase(),
  }));
};

export const getRandomAnswer = (category: Category) => {
  const answers = getAnswers(category);
  const indexRandomAnswer = Math.floor(Math.random() * answers.length);
  return answers[indexRandomAnswer];
};

export const getOnlyAnswerLetters = (answer: string) => {
  return answer.replaceAll(/\s+/g, "").replaceAll("'", "");
};

export const isValidCategory = (value: string | null): value is Category => {
  return Boolean(value) && getCategories().includes(value as Category);
};
