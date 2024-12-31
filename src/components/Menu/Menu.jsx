import React from "react";
import styles from "./index.module.css";

import MenuPosts from "./MenuPost/menuPost";
import CategoriesList from "./CategoriesList/categoriesList";

const MenuComponent = () => {
  return (
    <div className={styles.container}>
      {/** Chosen */}

      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPosts withImage={false} />
      {/* <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div> */}

      {/**Categories */}

      <h2 className={styles.subTitle}>{"Discover By Topic"}</h2>
      <h1 className={styles.title}>Categories</h1>

      <CategoriesList />
      {/* <div className={styles.categoryList}>
        <Link
          className={`${styles.categoryItem} ${styles.style}`}
          href="/blog?cat=style"
        >
          Style
        </Link>
      </div> */}

      {/** MOst POpulrt */}
      <h2 className={styles.subTitle}>{"Chosen by the editor"}</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPosts withImage={true} />
      {/* <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default MenuComponent;
