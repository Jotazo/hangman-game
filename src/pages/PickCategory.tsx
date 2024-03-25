import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

import { ROUTES } from "../router/constants";

import { getCategories } from "@/data";

import BackHeader from "./Headers/BackHeader";

import { PickCategoryTitle } from "@/components/icons";

import styles from "./PickCategory.module.css";

const PickCategory = () => {
  const categories = getCategories();
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={`container d-flex flex-col`}
    >
      <BackHeader title={<PickCategoryTitle />} />
      <ul className={styles.list}>
        {categories.map((category) => (
          <Link
            key={category}
            style={{ textDecoration: "none" }}
            to={`${ROUTES.game}?Category=${category}`}
          >
            <li className={styles.listItem}>{category}</li>
          </Link>
        ))}
      </ul>
    </m.div>
  );
};
export default PickCategory;
