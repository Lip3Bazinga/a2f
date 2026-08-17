import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { JsonLd } from '@/components/seo/json-ld'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
})

const siteUrl = 'https://a2fcapital.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'A2F Incentivos | Transformando Imposto em Impacto Social',
    template: '%s | A2F Incentivos',
  },
  description:
    'A A2F conecta empresas e pessoas a projetos esportivos e culturais incentivados pelas leis de incentivo fiscal brasileiras, transformando obrigação fiscal em impacto positivo e visibilidade de marca.',
  keywords: [
    'incentivo fiscal',
    'lei rouanet',
    'lei de incentivo ao esporte',
    'patrocínio cultural',
    'patrocínio esportivo',
    'projetos culturais',
    'projetos esportivos',
    'imposto de renda',
    'dedução fiscal',
    'responsabilidade social empresarial',
    'A2F Incentivos',
    'consultoria fiscal',
  ],
  authors: [{ name: 'A2F Incentivos', url: siteUrl }],
  creator: 'A2F Incentivos',
  publisher: 'A2F Incentivos',
  category: 'Consultoria em Incentivos Fiscais',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'A2F Incentivos',
    title: 'A2F Incentivos | Transformando Imposto em Impacto Social',
    description:
      'Conectamos empresas e pessoas a projetos esportivos e culturais incentivados, transformando obrigação fiscal em impacto positivo e visibilidade de marca.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'A2F Incentivos — Transformando Imposto em Impacto Social',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A2F Incentivos | Transformando Imposto em Impacto Social',
    description:
      'Conectamos empresas e pessoas a projetos esportivos e culturais incentivados, transformando obrigação fiscal em impacto positivo e visibilidade de marca.',
    images: ['/og-image.png'],
    creator: '@a2fincentivos',
    site: '@a2fincentivos',
  },
  icons: {
    icon: [
      { url: '/logo-icon-color.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-icon-color.png', type: 'image/png' },
    ],
    shortcut: '/logo-icon-color.png',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'pt-BR': siteUrl,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-559L8DP2');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-[#1A1F3C]`}>
        <noscript aria-hidden="true">
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-559L8DP2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden', position: 'absolute' }}
          />
        </noscript>
        <JsonLd />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F46RSWNBEP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-F46RSWNBEP');`}
        </Script>
      </body>
    </html>
  )
}
