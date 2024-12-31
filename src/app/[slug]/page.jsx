import React from "react";
import styles from "./index.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span>John Doe</span>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.ImageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}></div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePostPage;
