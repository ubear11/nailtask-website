export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
  content: string
}

export interface PageContent {
  [key: string]: any
}

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
