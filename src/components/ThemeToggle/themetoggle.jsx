"use client";
import React, { useContext } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme,toggle } = useContext(ThemeContext);
//   console.log("test", theme);
  return (
    <div onClick={toggle} className={styles.container}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
