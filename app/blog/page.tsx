import { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import AdSense from '@/components/AdSense'
import { blogPosts } from '@/lib/blogData'

export const metadata: Metadata = {
  title: 'Blog | AI Tools, Career Guidance & Student Productivity',
  description: 'Explore our comprehensive blog covering AI tools for students, career guidance for tech professionals, and productivity tips to excel in college.',
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const category = searchParams.category
  const filteredPosts = category
    ? blogPosts.filter(post => post.category === category)
    : blogPosts

  const categoryLabels: Record<string, string> = {
    'ai-tools': 'AI Tools',
    'career': 'Career Guidance',
    'productivity': 'Student Productivity',
  }

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          {category ? categoryLabels[category] || 'Blog' : 'All Articles'}
        </h1>
        <p className="text-gray-600 mb-8">
          {category
            ? `Explore our ${categoryLabels[category]?.toLowerCase()} articles`
            : 'Discover articles on AI tools, career guidance, and student productivity'}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="/blog"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              !category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </a>
          <a
            href="/blog?category=ai-tools"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              category === 'ai-tools'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            AI Tools
          </a>
          <a
            href="/blog?category=career"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              category === 'career'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Career
          </a>
          <a
            href="/blog?category=productivity"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              category === 'productivity'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Productivity
          </a>
        </div>

        {/* AdSense Banner */}
        <AdSense format="horizontal" />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              category={post.category}
              date={new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
