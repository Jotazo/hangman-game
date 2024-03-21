import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants";

import Layout from "../layouts/Layout";

import Home from "../pages/Home";
import HowToPlay from "../pages/HowToPlay";
import PickCategory from "../pages/PickCategory";
import Game from "../pages/Game";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.howToPlay} element={<HowToPlay />} />
          <Route path={ROUTES.pickCategory} element={<PickCategory />} />
          <Route path={ROUTES.game} element={<Game />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Navigation;
