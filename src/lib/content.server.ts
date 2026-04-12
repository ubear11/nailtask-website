import fs from 'node:fs'
import path from 'node:path'

// 简单的 frontmatter 解析器
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content }
  }

  const frontmatterStr = match[1]
  const bodyContent = match[2]

  // 解析 YAML-like frontmatter
  const data: Record<string, any> = {}
  const lines = frontmatterStr.split('\n')

  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()

      // 移除引号
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }

      data[key] = value
    }
  }

  return { data, content: bodyContent }
}

// 博客文章接口
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
  content: string
}

// 页面内容接口
export interface PageContent {
  [key: string]: any
}

// 获取内容目录路径
function getContentDir(): string {
  // 在构建时和运行时，content 目录在项目根目录
  return path.join(process.cwd(), 'content')
}

// 读取目录中的所有 Markdown 文件
function readMarkdownFiles(dir: string): { slug: string; data: Record<string, any>; content: string }[] {
  const contentDir = getContentDir()
  const fullDir = path.join(contentDir, dir)

  if (!fs.existsSync(fullDir)) {
    return []
  }

  const files = fs.readdirSync(fullDir)
  const markdownFiles = files.filter(f => f.endsWith('.md') && !f.startsWith('.'))

  return markdownFiles.map(filename => {
    const filePath = path.join(fullDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = parseFrontmatter(fileContent)
    const slug = data.slug || filename.replace('.md', '')

    return { slug, data, content }
  })
}

// 获取所有博客文章
export function getAllBlogPosts(): BlogPost[] {
  const files = readMarkdownFiles('blog')

  const posts = files.map(({ slug, data, content }) => ({
    slug,
    title: data.title || 'Untitled',
    date: data.date ? new Date(data.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    excerpt: data.excerpt || '',
    image: data.image || '/placeholder.png',
    category: data.category || 'General',
    content,
  }))

  // 按日期排序（最新的在前）
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 根据 slug 获取博客文章
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts()
  return posts.find(p => p.slug === slug)
}

// 获取页面内容
export function getPageContent(pageName: string): PageContent | null {
  const contentDir = getContentDir()
  const filePath = path.join(contentDir, 'pages', `${pageName}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = parseFrontmatter(fileContent)

  return { ...data, body: content }
}

// 获取站点设置
export function getSiteSettings(): PageContent {
  const contentDir = getContentDir()
  const generalPath = path.join(contentDir, 'settings', 'general.md')
  const socialPath = path.join(contentDir, 'settings', 'social.md')

  let general: Record<string, any> = {}
  let social: Record<string, any> = {}

  if (fs.existsSync(generalPath)) {
    const content = fs.readFileSync(generalPath, 'utf-8')
    general = parseFrontmatter(content).data
  }

  if (fs.existsSync(socialPath)) {
    const content = fs.readFileSync(socialPath, 'utf-8')
    social = parseFrontmatter(content).data
  }

  return { ...general, social }
}

// 获取所有产品
export interface Product {
  slug: string
  title: string
  model: string
  category: string
  shortDescription: string
  image: string
  features: string[]
  content: string
}

export function getAllProducts(): Product[] {
  const files = readMarkdownFiles('products')

  return files.map(({ slug, data, content }) => ({
    slug,
    title: data.title || 'Untitled',
    model: data.model || '',
    category: data.category || 'general',
    shortDescription: data.shortDescription || '',
    image: data.image || '/placeholder.png',
    features: data.features ? data.features.split(',').map((f: string) => f.trim()) : [],
    content,
  }))
}

export function getProductBySlug(slug: string): Product | undefined {
  const products = getAllProducts()
  return products.find(p => p.slug === slug)
}
