import Petals from "./_components/Petals";
import Envelope from "./_components/Envelope";
import styles from "./anamika.module.css";

export default function AnamikaPage() {
  return (
    <main className={styles.stage}>
      <Petals />
      <header className={styles.intro}>
        <p className={styles.kicker}>psst… something for you</p>
        <h1 className={styles.heading}>You&apos;ve got a letter</h1>
      </header>
      <Envelope />
    </main>
  );
}
