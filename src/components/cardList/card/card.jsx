import Image from "next/image";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt="" src="/p1.jpeg" fill />
      </div>
      <div className={styles.textContainer}></div>
    </div>
  );
};

export default Card;
