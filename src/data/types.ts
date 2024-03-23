export type Data = {
  categories: { [key in Category]: Answer[] };
};

export type Category =
  | "Movies"
  | "TV Shows"
  | "Countries"
  | "Capital Cities"
  | "Animals"
  | "Sports";

export type Answer = {
  name: string;
  selected: boolean;
};
