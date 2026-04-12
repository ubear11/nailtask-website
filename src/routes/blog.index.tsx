import { Link, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start/server'
import { useT } from '@/lib/i18n'
import type { BlogPost } from '@/lib/types'
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
