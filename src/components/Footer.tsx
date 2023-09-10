import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container">
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/blog/blog-item"}>Blog item</Link>
      &copy; 2007 - 2023 Всі права захищені My-Tangle
    </footer>
  );
};
