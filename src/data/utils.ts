import { DATA } from "./data";

import { Category, Word } from "./types";

export const getCategories = (): Category[] => {
  return (Object.keys(DATA.categories) as Category[]).map(
    (category) => category
  );
};

export const getWords = (category: Category): Word[] => {
  return DATA.categories[category].map((word) => ({
    ...word,
    name: word.name.toUpperCase(),
  }));
};

export const getRandomWord = (category: Category) => {
  const words = getWords(category);
  const indexRandomWord = Math.floor(Math.random() * words.length);
  return words[indexRandomWord];
};

export const isValidCategory = (value: string | null): value is Category => {
  return Boolean(value) && getCategories().includes(value as Category);
};
