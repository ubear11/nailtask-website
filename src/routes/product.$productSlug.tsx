import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import { getProductBySlug, getProductsByCategory } from '@/data/products'
import type { SellingPoint, PackageOption, FAQ } from '@/data/products'
import {
  ArrowRight,
  Award,
  Battery,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Feather,
  Package,
  Settings,
  Shield,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'

const iconMap: Record<string, typeof Zap> = {
  zap: Zap,
  shield: Shield,
  feather: Feather,
  settings: Settings,
  target: Target,
  wrench: Wrench,
  battery: Battery,
}

export const Route = createFileRoute('/product/$productSlug')({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = getProductBySlug(params.productSlug)
    if (!product) throw new Error('Product not found')
    const relatedProducts = getProductsByCategory(product.categorySlug).filter(
      (p) => p.slug !== product.slug
    )
    return { product, relatedProducts }
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.product?.name || 'Product'} – NailTask Industrial Fastening`,
      },
      {
        name: 'description',
        content: loaderData?.product?.description || '',
      },
    ],
  }),
})

function ProductDetailPage() {
  const { product, relatedProducts } = Route.useLoaderData()
  const t = useT()

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-amber-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/products"
              className="hover:text-amber-600 transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <Link
              to="/products/$category"
              params={{ category: product.categorySlug }}
              className="hover:text-amber-600 transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 1. Product Hero */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Key Specs Quick View */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(product.specifications)
                  .slice(0, 4)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-slate-50 rounded-lg p-3 border border-slate-100"
                    >
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                        {key}
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {value}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg rounded-md transition-colors"
                >
                  {t('products.requestQuote')} <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-lg rounded-md transition-colors"
                >
                  View Full Specs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Selling Points */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose the {product.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Engineered advantages that set this tool apart in professional
              environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.sellingPoints.map((point: SellingPoint, index: number) => {
              const Icon = iconMap[point.icon] || Zap
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t('products.features')}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {product.shortDescription}
              </p>
              <ul className="space-y-4">
                {product.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
              <img
                src={product.image}
                alt={`${product.name} features`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Table */}
      <section id="specifications" className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('products.specifications')}
            </h2>
            <p className="text-lg text-slate-600">
              Complete technical data for procurement and engineering review.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900">
                  <th className="text-left text-sm font-semibold text-white px-6 py-4">
                    Parameter
                  </th>
                  <th className="text-left text-sm font-semibold text-white px-6 py-4">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specifications).map(
                  ([key, value], index) => (
                    <tr
                      key={key}
                      className={
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                      }
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-700">
                        {key}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900 font-semibold">
                        {value}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Application Scenarios */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Application Scenarios
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven performance across a range of professional construction and
              industrial environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.applicationScenarios.map(
              (scenario: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-50 rounded-xl px-6 py-5 border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-slate-800 font-medium">{scenario}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 6. Package Options */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Package Options
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flexible packaging configurations for distributors, contractors,
              and OEM partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.packageOptions.map(
              (pkg: PackageOption, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-amber-300 transition-all flex flex-col"
                >
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-amber-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {pkg.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                      {pkg.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {pkg.includes.map((item: string) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Minimum Order
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {pkg.moq}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 7. Certifications */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every NailTask product meets rigorous international safety and
              quality standards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {product.certifications.map((cert: string) => (
              <div
                key={cert}
                className="inline-flex items-center gap-3 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
              >
                <Award className="w-5 h-5 text-amber-500" />
                {cert}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Full test reports, certificates of conformity, and material safety
              data sheets are available upon request for distributor and OEM
              partners.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common questions from distributors and procurement teams.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {product.faq.map((item: FAQ, index: number) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA - Get Quote */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order the {product.name}?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact our sales team for pricing, MOQ details, OEM/ODM options,
            and sample requests. We respond within 24 business hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg rounded-md transition-colors"
            >
              {t('products.requestQuote')} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products/$category"
              params={{ category: product.categorySlug }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-md border border-white/20 transition-colors"
            >
              View More {product.category}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('products.relatedProducts')}
              </h2>
              <p className="text-lg text-slate-600">
                Other products in {product.category}.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map((related) => (
                <Link
                  key={related.id}
                  to="/product/$productSlug"
                  params={{ productSlug: related.slug }}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all"
                >
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 mt-3">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-base font-semibold text-slate-900 pr-4">
          {question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-0">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
