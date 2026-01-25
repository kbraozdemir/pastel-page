import posts from "@/data/blogPosts.json";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  const { slug } = params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
