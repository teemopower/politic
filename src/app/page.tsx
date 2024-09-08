import styles from "./page.module.css";
import Image from 'next/image';
import { Form } from './components/Form'

export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["logo"]}>
        <Image 
        src="/trump.jpg" 
        alt="trump" 
        width={400} 
        height={200}
        />
      </div>
      <div className={styles["headline"]}>
        <p>Kamala Harris Is Trying To <span>Steal The Election.</span></p>
        <p>Stop The Steal 2024 by Signing the Petition!</p>
      </div>
      
      <div className={styles["form"]}>
        <Form />
      </div>
      
    </div>
  );
}
