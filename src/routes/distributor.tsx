import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useT } from '@/lib/i18n'
import { CheckCircle, DollarSign, BookOpen, Shield, GraduationCap, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/distributor')({
  component: DistributorPage,
  head: () => ({
    meta: [
      { title: 'Distributor Program – NailTask Global Co., Ltd.' },
      { name: 'description', content: 'Join NailTask\'s global network of professional fastening tool distributors. Direct factory pricing, marketing support, territory protection, and technical training.' },
    ],
  }),
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function DistributorPage() {
  const t = useT()
  const [submitted, setSubmitted] = useState(false)
  const [fields, setFields] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    country: '',
    territory: '',
    businessType: '',
    experience: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/distributor-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'distributor', ...fields }),
    })
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('distributor.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{t('distributor.subtitle')}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('distributor.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: DollarSign, title: t('distributor.benefits.pricing'), desc: t('distributor.benefits.pricingDesc') },
              { icon: BookOpen, title: t('distributor.benefits.support'), desc: t('distributor.benefits.supportDesc') },
              { icon: Shield, title: t('distributor.benefits.territory'), desc: t('distributor.benefits.territoryDesc') },
              { icon: GraduationCap, title: t('distributor.benefits.training'), desc: t('distributor.benefits.trainingDesc') },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 p-6 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                  <b.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Direct Factory Pricing',
              'OEM/ODM Capabilities',
              '20+ Year Heritage',
              'Complete Supply Chain Control',
              'CE/RoHS/ISO Certified',
              '50+ Country Network',
            ].map((usp) => (
              <span key={usp} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-amber-500" /> {usp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('distributor.form.title')}</h2>

          {submitted ? (
            <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-medium text-green-800">{t('distributor.form.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="distributor" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.company')} *</label>
                  <input type="text" name="company" value={fields.company} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.contact')} *</label>
                  <input type="text" name="contact" value={fields.contact} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.email')} *</label>
                  <input type="email" name="email" value={fields.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.phone')}</label>
                  <input type="tel" name="phone" value={fields.phone} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.country')} *</label>
                  <input type="text" name="country" value={fields.country} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.territory')}</label>
                  <input type="text" name="territory" value={fields.territory} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.businessType')}</label>
                  <select name="businessType" value={fields.businessType} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                    <option value="">Select...</option>
                    <option value="distributor">Distributor / Wholesaler</option>
                    <option value="retailer">Retailer / Hardware Store</option>
                    <option value="rental">Tool Rental Company</option>
                    <option value="contractor">Contractor / Builder</option>
                    <option value="oem">OEM / Private Label</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.experience')}</label>
                  <select name="experience" value={fields.experience} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                    <option value="">Select...</option>
                    <option value="0-2">0–2 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5-10">5–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('distributor.form.message')}</label>
                <textarea name="message" value={fields.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none" />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg rounded-md transition-colors"
              >
                {t('distributor.form.submit')} <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
