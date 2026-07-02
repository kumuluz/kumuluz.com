import {
  Activity,
  AppWindow,
  Bot,
  Boxes,
  Cloud,
  Cpu,
  LibraryBig,
  Network,
  Plug,
  RefreshCw,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { SolutionPageContent } from '../../views/solutions/types'

const en: SolutionPageContent = {
  seo: {
    title:
      'Cloud-native Digital Platforms | Services, APIs, Workflows and AI-agent-ready Foundations',
    description:
      'Build cloud-native digital platforms with services, APIs, connectors, MCP-enabled tools, workflows and AI-agent-ready foundations using Kumuluz Digital Platform.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Cloud-native Digital Platforms',
    title:
      'Build digital platforms that support applications, workflows and AI agents',
    body: [
      'Modern digital platforms need more than web and mobile apps. They need services, APIs, integrations, workflows, partner channels and AI-agent-ready capabilities.',
      'Kumuluz helps organizations build cloud-native digital platforms that expose reusable services, connect enterprise systems, orchestrate deterministic workflows and prepare business capabilities for safe use by AI agents.',
      'With Kumuluz Digital Platform and related products, organizations can modernize gradually, build API-first service layers, implement MCP-enabled tools and create cloud-native foundations for long-term digital evolution.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Kumuluz Digital Platform',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Digital platforms are becoming the foundation for AI-enabled enterprises',
      body: [
        'For years, digital platforms were mainly about portals, mobile apps, APIs and integrations. Today, they also need to support automation, AI agents, workflows, partner ecosystems and real-time data-driven services.',
        'Many organizations still build digital solutions project by project. Each initiative creates its own backend, APIs, deployment model, integration patterns and operational setup. Over time, this creates duplicated work, inconsistent architecture and systems that are hard to evolve.',
        'With AgenticAI, the need for a strong platform foundation becomes even more important. AI agents need safe access to services, APIs, tools and workflows. Without a well-designed digital platform layer, agents may connect directly to backend systems or create fragile automation paths.',
        'Kumuluz helps organizations build cloud-native digital platforms that support both today’s digital applications and tomorrow’s AI-agent-enabled services.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Duplicated digital foundations',
          text: 'Teams repeatedly rebuild backend services, APIs, integrations, security and deployment patterns for each project.',
        },
        {
          title: 'Legacy systems slow innovation',
          text: 'Important capabilities are locked inside monolithic systems that are difficult to expose, reuse or modernize.',
        },
        {
          title: 'Fragmented APIs and services',
          text: 'Without shared platform principles, APIs, services and integrations become inconsistent and hard to govern.',
        },
        {
          title: 'Workflow automation is disconnected',
          text: 'Process automation often sits separately from APIs, applications and digital platform architecture.',
        },
        {
          title: 'AI agents need safe capabilities',
          text: 'Agents require controlled services, tools and APIs, not direct access to backend systems.',
        },
        {
          title: 'Operations become complex',
          text: 'Digital platforms require CI/CD, observability, resilience, deployment automation and production supportability.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'A cloud-native foundation for digital and AI-agent-ready services',
      body: [
        'Kumuluz provides a solution approach for building cloud-native digital platforms that combine modular services, APIs, integrations, workflows and AI-agent-ready capabilities.',
        'At the center is Kumuluz Digital Platform, which provides the engineering foundation for services, APIs, connectors, MCP-enabled tools and deterministic workflows.',
        'Kumuluz API can manage and expose APIs. Kumuluz Business APIs can provide reusable business capabilities. KumuluzAI can use approved services and tools through governed agent access.',
        'Together, these products help organizations create a digital platform architecture that supports applications, partners, workflows and AI agents.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Build reusable digital foundations',
          text: 'Create shared services, APIs, integration patterns and deployment foundations across multiple digital initiatives.',
        },
        {
          title: 'Prepare for AgenticAI',
          text: 'Design services, APIs and tools so they can be safely used by AI agents under governance.',
        },
        {
          title: 'Modernize incrementally',
          text: 'Expose legacy capabilities through APIs, connectors and service layers without replacing everything at once.',
        },
        {
          title: 'Connect applications and workflows',
          text: 'Use services and APIs as the foundation for portals, mobile apps, partner integrations and deterministic workflows.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'What a cloud-native digital platform includes',
      intro:
        'A modern digital platform combines engineering foundations, runtime patterns, API-first architecture, integration readiness, workflow orchestration and operational control.',
      items: [
        {
          icon: Cloud,
          title: 'Cloud-native services',
          text: 'Services designed for scalability, modularity, deployment automation and operational resilience.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Digital Platform'],
        },
        {
          icon: Network,
          title: 'API-first architecture',
          text: 'Business and technical capabilities exposed through consistent, reusable and secure APIs.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Digital Platform', 'Kumuluz API'],
        },
        {
          icon: Plug,
          title: 'Connectors and integration adapters',
          text: 'Controlled integration with legacy systems, enterprise applications, external services and partner systems.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Digital Platform'],
        },
        {
          icon: Bot,
          title: 'MCP-enabled tools and agent integrations',
          text: 'Services and APIs prepared for AI-agent use through tool-safe design and MCP-oriented integration patterns.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz Digital Platform',
            'Kumuluz API',
            'KumuluzAI Platform',
          ],
        },
        {
          icon: Workflow,
          title: 'Workflow orchestration',
          text: 'Deterministic process execution using platforms such as Temporal, Camunda or similar workflow engines.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Digital Platform', 'Kumuluz Business APIs'],
        },
        {
          icon: Boxes,
          title: 'Reusable business capabilities',
          text: 'Common functions such as customer data, orders, payments, onboarding, KYC, cases and notifications exposed as reusable APIs.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Business APIs', 'Kumuluz API'],
        },
        {
          icon: Activity,
          title: 'DevOps and observability',
          text: 'Automated delivery, environment management, monitoring, logging, tracing and production operations.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Digital Platform'],
        },
        {
          icon: ShieldCheck,
          title: 'Enterprise security and identity',
          text: 'Authentication, authorization, service security and integration with enterprise identity providers.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Digital Platform', 'Kumuluz API'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Prepare your digital platform for AI agents',
      body: [
        'AI agents become useful when they can safely interact with enterprise capabilities. That requires a well-designed service and tool layer.',
        'Kumuluz helps organizations build AI-agent-ready digital platforms by exposing selected capabilities as controlled services, APIs, tools and workflows.',
        'Instead of giving agents direct access to core systems, organizations can provide tool-safe APIs, MCP-enabled tools, gateway-controlled API access and deterministic workflows.',
      ],
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Tool-safe APIs',
          text: 'Design APIs with clear inputs, outputs, validation, permissions, idempotency and auditability.',
          meta: 'APIs, Validation',
        },
        {
          title: 'MCP-enabled tools',
          text: 'Expose approved services and capabilities through MCP-oriented patterns for agent discovery and invocation.',
          meta: 'MCP, Discovery',
        },
        {
          title: 'Controlled backend access',
          text: 'Use services, connectors and APIs as a safe boundary between AI agents and enterprise systems.',
          meta: 'Access, Boundary',
        },
        {
          title: 'Agent-ready workflows',
          text: 'Let agents support users and prepare context while workflow engines execute process-critical steps.',
          meta: 'Workflows, Agents',
        },
        {
          title: 'Reusable skills',
          text: 'Package repeated capabilities as skills or services that can be used across multiple agents and applications.',
          meta: 'Skills, Reuse',
        },
        {
          title: 'Operational visibility',
          text: 'Track service calls, API usage, agent invocations, workflow execution and system behavior.',
          meta: 'Monitoring, Visibility',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Deterministic workflows for business-critical processes',
      body: [
        'AI agents are powerful for understanding intent, retrieving knowledge and assisting users. But many business processes require deterministic execution.',
        'A cloud-native digital platform should support defined process steps, validations, approvals, retries, compensations and audit trails.',
        'Kumuluz helps organizations implement workflow orchestration using Temporal, Camunda or similar platforms, with business services and APIs acting as workflow activities, service tasks or connectors.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Long-running processes',
          text: 'Support business processes that span systems, users, approvals and time.',
        },
        {
          title: 'Human approvals',
          text: 'Add human review steps for sensitive or regulated actions.',
        },
        {
          title: 'Retries and compensation',
          text: 'Implement resilient process patterns for failures, timeouts and rollback scenarios.',
        },
        {
          title: 'Service-based execution',
          text: 'Use APIs and services as workflow activities or service tasks.',
        },
        {
          title: 'Audit trails',
          text: 'Track workflow progress, decisions, approvals and service calls.',
        },
        {
          title: 'Agent-assisted workflows',
          text: 'Allow AI agents to support interaction while workflow engines execute critical steps.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for a cloud-native digital platform',
      body: [
        'A cloud-native digital platform connects digital channels, services, APIs, workflows, AI agents and enterprise systems through clear architectural layers.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'Digital channels',
          text: 'Web applications, mobile apps, customer portals, partner portals, internal tools and business applications.',
        },
        {
          title: 'AI agents and assistants',
          text: 'KumuluzAI agents or other AgenticAI systems that use approved services, APIs, tools and workflows.',
        },
        {
          title: 'API and tool layer',
          text: 'Reusable APIs, MCP-enabled tools and agent-callable capabilities exposed through controlled access.',
        },
        {
          title: 'Service layer',
          text: 'Cloud-native services implementing business logic, technical capabilities, process support and domain-specific functionality.',
        },
        {
          title: 'Workflow orchestration layer',
          text: 'Temporal, Camunda or similar workflow engines for deterministic process execution.',
        },
        {
          title: 'Integration connector layer',
          text: 'Connectors and adapters for existing systems, data sources, external services and partner platforms.',
        },
        {
          title: 'API management layer',
          text: 'Kumuluz API for API catalog, developer portal, access control, gateway routing, monitoring and agent-ready API exposure.',
        },
        {
          title: 'Enterprise systems',
          text: 'ERP, CRM, core systems, databases, document repositories, legacy applications and third-party platforms.',
        },
        {
          title: 'Platform operations layer',
          text: 'CI/CD, deployment automation, Kubernetes/OpenShift, configuration, observability, logging, tracing and monitoring.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build',
      intro:
        'Kumuluz helps organizations build and modernize digital platforms that support multiple channels, systems, workflows and AI-enabled use cases.',
      items: [
        {
          icon: AppWindow,
          title: 'Enterprise digital platform',
          text: 'A shared foundation for customer portals, internal tools, partner systems and business applications.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer self-service platforms',
            'Partner portals',
            'Internal business platforms',
            'Multi-channel digital platforms',
            'Digital service platforms',
            'Enterprise backend platforms',
          ],
        },
        {
          icon: Server,
          title: 'API-first backend platform',
          text: 'A modular backend platform that exposes business capabilities through secure APIs.',
          bulletsTitle: 'Examples',
          bullets: [
            'Mobile backends',
            'Portal backends',
            'Partner API backends',
            'Business capability APIs',
            'Backend-for-frontend patterns',
            'Service-based platforms',
          ],
        },
        {
          icon: Cpu,
          title: 'AI-agent-ready service layer',
          text: 'A controlled service layer that AI agents can safely use.',
          bulletsTitle: 'Examples',
          bullets: [
            'Agent-callable APIs',
            'MCP-enabled services',
            'Tool-safe business services',
            'AI integration adapters',
            'Agent workflow services',
            'Controlled backend access',
          ],
        },
        {
          icon: Workflow,
          title: 'Workflow automation platform',
          text: 'A deterministic process automation foundation connected with APIs and services.',
          bulletsTitle: 'Examples',
          bullets: [
            'Onboarding workflows',
            'KYC workflows',
            'Claims workflows',
            'Case management workflows',
            'Approval workflows',
            'Service request workflows',
          ],
        },
        {
          icon: RefreshCw,
          title: 'Legacy modernization platform',
          text: 'A gradual modernization approach around existing systems.',
          bulletsTitle: 'Examples',
          bullets: [
            'API enablement',
            'Legacy wrappers',
            'Strangler pattern modernization',
            'Microservice extraction',
            'Integration modernization',
            'Cloud-native migration',
          ],
        },
        {
          icon: LibraryBig,
          title: 'Reusable capability platform',
          text: 'A platform of reusable services and APIs shared across departments and digital products.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer services',
            'Product services',
            'Order services',
            'Payment services',
            'Notification services',
            'Case services',
            'Integration services',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Modernize gradually, without disrupting core systems',
      body: [
        'Kumuluz supports incremental modernization. Organizations do not need to replace everything at once.',
        'Instead, teams can expose existing capabilities through APIs, build modular services around legacy systems, introduce workflow boundaries and gradually move toward cloud-native architecture.',
        'The same approach can prepare legacy systems for AI-agent use by exposing only approved capabilities through tool-safe APIs, connectors and workflows.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'API enablement',
          text: 'Expose existing system capabilities through secure, documented APIs.',
        },
        {
          title: 'Service layer around legacy systems',
          text: 'Build modular services that wrap and extend existing systems.',
        },
        {
          title: 'Connector development',
          text: 'Create controlled adapters to core systems, external services and partner platforms.',
        },
        {
          title: 'Workflow boundaries',
          text: 'Use workflow orchestration to control process execution around legacy systems.',
        },
        {
          title: 'Tool-safe AI exposure',
          text: 'Prepare selected capabilities for agent use without exposing backend systems directly.',
        },
        {
          title: 'Cloud-native migration',
          text: 'Gradually move components toward containerized and Kubernetes-ready architectures.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise deployment',
      body: [
        'Kumuluz cloud-native digital platform solutions are designed for organizations that require secure deployment, integration with existing systems and operational control.',
        'Solutions can support cloud, hybrid, on-premise, Kubernetes and OpenShift-based environments depending on enterprise requirements.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Cloud deployment',
          text: 'Run digital services on modern cloud platforms using cloud-native architecture patterns.',
        },
        {
          title: 'Hybrid deployment',
          text: 'Connect cloud-native services with existing on-premise systems and private infrastructure.',
        },
        {
          title: 'On-premise deployment',
          text: 'Support private environments where data, security or regulatory needs require local control.',
        },
        {
          title: 'Kubernetes and OpenShift',
          text: 'Use containerized deployment and enterprise platform engineering practices.',
        },
        {
          title: 'DevOps integration',
          text: 'Integrate with CI/CD, GitOps, infrastructure automation and release management processes.',
        },
        {
          title: 'Observability',
          text: 'Monitor services, APIs, workflows, integrations, agent calls and platform behavior.',
        },
      ],
    },
    {
      type: 'split',
      title:
        'Framework-flexible and Quarkus-first for new Java cloud-native projects',
      body: [
        'Kumuluz Digital Platform is framework-flexible. It is based on architecture principles, reusable patterns and platform capabilities rather than a single mandatory runtime.',
        'For new Java cloud-native projects, Quarkus is the preferred foundation because it is well suited for Kubernetes deployment, fast startup, efficient resource usage and modern MicroProfile/Jakarta EE compatible development.',
        'Earlier Kumuluz technologies remain part of the Kumuluz history and are maintained where needed for existing environments, but new Kumuluz Digital Platform projects use current cloud-native foundations.',
      ],
      quote:
        'Framework-flexible. Quarkus-first. Built for modern cloud-native enterprise platforms.',
    },
    {
      type: 'kumuluz',
      title: 'Kumuluz products used in this solution',
      body: [
        'Cloud-native Digital Platforms are delivered through several Kumuluz products that each play a distinct role.',
      ],
      items: [
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Engineering foundation for building services, APIs, connectors, MCP-enabled tools, workflows and cloud-native applications.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'API management platform for exposing, securing, monitoring and governing APIs used by applications, partners and AI agents.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities that can be used by applications, workflows and AI agents.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platform that can use approved services, tools, APIs and workflows built on the digital platform foundation.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start',
      intro:
        'Cloud-native platform modernization can start with a focused initiative and evolve into a broader platform foundation.',
      items: [
        {
          title: 'Assess systems and platform needs',
          text: 'We analyze existing applications, integrations, digital channels, APIs, workflows, deployment environments and modernization goals.',
        },
        {
          title: 'Define target architecture',
          text: 'We define service boundaries, APIs, integration patterns, workflow orchestration, deployment model, security and observability.',
        },
        {
          title: 'Identify AI-agent-ready capabilities',
          text: 'We identify which services, APIs or workflows should be prepared for safe AI-agent use.',
        },
        {
          title: 'Select technology foundation',
          text: 'For new Java cloud-native projects, this is typically Quarkus; other compatible enterprise technology requirements can also be supported.',
        },
        {
          title: 'Build platform services and APIs',
          text: 'Core services, APIs, connectors and reusable capabilities are implemented iteratively.',
        },
        {
          title: 'Introduce workflow orchestration',
          text: 'Temporal, Camunda or similar workflow engines are used where deterministic process control is required.',
        },
        {
          title: 'Expose and govern APIs',
          text: 'Kumuluz API can be used to catalog, secure, expose and monitor platform APIs and agent-ready tools.',
        },
        {
          title: 'Operate and scale',
          text: 'The platform evolves with new services, workflows, integrations, AI-agent-ready capabilities and digital products.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz for Cloud-native Digital Platforms',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platform foundation instead of one-off applications',
          text: 'Kumuluz helps organizations build reusable digital foundations instead of isolated project architectures.',
        },
        {
          title: 'AI-agent-ready by design',
          text: 'Services, APIs, connectors and workflows can be designed so AI agents can use them safely.',
        },
        {
          title: 'Workflow-aware architecture',
          text: 'Business-critical processes can be executed through deterministic workflow engines such as Temporal or Camunda.',
        },
        {
          title: 'API-first and integration-ready',
          text: 'The platform exposes business capabilities through reusable APIs and controlled connectors.',
        },
        {
          title: 'Framework-flexible, Quarkus-first',
          text: 'New Java cloud-native projects typically use Quarkus while preserving flexibility for enterprise requirements.',
        },
        {
          title: 'Works with the Kumuluz ecosystem',
          text: 'Kumuluz Digital Platform works with Kumuluz API, Kumuluz Business APIs and KumuluzAI.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Sunesis combines cloud-native engineering, enterprise integration, DevOps, APIs, workflow automation and AgenticAI expertise.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Ready to build a digital platform for applications, workflows and AI agents?',
      body: [
        'Kumuluz helps organizations build cloud-native digital platforms with reusable services, APIs, connectors, workflow orchestration and AI-agent-ready capabilities.',
        'Start with modernization or a new digital initiative and evolve toward a platform foundation that can support long-term digital and AgenticAI transformation.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore Kumuluz Digital Platform',
    },
  ],
}

const sl: SolutionPageContent = {
  seo: {
    title:
      'Cloud-native digitalne platforme | Storitve, API-ji, workflowi in za AI agente pripravljeni temelji',
    description:
      'Zgradite cloud-native digitalne platforme s storitvami, API-ji, konektorji, MCP-omogočenimi orodji, workflowi in za AI agente pripravljenimi temelji s Kumuluz Digital Platform.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Cloud-native digitalne platforme',
    title:
      'Zgradite digitalne platforme, ki podpirajo aplikacije, workflowe in AI agente',
    body: [
      'Sodobne digitalne platforme morajo podpirati več kot le spletne in mobilne aplikacije. Potrebujejo storitve, API-je, integracije, workflowe, partnerske kanale in za AI agente pripravljene zmožnosti.',
      'Kumuluz organizacijam pomaga graditi cloud-native digitalne platforme, ki izpostavljajo ponovno uporabne storitve, povezujejo poslovne sisteme, orkestrirajo deterministične workflowe in pripravljajo poslovne zmožnosti za varno uporabo s strani AI agentov.',
      'S Kumuluz Digital Platform in sorodnimi izdelki lahko organizacije postopoma modernizirajo, gradijo API-first storitvene plasti, uvajajo MCP-omogočena orodja in ustvarjajo cloud-native temelje za dolgoročno digitalno evolucijo.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite Kumuluz Digital Platform',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Digitalne platforme postajajo temelj za podjetja, opolnomočena z AI',
      body: [
        'Digitalne platforme so leta temeljile predvsem na portalih, mobilnih aplikacijah, API-jih in integracijah. Danes morajo podpirati tudi avtomatizacijo, AI agente, workflowe, partnerske ekosisteme in podatkovno vodene storitve v realnem času.',
        'Mnoge organizacije še vedno gradijo digitalne rešitve projekt za projektom. Vsaka pobuda ustvari svoje zaledje, API-je, model uvedbe, integracijske vzorce in operativno postavitev. Sčasoma to ustvari podvojeno delo, nedosledno arhitekturo in sisteme, ki jih je težko razvijati.',
        'Z AgenticAI postane potreba po močnem platformskem temelju še pomembnejša. AI agenti potrebujejo varen dostop do storitev, API-jev, orodij in workflowov. Brez dobro zasnovane plasti digitalne platforme se agenti lahko povežejo neposredno z zalednimi sistemi ali ustvarijo krhke avtomatizacijske poti.',
        'Kumuluz organizacijam pomaga graditi cloud-native digitalne platforme, ki podpirajo tako današnje digitalne aplikacije kot jutrišnje storitve, opolnomočene z AI agenti.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Podvojeni digitalni temelji',
          text: 'Timi za vsak projekt znova gradijo zaledne storitve, API-je, integracije, varnost in vzorce uvedbe.',
        },
        {
          title: 'Zapuščinski sistemi upočasnjujejo inovacije',
          text: 'Pomembne zmožnosti so zaklenjene v monolitnih sistemih, ki jih je težko izpostaviti, ponovno uporabiti ali modernizirati.',
        },
        {
          title: 'Razdrobljeni API-ji in storitve',
          text: 'Brez skupnih platformskih načel postanejo API-ji, storitve in integracije nedosledni in težko obvladljivi.',
        },
        {
          title: 'Avtomatizacija workflowov je nepovezana',
          text: 'Avtomatizacija procesov pogosto stoji ločeno od API-jev, aplikacij in arhitekture digitalne platforme.',
        },
        {
          title: 'AI agenti potrebujejo varne zmožnosti',
          text: 'Agenti potrebujejo nadzorovane storitve, orodja in API-je, ne neposrednega dostopa do zalednih sistemov.',
        },
        {
          title: 'Delovanje postane zapleteno',
          text: 'Digitalne platforme zahtevajo CI/CD, opazljivost, odpornost, avtomatizacijo uvedbe in produkcijsko podporo.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Cloud-native temelj za digitalne in za AI agente pripravljene storitve',
      body: [
        'Kumuluz ponuja rešitveni pristop za gradnjo cloud-native digitalnih platform, ki združujejo modularne storitve, API-je, integracije, workflowe in za AI agente pripravljene zmožnosti.',
        'V središču je Kumuluz Digital Platform, ki zagotavlja inženirski temelj za storitve, API-je, konektorje, MCP-omogočena orodja in deterministične workflowe.',
        'Kumuluz API lahko upravlja in izpostavlja API-je. Kumuluz Business APIs lahko zagotavljajo ponovno uporabne poslovne zmožnosti. KumuluzAI lahko uporablja odobrene storitve in orodja prek vodenega dostopa agentov.',
        'Skupaj ti izdelki organizacijam pomagajo ustvariti arhitekturo digitalne platforme, ki podpira aplikacije, partnerje, workflowe in AI agente.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Zgradite ponovno uporabne digitalne temelje',
          text: 'Ustvarite skupne storitve, API-je, integracijske vzorce in temelje uvedbe za več digitalnih pobud.',
        },
        {
          title: 'Pripravite se na AgenticAI',
          text: 'Zasnujte storitve, API-je in orodja tako, da jih AI agenti lahko varno uporabljajo pod upravljanjem.',
        },
        {
          title: 'Modernizirajte postopoma',
          text: 'Izpostavite zapuščinske zmožnosti prek API-jev, konektorjev in storitvenih plasti, ne da bi vse zamenjali naenkrat.',
        },
        {
          title: 'Povežite aplikacije in workflowe',
          text: 'Uporabite storitve in API-je kot temelj za portale, mobilne aplikacije, partnerske integracije in deterministične workflowe.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Kaj vključuje cloud-native digitalna platforma',
      intro:
        'Sodobna digitalna platforma združuje inženirske temelje, izvajalne vzorce, API-first arhitekturo, pripravljenost na integracije, orkestracijo workflowov in operativni nadzor.',
      items: [
        {
          icon: Cloud,
          title: 'Cloud-native storitve',
          text: 'Storitve, zasnovane za skalabilnost, modularnost, avtomatizacijo uvedbe in operativno odpornost.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Digital Platform'],
        },
        {
          icon: Network,
          title: 'API-first arhitektura',
          text: 'Poslovne in tehnične zmožnosti, izpostavljene prek doslednih, ponovno uporabnih in varnih API-jev.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Digital Platform', 'Kumuluz API'],
        },
        {
          icon: Plug,
          title: 'Konektorji in integracijski adapterji',
          text: 'Nadzorovana integracija z zapuščinskimi sistemi, poslovnimi aplikacijami, zunanjimi storitvami in partnerskimi sistemi.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Digital Platform'],
        },
        {
          icon: Bot,
          title: 'MCP-omogočena orodja in integracije agentov',
          text: 'Storitve in API-ji, pripravljeni za uporabo z AI agenti prek za orodja varne zasnove in MCP-usmerjenih integracijskih vzorcev.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz Digital Platform',
            'Kumuluz API',
            'KumuluzAI Platform',
          ],
        },
        {
          icon: Workflow,
          title: 'Orkestracija workflowov',
          text: 'Deterministično izvajanje procesov s platformami, kot so Temporal, Camunda ali podobni pogoni workflowov.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Digital Platform', 'Kumuluz Business APIs'],
        },
        {
          icon: Boxes,
          title: 'Ponovno uporabne poslovne zmožnosti',
          text: 'Pogoste funkcije, kot so podatki o strankah, naročila, plačila, uvajanje, KYC, primeri in obvestila, izpostavljene kot ponovno uporabni API-ji.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Business APIs', 'Kumuluz API'],
        },
        {
          icon: Activity,
          title: 'DevOps in opazljivost',
          text: 'Avtomatizirana dostava, upravljanje okolij, spremljanje, beleženje, sledenje in produkcijsko delovanje.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Digital Platform'],
        },
        {
          icon: ShieldCheck,
          title: 'Poslovna varnost in identiteta',
          text: 'Avtentikacija, avtorizacija, varnost storitev in integracija s poslovnimi ponudniki identitete.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Digital Platform', 'Kumuluz API'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Pripravite svojo digitalno platformo za AI agente',
      body: [
        'AI agenti postanejo uporabni, ko lahko varno sodelujejo s poslovnimi zmožnostmi. To zahteva dobro zasnovano plast storitev in orodij.',
        'Kumuluz organizacijam pomaga graditi za AI agente pripravljene digitalne platforme z izpostavljanjem izbranih zmožnosti kot nadzorovanih storitev, API-jev, orodij in workflowov.',
        'Namesto da agentom dajejo neposreden dostop do osrednjih sistemov, lahko organizacije zagotovijo za orodja varne API-je, MCP-omogočena orodja, prek prehoda nadzorovan dostop do API-jev in deterministične workflowe.',
      ],
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Za orodja varni API-ji',
          text: 'Zasnujte API-je z jasnimi vhodi, izhodi, validacijo, dovoljenji, idempotentnostjo in sledljivostjo.',
          meta: 'API-ji, Validacija',
        },
        {
          title: 'MCP-omogočena orodja',
          text: 'Izpostavite odobrene storitve in zmožnosti prek MCP-usmerjenih vzorcev za odkrivanje in priklic s strani agentov.',
          meta: 'MCP, Odkrivanje',
        },
        {
          title: 'Nadzorovan dostop do zaledja',
          text: 'Uporabite storitve, konektorje in API-je kot varno mejo med AI agenti in poslovnimi sistemi.',
          meta: 'Dostop, Meja',
        },
        {
          title: 'Za agente pripravljeni workflowi',
          text: 'Naj agenti podpirajo uporabnike in pripravljajo kontekst, medtem ko pogoni workflowov izvajajo procesno kritične korake.',
          meta: 'Workflowi, Agenti',
        },
        {
          title: 'Ponovno uporabne veščine',
          text: 'Zapakirajte ponavljajoče se zmožnosti kot veščine ali storitve, ki jih je mogoče uporabljati med več agenti in aplikacijami.',
          meta: 'Veščine, Ponovna uporaba',
        },
        {
          title: 'Operativna vidnost',
          text: 'Sledite klicem storitev, uporabi API-jev, priklicem agentov, izvajanju workflowov in vedenju sistema.',
          meta: 'Spremljanje, Vidnost',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Deterministični workflowi za poslovno kritične procese',
      body: [
        'AI agenti so močni pri razumevanju namena, pridobivanju znanja in pomoči uporabnikom. A mnogi poslovni procesi zahtevajo deterministično izvajanje.',
        'Cloud-native digitalna platforma mora podpirati določene procesne korake, validacije, odobritve, ponovne poskuse, kompenzacije in revizijske sledi.',
        'Kumuluz organizacijam pomaga uvajati orkestracijo workflowov s Temporal, Camunda ali podobnimi platformami, pri čemer poslovne storitve in API-ji delujejo kot aktivnosti workflowov, servisne naloge ali konektorji.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Dolgotrajni procesi',
          text: 'Podprite poslovne procese, ki segajo prek sistemov, uporabnikov, odobritev in časa.',
        },
        {
          title: 'Človeške odobritve',
          text: 'Dodajte korake človeškega pregleda za občutljiva ali regulirana dejanja.',
        },
        {
          title: 'Ponovni poskusi in kompenzacija',
          text: 'Uvedite odporne procesne vzorce za napake, časovne omejitve in scenarije povrnitve.',
        },
        {
          title: 'Izvajanje na osnovi storitev',
          text: 'Uporabite API-je in storitve kot aktivnosti workflowov ali servisne naloge.',
        },
        {
          title: 'Revizijske sledi',
          text: 'Sledite napredku workflowov, odločitvam, odobritvam in klicem storitev.',
        },
        {
          title: 'Z agenti podprti workflowi',
          text: 'Dovolite AI agentom, da podpirajo interakcijo, medtem ko pogoni workflowov izvajajo kritične korake.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za cloud-native digitalno platformo',
      body: [
        'Cloud-native digitalna platforma povezuje digitalne kanale, storitve, API-je, workflowe, AI agente in poslovne sisteme prek jasnih arhitekturnih plasti.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'Digitalni kanali',
          text: 'Spletne aplikacije, mobilne aplikacije, portali za stranke, partnerski portali, interna orodja in poslovne aplikacije.',
        },
        {
          title: 'AI agenti in asistenti',
          text: 'KumuluzAI agenti ali drugi AgenticAI sistemi, ki uporabljajo odobrene storitve, API-je, orodja in workflowe.',
        },
        {
          title: 'Plast API-jev in orodij',
          text: 'Ponovno uporabni API-ji, MCP-omogočena orodja in za agente klicljive zmožnosti, izpostavljene prek nadzorovanega dostopa.',
        },
        {
          title: 'Storitvena plast',
          text: 'Cloud-native storitve, ki implementirajo poslovno logiko, tehnične zmožnosti, podporo procesom in domensko specifično funkcionalnost.',
        },
        {
          title: 'Plast orkestracije workflowov',
          text: 'Temporal, Camunda ali podobni pogoni workflowov za deterministično izvajanje procesov.',
        },
        {
          title: 'Plast integracijskih konektorjev',
          text: 'Konektorji in adapterji za obstoječe sisteme, podatkovne vire, zunanje storitve in partnerske platforme.',
        },
        {
          title: 'Plast upravljanja API-jev',
          text: 'Kumuluz API za katalog API-jev, razvijalski portal, nadzor dostopa, usmerjanje prehoda, spremljanje in za agente pripravljeno izpostavljanje API-jev.',
        },
        {
          title: 'Poslovni sistemi',
          text: 'ERP, CRM, osrednji sistemi, podatkovne baze, repozitoriji dokumentov, zapuščinske aplikacije in platforme tretjih oseb.',
        },
        {
          title: 'Plast platformskega delovanja',
          text: 'CI/CD, avtomatizacija uvedbe, Kubernetes/OpenShift, konfiguracija, opazljivost, beleženje, sledenje in spremljanje.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite',
      intro:
        'Kumuluz organizacijam pomaga graditi in modernizirati digitalne platforme, ki podpirajo več kanalov, sistemov, workflowov in z AI opolnomočenih primerov uporabe.',
      items: [
        {
          icon: AppWindow,
          title: 'Poslovna digitalna platforma',
          text: 'Skupni temelj za portale za stranke, interna orodja, partnerske sisteme in poslovne aplikacije.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Samopostrežne platforme za stranke',
            'Partnerski portali',
            'Interne poslovne platforme',
            'Večkanalne digitalne platforme',
            'Platforme digitalnih storitev',
            'Poslovne zaledne platforme',
          ],
        },
        {
          icon: Server,
          title: 'API-first zaledna platforma',
          text: 'Modularna zaledna platforma, ki izpostavlja poslovne zmožnosti prek varnih API-jev.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Mobilna zaledja',
            'Zaledja portalov',
            'Partnerska API zaledja',
            'API-ji poslovnih zmožnosti',
            'Vzorci backend-for-frontend',
            'Platforme na osnovi storitev',
          ],
        },
        {
          icon: Cpu,
          title: 'Za AI agente pripravljena storitvena plast',
          text: 'Nadzorovana storitvena plast, ki jo AI agenti lahko varno uporabljajo.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Za agente klicljivi API-ji',
            'MCP-omogočene storitve',
            'Za orodja varne poslovne storitve',
            'AI integracijski adapterji',
            'Storitve workflowov agentov',
            'Nadzorovan dostop do zaledja',
          ],
        },
        {
          icon: Workflow,
          title: 'Platforma za avtomatizacijo workflowov',
          text: 'Deterministični temelj za avtomatizacijo procesov, povezan z API-ji in storitvami.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Workflowi uvajanja',
            'KYC workflowi',
            'Workflowi škodnih zahtevkov',
            'Workflowi upravljanja primerov',
            'Workflowi odobritev',
            'Workflowi storitvenih zahtev',
          ],
        },
        {
          icon: RefreshCw,
          title: 'Platforma za modernizacijo zapuščine',
          text: 'Postopen pristop k modernizaciji okoli obstoječih sistemov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Omogočanje API-jev',
            'Ovojnice zapuščinskih sistemov',
            'Modernizacija z vzorcem strangler',
            'Izločanje mikrostoritev',
            'Modernizacija integracij',
            'Cloud-native migracija',
          ],
        },
        {
          icon: LibraryBig,
          title: 'Platforma ponovno uporabnih zmožnosti',
          text: 'Platforma ponovno uporabnih storitev in API-jev, deljenih med oddelki in digitalnimi produkti.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Storitve za stranke',
            'Storitve za izdelke',
            'Storitve naročil',
            'Storitve plačil',
            'Storitve obvestil',
            'Storitve primerov',
            'Integracijske storitve',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Modernizirajte postopoma, brez motenj osrednjih sistemov',
      body: [
        'Kumuluz podpira postopno modernizacijo. Organizacijam ni treba vsega zamenjati naenkrat.',
        'Namesto tega lahko timi izpostavijo obstoječe zmožnosti prek API-jev, gradijo modularne storitve okoli zapuščinskih sistemov, uvedejo meje workflowov in se postopoma premikajo k cloud-native arhitekturi.',
        'Isti pristop lahko pripravi zapuščinske sisteme za uporabo z AI agenti, tako da izpostavi le odobrene zmožnosti prek za orodja varnih API-jev, konektorjev in workflowov.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Omogočanje API-jev',
          text: 'Izpostavite zmožnosti obstoječih sistemov prek varnih, dokumentiranih API-jev.',
        },
        {
          title: 'Storitvena plast okoli zapuščinskih sistemov',
          text: 'Zgradite modularne storitve, ki ovijajo in razširjajo obstoječe sisteme.',
        },
        {
          title: 'Razvoj konektorjev',
          text: 'Ustvarite nadzorovane adapterje za osrednje sisteme, zunanje storitve in partnerske platforme.',
        },
        {
          title: 'Meje workflowov',
          text: 'Uporabite orkestracijo workflowov za nadzor izvajanja procesov okoli zapuščinskih sistemov.',
        },
        {
          title: 'Za orodja varno izpostavljanje AI',
          text: 'Pripravite izbrane zmožnosti za uporabo z agenti, ne da bi neposredno izpostavili zaledne sisteme.',
        },
        {
          title: 'Cloud-native migracija',
          text: 'Postopoma premikajte komponente proti kontejnerskim in za Kubernetes pripravljenim arhitekturam.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovano za poslovno uvedbo',
      body: [
        'Kumuluz rešitve za cloud-native digitalne platforme so zasnovane za organizacije, ki zahtevajo varno uvedbo, integracijo z obstoječimi sistemi in operativni nadzor.',
        'Rešitve lahko podpirajo oblačna, hibridna, lokalna, Kubernetes in OpenShift okolja, odvisno od poslovnih zahtev.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Oblačna uvedba',
          text: 'Poganjajte digitalne storitve na sodobnih oblačnih platformah z uporabo cloud-native arhitekturnih vzorcev.',
        },
        {
          title: 'Hibridna uvedba',
          text: 'Povežite cloud-native storitve z obstoječimi lokalnimi sistemi in zasebno infrastrukturo.',
        },
        {
          title: 'Lokalna uvedba',
          text: 'Podprite zasebna okolja, kjer podatkovne, varnostne ali regulativne potrebe zahtevajo lokalni nadzor.',
        },
        {
          title: 'Kubernetes in OpenShift',
          text: 'Uporabite kontejnersko uvedbo in prakse poslovnega platformskega inženiringa.',
        },
        {
          title: 'DevOps integracija',
          text: 'Integrirajte se s CI/CD, GitOps, avtomatizacijo infrastrukture in procesi upravljanja izdaj.',
        },
        {
          title: 'Opazljivost',
          text: 'Spremljajte storitve, API-je, workflowe, integracije, klice agentov in vedenje platforme.',
        },
      ],
    },
    {
      type: 'split',
      title:
        'Framework-flexible in Quarkus-first za nove Java cloud-native projekte',
      body: [
        'Kumuluz Digital Platform je prilagodljiva glede ogrodij. Temelji na arhitekturnih načelih, ponovno uporabnih vzorcih in platformskih zmožnostih in ne na enem samem obveznem izvajalnem okolju.',
        'Za nove Java cloud-native projekte je Quarkus prednostni temelj, ker je dobro primeren za uvedbo v Kubernetes, hiter zagon, učinkovito porabo virov in sodoben razvoj, združljiv z MicroProfile/Jakarta EE.',
        'Starejše tehnologije Kumuluz ostajajo del zgodovine Kumuluz in se vzdržujejo, kjer je to potrebno za obstoječa okolja, a novi projekti Kumuluz Digital Platform uporabljajo aktualne cloud-native temelje.',
      ],
      quote:
        'Prilagodljivo glede ogrodij. Quarkus-first. Zgrajeno za sodobne cloud-native poslovne platforme.',
    },
    {
      type: 'kumuluz',
      title: 'Izdelki Kumuluz, uporabljeni v tej rešitvi',
      body: [
        'Cloud-native digitalne platforme se izvajajo prek več izdelkov Kumuluz, od katerih ima vsak svojo vlogo.',
      ],
      items: [
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Inženirski temelj za gradnjo storitev, API-jev, konektorjev, MCP-omogočenih orodij, workflowov in cloud-native aplikacij.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev za izpostavljanje, varovanje, spremljanje in upravljanje API-jev, ki jih uporabljajo aplikacije, partnerji in AI agenti.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Ponovno uporabne poslovne zmožnosti, ki jih lahko uporabljajo aplikacije, workflowi in AI agenti.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platforma, ki lahko uporablja odobrene storitve, orodja, API-je in workflowe, zgrajene na temelju digitalne platforme.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo',
      intro:
        'Modernizacija cloud-native platforme se lahko začne z osredotočeno pobudo in se razvije v širši platformski temelj.',
      items: [
        {
          title: 'Ocenite sisteme in potrebe platforme',
          text: 'Analiziramo obstoječe aplikacije, integracije, digitalne kanale, API-je, workflowe, okolja uvedbe in cilje modernizacije.',
        },
        {
          title: 'Določite ciljno arhitekturo',
          text: 'Določimo meje storitev, API-je, integracijske vzorce, orkestracijo workflowov, model uvedbe, varnost in opazljivost.',
        },
        {
          title: 'Prepoznajte za AI agente pripravljene zmožnosti',
          text: 'Prepoznamo, katere storitve, API-je ali workflowe je treba pripraviti za varno uporabo z AI agenti.',
        },
        {
          title: 'Izberite tehnološki temelj',
          text: 'Za nove Java cloud-native projekte je to običajno Quarkus; podprete je mogoče tudi druge združljive poslovne tehnološke zahteve.',
        },
        {
          title: 'Zgradite platformske storitve in API-je',
          text: 'Osrednje storitve, API-ji, konektorji in ponovno uporabne zmožnosti se implementirajo iterativno.',
        },
        {
          title: 'Uvedite orkestracijo workflowov',
          text: 'Temporal, Camunda ali podobni pogoni workflowov se uporabljajo, kjer je potreben deterministični nadzor procesov.',
        },
        {
          title: 'Izpostavite in upravljajte API-je',
          text: 'Kumuluz API je mogoče uporabiti za katalogizacijo, varovanje, izpostavljanje in spremljanje platformskih API-jev ter za agente pripravljenih orodij.',
        },
        {
          title: 'Upravljajte in skalirajte',
          text: 'Platforma se razvija z novimi storitvami, workflowi, integracijami, za AI agente pripravljenimi zmožnostmi in digitalnimi produkti.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz za cloud-native digitalne platforme',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platformski temelj namesto enkratnih aplikacij',
          text: 'Kumuluz organizacijam pomaga graditi ponovno uporabne digitalne temelje namesto izoliranih projektnih arhitektur.',
        },
        {
          title: 'Za AI agente pripravljeno že v zasnovi',
          text: 'Storitve, API-je, konektorje in workflowe je mogoče zasnovati tako, da jih AI agenti lahko varno uporabljajo.',
        },
        {
          title: 'Arhitektura, zavedajoča se workflowov',
          text: 'Poslovno kritične procese je mogoče izvajati prek determinističnih pogonov workflowov, kot sta Temporal ali Camunda.',
        },
        {
          title: 'API-first in pripravljeno na integracije',
          text: 'Platforma izpostavlja poslovne zmožnosti prek ponovno uporabnih API-jev in nadzorovanih konektorjev.',
        },
        {
          title: 'Prilagodljivo glede ogrodij, Quarkus-first',
          text: 'Novi Java cloud-native projekti običajno uporabljajo Quarkus ob ohranjanju prilagodljivosti za poslovne zahteve.',
        },
        {
          title: 'Deluje z ekosistemom Kumuluz',
          text: 'Kumuluz Digital Platform deluje s Kumuluz API, Kumuluz Business APIs in KumuluzAI.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'Sunesis združuje cloud-native inženiring, poslovno integracijo, DevOps, API-je, avtomatizacijo workflowov in strokovno znanje AgenticAI.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Pripravljeni zgraditi digitalno platformo za aplikacije, workflowe in AI agente?',
      body: [
        'Kumuluz organizacijam pomaga graditi cloud-native digitalne platforme s ponovno uporabnimi storitvami, API-ji, konektorji, orkestracijo workflowov in za AI agente pripravljenimi zmožnostmi.',
        'Začnite z modernizacijo ali novo digitalno pobudo in se razvijte proti platformskemu temelju, ki lahko podpira dolgoročno digitalno in AgenticAI transformacijo.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite Kumuluz Digital Platform',
    },
  ],
}

export const cloudNativeDigitalPlatformsPage: Record<
  LanguageCode,
  SolutionPageContent
> = {
  en,
  sl,
}
