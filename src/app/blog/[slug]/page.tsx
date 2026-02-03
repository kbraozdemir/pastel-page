import posts from "@/data/blogPosts.json";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article className="prose prose-pink">
        <div
          className="prose prose-pink"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </article>
    </main>
  );
}
