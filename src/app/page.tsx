import styles from "./page.module.css";
import { ConvertForm } from "@/app/components/layouts/ConvertForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>transfile</h1>
        <ConvertForm />
      </div>
    </div>
  );
}
