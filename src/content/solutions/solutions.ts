import type { LanguageCode } from '../../lib/router'
import type { SolutionsCopy } from '../../views/solutions/types'

const en: SolutionsCopy = {
  seo: {
    title: 'Solutions | Kumuluz',
    description:
      'How Kumuluz products combine to solve enterprise problems: AgenticAI platforms, API management, cloud-native digital platforms, business APIs and more.',
  },
  overview: {
    eyebrow: 'Solutions',
    title: 'Solutions built on Kumuluz products',
    intro:
      'Products tell you what a tool does. Solutions tell you which problem we solve, for which scenario, and which Kumuluz products combine to deliver it. Explore the solution that matches your goal.',
  },
  sectionLabels: {
    problem: 'The problem',
    audience: 'Who it is for',
    products: 'Kumuluz products involved',
    useCases: 'Typical use cases',
    architecture: 'Architecture & approach',
    businessValue: 'Business value',
    cta: 'Get started',
  },
  placeholder: 'Detailed content for this section is coming soon.',
  ctaLabel: 'Talk to us',
  solutions: [
    {
      slug: 'agentic-ai-platforms',
      label: 'Agentic AI Platforms',
      description:
        'Build a governed enterprise platform for AI agents, with controlled access to tools, APIs and data.',
      title: 'Agentic AI Platforms',
      theme: 'Build a governed enterprise platform for AI agents.',
      products: [
        'KumuluzAI',
        'Kumuluz API',
        'Kumuluz Business APIs',
        'Kumuluz Digital Platform',
      ],
    },
    {
      slug: 'enterprise-ai-assistants',
      label: 'Enterprise AI Assistants',
      description:
        'Deploy AI assistants for customers and employees without creating isolated AI silos.',
      title: 'Enterprise AI Assistants',
      theme:
        'Deploy AI assistants for customers and employees without creating isolated AI silos.',
      products: ['AI Smart Assistant', 'KumuluzAI'],
    },
    {
      slug: 'ai-knowledge-management',
      label: 'AI Knowledge Management',
      description:
        'Make enterprise knowledge accessible through governed, source-aware AI.',
      title: 'AI Knowledge Management',
      theme: 'Make enterprise knowledge accessible through governed AI.',
      products: ['Knowledge Mentor', 'KumuluzAI'],
    },
    {
      slug: 'api-management',
      label: 'API Management & API Economy',
      description:
        'Turn APIs into governed digital assets for teams, partners and AI agents.',
      title: 'API Management & API Economy',
      theme:
        'Turn APIs into governed digital assets for teams, partners and AI agents.',
      products: ['Kumuluz API', 'Kumuluz Business APIs'],
    },
    {
      slug: 'cloud-native-digital-platforms',
      label: 'Cloud-native Digital Platforms',
      description:
        'Build cloud-native platforms that support applications, workflows and AI agents.',
      title: 'Cloud-native Digital Platforms',
      theme:
        'Build cloud-native platforms that support applications, workflows and AI agents.',
      products: ['Kumuluz Digital Platform'],
    },
    {
      slug: 'business-apis',
      label: 'Business APIs',
      description:
        'Reusable business capabilities for digital products, AI agents and workflows.',
      title: 'Business APIs for Digital Products and AI Agents',
      theme:
        'Reusable business capabilities for digital products, AI agents and workflows.',
      products: ['Kumuluz Business APIs', 'KumuluzAI'],
    },
    {
      slug: 'crowdsensing-smart-communities',
      label: 'Crowdsensing & Smart Communities',
      description:
        'Use distributed data and AI analytics to build smart community services.',
      title: 'Crowdsensing & Smart Communities',
      theme:
        'Use distributed data and AI analytics to build smart community services.',
      products: ['Kumuluz Crowdsensing'],
    },
  ],
}

