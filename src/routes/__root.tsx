import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { I18nProvider } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'NailTask – Industrial Fastening Tools | OEM Manufacturer & Global Supplier' },
      { name: 'description', content: 'NailTask delivers industrial-grade pneumatic nailers, gas-actuated fastening tools, and cordless fastening systems for construction professionals. OEM/ODM manufacturer with 20+ years experience, CE/RoHS certified, exporting to 50+ countries.' },
      { name: 'keywords', content: 'pneumatic nailer, gas nailer, framing nailer, concrete nailer, coil nailer, fastening tools, construction tools, OEM manufacturer, NailTask' },
      { property: 'og:title', content: 'NailTask – Industrial Fastening Tools | OEM Manufacturer & Global Supplier' },
      { property: 'og:description', content: 'Industrial-grade fastening solutions engineered for performance, built at scale. Direct from the factory with 20+ years manufacturing heritage.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'NailTask' },
    ],
    links: [
      { rel: 'canonical', href: 'https://smartnailing.com' },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Netlify Identity Widget - 处理邀请链接和认证回调 */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Replace GTM-XXXXXXX with your actual GTM container ID
              // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              // })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        {/* Google Analytics GA4 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Replace G-XXXXXXX with your actual GA4 Measurement ID
              // window.dataLayer = window.dataLayer || [];
              // function gtag(){dataLayer.push(arguments);}
              // gtag('js', new Date());
              // gtag('config', 'G-XXXXXXX');
            `,
          }}
        />
        {/* JSON-LD Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NailTask Global Co., Ltd.',
              url: 'https://smartnailing.com',
              logo: 'https://smartnailing.com/logo.png',
              description: 'Industrial-grade fastening tools manufacturer. Pneumatic nailers, gas-actuated tools, and cordless fastening systems for construction professionals worldwide.',
              parentOrganization: {
                '@type': 'Organization',
                name: 'Zhejiang Smart Nailing Technology Co., Ltd.',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@smartnailing.com',
                contactType: 'sales',
                availableLanguage: ['English', 'Chinese', 'Spanish', 'French', 'German'],
              },
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Zhejiang',
                addressCountry: 'CN',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
        {/* Netlify Identity 初始化脚本 - 处理邀请/恢复/确认令牌 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function initNetlifyIdentity() {
                  if (typeof netlifyIdentity === 'undefined') {
                    // Widget 还没加载，稍后重试
                    setTimeout(initNetlifyIdentity, 100);
                    return;
                  }

                  var hash = window.location.hash || '';
                  var hasInviteToken = hash.indexOf('invite_token=') !== -1;
                  var hasRecoveryToken = hash.indexOf('recovery_token=') !== -1;
                  var hasConfirmToken = hash.indexOf('confirmation_token=') !== -1;
                  var hasAccessToken = hash.indexOf('access_token=') !== -1;

                  // 监听 init 事件
                  netlifyIdentity.on('init', function(user) {
                    console.log('[Identity] Initialized, user:', user ? user.email : 'none');
                    console.log('[Identity] Hash:', hash);

                    // 如果有邀请令牌且用户未登录，打开注册弹窗
                    if (hasInviteToken && !user) {
                      console.log('[Identity] Opening signup for invite token');
                      // 邀请令牌会自动触发设置密码流程
                    }

                    // 如果有恢复令牌，打开恢复弹窗
                    if (hasRecoveryToken && !user) {
                      console.log('[Identity] Recovery token detected');
                    }
                  });

                  // 监听登录成功
                  netlifyIdentity.on('login', function(user) {
                    console.log('[Identity] User logged in:', user.email);
                    // 登录成功后重定向到 CMS
                    netlifyIdentity.close();
                    window.location.href = '/admin/';
                  });

                  // 监听错误
                  netlifyIdentity.on('error', function(err) {
                    console.error('[Identity] Error:', err);
                  });

                  // 初始化 Identity Widget
                  netlifyIdentity.init({
                    locale: 'en'
                  });
                }

                // 页面加载后初始化
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initNetlifyIdentity);
                } else {
                  initNetlifyIdentity();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </I18nProvider>
  )
}

function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4">
      <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
      <p className="text-xl text-slate-600 mb-8">Page not found</p>
      <a
        href="/"
        className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-md transition-colors"
      >
        Back to Home
      </a>
    </div>
  )
}
