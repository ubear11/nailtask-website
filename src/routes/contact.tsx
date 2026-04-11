import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useT } from '@/lib/i18n'
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact Us – NailTask Global Co., Ltd.' },
      { name: 'description', content: 'Contact NailTask for product inquiries, OEM/ODM quotes, distributor partnerships, and technical support. Our global sales team responds within 24 hours.' },
    ],
  }),
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactPage() {
  const t = useT()
  const [submitted, setSubmitted] = useState(false)
  const [fields, setFields] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product_interest: '',
    estimated_quantity: '',
    country: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Submit to Netlify Forms
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    // Push to CRM (fire-and-forget)
    fetch('/.netlify/functions/crm-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...fields, source: 'website-contact-form' }),
    }).catch(() => {})
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('contact.info.email')}</h3>
                    <a href="mailto:info@smartnailing.com" className="text-amber-600 hover:text-amber-700">info@smartnailing.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('contact.info.phone')}</h3>
                    <p className="text-slate-600">+86 574 8888 9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('contact.info.address')}</h3>
                    <p className="text-slate-600">NailTask Global Co., Ltd.<br />Zhejiang Province, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('contact.info.hours')}</h3>
                    <p className="text-slate-600">Mon – Fri: 8:30 AM – 5:30 PM (CST)<br />Sat: 9:00 AM – 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">Quick Inquiry Options</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:info@smartnailing.com"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Email us directly
                  </a>
                  <a
                    href="https://wa.me/8657488889999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-green-600 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" /> WhatsApp instant messaging
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-green-800">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.name')} *</label>
                      <input type="text" name="name" value={fields.name} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.company')} *</label>
                      <input type="text" name="company" value={fields.company} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.email')} *</label>
                      <input type="email" name="email" value={fields.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.phone')} *</label>
                      <input type="tel" name="phone" value={fields.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Product Interest *</label>
                      <select name="product_interest" value={fields.product_interest} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                        <option value="">Select product interest...</option>
                        <option value="concrete-nailers">Concrete Nailers</option>
                        <option value="wood-nailers">Wood Nailers</option>
                        <option value="insulation-fasteners">Insulation Fasteners</option>
                        <option value="fencing-staplers">Fencing Staplers</option>
                        <option value="accessories">Accessories & Batteries</option>
                        <option value="oem-odm">OEM/ODM Custom Products</option>
                        <option value="full-catalog">Full Product Catalog</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity *</label>
                      <select name="estimated_quantity" value={fields.estimated_quantity} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                        <option value="">Select quantity range...</option>
                        <option value="sample">Sample Order (1-10)</option>
                        <option value="small">Small Order (10-100)</option>
                        <option value="medium">Medium Order (100-500)</option>
                        <option value="large">Large Order (500-1000)</option>
                        <option value="bulk">Bulk Order (1000+)</option>
                        <option value="ongoing">Ongoing Supply</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Country / Region *</label>
                      <input type="text" name="country" value={fields.country} onChange={handleChange} required placeholder="e.g. United States, Germany, Brazil..." className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.subject')} *</label>
                      <select name="subject" value={fields.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                        <option value="">Select a subject...</option>
                        <option value="quote">Product Quote Request</option>
                        <option value="oem">OEM/ODM Inquiry</option>
                        <option value="distributor">Distributor Partnership</option>
                        <option value="technical">Technical Support</option>
                        <option value="samples">Sample Request</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.message')} *</label>
                    <textarea name="message" value={fields.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none" placeholder="Please include product names, quantities, and any specific requirements..." />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg rounded-md transition-colors"
                  >
                    {t('contact.form.submit')} <ArrowRight className="w-5 h-5 inline ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
