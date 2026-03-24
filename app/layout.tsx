import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

// A2F Brand Typography
// DM Sans: body copy — clean, modern, institutional-modern (strategic, not bureaucratic)
// DM Serif Display: headings — dynamic, elegant, fluid (mirrors brand letterform personality)
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: 'A2F Incentive | Transformando Imposto em Impacto Social',
  description: 'A A2F conecta empresas e pessoas a projetos esportivos e culturais incentivados, transformando obrigacao fiscal em impacto positivo e visibilidade social.',
  generator: 'v0.app',
  keywords: ['incentivo fiscal', 'lei rouanet', 'lei de incentivo ao esporte', 'patrocinio', 'esporte', 'cultura', 'imposto de renda'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
