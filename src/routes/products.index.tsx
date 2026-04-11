import { Link, createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { useT } from '@/lib/i18n'
import products, { categories } from '@/data/products'
import { CheckCircle2, ArrowRight, Search } from 'lucide-react'

export const Route = createFileRoute('/products/')({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: 'Products – NailTask Industrial Fastening Tools' },
      { name: 'description', content: 'Browse NailTask\'s complete range of pneumatic nailers, gas-actuated tools, cordless fastening systems, concrete nailers, and professional fasteners.' },
    ],
  }),
})

function ProductsIndex() {
  const t = useT()
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all'
      ? products
      : products.filter((p) => p.categorySlug === activeCategory)

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.features.some((f) => f.toLowerCase().includes(query))
      )
    }

    return result
  }, [activeCategory, searchQuery])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('products.title')}</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-3">Product Categories</p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">Professional-grade fastening tools for every construction application.</p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product name, description, or features..."
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Tabs */}
          <div className="mt-10 mb-10">
          <div className="flex flex-wrap gap-1 bg-slate-100 rounded-lg p-1.5">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat.slug
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all flex flex-col"
            >
              {/* Product Image */}
              <Link
                to="/product/$productSlug"
                params={{ productSlug: product.slug }}
                className="block"
              >
                <div className="aspect-[4/5] bg-slate-50 overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category Label */}
                <span className="text-xs text-slate-500 font-medium mb-1">{product.category}</span>

                {/* Model Number */}
                <Link
                  to="/product/$productSlug"
                  params={{ productSlug: product.slug }}
                  className="block"
                >
                  <h2 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                    {product.id}
                  </h2>
                </Link>

                {/* Product Name */}
                <p className="text-sm text-slate-600 mb-4">{product.shortDescription.split('.')[0]}</p>

                {/* Key Features (top 3) */}
                <ul className="space-y-2 mb-5 flex-1">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Details Button */}
                <Link
                  to="/product/$productSlug"
                  params={{ productSlug: product.slug }}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold text-sm rounded-lg transition-all"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No products found in this category.</p>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
