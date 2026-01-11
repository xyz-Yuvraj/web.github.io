import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  category: string
  date: string
  readTime: string
  image?: string
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  category,
  date,
  readTime,
  image = '/placeholder-blog.jpg'
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    'ai-tools': 'bg-blue-100 text-blue-800',
    'career': 'bg-green-100 text-green-800',
    'productivity': 'bg-purple-100 text-purple-800',
  }

  const categoryLabels: Record<string, string> = {
    'ai-tools': 'AI Tools',
    'career': 'Career',
    'productivity': 'Productivity',
  }

  return (
    <article className="card group">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{title.charAt(0)}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-2 text-sm text-gray-500">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || 'bg-gray-100 text-gray-800'}`}>
            {categoryLabels[category] || category}
          </span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        <div className="mt-4 text-primary-600 font-semibold group-hover:underline">
          Read more →
        </div>
      </Link>
    </article>
  )
}
