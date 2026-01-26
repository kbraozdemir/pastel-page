import posts from "@/data/blogPosts.json";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
