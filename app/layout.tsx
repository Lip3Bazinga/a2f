import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

// A2F Brand Typography
// Inter: body copy — clean, modern, highly legible
// Montserrat: headings — bold, institutional, impactful
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

export const metadata: Metadata = {
  title: 'A2F Incentivos | Transformando Imposto em Impacto Social',
  description: 'A A2F conecta empresas e pessoas a projetos esportivos e culturais incentivados, transformando obrigação fiscal em impacto positivo e visibilidade social.',
  generator: 'v0.app',
  keywords: ['incentivo fiscal', 'lei rouanet', 'lei de incentivo ao esporte', 'patrocínio', 'esporte', 'cultura', 'imposto de renda'],
  icons: {
    icon: '/logo-icon-color.png',
    apple: '/logo-icon-color.png',
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
        {children}
      </body>
    </html>
  )
}
