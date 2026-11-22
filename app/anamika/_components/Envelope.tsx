"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { letter } from "../_content/message";
import styles from "../anamika.module.css";

type Phase = "closed" | "opening" | "open";

const burst = Array.from({ length: 14 }, (_, i) => ({
  angle: (i / 14) * 360,
  dist: 90 + ((i * 29) % 70),
  emoji: ["🌸", "🌷", "🌼", "💮", "🌺"][i % 5],
}));

export default function Envelope() {
  const [phase, setPhase] = useState<Phase>("closed");
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Flap opens + letter slides up, THEN the full letter pops out.
  useEffect(() => {
    if (phase !== "opening") return;
    const t = setTimeout(() => {
      setPhase("open");
      dialogRef.current?.showModal();
    }, 1100);
    return () => clearTimeout(t);
  }, [phase]);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className={`${styles.envelope} ${phase !== "closed" ? styles.isOpen : ""}`}
        onClick={() => phase === "closed" && setPhase("opening")}
        aria-label="Open your birthday letter"
      >
        <span className={styles.envBack} />
        <span className={styles.envLetter}>
          <span className={styles.envLetterLines} />
        </span>
        <span className={styles.envFront} />
        <span className={styles.envFlap}>
          <span className={styles.seal}>♥</span>
        </span>
      </button>
      <p className={`${styles.hint} ${phase !== "closed" ? styles.hintHidden : ""}`}>
        tap the envelope
      </p>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="letter-title"
        onClose={() => setPhase("closed")}
        onClick={(e) => e.target === dialogRef.current && close()}
      >
        {phase === "open" && (
          <article className={styles.card}>
            <div className={styles.burst} aria-hidden="true">
              {burst.map((b, i) => (
                <span
                  key={i}
                  style={
                    {
                      "--a": `${b.angle}deg`,
                      "--d": `${b.dist}px`,
                      animationDelay: `${i * 30}ms`,
                    } as CSSProperties
                  }
                >
                  {b.emoji}
                </span>
              ))}
            </div>
            <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true">
              🌸
            </span>
            <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true">
              🌷
            </span>

            <h2 id="letter-title" className={styles.cardTitle}>
              {letter.title}
            </h2>
            <div className={styles.cardBody}>
              {letter.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className={styles.signoff}>
              {letter.signoff}
              <br />
              <strong>{letter.from}</strong> 💗
            </p>
            <button type="button" className={styles.closeBtn} onClick={close}>
              Close letter
            </button>
          </article>
        )}
      </dialog>
    </>
  );
}
