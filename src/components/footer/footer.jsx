import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="avan blog" width={50} height={50} />
          <h1 className={styles.logoText}>avant blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          odio, accusantium debitis quod soluta ab.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link className={styles.list} href="/">
            Homepage
          </Link>
          <Link className={styles.list} href="/">
            Blog
          </Link>
          <Link className={styles.list} href="/">
            About
          </Link>
          <Link className={styles.list} href="/">
            Contact
          </Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link className={styles.list} href="/">
            Stles
          </Link>
          <Link className={styles.list} href="/">
            Fashion
          </Link>
          <Link className={styles.list} href="/">
            Coding
          </Link>
          <Link className={styles.list} href="/">
            Travel
          </Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link className={styles.list} href="/">
            Facebook
          </Link>
          <Link className={styles.list} href="/">
            Instagram
          </Link>
          <Link className={styles.list} href="/">
            Tiktok
          </Link>
          <Link className={styles.list} href="/">
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
