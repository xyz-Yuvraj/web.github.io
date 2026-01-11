import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import AdSense from '@/components/AdSense'
import { getPostBySlug, blogPosts } from '@/lib/blogData'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.category,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  const categoryLabels: Record<string, string> = {
    'ai-tools': 'AI Tools',
    'career': 'Career Guidance',
    'productivity': 'Student Productivity',
  }

  return (
    <article className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          {' / '}
          <span className="text-gray-900">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full font-semibold">
              {categoryLabels[post.category]}
            </span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{post.excerpt}</p>
          <div className="text-gray-500">By {post.author}</div>
        </header>

        {/* Top AdSense */}
        <AdSense format="horizontal" />

        {/* Featured Image Placeholder */}
        <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-8 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">{post.title.charAt(0)}</span>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Mid-Content AdSense */}
        <AdSense format="rectangle" />

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <section className="my-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faq.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom AdSense */}
        <AdSense format="horizontal" />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="card group"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
