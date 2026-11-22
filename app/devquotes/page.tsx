import QuoteBoard from "./_components/QuoteBoard";
import styles from "./devquotes.module.css";

export default function DevQuotesPage() {
  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <p className={styles.prompt}>
          <span className={styles.user}>dev@quotes</span>
          <span className={styles.sep}>:</span>
          <span className={styles.path}>~</span>
          <span className={styles.sep}>$</span> cat inspiration.md
        </p>
        <h1 className={styles.title}>
          Keep shipping<span className={styles.cursor}>_</span>
        </h1>
        <p className={styles.sub}>Short words from people who built things that last.</p>
      </header>
      <QuoteBoard />
    </main>
  );
}
