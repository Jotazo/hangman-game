import { Category, DATA, Word } from "../data";

export const getCategories = (): Category[] => {
  return (Object.keys(DATA.categories) as Category[]).map(
    (category) => category
  );
};

export const getWords = (category: Category): Word[] => {
  return DATA.categories[category];
};

export const isValidCategory = (value: string): value is Category => {
  return getCategories().includes(value as Category);
};
