import Link from "next/link";
import blogPosts from "@/data/blogPosts.json";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <Link href="/" className="text-xl font-bold text-pink-600 hover:opacity-80">
          PastelBlog.dev
        </Link>

        <input
          type="text"
          placeholder="Yazı ara..."
          className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <div className="space-x-4">
          <Link href="/coming-soon" className="text-sm text-gray-700 hover:text-pink-600">
            Giriş
          </Link>
          <Link href="/coming-soon" className="text-sm text-gray-700 hover:text-pink-600">
            Kayıt
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto whitespace-nowrap px-4 py-2 bg-pink-50">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="inline-block mr-4 hover:opacity-80"
            title={post.title}
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-24 w-40 object-cover rounded-md border"
            />
          </Link>
        ))}
      </div>
    </header>
  );
}
