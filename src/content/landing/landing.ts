import type { LanguageCode } from '../../lib/router'

const enLanding = {
  hero: {
    eyebrow: 'Connected enterprise platform family',
    title: 'Enterprise platforms for AgenticAI, APIs and digital services.',
    body: 'Secure, scalable, and production-ready.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore solutions',
    trustLine: 'Trusted by',
  },
  intro: {
    eyebrow: 'A platform foundation',
    title: 'Four foundations that work together',
    cards: [
      {
        title: 'Governed AgenticAI',
        text: 'Run and govern AI agents under enterprise control.',
      },
      {
        title: 'API-first ecosystems',
        text: 'Expose, secure and reuse APIs across the organization.',
      },
      {
        title: 'Reusable business capabilities',
        text: 'Shared business services for products, workflows and agents.',
      },
      {
        title: 'Cloud-native digital foundations',
        text: 'Scalable, container-ready foundations for modern digital services.',
      },
    ],
  },
  landingPageSections: {
    positioning: {
      title: 'Build connected platforms, not isolated projects',
      body: [
        'Enterprise digital initiatives often start separately: one AI assistant, one API platform, one modernization project, one workflow automation initiative, one smart data service.',
        'Each project can create value, but over time isolated systems become difficult to scale, govern and maintain.',
        'Kumuluz provides a connected platform family that helps organizations reuse agents, APIs, business capabilities, services, workflows, tools and data across multiple initiatives.',
        'This creates a stronger foundation for AgenticAI adoption, the API economy, cloud-native modernization and data-driven services.',
      ],
    },
    silosVsPlatform: {
      eyebrow: 'Silos vs. unified platform',
      title: 'From scattered silos to one shared foundation',
      intro:
        'Scattered AI solutions each carry their own stack. On Kumuluz, the same solutions run on one shared foundation with unified governance.',
      siloLabel: 'Scattered silos',
      platformLabel: 'Unified platform',
      nodes: ['Chatbot', 'Agent', 'Application'],
      stackLabel: 'own stack',
      siloCaption: 'Each with its own model, security, data and cost',
      foundationTitle: 'KumuluzAI',
      foundationSubtitle: 'shared foundation',
      platformCaption: 'Unified governance, security and control',
    },
    omnichannel: {
      eyebrow: 'Omnichannel',
      title: 'One agent layer across every channel',
      intro:
        'Different channels flow into the single KumuluzAI agent layer, where agents share context and knowledge and return one consistent answer.',
      channels: ['Web', 'Mobile app', 'Call center', 'Internal tools'],
      layerTitle: 'KumuluzAI — unified agent layer',
      agents: ['Agent A', 'Agent B', 'Agent C'],
      shareCaption: 'Share context, knowledge and policies',
      outputLabel: 'Consistent answer',
    },
    agenticOperations: {
      title: 'Designed for AgenticAI-ready enterprise architecture',
      intro:
        'Kumuluz helps organizations define clear boundaries between AI reasoning and enterprise execution, so AI agents can safely interact with knowledge, APIs, tools, workflows and data instead of connecting directly to backend systems.',
      cards: [
        {
          title: 'Knowledge',
          text: 'Enterprise documents, policies, procedures and knowledge bases become accessible through governed AI and RAG.',
        },
        {
          title: 'Agents',
          text: 'KumuluzAI agents and assistants reason, retrieve context, use tools and support users under governance.',
        },
        {
          title: 'APIs and tools',
          text: 'Kumuluz API exposes and governs APIs, MCP integrations, tool access, gateway routing and monitoring.',
        },
        {
          title: 'Business capabilities',
          text: 'Kumuluz Business APIs provide reusable operations for products, workflows and agents.',
        },
        {
          title: 'Workflows',
          text: 'Temporal, Camunda or similar workflow engines execute deterministic process steps where reliability matters.',
        },
        {
          title: 'Data',
          text: 'Kumuluz Crowdsensing provides distributed real-world data and AI-enhanced insights for smart services and agents.',
        },
      ],
    },
    kumuluz: {
      title: 'The Kumuluz product family',
      intro:
        'Each Kumuluz product has a clear role. Together, they create a connected foundation for enterprise AI, APIs, services, workflows and data.',
      summary:
        'KumuluzAI runs and governs AI agents. Kumuluz API manages and exposes APIs, including AI-agent and MCP integration. Kumuluz Business APIs provide reusable business capabilities for products, agents and workflows. Kumuluz Digital Platform builds services, APIs, connectors, tools and deterministic workflows. Kumuluz Crowdsensing collects distributed real-world data and applies AI-enhanced analytics.',
      items: [
        {
          title: 'Kumuluz Digital Platform',
          label: 'Cloud-native digital platform',
          text: 'A cloud-native, API-first and AI-agent-ready engineering foundation for services, APIs, connectors, MCP-enabled tools and workflow orchestrations.',
        },
        {
          title: 'Kumuluz API',
          label: 'API management',
          text: 'Expose, manage, secure and monitor APIs across internal teams, partners, digital ecosystems and AgenticAI environments, with developer portals, gateway management and MCP server patterns.',
        },
        {
          title: 'Kumuluz Business APIs',
          label: 'Reusable business capabilities',
          text: 'Turn repeated business functionality into reusable, governed and AgenticAI-ready capabilities for digital products, agents, MCP tools and deterministic workflows.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          label: 'AI-enhanced crowdsensing',
          text: 'Collect, process and use distributed data from people, devices, sensors and environments, with AI-enhanced analytics and AI-ready data services.',
        },
        {
          title: 'KumuluzAI Platform',
          label: 'Governed AgenticAI platform',
          text: 'Build AI agents and assistants that access enterprise knowledge, use approved tools, route model requests, follow policies, support human approvals and provide auditability.',
        },
      ],
    },
    selectedWork: {
      title: 'Start with one use case. Scale into a platform.',
      intro:
        'You do not need to adopt everything at once. Most organizations start with one focused challenge and expand over time.',
      projects: [
        {
          title: 'Start with an AI assistant',
          label: 'AI assistant',
          text: 'Deploy a customer or employee assistant for support, knowledge access or portal guidance.',
          expertise: 'KumuluzAI · AI Smart Assistant',
        },
        {
          title: 'Start with API management',
          label: 'API management',
          text: 'Create API visibility, governance, developer onboarding and partner access.',
          expertise: 'Kumuluz API · Kumuluz Digital Platform',
        },
        {
          title: 'Start with Business APIs',
          label: 'Business APIs',
          text: 'Turn repeated business functionality into reusable capabilities for products, workflows and agents.',
          expertise: 'Kumuluz Business APIs · Kumuluz API',
        },
        {
          title: 'Start with digital platform modernization',
          label: 'Digital platform',
          text: 'Build cloud-native services, APIs, connectors and workflow-ready foundations around existing systems.',
          expertise: 'Kumuluz Digital Platform · Kumuluz API',
        },
        {
          title: 'Start with crowdsensing and smart data',
          label: 'Smart data',
          text: 'Collect distributed data and turn it into AI-enhanced insights and smart services.',
          expertise: 'Kumuluz Crowdsensing · KumuluzAI',
        },
      ],
    },
    proof: {
      title: 'Built for demanding enterprise environments',
      text: 'Kumuluz products have been used where reliability, governance, integration and long-term platform evolution matter, across banking, insurance, aviation maintenance and enterprise services, including OTP banka, Generali, Prva zavarovalnica, Zavarovalniska skupina Sava and Adria Tehnika, and in the Green.Dat.AI Horizon Europe context for energy-efficient, AI-ready data spaces.',
      cards: [
        {
          title: 'Banking and financial services',
          text: 'API ecosystems, secure integrations, digital platforms, AI-agent-ready business services and workflow automation.',
        },
        {
          title: 'Insurance',
          text: 'Partner APIs, claims support, onboarding, knowledge assistants, business APIs and AgenticAI process support.',
        },
        {
          title: 'Public sector and smart communities',
          text: 'Crowdsensing, AI-enhanced analytics, smart services, citizen engagement and AI-ready data services.',
        },
        {
          title: 'Enterprise and aviation maintenance',
          text: 'Operational integrations, controlled API exposure, digital services and platform modernization.',
        },
      ],
    },
    why: {
      title: 'Why organizations choose Kumuluz',
      intro:
        'A connected platform family built for enterprise governance and AgenticAI-ready architecture.',
      items: [
        {
          title: 'Platform approach instead of silos',
          text: 'Kumuluz helps organizations move from isolated AI, API, workflow and digital projects to reusable platform foundations.',
        },
        {
          title: 'Enterprise governance',
          text: 'Security, identity, permissions, auditability, observability and lifecycle management are part of the architecture.',
        },
        {
          title: 'AgenticAI-ready by design',
          text: 'Knowledge, APIs, tools, workflows and data can be prepared for safe use by AI agents.',
        },
        {
          title: 'API-first and cloud-native',
          text: 'Kumuluz supports modern API-first and cloud-native architectures for scalable digital platforms.',
        },
        {
          title: 'Reusable business capabilities',
          text: 'Repeated business functionality can become reusable APIs instead of being rebuilt project by project.',
        },
        {
          title: 'Workflow-ready automation',
          text: 'Critical business processes can be executed deterministically through workflow engines such as Temporal or Camunda.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Kumuluz is developed and delivered by Sunesis, combining enterprise software engineering, AgenticAI, APIs, integrations, cloud-native platforms, workflow automation, data platforms and DevOps expertise.',
        },
      ],
    },
    contactHelp: {
      eyebrow: 'How we can help',
      title: 'What can we help you with?',
      intro:
        'Kumuluz covers a connected family of enterprise platform capabilities. If you are not sure where to start, we can help you identify the best entry point.',
      items: [
        {
          title: 'AgenticAI platforms',
          text: 'Build governed AI agent platforms with knowledge, tools, APIs, workflows, model routing, approvals and auditability.',
        },
        {
          title: 'Enterprise AI assistants',
          text: 'Deploy customer-facing or employee-facing AI assistants for support, knowledge access and digital service guidance.',
        },
        {
          title: 'AI knowledge management',
          text: 'Make documents, policies, procedures and knowledge bases accessible through governed AI.',
        },
        {
          title: 'API management and API economy',
          text: 'Expose, secure, monitor and manage APIs for teams, partners, digital ecosystems and AI agents.',
        },
        {
          title: 'Cloud-native digital platforms',
          text: 'Build or modernize digital platforms with services, APIs, connectors, MCP-enabled tools and deterministic workflows.',
        },
        {
          title: 'Business APIs',
          text: 'Turn repeated business functionality into reusable capabilities for digital products, workflows and AI agents.',
        },
        {
          title: 'Crowdsensing and smart communities',
          text: 'Collect and process distributed data from people, devices, sensors and environments using AI-enhanced analytics.',
        },
      ],
    },
    contactSteps: {
      eyebrow: 'What happens next',
      title: 'What happens after you contact us?',
      intro:
        'From your first message to a focused demo, here is how we work with you.',
      steps: [
        {
          title: 'We review your inquiry',
          text: 'We look at your message, interest area and project context.',
        },
        {
          title: 'We schedule a short discovery call',
          text: 'We discuss your goals, current environment, constraints and possible starting points.',
        },
        {
          title: 'We suggest a solution direction',
          text: 'We identify which Kumuluz products or solution areas fit your needs.',
        },
        {
          title: 'We can prepare a focused demo',
          text: 'If useful, we can show relevant Kumuluz capabilities based on your use case.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Contact Kumuluz',
      title: 'Ready to build your next enterprise platform foundation?',
      text: 'Kumuluz helps organizations build governed platforms for AgenticAI, APIs, digital services, reusable business capabilities, workflows and AI-enhanced data services. Start with one use case and evolve toward a connected platform architecture.',
      contact: {
        address: [
          'SUNESIS d.o.o.',
          'Ulica gledališča BTC 2',
          '1000 Ljubljana',
          'Slovenia',
        ],
        email: 'info@sunesis.si',
      },
      form: {
        title: 'Tell us what you are looking for',
        intro:
          'Share a few details and we will get back to you to discuss your needs, potential solution approach and next steps.',
        firstNameLabel: 'First name',
        lastNameLabel: 'Last name',
        emailLabel: 'Business email',
        companyLabel: 'Company / organization',
        jobTitleLabel: 'Job title',
        phoneLabel: 'Phone',
        countryLabel: 'Country',
        interestLabel: 'Interest area',
        interestOptions: [
          'AgenticAI platform',
          'Enterprise AI assistants',
          'AI knowledge management',
          'API management / API economy',
          'Cloud-native digital platform',
          'Business APIs',
          'Crowdsensing / smart communities',
          'Workflow automation',
          'Other',
        ],
        stageLabel: 'Project stage',
        stagePlaceholder: 'Select an option',
        stageOptions: [
          'Exploring options',
          'Planning a project',
          'Looking for a demo',
          'Evaluating vendors',
          'Need architecture advice',
          'Existing Kumuluz user',
          'Other',
        ],
        messageLabel: 'Message',
        messagePlaceholder:
          'Tell us briefly about your challenge, use case or project.',
        consent:
          'By submitting this form, you agree that Sunesis may contact you regarding your inquiry.',
        submitLabel: 'Submit request',
        emailRequiredError: 'Please enter your email address.',
        emailInvalidError: 'Please enter a valid email address.',
        phoneInvalidError: 'Please enter a valid phone number.',
        messageRequiredError: 'Please enter a message.',
        sendingLabel: 'Sending…',
        errorMessage:
          'Something went wrong sending your message. Please try again or email us directly.',
      },
    },
  },
  thanks: {
    title: 'Thank you — your request has been submitted.',
    text: 'The Kumuluz team will review your inquiry and contact you soon.',
    backLabel: 'Back to home',
  },
} as const

const slLanding = {
  hero: {
    eyebrow: 'Povezana družina enterprise platform',
    title: 'Enterprise platforme za AgenticAI, API-je in digitalne storitve.',
    body: 'Varno, skalabilno in produkcijsko pripravljeno.',
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite rešitve',
    trustLine: 'Zaupajo nam',
  },
  intro: {
    eyebrow: 'Platformni temelj',
    title: 'Štirje temelji, ki delujejo skupaj',
    cards: [
      {
        title: 'Upravljan AgenticAI',
        text: 'Poganjajte in vodite AI agente pod poslovnim nadzorom.',
      },
      {
        title: 'API-first ekosistemi',
        text: 'Izpostavljajte, varujte in ponovno uporabljajte API-je v organizaciji.',
      },
      {
        title: 'Ponovno uporabne poslovne zmožnosti',
        text: 'Skupne poslovne storitve za produkte, workflowe in agente.',
      },
      {
        title: 'Cloud-native digitalni temelji',
        text: 'Skalabilni, na vsebnike pripravljeni temelji za sodobne digitalne storitve.',
      },
    ],
  },
  landingPageSections: {
    positioning: {
      title: 'Gradite povezane platforme, ne izoliranih projektov',
      body: [
        'Enterprise digitalne pobude se pogosto začnejo ločeno: en AI asistent, ena API platforma, en projekt posodobitve, ena pobuda za avtomatizacijo workflowov, ena pametna podatkovna storitev.',
        'Vsak projekt lahko ustvari vrednost, a sčasoma izolirani sistemi postanejo težki za skaliranje, upravljanje in vzdrževanje.',
        'Kumuluz ponuja povezano družino platform, ki organizacijam omogoča ponovno uporabo agentov, API-jev, poslovnih zmožnosti, storitev, workflowov, orodij in podatkov med različnimi pobudami.',
        'To ustvarja močnejši temelj za uvajanje AgenticAI, API ekonomijo, cloud-native posodobitev in podatkovno vodene storitve.',
      ],
    },
    silosVsPlatform: {
      eyebrow: 'Silosi proti enotni platformi',
      title: 'Od razpršenih silosov do enotnega temelja',
      intro:
        'Razpršene AI rešitve imajo vsaka svoj sklad. Na Kumuluzu iste rešitve tečejo na enotnem temelju z enotnim upravljanjem.',
      siloLabel: 'Razpršeni silosi',
      platformLabel: 'Enotna platforma',
      nodes: ['Chatbot', 'Agent', 'Aplikacija'],
      stackLabel: 'svoj sklad',
      siloCaption: 'Vsak svoj model, varnost, podatki, stroški',
      foundationTitle: 'KumuluzAI',
      foundationSubtitle: 'enotni temelj',
      platformCaption: 'Enotno upravljanje, varnost, nadzor',
    },
    omnichannel: {
      eyebrow: 'Omnichannel',
      title: 'Enotna agentna plast prek vseh kanalov',
      intro:
        'Različni kanali se stekajo v enotno agentno plast KumuluzAI, kjer si agenti delijo kontekst in znanje ter vrnejo konsistenten odgovor.',
      channels: ['Splet', 'Mobilna app', 'Klicni center', 'Interna orodja'],
      layerTitle: 'KumuluzAI — enotna agentna plast',
      agents: ['Agent A', 'Agent B', 'Agent C'],
      shareCaption: 'Delijo kontekst, znanje in politike',
      outputLabel: 'Konsistenten odgovor',
    },
    agenticOperations: {
      title: 'Zasnovano za AgenticAI-ready enterprise arhitekturo',
      intro:
        'Kumuluz organizacijam pomaga določiti jasne meje med AI sklepanjem in enterprise izvajanjem, da lahko AI agenti varno sodelujejo z znanjem, API-ji, orodji, workflowi in podatki namesto neposrednega povezovanja z zalednimi sistemi.',
      cards: [
        {
          title: 'Znanje',
          text: 'Enterprise dokumenti, politike, postopki in baze znanja postanejo dostopni prek upravljanega AI in RAG.',
        },
        {
          title: 'Agenti',
          text: 'KumuluzAI agenti in asistenti sklepajo, pridobivajo kontekst, uporabljajo orodja in podpirajo uporabnike pod governance nadzorom.',
        },
        {
          title: 'API-ji in orodja',
          text: 'Kumuluz API izpostavlja in upravlja API-je, MCP integracije, dostop do orodij, usmerjanje gatewayev in nadzor.',
        },
        {
          title: 'Poslovne zmožnosti',
          text: 'Kumuluz Business API-ji zagotavljajo ponovno uporabne operacije za produkte, workflowe in agente.',
        },
        {
          title: 'Workflowi',
          text: 'Temporal, Camunda ali podobni workflow pogoni izvajajo deterministične korake procesov, kjer je pomembna zanesljivost.',
        },
        {
          title: 'Podatki',
          text: 'Kumuluz Crowdsensing zagotavlja porazdeljene podatke iz resničnega sveta in AI-podprte vpoglede za pametne storitve in agente.',
        },
      ],
    },
    kumuluz: {
      title: 'Družina produktov Kumuluz',
      intro:
        'Vsak produkt Kumuluz ima jasno vlogo. Skupaj tvorijo povezan temelj za enterprise AI, API-je, storitve, workflowe in podatke.',
      summary:
        'KumuluzAI poganja in upravlja AI agente. Kumuluz API upravlja in izpostavlja API-je, vključno z integracijo AI agentov in MCP. Kumuluz Business API-ji zagotavljajo ponovno uporabne poslovne zmožnosti za produkte, agente in workflowe. Kumuluz Digital Platform gradi storitve, API-je, konektorje, orodja in deterministične workflowe. Kumuluz Crowdsensing zbira porazdeljene podatke iz resničnega sveta in uporablja AI-podprto analitiko.',
      items: [
        {
          title: 'Kumuluz Digital Platform',
          label: 'Cloud-native digitalna platforma',
          text: 'Cloud-native, API-first in AI-agent-ready inženirski temelj za storitve, API-je, konektorje, MCP orodja in orkestracijo workflowov.',
        },
        {
          title: 'Kumuluz API',
          label: 'API management',
          text: 'Izpostavljajte, upravljajte, zavarujte in spremljajte API-je med internimi ekipami, partnerji, digitalnimi ekosistemi in AgenticAI okolji, z developerskimi portali, upravljanjem gatewayev in MCP vzorci.',
        },
        {
          title: 'Kumuluz Business API-ji',
          label: 'Ponovno uporabne poslovne zmožnosti',
          text: 'Ponavljajočo se poslovno funkcionalnost spremenite v ponovno uporabne, upravljane in AgenticAI-ready zmožnosti za digitalne produkte, agente, MCP orodja in deterministične workflowe.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          label: 'AI-podprt crowdsensing',
          text: 'Zbirajte, obdelujte in uporabljajte porazdeljene podatke iz ljudi, naprav, senzorjev in okolij, z AI-podprto analitiko in AI-ready podatkovnimi storitvami.',
        },
        {
          title: 'KumuluzAI Platform',
          label: 'Upravljana AgenticAI platforma',
          text: 'Gradite AI agente in asistente, ki dostopajo do enterprise znanja, uporabljajo odobrena orodja, usmerjajo zahtevke modelom, sledijo politikam, podpirajo človeške odobritve in omogočajo revizijske sledi.',
        },
      ],
    },
    selectedWork: {
      title: 'Začnite z enim primerom uporabe. Razširite v platformo.',
      intro:
        'Ni vam treba uvesti vsega naenkrat. Večina organizacij začne z enim osredotočenim izzivom in se širi sčasoma.',
      projects: [
        {
          title: 'Začnite z AI asistentom',
          label: 'AI asistent',
          text: 'Uvedite asistenta za stranke ali zaposlene za podporo, dostop do znanja ali vodenje po portalu.',
          expertise: 'KumuluzAI · AI Smart Assistant',
        },
        {
          title: 'Začnite z API managementom',
          label: 'API management',
          text: 'Vzpostavite preglednost API-jev, governance, onboarding razvijalcev in partnerski dostop.',
          expertise: 'Kumuluz API · Kumuluz Digital Platform',
        },
        {
          title: 'Začnite z Business API-ji',
          label: 'Business API-ji',
          text: 'Ponavljajočo se poslovno funkcionalnost spremenite v ponovno uporabne zmožnosti za produkte, workflowe in agente.',
          expertise: 'Kumuluz Business API-ji · Kumuluz API',
        },
        {
          title: 'Začnite s posodobitvijo digitalne platforme',
          label: 'Digitalna platforma',
          text: 'Zgradite cloud-native storitve, API-je, konektorje in workflow-ready temelje okoli obstoječih sistemov.',
          expertise: 'Kumuluz Digital Platform · Kumuluz API',
        },
        {
          title: 'Začnite s crowdsensingom in pametnimi podatki',
          label: 'Pametni podatki',
          text: 'Zbirajte porazdeljene podatke in jih spremenite v AI-podprte vpoglede in pametne storitve.',
          expertise: 'Kumuluz Crowdsensing · KumuluzAI',
        },
      ],
    },
    proof: {
      title: 'Zgrajeno za zahtevna enterprise okolja',
      text: 'Produkti Kumuluz so bili uporabljeni tam, kjer so pomembni zanesljivost, governance, integracije in dolgoročni razvoj platform, v bančništvu, zavarovalništvu, vzdrževanju letal in enterprise storitvah, vključno z OTP banka, Generali, Prva zavarovalnica, Zavarovalniška skupina Sava in Adria Tehnika, ter v okviru Green.Dat.AI Horizon Europe za energetsko učinkovite, AI-ready podatkovne prostore.',
      cards: [
        {
          title: 'Bančništvo in finančne storitve',
          text: 'API ekosistemi, varne integracije, digitalne platforme, AI-agent-ready poslovne storitve in avtomatizacija workflowov.',
        },
        {
          title: 'Zavarovalništvo',
          text: 'Partnerski API-ji, podpora škodam, onboarding, asistenti za znanje, business API-ji in AgenticAI procesna podpora.',
        },
        {
          title: 'Javni sektor in pametne skupnosti',
          text: 'Crowdsensing, AI-podprta analitika, pametne storitve, vključevanje občanov in AI-ready podatkovne storitve.',
        },
        {
          title: 'Enterprise in vzdrževanje letal',
          text: 'Operativne integracije, nadzorovana izpostavitev API-jev, digitalne storitve in posodobitev platform.',
        },
      ],
    },
    why: {
      title: 'Zakaj organizacije izberejo Kumuluz',
      intro:
        'Povezana družina platform, zgrajena za enterprise governance in AgenticAI-ready arhitekturo.',
      items: [
        {
          title: 'Platformni pristop namesto silosov',
          text: 'Kumuluz organizacijam pomaga pri prehodu od izoliranih AI, API, workflow in digitalnih projektov k ponovno uporabnim platformnim temeljem.',
        },
        {
          title: 'Enterprise governance',
          text: 'Varnost, identiteta, dovoljenja, revizijske sledi, opazljivost in upravljanje življenjskega cikla so del arhitekture.',
        },
        {
          title: 'AgenticAI-ready po zasnovi',
          text: 'Znanje, API-ji, orodja, workflowi in podatki so lahko pripravljeni za varno uporabo s strani AI agentov.',
        },
        {
          title: 'API-first in cloud-native',
          text: 'Kumuluz podpira sodobne API-first in cloud-native arhitekture za skalabilne digitalne platforme.',
        },
        {
          title: 'Ponovno uporabne poslovne zmožnosti',
          text: 'Ponavljajoča se poslovna funkcionalnost lahko postane ponovno uporaben API namesto da bi jo gradili projekt za projektom.',
        },
        {
          title: 'Workflow-ready avtomatizacija',
          text: 'Kritične poslovne procese je mogoče izvajati deterministično prek workflow pogonov, kot sta Temporal ali Camunda.',
        },
        {
          title: 'Razvija in dostavlja Sunesis',
          text: 'Kumuluz razvija in dostavlja Sunesis, ki združuje enterprise programski inženiring, AgenticAI, API-je, integracije, cloud-native platforme, avtomatizacijo workflowov, podatkovne platforme in DevOps znanje.',
        },
      ],
    },
    contactHelp: {
      eyebrow: 'Kako lahko pomagamo',
      title: 'Pri čem vam lahko pomagamo?',
      intro:
        'Kumuluz pokriva povezano družino enterprise platformnih zmožnosti. Če niste prepričani, kje začeti, vam pomagamo določiti najboljšo vstopno točko.',
      items: [
        {
          title: 'AgenticAI platforme',
          text: 'Zgradite upravljane platforme AI agentov z znanjem, orodji, API-ji, workflowi, usmerjanjem modelov, odobritvami in sledljivostjo.',
        },
        {
          title: 'Enterprise AI asistenti',
          text: 'Uvedite AI asistente za stranke ali zaposlene za podporo, dostop do znanja in vodenje po digitalnih storitvah.',
        },
        {
          title: 'AI upravljanje znanja',
          text: 'Naredite dokumente, politike, postopke in baze znanja dostopne prek upravljanega AI.',
        },
        {
          title: 'Upravljanje API-jev in API ekonomija',
          text: 'Izpostavite, zavarujte, spremljajte in upravljajte API-je za ekipe, partnerje, digitalne ekosisteme in AI agente.',
        },
        {
          title: 'Cloud-native digitalne platforme',
          text: 'Zgradite ali posodobite digitalne platforme s storitvami, API-ji, konektorji, MCP-omogočenimi orodji in determinističnimi workflowi.',
        },
        {
          title: 'Poslovni API-ji',
          text: 'Ponavljajočo se poslovno funkcionalnost spremenite v ponovno uporabne zmožnosti za digitalne produkte, workflowe in AI agente.',
        },
        {
          title: 'Crowdsensing in pametne skupnosti',
          text: 'Zbirajte in obdelujte porazdeljene podatke iz ljudi, naprav, senzorjev in okolij z AI-podprto analitiko.',
        },
      ],
    },
    contactSteps: {
      eyebrow: 'Kako poteka naprej',
      title: 'Kaj se zgodi, ko nas kontaktirate?',
      intro:
        'Od prvega sporočila do osredotočenega demota — tako sodelujemo z vami.',
      steps: [
        {
          title: 'Pregledamo vaše povpraševanje',
          text: 'Pogledamo vaše sporočilo, področje zanimanja in kontekst projekta.',
        },
        {
          title: 'Dogovorimo se za kratek uvodni klic',
          text: 'Pogovorimo se o vaših ciljih, trenutnem okolju, omejitvah in možnih izhodiščih.',
        },
        {
          title: 'Predlagamo smer rešitve',
          text: 'Določimo, kateri produkti ali področja rešitev Kumuluz ustrezajo vašim potrebam.',
        },
        {
          title: 'Pripravimo lahko osredotočen demo',
          text: 'Če je koristno, vam prikažemo ustrezne zmožnosti Kumuluz glede na vaš primer uporabe.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Kontaktirajte Kumuluz',
      title: 'Pripravljeni zgraditi naslednji temelj enterprise platforme?',
      text: 'Kumuluz organizacijam pomaga graditi upravljane platforme za AgenticAI, API-je, digitalne storitve, ponovno uporabne poslovne zmožnosti, workflowe in AI-podprte podatkovne storitve. Začnite z enim primerom uporabe in se razvijte k povezani platformni arhitekturi.',
      contact: {
        address: [
          'SUNESIS d.o.o.',
          'Ulica gledališča BTC 2',
          '1000 Ljubljana',
          'Slovenija',
        ],
        email: 'info@sunesis.si',
      },
      form: {
        title: 'Povejte nam, kaj iščete',
        intro:
          'Delite nekaj podrobnosti in vas bomo kontaktirali, da se pogovorimo o vaših potrebah, možnem pristopu k rešitvi in naslednjih korakih.',
        firstNameLabel: 'Ime',
        lastNameLabel: 'Priimek',
        emailLabel: 'Poslovna e-pošta',
        companyLabel: 'Podjetje / organizacija',
        jobTitleLabel: 'Delovno mesto',
        phoneLabel: 'Telefon',
        countryLabel: 'Država',
        interestLabel: 'Področje zanimanja',
        interestOptions: [
          'AgenticAI platforma',
          'Enterprise AI asistenti',
          'AI upravljanje znanja',
          'Upravljanje API-jev / API ekonomija',
          'Cloud-native digitalna platforma',
          'Poslovni API-ji',
          'Crowdsensing / pametne skupnosti',
          'Avtomatizacija workflowov',
          'Drugo',
        ],
        stageLabel: 'Faza projekta',
        stagePlaceholder: 'Izberite možnost',
        stageOptions: [
          'Raziskujemo možnosti',
          'Načrtujemo projekt',
          'Iščemo demo',
          'Ocenjujemo ponudnike',
          'Potrebujemo arhitekturni nasvet',
          'Obstoječi uporabnik Kumuluz',
          'Drugo',
        ],
        messageLabel: 'Sporočilo',
        messagePlaceholder:
          'Na kratko nam opišite svoj izziv, primer uporabe ali projekt.',
        consent:
          'Z oddajo tega obrazca se strinjate, da vas Sunesis lahko kontaktira glede vašega povpraševanja.',
        submitLabel: 'Pošljite povpraševanje',
        emailRequiredError: 'Vnesite svoj e-poštni naslov.',
        emailInvalidError: 'Vnesite veljaven e-poštni naslov.',
        phoneInvalidError: 'Vnesite veljavno telefonsko številko.',
        messageRequiredError: 'Vnesite sporočilo.',
        sendingLabel: 'Pošiljanje…',
        errorMessage:
          'Pri pošiljanju sporočila je prišlo do napake. Poskusite znova ali nam pišite neposredno.',
      },
    },
  },
  thanks: {
    title: 'Hvala — vaše povpraševanje je bilo oddano.',
    text: 'Ekipa Kumuluz bo pregledala vaše povpraševanje in vas kmalu kontaktirala.',
    backLabel: 'Nazaj na domačo stran',
  },
} as const

export const landingContent = {
  en: enLanding,
  sl: slLanding,
}

export type LandingContent = (typeof landingContent)[LanguageCode]
