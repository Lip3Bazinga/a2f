import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
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

const siteUrl = 'https://www.a2f.com.br'

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
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-[#1A1F3C]`}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
