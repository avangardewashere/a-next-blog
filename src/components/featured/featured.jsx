import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Avant Blog </b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            labore similique suscipit perspiciatis dolorum eveniet accusamus
            mollitia corrupti blanditiis nemo.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
