import {
  Activity,
  AppWindow,
  BookMarked,
  Bot,
  Cpu,
  Database,
  GraduationCap,
  KeyRound,
  LayoutGrid,
  MessageSquare,
  Plug,
  Route,
  ScrollText,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Workflow,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { ProductPageContent } from '../../views/products/types'

const en: ProductPageContent = {
  seo: {
    title:
      'KumuluzAI Platform | Enterprise AgenticAI Platform for AI Agents',
    description:
      'KumuluzAI is an enterprise AgenticAI platform for building secure, governed and production-ready AI agents, assistants, RAG solutions and AI-powered business automation.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'KumuluzAI Platform',
    title: 'The AgenticAI platform for secure enterprise automation',
    body: [
      'KumuluzAI helps organizations build, manage and operate secure, governed and production-ready AI agents on a common enterprise platform.',
      'Move beyond isolated chatbots and experiments. KumuluzAI is a platform foundation for AI agents, enterprise knowledge, tool integration, human approvals, model routing, auditability, cost control and centralized governance.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore platform capabilities',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title: 'AI experiments are easy. Enterprise AI platforms are hard.',
      body: [
        'Many organizations start their AI journey with individual assistants, document chatbots or departmental proofs of concept. These can create early value, but they often grow into fragmented solutions that are difficult to secure, govern, integrate and scale.',
        'Each AI initiative may introduce its own model access, knowledge base, prompts, tools, integrations, user permissions, cost structure and audit trail. Over time, this creates another layer of technology silos.',
        'KumuluzAI solves this by providing a common platform foundation for enterprise AI agents and assistants — so organizations can reuse knowledge, tools, policies, integrations and governance across multiple AI use cases.',
      ],
      columns: 3,
      items: [
        {
          title: 'Fragmented AI assistants',
          text: 'Different teams build separate AI solutions with different architectures, vendors, knowledge bases and security models.',
        },
        {
          title: 'Lack of governance',
          text: 'Without a platform, it is difficult to manage who can use which agent, which tools it can access and what actions it can perform.',
        },
        {
          title: 'Uncontrolled knowledge access',
          text: 'AI agents need access to enterprise knowledge, but this must respect permissions, data sensitivity and source traceability.',
        },
        {
          title: 'Hard-to-audit AI decisions',
          text: 'Enterprise AI must be explainable and traceable enough to understand what happened, which sources were used and which tools were called.',
        },
        {
          title: 'Rising AI costs',
          text: 'Without central model routing, budgets and usage control, AI costs can grow unpredictably across teams and departments.',
        },
        {
          title: 'Limited production readiness',
          text: 'AI prototypes often lack lifecycle management, observability, approval workflows, secure deployment and operational control.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'One platform foundation for enterprise AI agents',
      body: [
        'KumuluzAI is an AgenticAI platform for building AI agents, assistants and AI-powered business applications that can operate safely in enterprise environments.',
        'It brings together the core capabilities needed for production AI adoption: agent runtime, orchestration, RAG, enterprise knowledge access, tool integration, model routing, identity, guardrails, human-in-the-loop workflows, auditability, cost control and centralized management.',
        'Instead of building a separate AI stack for every use case, KumuluzAI gives organizations a reusable foundation for multiple agents, departments, business processes and digital channels.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Build once, reuse across use cases',
          text: 'Reuse knowledge sources, tools, policies, prompts, integrations and platform services across many AI agents and assistants.',
        },
        {
          title: 'Govern AI centrally',
          text: 'Manage agents, users, permissions, policies, tools, costs and audit trails from a common platform layer.',
        },
        {
          title: 'Integrate with enterprise systems',
          text: 'Connect agents to APIs, applications, document repositories, databases and business systems under controlled access.',
        },
        {
          title: 'Operate AI in production',
          text: 'Deploy AI agents with observability, approvals, cost monitoring, security controls and lifecycle management.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with KumuluzAI',
      intro:
        'KumuluzAI supports multiple types of enterprise AI use cases — from focused assistants to advanced agentic process automation.',
      items: [
        {
          icon: Bot,
          title: 'Enterprise AI agents',
          text: 'Build AI agents that can understand user intent, retrieve enterprise knowledge, call tools, interact with systems and support business processes.',
          bulletsTitle: 'Examples',
          bullets: [
            'Claims processing support',
            'Internal service desk agents',
            'HR and legal knowledge agents',
            'Compliance support agents',
            'Customer support automation',
            'Operational process assistants',
          ],
        },
        {
          icon: Workflow,
          title: 'Agentic process automation',
          text: 'Automate multi-step business workflows where AI agents coordinate tasks, use tools, retrieve information and involve humans when needed.',
          bulletsTitle: 'Examples',
          bullets: [
            'Document review and routing',
            'Customer onboarding support',
            'Case preparation',
            'Internal approvals',
            'Ticket classification and enrichment',
            'Knowledge-based decision support',
          ],
        },
        {
          icon: Database,
          title: 'RAG and enterprise knowledge solutions',
          text: 'Connect AI assistants and agents to approved enterprise knowledge sources while preserving source traceability, access control and governance.',
          bulletsTitle: 'Examples',
          bullets: [
            'Policy and procedure search',
            'Product knowledge support',
            'Technical documentation assistance',
            'Employee onboarding',
            'Knowledge base modernization',
            'Document-heavy process support',
          ],
        },
        {
          icon: MessageSquare,
          title: 'AI assistants for customers and employees',
          text: 'Deploy AI assistants that help users access information, complete tasks and navigate digital services through a conversational interface.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer-facing support assistants',
            'Internal employee assistants',
            'Digital portal assistants',
            'Service navigation assistants',
            'FAQ and knowledge assistants',
          ],
        },
        {
          icon: AppWindow,
          title: 'AI-enabled enterprise applications',
          text: 'Embed AI capabilities into existing business applications, portals and workflows using platform-managed agents, tools and knowledge sources.',
          bulletsTitle: 'Examples',
          bullets: [
            'AI in customer portals',
            'AI in internal business applications',
            'AI-assisted case management',
            'AI-powered search and recommendations',
            'AI-enhanced digital products',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Core platform capabilities',
      intro:
        'KumuluzAI provides the platform building blocks needed to create, govern and operate AI agents in enterprise environments.',
      items: [
        {
          icon: Cpu,
          title: 'Agent runtime and orchestration',
          text: 'KumuluzAI provides the runtime foundation for AI agents and multi-agent workflows. Agents can reason, retrieve knowledge, use tools, call APIs and support multi-step business tasks.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'AI agent runtime',
            'Multi-step agent workflows',
            'Agent orchestration',
            'Tool-using agents',
            'Task planning and execution',
            'Reusable agent templates',
            'Agent lifecycle management',
          ],
        },
        {
          icon: BookMarked,
          title: 'Enterprise knowledge and RAG',
          text: 'KumuluzAI enables agents to access enterprise knowledge through controlled retrieval-augmented generation patterns. Organizations can connect documents, procedures, policies, knowledge bases and other approved sources while maintaining traceability and access control.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'RAG pipelines',
            'Enterprise knowledge connectors',
            'Document ingestion and indexing',
            'Vector search and semantic retrieval',
            'Source attribution',
            'Permission-aware knowledge access',
            'Knowledge base management',
          ],
        },
        {
          icon: Plug,
          title: 'Tool and system integration',
          text: 'AI agents become truly useful when they can interact with enterprise tools and systems. KumuluzAI enables controlled tool use, API calls and integration with business systems.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Tool registry',
            'API and system integration',
            'MCP-ready tool integration patterns',
            'Function and tool calling',
            'Approval-controlled tool execution',
            'Least-privilege access to tools',
            'Integration with enterprise workflows',
          ],
        },
        {
          icon: Route,
          title: 'Model gateway and routing',
          text: 'KumuluzAI helps organizations manage access to different AI models through a controlled model gateway. This allows teams to use the right model for the right task while maintaining control over cost, providers, data handling and routing policies.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Model provider abstraction',
            'Routing between external and self-hosted models',
            'Model selection policies',
            'Cost and usage tracking',
            'Budget controls',
            'Fallback strategies',
            'Hybrid LLM deployment support',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Security and guardrails',
          text: 'KumuluzAI includes security and guardrail capabilities that help protect enterprise AI interactions and reduce operational risk.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Prompt shielding',
            'Input and output validation',
            'PII and sensitive data handling',
            'Policy-based tool access',
            'Safe execution boundaries',
            'Content moderation patterns',
            'Guardrails for AI actions',
          ],
        },
        {
          icon: KeyRound,
          title: 'Identity and access control',
          text: 'Enterprise AI agents must respect organizational identity, roles and permissions. KumuluzAI supports identity-aware access to agents, knowledge and tools.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Enterprise identity integration',
            'User and role-based access',
            'Agent-level permissions',
            'Tool-level authorization',
            'Knowledge access control',
            'Identity propagation',
            'Audit-ready access history',
          ],
        },
        {
          icon: UserCheck,
          title: 'Human-in-the-loop workflows',
          text: 'Not every AI action should happen automatically. KumuluzAI supports human review, approval and intervention for sensitive decisions or actions.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Approval workflows',
            'Human review checkpoints',
            'Escalation patterns',
            'Manual override',
            'Sensitive action approval',
            'Decision traceability',
            'Business process control',
          ],
        },
        {
          icon: ScrollText,
          title: 'Auditability and traceability',
          text: 'KumuluzAI helps organizations understand what happened in an AI interaction: which user started it, what the agent did, which sources were used and which tools were called.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Agent session history',
            'Tool call logs',
            'Knowledge retrieval traceability',
            'Prompt and response tracking',
            'User and identity traceability',
            'Decision and approval history',
            'Compliance-supporting audit trails',
          ],
        },
        {
          icon: Activity,
          title: 'Observability and cost control',
          text: 'KumuluzAI gives teams visibility into AI usage, performance, costs and operational behavior.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Usage monitoring',
            'Cost tracking',
            'Token and model usage visibility',
            'Agent performance metrics',
            'Error and failure visibility',
            'Operational dashboards',
            'Continuous improvement feedback loops',
          ],
        },
        {
          icon: LayoutGrid,
          title: 'Management console',
          text: 'KumuluzAI provides centralized management for agents, tools, knowledge sources, prompts, policies, approvals, usage and audit trails.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Agent management',
            'Tool management',
            'Knowledge source management',
            'Prompt and configuration management',
            'Policy configuration',
            'Approval management',
            'Audit and usage overview',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'A platform architecture for production Agentic AI',
      body: [
        'KumuluzAI is designed as a platform layer between users, AI models, enterprise systems and operational governance.',
        'It allows organizations to manage AI agents centrally while integrating with existing applications, data sources, identity providers, APIs and deployment environments.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'User and channel layer',
          text: 'Connect AI agents to internal portals, customer channels, business applications, chat interfaces and digital services.',
        },
        {
          title: 'Agent orchestration layer',
          text: 'Manage agent behavior, workflows, task execution, tool use, memory patterns and process-specific logic.',
        },
        {
          title: 'Knowledge layer',
          text: 'Connect approved enterprise knowledge sources through RAG, indexing, semantic search and permission-aware retrieval.',
        },
        {
          title: 'Tool integration layer',
          text: 'Expose APIs, tools and enterprise systems to agents through controlled, auditable and policy-based access.',
        },
        {
          title: 'Model gateway layer',
          text: 'Route AI requests to selected models, providers or self-hosted deployments based on policies, cost, performance or data requirements.',
        },
        {
          title: 'Governance and control layer',
          text: 'Apply identity, authorization, guardrails, human approvals, auditability, observability and cost control across the platform.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise deployment',
      body: [
        'KumuluzAI is built for organizations that need control over data, identity, security, deployment and operations.',
        'The platform can support deployment models where AI capabilities run in dedicated customer environments, integrate with enterprise systems and follow organizational governance requirements.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Single-tenant deployment',
          text: 'Deploy KumuluzAI in a dedicated environment to support isolation, data residency and enterprise control.',
        },
        {
          title: 'Cloud, hybrid or on-premise',
          text: 'Support deployment across cloud platforms, private infrastructure and Kubernetes-based enterprise environments.',
        },
        {
          title: 'Kubernetes and OpenShift-ready',
          text: 'Run KumuluzAI in modern containerized environments aligned with enterprise platform engineering practices.',
        },
        {
          title: 'Model flexibility',
          text: 'Use external model providers, private model deployments or hybrid model routing depending on business, cost and data requirements.',
        },
        {
          title: 'Enterprise integrations',
          text: 'Integrate with identity providers, APIs, document repositories, databases, business applications and operational systems.',
        },
        {
          title: 'Operational readiness',
          text: 'Support monitoring, auditability, usage visibility, lifecycle management and production-grade operations.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Governance and control from the beginning',
      body: [
        'Enterprise AI requires more than model access. Organizations need to know who used an AI agent, what it did, which data it accessed, which tools it called and whether sensitive actions were approved.',
        'KumuluzAI is designed to make governance part of the platform foundation — not an afterthought added after pilots become production systems.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Identity-aware AI',
          text: 'Agents operate with user context, roles and permissions instead of generic access to everything.',
        },
        {
          title: 'Controlled tool use',
          text: 'Agents can only use approved tools and APIs under defined policies and access rules.',
        },
        {
          title: 'Permission-aware knowledge',
          text: 'Knowledge retrieval respects organizational access control and data sensitivity.',
        },
        {
          title: 'Human approvals',
          text: 'Sensitive actions can require human review before execution.',
        },
        {
          title: 'Audit trails',
          text: 'AI interactions, retrievals, tool calls and approvals can be traced for review and compliance support.',
        },
        {
          title: 'Cost and usage governance',
          text: 'AI consumption can be monitored, attributed and controlled across agents, teams and use cases.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'AI assistants and knowledge accelerators',
      intro:
        'KumuluzAI supports advanced Agentic AI platforms, but it can also power focused AI assistant solutions for organizations that want to start with practical, high-value use cases. These solutions can be deployed as standalone AI assistant implementations or as part of a broader KumuluzAI platform roadmap.',
      items: [
        {
          icon: Sparkles,
          wide: true,
          title: 'AI Smart Assistant',
          text: 'AI Smart Assistant helps users access information, answer questions, navigate digital services and complete simple tasks through a conversational interface. It can be used in customer-facing channels, employee portals, support environments or digital products where users need fast access to relevant information. Best for customer support, employee assistance, digital service navigation, internal helpdesk support, FAQ automation and first AI use cases.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Conversational interface',
            'Enterprise knowledge access',
            'Natural language search',
            'Contextual answers',
            'Integration with digital services',
            'Optional handover to human support',
          ],
        },
        {
          icon: GraduationCap,
          wide: true,
          title: 'AI Knowledge Mentor',
          text: 'AI Knowledge Mentor helps organizations make internal documentation, procedures, policies and learning materials easier to access and understand. It is especially useful in document-heavy environments where employees need guidance, onboarding support or fast access to organizational knowledge. Best for employee onboarding, knowledge management, training and enablement, internal procedures, policy guidance and document-heavy business processes.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Knowledge search',
            'Document understanding',
            'Guided answers',
            'Source-aware responses',
            'Learning and onboarding support',
            'Internal knowledge assistance',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where KumuluzAI fits',
      body: [
        'KumuluzAI is designed for organizations where AI must work with real processes, enterprise knowledge, existing systems, security requirements and operational control.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Insurance',
          text: 'Claims support, policy knowledge, process automation, customer assistance and internal knowledge agents.',
        },
        {
          title: 'Banking and financial services',
          text: 'Customer support, KYC assistance, compliance knowledge, internal service agents and process automation.',
        },
        {
          title: 'Public sector',
          text: 'Document-heavy workflows, citizen support, case preparation, internal knowledge access and administrative assistance.',
        },
        {
          title: 'Energy and utilities',
          text: 'Operational knowledge, customer service, field support, regulatory documentation and process assistance.',
        },
        {
          title: 'Manufacturing and enterprise services',
          text: 'Product knowledge, service support, partner assistance, internal operations and business process automation.',
        },
        {
          title: 'Technology and digital platforms',
          text: 'AI-enabled applications, developer assistants, platform automation and AI-powered digital products.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why KumuluzAI',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platform, not isolated AI projects',
          text: 'KumuluzAI helps organizations avoid fragmented AI silos by providing a shared foundation for agents, knowledge, tools, governance and operations.',
        },
        {
          title: 'Built for enterprise environments',
          text: 'Security, identity, permissions, auditability, human approvals, deployment flexibility and cost control are designed into the platform.',
        },
        {
          title: 'Agentic automation beyond chat',
          text: 'KumuluzAI supports AI agents that can use knowledge, call tools, interact with systems and support business workflows — not only answer questions.',
        },
        {
          title: 'Flexible model strategy',
          text: 'Organizations can use external providers, private models or hybrid model routing depending on task, cost, performance and data requirements.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'KumuluzAI is developed by Sunesis, combining platform product development with enterprise software engineering, integration, DevOps and AI delivery experience.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with KumuluzAI',
      intro:
        'KumuluzAI can be introduced gradually. Organizations can start with a focused assistant or knowledge use case and evolve toward a broader AgenticAI platform over time.',
      items: [
        {
          title: 'Identify high-value AI use cases',
          text: 'We help identify processes, knowledge areas and user journeys where AI agents can create measurable value.',
        },
        {
          title: 'Connect enterprise knowledge',
          text: 'Approved documents, procedures, knowledge bases and data sources are connected through controlled retrieval and access patterns.',
        },
        {
          title: 'Define agents, tools and guardrails',
          text: 'Agents are configured with goals, tools, permissions, prompts, safety controls and escalation rules.',
        },
        {
          title: 'Integrate with enterprise systems',
          text: 'KumuluzAI connects with APIs, business applications, identity providers, document repositories and operational systems.',
        },
        {
          title: 'Deploy and govern',
          text: 'The solution is deployed with monitoring, auditability, approvals, access control and usage visibility.',
        },
        {
          title: 'Scale across use cases',
          text: 'Additional agents, tools, knowledge sources and workflows can be added to the same platform foundation.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Part of the Kumuluz platform family',
      body: [
        'KumuluzAI is part of the broader Kumuluz product family for enterprise digital platforms, APIs, business APIs and crowdsensing.',
        'Together, Kumuluz products help organizations build secure, integrated and reusable digital capabilities across AI, APIs, cloud-native systems and data-driven services.',
      ],
      items: [
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Cloud-native foundation for microservice and API-based digital solutions.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'API management and API economy platform for exposing, securing and governing APIs.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities for faster digital product development.',
        },
        {
          label: 'Data',
          title: 'Kumuluz Crowdsensing',
          text: 'Distributed data collection and crowdsensing platform for smart services and data-driven decision-making.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Ready to move from AI experiments to an enterprise AgenticAI platform?',
      body: [
        'KumuluzAI helps organizations build secure, governed and production-ready AI agents that connect to enterprise knowledge, tools, systems and workflows.',
        'Start with a focused assistant or build a broader platform foundation for enterprise AI automation.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Contact us',
    },
  ],
}

const sl: ProductPageContent = {
  seo: {
    title: 'KumuluzAI Platform | Poslovna AgenticAI platforma za AI agente',
    description:
      'KumuluzAI je poslovna AgenticAI platforma za gradnjo varnih, nadzorovanih in produkcijsko pripravljenih AI agentov, asistentov, RAG rešitev in AI-podprte poslovne avtomatizacije.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'KumuluzAI Platform',
    title: 'AgenticAI platforma za varno poslovno avtomatizacijo',
    body: [
      'KumuluzAI organizacijam pomaga graditi, upravljati in voditi varne, nadzorovane in produkcijsko pripravljene AI agente na skupni poslovni platformi.',
      'Presezite izolirane klepetalne robote in eksperimente. KumuluzAI je platformski temelj za AI agente, poslovno znanje, integracijo orodij, človeške odobritve, usmerjanje modelov, sledljivost, nadzor stroškov in centralizirano upravljanje.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite zmožnosti platforme',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title: 'AI eksperimenti so enostavni. Poslovne AI platforme so zahtevne.',
      body: [
        'Mnoge organizacije svojo AI pot začnejo s posameznimi asistenti, dokumentnimi klepetalnimi roboti ali oddelčnimi dokazi koncepta. Ti lahko ustvarijo zgodnjo vrednost, vendar pogosto prerastejo v razdrobljene rešitve, ki jih je težko varovati, upravljati, integrirati in skalirati.',
        'Vsaka AI pobuda lahko uvede lasten dostop do modelov, bazo znanja, pozive, orodja, integracije, uporabniška dovoljenja, strukturo stroškov in revizijsko sled. Sčasoma to ustvari novo plast tehnoloških silosov.',
        'KumuluzAI to rešuje z zagotavljanjem skupnega platformskega temelja za poslovne AI agente in asistente — tako lahko organizacije ponovno uporabijo znanje, orodja, politike, integracije in upravljanje med več AI primeri uporabe.',
      ],
      columns: 3,
      items: [
        {
          title: 'Razdrobljeni AI asistenti',
          text: 'Različne ekipe gradijo ločene AI rešitve z različnimi arhitekturami, ponudniki, bazami znanja in varnostnimi modeli.',
        },
        {
          title: 'Pomanjkanje upravljanja',
          text: 'Brez platforme je težko upravljati, kdo lahko uporablja katerega agenta, do katerih orodij lahko dostopa in katera dejanja lahko izvaja.',
        },
        {
          title: 'Nenadzorovan dostop do znanja',
          text: 'AI agenti potrebujejo dostop do poslovnega znanja, vendar mora to spoštovati dovoljenja, občutljivost podatkov in sledljivost virov.',
        },
        {
          title: 'Težko revidljive AI odločitve',
          text: 'Poslovni AI mora biti dovolj razložljiv in sledljiv, da je mogoče razumeti, kaj se je zgodilo, kateri viri so bili uporabljeni in katera orodja so bila klicana.',
        },
        {
          title: 'Naraščajoči stroški AI',
          text: 'Brez centralnega usmerjanja modelov, proračunov in nadzora porabe lahko stroški AI nepredvidljivo rastejo med ekipami in oddelki.',
        },
        {
          title: 'Omejena produkcijska pripravljenost',
          text: 'AI prototipi pogosto nimajo upravljanja življenjskega cikla, opazljivosti, odobritvenih workflowov, varnega nameščanja in operativnega nadzora.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'En platformski temelj za poslovne AI agente',
      body: [
        'KumuluzAI je AgenticAI platforma za gradnjo AI agentov, asistentov in AI-podprtih poslovnih aplikacij, ki lahko varno delujejo v poslovnih okoljih.',
        'Združuje osrednje zmožnosti, potrebne za produkcijsko uvedbo AI: agentni runtime, orkestracijo, RAG, dostop do poslovnega znanja, integracijo orodij, usmerjanje modelov, identiteto, varovala, workflowe s human-in-the-loop, sledljivost, nadzor stroškov in centralizirano upravljanje.',
        'Namesto gradnje ločenega AI sklada za vsak primer uporabe KumuluzAI organizacijam ponuja ponovno uporaben temelj za več agentov, oddelkov, poslovnih procesov in digitalnih kanalov.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Zgradite enkrat, uporabite v več primerih',
          text: 'Ponovno uporabite vire znanja, orodja, politike, pozive, integracije in platformske storitve med številnimi AI agenti in asistenti.',
        },
        {
          title: 'Upravljajte AI centralno',
          text: 'Upravljajte agente, uporabnike, dovoljenja, politike, orodja, stroške in revizijske sledi iz skupne platformske plasti.',
        },
        {
          title: 'Integrirajte se s poslovnimi sistemi',
          text: 'Povežite agente z API-ji, aplikacijami, dokumentnimi repozitoriji, podatkovnimi bazami in poslovnimi sistemi pod nadzorovanim dostopom.',
        },
        {
          title: 'Vodite AI v produkciji',
          text: 'Namestite AI agente z opazljivostjo, odobritvami, spremljanjem stroškov, varnostnimi kontrolami in upravljanjem življenjskega cikla.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite s KumuluzAI',
      intro:
        'KumuluzAI podpira več vrst poslovnih AI primerov uporabe — od osredotočenih asistentov do napredne agentne avtomatizacije procesov.',
      items: [
        {
          icon: Bot,
          title: 'Poslovni AI agenti',
          text: 'Zgradite AI agente, ki lahko razumejo namen uporabnika, pridobivajo poslovno znanje, kličejo orodja, komunicirajo s sistemi in podpirajo poslovne procese.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Podpora obravnavi škodnih primerov',
            'Agenti internega servisnega centra',
            'Agenti znanja za HR in pravo',
            'Agenti za podporo skladnosti',
            'Avtomatizacija podpore strankam',
            'Asistenti operativnih procesov',
          ],
        },
        {
          icon: Workflow,
          title: 'Agentna avtomatizacija procesov',
          text: 'Avtomatizirajte večkorakovne poslovne workflowe, kjer AI agenti usklajujejo naloge, uporabljajo orodja, pridobivajo informacije in po potrebi vključijo ljudi.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Pregled in usmerjanje dokumentov',
            'Podpora uvajanju strank',
            'Priprava primerov',
            'Interne odobritve',
            'Klasifikacija in obogatitev zahtevkov',
            'Podpora odločanju na osnovi znanja',
          ],
        },
        {
          icon: Database,
          title: 'RAG in rešitve poslovnega znanja',
          text: 'Povežite AI asistente in agente z odobrenimi viri poslovnega znanja ob ohranjanju sledljivosti virov, nadzora dostopa in upravljanja.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Iskanje politik in postopkov',
            'Podpora znanju o izdelkih',
            'Pomoč pri tehnični dokumentaciji',
            'Uvajanje zaposlenih',
            'Posodobitev baze znanja',
            'Podpora procesom z veliko dokumenti',
          ],
        },
        {
          icon: MessageSquare,
          title: 'AI asistenti za stranke in zaposlene',
          text: 'Namestite AI asistente, ki uporabnikom pomagajo dostopati do informacij, opravljati naloge in se gibati po digitalnih storitvah prek pogovornega vmesnika.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Asistenti za podporo strankam',
            'Interni asistenti za zaposlene',
            'Asistenti digitalnih portalov',
            'Asistenti za navigacijo po storitvah',
            'Asistenti za FAQ in znanje',
          ],
        },
        {
          icon: AppWindow,
          title: 'AI-podprte poslovne aplikacije',
          text: 'Vgradite AI zmožnosti v obstoječe poslovne aplikacije, portale in workflowe z agenti, orodji in viri znanja, ki jih upravlja platforma.',
          bulletsTitle: 'Primeri',
          bullets: [
            'AI v portalih za stranke',
            'AI v internih poslovnih aplikacijah',
            'AI-podprto vodenje primerov',
            'AI-podprto iskanje in priporočila',
            'AI-izboljšani digitalni izdelki',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Osrednje zmožnosti platforme',
      intro:
        'KumuluzAI zagotavlja platformske gradnike, potrebne za ustvarjanje, upravljanje in vodenje AI agentov v poslovnih okoljih.',
      items: [
        {
          icon: Cpu,
          title: 'Agentni runtime in orkestracija',
          text: 'KumuluzAI zagotavlja runtime temelj za AI agente in večagentne workflowe. Agenti lahko sklepajo, pridobivajo znanje, uporabljajo orodja, kličejo API-je in podpirajo večkorakovne poslovne naloge.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Runtime za AI agente',
            'Večkorakovni workflowi agentov',
            'Orkestracija agentov',
            'Agenti, ki uporabljajo orodja',
            'Načrtovanje in izvajanje nalog',
            'Ponovno uporabne predloge agentov',
            'Upravljanje življenjskega cikla agentov',
          ],
        },
        {
          icon: BookMarked,
          title: 'Poslovno znanje in RAG',
          text: 'KumuluzAI agentom omogoča dostop do poslovnega znanja prek nadzorovanih vzorcev generiranja z razširjenim pridobivanjem (RAG). Organizacije lahko povežejo dokumente, postopke, politike, baze znanja in druge odobrene vire ob ohranjanju sledljivosti in nadzora dostopa.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'RAG cevovodi',
            'Konektorji poslovnega znanja',
            'Zajem in indeksiranje dokumentov',
            'Vektorsko iskanje in semantično pridobivanje',
            'Pripisovanje virov',
            'Dostop do znanja z upoštevanjem dovoljenj',
            'Upravljanje baze znanja',
          ],
        },
        {
          icon: Plug,
          title: 'Integracija orodij in sistemov',
          text: 'AI agenti postanejo resnično uporabni, ko lahko komunicirajo s poslovnimi orodji in sistemi. KumuluzAI omogoča nadzorovano uporabo orodij, klice API-jev in integracijo s poslovnimi sistemi.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Register orodij',
            'Integracija API-jev in sistemov',
            'MCP-pripravljeni vzorci integracije orodij',
            'Klicanje funkcij in orodij',
            'Z odobritvami nadzorovano izvajanje orodij',
            'Dostop do orodij po načelu najmanjših privilegijev',
            'Integracija s poslovnimi workflowi',
          ],
        },
        {
          icon: Route,
          title: 'Prehod in usmerjanje modelov',
          text: 'KumuluzAI organizacijam pomaga upravljati dostop do različnih AI modelov prek nadzorovanega prehoda modelov. To ekipam omogoča uporabo pravega modela za pravo nalogo ob ohranjanju nadzora nad stroški, ponudniki, ravnanjem s podatki in politikami usmerjanja.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Abstrakcija ponudnikov modelov',
            'Usmerjanje med zunanjimi in lastno gostovanimi modeli',
            'Politike izbire modelov',
            'Sledenje stroškom in porabi',
            'Nadzor proračunov',
            'Strategije zasilnega preklopa',
            'Podpora hibridni uvedbi LLM',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Varnost in varovala',
          text: 'KumuluzAI vključuje varnostne zmožnosti in varovala, ki pomagajo zaščititi poslovne AI interakcije in zmanjšati operativno tveganje.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Zaščita pozivov',
            'Validacija vhodnih in izhodnih podatkov',
            'Ravnanje z osebnimi in občutljivimi podatki',
            'Dostop do orodij na osnovi politik',
            'Varne meje izvajanja',
            'Vzorci moderiranja vsebine',
            'Varovala za dejanja AI',
          ],
        },
        {
          icon: KeyRound,
          title: 'Identiteta in nadzor dostopa',
          text: 'Poslovni AI agenti morajo spoštovati organizacijsko identiteto, vloge in dovoljenja. KumuluzAI podpira dostop do agentov, znanja in orodij z upoštevanjem identitete.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Integracija poslovne identitete',
            'Dostop na osnovi uporabnikov in vlog',
            'Dovoljenja na ravni agenta',
            'Avtorizacija na ravni orodja',
            'Nadzor dostopa do znanja',
            'Razširjanje identitete',
            'Revizijsko pripravljena zgodovina dostopa',
          ],
        },
        {
          icon: UserCheck,
          title: 'Workflowi s human-in-the-loop',
          text: 'Vsako dejanje AI se ne sme zgoditi samodejno. KumuluzAI podpira človeški pregled, odobritev in posredovanje pri občutljivih odločitvah ali dejanjih.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Odobritveni workflowi',
            'Kontrolne točke človeškega pregleda',
            'Vzorci eskalacije',
            'Ročna prekinitev',
            'Odobritev občutljivih dejanj',
            'Sledljivost odločitev',
            'Nadzor poslovnih procesov',
          ],
        },
        {
          icon: ScrollText,
          title: 'Revidljivost in sledljivost',
          text: 'KumuluzAI organizacijam pomaga razumeti, kaj se je zgodilo v AI interakciji: kateri uporabnik jo je sprožil, kaj je agent storil, kateri viri so bili uporabljeni in katera orodja so bila klicana.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Zgodovina sej agentov',
            'Dnevniki klicev orodij',
            'Sledljivost pridobivanja znanja',
            'Sledenje pozivom in odgovorom',
            'Sledljivost uporabnikov in identitet',
            'Zgodovina odločitev in odobritev',
            'Revizijske sledi za podporo skladnosti',
          ],
        },
        {
          icon: Activity,
          title: 'Opazljivost in nadzor stroškov',
          text: 'KumuluzAI ekipam daje vpogled v uporabo AI, zmogljivost, stroške in operativno vedenje.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Spremljanje uporabe',
            'Sledenje stroškom',
            'Vidnost porabe žetonov in modelov',
            'Metrike zmogljivosti agentov',
            'Vidnost napak in odpovedi',
            'Operativne nadzorne plošče',
            'Povratne zanke za nenehno izboljševanje',
          ],
        },
        {
          icon: LayoutGrid,
          title: 'Upravljalska konzola',
          text: 'KumuluzAI zagotavlja centralizirano upravljanje agentov, orodij, virov znanja, pozivov, politik, odobritev, uporabe in revizijskih sledi.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Upravljanje agentov',
            'Upravljanje orodij',
            'Upravljanje virov znanja',
            'Upravljanje pozivov in konfiguracij',
            'Konfiguracija politik',
            'Upravljanje odobritev',
            'Pregled revizij in uporabe',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Platformska arhitektura za produkcijski Agentic AI',
      body: [
        'KumuluzAI je zasnovan kot platformska plast med uporabniki, AI modeli, poslovnimi sistemi in operativnim upravljanjem.',
        'Organizacijam omogoča centralno upravljanje AI agentov ob integraciji z obstoječimi aplikacijami, viri podatkov, ponudniki identitete, API-ji in okolji za nameščanje.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Plast uporabnikov in kanalov',
          text: 'Povežite AI agente z internimi portali, kanali za stranke, poslovnimi aplikacijami, klepetalnimi vmesniki in digitalnimi storitvami.',
        },
        {
          title: 'Plast orkestracije agentov',
          text: 'Upravljajte vedenje agentov, workflowe, izvajanje nalog, uporabo orodij, vzorce pomnjenja in procesno specifično logiko.',
        },
        {
          title: 'Plast znanja',
          text: 'Povežite odobrene vire poslovnega znanja prek RAG, indeksiranja, semantičnega iskanja in pridobivanja z upoštevanjem dovoljenj.',
        },
        {
          title: 'Plast integracije orodij',
          text: 'Izpostavite API-je, orodja in poslovne sisteme agentom prek nadzorovanega, revidljivega in na politikah temelječega dostopa.',
        },
        {
          title: 'Plast prehoda modelov',
          text: 'Usmerjajte AI zahteve k izbranim modelom, ponudnikom ali lastno gostovanim uvedbam glede na politike, stroške, zmogljivost ali podatkovne zahteve.',
        },
        {
          title: 'Plast upravljanja in nadzora',
          text: 'Uveljavite identiteto, avtorizacijo, varovala, človeške odobritve, revidljivost, opazljivost in nadzor stroškov po vsej platformi.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovana za poslovno uvedbo',
      body: [
        'KumuluzAI je zgrajena za organizacije, ki potrebujejo nadzor nad podatki, identiteto, varnostjo, nameščanjem in operativnim delovanjem.',
        'Platforma lahko podpira modele uvedbe, kjer AI zmožnosti delujejo v namenskih okoljih strank, se integrirajo s poslovnimi sistemi in sledijo organizacijskim zahtevam upravljanja.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Enouporabniška uvedba',
          text: 'Namestite KumuluzAI v namensko okolje za podporo izolaciji, rezidenčnosti podatkov in poslovnemu nadzoru.',
        },
        {
          title: 'Oblak, hibrid ali lokalno',
          text: 'Podprite uvedbo v oblačnih platformah, zasebni infrastrukturi in poslovnih okoljih, temelječih na Kubernetesu.',
        },
        {
          title: 'Pripravljena za Kubernetes in OpenShift',
          text: 'Poganjajte KumuluzAI v sodobnih vsebniških okoljih, usklajenih s poslovnimi praksami platformskega inženiringa.',
        },
        {
          title: 'Prilagodljivost modelov',
          text: 'Uporabite zunanje ponudnike modelov, zasebne uvedbe modelov ali hibridno usmerjanje modelov glede na poslovne, stroškovne in podatkovne zahteve.',
        },
        {
          title: 'Poslovne integracije',
          text: 'Integrirajte se s ponudniki identitete, API-ji, dokumentnimi repozitoriji, podatkovnimi bazami, poslovnimi aplikacijami in operativnimi sistemi.',
        },
        {
          title: 'Operativna pripravljenost',
          text: 'Podprite spremljanje, revidljivost, vidnost uporabe, upravljanje življenjskega cikla in produkcijsko delovanje.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Upravljanje in nadzor od vsega začetka',
      body: [
        'Poslovni AI zahteva več kot le dostop do modelov. Organizacije morajo vedeti, kdo je uporabil AI agenta, kaj je storil, do katerih podatkov je dostopal, katera orodja je klical in ali so bila občutljiva dejanja odobrena.',
        'KumuluzAI je zasnovan tako, da je upravljanje del platformskega temelja — in ne naknadna misel, dodana potem, ko pilotni projekti postanejo produkcijski sistemi.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'AI z upoštevanjem identitete',
          text: 'Agenti delujejo z uporabniškim kontekstom, vlogami in dovoljenji namesto z generičnim dostopom do vsega.',
        },
        {
          title: 'Nadzorovana uporaba orodij',
          text: 'Agenti lahko uporabljajo samo odobrena orodja in API-je v skladu z določenimi politikami in pravili dostopa.',
        },
        {
          title: 'Znanje z upoštevanjem dovoljenj',
          text: 'Pridobivanje znanja spoštuje organizacijski nadzor dostopa in občutljivost podatkov.',
        },
        {
          title: 'Človeške odobritve',
          text: 'Občutljiva dejanja lahko pred izvedbo zahtevajo človeški pregled.',
        },
        {
          title: 'Revizijske sledi',
          text: 'AI interakcije, pridobivanja, klice orodij in odobritve je mogoče slediti za pregled in podporo skladnosti.',
        },
        {
          title: 'Upravljanje stroškov in porabe',
          text: 'Porabo AI je mogoče spremljati, pripisovati in nadzorovati med agenti, ekipami in primeri uporabe.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'AI asistenti in pospeševalniki znanja',
      intro:
        'KumuluzAI podpira napredne Agentic AI platforme, lahko pa poganja tudi osredotočene rešitve AI asistentov za organizacije, ki želijo začeti s praktičnimi primeri uporabe visoke vrednosti. Te rešitve je mogoče namestiti kot samostojne implementacije AI asistentov ali kot del širšega načrta platforme KumuluzAI.',
      items: [
        {
          icon: Sparkles,
          wide: true,
          title: 'AI Smart Assistant',
          text: 'AI Smart Assistant uporabnikom pomaga dostopati do informacij, odgovarjati na vprašanja, se gibati po digitalnih storitvah in opravljati preproste naloge prek pogovornega vmesnika. Uporablja se lahko v kanalih za stranke, portalih za zaposlene, podpornih okoljih ali digitalnih izdelkih, kjer uporabniki potrebujejo hiter dostop do ustreznih informacij. Najprimernejši za podporo strankam, pomoč zaposlenim, navigacijo po digitalnih storitvah, interno podporo uporabnikom, avtomatizacijo FAQ in prve AI primere uporabe.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Pogovorni vmesnik',
            'Dostop do poslovnega znanja',
            'Iskanje v naravnem jeziku',
            'Kontekstualni odgovori',
            'Integracija z digitalnimi storitvami',
            'Izbirna predaja človeški podpori',
          ],
        },
        {
          icon: GraduationCap,
          wide: true,
          title: 'AI Knowledge Mentor',
          text: 'AI Knowledge Mentor organizacijam pomaga, da postanejo interna dokumentacija, postopki, politike in učna gradiva lažje dostopni in razumljivi. Posebej koristen je v okoljih z veliko dokumenti, kjer zaposleni potrebujejo usmeritve, podporo pri uvajanju ali hiter dostop do organizacijskega znanja. Najprimernejši za uvajanje zaposlenih, upravljanje znanja, usposabljanje in opolnomočenje, interne postopke, usmeritve glede politik in poslovne procese z veliko dokumenti.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Iskanje znanja',
            'Razumevanje dokumentov',
            'Vodeni odgovori',
            'Odgovori z upoštevanjem virov',
            'Podpora učenju in uvajanju',
            'Pomoč pri internem znanju',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kam sodi KumuluzAI',
      body: [
        'KumuluzAI je zasnovan za organizacije, kjer mora AI delovati z resničnimi procesi, poslovnim znanjem, obstoječimi sistemi, varnostnimi zahtevami in operativnim nadzorom.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Zavarovalništvo',
          text: 'Podpora škodnim primerom, znanje o policah, avtomatizacija procesov, pomoč strankam in interni agenti znanja.',
        },
        {
          title: 'Bančništvo in finančne storitve',
          text: 'Podpora strankam, pomoč pri KYC, znanje o skladnosti, interni servisni agenti in avtomatizacija procesov.',
        },
        {
          title: 'Javni sektor',
          text: 'Workflowi z veliko dokumenti, podpora občanom, priprava primerov, interni dostop do znanja in administrativna pomoč.',
        },
        {
          title: 'Energetika in komunala',
          text: 'Operativno znanje, storitve za stranke, terenska podpora, regulatorna dokumentacija in pomoč pri procesih.',
        },
        {
          title: 'Proizvodnja in poslovne storitve',
          text: 'Znanje o izdelkih, storitvena podpora, pomoč partnerjem, interno delovanje in avtomatizacija poslovnih procesov.',
        },
        {
          title: 'Tehnologija in digitalne platforme',
          text: 'AI-podprte aplikacije, asistenti za razvijalce, avtomatizacija platform in AI-podprti digitalni izdelki.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj KumuluzAI',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platforma, ne izolirani AI projekti',
          text: 'KumuluzAI organizacijam pomaga preprečiti razdrobljene AI silose z zagotavljanjem skupnega temelja za agente, znanje, orodja, upravljanje in delovanje.',
        },
        {
          title: 'Zgrajena za poslovna okolja',
          text: 'Varnost, identiteta, dovoljenja, revidljivost, človeške odobritve, prilagodljivost uvedbe in nadzor stroškov so vgrajeni v platformo.',
        },
        {
          title: 'Agentna avtomatizacija onkraj klepeta',
          text: 'KumuluzAI podpira AI agente, ki lahko uporabljajo znanje, kličejo orodja, komunicirajo s sistemi in podpirajo poslovne workflowe — ne le odgovarjajo na vprašanja.',
        },
        {
          title: 'Prilagodljiva strategija modelov',
          text: 'Organizacije lahko uporabljajo zunanje ponudnike, zasebne modele ali hibridno usmerjanje modelov glede na nalogo, stroške, zmogljivost in podatkovne zahteve.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'KumuluzAI razvija Sunesis, ki združuje razvoj platformskih izdelkov s poslovnim programskim inženiringom, integracijo, DevOps in izkušnjami dostave AI.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo s KumuluzAI',
      intro:
        'KumuluzAI je mogoče uvajati postopoma. Organizacije lahko začnejo z osredotočenim asistentom ali primerom uporabe znanja in se sčasoma razvijejo proti širši AgenticAI platformi.',
      items: [
        {
          title: 'Prepoznajte AI primere uporabe visoke vrednosti',
          text: 'Pomagamo prepoznati procese, področja znanja in uporabniške poti, kjer lahko AI agenti ustvarijo merljivo vrednost.',
        },
        {
          title: 'Povežite poslovno znanje',
          text: 'Odobreni dokumenti, postopki, baze znanja in viri podatkov so povezani prek nadzorovanih vzorcev pridobivanja in dostopa.',
        },
        {
          title: 'Določite agente, orodja in varovala',
          text: 'Agenti so konfigurirani s cilji, orodji, dovoljenji, pozivi, varnostnimi kontrolami in pravili eskalacije.',
        },
        {
          title: 'Integrirajte se s poslovnimi sistemi',
          text: 'KumuluzAI se poveže z API-ji, poslovnimi aplikacijami, ponudniki identitete, dokumentnimi repozitoriji in operativnimi sistemi.',
        },
        {
          title: 'Namestite in upravljajte',
          text: 'Rešitev je nameščena s spremljanjem, revidljivostjo, odobritvami, nadzorom dostopa in vidnostjo uporabe.',
        },
        {
          title: 'Skalirajte med primeri uporabe',
          text: 'Dodatne agente, orodja, vire znanja in workflowe je mogoče dodati na isti platformski temelj.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Del družine platform Kumuluz',
      body: [
        'KumuluzAI je del širše družine izdelkov Kumuluz za poslovne digitalne platforme, API-je, poslovne API-je in crowdsensing.',
        'Skupaj izdelki Kumuluz organizacijam pomagajo graditi varne, integrirane in ponovno uporabne digitalne zmožnosti na področjih AI, API-jev, cloud-native sistemov in podatkovno vodenih storitev.',
      ],
      items: [
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Cloud-native temelj za mikrostoritvene in na API temelječe digitalne rešitve.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev in API ekonomijo za izpostavljanje, varovanje in upravljanje API-jev.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Ponovno uporabne poslovne zmožnosti za hitrejši razvoj digitalnih izdelkov.',
        },
        {
          label: 'Podatki',
          title: 'Kumuluz Crowdsensing',
          text: 'Platforma za porazdeljeno zbiranje podatkov in crowdsensing za pametne storitve in podatkovno vodeno odločanje.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Pripravljeni na prehod od AI eksperimentov k poslovni AgenticAI platformi?',
      body: [
        'KumuluzAI organizacijam pomaga graditi varne, nadzorovane in produkcijsko pripravljene AI agente, ki se povezujejo s poslovnim znanjem, orodji, sistemi in workflowi.',
        'Začnite z osredotočenim asistentom ali zgradite širši platformski temelj za poslovno AI avtomatizacijo.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Kontaktirajte nas',
    },
  ],
}

export const kumuluzAiPage: Record<LanguageCode, ProductPageContent> = {
  en,
  sl,
}
