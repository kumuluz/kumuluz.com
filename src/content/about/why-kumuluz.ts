import {
  Activity,
  Bot,
  Boxes,
  Cloud,
  GitBranch,
  Layers,
  Network,
  Server,
  ShieldCheck,
  UserCheck,
  Webhook,
  Workflow,
  Wrench,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { AboutPageContent } from '../../views/about/types'

const en: AboutPageContent = {
  seo: {
    title:
      'Why Kumuluz | Enterprise Platforms for AgenticAI, APIs and Digital Services',
    description:
      'Learn why organizations choose Kumuluz for governed AgenticAI platforms, API ecosystems, cloud-native digital platforms, reusable Business APIs and AI-enhanced data services.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Benefits',
    title:
      'A connected platform family for enterprise AI, APIs and digital services',
    body: [
      'Kumuluz helps organizations move from isolated digital initiatives to reusable platform foundations for AgenticAI, APIs, cloud-native services, business capabilities, workflows and AI-enhanced data services.',
      'Instead of building every assistant, API, integration or workflow from scratch, Kumuluz provides a connected product family that helps teams build faster, integrate better and operate with more enterprise control.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore products',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'split',
      title: 'From one-off projects to reusable platform foundations',
      body: [
        'Many organizations approach digital transformation through individual projects. One team builds an AI assistant. Another creates an API portal. Another modernizes an application. Another automates a workflow. Another starts a data-driven smart service initiative.',
        'Each project may deliver value, but over time this creates fragmentation: duplicated integrations, inconsistent APIs, separate AI stacks, unmanaged knowledge sources, isolated workflows and rising maintenance cost.',
        'Kumuluz is built around a platform approach. It helps organizations create reusable foundations that can support multiple products, teams, departments and channels — while keeping security, governance, integration and operations under control.',
      ],
    },
    {
      type: 'cards',
      eyebrow: 'The platform advantage',
      title: 'What a platform approach changes',
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Reduce digital fragmentation',
          text: 'Avoid disconnected AI, API, workflow, integration and application stacks.',
        },
        {
          title: 'Reuse platform capabilities',
          text: 'Reuse agents, APIs, services, business capabilities, workflows, connectors, tools and data services across initiatives.',
        },
        {
          title: 'Build faster with more control',
          text: 'Accelerate delivery without losing architecture discipline, security or long-term maintainability.',
        },
        {
          title: 'Prepare for enterprise AgenticAI',
          text: 'Make knowledge, APIs, services, tools, workflows and data available to AI agents through governed platform boundaries.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Why now',
      title: 'Why Kumuluz matters now',
      body: [
        'Enterprise technology is entering a new phase. Organizations are no longer only building portals, mobile apps and APIs. They are also adopting AI assistants, AI agents, workflow automation, API ecosystems, reusable business capabilities and data-driven smart services.',
        'This creates a new architectural challenge: how to connect AI, APIs, services, workflows, business systems and data without creating another generation of silos.',
        'Kumuluz addresses this challenge by combining AgenticAI, API management, Business APIs, cloud-native digital platform engineering and AI-enhanced data services into one coherent platform family.',
      ],
    },
    {
      type: 'cards',
      title: 'The shifts shaping enterprise architecture',
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'AI agents need enterprise foundations',
          text: 'AI agents need governed access to knowledge, APIs, tools, workflows and business systems.',
        },
        {
          title: 'APIs are becoming agent tools',
          text: 'APIs are no longer used only by applications and partners. They are also becoming controlled capabilities for AI agents.',
        },
        {
          title: 'Business capabilities must be reusable',
          text: 'Customer data, payments, onboarding, KYC, orders, cases and notifications should be reusable across products, workflows and agents.',
        },
        {
          title: 'Workflows still need deterministic control',
          text: 'AI can assist and reason, but critical processes need defined steps, approvals, retries and audit trails.',
        },
        {
          title: 'Digital platforms must become AI-agent-ready',
          text: 'Modern platforms need services, APIs, connectors, MCP-enabled tools and workflow orchestration.',
        },
        {
          title: 'Data must become AI-ready',
          text: 'Distributed data from people, devices and environments needs validation, governance, privacy-aware processing and AI-enhanced analytics.',
        },
      ],
    },
    {
      type: 'cards',
      id: 'platform-family',
      eyebrow: 'One platform family',
      title: 'One platform family, clear product roles',
      body: [
        'Kumuluz is a connected product family. Each product has a distinct role, but the strongest value comes when products work together.',
      ],
      variant: 'icon-dark',
      items: [
        {
          icon: Bot,
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'Runs and governs AI agents, assistants, enterprise knowledge access, tool use, model routing, human approvals, policies, auditability and cost visibility.',
        },
        {
          icon: Network,
          label: 'API management',
          title: 'Kumuluz API',
          text: 'Manages, exposes, secures and monitors APIs for applications, partners and AI agents, including API gateway, MCP, contextual routing, LLM routing and token usage logging.',
        },
        {
          icon: Boxes,
          label: 'Business capabilities',
          title: 'Kumuluz Business APIs',
          text: 'Provides reusable, AgenticAI-ready and workflow-ready business capabilities such as customer data, product catalogs, payments, onboarding, KYC, orders, cases, tasks and notifications.',
        },
        {
          icon: Cloud,
          label: 'Cloud-native',
          title: 'Kumuluz Digital Platform',
          text: 'Provides the cloud-native engineering foundation for building services, APIs, connectors, MCP-enabled tools and deterministic workflows that applications and AI agents can use.',
        },
        {
          icon: Activity,
          label: 'Smart data',
          title: 'Kumuluz Crowdsensing',
          text: 'Collects and processes distributed real-world data from people, devices, sensors and environments using privacy-aware processing, analytics and AI-enhanced insight generation.',
        },
      ],
    },
    {
      type: 'split',
      title: 'Designed for AgenticAI-ready enterprise architecture',
      body: [
        'AgenticAI can create major value, but only when AI agents can safely interact with enterprise knowledge, APIs, tools, workflows and data. Kumuluz helps organizations define clear boundaries between AI reasoning and enterprise execution.',
        'AI agents can retrieve knowledge, understand intent and suggest actions. APIs and tools expose approved capabilities. Workflow engines execute deterministic process steps. Business APIs encapsulate reusable business operations. API gateways provide routing, validation and monitoring. Data services provide real-world context.',
      ],
      quote:
        'This is safer and more maintainable than giving AI agents direct access to backend systems.',
    },
    {
      type: 'capabilities',
      id: 'agentic-architecture',
      title: 'AgenticAI architecture principles',
      intro:
        'Clear boundaries between what AI reasons about and what the enterprise executes — so agents stay useful and governed.',
      items: [
        {
          icon: ShieldCheck,
          title: 'Governed knowledge',
          text: 'AI agents use approved knowledge sources with source traceability and permission-aware retrieval.',
        },
        {
          icon: Wrench,
          title: 'Tool-safe APIs',
          text: 'Agents call APIs with clear inputs, outputs, validation, permissions and auditability.',
        },
        {
          icon: Boxes,
          title: 'MCP-enabled integration',
          text: 'Approved capabilities can be exposed through MCP-oriented patterns where appropriate.',
        },
        {
          icon: Network,
          title: 'Gateway control',
          text: 'Agent requests can be routed, checked, monitored and governed through the API gateway layer.',
        },
        {
          icon: Workflow,
          title: 'Deterministic workflows',
          text: 'Business-critical steps can run through workflow engines such as Temporal or Camunda.',
        },
        {
          icon: UserCheck,
          title: 'Human oversight',
          text: 'Sensitive actions can require review, approval or escalation before execution.',
        },
        {
          icon: Activity,
          title: 'Operational visibility',
          text: 'Organizations can monitor agents, API calls, token usage, workflows, services and data usage.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Governance',
      title: 'Built for enterprise governance and control',
      body: [
        'Enterprise platforms must be secure, observable and manageable from the beginning. Kumuluz is designed for environments where identity, permissions, auditability, deployment control, operational visibility and integration with existing systems matter.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Security and identity integration',
          text: 'Integrate with enterprise identity providers and apply access control across users, agents, APIs, tools, services and workflows.',
        },
        {
          title: 'Auditability',
          text: 'Track AI interactions, knowledge retrieval, API calls, tool usage, workflow steps, approvals and data access where required.',
        },
        {
          title: 'API and tool governance',
          text: 'Define which applications, partners, workflows or AI agents can use which APIs and tools.',
        },
        {
          title: 'Human-in-the-loop control',
          text: 'Use approvals and escalation paths for sensitive actions.',
        },
        {
          title: 'Lifecycle management',
          text: 'Manage APIs, agents, tools, knowledge sources, Business APIs, workflows and platform components over time.',
        },
        {
          title: 'Observability',
          text: 'Monitor services, APIs, workflows, agent behavior, model usage, token consumption, data flows and operational health.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Modern, cloud-native and framework-flexible',
      intro:
        'Kumuluz follows modern cloud-native, API-first and integration-ready architecture principles. For new Java cloud-native digital platform projects, Kumuluz Digital Platform is typically implemented with Quarkus, while remaining aligned with MicroProfile and Jakarta EE compatible principles.',
      items: [
        {
          icon: Cloud,
          title: 'Cloud-native architecture',
          text: 'Designed for containers, Kubernetes, OpenShift, automated deployment, resilience and observability.',
        },
        {
          icon: Webhook,
          title: 'API-first design',
          text: 'Business and technical capabilities are exposed through reusable, governed APIs.',
        },
        {
          icon: GitBranch,
          title: 'Workflow-ready',
          text: 'Supports deterministic process execution with workflow engines such as Temporal, Camunda or similar platforms.',
        },
        {
          icon: Bot,
          title: 'AgenticAI-ready',
          text: 'Supports services, APIs, tools, connectors, MCP-oriented integrations and governed agent access.',
        },
        {
          icon: Server,
          title: 'Hybrid enterprise integration',
          text: 'Works with cloud, on-premise, legacy systems, enterprise platforms and existing operational environments.',
        },
        {
          icon: Layers,
          title: 'Framework flexibility',
          text: 'Supports modern enterprise Java and cloud-native foundations, with a Quarkus-first direction for new Java cloud-native projects.',
        },
      ],
    },
    {
      type: 'split',
      title: 'Cloud-native heritage, modern technology direction',
      body: [
        'Kumuluz has a long-standing history in cloud-native Java innovation and enterprise platform engineering. Earlier Kumuluz technologies, including KumuluzEE, remain part of the historical Kumuluz story and are maintained where needed for existing environments.',
        'Today, new Kumuluz platform development focuses on current cloud-native foundations, AgenticAI architectures, API ecosystems, workflow orchestration, AI-ready services and modern enterprise deployment patterns. For new Java cloud-native projects, the preferred foundation is typically Quarkus, while maintaining architectural alignment with modern MicroProfile and Jakarta EE compatible principles.',
      ],
      quote:
        'Kumuluz combines cloud-native heritage with a modern direction focused on AgenticAI, APIs, workflows and enterprise digital platforms.',
    },
    {
      type: 'cards',
      eyebrow: 'Business value',
      title: 'Business value of the Kumuluz approach',
      body: [
        'Kumuluz is designed to help organizations build faster, reduce duplication and create platforms that can evolve over time.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Faster time to value',
          text: 'Start with focused use cases and reuse platform foundations as solutions grow.',
        },
        {
          title: 'Lower duplication',
          text: 'Avoid rebuilding the same integrations, APIs, tools, workflows and business capabilities across projects.',
        },
        {
          title: 'Better governance',
          text: 'Apply consistent security, access control, lifecycle management, auditability and observability.',
        },
        {
          title: 'More reusable architecture',
          text: 'Create services, APIs, Business APIs, tools, knowledge sources and data services that multiple initiatives can use.',
        },
        {
          title: 'Safer AI adoption',
          text: 'Introduce AI agents with governed access to knowledge, tools, APIs, workflows and systems.',
        },
        {
          title: 'Long-term maintainability',
          text: 'Build modular, cloud-native and API-first architectures that can evolve with business needs.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Adoption paths',
      title: 'Start focused. Scale into a platform.',
      body: [
        'Kumuluz does not require organizations to start with everything at once. Most organizations begin with a focused need and grow into a broader platform foundation over time.',
      ],
      columns: 2,
      variant: 'tag',
      items: [
        {
          title: 'Start with an AI assistant',
          text: 'Begin with a customer or employee AI assistant, then expand into knowledge access, tool use, workflows and AgenticAI.',
          meta: 'KumuluzAI Platform, AI Smart Assistant, AI Knowledge Mentor',
        },
        {
          title: 'Start with API management',
          text: 'Create API visibility, developer onboarding and governance, then expand into partner ecosystems and AI-agent-ready API exposure.',
          meta: 'Kumuluz API, Kumuluz Business APIs, Kumuluz Digital Platform',
        },
        {
          title: 'Start with modernization',
          text: 'Build cloud-native services, APIs and connectors around existing systems, then prepare them for workflows and AI agents.',
          meta: 'Kumuluz Digital Platform, Kumuluz API, Kumuluz Business APIs',
        },
        {
          title: 'Start with reusable Business APIs',
          text: 'Identify repeated business capabilities and turn them into APIs for applications, workflows and AI agents.',
          meta: 'Kumuluz Business APIs, Kumuluz API, Kumuluz Digital Platform, KumuluzAI Platform',
        },
        {
          title: 'Start with data-driven smart services',
          text: 'Collect distributed data, apply AI-enhanced analytics and expose insights to dashboards, APIs, workflows or agents.',
          meta: 'Kumuluz Crowdsensing, Kumuluz API, KumuluzAI Platform, Kumuluz Digital Platform',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Where it fits',
      title: 'Where Kumuluz fits best',
      body: [
        'Kumuluz is especially relevant for organizations that need to combine digital platforms, APIs, AI, workflows, data and enterprise integration.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Organizations adopting AgenticAI',
          text: 'Enterprises that want AI agents connected to knowledge, APIs, tools, workflows and systems under governance.',
        },
        {
          title: 'Organizations with many APIs',
          text: 'Companies that need API visibility, access control, developer portals, API economy and partner ecosystems.',
        },
        {
          title: 'Organizations modernizing legacy systems',
          text: 'Teams that need cloud-native services, APIs, connectors and gradual modernization patterns.',
        },
        {
          title: 'Organizations building multiple digital products',
          text: 'Product teams that need reusable backend capabilities and platform services.',
        },
        {
          title: 'Organizations with document-heavy knowledge',
          text: 'Enterprises that want AI-powered access to policies, procedures, manuals and internal expertise.',
        },
        {
          title: 'Organizations creating smart data services',
          text: 'Public-sector, enterprise or community organizations that need distributed data collection and AI-enhanced analytics.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Why not just build everything custom?',
      intro:
        'Custom development is sometimes necessary. But rebuilding platform foundations for every project creates cost and complexity. Kumuluz does not replace all custom development — it provides reusable foundations so custom business solutions are built faster and more consistently.',
      items: [
        {
          title: 'Custom-only approach',
          text: 'Every initiative starts from zero and drifts apart over time.',
          bulletsTitle: 'What tends to happen',
          bullets: [
            'Every project defines its own architecture',
            'Integrations are duplicated',
            'API governance is inconsistent',
            'AI pilots become isolated',
            'Workflow automation is disconnected',
            'Maintenance cost grows over time',
          ],
        },
        {
          title: 'Kumuluz platform approach',
          text: 'Shared foundations let custom work build on top instead of starting over.',
          bulletsTitle: 'What you get instead',
          bullets: [
            'Shared platform foundations',
            'Reusable APIs and Business APIs',
            'Governed AI agents and tools',
            'API management and lifecycle control',
            'Workflow-ready process execution',
            'More consistent operations and evolution',
          ],
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Delivered by Sunesis',
      body: [
        'Kumuluz is developed and delivered by Sunesis, a software engineering and technology company specializing in enterprise AgenticAI, digital platforms, API ecosystems, cloud-native architectures, integrations, workflow automation, data platforms and DevOps.',
        'Sunesis helps organizations adopt Kumuluz in real enterprise environments — from strategy and architecture to implementation, integration, deployment, governance and long-term evolution.',
      ],
      items: [
        {
          label: 'Architecture',
          title: 'Enterprise architecture',
          text: 'Design target architectures for AI, APIs, services, workflows, integrations and data platforms.',
        },
        {
          label: 'Delivery',
          title: 'Implementation and integration',
          text: 'Build and integrate Kumuluz products with existing systems, platforms, identity providers and data sources.',
        },
        {
          label: 'Operations',
          title: 'Cloud-native and DevOps',
          text: 'Support Kubernetes, OpenShift, CI/CD, observability, automation and operational readiness.',
        },
        {
          label: 'AgenticAI',
          title: 'AgenticAI delivery',
          text: 'Design and implement AI agents, assistants, RAG, tool access, workflows, governance and auditability.',
        },
        {
          label: 'APIs & workflows',
          title: 'API and workflow expertise',
          text: 'Implement API ecosystems, Business APIs, Temporal/Camunda workflows and deterministic process automation.',
        },
        {
          label: 'Evolution',
          title: 'Long-term evolution',
          text: 'Help organizations start focused and scale toward broader platform adoption.',
        },
      ],
      cta: 'Talk to Sunesis',
      ctaHref: '#contact',
    },
    {
      type: 'prose',
      title: 'Why organizations choose Kumuluz',
      body: [
        'To move from isolated digital projects to reusable platform foundations. To build governed AgenticAI platforms instead of disconnected AI pilots. To expose and manage APIs for teams, partners and AI agents.',
        'To turn repeated business functionality into reusable Business APIs. To build cloud-native services, connectors, MCP-enabled tools and deterministic workflows. To collect and use distributed data through AI-enhanced crowdsensing. To modernize gradually while keeping existing systems under control.',
      ],
      quote:
        'Kumuluz helps organizations move from isolated AI, API and digital projects to reusable enterprise platform foundations for agents, services, workflows, data and smart automation.',
    },
    {
      type: 'finalCta',
      title: 'Ready to build on a stronger platform foundation?',
      body: [
        'Kumuluz helps organizations build secure, governed and reusable platform foundations for AgenticAI, APIs, cloud-native digital services, Business APIs, workflows and AI-enhanced data services.',
        'Start with one use case and evolve toward a connected enterprise platform architecture.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore solutions',
    },
  ],
}

const sl: AboutPageContent = {
  seo: {
    title:
      'Zakaj Kumuluz | Enterprise platforme za AgenticAI, API-je in digitalne storitve',
    description:
      'Spoznajte, zakaj organizacije izberejo Kumuluz za vodene AgenticAI platforme, API ekosisteme, cloud-native digitalne platforme, ponovno uporabne Business API-je in AI-podprte podatkovne storitve.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Prednosti',
    title:
      'Povezana družina platform za poslovni AI, API-je in digitalne storitve',
    body: [
      'Kumuluz organizacijam pomaga preiti od izoliranih digitalnih pobud k ponovno uporabnim temeljem platforme za AgenticAI, API-je, cloud-native storitve, poslovne zmožnosti, workflowe in AI-podprte podatkovne storitve.',
      'Namesto gradnje vsakega asistenta, API-ja, integracije ali workflowa od začetka Kumuluz ponuja povezano družino produktov, ki timom pomaga graditi hitreje, bolje integrirati in delovati z več poslovnega nadzora.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite produkte',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'split',
      title: 'Od posameznih projektov k ponovno uporabnim temeljem platforme',
      body: [
        'Mnoge organizacije pristopajo k digitalni preobrazbi prek posameznih projektov. En tim zgradi AI asistenta. Drug ustvari API portal. Tretji posodobi aplikacijo. Naslednji avtomatizira workflow. Spet drug začne pobudo za podatkovno vodene pametne storitve.',
        'Vsak projekt morda prinese vrednost, a sčasoma to ustvari razdrobljenost: podvojene integracije, neusklajene API-je, ločene AI sklade, neupravljane vire znanja, izolirane workflowe in naraščajoče stroške vzdrževanja.',
        'Kumuluz je grajen okoli platformnega pristopa. Organizacijam pomaga ustvariti ponovno uporabne temelje, ki podpirajo več produktov, timov, oddelkov in kanalov — pri tem pa ohranja varnost, upravljanje, integracijo in delovanje pod nadzorom.',
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Prednost platforme',
      title: 'Kaj spremeni platformni pristop',
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Zmanjšajte digitalno razdrobljenost',
          text: 'Izognite se nepovezanim AI, API, workflow, integracijskim in aplikacijskim skladom.',
        },
        {
          title: 'Ponovno uporabite zmožnosti platforme',
          text: 'Ponovno uporabite agente, API-je, storitve, poslovne zmožnosti, workflowe, konektorje, orodja in podatkovne storitve med pobudami.',
        },
        {
          title: 'Gradite hitreje z več nadzora',
          text: 'Pospešite dostavo brez izgube arhitekturne discipline, varnosti ali dolgoročne vzdržljivosti.',
        },
        {
          title: 'Pripravite se na poslovni AgenticAI',
          text: 'Naredite znanje, API-je, storitve, orodja, workflowe in podatke dostopne AI agentom prek vodenih meja platforme.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Zakaj zdaj',
      title: 'Zakaj je Kumuluz pomemben zdaj',
      body: [
        'Poslovna tehnologija vstopa v novo fazo. Organizacije ne gradijo več le portalov, mobilnih aplikacij in API-jev. Uvajajo tudi AI asistente, AI agente, avtomatizacijo workflowov, API ekosisteme, ponovno uporabne poslovne zmožnosti in podatkovno vodene pametne storitve.',
        'To ustvarja nov arhitekturni izziv: kako povezati AI, API-je, storitve, workflowe, poslovne sisteme in podatke, ne da bi ustvarili novo generacijo silosov.',
        'Kumuluz ta izziv naslavlja z združevanjem AgenticAI, upravljanja API-jev, Business API-jev, cloud-native razvoja digitalne platforme in AI-podprtih podatkovnih storitev v eno koherentno družino platform.',
      ],
    },
    {
      type: 'cards',
      title: 'Premiki, ki oblikujejo poslovno arhitekturo',
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'AI agenti potrebujejo poslovne temelje',
          text: 'AI agenti potrebujejo voden dostop do znanja, API-jev, orodij, workflowov in poslovnih sistemov.',
        },
        {
          title: 'API-ji postajajo orodja agentov',
          text: 'API-jev ne uporabljajo več le aplikacije in partnerji. Postajajo tudi nadzorovane zmožnosti za AI agente.',
        },
        {
          title: 'Poslovne zmožnosti morajo biti ponovno uporabne',
          text: 'Podatki o strankah, plačila, vpis, KYC, naročila, primeri in obvestila morajo biti ponovno uporabni med produkti, workflowi in agenti.',
        },
        {
          title: 'Workflowi še vedno potrebujejo deterministični nadzor',
          text: 'AI lahko pomaga in sklepa, a kritični procesi potrebujejo določene korake, odobritve, ponovne poskuse in revizijske sledi.',
        },
        {
          title: 'Digitalne platforme morajo postati pripravljene na AI agente',
          text: 'Sodobne platforme potrebujejo storitve, API-je, konektorje, MCP-omogočena orodja in orkestracijo workflowov.',
        },
        {
          title: 'Podatki morajo postati pripravljeni na AI',
          text: 'Porazdeljeni podatki ljudi, naprav in okolij potrebujejo validacijo, upravljanje, zasebnosti zavedajočo obdelavo in AI-podprto analitiko.',
        },
      ],
    },
    {
      type: 'cards',
      id: 'platform-family',
      eyebrow: 'Ena družina platform',
      title: 'Ena družina platform, jasne vloge produktov',
      body: [
        'Kumuluz je povezana družina produktov. Vsak produkt ima svojo vlogo, a največja vrednost nastane, ko produkti delujejo skupaj.',
      ],
      variant: 'icon-dark',
      items: [
        {
          icon: Bot,
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'Poganja in vodi AI agente, asistente, dostop do poslovnega znanja, uporabo orodij, usmerjanje modelov, človeške odobritve, politike, revizijo in vidnost stroškov.',
        },
        {
          icon: Network,
          label: 'Upravljanje API-jev',
          title: 'Kumuluz API',
          text: 'Upravlja, izpostavlja, varuje in spremlja API-je za aplikacije, partnerje in AI agente, vključno z API prehodom, MCP, kontekstnim usmerjanjem, LLM usmerjanjem in beleženjem porabe žetonov.',
        },
        {
          icon: Boxes,
          label: 'Poslovne zmožnosti',
          title: 'Kumuluz Business APIs',
          text: 'Ponuja ponovno uporabne, AgenticAI in workflowom pripravljene poslovne zmožnosti, kot so podatki o strankah, katalogi izdelkov, plačila, vpis, KYC, naročila, primeri, naloge in obvestila.',
        },
        {
          icon: Cloud,
          label: 'Cloud-native',
          title: 'Kumuluz Digital Platform',
          text: 'Ponuja cloud-native razvojni temelj za gradnjo storitev, API-jev, konektorjev, MCP-omogočenih orodij in determinističnih workflowov, ki jih uporabljajo aplikacije in AI agenti.',
        },
        {
          icon: Activity,
          label: 'Pametni podatki',
          title: 'Kumuluz Crowdsensing',
          text: 'Zbira in obdeluje porazdeljene podatke iz resničnega sveta od ljudi, naprav, senzorjev in okolij z zasebnosti zavedajočo obdelavo, analitiko in AI-podprtim ustvarjanjem vpogledov.',
        },
      ],
    },
    {
      type: 'split',
      title: 'Zasnovano za AgenticAI pripravljeno poslovno arhitekturo',
      body: [
        'AgenticAI lahko ustvari veliko vrednost, a le ko AI agenti lahko varno sodelujejo s poslovnim znanjem, API-ji, orodji, workflowi in podatki. Kumuluz organizacijam pomaga določiti jasne meje med AI sklepanjem in poslovnim izvajanjem.',
        'AI agenti lahko pridobivajo znanje, razumejo namen in predlagajo dejanja. API-ji in orodja izpostavijo odobrene zmožnosti. Mehanizmi workflowov izvajajo deterministične korake. Business API-ji enkapsulirajo ponovno uporabne poslovne operacije. API prehodi zagotavljajo usmerjanje, validacijo in spremljanje. Podatkovne storitve zagotavljajo kontekst iz resničnega sveta.',
      ],
      quote:
        'To je varnejše in lažje vzdržljivo kot dajanje AI agentom neposrednega dostopa do zalednih sistemov.',
    },
    {
      type: 'capabilities',
      id: 'agentic-architecture',
      title: 'Načela AgenticAI arhitekture',
      intro:
        'Jasne meje med tem, o čemer AI sklepa, in tem, kar izvaja organizacija — da agenti ostanejo uporabni in vodeni.',
      items: [
        {
          icon: ShieldCheck,
          title: 'Vodeno znanje',
          text: 'AI agenti uporabljajo odobrene vire znanja s sledljivostjo virov in pridobivanjem, ki se zaveda dovoljenj.',
        },
        {
          icon: Wrench,
          title: 'Za orodja varni API-ji',
          text: 'Agenti kličejo API-je z jasnimi vhodi, izhodi, validacijo, dovoljenji in revizijo.',
        },
        {
          icon: Boxes,
          title: 'MCP-omogočena integracija',
          text: 'Odobrene zmožnosti je mogoče izpostaviti prek MCP-usmerjenih vzorcev, kjer je primerno.',
        },
        {
          icon: Network,
          title: 'Nadzor prehoda',
          text: 'Zahteve agentov je mogoče usmerjati, preverjati, spremljati in voditi prek sloja API prehoda.',
        },
        {
          icon: Workflow,
          title: 'Deterministični workflowi',
          text: 'Poslovno kritični koraki lahko tečejo prek mehanizmov, kot sta Temporal ali Camunda.',
        },
        {
          icon: UserCheck,
          title: 'Človeški nadzor',
          text: 'Občutljiva dejanja lahko zahtevajo pregled, odobritev ali eskalacijo pred izvedbo.',
        },
        {
          icon: Activity,
          title: 'Operativna vidnost',
          text: 'Organizacije lahko spremljajo agente, klice API-jev, porabo žetonov, workflowe, storitve in uporabo podatkov.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Upravljanje',
      title: 'Grajeno za poslovno upravljanje in nadzor',
      body: [
        'Poslovne platforme morajo biti od začetka varne, opazljive in obvladljive. Kumuluz je zasnovan za okolja, kjer so pomembni identiteta, dovoljenja, revizija, nadzor uvajanja, operativna vidnost in integracija z obstoječimi sistemi.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Varnost in integracija identitete',
          text: 'Integrirajte se s poslovnimi ponudniki identitet in uveljavite nadzor dostopa nad uporabniki, agenti, API-ji, orodji, storitvami in workflowi.',
        },
        {
          title: 'Revizija',
          text: 'Sledite AI interakcijam, pridobivanju znanja, klicem API-jev, uporabi orodij, korakom workflowov, odobritvam in dostopu do podatkov, kjer je potrebno.',
        },
        {
          title: 'Upravljanje API-jev in orodij',
          text: 'Določite, katere aplikacije, partnerji, workflowi ali AI agenti lahko uporabljajo katere API-je in orodja.',
        },
        {
          title: 'Nadzor s human-in-the-loop',
          text: 'Uporabite odobritve in eskalacijske poti za občutljiva dejanja.',
        },
        {
          title: 'Upravljanje življenjskega cikla',
          text: 'Upravljajte API-je, agente, orodja, vire znanja, Business API-je, workflowe in komponente platforme skozi čas.',
        },
        {
          title: 'Opazljivost',
          text: 'Spremljajte storitve, API-je, workflowe, vedenje agentov, uporabo modelov, porabo žetonov, pretoke podatkov in operativno zdravje.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Sodobno, cloud-native in fleksibilno glede ogrodij',
      intro:
        'Kumuluz sledi sodobnim cloud-native, API-first in integracijam pripravljenim arhitekturnim načelom. Za nove Java cloud-native projekte digitalne platforme se Kumuluz Digital Platform običajno implementira s Quarkusom, ob ohranjanju usklajenosti z MicroProfile in Jakarta EE združljivimi načeli.',
      items: [
        {
          icon: Cloud,
          title: 'Cloud-native arhitektura',
          text: 'Zasnovano za kontejnerje, Kubernetes, OpenShift, avtomatizirano uvajanje, odpornost in opazljivost.',
        },
        {
          icon: Webhook,
          title: 'API-first zasnova',
          text: 'Poslovne in tehnične zmožnosti so izpostavljene prek ponovno uporabnih, vodenih API-jev.',
        },
        {
          icon: GitBranch,
          title: 'Pripravljeno na workflowe',
          text: 'Podpira deterministično izvajanje procesov z mehanizmi, kot so Temporal, Camunda ali podobne platforme.',
        },
        {
          icon: Bot,
          title: 'Pripravljeno na AgenticAI',
          text: 'Podpira storitve, API-je, orodja, konektorje, MCP-usmerjene integracije in voden dostop agentov.',
        },
        {
          icon: Server,
          title: 'Hibridna poslovna integracija',
          text: 'Deluje s cloud, on-premise, podedovanimi sistemi, poslovnimi platformami in obstoječimi operativnimi okolji.',
        },
        {
          icon: Layers,
          title: 'Fleksibilnost ogrodij',
          text: 'Podpira sodobne poslovne Java in cloud-native temelje, z Quarkus-first usmeritvijo za nove Java cloud-native projekte.',
        },
      ],
    },
    {
      type: 'split',
      title: 'Cloud-native dediščina, sodobna tehnološka usmeritev',
      body: [
        'Kumuluz ima dolgoletno zgodovino v cloud-native Java inovacijah in razvoju poslovnih platform. Starejše Kumuluz tehnologije, vključno s KumuluzEE, ostajajo del zgodovinske zgodbe Kumuluz in se vzdržujejo, kjer je potrebno, za obstoječa okolja.',
        'Danes se nov razvoj platforme Kumuluz osredotoča na sodobne cloud-native temelje, AgenticAI arhitekture, API ekosisteme, orkestracijo workflowov, na AI pripravljene storitve in sodobne poslovne vzorce uvajanja. Za nove Java cloud-native projekte je prednostni temelj običajno Quarkus, ob ohranjanju arhitekturne usklajenosti s sodobnimi MicroProfile in Jakarta EE združljivimi načeli.',
      ],
      quote:
        'Kumuluz združuje cloud-native dediščino s sodobno usmeritvijo, osredotočeno na AgenticAI, API-je, workflowe in poslovne digitalne platforme.',
    },
    {
      type: 'cards',
      eyebrow: 'Poslovna vrednost',
      title: 'Poslovna vrednost pristopa Kumuluz',
      body: [
        'Kumuluz je zasnovan tako, da organizacijam pomaga graditi hitreje, zmanjšati podvajanje in ustvariti platforme, ki se lahko razvijajo skozi čas.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Hitrejši čas do vrednosti',
          text: 'Začnite z osredotočenimi primeri uporabe in ponovno uporabite temelje platforme, ko rešitve rastejo.',
        },
        {
          title: 'Manj podvajanja',
          text: 'Izognite se ponovni gradnji istih integracij, API-jev, orodij, workflowov in poslovnih zmožnosti med projekti.',
        },
        {
          title: 'Boljše upravljanje',
          text: 'Uveljavite dosledno varnost, nadzor dostopa, upravljanje življenjskega cikla, revizijo in opazljivost.',
        },
        {
          title: 'Bolj ponovno uporabna arhitektura',
          text: 'Ustvarite storitve, API-je, Business API-je, orodja, vire znanja in podatkovne storitve, ki jih lahko uporablja več pobud.',
        },
        {
          title: 'Varnejša uvedba AI',
          text: 'Uvedite AI agente z vodenim dostopom do znanja, orodij, API-jev, workflowov in sistemov.',
        },
        {
          title: 'Dolgoročna vzdržljivost',
          text: 'Gradite modularne, cloud-native in API-first arhitekture, ki se lahko razvijajo s poslovnimi potrebami.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Poti uvedbe',
      title: 'Začnite osredotočeno. Razširite v platformo.',
      body: [
        'Kumuluz ne zahteva, da organizacije začnejo z vsem naenkrat. Večina organizacij začne z osredotočeno potrebo in sčasoma zraste v širši temelj platforme.',
      ],
      columns: 2,
      variant: 'tag',
      items: [
        {
          title: 'Začnite z AI asistentom',
          text: 'Začnite z AI asistentom za stranke ali zaposlene, nato razširite na dostop do znanja, uporabo orodij, workflowe in AgenticAI.',
          meta: 'KumuluzAI Platform, AI Smart Assistant, AI Knowledge Mentor',
        },
        {
          title: 'Začnite z upravljanjem API-jev',
          text: 'Ustvarite vidnost API-jev, vpis razvijalcev in upravljanje, nato razširite na partnerske ekosisteme in na AI agente pripravljeno izpostavljanje API-jev.',
          meta: 'Kumuluz API, Kumuluz Business APIs, Kumuluz Digital Platform',
        },
        {
          title: 'Začnite s posodobitvijo',
          text: 'Zgradite cloud-native storitve, API-je in konektorje okoli obstoječih sistemov, nato jih pripravite za workflowe in AI agente.',
          meta: 'Kumuluz Digital Platform, Kumuluz API, Kumuluz Business APIs',
        },
        {
          title: 'Začnite s ponovno uporabnimi Business API-ji',
          text: 'Prepoznajte ponavljajoče se poslovne zmožnosti in jih spremenite v API-je za aplikacije, workflowe in AI agente.',
          meta: 'Kumuluz Business APIs, Kumuluz API, Kumuluz Digital Platform, KumuluzAI Platform',
        },
        {
          title: 'Začnite s podatkovno vodenimi pametnimi storitvami',
          text: 'Zbirajte porazdeljene podatke, uporabite AI-podprto analitiko in izpostavite vpoglede nadzornim ploščam, API-jem, workflowom ali agentom.',
          meta: 'Kumuluz Crowdsensing, Kumuluz API, KumuluzAI Platform, Kumuluz Digital Platform',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Kje se ujema',
      title: 'Kje se Kumuluz najbolje ujema',
      body: [
        'Kumuluz je še posebej relevanten za organizacije, ki morajo združiti digitalne platforme, API-je, AI, workflowe, podatke in poslovno integracijo.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Organizacije, ki uvajajo AgenticAI',
          text: 'Podjetja, ki želijo AI agente, povezane z znanjem, API-ji, orodji, workflowi in sistemi pod upravljanjem.',
        },
        {
          title: 'Organizacije z veliko API-ji',
          text: 'Podjetja, ki potrebujejo vidnost API-jev, nadzor dostopa, razvijalske portale, API ekonomijo in partnerske ekosisteme.',
        },
        {
          title: 'Organizacije, ki posodabljajo podedovane sisteme',
          text: 'Timi, ki potrebujejo cloud-native storitve, API-je, konektorje in postopne vzorce posodabljanja.',
        },
        {
          title: 'Organizacije, ki gradijo več digitalnih produktov',
          text: 'Produktni timi, ki potrebujejo ponovno uporabne zaledne zmožnosti in storitve platforme.',
        },
        {
          title: 'Organizacije z dokumentno bogatim znanjem',
          text: 'Podjetja, ki želijo AI-podprt dostop do politik, postopkov, priročnikov in notranjega znanja.',
        },
        {
          title: 'Organizacije, ki ustvarjajo pametne podatkovne storitve',
          text: 'Javni sektor, podjetja ali skupnostne organizacije, ki potrebujejo porazdeljeno zbiranje podatkov in AI-podprto analitiko.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Zakaj ne bi vsega zgradili po meri?',
      intro:
        'Razvoj po meri je včasih nujen. A ponovna gradnja temeljev platforme za vsak projekt ustvarja stroške in kompleksnost. Kumuluz ne nadomešča vsega razvoja po meri — ponuja ponovno uporabne temelje, da se poslovne rešitve po meri gradijo hitreje in bolj dosledno.',
      items: [
        {
          title: 'Pristop samo po meri',
          text: 'Vsaka pobuda začne pri nič in se sčasoma razhaja.',
          bulletsTitle: 'Kar se običajno zgodi',
          bullets: [
            'Vsak projekt določi svojo arhitekturo',
            'Integracije so podvojene',
            'Upravljanje API-jev je nedosledno',
            'AI piloti postanejo izolirani',
            'Avtomatizacija workflowov je nepovezana',
            'Stroški vzdrževanja sčasoma rastejo',
          ],
        },
        {
          title: 'Platformni pristop Kumuluz',
          text: 'Skupni temelji omogočajo, da delo po meri gradi naprej, namesto da začenja znova.',
          bulletsTitle: 'Kar dobite namesto tega',
          bullets: [
            'Skupni temelji platforme',
            'Ponovno uporabni API-ji in Business API-ji',
            'Vodeni AI agenti in orodja',
            'Upravljanje API-jev in nadzor življenjskega cikla',
            'Na workflowe pripravljeno izvajanje procesov',
            'Bolj dosledno delovanje in razvoj',
          ],
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Dostavlja Sunesis',
      body: [
        'Kumuluz razvija in dostavlja Sunesis, programsko inženirsko in tehnološko podjetje, specializirano za poslovni AgenticAI, digitalne platforme, API ekosisteme, cloud-native arhitekture, integracije, avtomatizacijo workflowov, podatkovne platforme in DevOps.',
        'Sunesis organizacijam pomaga uvesti Kumuluz v resničnih poslovnih okoljih — od strategije in arhitekture do implementacije, integracije, uvajanja, upravljanja in dolgoročnega razvoja.',
      ],
      items: [
        {
          label: 'Arhitektura',
          title: 'Poslovna arhitektura',
          text: 'Zasnova ciljnih arhitektur za AI, API-je, storitve, workflowe, integracije in podatkovne platforme.',
        },
        {
          label: 'Dostava',
          title: 'Implementacija in integracija',
          text: 'Gradnja in integracija produktov Kumuluz z obstoječimi sistemi, platformami, ponudniki identitet in viri podatkov.',
        },
        {
          label: 'Delovanje',
          title: 'Cloud-native in DevOps',
          text: 'Podpora za Kubernetes, OpenShift, CI/CD, opazljivost, avtomatizacijo in operativno pripravljenost.',
        },
        {
          label: 'AgenticAI',
          title: 'AgenticAI dostava',
          text: 'Zasnova in implementacija AI agentov, asistentov, RAG, dostopa do orodij, workflowov, upravljanja in revizije.',
        },
        {
          label: 'API-ji in workflowi',
          title: 'Strokovnost za API-je in workflowe',
          text: 'Implementacija API ekosistemov, Business API-jev, Temporal/Camunda workflowov in determinističnega procesnega avtomatiziranja.',
        },
        {
          label: 'Razvoj',
          title: 'Dolgoročni razvoj',
          text: 'Pomoč organizacijam, da začnejo osredotočeno in se razširijo k širši uvedbi platforme.',
        },
      ],
      cta: 'Pogovorite se s Sunesisom',
      ctaHref: '#contact',
    },
    {
      type: 'prose',
      title: 'Zakaj organizacije izberejo Kumuluz',
      body: [
        'Da preidejo od izoliranih digitalnih projektov k ponovno uporabnim temeljem platforme. Da gradijo vodene AgenticAI platforme namesto nepovezanih AI pilotov. Da izpostavijo in upravljajo API-je za time, partnerje in AI agente.',
        'Da ponavljajočo se poslovno funkcionalnost spremenijo v ponovno uporabne Business API-je. Da gradijo cloud-native storitve, konektorje, MCP-omogočena orodja in deterministične workflowe. Da zbirajo in uporabljajo porazdeljene podatke prek AI-podprtega crowdsensinga. Da postopno posodabljajo, hkrati pa obstoječe sisteme ohranjajo pod nadzorom.',
      ],
      quote:
        'Kumuluz organizacijam pomaga preiti od izoliranih AI, API in digitalnih projektov k ponovno uporabnim poslovnim temeljem platforme za agente, storitve, workflowe, podatke in pametno avtomatizacijo.',
    },
    {
      type: 'finalCta',
      title: 'Pripravljeni graditi na trdnejšem temelju platforme?',
      body: [
        'Kumuluz organizacijam pomaga graditi varne, vodene in ponovno uporabne temelje platforme za AgenticAI, API-je, cloud-native digitalne storitve, Business API-je, workflowe in AI-podprte podatkovne storitve.',
        'Začnite z enim primerom uporabe in se razvijajte k povezani arhitekturi poslovne platforme.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite rešitve',
    },
  ],
}

export const whyKumuluzPage: Record<LanguageCode, AboutPageContent> = {
  en,
  sl,
}
