// Add or edit quotes here. `tag` must be one of the Tag values below.
export type Tag = "craft" | "focus" | "simplicity" | "growth";

export const tags: Tag[] = ["craft", "focus", "simplicity", "growth"];

export type Quote = { text: string; author: string; tag: Tag };

export const quotes: Quote[] = [
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck", tag: "craft" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", tag: "focus" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth", tag: "focus" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra", tag: "simplicity" },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    tag: "craft",
  },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay", tag: "growth" },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    tag: "craft",
  },
  { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan", tag: "simplicity" },
  {
    text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
    tag: "simplicity",
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian Kernighan",
    tag: "craft",
  },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson", tag: "focus" },
  { text: "Deleted code is debugged code.", author: "Jeff Sickel", tag: "simplicity" },
  { text: "A ship in harbor is safe, but that is not what ships are built for.", author: "John A. Shedd", tag: "growth" },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Will Durant",
    tag: "growth",
  },
  { text: "Fall seven times, stand up eight.", author: "Japanese proverb", tag: "growth" },
];