const sl: SolutionsCopy = {
  seo: {
    title: 'Rešitve | Kumuluz',
    description:
      'Kako se Kumuluz produkti povežejo v rešitve za poslovne izzive: AgenticAI platforme, upravljanje API-jev, cloud-native digitalne platforme, poslovni API-ji in več.',
  },
  overview: {
    eyebrow: 'Rešitve',
    title: 'Rešitve, zgrajene na Kumuluz produktih',
    intro:
      'Produkti povedo, kaj orodje zmore. Rešitve povedo, kateri problem rešujemo, za kateri scenarij in kateri Kumuluz produkti sodelujejo pri tem. Raziščite rešitev, ki ustreza vašemu cilju.',
  },
  sectionLabels: {
    problem: 'Problem',
    audience: 'Komu je namenjeno',
    products: 'Vključeni Kumuluz produkti',
    useCases: 'Tipični primeri uporabe',
    architecture: 'Arhitektura in pristop',
    businessValue: 'Poslovna vrednost',
    cta: 'Začnite',
  },
  placeholder: 'Podrobna vsebina za to sekcijo prihaja kmalu.',
  ctaLabel: 'Kontaktirajte nas',
  solutions: [
    {
      slug: 'agentic-ai-platforms',
      label: 'Agentic AI platforme',
      description:
        'Zgradite vodeno enterprise platformo za AI agente z nadzorovanim dostopom do orodij, API-jev in podatkov.',
      title: 'Agentic AI platforme',
      theme: 'Zgradite vodeno enterprise platformo za AI agente.',
      products: [
        'KumuluzAI',
        'Kumuluz API',
        'Kumuluz Business API-ji',
        'Kumuluz Digital Platform',
      ],
    },
    {
      slug: 'enterprise-ai-assistants',
      label: 'Enterprise AI asistenti',
      description:
        'Uvedite AI asistente za stranke in zaposlene brez ustvarjanja izoliranih AI silosov.',
      title: 'Enterprise AI asistenti',
      theme:
        'Uvedite AI asistente za stranke in zaposlene brez izoliranih AI silosov.',
      products: ['AI Smart Assistant', 'KumuluzAI'],
    },
    {
      slug: 'ai-knowledge-management',
      label: 'AI upravljanje znanja',
      description:
        'Naredite poslovno znanje dostopno prek vodenega AI, ki se zaveda virov.',
      title: 'AI upravljanje znanja',
      theme: 'Naredite poslovno znanje dostopno prek vodenega AI.',
      products: ['Knowledge Mentor', 'KumuluzAI'],
    },
    {
      slug: 'api-management',
      label: 'Upravljanje API-jev in API ekonomija',
      description:
        'Spremenite API-je v vodena digitalna sredstva za time, partnerje in AI agente.',
      title: 'Upravljanje API-jev in API ekonomija',
      theme:
        'Spremenite API-je v vodena digitalna sredstva za time, partnerje in AI agente.',
      products: ['Kumuluz API', 'Kumuluz Business API-ji'],
    },
    {
      slug: 'cloud-native-digital-platforms',
      label: 'Cloud-native digitalne platforme',
      description:
        'Zgradite cloud-native platforme, ki podpirajo aplikacije, workflowe in AI agente.',
      title: 'Cloud-native digitalne platforme',
      theme:
        'Zgradite cloud-native platforme, ki podpirajo aplikacije, workflowe in AI agente.',
      products: ['Kumuluz Digital Platform'],
    },
    {
      slug: 'business-apis',
      label: 'Poslovni API-ji',
      description:
        'Ponovno uporabne poslovne zmožnosti za digitalne produkte, AI agente in workflowe.',
      title: 'Poslovni API-ji za digitalne produkte in AI agente',
      theme:
        'Ponovno uporabne poslovne zmožnosti za digitalne produkte, AI agente in workflowe.',
      products: ['Kumuluz Business API-ji', 'KumuluzAI'],
    },
    {
      slug: 'crowdsensing-smart-communities',
      label: 'Crowdsensing in pametne skupnosti',
      description:
        'Uporabite porazdeljene podatke in AI analitiko za gradnjo storitev pametnih skupnosti.',
      title: 'Crowdsensing in pametne skupnosti',
      theme:
        'Uporabite porazdeljene podatke in AI analitiko za gradnjo storitev pametnih skupnosti.',
      products: ['Kumuluz Crowdsensing'],
    },
  ],
}

export const solutionsCopy: Record<LanguageCode, SolutionsCopy> = { en, sl }
