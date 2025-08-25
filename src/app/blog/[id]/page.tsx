import blogPosts from '@/data/blogPosts.json';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';


interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  content?: string;
  image?: string;
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);


  if (!post) {
    return <div className="text-center py-20 text-gray-500">Yazı bulunamadı.</div>;
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      {post.imageUrl && (
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={800}
        height={500}
        className="rounded-xl mb-6"
      />
    )}
    
      <h1 className="text-3xl font-bold text-pink-700 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.date).toLocaleDateString('tr-TR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p className="text-gray-800 leading-relaxed">{post.description}</p>
      <div className="prose prose-pink max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <Link href="/blog" className="mt-6 inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded hover:bg-pink-200 transition">
        ← Tüm Yazılara Dön
        </Link>
    </main>
    
  );
}