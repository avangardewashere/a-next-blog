import React from "react";
import styles from "./index.module.css";
import CardList from "@/components/cardList/cardList";
import Menu from "@/components/Menu/Menu";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Style Blogs</div>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
