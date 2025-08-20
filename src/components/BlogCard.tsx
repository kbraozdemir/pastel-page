import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <h2 className="text-xl font-semibold text-pink-600">{post.title}</h2>
        <p className="text-gray-700 mb-2">{post.description}</p>
        <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
      </div>
    </Link>

  );
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default BlogCard;