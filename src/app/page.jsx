import Featured from "@/components/featured/featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/cardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
