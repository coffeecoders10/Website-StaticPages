import type { CSSProperties } from "react";
import styles from "../anamika.module.css";

// Deterministic values (no Math.random) so server and client render identically.
const petals = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 14 + ((i * 7) % 16),
  delay: -((i * 1.7) % 14),
  duration: 12 + ((i * 3) % 9),
  hue: i % 4,
}));

export default function Petals() {
  return (
    <div className={styles.petals} aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`${styles.petal} ${styles[`hue${p.hue}`]}`}
          style={
            {
              "--left": `${p.left}%`,
              "--size": `${p.size}px`,
              "--delay": `${p.delay}s`,
              "--dur": `${p.duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
