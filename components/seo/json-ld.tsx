const siteUrl = 'https://www.a2f.com.br'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'A2F Incentivos',
  url: siteUrl,
  logo: `${siteUrl}/logo-color.png`,
  description:
    'A A2F conecta empresas e pessoas a projetos esportivos e culturais incentivados pelas leis de incentivo fiscal brasileiras, transformando obrigação fiscal em impacto positivo e visibilidade de marca.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contato@a2f.com.br',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.facebook.com/a2fincentivos',
    'https://www.instagram.com/a2fincentivos',
    'https://www.linkedin.com/company/a2fincentivos',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'A2F Incentivos',
  url: siteUrl,
  description: 'Plataforma de incentivos fiscais culturais e esportivos no Brasil',
  inLanguage: 'pt-BR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Consultoria em Incentivos Fiscais',
  provider: {
    '@type': 'Organization',
    name: 'A2F Incentivos',
    url: siteUrl,
  },
  description:
    'Consultoria especializada em incentivos fiscais culturais e esportivos, conectando empresas a projetos aprovados pelas leis de incentivo brasileiras como a Lei Rouanet e a Lei de Incentivo ao Esporte.',
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços A2F Incentivos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Projetos Federais',
          description: 'Gestão de projetos aprovados em leis federais de incentivo fiscal',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Projetos Regionais',
          description: 'Gestão de projetos aprovados em leis estaduais e municipais de incentivo fiscal',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria Empresarial',
          description: 'Consultoria para empresas sobre como utilizar incentivos fiscais para patrocínio',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Palestras e Treinamentos',
          description: 'Capacitação sobre leis de incentivo fiscal e seu funcionamento',
        },
      },
    ],
  },
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
