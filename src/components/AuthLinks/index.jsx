import React from "react";
import styles from "./index.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauth";
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
    </>
  );
};

export default AuthLinks;
