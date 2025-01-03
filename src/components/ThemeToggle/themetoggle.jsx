"use client";
import React, { useContext, useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { ThemeContext } from "./../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  //   console.log("test", theme);

//   useEffect(()=>{
//     console.log(theme)
//   },[theme])

  return (
    <div
      onClick={toggle}
      className={styles.container}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
