import posts from "@/data/blogPosts.json";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.description}</p>
    </main>
  );
}
