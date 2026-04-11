import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh'

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
}

type TranslationDict = Record<string, string>

const translations: Record<Language, TranslationDict> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.applications': 'Applications',
    'nav.distributor': 'Distributor Program',
    'nav.blog': 'Blog & News',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',
    // Hero
    'hero.tagline': 'Industrial-Grade Fastening Solutions',
    'hero.subtitle': 'Engineered for Performance, Built at Scale',
    'hero.description': 'From construction framing to concrete fastening, NailTask delivers professional-grade pneumatic and gas-actuated tools trusted by contractors across 50+ countries.',
    'hero.cta.quote': 'Get a Quote',
    'hero.cta.products': 'Explore Products',
    'hero.cta.distributor': 'Become a Distributor',
    // Why Choose Us
    'why.title': 'Why Choose NailTask',
    'why.subtitle': 'Direct from one of China\'s leading fastening tool manufacturers — 20+ years of engineering excellence.',
    'why.manufacturing.title': '20+ Years Manufacturing',
    'why.manufacturing.desc': 'Two decades of fastening tool expertise with continuous innovation in pneumatic and gas-actuated technology.',
    'why.facility.title': '100,000+ sqm Facility',
    'why.facility.desc': 'State-of-the-art manufacturing complex with dedicated R&D center, testing labs, and automated production lines.',
    'why.rd.title': 'In-House R&D',
    'why.rd.desc': 'Dedicated engineering team developing next-generation fastening solutions with 50+ patents and proprietary technology.',
    'why.certified.title': 'CE / RoHS Certified',
    'why.certified.desc': 'Full compliance with European safety standards. ISO 9001 quality management across all product lines.',
    'why.oem.title': 'OEM/ODM Capabilities',
    'why.oem.desc': 'Custom branding, packaging, and product modifications. Full private label programs available for qualified distributors.',
    'why.global.title': '50+ Country Network',
    'why.global.desc': 'Established distribution in over 50 countries across Europe, Americas, Middle East, and Asia-Pacific.',
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Explore our 20V lithium-ion cordless nailer series, providing powerful support for your professional construction projects.',
    'products.viewAll': 'View All Products',
    'products.viewCategory': 'View Category',
    'products.backToProducts': '← Back to Products',
    'products.backToCategory': '← Back to Category',
    'products.features': 'Key Features',
    'products.specifications': 'Specifications',
    'products.requestQuote': 'Request Quote',
    'products.relatedProducts': 'Related Products',
    // Applications
    'apps.title': 'Applications',
    'apps.subtitle': 'Purpose-built fastening solutions for demanding construction environments.',
    'apps.learnMore': 'Learn More',
    'apps.recommendedTools': 'Recommended Tools',
    'apps.backToApps': '← Back to Applications',
    // Manufacturing Capabilities (homepage section)
    'mfg.title': 'Manufacturing Capabilities',
    'mfg.subtitle': 'State-of-the-art production facilities delivering precision-engineered fastening tools at scale.',
    'mfg.video.title': 'Inside Our Factory',
    'mfg.video.desc': 'Take a virtual tour of our 100,000+ sqm manufacturing complex — from raw materials to finished product.',
    'mfg.video.play': 'Watch Factory Tour',
    'mfg.cap.production': 'Automated Production Lines',
    'mfg.cap.productionDesc': '12 fully automated assembly lines with robotic precision, producing 1M+ units annually with consistent quality.',
    'mfg.cap.testing': 'Quality Testing Lab',
    'mfg.cap.testingDesc': 'Every unit undergoes 10,000-cycle endurance testing, torque calibration, and safety validation before shipment.',
    'mfg.cap.rd': 'R&D Innovation Center',
    'mfg.cap.rdDesc': '50+ engineers developing next-gen fastening technology with 50+ patents and proprietary designs.',
    'mfg.cap.warehouse': 'Smart Warehousing',
    'mfg.cap.warehouseDesc': 'Intelligent logistics system ensuring 48-hour order processing and global shipping to 50+ countries.',
    'mfg.cta': 'Schedule a Factory Visit',
    // Trust
    'trust.title': 'Trusted Worldwide',
    'trust.subtitle': 'Certified quality. Global reach. Proven performance.',
    'trust.exports': 'Exported to 50+ Countries',
    'trust.units': '1M+ Units Sold Annually',
    'trust.partners': '200+ Distribution Partners',
    'trust.certifications': 'Certifications & Compliance',
    // CTA
    'cta.title': 'Ready to Scale Your Fastening Operations?',
    'cta.subtitle': 'Whether you need OEM solutions, distributor pricing, or custom product development — our team is ready to help.',
    'cta.quote': 'Get a Quote',
    'cta.distributor': 'Become a Distributor',
    // About
    'about.title': 'About NailTask',
    'about.subtitle': 'A global leader in professional fastening tools — engineered in China, trusted worldwide.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'NailTask Global Co., Ltd. is the international arm of Zhejiang Smart Nailing Technology Co., Ltd., one of China\'s premier fastening tool manufacturers. With over 20 years of manufacturing heritage, we bring industrial-grade quality to construction professionals worldwide.',
    'about.story.p2': 'Our parent company operates a 100,000+ sqm manufacturing facility with dedicated R&D centers, precision testing laboratories, and fully automated production lines. Every tool that carries the NailTask name is engineered for reliability, durability, and peak performance.',
    'about.parent.title': 'Zhejiang Smart Nailing Technology Co., Ltd.',
    'about.parent.desc': 'Parent company and legal manufacturer. Holder of all CE/RoHS/ISO certifications. Responsible for domestic sales under the DINGJIANG brand.',
    'about.international.title': 'NailTask Global Co., Ltd.',
    'about.international.desc': 'International branch for global brand operation and overseas sales. Operating under the NailTask brand at smartnailing.com.',
    'about.values.title': 'Our Values',
    'about.values.quality': 'Quality Without Compromise',
    'about.values.qualityDesc': 'Every product undergoes rigorous testing — from material inspection to 10,000-cycle endurance testing before shipment.',
    'about.values.innovation': 'Continuous Innovation',
    'about.values.innovationDesc': '50+ patents and growing. Our R&D team is constantly pushing the boundaries of fastening technology.',
    'about.values.partnership': 'Partnership First',
    'about.values.partnershipDesc': 'We don\'t just sell tools — we build long-term partnerships with distributors and contractors worldwide.',
    // Distributor
    'distributor.title': 'Distributor Program',
    'distributor.subtitle': 'Join NailTask\'s global network of professional fastening tool distributors.',
    'distributor.benefits.title': 'Partner Benefits',
    'distributor.benefits.pricing': 'Direct Factory Pricing',
    'distributor.benefits.pricingDesc': 'Competitive wholesale pricing direct from our manufacturing facility — no middlemen.',
    'distributor.benefits.support': 'Marketing Support',
    'distributor.benefits.supportDesc': 'Product catalogs, point-of-sale materials, digital assets, and co-branding opportunities.',
    'distributor.benefits.territory': 'Territory Protection',
    'distributor.benefits.territoryDesc': 'Exclusive or semi-exclusive territory agreements to protect your market investment.',
    'distributor.benefits.training': 'Technical Training',
    'distributor.benefits.trainingDesc': 'Product training, service certification, and ongoing technical support for your team.',
    'distributor.form.title': 'Apply to Become a Distributor',
    'distributor.form.company': 'Company Name',
    'distributor.form.contact': 'Contact Person',
    'distributor.form.email': 'Business Email',
    'distributor.form.phone': 'Phone Number',
    'distributor.form.country': 'Country / Region',
    'distributor.form.territory': 'Desired Territory',
    'distributor.form.businessType': 'Business Type',
    'distributor.form.experience': 'Years in Business',
    'distributor.form.message': 'Tell us about your business',
    'distributor.form.submit': 'Submit Application',
    'distributor.form.success': 'Thank you for your application! Our team will review and respond within 2 business days.',
    // Blog
    'blog.title': 'Blog & News',
    'blog.subtitle': 'Industry insights, product updates, and construction best practices.',
    'blog.readMore': 'Read More',
    'blog.backToBlog': '← Back to Blog',
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our global sales team.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you for your message! We\'ll respond within 24 hours.',
    'contact.info.title': 'Get In Touch',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Business Hours',
    // Floating Widget
    'widget.quote': 'Request Quote',
    'widget.email': 'Email Us',
    'widget.whatsapp': 'WhatsApp',
    // Footer
    'footer.description': 'Industrial-grade fastening solutions for construction professionals worldwide. Direct from the factory, backed by 20+ years of manufacturing excellence.',
    'footer.quickLinks': 'Quick Links',
    'footer.productCategories': 'Products',
    'footer.contactInfo': 'Contact',
    'footer.rights': '© 2024 NailTask Global Co., Ltd. All rights reserved.',
    'footer.parent': 'A subsidiary of Zhejiang Smart Nailing Technology Co., Ltd.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.about': 'Nosotros',
    'nav.applications': 'Aplicaciones',
    'nav.distributor': 'Distribuidores',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.getQuote': 'Solicitar Cotización',
    'hero.tagline': 'Soluciones de Fijación Industrial',
    'hero.subtitle': 'Diseñado para el Rendimiento, Construido a Escala',
    'hero.description': 'Desde marcos de construcción hasta fijación en concreto, NailTask ofrece herramientas neumáticas y de gas de grado profesional utilizadas por contratistas en más de 50 países.',
    'hero.cta.quote': 'Solicitar Cotización',
    'hero.cta.products': 'Ver Productos',
    'hero.cta.distributor': 'Ser Distribuidor',
    'why.title': 'Por Qué Elegir NailTask',
    'products.title': 'Nuestros Productos',
    'apps.title': 'Aplicaciones',
    'mfg.title': 'Capacidad de Fabricación',
    'mfg.subtitle': 'Instalaciones de producción de última generación que entregan herramientas de fijación de ingeniería de precisión a escala.',
    'trust.title': 'Confianza Mundial',
    'cta.title': '¿Listo para Escalar sus Operaciones de Fijación?',
    'cta.quote': 'Solicitar Cotización',
    'cta.distributor': 'Ser Distribuidor',
    'widget.quote': 'Cotización',
    'widget.email': 'Email',
    'widget.whatsapp': 'WhatsApp',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.productCategories': 'Productos',
    'footer.contactInfo': 'Contacto',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À Propos',
    'nav.applications': 'Applications',
    'nav.distributor': 'Distributeurs',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Demander un Devis',
    'hero.tagline': 'Solutions de Fixation Industrielle',
    'hero.subtitle': 'Conçu pour la Performance, Construit à Grande Échelle',
    'hero.cta.quote': 'Demander un Devis',
    'hero.cta.products': 'Voir les Produits',
    'hero.cta.distributor': 'Devenir Distributeur',
    'why.title': 'Pourquoi Choisir NailTask',
    'products.title': 'Nos Produits',
    'apps.title': 'Applications',
    'mfg.title': 'Capacités de Fabrication',
    'mfg.subtitle': 'Des installations de production de pointe livrant des outils de fixation de précision à grande échelle.',
    'trust.title': 'Confiance Mondiale',
    'cta.title': 'Prêt à Développer vos Opérations de Fixation?',
    'cta.quote': 'Demander un Devis',
    'cta.distributor': 'Devenir Distributeur',
    'widget.quote': 'Devis',
    'widget.email': 'Email',
    'widget.whatsapp': 'WhatsApp',
    'footer.quickLinks': 'Liens Rapides',
    'footer.productCategories': 'Produits',
    'footer.contactInfo': 'Contact',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
    'nav.about': 'Über Uns',
    'nav.applications': 'Anwendungen',
    'nav.distributor': 'Vertriebspartner',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.getQuote': 'Angebot Anfordern',
    'hero.tagline': 'Industrielle Befestigungslösungen',
    'hero.subtitle': 'Entwickelt für Leistung, Gebaut für Großserie',
    'hero.cta.quote': 'Angebot Anfordern',
    'hero.cta.products': 'Produkte Entdecken',
    'hero.cta.distributor': 'Vertriebspartner Werden',
    'why.title': 'Warum NailTask Wählen',
    'products.title': 'Unsere Produkte',
    'apps.title': 'Anwendungen',
    'mfg.title': 'Fertigungskapazitäten',
    'mfg.subtitle': 'Modernste Produktionsanlagen für präzisionsgefertigte Befestigungswerkzeuge in großem Maßstab.',
    'trust.title': 'Weltweit Vertraut',
    'cta.title': 'Bereit, Ihre Befestigungsoperationen zu Skalieren?',
    'cta.quote': 'Angebot Anfordern',
    'cta.distributor': 'Vertriebspartner Werden',
    'widget.quote': 'Angebot',
    'widget.email': 'E-Mail',
    'widget.whatsapp': 'WhatsApp',
    'footer.quickLinks': 'Schnelllinks',
    'footer.productCategories': 'Produkte',
    'footer.contactInfo': 'Kontakt',
  },
  zh: {
    'nav.home': '首页',
    'nav.products': '产品中心',
    'nav.about': '关于我们',
    'nav.applications': '应用领域',
    'nav.distributor': '经销商计划',
    'nav.blog': '新闻资讯',
    'nav.contact': '联系我们',
    'nav.getQuote': '获取报价',
    'hero.tagline': '工业级紧固解决方案',
    'hero.subtitle': '为性能而生，为规模而造',
    'hero.cta.quote': '获取报价',
    'hero.cta.products': '浏览产品',
    'hero.cta.distributor': '成为经销商',
    'why.title': '为何选择NailTask',
    'products.title': '我们的产品',
    'apps.title': '应用领域',
    'mfg.title': '制造实力',
    'mfg.subtitle': '先进的生产设施，规模化交付精密工程紧固工具。',
    'mfg.video.title': '走进我们的工厂',
    'mfg.video.desc': '虚拟参观我们10万平方米以上的制造基地——从原材料到成品的全流程。',
    'mfg.video.play': '观看工厂巡览',
    'mfg.cap.production': '自动化生产线',
    'mfg.cap.productionDesc': '12条全自动装配线，配备机器人精密操作，年产100万+台，品质始终如一。',
    'mfg.cap.testing': '质量检测实验室',
    'mfg.cap.testingDesc': '每台产品均经过10,000次循环耐久测试、扭矩校准和安全验证后方可出厂。',
    'mfg.cap.rd': '研发创新中心',
    'mfg.cap.rdDesc': '50+名工程师研发下一代紧固技术，拥有50+项专利和自主设计。',
    'mfg.cap.warehouse': '智能仓储物流',
    'mfg.cap.warehouseDesc': '智能物流系统，48小时内完成订单处理，全球配送覆盖50+个国家。',
    'mfg.cta': '预约参观工厂',
    'trust.title': '全球信赖',
    'cta.title': '准备好提升您的紧固作业了吗？',
    'cta.quote': '获取报价',
    'cta.distributor': '成为经销商',
    'widget.quote': '报价',
    'widget.email': '邮件',
    'widget.whatsapp': 'WhatsApp',
    'footer.quickLinks': '快速链接',
    'footer.productCategories': '产品',
    'footer.contactInfo': '联系方式',
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('nailtask-lang', lang)
    }
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[language]?.[key] || translations.en[key] || key
    },
    [language],
  )

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

export function useT() {
  const { t } = useContext(I18nContext)
  return t
}
