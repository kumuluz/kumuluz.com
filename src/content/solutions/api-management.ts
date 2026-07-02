import {
  Activity,
  AppWindow,
  Bot,
  BookMarked,
  Boxes,
  Coins,
  Cpu,
  FlaskConical,
  GitBranch,
  GitCompare,
  Handshake,
  LibraryBig,
  Route,
  ShieldCheck,
  Store,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { SolutionPageContent } from '../../views/solutions/types'

const en: SolutionPageContent = {
  seo: {
    title:
      'API Management & API Economy | Governed APIs for Teams, Partners and AI Agents',
    description:
      'Build governed API ecosystems with Kumuluz API for internal teams, partners, API economy initiatives and AI-agent-ready API exposure with MCP and gateway control.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'API Management & API Economy',
    title:
      'Turn APIs into governed digital assets for teams, partners and AI agents',
    body: [
      'APIs are the foundation of digital platforms, partner ecosystems, business integrations and AI-enabled automation.',
      'Kumuluz helps organizations expose, manage, secure and monitor APIs across teams, partners, digital channels and AgenticAI environments.',
      'With Kumuluz API, you can build API catalogs, developer portals, gateway policies, access plans, sandboxes, API lifecycle processes and API economy foundations — while preparing APIs for AI agents, MCP-enabled integrations, contextual routing and AI usage visibility.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Kumuluz API',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title:
        'APIs create value only when they are visible, secure and reusable',
      body: [
        'Most organizations already have many APIs. Some support internal applications. Some connect partners. Some power mobile apps, portals or integration layers. Others expose business capabilities hidden in legacy systems.',
        'But without a central API management approach, APIs become difficult to discover, secure, reuse and evolve.',
        'Teams may duplicate functionality. Partners may require manual onboarding. API changes may break applications. Access policies may be inconsistent. API usage may not be visible.',
        'With AI agents, the challenge becomes even more important. Agents need APIs as tools, but giving agents uncontrolled access to backend systems increases security, reliability and compliance risk.',
        'API management is now not only about developers and partners — it is also about preparing APIs for safe use by AI agents.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Lack of API visibility',
          text: 'Teams do not know which APIs already exist, who owns them or who is using them.',
        },
        {
          title: 'Duplicated integrations',
          text: 'The same business capabilities are repeatedly rebuilt or exposed through inconsistent endpoints.',
        },
        {
          title: 'Manual partner onboarding',
          text: 'External developers and partners need documentation, access, sandbox environments and support.',
        },
        {
          title: 'Risky API changes',
          text: 'API changes can break applications, integrations, partner systems or agent workflows.',
        },
        {
          title: 'Uncontrolled agent access',
          text: 'AI agents need APIs, but direct backend access can bypass policies, validation and monitoring.',
        },
        {
          title: 'Limited API business value',
          text: 'APIs cannot become digital products unless they are discoverable, documented, secure and measurable.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'A governed API ecosystem for digital and AgenticAI platforms',
      body: [
        'Kumuluz provides an API management and API economy solution that helps organizations manage APIs as reusable, governed and business-ready digital assets.',
        'At the core is Kumuluz API, which provides API cataloging, documentation, developer onboarding, gateway management, access control, monitoring, change management, sandbox support and API economy capabilities.',
        'The solution also supports modern AgenticAI scenarios. APIs can be prepared for AI-agent use, exposed through MCP-oriented patterns, routed through gateway policies and monitored for agent-driven usage, including LLM routing and token logging where needed.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Create API visibility',
          text: 'Build a central view of APIs, ownership, documentation, consumers, usage and dependencies.',
        },
        {
          title: 'Secure and govern access',
          text: 'Control who can use which APIs, under which plans, keys, policies and service-level conditions.',
        },
        {
          title: 'Enable partner ecosystems',
          text: 'Provide documentation, subscriptions, sandbox access and onboarding workflows for partners and developers.',
        },
        {
          title: 'Prepare APIs for AI agents',
          text: 'Expose APIs as governed tools for AI agents through MCP-oriented patterns, contextual routing and gateway-level checks.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'What API Management & API Economy includes',
      intro:
        'A complete API management solution combines governance, developer experience, security, lifecycle management, analytics and business enablement.',
      items: [
        {
          icon: BookMarked,
          title: 'API catalog and discovery',
          text: 'A central API catalog makes APIs visible, searchable and reusable across the organization.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API'],
        },
        {
          icon: AppWindow,
          title: 'Developer portal',
          text: 'A developer portal enables internal developers, partners and external consumers to discover APIs, read documentation and request access.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API'],
        },
        {
          icon: ShieldCheck,
          title: 'API gateway and access control',
          text: 'A gateway layer controls API exposure, routing, authentication, policies, rate limits, quotas and traffic monitoring.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API'],
        },
        {
          icon: FlaskConical,
          title: 'Sandbox and onboarding',
          text: 'Sandbox environments allow developers and partners to test APIs before production integration.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API'],
        },
        {
          icon: GitBranch,
          title: 'API lifecycle and change management',
          text: 'API versions, dependencies, consumers and changes can be managed to reduce integration risk.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API'],
        },
        {
          icon: Store,
          title: 'API economy enablement',
          text: 'APIs can be packaged, offered and monitored as digital products for partners, ecosystems and business channels.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API', 'Kumuluz Business APIs'],
        },
        {
          icon: Bot,
          title: 'AI-agent-ready API exposure',
          text: 'Selected APIs can be prepared as governed tools that AI agents can call safely.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz API',
            'Kumuluz Business APIs',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Boxes,
          title: 'MCP and agent integration',
          text: 'APIs and platform capabilities can be exposed through MCP server patterns for AgenticAI integration.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz API',
            'Kumuluz Digital Platform',
            'KumuluzAI Platform',
          ],
        },
        {
          icon: Activity,
          title: 'AI usage visibility',
          text: 'Agent requests, LLM routing and token usage can be logged and monitored where relevant.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API', 'KumuluzAI Platform'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'From technical endpoints to API products',
      body: [
        'APIs create business value when they are treated as reusable digital assets.',
        'An API economy approach helps organizations expose selected business capabilities to partners, internal teams, external developers and digital ecosystems in a structured way.',
        'Kumuluz API supports this by providing cataloging, documentation, access plans, subscriptions, sandbox environments, monitoring and lifecycle control.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Productize APIs',
          text: 'Package APIs as reusable capabilities with documentation, ownership, access plans and lifecycle status.',
        },
        {
          title: 'Enable partner access',
          text: 'Give partners a controlled way to discover, test and consume APIs.',
        },
        {
          title: 'Create new channels',
          text: 'Use APIs to support digital partnerships, portals, mobile apps, platforms and B2B ecosystems.',
        },
        {
          title: 'Measure adoption',
          text: 'Track API usage, consumers, traffic and integration trends.',
        },
        {
          title: 'Manage change',
          text: 'Communicate updates, version changes and deprecations to API consumers.',
        },
        {
          title: 'Support business models',
          text: 'Use access plans, usage visibility and partner tiers as a foundation for API-based business models.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Prepare APIs for AI agents and AgenticAI platforms',
      body: [
        'AI agents need APIs to retrieve data, trigger actions, start workflows and interact with business systems.',
        'But APIs designed only for traditional applications are not always safe or suitable for agentic use. Agents need controlled tool interfaces, clear schemas, permissions, validation, monitoring and execution boundaries.',
        'Kumuluz helps organizations prepare APIs for AI-agent use. Kumuluz API can expose selected APIs through MCP-oriented patterns, route agent requests through gateway policies, perform basic checks, monitor usage and support LLM routing and token logging where needed. This enables APIs to become governed tools in an AgenticAI architecture.',
      ],
      columns: 4,
      variant: 'tag',
      items: [
        {
          title: 'Agent-callable APIs',
          text: 'Expose selected APIs as tools that AI agents can use under defined policies.',
          meta: 'Agents, Policies',
        },
        {
          title: 'MCP server patterns',
          text: 'Use MCP-oriented integration patterns so agents can discover and invoke approved capabilities.',
          meta: 'MCP, Discovery',
        },
        {
          title: 'Kumuluz API MCP server',
          text: 'Kumuluz API can expose its own MCP server so agentic systems can integrate with the API management platform itself.',
          meta: 'MCP, Integration',
        },
        {
          title: 'Contextual routing',
          text: 'Route agent requests based on context, policies, target capability, user role or execution requirements.',
          meta: 'Routing, Context',
        },
        {
          title: 'Basic gateway checks',
          text: 'Validate request structure, access conditions and allowed execution patterns before backend invocation.',
          meta: 'Gateway, Validation',
        },
        {
          title: 'LLM routing',
          text: 'Route selected requests toward LLM services or AI processing layers where needed.',
          meta: 'LLM, Routing',
        },
        {
          title: 'Token usage logging',
          text: 'Record token usage and AI consumption information to support cost visibility and governance.',
          meta: 'Tokens, Governance',
        },
        {
          title: 'Agent dependency tracking',
          text: 'Understand which agents, tools or workflows depend on specific APIs before introducing changes.',
          meta: 'Dependencies, Change',
        },
      ],
    },
    {
      type: 'cards',
      title: 'API management architecture for teams, partners and AI agents',
      body: [
        'A modern API management architecture connects API providers, API consumers, developers, partners, gateways and AI agents through a governed platform foundation.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'API providers',
          text: 'Microservices, backend systems, cloud services, legacy applications, Business APIs and enterprise platforms that expose APIs.',
        },
        {
          title: 'Kumuluz API management layer',
          text: 'API catalog, lifecycle management, documentation, ownership, access plans, subscriptions, developer portal and governance.',
        },
        {
          title: 'API gateway layer',
          text: 'Routing, authentication, policy enforcement, rate limits, quotas, contextual routing, gateway checks and traffic monitoring.',
        },
        {
          title: 'Developer and partner portal',
          text: 'Self-service access for internal teams, external partners, developer ecosystems and API consumers.',
        },
        {
          title: 'MCP and agent integration layer',
          text: 'MCP servers, agent-callable APIs, tool metadata, agent integration patterns and Kumuluz API MCP server exposure.',
        },
        {
          title: 'AI and LLM routing layer',
          text: 'Selected requests can be routed to LLM services or AI processing layers, with usage and token logging.',
        },
        {
          title: 'Consumers',
          text: 'Internal applications, mobile apps, portals, partner systems, external developers, AI agents and workflow platforms.',
        },
        {
          title: 'Analytics and governance',
          text: 'API usage, consumer activity, agent requests, dependency tracking, token usage, change impact and operational reporting.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build',
      intro:
        'Kumuluz supports API management scenarios across internal governance, partner ecosystems, API economy and AI-agent-ready integration.',
      items: [
        {
          icon: LibraryBig,
          title: 'Enterprise API catalog',
          text: 'Create a central view of APIs, owners, documentation, lifecycle status and consumers.',
          bulletsTitle: 'Examples',
          bullets: [
            'Internal API registry',
            'API documentation hub',
            'API dependency overview',
            'Business capability catalog',
            'API ownership model',
            'API reuse program',
          ],
        },
        {
          icon: Handshake,
          title: 'Partner API ecosystem',
          text: 'Expose APIs to partners, suppliers, customers or external developers in a controlled way.',
          bulletsTitle: 'Examples',
          bullets: [
            'Partner API portal',
            'Partner onboarding',
            'API subscriptions',
            'API keys and access plans',
            'Sandbox testing',
            'B2B integrations',
          ],
        },
        {
          icon: Route,
          title: 'API gateway governance',
          text: 'Secure, route and monitor API traffic through a managed gateway layer.',
          bulletsTitle: 'Examples',
          bullets: [
            'API authentication',
            'Authorization policies',
            'Rate limits and quotas',
            'Gateway routing',
            'Traffic monitoring',
            'SLA-oriented access control',
          ],
        },
        {
          icon: Cpu,
          title: 'AI-agent-ready API layer',
          text: 'Prepare APIs so AI agents can use them safely and predictably.',
          bulletsTitle: 'Examples',
          bullets: [
            'Agent-callable APIs',
            'MCP-enabled API exposure',
            'Contextual agent request routing',
            'Tool-safe APIs',
            'Agent dependency tracking',
            'API-based agent workflows',
          ],
        },
        {
          icon: Coins,
          title: 'API economy initiative',
          text: 'Turn APIs into digital products for partner ecosystems and new business models.',
          bulletsTitle: 'Examples',
          bullets: [
            'API productization',
            'Partner tiers',
            'Usage visibility',
            'API packages',
            'Business capability exposure',
            'Ecosystem enablement',
          ],
        },
        {
          icon: GitCompare,
          title: 'API lifecycle and change management',
          text: 'Manage API versions, deprecations, dependencies and migration paths.',
          bulletsTitle: 'Examples',
          bullets: [
            'API versioning',
            'Change impact analysis',
            'Consumer notifications',
            'Deprecation planning',
            'Migration support',
            'Agent tool compatibility checks',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Governance and security across API consumers',
      body: [
        'API governance must cover all types of consumers: internal applications, partners, external developers, workflow engines and AI agents.',
        'Kumuluz API helps organizations define consistent rules for who can access which APIs, how requests are routed, what policies apply and how usage is monitored.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'API ownership',
          text: 'Define who owns, maintains and approves API changes.',
        },
        {
          title: 'Access policies',
          text: 'Control access through plans, subscriptions, API keys, authentication and authorization.',
        },
        {
          title: 'Consumer management',
          text: 'Track applications, partners, developers, systems and agents that use APIs.',
        },
        {
          title: 'Gateway enforcement',
          text: 'Apply routing, rate limits, quotas, policies and request checks at the gateway layer.',
        },
        {
          title: 'Version governance',
          text: 'Manage API versions, compatibility, deprecations and migrations.',
        },
        {
          title: 'Auditability',
          text: 'Track API calls, access events, agent requests, LLM routing and token usage where relevant.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Manage reusable business capabilities and workflows',
      body: [
        'API management becomes more valuable when APIs expose reusable business capabilities, not only technical endpoints.',
        'Kumuluz Business APIs provide reusable business functions such as customer data, product catalogs, orders, payments, subscriptions, invoicing, KYC, onboarding, cases, tasks and notifications.',
        'Kumuluz API can catalog, secure, expose and monitor those APIs for applications, partners, AI agents and workflow engines. In AgenticAI scenarios, Business APIs can become governed tools that agents use, while Temporal, Camunda or similar workflow engines execute process-critical steps deterministically.',
      ],
      columns: 2,
      variant: 'accent',
      items: [
        {
          title: 'Business capability catalog',
          text: 'Expose reusable business APIs as discoverable and governed capabilities.',
        },
        {
          title: 'Workflow-ready APIs',
          text: 'Manage APIs used as activities, service tasks or connectors in workflow engines.',
        },
        {
          title: 'Agent tools',
          text: 'Expose selected business APIs as agent-callable tools with policies and auditability.',
        },
        {
          title: 'Partner access',
          text: 'Allow partners to use selected business capabilities under access plans and policies.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise API environments',
      body: [
        'Kumuluz API can support deployment models where organizations require control over infrastructure, security, API traffic and operations.',
        'It is suitable for internal API platforms, partner ecosystems, regulated environments and AgenticAI architectures where API governance matters.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'On-premise deployment',
          text: 'Deploy in customer-controlled environments where data, traffic and infrastructure must remain under enterprise control.',
        },
        {
          title: 'SaaS deployment',
          text: 'Use a managed platform model where it better fits organizational needs.',
        },
        {
          title: 'Hybrid ecosystems',
          text: 'Support scenarios where APIs connect cloud services, on-premise systems, partners and agent platforms.',
        },
        {
          title: 'Enterprise identity integration',
          text: 'Integrate API access with enterprise identity and access management systems.',
        },
        {
          title: 'Gateway and policy control',
          text: 'Manage routing, access policies, rate limits, quotas and contextual checks.',
        },
        {
          title: 'Operational monitoring',
          text: 'Monitor API usage, traffic behavior, consumer activity, agent requests and platform health.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Proven in demanding API environments',
      body: [
        'Kumuluz API has been used by organizations across banking, insurance, aviation maintenance and enterprise services, including OTP banka, Generali, Prva zavarovalnica, Zavarovalniška skupina Sava, Adria Tehnika and others.',
        'These environments require secure API exposure, operational reliability, partner integration, lifecycle control and long-term API governance.',
      ],
      columns: 3,
      variant: 'feature',
      items: [
        {
          label: 'Banking',
          title: 'OTP banka',
          text: 'Secure API exposure and long-term API governance in a demanding banking environment.',
        },
        {
          label: 'Insurance',
          title: 'Generali',
          text: 'Operational reliability and partner integration across insurance API ecosystems.',
        },
        {
          label: 'Insurance',
          title: 'Prva zavarovalnica',
          text: 'Lifecycle control and secure API exposure for regulated insurance services.',
        },
        {
          label: 'Insurance group',
          title: 'Zavarovalniška skupina Sava',
          text: 'API governance and partner integration across an enterprise insurance group.',
        },
        {
          label: 'Aviation maintenance',
          title: 'Adria Tehnika',
          text: 'Reliable API management for aviation maintenance and enterprise services.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Kumuluz products used in this solution',
      body: [
        'API Management & API Economy is delivered through several Kumuluz products that each play a distinct role.',
      ],
      items: [
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'The core API management platform for cataloging, exposing, securing, monitoring and governing APIs.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities that can be exposed through the API ecosystem for applications, partners, workflows and AI agents.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Engineering foundation for building cloud-native services, APIs, connectors, MCP-enabled tools and workflow integrations.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platform that can use governed APIs and tools exposed through Kumuluz API.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start',
      intro:
        'API management can be introduced gradually. Organizations often begin with visibility and governance, then move toward partner ecosystems, API economy and AI-agent-ready APIs.',
      items: [
        {
          title: 'Assess the API landscape',
          text: 'Identify existing APIs, owners, documentation, consumers, integrations, lifecycle status and governance gaps.',
        },
        {
          title: 'Define API strategy',
          text: 'Determine whether the focus is internal API governance, partner onboarding, API economy, gateway control or AI-agent-ready API exposure.',
        },
        {
          title: 'Create the API catalog',
          text: 'Register APIs, documentation, ownership, lifecycle metadata and dependency information.',
        },
        {
          title: 'Set access and gateway policies',
          text: 'Configure access plans, subscriptions, API keys, routing, quotas, rate limits and security policies.',
        },
        {
          title: 'Enable developer and partner portal',
          text: 'Provide self-service discovery, documentation, sandbox environments and onboarding workflows.',
        },
        {
          title: 'Prepare APIs for AgenticAI',
          text: 'Identify which APIs can be safely exposed as agent tools, define schemas, access rules, MCP patterns and gateway checks.',
        },
        {
          title: 'Monitor and evolve',
          text: 'Track API usage, partner adoption, consumer dependencies, agent requests, token usage and lifecycle changes.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz for API Management & API Economy',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Enterprise API visibility',
          text: 'Create a central view of APIs, owners, consumers, documentation and dependencies.',
        },
        {
          title: 'Partner and developer experience',
          text: 'Support self-service discovery, documentation, access requests and sandbox testing.',
        },
        {
          title: 'AgenticAI-ready API governance',
          text: 'Prepare APIs for safe use by AI agents through MCP patterns, gateway checks, contextual routing and monitoring.',
        },
        {
          title: 'Business capability reuse',
          text: 'Combine API management with Business APIs to turn repeated functionality into reusable digital assets.',
        },
        {
          title: 'API economy foundation',
          text: 'Expose APIs to partners and ecosystems with access plans, subscriptions, monitoring and lifecycle control.',
        },
        {
          title: 'Enterprise-proven',
          text: 'Kumuluz API has been used in demanding banking, insurance, aviation maintenance and enterprise environments.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Sunesis combines API architecture, integration, cloud-native platforms, DevOps and AgenticAI delivery expertise.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Ready to build a governed API ecosystem?',
      body: [
        'Kumuluz helps organizations expose, manage and scale APIs for internal teams, partners, applications and AI agents.',
        'Start with API visibility and governance, then evolve toward partner ecosystems, API economy and AgenticAI-ready API platforms.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore Kumuluz API',
    },
  ],
}

const sl: SolutionPageContent = {
  seo: {
    title:
      'Upravljanje API-jev in API ekonomija | Vodeni API-ji za time, partnerje in AI agente',
    description:
      'Zgradite vodene API ekosisteme s Kumuluz API za interne time, partnerje, pobude API ekonomije in za agente pripravljeno izpostavljanje API-jev z MCP in nadzorom prehoda.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Upravljanje API-jev in API ekonomija',
    title:
      'Spremenite API-je v vodena digitalna sredstva za time, partnerje in AI agente',
    body: [
      'API-ji so temelj digitalnih platform, partnerskih ekosistemov, poslovnih integracij in avtomatizacije, podprte z AI.',
      'Kumuluz organizacijam pomaga izpostavljati, upravljati, varovati in spremljati API-je med timi, partnerji, digitalnimi kanali in AgenticAI okolji.',
      'S Kumuluz API lahko zgradite kataloge API-jev, razvijalske portale, politike prehoda, načrte dostopa, peskovnike, procese življenjskega cikla API-jev in temelje API ekonomije — obenem pa pripravite API-je za AI agente, MCP-pripravljene integracije, kontekstualno usmerjanje in vidnost uporabe AI.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite Kumuluz API',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title:
        'API-ji ustvarjajo vrednost le, ko so vidni, varni in ponovno uporabni',
      body: [
        'Večina organizacij že ima veliko API-jev. Nekateri podpirajo interne aplikacije. Nekateri povezujejo partnerje. Nekateri poganjajo mobilne aplikacije, portale ali integracijske plasti. Drugi izpostavljajo poslovne zmožnosti, skrite v zapuščinskih sistemih.',
        'A brez centralnega pristopa k upravljanju API-jev jih je težko odkriti, varovati, ponovno uporabiti in razvijati.',
        'Timi lahko podvajajo funkcionalnost. Partnerji lahko zahtevajo ročno uvajanje. Spremembe API-jev lahko pokvarijo aplikacije. Politike dostopa so lahko nedosledne. Uporaba API-jev morda ni vidna.',
        'Z AI agenti postane izziv še pomembnejši. Agenti potrebujejo API-je kot orodja, a dajanje nenadzorovanega dostopa agentom do zalednih sistemov povečuje tveganje glede varnosti, zanesljivosti in skladnosti.',
        'Upravljanje API-jev zdaj ni več le o razvijalcih in partnerjih — gre tudi za pripravo API-jev za varno uporabo s strani AI agentov.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Pomanjkanje vidnosti API-jev',
          text: 'Timi ne vedo, kateri API-ji že obstajajo, kdo jih ima v lasti ali kdo jih uporablja.',
        },
        {
          title: 'Podvojene integracije',
          text: 'Iste poslovne zmožnosti se večkrat ponovno gradijo ali izpostavljajo prek nedoslednih končnih točk.',
        },
        {
          title: 'Ročno uvajanje partnerjev',
          text: 'Zunanji razvijalci in partnerji potrebujejo dokumentacijo, dostop, peskovniška okolja in podporo.',
        },
        {
          title: 'Tvegane spremembe API-jev',
          text: 'Spremembe API-jev lahko pokvarijo aplikacije, integracije, partnerske sisteme ali workflowe agentov.',
        },
        {
          title: 'Nenadzorovan dostop agentov',
          text: 'AI agenti potrebujejo API-je, vendar lahko neposreden zaledni dostop obide politike, validacijo in spremljanje.',
        },
        {
          title: 'Omejena poslovna vrednost API-jev',
          text: 'API-ji ne morejo postati digitalni produkti, dokler niso odkrivni, dokumentirani, varni in merljivi.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Vodeni API ekosistem za digitalne in AgenticAI platforme',
      body: [
        'Kumuluz zagotavlja rešitev za upravljanje API-jev in API ekonomijo, ki organizacijam pomaga upravljati API-je kot ponovno uporabna, vodena in poslovno pripravljena digitalna sredstva.',
        'V jedru je Kumuluz API, ki zagotavlja katalogizacijo API-jev, dokumentacijo, uvajanje razvijalcev, upravljanje prehoda, nadzor dostopa, spremljanje, upravljanje sprememb, podporo peskovniku in zmožnosti API ekonomije.',
        'Rešitev podpira tudi sodobne AgenticAI scenarije. API-je je mogoče pripraviti za uporabo z AI agenti, izpostaviti prek MCP-usmerjenih vzorcev, usmerjati prek politik prehoda in spremljati za uporabo s strani agentov, vključno z usmerjanjem LLM in beleženjem žetonov, kjer je to potrebno.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Ustvarite vidnost API-jev',
          text: 'Zgradite centralni pregled API-jev, lastništva, dokumentacije, porabnikov, uporabe in odvisnosti.',
        },
        {
          title: 'Varujte in upravljajte dostop',
          text: 'Nadzorujte, kdo lahko uporablja katere API-je, pod katerimi načrti, ključi, politikami in pogoji ravni storitve.',
        },
        {
          title: 'Omogočite partnerske ekosisteme',
          text: 'Zagotovite dokumentacijo, naročnine, dostop do peskovnika in workflowe uvajanja za partnerje in razvijalce.',
        },
        {
          title: 'Pripravite API-je za AI agente',
          text: 'Izpostavite API-je kot vodena orodja za AI agente prek MCP-usmerjenih vzorcev, kontekstualnega usmerjanja in preverjanj na ravni prehoda.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Kaj vključuje upravljanje API-jev in API ekonomija',
      intro:
        'Celovita rešitev za upravljanje API-jev združuje upravljanje, razvijalsko izkušnjo, varnost, upravljanje življenjskega cikla, analitiko in poslovno omogočanje.',
      items: [
        {
          icon: BookMarked,
          title: 'Katalog in odkrivanje API-jev',
          text: 'Centralni katalog API-jev naredi API-je vidne, iskljive in ponovno uporabne po vsej organizaciji.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API'],
        },
        {
          icon: AppWindow,
          title: 'Razvijalski portal',
          text: 'Razvijalski portal internim razvijalcem, partnerjem in zunanjim porabnikom omogoča odkrivanje API-jev, branje dokumentacije in zahtevanje dostopa.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API'],
        },
        {
          icon: ShieldCheck,
          title: 'API prehod in nadzor dostopa',
          text: 'Plast prehoda nadzoruje izpostavljanje API-jev, usmerjanje, avtentikacijo, politike, omejitve hitrosti, kvote in spremljanje prometa.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API'],
        },
        {
          icon: FlaskConical,
          title: 'Peskovnik in uvajanje',
          text: 'Peskovniška okolja razvijalcem in partnerjem omogočajo testiranje API-jev pred produkcijsko integracijo.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API'],
        },
        {
          icon: GitBranch,
          title: 'Življenjski cikel in upravljanje sprememb API-jev',
          text: 'Različice API-jev, odvisnosti, porabnike in spremembe je mogoče upravljati za zmanjšanje tveganja integracije.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API'],
        },
        {
          icon: Store,
          title: 'Omogočanje API ekonomije',
          text: 'API-je je mogoče zapakirati, ponuditi in spremljati kot digitalne produkte za partnerje, ekosisteme in poslovne kanale.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API', 'Kumuluz Business APIs'],
        },
        {
          icon: Bot,
          title: 'Za agente pripravljeno izpostavljanje API-jev',
          text: 'Izbrane API-je je mogoče pripraviti kot vodena orodja, ki jih AI agenti lahko varno kličejo.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz API',
            'Kumuluz Business APIs',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Boxes,
          title: 'MCP in integracija agentov',
          text: 'API-je in platformske zmožnosti je mogoče izpostaviti prek vzorcev MCP strežnika za AgenticAI integracijo.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz API',
            'Kumuluz Digital Platform',
            'KumuluzAI Platform',
          ],
        },
        {
          icon: Activity,
          title: 'Vidnost uporabe AI',
          text: 'Zahteve agentov, usmerjanje LLM in porabo žetonov je mogoče beležiti in spremljati, kjer je to pomembno.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API', 'KumuluzAI Platform'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Od tehničnih končnih točk do API produktov',
      body: [
        'API-ji ustvarjajo poslovno vrednost, ko jih obravnavamo kot ponovno uporabna digitalna sredstva.',
        'Pristop API ekonomije organizacijam pomaga na strukturiran način izpostaviti izbrane poslovne zmožnosti partnerjem, internim timom, zunanjim razvijalcem in digitalnim ekosistemom.',
        'Kumuluz API to podpira z zagotavljanjem katalogizacije, dokumentacije, načrtov dostopa, naročnin, peskovniških okolij, spremljanja in nadzora življenjskega cikla.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Produktizirajte API-je',
          text: 'Zapakirajte API-je kot ponovno uporabne zmožnosti z dokumentacijo, lastništvom, načrti dostopa in statusom življenjskega cikla.',
        },
        {
          title: 'Omogočite partnerski dostop',
          text: 'Partnerjem dajte nadzorovan način za odkrivanje, testiranje in uporabo API-jev.',
        },
        {
          title: 'Ustvarite nove kanale',
          text: 'Uporabite API-je za podporo digitalnim partnerstvom, portalom, mobilnim aplikacijam, platformam in B2B ekosistemom.',
        },
        {
          title: 'Merite uporabo',
          text: 'Spremljajte uporabo API-jev, porabnike, promet in trende integracij.',
        },
        {
          title: 'Upravljajte spremembe',
          text: 'Sporočajte posodobitve, spremembe različic in opustitve porabnikom API-jev.',
        },
        {
          title: 'Podprite poslovne modele',
          text: 'Uporabite načrte dostopa, vidnost uporabe in partnerske nivoje kot temelj za poslovne modele na osnovi API-jev.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Pripravite API-je za AI agente in AgenticAI platforme',
      body: [
        'AI agenti potrebujejo API-je za pridobivanje podatkov, sprožanje dejanj, zagon workflowov in interakcijo s poslovnimi sistemi.',
        'A API-ji, zasnovani le za tradicionalne aplikacije, niso vedno varni ali primerni za agentno uporabo. Agenti potrebujejo nadzorovane vmesnike orodij, jasne sheme, dovoljenja, validacijo, spremljanje in meje izvajanja.',
        'Kumuluz organizacijam pomaga pripraviti API-je za uporabo z AI agenti. Kumuluz API lahko izpostavi izbrane API-je prek MCP-usmerjenih vzorcev, usmerja zahteve agentov prek politik prehoda, izvaja osnovna preverjanja, spremlja uporabo ter podpira usmerjanje LLM in beleženje žetonov, kjer je to potrebno. To omogoča, da API-ji postanejo vodena orodja v AgenticAI arhitekturi.',
      ],
      columns: 4,
      variant: 'tag',
      items: [
        {
          title: 'Za agente klicljivi API-ji',
          text: 'Izpostavite izbrane API-je kot orodja, ki jih AI agenti lahko uporabljajo v skladu z določenimi politikami.',
          meta: 'Agenti, Politike',
        },
        {
          title: 'Vzorci MCP strežnika',
          text: 'Uporabite MCP-usmerjene vzorce integracije, da agenti lahko odkrivajo in kličejo odobrene zmožnosti.',
          meta: 'MCP, Odkrivanje',
        },
        {
          title: 'Kumuluz API MCP strežnik',
          text: 'Kumuluz API lahko izpostavi lasten MCP strežnik, da se agentni sistemi lahko integrirajo s samo platformo za upravljanje API-jev.',
          meta: 'MCP, Integracija',
        },
        {
          title: 'Kontekstualno usmerjanje',
          text: 'Usmerjajte zahteve agentov glede na kontekst, politike, ciljno zmožnost, vlogo uporabnika ali zahteve izvajanja.',
          meta: 'Usmerjanje, Kontekst',
        },
        {
          title: 'Osnovna preverjanja prehoda',
          text: 'Validirajte strukturo zahteve, pogoje dostopa in dovoljene vzorce izvajanja pred klicem zaledja.',
          meta: 'Prehod, Validacija',
        },
        {
          title: 'Usmerjanje LLM',
          text: 'Usmerjajte izbrane zahteve proti LLM storitvam ali AI procesnim plastem, kjer je to potrebno.',
          meta: 'LLM, Usmerjanje',
        },
        {
          title: 'Beleženje porabe žetonov',
          text: 'Beležite porabo žetonov in informacije o porabi AI za podporo vidnosti stroškov in upravljanju.',
          meta: 'Žetoni, Upravljanje',
        },
        {
          title: 'Sledenje odvisnostim agentov',
          text: 'Razumite, kateri agenti, orodja ali workflowi so odvisni od določenih API-jev, preden uvedete spremembe.',
          meta: 'Odvisnosti, Spremembe',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Arhitektura upravljanja API-jev za time, partnerje in AI agente',
      body: [
        'Sodobna arhitektura upravljanja API-jev povezuje ponudnike API-jev, porabnike API-jev, razvijalce, partnerje, prehode in AI agente prek vodenega platformskega temelja.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Ponudniki API-jev',
          text: 'Mikrostoritve, zaledni sistemi, oblačne storitve, zapuščinske aplikacije, Business API-ji in poslovne platforme, ki izpostavljajo API-je.',
        },
        {
          title: 'Plast upravljanja Kumuluz API',
          text: 'Katalog API-jev, upravljanje življenjskega cikla, dokumentacija, lastništvo, načrti dostopa, naročnine, razvijalski portal in upravljanje.',
        },
        {
          title: 'Plast API prehoda',
          text: 'Usmerjanje, avtentikacija, uveljavljanje politik, omejitve hitrosti, kvote, kontekstualno usmerjanje, preverjanja prehoda in spremljanje prometa.',
        },
        {
          title: 'Razvijalski in partnerski portal',
          text: 'Samopostrežni dostop za interne time, zunanje partnerje, razvijalske ekosisteme in porabnike API-jev.',
        },
        {
          title: 'Plast MCP in integracije agentov',
          text: 'MCP strežniki, za agente klicljivi API-ji, metapodatki orodij, vzorci integracije agentov in izpostavljanje Kumuluz API MCP strežnika.',
        },
        {
          title: 'Plast AI in usmerjanja LLM',
          text: 'Izbrane zahteve je mogoče usmeriti k LLM storitvam ali AI procesnim plastem z beleženjem uporabe in žetonov.',
        },
        {
          title: 'Porabniki',
          text: 'Interne aplikacije, mobilne aplikacije, portali, partnerski sistemi, zunanji razvijalci, AI agenti in platforme workflowov.',
        },
        {
          title: 'Analitika in upravljanje',
          text: 'Uporaba API-jev, aktivnost porabnikov, zahteve agentov, sledenje odvisnostim, poraba žetonov, vpliv sprememb in operativno poročanje.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite',
      intro:
        'Kumuluz podpira scenarije upravljanja API-jev na področju internega upravljanja, partnerskih ekosistemov, API ekonomije in za agente pripravljene integracije.',
      items: [
        {
          icon: LibraryBig,
          title: 'Poslovni katalog API-jev',
          text: 'Ustvarite centralni pregled API-jev, lastnikov, dokumentacije, statusa življenjskega cikla in porabnikov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Interni register API-jev',
            'Vozlišče dokumentacije API-jev',
            'Pregled odvisnosti API-jev',
            'Katalog poslovnih zmožnosti',
            'Model lastništva API-jev',
            'Program ponovne uporabe API-jev',
          ],
        },
        {
          icon: Handshake,
          title: 'Partnerski API ekosistem',
          text: 'Izpostavite API-je partnerjem, dobaviteljem, strankam ali zunanjim razvijalcem na nadzorovan način.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Partnerski API portal',
            'Uvajanje partnerjev',
            'Naročnine na API-je',
            'API ključi in načrti dostopa',
            'Testiranje v peskovniku',
            'B2B integracije',
          ],
        },
        {
          icon: Route,
          title: 'Upravljanje API prehoda',
          text: 'Varujte, usmerjajte in spremljajte promet API-jev prek upravljane plasti prehoda.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Avtentikacija API-jev',
            'Politike avtorizacije',
            'Omejitve hitrosti in kvote',
            'Usmerjanje prehoda',
            'Spremljanje prometa',
            'SLA-usmerjen nadzor dostopa',
          ],
        },
        {
          icon: Cpu,
          title: 'Za agente pripravljena plast API-jev',
          text: 'Pripravite API-je, da jih AI agenti lahko uporabljajo varno in predvidljivo.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Za agente klicljivi API-ji',
            'MCP-pripravljeno izpostavljanje API-jev',
            'Kontekstualno usmerjanje zahtev agentov',
            'Za orodja varni API-ji',
            'Sledenje odvisnostim agentov',
            'Workflowi agentov na osnovi API-jev',
          ],
        },
        {
          icon: Coins,
          title: 'Pobuda API ekonomije',
          text: 'Spremenite API-je v digitalne produkte za partnerske ekosisteme in nove poslovne modele.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Produktizacija API-jev',
            'Partnerski nivoji',
            'Vidnost uporabe',
            'API paketi',
            'Izpostavljanje poslovnih zmožnosti',
            'Omogočanje ekosistema',
          ],
        },
        {
          icon: GitCompare,
          title: 'Življenjski cikel in upravljanje sprememb API-jev',
          text: 'Upravljajte različice API-jev, opustitve, odvisnosti in migracijske poti.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Verzioniranje API-jev',
            'Analiza vpliva sprememb',
            'Obvestila porabnikom',
            'Načrtovanje opustitev',
            'Podpora migraciji',
            'Preverjanja združljivosti orodij agentov',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Upravljanje in varnost med porabniki API-jev',
      body: [
        'Upravljanje API-jev mora pokrivati vse vrste porabnikov: interne aplikacije, partnerje, zunanje razvijalce, pogone workflowov in AI agente.',
        'Kumuluz API organizacijam pomaga določiti dosledna pravila o tem, kdo lahko dostopa do katerih API-jev, kako se usmerjajo zahteve, katere politike veljajo in kako se spremlja uporaba.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Lastništvo API-jev',
          text: 'Določite, kdo ima v lasti, vzdržuje in odobrava spremembe API-jev.',
        },
        {
          title: 'Politike dostopa',
          text: 'Nadzorujte dostop prek načrtov, naročnin, API ključev, avtentikacije in avtorizacije.',
        },
        {
          title: 'Upravljanje porabnikov',
          text: 'Sledite aplikacijam, partnerjem, razvijalcem, sistemom in agentom, ki uporabljajo API-je.',
        },
        {
          title: 'Uveljavljanje na prehodu',
          text: 'Uporabite usmerjanje, omejitve hitrosti, kvote, politike in preverjanja zahtev na plasti prehoda.',
        },
        {
          title: 'Upravljanje različic',
          text: 'Upravljajte različice API-jev, združljivost, opustitve in migracije.',
        },
        {
          title: 'Revizijska sledljivost',
          text: 'Sledite klicem API-jev, dogodkom dostopa, zahtevam agentov, usmerjanju LLM in porabi žetonov, kjer je to pomembno.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Upravljajte ponovno uporabne poslovne zmožnosti in workflowe',
      body: [
        'Upravljanje API-jev postane bolj dragoceno, ko API-ji izpostavljajo ponovno uporabne poslovne zmožnosti, ne le tehnične končne točke.',
        'Kumuluz Business APIs zagotavljajo ponovno uporabne poslovne funkcije, kot so podatki o strankah, katalogi izdelkov, naročila, plačila, naročnine, izstavljanje računov, KYC, uvajanje, primeri, naloge in obvestila.',
        'Kumuluz API lahko te API-je katalogizira, varuje, izpostavi in spremlja za aplikacije, partnerje, AI agente in pogone workflowov. V AgenticAI scenarijih lahko Business API-ji postanejo vodena orodja, ki jih agenti uporabljajo, medtem ko Temporal, Camunda ali podobni pogoni workflowov deterministično izvajajo procesno kritične korake.',
      ],
      columns: 2,
      variant: 'accent',
      items: [
        {
          title: 'Katalog poslovnih zmožnosti',
          text: 'Izpostavite ponovno uporabne poslovne API-je kot odkrivne in vodene zmožnosti.',
        },
        {
          title: 'Za workflowe pripravljeni API-ji',
          text: 'Upravljajte API-je, ki se uporabljajo kot aktivnosti, servisne naloge ali konektorji v pogonih workflowov.',
        },
        {
          title: 'Orodja za agente',
          text: 'Izpostavite izbrane poslovne API-je kot za agente klicljiva orodja s politikami in sledljivostjo.',
        },
        {
          title: 'Partnerski dostop',
          text: 'Partnerjem omogočite uporabo izbranih poslovnih zmožnosti v skladu z načrti dostopa in politikami.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovano za poslovna API okolja',
      body: [
        'Kumuluz API lahko podpira modele uvedbe, kjer organizacije zahtevajo nadzor nad infrastrukturo, varnostjo, prometom API-jev in delovanjem.',
        'Primeren je za interne API platforme, partnerske ekosisteme, regulirana okolja in AgenticAI arhitekture, kjer je upravljanje API-jev pomembno.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Lokalna uvedba',
          text: 'Namestite v okoljih pod nadzorom stranke, kjer morajo podatki, promet in infrastruktura ostati pod poslovnim nadzorom.',
        },
        {
          title: 'SaaS uvedba',
          text: 'Uporabite model upravljane platforme, kjer to bolje ustreza organizacijskim potrebam.',
        },
        {
          title: 'Hibridni ekosistemi',
          text: 'Podprite scenarije, kjer API-ji povezujejo oblačne storitve, lokalne sisteme, partnerje in platforme agentov.',
        },
        {
          title: 'Integracija poslovne identitete',
          text: 'Integrirajte dostop do API-jev s poslovnimi sistemi za upravljanje identitete in dostopa.',
        },
        {
          title: 'Nadzor prehoda in politik',
          text: 'Upravljajte usmerjanje, politike dostopa, omejitve hitrosti, kvote in kontekstualna preverjanja.',
        },
        {
          title: 'Operativno spremljanje',
          text: 'Spremljajte uporabo API-jev, vedenje prometa, aktivnost porabnikov, zahteve agentov in zdravje platforme.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Preverjeno v zahtevnih API okoljih',
      body: [
        'Kumuluz API uporabljajo organizacije v bančništvu, zavarovalništvu, vzdrževanju letal in poslovnih storitvah, vključno z OTP banka, Generali, Prva zavarovalnica, Zavarovalniška skupina Sava, Adria Tehnika in drugimi.',
        'Ta okolja zahtevajo varno izpostavljanje API-jev, operativno zanesljivost, partnersko integracijo, nadzor življenjskega cikla in dolgoročno upravljanje API-jev.',
      ],
      columns: 3,
      variant: 'feature',
      items: [
        {
          label: 'Bančništvo',
          title: 'OTP banka',
          text: 'Varno izpostavljanje API-jev in dolgoročno upravljanje API-jev v zahtevnem bančnem okolju.',
        },
        {
          label: 'Zavarovalništvo',
          title: 'Generali',
          text: 'Operativna zanesljivost in partnerska integracija v zavarovalniških API ekosistemih.',
        },
        {
          label: 'Zavarovalništvo',
          title: 'Prva zavarovalnica',
          text: 'Nadzor življenjskega cikla in varno izpostavljanje API-jev za regulirane zavarovalniške storitve.',
        },
        {
          label: 'Zavarovalniška skupina',
          title: 'Zavarovalniška skupina Sava',
          text: 'Upravljanje API-jev in partnerska integracija v poslovni zavarovalniški skupini.',
        },
        {
          label: 'Vzdrževanje letal',
          title: 'Adria Tehnika',
          text: 'Zanesljivo upravljanje API-jev za vzdrževanje letal in poslovne storitve.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Izdelki Kumuluz, uporabljeni v tej rešitvi',
      body: [
        'Upravljanje API-jev in API ekonomija se izvaja prek več izdelkov Kumuluz, od katerih ima vsak svojo vlogo.',
      ],
      items: [
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Osrednja platforma za upravljanje API-jev za katalogizacijo, izpostavljanje, varovanje, spremljanje in upravljanje API-jev.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Ponovno uporabne poslovne zmožnosti, ki jih je mogoče izpostaviti prek API ekosistema za aplikacije, partnerje, workflowe in AI agente.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Inženirski temelj za gradnjo cloud-native storitev, API-jev, konektorjev, MCP-pripravljenih orodij in integracij workflowov.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platforma, ki lahko uporablja vodene API-je in orodja, izpostavljena prek Kumuluz API.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo',
      intro:
        'Upravljanje API-jev je mogoče uvajati postopoma. Organizacije pogosto začnejo z vidnostjo in upravljanjem, nato pa preidejo k partnerskim ekosistemom, API ekonomiji in za agente pripravljenim API-jem.',
      items: [
        {
          title: 'Ocenite pokrajino API-jev',
          text: 'Prepoznajte obstoječe API-je, lastnike, dokumentacijo, porabnike, integracije, status življenjskega cikla in vrzeli v upravljanju.',
        },
        {
          title: 'Določite strategijo API-jev',
          text: 'Ugotovite, ali je poudarek na internem upravljanju API-jev, uvajanju partnerjev, API ekonomiji, nadzoru prehoda ali za agente pripravljenem izpostavljanju API-jev.',
        },
        {
          title: 'Ustvarite katalog API-jev',
          text: 'Registrirajte API-je, dokumentacijo, lastništvo, metapodatke življenjskega cikla in informacije o odvisnostih.',
        },
        {
          title: 'Nastavite politike dostopa in prehoda',
          text: 'Konfigurirajte načrte dostopa, naročnine, API ključe, usmerjanje, kvote, omejitve hitrosti in varnostne politike.',
        },
        {
          title: 'Omogočite razvijalski in partnerski portal',
          text: 'Zagotovite samopostrežno odkrivanje, dokumentacijo, peskovniška okolja in workflowe uvajanja.',
        },
        {
          title: 'Pripravite API-je za AgenticAI',
          text: 'Prepoznajte, katere API-je je mogoče varno izpostaviti kot orodja za agente, ter določite sheme, pravila dostopa, MCP vzorce in preverjanja prehoda.',
        },
        {
          title: 'Spremljajte in razvijajte',
          text: 'Sledite uporabi API-jev, sprejemanju pri partnerjih, odvisnostim porabnikov, zahtevam agentov, porabi žetonov in spremembam življenjskega cikla.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz za upravljanje API-jev in API ekonomijo',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Poslovna vidnost API-jev',
          text: 'Ustvarite centralni pregled API-jev, lastnikov, porabnikov, dokumentacije in odvisnosti.',
        },
        {
          title: 'Izkušnja partnerjev in razvijalcev',
          text: 'Podprite samopostrežno odkrivanje, dokumentacijo, zahteve za dostop in testiranje v peskovniku.',
        },
        {
          title: 'Za AgenticAI pripravljeno upravljanje API-jev',
          text: 'Pripravite API-je za varno uporabo z AI agenti prek MCP vzorcev, preverjanj prehoda, kontekstualnega usmerjanja in spremljanja.',
        },
        {
          title: 'Ponovna uporaba poslovnih zmožnosti',
          text: 'Združite upravljanje API-jev z Business API-ji, da ponavljajočo se funkcionalnost spremenite v ponovno uporabna digitalna sredstva.',
        },
        {
          title: 'Temelj API ekonomije',
          text: 'Izpostavite API-je partnerjem in ekosistemom z načrti dostopa, naročninami, spremljanjem in nadzorom življenjskega cikla.',
        },
        {
          title: 'Poslovno preverjeno',
          text: 'Kumuluz API se uporablja v zahtevnih bančnih, zavarovalniških, letalsko-vzdrževalnih in poslovnih okoljih.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'Sunesis združuje arhitekturo API-jev, integracijo, cloud-native platforme, DevOps in strokovno znanje dostave AgenticAI.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Pripravljeni na gradnjo vodenega API ekosistema?',
      body: [
        'Kumuluz organizacijam pomaga izpostavljati, upravljati in skalirati API-je za interne time, partnerje, aplikacije in AI agente.',
        'Začnite z vidnostjo in upravljanjem API-jev, nato se razvijte proti partnerskim ekosistemom, API ekonomiji in za AgenticAI pripravljenim API platformam.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite Kumuluz API',
    },
  ],
}

export const apiManagementPage: Record<LanguageCode, SolutionPageContent> = {
  en,
  sl,
}
