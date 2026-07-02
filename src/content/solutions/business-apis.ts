import {
  Activity,
  AppWindow,
  BadgeCheck,
  Bell,
  Bot,
  Boxes,
  Code2,
  CreditCard,
  GitBranch,
  Handshake,
  Layers,
  ListChecks,
  Network,
  Package,
  Plug,
  Receipt,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { SolutionPageContent } from '../../views/solutions/types'

const en: SolutionPageContent = {
  seo: {
    title:
      'Business APIs for Digital Products and AI Agents | Reusable Capabilities with Kumuluz',
    description:
      'Build reusable Business APIs for digital products, AI agents, MCP tool integration and deterministic workflows with Temporal, Camunda and Kumuluz.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Business APIs for Digital Products & AI Agents',
    title:
      'Turn repeated business functionality into reusable capabilities for applications, workflows and AI agents',
    body: [
      'Digital products, workflows and AI agents all need access to business capabilities: customer data, product catalogs, orders, payments, subscriptions, invoicing, onboarding, KYC, cases, tasks and notifications.',
      'Without a reusable Business API layer, organizations rebuild the same functionality again and again across portals, mobile apps, partner integrations, workflows and AI use cases.',
      'Kumuluz helps organizations create reusable, governed and AgenticAI-ready Business APIs for digital products, AI agents, MCP-enabled tools and deterministic workflows on platforms such as Temporal or Camunda.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Kumuluz Business APIs',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title: 'Every digital initiative needs the same business capabilities',
      body: [
        'Most digital initiatives need the same types of capabilities. A customer portal needs customer data and orders. A mobile app needs payments and subscriptions. A partner ecosystem needs product and status APIs. A workflow automation project needs onboarding, KYC, cases and approvals. An AI agent needs safe tools for retrieving data and initiating actions.',
        'If each initiative builds its own version, the organization ends up with duplicated logic, inconsistent behavior, difficult maintenance and unclear governance.',
        'The problem becomes more serious with AgenticAI. AI agents need business tools, but exposing backend systems directly to agents can create security, reliability and compliance risks.',
        'Kumuluz Business APIs solve this by turning repeated business functionality into reusable, governed and agent-ready API capabilities.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Duplicated business logic',
          text: 'Teams rebuild customer, product, order, payment or onboarding logic for every new solution.',
        },
        {
          title: 'Inconsistent behavior',
          text: 'Different applications and workflows implement the same business process differently.',
        },
        {
          title: 'Slow product delivery',
          text: 'New digital products take longer because common capabilities are rebuilt from scratch.',
        },
        {
          title: 'Unsafe AI agent access',
          text: 'AI agents need business tools, but direct access to backend systems creates unnecessary risk.',
        },
        {
          title: 'Disconnected workflow automation',
          text: 'Workflow engines often need reliable business activities, but those capabilities are not always available as reusable APIs.',
        },
        {
          title: 'Higher maintenance and compliance effort',
          text: 'Duplicated implementations make testing, auditing, versioning and regulatory control harder.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'A reusable business capability layer for products, agents and workflows',
      body: [
        'Kumuluz helps organizations create a reusable Business API layer that exposes common business capabilities through well-designed, secure and governed APIs.',
        'These APIs can serve multiple consumers: web applications, mobile apps, portals, partner systems, workflow engines and AI agents.',
        'In AgenticAI architectures, Business APIs act as the controlled tool layer for agents. In workflow architectures, they act as deterministic activities or service tasks. In digital product architectures, they act as reusable backend capabilities. This allows organizations to build faster while keeping business logic, governance and process execution under control.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Build once, reuse many times',
          text: 'Create business capabilities once and reuse them across products, channels, workflows and AI agents.',
        },
        {
          title: 'Make AI agents safer and more useful',
          text: 'Expose approved business capabilities as governed tools instead of giving agents direct backend access.',
        },
        {
          title: 'Support deterministic process automation',
          text: 'Use Business APIs as reliable activities or service tasks in Temporal, Camunda or similar workflow engines.',
        },
        {
          title: 'Standardize business behavior',
          text: 'Ensure customer, onboarding, payment, order or case logic behaves consistently across the organization.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'What Business APIs for digital products and AI agents include',
      intro:
        'A Business API solution combines reusable API design, backend integration, agent-readiness, workflow-readiness, security and lifecycle governance.',
      items: [
        {
          icon: Boxes,
          title: 'Reusable business capability design',
          text: 'Business functions are modeled as reusable capabilities instead of one-off endpoints for a single project.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Business APIs', 'Kumuluz Digital Platform'],
        },
        {
          icon: Code2,
          title: 'API-first implementation',
          text: 'Capabilities are exposed through consistent, documented and version-ready APIs.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Business APIs', 'Kumuluz API'],
        },
        {
          icon: Bot,
          title: 'Agent-callable business tools',
          text: 'Selected Business APIs can be prepared as tools that AI agents can call safely.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Business APIs', 'KumuluzAI Platform', 'Kumuluz API'],
        },
        {
          icon: Plug,
          title: 'MCP-oriented integration',
          text: 'Business capabilities can be exposed through MCP-oriented tool patterns where appropriate.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz Business APIs',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Workflow,
          title: 'Workflow-ready execution',
          text: 'Business APIs can be used as deterministic activities, service tasks or connectors in workflow engines.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz Business APIs',
            'Kumuluz Digital Platform',
            'Temporal / Camunda integration patterns',
          ],
        },
        {
          icon: Network,
          title: 'Enterprise system integration',
          text: 'Business APIs can wrap or orchestrate functionality from existing systems, databases, APIs and workflows.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Business APIs', 'Kumuluz Digital Platform'],
        },
        {
          icon: ShieldCheck,
          title: 'Governance and access control',
          text: 'APIs can be cataloged, secured, exposed, monitored and governed.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz API'],
        },
        {
          icon: Activity,
          title: 'Observability and auditability',
          text: 'Track API usage, agent calls, workflow execution, errors, performance and lifecycle changes.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz Business APIs',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Business APIs as governed tools for AI agents',
      body: [
        'AI agents become valuable when they can do more than answer questions. They need to retrieve business data, check statuses, prepare cases, initiate actions and support workflows.',
        'But agents should not connect directly to backend systems. They need approved tools with clear inputs, outputs, permissions, validation and auditability.',
        'Kumuluz Business APIs can be designed as agent-callable business tools. They can be exposed through Kumuluz API, integrated with KumuluzAI, and prepared for MCP-oriented tool discovery and invocation. This creates a safer AgenticAI architecture where agents can use business capabilities without bypassing enterprise governance.',
      ],
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Agent-callable capabilities',
          text: 'Expose selected business operations as tools agents can use under defined policies.',
          meta: 'Agents, Policies',
        },
        {
          title: 'Tool-safe API design',
          text: 'Design APIs with clear schemas, validation, idempotency, permissions and safe execution boundaries.',
          meta: 'Schemas, Validation',
        },
        {
          title: 'MCP-enabled exposure',
          text: 'Prepare Business APIs for MCP-oriented integration where agents need discoverable tools.',
          meta: 'MCP, Discovery',
        },
        {
          title: 'Governed tool access',
          text: 'Control which agents, users or workflows can invoke which capabilities.',
          meta: 'Access, Control',
        },
        {
          title: 'Audit-friendly execution',
          text: 'Track which agent, user, workflow or system invoked a Business API and what happened.',
          meta: 'Audit, Tracking',
        },
        {
          title: 'Reusable across agents',
          text: 'Use the same business capability across multiple AI assistants, agents and automation use cases.',
          meta: 'Reuse, Agents',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Combine AgenticAI with deterministic workflow execution',
      body: [
        'AI agents are useful for interpreting intent, retrieving knowledge, classifying requests, preparing context and recommending next steps.',
        'But many enterprise processes require deterministic execution: defined steps, approvals, retries, compensations, deadlines and audit trails.',
        'Kumuluz Business APIs can be designed for use in workflow engines such as Temporal, Camunda or similar platforms. Business APIs become reliable activities, service tasks or connectors, while AI agents assist users and prepare context. AI agents reason, assist, classify and prepare context; Business APIs expose governed capabilities; workflow engines execute deterministic process steps; and enterprise systems perform the final business operations.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Workflow activities',
          text: 'Use Business APIs as reliable activities in Temporal workflows or similar orchestration models.',
        },
        {
          title: 'BPMN service tasks',
          text: 'Use Business APIs as service tasks, connectors or external tasks in Camunda-based processes.',
        },
        {
          title: 'Approvals and checkpoints',
          text: 'Add human review where sensitive, regulated or business-critical actions require confirmation.',
        },
        {
          title: 'Retries and compensation',
          text: 'Design API operations for resilient workflow behavior, including idempotency and compensation patterns.',
        },
        {
          title: 'Long-running processes',
          text: 'Support onboarding, claims, KYC, subscriptions, cases and service requests that span time and systems.',
        },
        {
          title: 'Auditable execution',
          text: 'Track process steps, API calls, approvals, outcomes and exceptions.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Example reusable Business API domains',
      intro:
        'Business APIs can be created across different business domains, depending on industry, systems and digital strategy.',
      items: [
        {
          icon: Users,
          title: 'Customer and identity',
          text: 'Reusable APIs for customer profiles, customer data, user accounts, consent, eligibility and lifecycle operations.',
          bulletsTitle: 'Example capabilities',
          bullets: [
            'Customer profile',
            'Customer lookup',
            'Customer status',
            'Consent management',
            'Eligibility check',
            'Customer lifecycle',
            'Identity-related workflows',
          ],
        },
        {
          icon: Package,
          title: 'Products and catalogs',
          text: 'APIs for product information, service catalogs, pricing, availability, configuration and offers.',
          bulletsTitle: 'Example capabilities',
          bullets: [
            'Product catalog',
            'Product details',
            'Pricing',
            'Availability',
            'Product configuration',
            'Offer generation',
            'Product recommendation support',
          ],
        },
        {
          icon: CreditCard,
          title: 'Orders, transactions and payments',
          text: 'Reusable APIs for orders, transactions, payment initiation, payment status and confirmations.',
          bulletsTitle: 'Example capabilities',
          bullets: [
            'Order creation',
            'Order status',
            'Transaction lookup',
            'Payment initiation',
            'Payment status',
            'Confirmation',
            'Cancellation or refund',
          ],
        },
        {
          icon: Receipt,
          title: 'Subscriptions, billing and invoicing',
          text: 'APIs for subscription management, billing, invoicing, renewals and payment due information.',
          bulletsTitle: 'Example capabilities',
          bullets: [
            'Subscription lifecycle',
            'Subscription status',
            'Plan management',
            'Billing',
            'Invoice retrieval',
            'Renewal',
            'Payment due status',
          ],
        },
        {
          icon: BadgeCheck,
          title: 'KYC and onboarding',
          text: 'Reusable APIs for onboarding journeys, KYC processes, identity verification, document submission and compliance checks.',
          bulletsTitle: 'Example capabilities',
          bullets: [
            'Onboarding initiation',
            'KYC process status',
            'Identity verification',
            'Document submission',
            'Application status',
            'Compliance check',
            'Approval status',
          ],
        },
        {
          icon: ListChecks,
          title: 'Cases, tasks and approvals',
          text: 'APIs for case management, tasks, assignments, escalation, approvals and workflow status.',
          bulletsTitle: 'Example capabilities',
          bullets: [
            'Case creation',
            'Case status',
            'Task assignment',
            'Escalation',
            'Approval request',
            'Workflow status',
            'Case enrichment',
          ],
        },
        {
          icon: Bell,
          title: 'Notifications and communication',
          text: 'APIs for notifications, messages, reminders and communication preferences.',
          bulletsTitle: 'Example capabilities',
          bullets: [
            'Notification sending',
            'Email message',
            'SMS message',
            'Push notification',
            'Reminder',
            'Communication preferences',
            'Human handover',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for Business APIs',
      body: [
        'A reusable Business API architecture creates a controlled capability layer between digital products, AI agents, workflow engines and enterprise systems.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Digital products and channels',
          text: 'Web applications, mobile apps, portals, customer services, partner systems and internal tools.',
        },
        {
          title: 'AI agents and assistants',
          text: 'KumuluzAI agents or other AgenticAI systems that use Business APIs as governed tools.',
        },
        {
          title: 'Workflow engines',
          text: 'Temporal, Camunda or similar platforms that execute deterministic business processes using Business APIs.',
        },
        {
          title: 'Kumuluz Business API layer',
          text: 'Reusable capabilities such as customer, product, payment, order, subscription, onboarding, KYC, case, task and notification APIs.',
        },
        {
          title: 'Kumuluz API management layer',
          text: 'API catalog, gateway, access control, developer portal, MCP integration, monitoring and lifecycle governance.',
        },
        {
          title: 'Integration and service layer',
          text: 'Connectors, adapters, orchestration logic and cloud-native services built through Kumuluz Digital Platform.',
        },
        {
          title: 'Enterprise systems',
          text: 'Core systems, ERP, CRM, billing systems, document systems, legacy applications, databases and external services.',
        },
        {
          title: 'Governance and observability',
          text: 'Security, identity, monitoring, audit trails, agent invocation tracking, workflow execution logs and lifecycle management.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with Business APIs',
      intro:
        'Kumuluz Business APIs support digital product development, partner ecosystems, AI-agent automation and workflow-based process execution.',
      items: [
        {
          icon: AppWindow,
          title: 'Reusable backend for digital products',
          text: 'Create a shared backend capability layer for portals, mobile apps and digital services.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer self-service portals',
            'Mobile application backends',
            'Partner portals',
            'Subscription services',
            'Digital onboarding journeys',
            'Digital commerce platforms',
          ],
        },
        {
          icon: Wrench,
          title: 'Agent-callable business tool layer',
          text: 'Expose business capabilities as governed tools for AI agents.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer lookup tool',
            'Order status tool',
            'KYC status tool',
            'Case creation tool',
            'Product information tool',
            'Payment status tool',
            'Notification tool',
          ],
        },
        {
          icon: GitBranch,
          title: 'Workflow-based process automation',
          text: 'Use Business APIs as deterministic process steps in workflow engines.',
          bulletsTitle: 'Examples',
          bullets: [
            'Onboarding workflows',
            'KYC workflows',
            'Claims workflows',
            'Case management workflows',
            'Subscription lifecycle workflows',
            'Approval workflows',
            'Customer service workflows',
          ],
        },
        {
          icon: Layers,
          title: 'Legacy capability exposure',
          text: 'Wrap existing systems with modern APIs that applications, agents and workflows can use.',
          bulletsTitle: 'Examples',
          bullets: [
            'CRM capability APIs',
            'ERP capability APIs',
            'Billing system APIs',
            'Legacy system wrappers',
            'Document system APIs',
            'Mainframe or core system exposure',
          ],
        },
        {
          icon: Handshake,
          title: 'Partner and ecosystem capabilities',
          text: 'Expose selected business capabilities to partners and external platforms.',
          bulletsTitle: 'Examples',
          bullets: [
            'Partner product APIs',
            'Partner order APIs',
            'Partner onboarding APIs',
            'B2B integration APIs',
            'Data exchange APIs',
            'Partner service APIs',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Governance for reusable capabilities',
      body: [
        'Business APIs become valuable when they are reusable, governed and maintained over time.',
        'Kumuluz helps organizations define ownership, versioning, documentation, access control, lifecycle status, monitoring and dependency visibility for Business APIs.',
        'When Business APIs are used by AI agents or workflow engines, governance becomes even more important because changes can affect automated processes.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Capability ownership',
          text: 'Define who owns each Business API and who approves changes.',
        },
        {
          title: 'API contracts and versioning',
          text: 'Use stable contracts, versioning and compatibility principles.',
        },
        {
          title: 'Access control',
          text: 'Control access for applications, partners, workflows and AI agents.',
        },
        {
          title: 'Dependency visibility',
          text: 'Understand which products, workflows or agents depend on each Business API.',
        },
        {
          title: 'Operational monitoring',
          text: 'Monitor usage, errors, latency, agent calls and workflow invocations.',
        },
        {
          title: 'Lifecycle management',
          text: 'Manage updates, deprecations, migrations and documentation.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Business APIs work best with API management and a digital platform foundation',
      body: [
        'Business APIs are reusable capabilities. But they need a platform around them.',
        'Kumuluz Digital Platform provides the engineering foundation for building services, connectors, integrations and workflows. Kumuluz API provides the management layer for cataloging, securing, exposing and monitoring Business APIs. KumuluzAI provides the AgenticAI platform where agents can use Business APIs as governed tools.',
        'Together, these products create a controlled architecture for digital products and AI-enabled process automation.',
      ],
      columns: 2,
      variant: 'accent',
      items: [
        {
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities for applications, agents and workflows.',
        },
        {
          title: 'Kumuluz API',
          text: 'Management, gateway, access control, monitoring, MCP integration and developer portal.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Engineering foundation for services, connectors, workflows and cloud-native delivery.',
        },
        {
          title: 'KumuluzAI Platform',
          text: 'AI agents, assistants, knowledge access, tool use, governance and auditability.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise automation environments',
      body: [
        'Business API solutions are designed for organizations that need to expose business capabilities securely and consistently across multiple channels, systems, workflows and AI agents.',
        'They can be implemented in cloud, hybrid or on-premise environments and integrated with existing enterprise systems.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Cloud-native implementation',
          text: 'Build APIs as modern services suitable for containerized and Kubernetes-based environments.',
        },
        {
          title: 'Hybrid integration',
          text: 'Expose capabilities from on-premise systems to cloud applications, workflows or agents.',
        },
        {
          title: 'On-premise compatibility',
          text: 'Support environments where sensitive data or regulatory requirements demand local control.',
        },
        {
          title: 'API management integration',
          text: 'Expose and govern Business APIs through Kumuluz API.',
        },
        {
          title: 'AgenticAI integration',
          text: 'Make selected Business APIs available as controlled tools for KumuluzAI agents.',
        },
        {
          title: 'Workflow integration',
          text: 'Use Business APIs inside Temporal, Camunda or similar workflow engines.',
        },
        {
          title: 'Security by design',
          text: 'Implement authentication, authorization, validation, auditability and safe execution patterns.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where Business APIs fit',
      body: [
        'Business APIs are useful wherever organizations repeatedly build the same capabilities across products, channels, workflows and automation scenarios.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Banking and financial services',
          text: 'Customer data, KYC, onboarding, payments, product catalogs, account services, workflow automation and AI-agent tools.',
        },
        {
          title: 'Insurance',
          text: 'Policy data, claims status, customer data, product catalogs, onboarding, partner services, claims workflows and AI-assisted automation.',
        },
        {
          title: 'Public sector',
          text: 'Citizen services, case status, document submission, workflow APIs, inter-institutional data exchange and AI-assisted administrative processes.',
        },
        {
          title: 'Energy and utilities',
          text: 'Customer services, billing, subscriptions, service requests, meter data, workflows and AI-enabled customer support.',
        },
        {
          title: 'Manufacturing and enterprise services',
          text: 'Product catalogs, orders, partner portals, customer services, supply-chain APIs and workflow automation.',
        },
        {
          title: 'Digital platforms and marketplaces',
          text: 'Reusable capabilities for multi-channel products, partner ecosystems, API-driven platforms and AgenticAI automation.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start',
      intro:
        'Organizations can start with the business capabilities they rebuild most often and gradually evolve toward a reusable Business API platform.',
      items: [
        {
          title: 'Identify repeated capabilities',
          text: 'We analyze products, systems, workflows and agent use cases to identify recurring business functions.',
        },
        {
          title: 'Prioritize high-value APIs',
          text: 'We select capabilities with the strongest reuse potential and business value.',
        },
        {
          title: 'Define domains and contracts',
          text: 'We define API domains, contracts, data models, ownership, versioning and lifecycle principles.',
        },
        {
          title: 'Map agent and workflow usage',
          text: 'We identify which APIs should be exposed to AI agents, which should be used in deterministic workflows and where approvals are needed.',
        },
        {
          title: 'Connect enterprise systems',
          text: 'APIs are connected to core systems, databases, existing APIs, workflows or third-party services.',
        },
        {
          title: 'Implement reusable Business APIs',
          text: 'Capabilities are implemented using cloud-native, API-first and workflow-ready patterns.',
        },
        {
          title: 'Secure and govern access',
          text: 'Authentication, authorization, access policies, monitoring, documentation and lifecycle governance are configured.',
        },
        {
          title: 'Expose to products, agents and workflows',
          text: 'Business APIs become available to applications, portals, partners, AI agents and workflow engines.',
        },
        {
          title: 'Scale into a capability platform',
          text: 'Additional Business APIs are added and managed as part of a broader reusable platform foundation.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Kumuluz products used in this solution',
      body: [
        'Business APIs for digital products and AI agents are delivered through several Kumuluz products that each play a distinct role.',
      ],
      items: [
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities for products, agents, workflows and partner ecosystems.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'API management and gateway platform for cataloging, exposing, securing and monitoring Business APIs.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Engineering foundation for implementing services, connectors, workflows and cloud-native delivery.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platform where agents can use Business APIs as governed tools.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz for Business APIs',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Reusable business capabilities',
          text: 'Turn repeated functionality into reusable APIs instead of rebuilding it for every project.',
        },
        {
          title: 'AgenticAI-ready by design',
          text: 'Prepare Business APIs as governed tools for AI agents and MCP-oriented integration patterns.',
        },
        {
          title: 'Workflow-ready execution',
          text: 'Use Business APIs inside Temporal, Camunda or similar engines for deterministic business process automation.',
        },
        {
          title: 'Consistent business logic',
          text: 'Expose common operations through standardized APIs across products, workflows and agents.',
        },
        {
          title: 'Governed API lifecycle',
          text: 'Manage documentation, access, versions, consumers, dependencies and usage.',
        },
        {
          title: 'Works with existing systems',
          text: 'Wrap and reuse existing enterprise capabilities without replacing everything at once.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Sunesis combines enterprise engineering, API architecture, integrations, workflow automation, cloud-native delivery and AgenticAI expertise.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Ready to make business capabilities reusable for products, workflows and AI agents?',
      body: [
        'Kumuluz helps organizations turn repeated business functionality into reusable, governed and AgenticAI-ready Business APIs.',
        'Start with the capabilities your teams rebuild most often and evolve toward a reusable business capability platform for digital products, AI agents and deterministic workflows.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore Kumuluz Business APIs',
    },
  ],
}

const sl: SolutionPageContent = {
  seo: {
    title:
      'Business API-ji za digitalne produkte in AI agente | Ponovno uporabne zmožnosti s Kumuluz',
    description:
      'Zgradite ponovno uporabne Business API-je za digitalne produkte, AI agente, integracijo orodij MCP in deterministične workflowe s Temporal, Camunda in Kumuluz.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Business API-ji za digitalne produkte in AI agente',
    title:
      'Spremenite ponavljajočo se poslovno funkcionalnost v ponovno uporabne zmožnosti za aplikacije, workflowe in AI agente',
    body: [
      'Digitalni produkti, workflowi in AI agenti vsi potrebujejo dostop do poslovnih zmožnosti: podatkov o strankah, katalogov izdelkov, naročil, plačil, naročnin, izstavljanja računov, uvajanja, KYC, primerov, nalog in obvestil.',
      'Brez ponovno uporabne plasti Business API-jev organizacije znova in znova gradijo isto funkcionalnost prek portalov, mobilnih aplikacij, partnerskih integracij, workflowov in AI primerov uporabe.',
      'Kumuluz organizacijam pomaga ustvariti ponovno uporabne, vodene in za AgenticAI pripravljene Business API-je za digitalne produkte, AI agente, MCP-omogočena orodja in deterministične workflowe na platformah, kot sta Temporal ali Camunda.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite Kumuluz Business APIs',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title: 'Vsaka digitalna pobuda potrebuje iste poslovne zmožnosti',
      body: [
        'Večina digitalnih pobud potrebuje iste vrste zmožnosti. Portal za stranke potrebuje podatke o strankah in naročila. Mobilna aplikacija potrebuje plačila in naročnine. Partnerski ekosistem potrebuje API-je za izdelke in statuse. Projekt avtomatizacije workflowov potrebuje uvajanje, KYC, primere in odobritve. AI agent potrebuje varna orodja za pridobivanje podatkov in sprožanje dejanj.',
        'Če vsaka pobuda zgradi svojo različico, organizacija konča s podvojeno logiko, nedoslednim vedenjem, oteženim vzdrževanjem in nejasnim upravljanjem.',
        'Problem postane resnejši z AgenticAI. AI agenti potrebujejo poslovna orodja, a neposredno izpostavljanje zalednih sistemov agentom lahko ustvari tveganja glede varnosti, zanesljivosti in skladnosti.',
        'Kumuluz Business APIs to rešujejo tako, da ponavljajočo se poslovno funkcionalnost spremenijo v ponovno uporabne, vodene in za agente pripravljene API zmožnosti.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Podvojena poslovna logika',
          text: 'Timi za vsako novo rešitev znova gradijo logiko za stranke, izdelke, naročila, plačila ali uvajanje.',
        },
        {
          title: 'Nedosledno vedenje',
          text: 'Različne aplikacije in workflowi isti poslovni proces izvajajo drugače.',
        },
        {
          title: 'Počasna dostava produktov',
          text: 'Novi digitalni produkti trajajo dlje, ker se skupne zmožnosti gradijo od začetka.',
        },
        {
          title: 'Nevaren dostop AI agentov',
          text: 'AI agenti potrebujejo poslovna orodja, vendar neposreden dostop do zalednih sistemov ustvarja nepotrebno tveganje.',
        },
        {
          title: 'Nepovezana avtomatizacija workflowov',
          text: 'Pogoni workflowov pogosto potrebujejo zanesljive poslovne aktivnosti, a te zmožnosti niso vedno na voljo kot ponovno uporabni API-ji.',
        },
        {
          title: 'Večji napor pri vzdrževanju in skladnosti',
          text: 'Podvojene implementacije otežujejo testiranje, revizijo, verzioniranje in regulatorni nadzor.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Ponovno uporabna plast poslovnih zmožnosti za produkte, agente in workflowe',
      body: [
        'Kumuluz organizacijam pomaga ustvariti ponovno uporabno plast Business API-jev, ki izpostavlja skupne poslovne zmožnosti prek dobro zasnovanih, varnih in vodenih API-jev.',
        'Ti API-ji lahko strežejo več porabnikom: spletnim aplikacijam, mobilnim aplikacijam, portalom, partnerskim sistemom, pogonom workflowov in AI agentom.',
        'V AgenticAI arhitekturah Business API-ji delujejo kot nadzorovana plast orodij za agente. V arhitekturah workflowov delujejo kot deterministične aktivnosti ali servisne naloge. V arhitekturah digitalnih produktov delujejo kot ponovno uporabne zaledne zmožnosti. To organizacijam omogoča hitrejšo gradnjo, hkrati pa ohranja poslovno logiko, upravljanje in izvajanje procesov pod nadzorom.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Zgradite enkrat, uporabite mnogokrat',
          text: 'Poslovne zmožnosti ustvarite enkrat in jih ponovno uporabite med produkti, kanali, workflowi in AI agenti.',
        },
        {
          title: 'Naredite AI agente varnejše in uporabnejše',
          text: 'Izpostavite odobrene poslovne zmožnosti kot vodena orodja, namesto da bi agentom dali neposreden zaledni dostop.',
        },
        {
          title: 'Podprite deterministično avtomatizacijo procesov',
          text: 'Uporabite Business API-je kot zanesljive aktivnosti ali servisne naloge v Temporal, Camunda ali podobnih pogonih workflowov.',
        },
        {
          title: 'Standardizirajte poslovno vedenje',
          text: 'Zagotovite, da se logika za stranke, uvajanje, plačila, naročila ali primere dosledno obnaša po vsej organizaciji.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Kaj vključujejo Business API-ji za digitalne produkte in AI agente',
      intro:
        'Rešitev Business API združuje zasnovo ponovno uporabnih API-jev, zaledno integracijo, pripravljenost za agente, pripravljenost za workflowe, varnost in upravljanje življenjskega cikla.',
      items: [
        {
          icon: Boxes,
          title: 'Zasnova ponovno uporabnih poslovnih zmožnosti',
          text: 'Poslovne funkcije so modelirane kot ponovno uporabne zmožnosti namesto enkratnih končnih točk za posamezen projekt.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Business APIs', 'Kumuluz Digital Platform'],
        },
        {
          icon: Code2,
          title: 'API-first implementacija',
          text: 'Zmožnosti so izpostavljene prek doslednih, dokumentiranih in za verzioniranje pripravljenih API-jev.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Business APIs', 'Kumuluz API'],
        },
        {
          icon: Bot,
          title: 'Za agente klicljiva poslovna orodja',
          text: 'Izbrane Business API-je je mogoče pripraviti kot orodja, ki jih AI agenti lahko varno kličejo.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Business APIs', 'KumuluzAI Platform', 'Kumuluz API'],
        },
        {
          icon: Plug,
          title: 'MCP-usmerjena integracija',
          text: 'Poslovne zmožnosti je mogoče izpostaviti prek MCP-usmerjenih vzorcev orodij, kjer je to primerno.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz Business APIs',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Workflow,
          title: 'Za workflowe pripravljeno izvajanje',
          text: 'Business API-je je mogoče uporabiti kot deterministične aktivnosti, servisne naloge ali konektorje v pogonih workflowov.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz Business APIs',
            'Kumuluz Digital Platform',
            'Vzorci integracije Temporal / Camunda',
          ],
        },
        {
          icon: Network,
          title: 'Integracija poslovnih sistemov',
          text: 'Business API-ji lahko ovijejo ali orkestrirajo funkcionalnost iz obstoječih sistemov, podatkovnih baz, API-jev in workflowov.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Business APIs', 'Kumuluz Digital Platform'],
        },
        {
          icon: ShieldCheck,
          title: 'Upravljanje in nadzor dostopa',
          text: 'API-je je mogoče katalogizirati, varovati, izpostaviti, spremljati in upravljati.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz API'],
        },
        {
          icon: Activity,
          title: 'Opazljivost in revizijska sledljivost',
          text: 'Sledite uporabi API-jev, klicem agentov, izvajanju workflowov, napakam, zmogljivosti in spremembam življenjskega cikla.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz Business APIs',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Business API-ji kot vodena orodja za AI agente',
      body: [
        'AI agenti postanejo dragoceni, ko zmorejo več kot le odgovarjati na vprašanja. Pridobivati morajo poslovne podatke, preverjati statuse, pripravljati primere, sprožati dejanja in podpirati workflowe.',
        'A agenti se ne smejo neposredno povezovati z zalednimi sistemi. Potrebujejo odobrena orodja z jasnimi vhodi, izhodi, dovoljenji, validacijo in revizijsko sledljivostjo.',
        'Kumuluz Business API-je je mogoče zasnovati kot za agente klicljiva poslovna orodja. Izpostaviti jih je mogoče prek Kumuluz API, integrirati s KumuluzAI in pripraviti za MCP-usmerjeno odkrivanje in klicanje orodij. To ustvari varnejšo AgenticAI arhitekturo, kjer agenti lahko uporabljajo poslovne zmožnosti, ne da bi obšli poslovno upravljanje.',
      ],
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Za agente klicljive zmožnosti',
          text: 'Izpostavite izbrane poslovne operacije kot orodja, ki jih agenti lahko uporabljajo v skladu z določenimi politikami.',
          meta: 'Agenti, Politike',
        },
        {
          title: 'Za orodja varna zasnova API-jev',
          text: 'Zasnujte API-je z jasnimi shemami, validacijo, idempotentnostjo, dovoljenji in varnimi mejami izvajanja.',
          meta: 'Sheme, Validacija',
        },
        {
          title: 'MCP-omogočeno izpostavljanje',
          text: 'Pripravite Business API-je za MCP-usmerjeno integracijo, kjer agenti potrebujejo odkrivna orodja.',
          meta: 'MCP, Odkrivanje',
        },
        {
          title: 'Voden dostop do orodij',
          text: 'Nadzorujte, kateri agenti, uporabniki ali workflowi lahko kličejo katere zmožnosti.',
          meta: 'Dostop, Nadzor',
        },
        {
          title: 'Za revizijo prijazno izvajanje',
          text: 'Sledite, kateri agent, uporabnik, workflow ali sistem je klical Business API in kaj se je zgodilo.',
          meta: 'Revizija, Sledenje',
        },
        {
          title: 'Ponovno uporabno med agenti',
          text: 'Uporabite isto poslovno zmožnost med več AI pomočniki, agenti in primeri uporabe avtomatizacije.',
          meta: 'Ponovna uporaba, Agenti',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Združite AgenticAI z determinističnim izvajanjem workflowov',
      body: [
        'AI agenti so uporabni za razumevanje namena, pridobivanje znanja, klasificiranje zahtev, pripravo konteksta in priporočanje naslednjih korakov.',
        'A mnogi poslovni procesi zahtevajo deterministično izvajanje: določene korake, odobritve, ponovne poskuse, kompenzacije, roke in revizijske sledi.',
        'Kumuluz Business API-je je mogoče zasnovati za uporabo v pogonih workflowov, kot so Temporal, Camunda ali podobne platforme. Business API-ji postanejo zanesljive aktivnosti, servisne naloge ali konektorji, medtem ko AI agenti pomagajo uporabnikom in pripravljajo kontekst. AI agenti sklepajo, pomagajo, klasificirajo in pripravljajo kontekst; Business API-ji izpostavljajo vodene zmožnosti; pogoni workflowov izvajajo deterministične procesne korake; poslovni sistemi pa izvedejo končne poslovne operacije.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Aktivnosti workflowov',
          text: 'Uporabite Business API-je kot zanesljive aktivnosti v workflowih Temporal ali podobnih modelih orkestracije.',
        },
        {
          title: 'BPMN servisne naloge',
          text: 'Uporabite Business API-je kot servisne naloge, konektorje ali zunanje naloge v procesih na osnovi Camunda.',
        },
        {
          title: 'Odobritve in kontrolne točke',
          text: 'Dodajte človeški pregled, kjer občutljiva, regulirana ali poslovno kritična dejanja zahtevajo potrditev.',
        },
        {
          title: 'Ponovni poskusi in kompenzacija',
          text: 'Zasnujte API operacije za odporno vedenje workflowov, vključno z vzorci idempotentnosti in kompenzacije.',
        },
        {
          title: 'Dolgotrajni procesi',
          text: 'Podprite uvajanje, škodne zahtevke, KYC, naročnine, primere in storitvene zahteve, ki segajo čez čas in sisteme.',
        },
        {
          title: 'Revizijsko sledljivo izvajanje',
          text: 'Sledite procesnim korakom, klicem API-jev, odobritvam, izidom in izjemam.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Primeri ponovno uporabnih domen Business API-jev',
      intro:
        'Business API-je je mogoče ustvariti v različnih poslovnih domenah, odvisno od panoge, sistemov in digitalne strategije.',
      items: [
        {
          icon: Users,
          title: 'Stranke in identiteta',
          text: 'Ponovno uporabni API-ji za profile strank, podatke o strankah, uporabniške račune, soglasja, upravičenost in operacije življenjskega cikla.',
          bulletsTitle: 'Primeri zmožnosti',
          bullets: [
            'Profil stranke',
            'Iskanje strank',
            'Status stranke',
            'Upravljanje soglasij',
            'Preverjanje upravičenosti',
            'Življenjski cikel stranke',
            'Workflowi, povezani z identiteto',
          ],
        },
        {
          icon: Package,
          title: 'Izdelki in katalogi',
          text: 'API-ji za informacije o izdelkih, kataloge storitev, cene, razpoložljivost, konfiguracijo in ponudbe.',
          bulletsTitle: 'Primeri zmožnosti',
          bullets: [
            'Katalog izdelkov',
            'Podrobnosti izdelka',
            'Cene',
            'Razpoložljivost',
            'Konfiguracija izdelka',
            'Generiranje ponudb',
            'Podpora priporočanju izdelkov',
          ],
        },
        {
          icon: CreditCard,
          title: 'Naročila, transakcije in plačila',
          text: 'Ponovno uporabni API-ji za naročila, transakcije, sprožanje plačil, status plačil in potrditve.',
          bulletsTitle: 'Primeri zmožnosti',
          bullets: [
            'Ustvarjanje naročila',
            'Status naročila',
            'Iskanje transakcij',
            'Sprožanje plačila',
            'Status plačila',
            'Potrditev',
            'Preklic ali vračilo',
          ],
        },
        {
          icon: Receipt,
          title: 'Naročnine, obračunavanje in izstavljanje računov',
          text: 'API-ji za upravljanje naročnin, obračunavanje, izstavljanje računov, obnovitve in informacije o zapadlih plačilih.',
          bulletsTitle: 'Primeri zmožnosti',
          bullets: [
            'Življenjski cikel naročnine',
            'Status naročnine',
            'Upravljanje paketov',
            'Obračunavanje',
            'Pridobivanje računov',
            'Obnovitev',
            'Status zapadlosti plačila',
          ],
        },
        {
          icon: BadgeCheck,
          title: 'KYC in uvajanje',
          text: 'Ponovno uporabni API-ji za poti uvajanja, procese KYC, preverjanje identitete, oddajo dokumentov in preverjanja skladnosti.',
          bulletsTitle: 'Primeri zmožnosti',
          bullets: [
            'Sprožanje uvajanja',
            'Status procesa KYC',
            'Preverjanje identitete',
            'Oddaja dokumentov',
            'Status vloge',
            'Preverjanje skladnosti',
            'Status odobritve',
          ],
        },
        {
          icon: ListChecks,
          title: 'Primeri, naloge in odobritve',
          text: 'API-ji za upravljanje primerov, naloge, dodelitve, eskalacijo, odobritve in status workflowov.',
          bulletsTitle: 'Primeri zmožnosti',
          bullets: [
            'Ustvarjanje primera',
            'Status primera',
            'Dodelitev nalog',
            'Eskalacija',
            'Zahteva za odobritev',
            'Status workflowa',
            'Obogatitev primera',
          ],
        },
        {
          icon: Bell,
          title: 'Obvestila in komunikacija',
          text: 'API-ji za obvestila, sporočila, opomnike in komunikacijske nastavitve.',
          bulletsTitle: 'Primeri zmožnosti',
          bullets: [
            'Pošiljanje obvestil',
            'E-poštno sporočilo',
            'SMS sporočilo',
            'Potisno obvestilo',
            'Opomnik',
            'Komunikacijske nastavitve',
            'Predaja človeku',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za Business API-je',
      body: [
        'Ponovno uporabna arhitektura Business API-jev ustvari nadzorovano plast zmožnosti med digitalnimi produkti, AI agenti, pogoni workflowov in poslovnimi sistemi.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Digitalni produkti in kanali',
          text: 'Spletne aplikacije, mobilne aplikacije, portali, storitve za stranke, partnerski sistemi in interna orodja.',
        },
        {
          title: 'AI agenti in pomočniki',
          text: 'KumuluzAI agenti ali drugi AgenticAI sistemi, ki uporabljajo Business API-je kot vodena orodja.',
        },
        {
          title: 'Pogoni workflowov',
          text: 'Temporal, Camunda ali podobne platforme, ki s pomočjo Business API-jev izvajajo deterministične poslovne procese.',
        },
        {
          title: 'Plast Kumuluz Business API',
          text: 'Ponovno uporabne zmožnosti, kot so API-ji za stranke, izdelke, plačila, naročila, naročnine, uvajanje, KYC, primere, naloge in obvestila.',
        },
        {
          title: 'Plast upravljanja Kumuluz API',
          text: 'Katalog API-jev, prehod, nadzor dostopa, razvijalski portal, MCP integracija, spremljanje in upravljanje življenjskega cikla.',
        },
        {
          title: 'Plast integracije in storitev',
          text: 'Konektorji, adapterji, orkestracijska logika in cloud-native storitve, zgrajene prek Kumuluz Digital Platform.',
        },
        {
          title: 'Poslovni sistemi',
          text: 'Osrednji sistemi, ERP, CRM, obračunski sistemi, sistemi za dokumente, zapuščinske aplikacije, podatkovne baze in zunanje storitve.',
        },
        {
          title: 'Upravljanje in opazljivost',
          text: 'Varnost, identiteta, spremljanje, revizijske sledi, sledenje klicem agentov, dnevniki izvajanja workflowov in upravljanje življenjskega cikla.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite z Business API-ji',
      intro:
        'Kumuluz Business API-ji podpirajo razvoj digitalnih produktov, partnerske ekosisteme, avtomatizacijo z AI agenti in izvajanje procesov na osnovi workflowov.',
      items: [
        {
          icon: AppWindow,
          title: 'Ponovno uporabno zaledje za digitalne produkte',
          text: 'Ustvarite skupno plast zalednih zmožnosti za portale, mobilne aplikacije in digitalne storitve.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Samopostrežni portali za stranke',
            'Zaledja mobilnih aplikacij',
            'Partnerski portali',
            'Naročniške storitve',
            'Poti digitalnega uvajanja',
            'Platforme digitalne trgovine',
          ],
        },
        {
          icon: Wrench,
          title: 'Za agente klicljiva plast poslovnih orodij',
          text: 'Izpostavite poslovne zmožnosti kot vodena orodja za AI agente.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Orodje za iskanje strank',
            'Orodje za status naročila',
            'Orodje za status KYC',
            'Orodje za ustvarjanje primerov',
            'Orodje za informacije o izdelkih',
            'Orodje za status plačila',
            'Orodje za obvestila',
          ],
        },
        {
          icon: GitBranch,
          title: 'Avtomatizacija procesov na osnovi workflowov',
          text: 'Uporabite Business API-je kot deterministične procesne korake v pogonih workflowov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Workflowi uvajanja',
            'Workflowi KYC',
            'Workflowi škodnih zahtevkov',
            'Workflowi upravljanja primerov',
            'Workflowi življenjskega cikla naročnin',
            'Workflowi odobritev',
            'Workflowi storitev za stranke',
          ],
        },
        {
          icon: Layers,
          title: 'Izpostavljanje zapuščinskih zmožnosti',
          text: 'Ovijte obstoječe sisteme s sodobnimi API-ji, ki jih lahko uporabljajo aplikacije, agenti in workflowi.',
          bulletsTitle: 'Primeri',
          bullets: [
            'API-ji za zmožnosti CRM',
            'API-ji za zmožnosti ERP',
            'API-ji obračunskih sistemov',
            'Ovojnice zapuščinskih sistemov',
            'API-ji sistemov za dokumente',
            'Izpostavljanje glavnega ali osrednjega sistema',
          ],
        },
        {
          icon: Handshake,
          title: 'Partnerske in ekosistemske zmožnosti',
          text: 'Izpostavite izbrane poslovne zmožnosti partnerjem in zunanjim platformam.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Partnerski API-ji za izdelke',
            'Partnerski API-ji za naročila',
            'Partnerski API-ji za uvajanje',
            'API-ji za B2B integracijo',
            'API-ji za izmenjavo podatkov',
            'Partnerski storitveni API-ji',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Upravljanje za ponovno uporabne zmožnosti',
      body: [
        'Business API-ji postanejo dragoceni, ko so ponovno uporabni, vodeni in vzdrževani skozi čas.',
        'Kumuluz organizacijam pomaga določiti lastništvo, verzioniranje, dokumentacijo, nadzor dostopa, status življenjskega cikla, spremljanje in vidnost odvisnosti za Business API-je.',
        'Ko Business API-je uporabljajo AI agenti ali pogoni workflowov, postane upravljanje še pomembnejše, saj spremembe lahko vplivajo na avtomatizirane procese.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Lastništvo zmožnosti',
          text: 'Določite, kdo ima v lasti vsak Business API in kdo odobrava spremembe.',
        },
        {
          title: 'API pogodbe in verzioniranje',
          text: 'Uporabite stabilne pogodbe, verzioniranje in načela združljivosti.',
        },
        {
          title: 'Nadzor dostopa',
          text: 'Nadzorujte dostop za aplikacije, partnerje, workflowe in AI agente.',
        },
        {
          title: 'Vidnost odvisnosti',
          text: 'Razumite, kateri produkti, workflowi ali agenti so odvisni od posameznega Business API-ja.',
        },
        {
          title: 'Operativno spremljanje',
          text: 'Spremljajte uporabo, napake, zakasnitve, klice agentov in klice workflowov.',
        },
        {
          title: 'Upravljanje življenjskega cikla',
          text: 'Upravljajte posodobitve, opustitve, migracije in dokumentacijo.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Business API-ji najbolje delujejo z upravljanjem API-jev in temeljem digitalne platforme',
      body: [
        'Business API-ji so ponovno uporabne zmožnosti. A potrebujejo platformo okrog sebe.',
        'Kumuluz Digital Platform zagotavlja inženirski temelj za gradnjo storitev, konektorjev, integracij in workflowov. Kumuluz API zagotavlja plast upravljanja za katalogizacijo, varovanje, izpostavljanje in spremljanje Business API-jev. KumuluzAI zagotavlja AgenticAI platformo, kjer agenti lahko uporabljajo Business API-je kot vodena orodja.',
        'Skupaj ti izdelki ustvarjajo nadzorovano arhitekturo za digitalne produkte in z AI omogočeno avtomatizacijo procesov.',
      ],
      columns: 2,
      variant: 'accent',
      items: [
        {
          title: 'Kumuluz Business APIs',
          text: 'Ponovno uporabne poslovne zmožnosti za aplikacije, agente in workflowe.',
        },
        {
          title: 'Kumuluz API',
          text: 'Upravljanje, prehod, nadzor dostopa, spremljanje, MCP integracija in razvijalski portal.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Inženirski temelj za storitve, konektorje, workflowe in cloud-native dostavo.',
        },
        {
          title: 'KumuluzAI Platform',
          text: 'AI agenti, pomočniki, dostop do znanja, uporaba orodij, upravljanje in revizijska sledljivost.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovano za poslovna okolja avtomatizacije',
      body: [
        'Rešitve Business API so zasnovane za organizacije, ki morajo poslovne zmožnosti izpostaviti varno in dosledno prek več kanalov, sistemov, workflowov in AI agentov.',
        'Mogoče jih je implementirati v oblačnih, hibridnih ali lokalnih okoljih ter integrirati z obstoječimi poslovnimi sistemi.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Cloud-native implementacija',
          text: 'Gradite API-je kot sodobne storitve, primerne za kontejnerizirana in na Kubernetes osnovana okolja.',
        },
        {
          title: 'Hibridna integracija',
          text: 'Izpostavite zmožnosti iz lokalnih sistemov oblačnim aplikacijam, workflowom ali agentom.',
        },
        {
          title: 'Združljivost z lokalnim okoljem',
          text: 'Podprite okolja, kjer občutljivi podatki ali regulatorne zahteve terjajo lokalni nadzor.',
        },
        {
          title: 'Integracija upravljanja API-jev',
          text: 'Izpostavite in upravljajte Business API-je prek Kumuluz API.',
        },
        {
          title: 'AgenticAI integracija',
          text: 'Naredite izbrane Business API-je na voljo kot nadzorovana orodja za KumuluzAI agente.',
        },
        {
          title: 'Integracija workflowov',
          text: 'Uporabite Business API-je znotraj Temporal, Camunda ali podobnih pogonov workflowov.',
        },
        {
          title: 'Varnost po zasnovi',
          text: 'Implementirajte avtentikacijo, avtorizacijo, validacijo, revizijsko sledljivost in vzorce varnega izvajanja.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kje se Business API-ji obnesejo',
      body: [
        'Business API-ji so uporabni povsod, kjer organizacije ponavljajoče gradijo iste zmožnosti prek produktov, kanalov, workflowov in scenarijev avtomatizacije.',
      ],
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Bančništvo in finančne storitve',
          text: 'Podatki o strankah, KYC, uvajanje, plačila, katalogi izdelkov, računovodske storitve, avtomatizacija workflowov in orodja za AI agente.',
        },
        {
          title: 'Zavarovalništvo',
          text: 'Podatki o policah, status škodnih zahtevkov, podatki o strankah, katalogi izdelkov, uvajanje, partnerske storitve, workflowi škod in z AI podprta avtomatizacija.',
        },
        {
          title: 'Javni sektor',
          text: 'Storitve za državljane, status primerov, oddaja dokumentov, API-ji workflowov, medinstitucionalna izmenjava podatkov in z AI podprti upravni procesi.',
        },
        {
          title: 'Energetika in komunala',
          text: 'Storitve za stranke, obračunavanje, naročnine, storitvene zahteve, podatki števcev, workflowi in z AI omogočena podpora strankam.',
        },
        {
          title: 'Proizvodnja in poslovne storitve',
          text: 'Katalogi izdelkov, naročila, partnerski portali, storitve za stranke, API-ji dobavne verige in avtomatizacija workflowov.',
        },
        {
          title: 'Digitalne platforme in tržnice',
          text: 'Ponovno uporabne zmožnosti za večkanalne produkte, partnerske ekosisteme, na API-jih osnovane platforme in AgenticAI avtomatizacijo.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo',
      intro:
        'Organizacije lahko začnejo s poslovnimi zmožnostmi, ki jih najpogosteje gradijo znova, in se postopoma razvijejo proti ponovno uporabni platformi Business API.',
      items: [
        {
          title: 'Prepoznajte ponavljajoče se zmožnosti',
          text: 'Analiziramo produkte, sisteme, workflowe in primere uporabe agentov, da prepoznamo ponavljajoče se poslovne funkcije.',
        },
        {
          title: 'Prioritizirajte API-je z visoko vrednostjo',
          text: 'Izberemo zmožnosti z največjim potencialom ponovne uporabe in poslovno vrednostjo.',
        },
        {
          title: 'Določite domene in pogodbe',
          text: 'Določimo API domene, pogodbe, podatkovne modele, lastništvo, verzioniranje in načela življenjskega cikla.',
        },
        {
          title: 'Preslikajte uporabo agentov in workflowov',
          text: 'Prepoznamo, kateri API-ji naj bodo izpostavljeni AI agentom, kateri naj se uporabljajo v determinističnih workflowih in kje so potrebne odobritve.',
        },
        {
          title: 'Povežite poslovne sisteme',
          text: 'API-ji se povežejo z osrednjimi sistemi, podatkovnimi bazami, obstoječimi API-ji, workflowi ali tretjimi storitvami.',
        },
        {
          title: 'Implementirajte ponovno uporabne Business API-je',
          text: 'Zmožnosti se implementirajo s cloud-native, API-first in za workflowe pripravljenimi vzorci.',
        },
        {
          title: 'Varujte in upravljajte dostop',
          text: 'Konfigurirajo se avtentikacija, avtorizacija, politike dostopa, spremljanje, dokumentacija in upravljanje življenjskega cikla.',
        },
        {
          title: 'Izpostavite produktom, agentom in workflowom',
          text: 'Business API-ji postanejo na voljo aplikacijam, portalom, partnerjem, AI agentom in pogonom workflowov.',
        },
        {
          title: 'Razširite v platformo zmožnosti',
          text: 'Dodatni Business API-ji se dodajajo in upravljajo kot del širšega ponovno uporabnega platformskega temelja.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Izdelki Kumuluz, uporabljeni v tej rešitvi',
      body: [
        'Business API-ji za digitalne produkte in AI agente se izvajajo prek več izdelkov Kumuluz, od katerih ima vsak svojo vlogo.',
      ],
      items: [
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Ponovno uporabne poslovne zmožnosti za produkte, agente, workflowe in partnerske ekosisteme.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev in prehod za katalogizacijo, izpostavljanje, varovanje in spremljanje Business API-jev.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Inženirski temelj za implementacijo storitev, konektorjev, workflowov in cloud-native dostave.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platforma, kjer agenti lahko uporabljajo Business API-je kot vodena orodja.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz za Business API-je',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Ponovno uporabne poslovne zmožnosti',
          text: 'Spremenite ponavljajočo se funkcionalnost v ponovno uporabne API-je, namesto da bi jo gradili za vsak projekt posebej.',
        },
        {
          title: 'Za AgenticAI pripravljeno po zasnovi',
          text: 'Pripravite Business API-je kot vodena orodja za AI agente in MCP-usmerjene vzorce integracije.',
        },
        {
          title: 'Za workflowe pripravljeno izvajanje',
          text: 'Uporabite Business API-je znotraj Temporal, Camunda ali podobnih pogonov za deterministično avtomatizacijo poslovnih procesov.',
        },
        {
          title: 'Dosledna poslovna logika',
          text: 'Izpostavite skupne operacije prek standardiziranih API-jev med produkti, workflowi in agenti.',
        },
        {
          title: 'Voden življenjski cikel API-jev',
          text: 'Upravljajte dokumentacijo, dostop, različice, porabnike, odvisnosti in uporabo.',
        },
        {
          title: 'Deluje z obstoječimi sistemi',
          text: 'Ovijte in ponovno uporabite obstoječe poslovne zmožnosti, ne da bi naenkrat zamenjali vse.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'Sunesis združuje poslovni inženiring, arhitekturo API-jev, integracije, avtomatizacijo workflowov, cloud-native dostavo in strokovno znanje AgenticAI.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Pripravljeni, da poslovne zmožnosti naredite ponovno uporabne za produkte, workflowe in AI agente?',
      body: [
        'Kumuluz organizacijam pomaga spremeniti ponavljajočo se poslovno funkcionalnost v ponovno uporabne, vodene in za AgenticAI pripravljene Business API-je.',
        'Začnite z zmožnostmi, ki jih vaši timi najpogosteje gradijo znova, in se razvijte proti ponovno uporabni platformi poslovnih zmožnosti za digitalne produkte, AI agente in deterministične workflowe.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite Kumuluz Business APIs',
    },
  ],
}

export const businessApisPage: Record<LanguageCode, SolutionPageContent> = {
  en,
  sl,
}
