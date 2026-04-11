import { Link, createFileRoute } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import { getBlogPostBySlug } from '@/data/blog-posts'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog/$postSlug')({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.postSlug)
    if (!post) throw new Error('Blog post not found')
    return post
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || 'Blog'} – NailTask` },
      { name: 'description', content: loaderData?.excerpt || '' },
    ],
  }),
})

function BlogPostPage() {
  const post = Route.useLoaderData()
  const t = useT()

  // Simple markdown-to-HTML converter for basic formatting
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-4">{block.replace('## ', '')}</h2>
      }
      if (block.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold text-slate-900 mt-6 mb-3">{block.replace('### ', '')}</h3>
      }
      if (block.startsWith('**') && block.endsWith('**')) {
        return <p key={i} className="text-slate-600 leading-relaxed mb-4 font-semibold">{block.replace(/\*\*/g, '')}</p>
      }
      return <p key={i} className="text-slate-600 leading-relaxed mb-4">{block}</p>
    })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center text-sm text-amber-400 hover:text-amber-300 font-medium mb-6">
            {t('blog.backToBlog')}
          </Link>
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="w-4 h-4" /> {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {renderContent(post.content)}
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in NailTask Products?</h3>
          <p className="text-slate-600 mb-6">Get in touch with our sales team for pricing, product samples, and technical specifications.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-md transition-colors">
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md transition-colors">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
