import { Link, createFileRoute } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import applications from '@/data/applications'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/applications/')({
  component: ApplicationsIndex,
  head: () => ({
    meta: [
      { title: 'Applications – NailTask Industrial Fastening Solutions' },
      { name: 'description', content: 'Purpose-built fastening solutions for construction framing, concrete fastening, roofing, steel decking, wood framing, and industrial assembly.' },
    ],
  }),
})

function ApplicationsIndex() {
  const t = useT()

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('apps.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{t('apps.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <Link
                key={app.slug}
                to="/applications/$useCase"
                params={{ useCase: app.slug }}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{app.name}</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{app.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                    {t('apps.learnMore')} <ArrowRight className="w-4 h-4" />
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
