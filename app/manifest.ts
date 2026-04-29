import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'A2F Incentivos',
    short_name: 'A2F',
    description:
      'Conectamos empresas e pessoas a projetos esportivos e culturais incentivados, transformando obrigação fiscal em impacto positivo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1B7FA6',
    icons: [
      {
        src: '/logo-icon-color.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-icon-color.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'finance'],
    lang: 'pt-BR',
  }
}
