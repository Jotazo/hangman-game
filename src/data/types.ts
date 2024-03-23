export type Data = {
  categories: { [key in Category]: Word[] };
};

export type Category =
  | "Movies"
  | "TV Shows"
  | "Countries"
  | "Capital Cities"
  | "Animals"
  | "Sports";

export type Word = {
  name: string;
  selected: boolean;
};
