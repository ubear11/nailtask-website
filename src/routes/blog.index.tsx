import { Link, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start/server'
import { useT } from '@/lib/i18n'
import type { BlogPost } from '@/lib/content.server'
import hardcodedPosts from '@/data/blog-posts'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

// 服务器端函数：获取所有博客文章
const fetchBlogPosts = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    // 核心修复：仅在服务器运行时动态加载 fs 相关代码
    const { getAllBlogPosts } = await import('@/lib/content.server')
    
    // 从 content/ 目录获取 CMS 发布的文章
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
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('blog.subtitle')}</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-muted/30 rounded-lg">
          <p className="text-lg text-muted-foreground">暂无博客文章</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
            <Link 
              to="/blog/$slug" 
              params={{ slug: post.slug }} 
              key={post.slug}
              className="group flex flex-col bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              {post.image && (
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:underline">
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
