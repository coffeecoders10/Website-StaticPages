import type { Metadata } from "next";
import "./globals.css";

// Intentionally bare: no fonts, colors or chrome here.
// Each first-level route (app/<site>/layout.tsx) brings its own theme.
export const metadata: Metadata = {
  title: "Coffee Coders · Static Pages",
  description: "A collection of tiny, independent static websites.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
