import blogPosts from '@/data/blogPosts.json';
import BlogCard from '@/components/BlogCard';

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      
      <h1 className="text-3xl font-bold text-pink-700 text-center mb-8">Welcome to My Blog</h1>
      <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}