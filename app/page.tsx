import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import Newsletter from '@/components/Newsletter'
import AdSense from '@/components/AdSense'
import { getFeaturedPosts, blogPosts } from '@/lib/blogData'

export default function Home() {
  const featuredPosts = getFeaturedPosts()
  const categories = [
    { slug: 'ai-tools', name: 'AI Tools', count: blogPosts.filter(p => p.category === 'ai-tools').length, description: 'Discover powerful AI tools that transform how you study and work' },
    { slug: 'career', name: 'Career Guidance', count: blogPosts.filter(p => p.category === 'career').length, description: 'Navigate your career path with expert guidance and insights' },
    { slug: 'productivity', name: 'Student Productivity', count: blogPosts.filter(p => p.category === 'productivity').length, description: 'Boost your productivity with proven strategies and techniques' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smarter AI Tools. Better Careers. Higher Productivity.
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Your ultimate resource for AI tools, career guidance, and productivity tips designed specifically for college students and career-focused learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Explore Blog
            </Link>
            <Link href="/about" className="btn-secondary bg-primary-500 text-white hover:bg-primary-400">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <div className="container-custom py-4">
        <AdSense format="horizontal" />
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="card hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-primary-600 font-semibold">
                  {category.count} Articles →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <Link href="/blog" className="text-primary-600 font-semibold hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
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
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Bottom AdSense */}
      <div className="container-custom py-4">
        <AdSense format="horizontal" />
      </div>
    </>
  )
}
