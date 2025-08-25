import blogPosts from "@/data/blogPosts.json";


// components/Header.tsx
export default function Header() {
  return (
    <header className="w-full border-b">
      {/* Üst navigasyon */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        {/* Sol: Logo */}
        <a href="/" className="text-xl font-bold text-pink-600 hover:opacity-80">
          PastelBlog.dev
        </a>

        {/* Orta: Arama */}
        <input
          type="text"
          placeholder="Yazı ara..."
          className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {/* Sağ: Giriş / Kayıt */}
        <div className="space-x-4">
          <a href="/login" className="text-sm text-gray-700 hover:text-pink-600">Giriş</a>
          <a href="/register" className="text-sm text-gray-700 hover:text-pink-600">Kayıt</a>
        </div>
      </div>

      {/* Alt: Scrollable blog görselleri */}
      <div className="overflow-x-auto whitespace-nowrap px-4 py-2 bg-pink-50">
        {blogPosts.map((post) => (
            <a
                key={post.id}
                href={`/blog/${post.id}`}
                className="inline-block mr-4 hover:opacity-80"
                title={post.title}
            >
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-24 w-40 object-cover rounded-md border"
                />
            </a>
            ))}
        </div>
    </header>
  );
}
