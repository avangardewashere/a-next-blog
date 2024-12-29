import Link from "next/link";
import styles from "./../index.module.css";
const CategoriesList = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        className={`${styles.categoryItem} ${styles.style}`}
        href="/blog?cat=style"
      >
        Style
      </Link>
    </div>
  );
};

export default CategoriesList;
