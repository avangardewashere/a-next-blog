import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "auth";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "auth" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="write a comment..." />
          <button className={styles.button}>Submit</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere
          consectetur dolorem ex autem facilis aspernatur praesentium veniam
          provident accusamus. Sed corporis sint placeat ad rem neque adipisci
          fuga magni?
        </p>
      </div>
    </div>
  );
};

export default Comments;
