import blogPosts from '@/data/blogPosts.json';
import BlogCard from '@/components/BlogCard';

export default function HomePage() {
  return (
    <div className="bg-pink-200 text-gray-900 p-6 rounded-lg shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      <BlogCard
        title="Tailwind ile Blog Tasarımı"
        description="Bu yazıda pastel temalı bir blog kartı bileşeni nasıl oluşturulur, adım adım inceliyoruz."
        date="22 Ağustos 2025"
        imageUrl="https://source.unsplash.com/featured/?pastel,design"
        tags={["tailwind", "tasarım", "blog"]}
      />

      <BlogCard
        title="Pastel Tasarımın Gücü"
        description="Pastel tonlar, sade arayüzlerde kullanıcıyı yormadan dikkat çekmeyi başarır. Bu yazıda pastel estetiğin teknik projelere etkisini inceliyoruz."
        date="22 Ağustos 2025"
        imageUrl="https://source.unsplash.com/featured/?pastel,design"
        tags={["tasarım", "pastel", "UI"]}
      />

    </div>
  );
}