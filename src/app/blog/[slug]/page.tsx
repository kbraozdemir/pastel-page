import posts from "@/data/blogPosts.json";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Yazı bulunamadı</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
