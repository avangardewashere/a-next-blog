import React from "react";
import styles from "./index.module.css";

import Image from "next/image";
import MenuComponent from "./../../components/Menu/Menu";

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
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque totam tempora asperiores, vel eveniet eligendi mollitia
              necessitatibus alias quae sed.
            </p>

            <h3>Lorem ipsum dolor sit.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque totam tempora asperiores, vel eveniet eligendi mollitia
              necessitatibus alias quae sed.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque totam tempora asperiores, vel eveniet eligendi mollitia
              necessitatibus alias quae sed.
            </p>
          </div>
        </div>
        <MenuComponent />
      </div>
    </div>
  );
};

export default SinglePostPage;
