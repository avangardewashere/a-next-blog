import React from "react";
import styles from "./index.module.css";
import Pagination from "../Pagination/pagination";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;
