import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import styles from "./devquotes.module.css";

const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });
const sans = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "~/devquotes",
  description: "Quotes to keep you shipping.",
};

export default function DevQuotesLayout({ children }: LayoutProps<"/devquotes">) {
  return (
    <div className={`${styles.theme} ${mono.variable} ${sans.variable}`}>
      {children}
    </div>
  );
}
