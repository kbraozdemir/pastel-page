import blogPosts from '@/data/blogPosts.json';
import BlogCard from '@/components/BlogCard';

export default function HomePage() {
  return (
    <main className="bg-pink-200 text-gray-900 px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
            imageUrl={post.imageUrl}
            tags={post.tags}
            slug={post.slug}
          />
        ))}
      </div>
    </main>
  );
}
