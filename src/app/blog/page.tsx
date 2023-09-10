import type { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Unable to fetch posts");

  return res.json();
}

export const metadata: Metadata = {
  title: "Tangle Teezer blog about brushes",
  description: "Our blog about brushes",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
