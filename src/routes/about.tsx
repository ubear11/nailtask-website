import { Link, createFileRoute } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import {
  Factory,
  ShieldCheck,
  FlaskConical,
  Users,
  Globe,
  CheckCircle,
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: 'About Us – NailTask Global Co., Ltd.' },
      { name: 'description', content: 'NailTask is the international arm of Zhejiang Smart Nailing Technology, a leading fastening tool manufacturer with 20+ years heritage, 100,000+ sqm facility, and CE/RoHS certification.' },
    ],
  }),
})

function AboutPage() {
  const t = useT()

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl text-slate-300">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('about.story.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('about.story.p1')}</p>
              <p className="text-slate-600 leading-relaxed">{t('about.story.p2')}</p>
            </div>
            <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
              <img src="/placeholder.png" alt="NailTask manufacturing facility" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Corporate Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.parent.title')}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t('about.parent.desc')}</p>
              <ul className="space-y-2">
                {['Legal manufacturer & certification holder', 'CE / RoHS / ISO certified', 'Domestic sales under DINGJIANG brand', '100,000+ sqm manufacturing facility'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-amber-300 shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.international.title')}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t('about.international.desc')}</p>
              <ul className="space-y-2">
                {['International brand operation', 'Global distribution network', 'NailTask brand (smartnailing.com)', 'Export to 50+ countries'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: t('about.values.quality'), desc: t('about.values.qualityDesc') },
              { icon: FlaskConical, title: t('about.values.innovation'), desc: t('about.values.innovationDesc') },
              { icon: Users, title: t('about.values.partnership'), desc: t('about.values.partnershipDesc') },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Years Manufacturing' },
              { value: '100K+', label: 'sqm Facility' },
              { value: '50+', label: 'Export Countries' },
              { value: '50+', label: 'Patents Held' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{item.value}</div>
                <div className="text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner With Us</h2>
          <p className="text-lg text-slate-600 mb-8">Whether you're looking for OEM manufacturing, distribution partnership, or custom product development — we'd like to hear from you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-md transition-colors">
              Get a Quote
            </Link>
            <Link to="/distributor" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md transition-colors">
              Distributor Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
