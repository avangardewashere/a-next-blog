"use client";
import React, { useState } from "react";
import styles from "./index.module.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />

      <div className={styles.editor}>
        <button className={styles.button}>➕</button>
        {open && (
          <>
            <div className={styles.add}>
              <button className={styles.addButton}>
                <span> 🙂</span>
              </button>
              <button className={styles.addButton}>
                <span> 🚀</span>
              </button>
              <button className={styles.addButton}>
                <span> 📽️</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Write;
