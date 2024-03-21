import styles from "./CategorySelector.module.css";

interface CategorySelectorProps {
  category: string;
}

const CategorySelector = ({ category }: CategorySelectorProps) => {
  return <span className={styles.categorySelector}>{category}</span>;
};
export default CategorySelector;
