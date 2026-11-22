"use client";

import { useState } from "react";
import { quotes, tags, type Tag } from "../_content/quotes";
import styles from "../devquotes.module.css";

export default function QuoteBoard() {
  const [filter, setFilter] = useState<Tag | "all">("all");
  const [copied, setCopied] = useState<number | null>(null);

  const visible = quotes
    .map((q, i) => ({ ...q, i }))
    .filter((q) => filter === "all" || q.tag === filter);

  async function copy(i: number) {
    const q = quotes[i];
    try {
      await navigator.clipboard.writeText(`"${q.text}" — ${q.author}`);
      setCopied(i);
      setTimeout(() => setCopied((c) => (c === i ? null : c)), 1400);
    } catch {
      /* clipboard unavailable (insecure context) — ignore */
    }
  }

  return (
    <section aria-label="Quotes">
      <div className={styles.filters} role="group" aria-label="Filter by tag">
        {(["all", ...tags] as const).map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={filter === t}
            className={`${styles.chip} ${filter === t ? styles.chipOn : ""}`}
            onClick={() => setFilter(t)}
          >
            {t === "all" ? "--all" : `--${t}`}
          </button>
        ))}
      </div>

      <ol className={styles.list}>
        {visible.map((q, n) => (
          <li key={q.i} className={styles.item}>
            <div className={styles.bar}>
              <span className={styles.dots} aria-hidden="true">
                <i /> <i /> <i />
              </span>
              <span className={styles.file}>
                {String(n + 1).padStart(2, "0")}_{q.tag}.md
              </span>
              <button
                type="button"
                className={styles.copy}
                onClick={() => copy(q.i)}
                aria-label={`Copy quote by ${q.author}`}
              >
                {copied === q.i ? "copied ✓" : "copy"}
              </button>
            </div>
            <blockquote className={styles.quote}>
              <p>
                <span className={styles.mark}>&gt;</span> {q.text}
              </p>
              <footer>
                <span className={styles.comment}>{"// "}</span>
                {q.author}
              </footer>
            </blockquote>
          </li>
        ))}
      </ol>
    </section>
  );
}
