export const slContent = {
  seo: {
    title:
      'Kumuluz | Enterprise platforme za AgenticAI, API-je in digitalne storitve',
    description:
      'Kumuluz organizacijam pomaga graditi upravljane AgenticAI platforme, API ekosisteme, ponovno uporabne Business API-je, cloud-native digitalne storitve in AI-podprte podatkovne rešitve.',
  },
  nav: {
    closeMenu: 'Zapri meni',
    back: 'Nazaj',
    blog: 'Vsebine',
    contact: 'Kontakt',
    menu: 'Meni',
    items: [
      {
        label: 'Produkti',
        hasDropdown: true,
        groups: [
          {
            title: 'Produkti',
            links: [
              {
                label: 'KumuluzAI',
                description:
                  'Poganjajte in vodite poslovne AI agente na nadzorovani AgenticAI platformi.',
              },
              {
                label: 'Kumuluz Digital Platform',
                description:
                  'Cloud-native temelj za digitalne storitve, API-je, MCP-omogočena orodja, konektorje in deterministične workflowe, ki jih uporabljajo aplikacije in AI agenti.',
              },
              {
                label: 'Kumuluz API',
                description:
                  'Upravljajte, izpostavljajte, varujte in spremljajte poslovne API-je in dostop AI agentov.',
              },
              {
                label: 'Kumuluz Business APIs',
                description:
                  'Ponovno uporabne poslovne zmožnosti in poslovna orodja, pripravljena za workflowe.',
              },
              {
                label: 'Kumuluz Crowdsensing',
                description:
                  'Zbirajte in obdelujte porazdeljene podatke za pametne storitve in analitiko.',
              },
            ],
          },
        ],
      },
      {
        label: 'Rešitve',
        hasDropdown: true,
        groups: [
          {
            title: 'Rešitve',
            links: [
              {
                label: 'Agentic AI platforme',
                description:
                  'Zgradite vodeno enterprise platformo za AI agente z nadzorovanim dostopom do orodij, API-jev in podatkov.',
              },
              {
                label: 'Enterprise AI asistenti',
                description:
                  'Uvedite AI asistente za stranke in zaposlene brez ustvarjanja izoliranih AI silosov.',
              },
              {
                label: 'AI upravljanje znanja',
                description:
                  'Naredite poslovno znanje dostopno prek vodenega AI, ki se zaveda virov.',
              },
              {
                label: 'Upravljanje API-jev in API ekonomija',
                description:
                  'Spremenite API-je v vodena digitalna sredstva za time, partnerje in AI agente.',
              },
              {
                label: 'Cloud-native digitalne platforme',
                description:
                  'Zgradite cloud-native platforme, ki podpirajo aplikacije, workflowe in AI agente.',
              },
              {
                label: 'Poslovni API-ji',
                description:
                  'Ponovno uporabne poslovne zmožnosti za digitalne produkte, AI agente in workflowe.',
              },
              {
                label: 'Crowdsensing in pametne skupnosti',
                description:
                  'Uporabite porazdeljene podatke in AI analitiko za gradnjo storitev pametnih skupnosti.',
              },
            ],
          },
        ],
      },
      {
        label: 'Zakaj Kumuluz?',
        hasDropdown: false,
        groups: [],
      },
    ],
    featuredLabel: 'Izpostavljeno',
    featuredTitle:
      'Enterprise AgenticAI, digitalne platforme in cloud-native razvoj',
  },
  footer: {
    tagline:
      'Enterprise AgenticAI, digitalne platforme, API-ji in cloud-native inženiring.',
    columns: [
      {
        title: 'Produkti',
        links: [
          'KumuluzAI',
          'Kumuluz Digital Platform',
          'Kumuluz API',
          'Kumuluz Business API-ji',
          'Kumuluz Crowdsensing',
        ],
      },
      {
        title: 'Rešitve',
        links: [
          'Agentic AI platforme',
          'Enterprise AI asistenti',
          'AI upravljanje znanja',
          'Upravljanje API-jev in API ekonomija',
          'Cloud-native digitalne platforme',
          'Poslovni API-ji',
          'Crowdsensing in pametne skupnosti',
        ],
      },
      {
        title: 'Gradiva',
        links: ['Zakaj Kumuluz?', 'Vsebine', 'Kontakt'],
      },
    ],
    social: {
      linkedin: 'LinkedIn',
      twitter: 'X',
      github: 'GitHub',
      youtube: 'YouTube',
    },
    copyright: '© {year} Sunesis. Vse pravice pridržane.',
  },
} as const
