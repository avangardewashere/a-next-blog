import Featured from "@/components/featured/featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
 
import CardList from "@/components/cardList/cardList";
import MenuComponent from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <MenuComponent />
      </div>
    </div>
  );
}
