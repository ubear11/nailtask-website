import { Link, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start/server'
import { useT } from '@/lib/i18n'
import type { BlogPost } from '@/lib/content'
import hardcodedPosts from '@/data/blog-posts'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

// 服务器端函数：获取所有博客文章
const fetchBlogPosts = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    // 从 content/ 目录获取 CMS 发布的文章
    const { getAllBlogPosts } = await import('@/lib/content')
    const cmsPosts = getAllBlogPosts()

    // 合并 CMS 文章 and 硬编码文章，CMS 文章优先
    const cmsSlugSet = new Set(cmsPosts.map(p => p.slug))
    const fallbackPosts = hardcodedPosts.filter(p => !cmsSlugSet.has(p.slug))

    const allPosts = [...cmsPosts, ...fallbackPosts]

    // 按日期排序
    return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // 如果出错，返回硬编码数据
    return hardcodedPosts
  }
})

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
  loader: async () => {
    const posts = await fetchBlogPosts()
    return { posts }
  },
  head: () => ({
    meta: [
      { title: 'Blog & News – NailTask' },
      { name: 'description', content: 'Industry insights, product updates, and construction best practices from NailTask — your trusted fastening tool partner.' },
    ],
  }),
})

function BlogIndex() {
  const t = useT()
  const { posts } = Route.useLoaderData()

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
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">暂无博客文章</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post: BlogPost) => (
                <Link
                  key={post.slug}
                  to="/blog/$postSlug"
                  params={{ postSlug: post.slug }}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all"
                >
                  <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                    <img
                      src={post.image || '/placeholder.png'}
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
          )}
        </div>
      </section>
    </div>
  )
}
