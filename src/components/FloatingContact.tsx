import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useT } from '@/lib/i18n'
import { MessageCircle, Mail, FileText, X } from 'lucide-react'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const t = useT()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 transition-opacity"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 flex flex-col gap-2 animate-slide-up">
            <Link
              to="/contact"
              className="flex items-center gap-3 bg-white text-slate-800 pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={() => setOpen(false)}
            >
              <FileText className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium whitespace-nowrap">{t('widget.quote')}</span>
            </Link>
            <a
              href="mailto:info@smartnailing.com"
              className="flex items-center gap-3 bg-white text-slate-800 pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium whitespace-nowrap">{t('widget.email')}</span>
            </a>
            <a
              href="https://wa.me/8657488889999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-slate-800 pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium whitespace-nowrap">{t('widget.whatsapp')}</span>
            </a>
          </div>
        </>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`relative z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-slate-700 hover:bg-slate-600 rotate-0'
            : 'bg-amber-500 hover:bg-amber-600 animate-pulse-slow'
        }`}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  )
}
