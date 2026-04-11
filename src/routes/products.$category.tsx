import { Link, createFileRoute } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import { getCategoryBySlug, getProductsByCategory } from '@/data/products'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/products/$category')({
  component: CategoryPage,
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category)
    if (!category) throw new Error('Category not found')
    const products = getProductsByCategory(params.category)
    return { category, products }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category?.name || 'Products'} – NailTask` },
      { name: 'description', content: loaderData?.category?.description || '' },
    ],
  }),
})

function CategoryPage() {
  const { category, products } = Route.useLoaderData()
  const t = useT()

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link to="/products" className="inline-flex items-center text-sm text-amber-600 hover:text-amber-700 font-medium mb-6">
          {t('products.backToProducts')}
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{category.name}</h1>
          <p className="text-lg text-slate-600 max-w-3xl">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No products found in this category.</p>
            <Link to="/products" className="inline-flex items-center gap-1 text-amber-600 font-medium mt-4">
              {t('products.backToProducts')}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
