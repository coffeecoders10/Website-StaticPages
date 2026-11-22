import type { Metadata } from "next";
import { Fraunces, Caveat } from "next/font/google";
import styles from "./anamika.module.css";

const display = Fraunces({ variable: "--font-display", subsets: ["latin"] });
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For Anamika 🌸",
  description: "A little letter, just for you.",
};

export default function AnamikaLayout({ children }: LayoutProps<"/anamika">) {
  return (
    <div className={`${styles.theme} ${display.variable} ${hand.variable}`}>
      {children}
    </div>
  );
}
