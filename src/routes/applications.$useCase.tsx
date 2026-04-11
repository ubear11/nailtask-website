import { Link, createFileRoute } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import { getApplicationBySlug } from '@/data/applications'
import { getProductBySlug } from '@/data/products'
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/applications/$useCase')({
  component: ApplicationDetail,
  loader: ({ params }) => {
    const application = getApplicationBySlug(params.useCase)
    if (!application) throw new Error('Application not found')
    const products = application.recommendedProducts
      .map((slug) => getProductBySlug(slug))
      .filter(Boolean)
    return { application, products }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.application?.name || 'Application'} – NailTask` },
      { name: 'description', content: loaderData?.application?.shortDescription || '' },
    ],
  }),
})

function ApplicationDetail() {
  const { application, products } = Route.useLoaderData()
  const t = useT()

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <img
          src={application.image}
          alt={application.name}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/applications" className="inline-flex items-center text-sm text-amber-400 hover:text-amber-300 font-medium mb-6">
            {t('apps.backToApps')}
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{application.name}</h1>
          <p className="text-xl text-slate-300 max-w-3xl">{application.shortDescription}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-lg text-slate-600 leading-relaxed">{application.description}</p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" /> Common Challenges
              </h2>
              <ul className="space-y-4">
                {application.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-slate-600">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-xl p-8 border border-amber-300">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-amber-500" /> NailTask Solutions
              </h2>
              <ul className="space-y-4">
                {application.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      {products.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{t('apps.recommendedTools')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => product && (
                <Link
                  key={product.id}
                  to="/product/$productSlug"
                  params={{ productSlug: product.slug }}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-amber-300 transition-all"
                >
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">{product.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{product.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Fastening Solution?</h2>
          <p className="text-lg text-slate-300 mb-8">Our engineering team can develop application-specific tools and fasteners for your unique requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-md transition-colors"
          >
            Contact Our Engineering Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
