import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/themetoggle";
import AuthLinks from "../AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="social-icon" width={24} height={24} />
        <Image src="/instagram.png" alt="social-icon" width={24} height={24} />
        <Image src="/tiktok.png" alt="social-icon" width={24} height={24} />
        <Image src="/youtube.png" alt="social-icon" width={24} height={24} />
      </div>
      <div className={styles.logo}>Avant Blog</div>
      <div className={styles.links}>
        <ThemeToggle/> 
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks /> 
      </div>
    </div>
  );
};

export default Navbar;
