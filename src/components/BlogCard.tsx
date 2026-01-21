import Link from 'next/link'

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  tags?: string[];
  slug?: string;
}

export default function BlogCard({ title, description, date, imageUrl, tags, slug }: BlogCardProps) {
  return (
    <div className="opacity-0 animate-fadeIn transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-md mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{date}</div>
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{title}</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">{description}</p>
        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-2 py-1 rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        {slug && (
          <Link href={`/blog/${slug}`} className="block mt-4 text-pink-600 hover:underline text-sm">
            Devamını oku
          </Link>
        )}
      </div>
    </div>
  );
}