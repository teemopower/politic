import styles from "./page.module.css";
import Image from 'next/image';
import { Form } from './components/Form'

export default function Home() {
  return (
    <div className={styles["home-container"]}>
     
      <div className={styles["form"]}>
        <Form />
      </div>
      
    </div>
  );
}
