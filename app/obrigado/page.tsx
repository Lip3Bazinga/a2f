import type { Metadata } from 'next'
import { ThankYouPage } from '@/components/landing/thank-you-page'

export const metadata: Metadata = {
  title: 'Obrigado | A2F Incentivos',
  description: 'Mensagem recebida com sucesso. Entraremos em contato em breve.',
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return <ThankYouPage />
}
