import Link from "next/link";

// Add a line here whenever you create a new first-level site.
const sites = [
  { href: "/anamika", name: "anamika", blurb: "A floral birthday letter" },
  { href: "/devquotes", name: "devquotes", blurb: "Dark-mode quotes for coders" },
];

export default function Index() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#fafafa",
        color: "#222",
      }}
    >
      <div>
        <h1 style={{ fontSize: "1.25rem" }}>Static pages</h1>
        <ul style={{ lineHeight: 2, paddingLeft: "1.2rem" }}>
          {sites.map((s) => (
            <li key={s.href}>
              <Link href={s.href}>/{s.name}</Link> — {s.blurb}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
