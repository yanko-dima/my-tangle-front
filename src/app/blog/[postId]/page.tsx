import { Metadata } from "next";

type Props = {
  params: {
    postId: string;
  };
};

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

export async function generateMetadata({
  params: { postId: postId },
}: Props): Promise<Metadata> {
  const post = await getData(postId);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { postId: postId } }: Props) {
  const post = await getData(postId);

  return (
    <>
      <p>Post ID: {postId}</p>
      <h1>{post.title} </h1>
      <p>{post.body}</p>
    </>
  );
}
