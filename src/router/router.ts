import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import HowToPlay from "../pages/HowToPlay";
import PickCategory from "../pages/PickCategory";
import Game from "../pages/Game";

export const ROUTES = {
  home: "/",
  howToPlay: "/how-to-play",
  pickCategory: "/pick-category",
  game: "/game",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: Home(),
  },
  {
    path: ROUTES.howToPlay,
    element: HowToPlay(),
  },
  {
    path: ROUTES.pickCategory,
    element: PickCategory(),
  },
  {
    path: ROUTES.game,
    element: Game(),
  },
]);
