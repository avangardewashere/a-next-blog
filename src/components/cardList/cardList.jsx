import React from "react";
import styles from "./index.module.css";
import Pagination from "../Pagination/pagination";
import Image from "next/image";

const CardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent Posts</div>
      <div className={styles.posts}>
        <div className={styles.post}>
         {/* Componentize */}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
