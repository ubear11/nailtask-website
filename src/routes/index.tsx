import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useT } from '@/lib/i18n'
import products from '@/data/products'
import {
  Factory,
  FlaskConical,
  ShieldCheck,
  Wrench,
  Globe,
  Award,
  ArrowRight,
  Building2,
  Zap,
  Target,
  TrendingUp,
  CheckCircle2,
  Play,
  Cog,
  Microscope,
  Lightbulb,
  Warehouse,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'NailTask – Industrial Fastening Tools | OEM Manufacturer & Global Supplier' },
      { name: 'description', content: 'Industrial-grade pneumatic nailers, gas-actuated fastening tools, and cordless systems for construction professionals. OEM/ODM manufacturer, CE/RoHS certified, 50+ country export network.' },
    ],
  }),
})

function HomePage() {
  const t = useT()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(245,158,11,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(59,130,246,0.2) 0%, transparent 50%)',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> 20+ Years of Manufacturing Excellence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {t('hero.tagline')}
            </h1>
            <p className="text-xl sm:text-2xl text-amber-400 font-medium mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg rounded-md transition-colors"
              >
                {t('hero.cta.quote')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-md border border-white/20 transition-colors"
              >
                {t('hero.cta.products')}
              </Link>
              <Link
                to="/distributor"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-amber-400 hover:text-amber-300 font-semibold text-lg transition-colors"
              >
                {t('hero.cta.distributor')} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('why.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('why.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: t('why.manufacturing.title'), desc: t('why.manufacturing.desc') },
              { icon: Building2, title: t('why.facility.title'), desc: t('why.facility.desc') },
              { icon: FlaskConical, title: t('why.rd.title'), desc: t('why.rd.desc') },
              { icon: ShieldCheck, title: t('why.certified.title'), desc: t('why.certified.desc') },
              { icon: Wrench, title: t('why.oem.title'), desc: t('why.oem.desc') },
              { icon: Globe, title: t('why.global.title'), desc: t('why.global.desc') },
            ].map((item) => (
              <div key={item.title} className="group p-6 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                  <item.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('products.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('products.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all flex flex-col"
              >
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
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs text-slate-500 font-medium mb-1">{product.category}</span>
                  <Link
                    to="/product/$productSlug"
                    params={{ productSlug: product.slug }}
                    className="block"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {product.id}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-600 mb-4">{product.shortDescription.split('.')[0]}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md transition-colors"
            >
              {t('products.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <ManufacturingCapabilities />

      {/* Trust Signals */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('trust.title')}</h2>
            <p className="text-lg text-slate-600">{t('trust.subtitle')}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Globe, stat: '50+', label: t('trust.exports') },
              { icon: Target, stat: '1M+', label: t('trust.units') },
              { icon: TrendingUp, stat: '200+', label: t('trust.partners') },
            ].map((item) => (
              <div key={item.label} className="text-center p-6">
                <item.icon className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-slate-900 mb-1">{item.stat}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
            <h3 className="font-bold text-lg mb-6 text-slate-900">{t('trust.certifications')}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['CE Certified', 'RoHS Compliant', 'ISO 9001:2015', 'ISO 14001', 'TUV Tested'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700"
                >
                  <Award className="w-4 h-4 text-amber-500" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg rounded-md transition-colors"
            >
              {t('cta.quote')} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/distributor"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-md border border-white/20 transition-colors"
            >
              {t('cta.distributor')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Manufacturing Capabilities Section ── */
function ManufacturingCapabilities() {
  const t = useT()
  const [videoOpen, setVideoOpen] = useState(false)

  const capabilities = [
    { icon: Cog, title: t('mfg.cap.production'), desc: t('mfg.cap.productionDesc'), img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80' },
    { icon: Microscope, title: t('mfg.cap.testing'), desc: t('mfg.cap.testingDesc'), img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80' },
    { icon: Lightbulb, title: t('mfg.cap.rd'), desc: t('mfg.cap.rdDesc'), img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80' },
    { icon: Warehouse, title: t('mfg.cap.warehouse'), desc: t('mfg.cap.warehouseDesc'), img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-600 text-sm font-medium mb-4">
            <Factory className="w-4 h-4" /> OEM/ODM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('mfg.title')}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('mfg.subtitle')}</p>
        </div>

        {/* Video / Hero Visual */}
        <div className="relative rounded-2xl overflow-hidden mb-16 group cursor-pointer" onClick={() => setVideoOpen(true)}>
          <div className="aspect-[21/9] bg-slate-900 relative">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ede4c21?w=1400&q=80"
              alt="Factory production line"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-20 h-20 rounded-full bg-amber-500/90 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('mfg.video.title')}</h3>
              <p className="text-slate-300 max-w-lg text-center text-sm md:text-base">{t('mfg.video.desc')}</p>
            </div>
            {/* Stats overlay bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-4 px-6 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
              {[
                { value: '100,000+', label: 'sqm Facility' },
                { value: '12', label: 'Production Lines' },
                { value: '50+', label: 'Patents' },
                { value: '1M+', label: 'Annual Units' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg md:text-xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {videoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setVideoOpen(false)}>
            <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center border border-white/10">
                {/* Placeholder for actual video — replace src with real factory tour video */}
                <div className="text-center text-white p-8">
                  <Factory className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t('mfg.video.title')}</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto mb-4">{t('mfg.video.desc')}</p>
                  <p className="text-xs text-slate-500">Replace this with your factory tour video URL<br/>(YouTube/Vimeo embed or MP4)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="group relative rounded-xl overflow-hidden border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all">
              <div className="flex flex-col sm:flex-row">
                {/* Image side */}
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-slate-100">
                  <img
                    src={cap.img}
                    alt={cap.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 sm:bg-gradient-to-r sm:from-transparent sm:to-white/20" />
                </div>
                {/* Content side */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-500 transition-colors">
                    <cap.icon className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-md transition-colors"
          >
            {t('mfg.cta')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
