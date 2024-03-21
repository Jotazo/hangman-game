import { Link } from "react-router-dom";

import { ROUTES } from "../router/constants";

import { getCategories } from "../utils/dataUtils";

import BackHeader from "./Headers/BackHeader";

import PickCategoryTitle from "../components/icons/PickCategoryTitle";

import styles from "./PickCategory.module.css";

const PickCategory = () => {
  const categories = getCategories();
  return (
    <div className={`container d-flex flex-col`}>
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
    </div>
  );
};
export default PickCategory;
