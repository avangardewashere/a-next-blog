import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="social-icon" width={24} height={24} />
      </div>
      <div className={styles.logo}>Avant Blog</div>
      <div className={styles.links}></div>
    </div>
  );
};

export default Navbar;
