import { Link, createFileRoute } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import blogPosts from '@/data/blog-posts'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: 'Blog & News – NailTask' },
      { name: 'description', content: 'Industry insights, product updates, and construction best practices from NailTask — your trusted fastening tool partner.' },
    ],
  }),
})

function BlogIndex() {
  const t = useT()

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{t('blog.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$postSlug"
                params={{ postSlug: post.slug }}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" /> {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{post.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                    {t('blog.readMore')} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
