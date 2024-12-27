import Navbar from "@/components/navbar/navbar";
import styles from "./homepage.module.css";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Footer />
    </div>
  );
}
