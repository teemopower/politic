import styles from "./page.module.css";
import Image from 'next/image';
import { Form } from './components/Form'

export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["logo"]}>
        <Image 
        src="/vibe.webp" 
        alt="vibes" 
        width={400} 
        height={220}
        />
      </div>
      <div className={styles["headline"]}>
        <p>Sign Up to Rate Vibes</p>
      </div>
      <div className={styles["form"]}>
        <Form />
      </div>
      
    </div>
  );
}
