import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}></div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="avan blog" width={50} height={50} />
        <h1 className={styles.logoText}>avant blog</h1>
      </div>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt odio,
        accusantium debitis quod soluta ab.
      </p>
    </div>
  );
};

export default Footer;
