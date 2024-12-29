"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauth";

  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notauth" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage </Link>
          <Link href="/">About</Link>
          <Link href="/">Contact </Link>
          {status === "notauth" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
