import {
  Activity,
  Bell,
  BookMarked,
  Bot,
  Boxes,
  Cable,
  ClipboardList,
  CreditCard,
  Handshake,
  Layers,
  LayoutGrid,
  Lock,
  Package,
  ShieldCheck,
  ShoppingCart,
  Users,
  Workflow,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { ProductPageContent } from '../../views/products/types'

const en: ProductPageContent = {
  seo: {
    title:
      'Kumuluz Business APIs | AgenticAI-ready Business Capabilities for Digital Products',
    description:
      'Kumuluz Business APIs provide reusable, AgenticAI-ready business capabilities for digital products, AI agents, MCP tool integration and deterministic workflow automation with Temporal or Camunda.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz Business APIs',
    title:
      'AgenticAI-ready business capabilities for digital products and process automation',
    body: [
      'Kumuluz Business APIs help organizations accelerate digital product development and AgenticAI process automation through reusable business APIs for common digital capabilities.',
      'They are designed not only for portals, mobile apps and partner integrations, but also for AI agents, MCP-based tool integration and workflow orchestration with platforms such as Temporal and Camunda.',
      'Instead of rebuilding the same business functions for every application, workflow or AI agent, teams can reuse APIs for payments, product catalogs, customer data, orders, subscriptions, invoicing, KYC, onboarding and more — with deterministic execution where process control, regulation or business reliability require it.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore business capabilities',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Digital products and AI agents need reliable business capabilities',
      body: [
        'Every digital product needs core business functionality. Customer data. Product information. Orders. Payments. Subscriptions. Invoices. Onboarding. KYC. Notifications. Case data. Business status checks. Integration with existing systems.',
        'The same is now true for AI agents. AgenticAI solutions need safe, governed and predictable access to business capabilities. An AI agent may need to retrieve customer information, check eligibility, prepare a case, initiate onboarding, update a ticket, request approval or trigger a workflow.',
        'If these capabilities are rebuilt project by project — or exposed directly and inconsistently to AI agents — organizations create duplicated effort, inconsistent behavior, governance risk and unpredictable process execution.',
        'Kumuluz Business APIs provide reusable, controlled and AgenticAI-ready business capabilities that can be used by applications, portals, partners, AI agents and workflow engines.',
      ],
      columns: 3,
      items: [
        {
          title: 'Repeated development effort',
          text: 'Teams repeatedly build similar business functions for every new digital product, channel, workflow or AI use case.',
        },
        {
          title: 'Inconsistent business logic',
          text: 'Different applications, integrations or agents may implement customer, product, payment or onboarding logic differently.',
        },
        {
          title: 'Unsafe AI tool exposure',
          text: 'AI agents need business tools, but exposing backend systems directly can create security, governance and reliability risks.',
        },
        {
          title: 'Non-deterministic automation',
          text: 'AI agents are powerful, but business processes often require deterministic steps, approvals, validation and auditability.',
        },
        {
          title: 'Difficult workflow integration',
          text: 'Business capabilities are often not designed for orchestration in workflow engines such as Temporal or Camunda.',
        },
        {
          title: 'Higher maintenance and compliance risk',
          text: 'Duplicated implementations make testing, auditability, regulation and long-term maintenance harder.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'A reusable business capability layer for humans, systems and AI agents',
      body: [
        'Kumuluz Business APIs provide a reusable API layer for common business functions that digital products, enterprise systems, workflow engines and AI agents need.',
        'They can expose capabilities from existing enterprise systems, wrap legacy functionality, standardize business operations or provide new reusable services for digital channels and AgenticAI automation.',
        'Because they are designed to work with AI agents and deterministic workflows, Kumuluz Business APIs help organizations combine the flexibility of AgenticAI with the reliability of process orchestration.',
        'Used together with KumuluzAI, Kumuluz API and Kumuluz Digital Platform, Business APIs become a controlled tool layer for enterprise automation.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Build once, reuse across channels and agents',
          text: 'Create reusable business capabilities that can be used by portals, mobile apps, partner systems, workflow engines and AI agents.',
        },
        {
          title: 'Make AI agents safer and more useful',
          text: 'Expose approved business capabilities as governed tools instead of giving agents uncontrolled access to backend systems.',
        },
        {
          title: 'Combine AgenticAI with deterministic workflows',
          text: 'Use AI for reasoning, guidance and decision support while executing process-critical steps through controlled APIs and workflow engines.',
        },
        {
          title: 'Accelerate digital product delivery',
          text: 'Give product teams ready-to-use business capabilities so they can focus on user experience and business value.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for AgenticAI and AI agent tool use',
      body: [
        'AgenticAI solutions become valuable when agents can do more than answer questions. They need to retrieve business data, call tools, interact with systems and participate in business workflows.',
        'Kumuluz Business APIs are designed to act as a safe and reusable business tool layer for AI agents. They can be exposed to agents through controlled tool interfaces, including MCP-oriented integration patterns, while preserving access control, validation, observability and auditability.',
        'This enables organizations to build AI agents that can support real business processes without bypassing enterprise governance.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'AI-agent-ready tools',
          text: 'Expose business capabilities as structured tools that AI agents can call safely and predictably.',
        },
        {
          title: 'MCP-oriented integration',
          text: 'Design Business APIs so they can be exposed through MCP-compatible tool patterns where appropriate.',
        },
        {
          title: 'Controlled execution',
          text: 'Apply validation, authorization, business rules and approval requirements before actions are executed.',
        },
        {
          title: 'Human-in-the-loop support',
          text: 'Route sensitive actions to human review or approval before completing a business process.',
        },
        {
          title: 'Audit-friendly interactions',
          text: 'Track which agent, user, workflow or system called which business API and why.',
        },
        {
          title: 'Reusable across agents',
          text: 'Use the same business API capability across multiple AI agents, assistants and automation scenarios.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Agentic flexibility with deterministic workflow control',
      body: [
        'AI agents are excellent at interpreting intent, retrieving knowledge, preparing context and assisting users. But many enterprise processes cannot rely only on probabilistic reasoning.',
        'Regulated, financial, operational or business-critical processes often require deterministic execution: defined steps, validations, approvals, retries, compensation, audit trails and predictable outcomes.',
        'Kumuluz Business APIs are designed to work inside workflow automation architectures using orchestration platforms such as Temporal and Camunda — combining AI agents for reasoning and context, Business APIs for governed capabilities and workflow engines for deterministic process execution.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Workflow-ready APIs',
          text: 'Business APIs can be designed as clear, versioned and reliable activities or service tasks within workflow engines.',
        },
        {
          title: 'Temporal integration patterns',
          text: 'Use Business APIs as deterministic activities in long-running, resilient workflows.',
        },
        {
          title: 'Camunda integration patterns',
          text: 'Use Business APIs as service tasks, connectors or process automation steps in BPMN-driven workflows.',
        },
        {
          title: 'Validation and approvals',
          text: 'Support process checkpoints, human approvals and business rule validation before actions are committed.',
        },
        {
          title: 'Retries and compensation',
          text: 'Design business operations to support retry behavior, idempotency, rollback or compensation where needed.',
        },
        {
          title: 'Deterministic process boundaries',
          text: 'Let agents assist and recommend, while workflow engines ensure controlled execution of critical business steps.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with Kumuluz Business APIs',
      intro:
        'Kumuluz Business APIs support digital product development, enterprise integration, AgenticAI automation and workflow-based process orchestration.',
      items: [
        {
          icon: LayoutGrid,
          title: 'Digital product backends',
          text: 'Use reusable APIs as the backend foundation for new digital products and services.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer self-service portals',
            'Mobile applications',
            'Digital onboarding journeys',
            'Partner portals',
            'Subscription-based services',
            'Digital commerce platforms',
          ],
        },
        {
          icon: Bot,
          title: 'AgenticAI process automation',
          text: 'Expose business capabilities as governed tools that AI agents can use to support or automate business processes.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer lookup agents',
            'Claims support agents',
            'KYC assistance agents',
            'Order status agents',
            'Case preparation agents',
            'Service request agents',
            'Compliance support agents',
          ],
        },
        {
          icon: Workflow,
          title: 'Workflow orchestration',
          text: 'Use Business APIs as workflow activities or service tasks inside deterministic process automation platforms.',
          bulletsTitle: 'Examples',
          bullets: [
            'Onboarding workflows',
            'KYC workflows',
            'Claims processing workflows',
            'Subscription lifecycle workflows',
            'Approval workflows',
            'Case management workflows',
            'Customer service workflows',
          ],
        },
        {
          icon: Layers,
          title: 'Reusable business capability layer',
          text: 'Expose selected business functions as reusable APIs across the organization.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer data APIs',
            'Product catalog APIs',
            'Order management APIs',
            'Payment APIs',
            'Subscription APIs',
            'Invoice APIs',
            'Notification APIs',
          ],
        },
        {
          icon: Cable,
          title: 'Legacy system API enablement',
          text: 'Wrap existing systems with modern APIs so their capabilities can be reused by digital channels, agents and workflows.',
          bulletsTitle: 'Examples',
          bullets: [
            'Legacy core system API wrappers',
            'ERP capability exposure',
            'CRM data access APIs',
            'Billing system integration',
            'Document system integration',
            'Mainframe or legacy service exposure',
          ],
        },
        {
          icon: Handshake,
          title: 'Partner and ecosystem services',
          text: 'Expose reusable business functions to partners, suppliers or external digital ecosystems.',
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
      type: 'capabilities',
      id: 'capabilities',
      title: 'Example business API capabilities',
      intro:
        'Kumuluz Business APIs can include reusable capabilities across customer, product, transaction, onboarding, compliance and operational domains.',
      items: [
        {
          icon: Users,
          title: 'Customer and identity',
          text: 'Reusable APIs for customer profiles, customer data, user accounts, identity-related workflows and customer lifecycle operations.',
          bulletsTitle: 'Example APIs',
          bullets: [
            'Customer profile API',
            'Customer data API',
            'User account API',
            'Customer consent API',
            'Customer status API',
            'Customer lifecycle API',
            'Customer eligibility API',
          ],
        },
        {
          icon: Package,
          title: 'Products and catalogs',
          text: 'APIs for exposing product information, service catalogs, pricing, availability and related digital product data.',
          bulletsTitle: 'Example APIs',
          bullets: [
            'Product catalog API',
            'Product details API',
            'Pricing API',
            'Availability API',
            'Product recommendation API',
            'Product configuration API',
            'Offer API',
          ],
        },
        {
          icon: ShoppingCart,
          title: 'Orders and transactions',
          text: 'Reusable APIs for ordering, transaction handling, order status, confirmations and related business processes.',
          bulletsTitle: 'Example APIs',
          bullets: [
            'Order API',
            'Order status API',
            'Transaction API',
            'Payment initiation API',
            'Payment status API',
            'Confirmation API',
            'Refund or cancellation API',
          ],
        },
        {
          icon: CreditCard,
          title: 'Subscriptions and billing',
          text: 'APIs for subscription-based services, billing, invoicing, renewals and account-related financial interactions.',
          bulletsTitle: 'Example APIs',
          bullets: [
            'Subscription API',
            'Subscription status API',
            'Plan management API',
            'Invoice API',
            'Billing API',
            'Renewal API',
            'Payment due API',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'KYC and onboarding',
          text: 'Reusable APIs for onboarding journeys, identity verification, document collection, KYC processes and compliance-related workflows.',
          bulletsTitle: 'Example APIs',
          bullets: [
            'Onboarding API',
            'KYC process API',
            'Identity verification API',
            'Document submission API',
            'Application status API',
            'Compliance check API',
            'Approval status API',
          ],
        },
        {
          icon: ClipboardList,
          title: 'Cases, tasks and workflows',
          text: 'APIs for case management, task handling, process status, assignment, escalation and workflow interaction.',
          bulletsTitle: 'Example APIs',
          bullets: [
            'Case API',
            'Case status API',
            'Task API',
            'Task assignment API',
            'Escalation API',
            'Workflow status API',
            'Approval API',
          ],
        },
        {
          icon: Bell,
          title: 'Notifications and communication',
          text: 'APIs for sending and managing notifications, messages, reminders and user communication across digital channels.',
          bulletsTitle: 'Example APIs',
          bullets: [
            'Notification API',
            'Email message API',
            'SMS message API',
            'Push notification API',
            'Reminder API',
            'Communication preference API',
            'Conversation handover API',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Core capabilities',
      intro:
        'Kumuluz Business APIs combine reusable business functionality, AI-agent-ready tool design, workflow readiness and enterprise integration patterns.',
      items: [
        {
          icon: Boxes,
          title: 'Reusable API design',
          text: 'Business APIs are designed as reusable capabilities rather than one-off endpoints for a single application.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Reusable API contracts',
            'Business capability modeling',
            'Domain-oriented API design',
            'Consistent API behavior',
            'API-first development',
            'Versioning-ready API structure',
            'Cross-channel and cross-agent reuse',
          ],
        },
        {
          icon: Bot,
          title: 'AI tool readiness',
          text: 'Business APIs can be exposed as tools for AI agents through controlled tool interfaces, so agents interact with enterprise systems using approved business capabilities instead of direct, uncontrolled backend access.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Agent-callable APIs',
            'Tool metadata and descriptions',
            'MCP-oriented exposure patterns',
            'Input and output schemas',
            'Tool permission models',
            'Agent-specific access policies',
            'Safe execution boundaries',
          ],
        },
        {
          icon: Workflow,
          title: 'Workflow readiness',
          text: 'Business APIs can be designed for deterministic workflow execution in platforms such as Temporal and Camunda, making them suitable for long-running business processes, approvals, retries and process-controlled automation.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Workflow activity design',
            'Camunda service task patterns',
            'Temporal activity patterns',
            'Idempotency support',
            'Retry and compensation readiness',
            'Process status visibility',
            'Long-running workflow support',
          ],
        },
        {
          icon: Layers,
          title: 'Business capability abstraction',
          text: 'Kumuluz Business APIs can abstract the complexity of underlying systems and expose simpler, business-oriented API interfaces.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Legacy system abstraction',
            'Backend system aggregation',
            'Business-friendly API design',
            'Domain capability exposure',
            'Simplified integration contracts',
            'Reduced channel and agent complexity',
            'Separation of digital channels from backend complexity',
          ],
        },
        {
          icon: Cable,
          title: 'Integration with existing systems',
          text: 'Business APIs can connect to existing enterprise systems, databases, APIs, services and workflows.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Integration with core systems',
            'ERP and CRM integration',
            'Billing and payment system integration',
            'Document and workflow system integration',
            'API and event-based integration',
            'Data transformation',
            'Backend orchestration',
          ],
        },
        {
          icon: BookMarked,
          title: 'API governance readiness',
          text: 'Kumuluz Business APIs can be governed, documented and exposed using API management practices, and used together with Kumuluz API to manage access, documentation, subscriptions, versions and consumers in a structured way.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API catalog readiness',
            'Documentation-ready APIs',
            'Version management',
            'Access control integration',
            'Subscription-ready API exposure',
            'Developer portal compatibility',
            'API lifecycle governance',
          ],
        },
        {
          icon: Lock,
          title: 'Security and access control',
          text: 'Business APIs can be designed with enterprise security requirements in mind, especially when exposed to AI agents and automated workflows.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Authentication and authorization patterns',
            'OAuth2 and OIDC compatibility',
            'Role-based access control',
            'Service-to-service security',
            'Agent-to-tool authorization',
            'Sensitive data handling',
            'Audit-friendly access patterns',
          ],
        },
        {
          icon: Activity,
          title: 'Observability and lifecycle support',
          text: 'Reusable APIs must be observable, maintainable and manageable over time. For AgenticAI and workflow use cases, organizations need to know which agent, workflow, user or system invoked a capability.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API usage visibility',
            'Agent and workflow invocation tracking',
            'Monitoring and logging',
            'Error tracking',
            'Performance visibility',
            'API lifecycle management',
            'Deprecation planning',
            'Operational supportability',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Business APIs as a controlled capability layer',
      body: [
        'Kumuluz Business APIs create a reusable capability layer between digital channels, AI agents, workflow engines and enterprise systems.',
        'This layer helps organizations build faster while keeping business logic, integration complexity, AI tool access and process execution under control.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Digital channels',
          text: 'Web applications, mobile apps, portals, partner systems and customer-facing services that consume business APIs.',
        },
        {
          title: 'AI agents and assistants',
          text: 'AgenticAI systems that use Business APIs as governed tools for retrieving data, initiating actions and supporting processes.',
        },
        {
          title: 'Workflow engines',
          text: 'Temporal, Camunda or other workflow platforms that orchestrate deterministic business processes using Business APIs as activities or service tasks.',
        },
        {
          title: 'Business API layer',
          text: 'Reusable API capabilities such as customer, product, order, payment, subscription, invoice, KYC, onboarding, case and approval APIs.',
        },
        {
          title: 'Orchestration and integration layer',
          text: 'Logic that connects Business APIs with core systems, external services, workflows and data sources.',
        },
        {
          title: 'Enterprise systems',
          text: 'Existing applications, databases, core systems, ERP, CRM, billing, document systems and third-party services.',
        },
        {
          title: 'API management layer',
          text: 'Optional API management, catalog, access control, developer portal and monitoring through Kumuluz API.',
        },
        {
          title: 'Platform and operations layer',
          text: 'Deployment, security, observability, CI/CD, configuration and cloud-native operational foundations.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed to work with KumuluzAI, workflows and API management',
      body: [
        'Kumuluz Business APIs become especially powerful when combined with KumuluzAI, workflow engines and Kumuluz API.',
        'KumuluzAI provides the AgenticAI platform where agents reason, retrieve knowledge and decide what support is needed. Kumuluz Business APIs provide the controlled business tools agents can use. Workflow engines such as Temporal and Camunda provide deterministic process execution where reliability, regulation or business rules require strict control. Kumuluz API provides API management, documentation, access control and monitoring.',
        'Together, they create a strong foundation for enterprise automation.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'KumuluzAI',
          text: 'AI agents use Business APIs as governed tools to access data, initiate actions and support business processes.',
        },
        {
          title: 'MCP tool integration',
          text: 'Business APIs can be exposed through MCP-oriented tool patterns so agents can discover and use approved capabilities.',
        },
        {
          title: 'Temporal and Camunda',
          text: 'Workflow engines execute deterministic process steps using Business APIs as activities, service tasks or connectors.',
        },
        {
          title: 'Kumuluz API',
          text: 'Business APIs can be cataloged, secured, exposed and monitored through Kumuluz API.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Business APIs form the reusable backend capability layer of cloud-native digital platforms.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise automation environments',
      body: [
        'Kumuluz Business APIs are designed for organizations that need to expose business capabilities securely and consistently across multiple digital channels, AI agents, workflow engines and enterprise systems.',
        'They can be implemented as part of new cloud-native platforms, modernization initiatives, API enablement programs or AgenticAI automation architectures.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Cloud-native implementation',
          text: 'Build Business APIs as modern services that can run in cloud-native, containerized and Kubernetes-based environments.',
        },
        {
          title: 'Hybrid enterprise integration',
          text: 'Expose business capabilities from systems that may remain on-premise while digital channels, agents or workflows run in cloud or hybrid environments.',
        },
        {
          title: 'On-premise compatibility',
          text: 'Support environments where sensitive systems, data or regulatory requirements require local deployment.',
        },
        {
          title: 'API management integration',
          text: 'Expose and manage Business APIs through Kumuluz API or existing API management platforms.',
        },
        {
          title: 'AgenticAI platform integration',
          text: 'Expose selected Business APIs as governed tools for KumuluzAI agents and assistants.',
        },
        {
          title: 'Workflow engine integration',
          text: 'Use Business APIs inside Temporal, Camunda or similar workflow automation platforms.',
        },
        {
          title: 'Security by design',
          text: 'Implement access control, authentication, authorization, validation and auditability across business capabilities.',
        },
        {
          title: 'Reusable delivery model',
          text: 'Use a consistent delivery pattern for new Business APIs across teams, products, workflows and AI agents.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where Kumuluz Business APIs fit',
      body: [
        'Kumuluz Business APIs are useful wherever organizations need to build multiple digital products, reuse business capabilities, automate processes and expose existing systems through modern APIs.',
      ],
      columns: 3,
      items: [
        {
          title: 'Banking and financial services',
          text: 'Customer data, KYC, onboarding, payments, product catalogs, account services, workflow automation and AI agent tools for digital banking processes.',
        },
        {
          title: 'Insurance',
          text: 'Policy data, claims status, customer information, product catalogs, onboarding, partner services, claims workflows and AI-assisted process automation.',
        },
        {
          title: 'Energy and utilities',
          text: 'Customer services, billing, subscriptions, meter data, service requests, workflow orchestration and AI-enabled customer support.',
        },
        {
          title: 'Manufacturing and enterprise services',
          text: 'Product catalogs, orders, partner portals, customer services, service subscriptions, supply-chain APIs and workflow automation.',
        },
        {
          title: 'Public sector',
          text: 'Citizen services, case status, document submission, workflow APIs, inter-institutional data exchange and AI-assisted administrative processes.',
        },
        {
          title: 'Digital platforms and marketplaces',
          text: 'Reusable business capabilities for multi-channel products, partner ecosystems, API-driven digital services and AgenticAI automation.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz Business APIs',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Faster digital product delivery',
          text: 'Product teams can use reusable business capabilities instead of rebuilding common functions for every new solution.',
        },
        {
          title: 'AgenticAI-ready by design',
          text: 'Business APIs are designed to be used as governed tools by AI agents and assistants, including MCP-oriented integration patterns.',
        },
        {
          title: 'Deterministic workflow execution',
          text: 'Business APIs can be used inside Temporal, Camunda and similar workflow engines for controlled execution of business-critical processes.',
        },
        {
          title: 'Consistent business logic',
          text: 'Common business operations are exposed through standardized APIs, reducing inconsistent implementations across channels, workflows and agents.',
        },
        {
          title: 'Better reuse of existing systems',
          text: 'Existing enterprise systems can be exposed through modern APIs without replacing everything at once.',
        },
        {
          title: 'API-first automation foundation',
          text: 'Business capabilities become reusable digital assets that can support portals, mobile apps, partner integrations, AI agents and digital ecosystems.',
        },
        {
          title: 'Works with KumuluzAI and Kumuluz API',
          text: 'Business APIs can serve as the tool layer for KumuluzAI agents and can be managed, secured, documented and monitored through Kumuluz API.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Kumuluz Business APIs are developed and delivered by Sunesis, combining enterprise software engineering, API architecture, AgenticAI, workflow automation, integrations and digital platform delivery experience.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with Kumuluz Business APIs',
      intro:
        'Kumuluz Business APIs can be introduced gradually by identifying the most valuable reusable business capabilities and exposing them through modern APIs for digital products, agents and workflows.',
      items: [
        {
          title: 'Identify reusable business capabilities',
          text: 'We analyze existing digital products, business processes and systems to identify capabilities that can be reused across channels, workflows and AI agents.',
        },
        {
          title: 'Define API domains and contracts',
          text: 'We define business API domains, API contracts, data models, ownership, versioning principles and tool metadata where APIs will be used by agents.',
        },
        {
          title: 'Map agent and workflow usage',
          text: 'We identify which capabilities should be exposed to AI agents, which should be executed through deterministic workflows and where human approvals are needed.',
        },
        {
          title: 'Connect existing systems',
          text: 'Business APIs are connected to existing core systems, databases, workflows or external services.',
        },
        {
          title: 'Implement reusable API services',
          text: 'APIs are implemented as reusable services using cloud-native, API-first and workflow-ready development patterns.',
        },
        {
          title: 'Secure and govern access',
          text: 'Access control, authentication, authorization, validation, monitoring and governance are configured for users, systems, agents and workflows.',
        },
        {
          title: 'Expose to product teams, agents and workflows',
          text: 'Business APIs are made available to digital product teams, portals, mobile apps, partners, AI agents and workflow engines.',
        },
        {
          title: 'Evolve into a business capability platform',
          text: 'Over time, more capabilities are added, reused and managed as part of a broader digital and AgenticAI automation platform.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Part of the Kumuluz product family',
      body: [
        'Kumuluz Business APIs are part of the broader Kumuluz product family for Agentic AI, digital platforms, API management and crowdsensing.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'AI agents can use Business APIs as governed tools to access customer data, retrieve order status, initiate workflows or support business process automation.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Business APIs can form the reusable backend capability layer of cloud-native digital platforms.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Business APIs can be cataloged, secured, exposed and monitored through Kumuluz API.',
        },
        {
          label: 'Data',
          title: 'Kumuluz Crowdsensing',
          text: 'Crowdsensing capabilities and collected data can be exposed as reusable APIs for smart services, analytics and AI-enabled decision support.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Ready to make business capabilities reusable for products, agents and workflows?',
      body: [
        'Kumuluz Business APIs help organizations create reusable, AgenticAI-ready and workflow-ready business capabilities for faster digital product development and controlled process automation.',
        'Start with the business capabilities your teams rebuild most often — and turn them into reusable digital assets that can be used by applications, AI agents and deterministic workflows.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Contact us',
    },
  ],
}

const sl: ProductPageContent = {
  seo: {
    title:
      'Kumuluz Business APIs | AgenticAI-ready poslovne zmožnosti za digitalne produkte',
    description:
      'Kumuluz Business APIs zagotavljajo ponovno uporabne, AgenticAI-ready poslovne zmožnosti za digitalne produkte, AI agente, integracijo MCP orodij in deterministično avtomatizacijo workflowov s Temporal ali Camunda.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz Business APIs',
    title:
      'AgenticAI-ready poslovne zmožnosti za digitalne produkte in avtomatizacijo procesov',
    body: [
      'Kumuluz Business APIs organizacijam pomagajo pospešiti razvoj digitalnih produktov in AgenticAI avtomatizacijo procesov s ponovno uporabnimi poslovnimi API-ji za pogoste digitalne zmožnosti.',
      'Zasnovani niso le za portale, mobilne aplikacije in partnerske integracije, ampak tudi za AI agente, integracijo orodij na osnovi MCP in orkestracijo workflowov s platformami, kot sta Temporal in Camunda.',
      'Namesto ponovne gradnje istih poslovnih funkcij za vsako aplikacijo, workflow ali AI agenta lahko ekipe ponovno uporabijo API-je za plačila, kataloge izdelkov, podatke o strankah, naročila, naročnine, izdajanje računov, KYC, uvajanje in druge poslovne zmožnosti — z determinističnim izvajanjem tam, kjer to zahtevajo nadzor procesov, regulativa ali poslovna zanesljivost.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite poslovne zmožnosti',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Digitalni produkti in AI agenti potrebujejo zanesljive poslovne zmožnosti',
      body: [
        'Vsak digitalni produkt potrebuje osnovne poslovne funkcionalnosti. Podatke o strankah. Informacije o izdelkih. Naročila. Plačila. Naročnine. Račune. Uvajanje. KYC. Obvestila. Podatke o primerih. Preverbe poslovnega statusa. Integracijo z obstoječimi sistemi.',
        'Enako zdaj velja za AI agente. AgenticAI rešitve potrebujejo varen, nadzorovan in predvidljiv dostop do poslovnih zmožnosti. AI agent lahko potrebuje pridobitev informacij o stranki, preverbo upravičenosti, pripravo primera, sprožitev uvajanja, posodobitev zahtevka, zahtevo po odobritvi ali sprožitev workflowa.',
        'Če se te zmožnosti gradijo znova za vsak projekt — ali se AI agentom izpostavljajo neposredno in nedosledno — organizacije ustvarjajo podvojeno delo, nedosledno vedenje, tveganja upravljanja in nepredvidljivo izvajanje procesov.',
        'Kumuluz Business APIs zagotavljajo ponovno uporabne, nadzorovane in AgenticAI-ready poslovne zmožnosti, ki jih lahko uporabljajo aplikacije, portali, partnerji, AI agenti in workflow pogoni.',
      ],
      columns: 3,
      items: [
        {
          title: 'Ponavljajoč se razvojni napor',
          text: 'Ekipe znova gradijo podobne poslovne funkcije za vsak nov digitalni produkt, kanal, workflow ali AI primer uporabe.',
        },
        {
          title: 'Nedosledna poslovna logika',
          text: 'Različne aplikacije, integracije ali agenti lahko logiko strank, izdelkov, plačil ali uvajanja izvajajo različno.',
        },
        {
          title: 'Nevarno izpostavljanje AI orodij',
          text: 'AI agenti potrebujejo poslovna orodja, vendar neposredno izpostavljanje zalednih sistemov lahko ustvari varnostna, upravljavska in zanesljivostna tveganja.',
        },
        {
          title: 'Nedeterministična avtomatizacija',
          text: 'AI agenti so zmogljivi, vendar poslovni procesi pogosto zahtevajo deterministične korake, odobritve, validacijo in sledljivost.',
        },
        {
          title: 'Težavna integracija workflowov',
          text: 'Poslovne zmožnosti pogosto niso zasnovane za orkestracijo v workflow pogonih, kot sta Temporal ali Camunda.',
        },
        {
          title: 'Večje tveganje vzdrževanja in skladnosti',
          text: 'Podvojene implementacije otežujejo testiranje, sledljivost, regulativo in dolgoročno vzdrževanje.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Ponovno uporabna plast poslovnih zmožnosti za ljudi, sisteme in AI agente',
      body: [
        'Kumuluz Business APIs zagotavljajo ponovno uporabno API plast za pogoste poslovne funkcije, ki jih potrebujejo digitalni produkti, poslovni sistemi, workflow pogoni in AI agenti.',
        'Izpostavijo lahko zmožnosti obstoječih poslovnih sistemov, ovijejo zapuščeno funkcionalnost, standardizirajo poslovne operacije ali zagotovijo nove ponovno uporabne storitve za digitalne kanale in AgenticAI avtomatizacijo.',
        'Ker so zasnovani za delo z AI agenti in determinističnimi workflowi, Kumuluz Business APIs organizacijam pomagajo združiti prožnost AgenticAI z zanesljivostjo orkestracije procesov.',
        'Skupaj s KumuluzAI, Kumuluz API in Kumuluz Digital Platform Business APIs postanejo nadzorovana plast orodij za poslovno avtomatizacijo.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Zgradite enkrat, uporabite v kanalih in agentih',
          text: 'Ustvarite ponovno uporabne poslovne zmožnosti, ki jih lahko uporabljajo portali, mobilne aplikacije, partnerski sistemi, workflow pogoni in AI agenti.',
        },
        {
          title: 'Naredite AI agente varnejše in uporabnejše',
          text: 'Izpostavite odobrene poslovne zmožnosti kot nadzorovana orodja namesto, da bi agentom dali nenadzorovan dostop do zalednih sistemov.',
        },
        {
          title: 'Združite AgenticAI z determinističnimi workflowi',
          text: 'Uporabite AI za sklepanje, usmerjanje in podporo odločanju, kritične korake procesov pa izvajajte prek nadzorovanih API-jev in workflow pogonov.',
        },
        {
          title: 'Pospešite dostavo digitalnih produktov',
          text: 'Produktnim ekipam zagotovite poslovne zmožnosti, pripravljene za uporabo, da se lahko osredotočijo na uporabniško izkušnjo in poslovno vrednost.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovani za AgenticAI in uporabo orodij AI agentov',
      body: [
        'AgenticAI rešitve postanejo dragocene, ko agenti znajo več kot le odgovarjati na vprašanja. Pridobivati morajo poslovne podatke, klicati orodja, komunicirati s sistemi in sodelovati v poslovnih workflowih.',
        'Kumuluz Business APIs so zasnovani tako, da delujejo kot varna in ponovno uporabna plast poslovnih orodij za AI agente. Agentom jih je mogoče izpostaviti prek nadzorovanih vmesnikov orodij, vključno z MCP-usmerjenimi vzorci integracije, ob ohranjanju nadzora dostopa, validacije, opazljivosti in sledljivosti.',
        'To organizacijam omogoča gradnjo AI agentov, ki lahko podpirajo resnične poslovne procese, ne da bi zaobšli poslovno upravljanje.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'AI-agent-ready orodja',
          text: 'Izpostavite poslovne zmožnosti kot strukturirana orodja, ki jih AI agenti lahko kličejo varno in predvidljivo.',
        },
        {
          title: 'MCP-usmerjena integracija',
          text: 'Zasnujte Business APIs tako, da jih je mogoče izpostaviti prek MCP-združljivih vzorcev orodij, kjer je to primerno.',
        },
        {
          title: 'Nadzorovano izvajanje',
          text: 'Pred izvedbo dejanj uveljavite validacijo, avtorizacijo, poslovna pravila in zahteve po odobritvi.',
        },
        {
          title: 'Podpora za human-in-the-loop',
          text: 'Občutljiva dejanja pred zaključkom poslovnega procesa usmerite v človeški pregled ali odobritev.',
        },
        {
          title: 'Sledljive interakcije',
          text: 'Sledite, kateri agent, uporabnik, workflow ali sistem je klical kateri poslovni API in zakaj.',
        },
        {
          title: 'Ponovno uporabni med agenti',
          text: 'Isto zmožnost poslovnega API-ja uporabite v več AI agentih, asistentih in scenarijih avtomatizacije.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Agentska prožnost z determinističnim nadzorom workflowov',
      body: [
        'AI agenti so odlični pri razlaganju namena, pridobivanju znanja, pripravi konteksta in pomoči uporabnikom. A mnogi poslovni procesi se ne morejo zanašati le na verjetnostno sklepanje.',
        'Regulirani, finančni, operativni ali poslovno-kritični procesi pogosto zahtevajo deterministično izvajanje: določene korake, validacije, odobritve, ponovne poskuse, kompenzacijo, revizijske sledi in predvidljive izide.',
        'Kumuluz Business APIs so zasnovani za delo znotraj arhitektur avtomatizacije workflowov z orkestracijskimi platformami, kot sta Temporal in Camunda — združujejo AI agente za sklepanje in kontekst, Business APIs za nadzorovane zmožnosti in workflow pogone za deterministično izvajanje procesov.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'API-ji, pripravljeni za workflowe',
          text: 'Business APIs je mogoče zasnovati kot jasne, verzionirane in zanesljive aktivnosti ali storitvene naloge znotraj workflow pogonov.',
        },
        {
          title: 'Vzorci integracije s Temporal',
          text: 'Uporabite Business APIs kot deterministične aktivnosti v dolgotrajnih, odpornih workflowih.',
        },
        {
          title: 'Vzorci integracije s Camunda',
          text: 'Uporabite Business APIs kot storitvene naloge, konektorje ali korake avtomatizacije procesov v BPMN workflowih.',
        },
        {
          title: 'Validacija in odobritve',
          text: 'Podprite kontrolne točke procesov, človeške odobritve in validacijo poslovnih pravil, preden se dejanja izvedejo.',
        },
        {
          title: 'Ponovni poskusi in kompenzacija',
          text: 'Zasnujte poslovne operacije za podporo ponovnim poskusom, idempotentnosti, povrnitvi ali kompenzaciji, kjer je to potrebno.',
        },
        {
          title: 'Deterministične meje procesov',
          text: 'Naj agenti pomagajo in priporočajo, medtem ko workflow pogoni zagotavljajo nadzorovano izvajanje kritičnih poslovnih korakov.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite s Kumuluz Business APIs',
      intro:
        'Kumuluz Business APIs podpirajo razvoj digitalnih produktov, poslovno integracijo, AgenticAI avtomatizacijo in orkestracijo procesov na osnovi workflowov.',
      items: [
        {
          icon: LayoutGrid,
          title: 'Zaledja digitalnih produktov',
          text: 'Uporabite ponovno uporabne API-je kot zaledni temelj za nove digitalne produkte in storitve.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Samopostrežni portali za stranke',
            'Mobilne aplikacije',
            'Digitalne poti uvajanja',
            'Partnerski portali',
            'Naročniške storitve',
            'Platforme za digitalno trgovino',
          ],
        },
        {
          icon: Bot,
          title: 'AgenticAI avtomatizacija procesov',
          text: 'Izpostavite poslovne zmožnosti kot nadzorovana orodja, ki jih AI agenti lahko uporabljajo za podporo ali avtomatizacijo poslovnih procesov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Agenti za iskanje strank',
            'Agenti za podporo škodnim primerom',
            'Agenti za pomoč pri KYC',
            'Agenti za status naročil',
            'Agenti za pripravo primerov',
            'Agenti za storitvene zahtevke',
            'Agenti za podporo skladnosti',
          ],
        },
        {
          icon: Workflow,
          title: 'Orkestracija workflowov',
          text: 'Uporabite Business APIs kot aktivnosti workflowov ali storitvene naloge znotraj determinističnih platform za avtomatizacijo procesov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Workflowi uvajanja',
            'Workflowi KYC',
            'Workflowi obravnave škod',
            'Workflowi življenjskega cikla naročnin',
            'Workflowi odobritev',
            'Workflowi vodenja primerov',
            'Workflowi storitev za stranke',
          ],
        },
        {
          icon: Layers,
          title: 'Ponovno uporabna plast poslovnih zmožnosti',
          text: 'Izpostavite izbrane poslovne funkcije kot ponovno uporabne API-je po vsej organizaciji.',
          bulletsTitle: 'Primeri',
          bullets: [
            'API-ji za podatke o strankah',
            'API-ji za katalog izdelkov',
            'API-ji za upravljanje naročil',
            'API-ji za plačila',
            'API-ji za naročnine',
            'API-ji za račune',
            'API-ji za obvestila',
          ],
        },
        {
          icon: Cable,
          title: 'API-omogočanje zapuščenih sistemov',
          text: 'Ovijte obstoječe sisteme s sodobnimi API-ji, da je njihove zmožnosti mogoče ponovno uporabiti v digitalnih kanalih, agentih in workflowih.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Ovojnice API-jev zapuščenih osrednjih sistemov',
            'Izpostavljanje zmožnosti ERP',
            'API-ji za dostop do podatkov CRM',
            'Integracija obračunskih sistemov',
            'Integracija dokumentnih sistemov',
            'Izpostavljanje storitev velikih ali zapuščenih sistemov',
          ],
        },
        {
          icon: Handshake,
          title: 'Partnerske in ekosistemske storitve',
          text: 'Izpostavite ponovno uporabne poslovne funkcije partnerjem, dobaviteljem ali zunanjim digitalnim ekosistemom.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Partnerski API-ji za izdelke',
            'Partnerski API-ji za naročila',
            'Partnerski API-ji za uvajanje',
            'B2B integracijski API-ji',
            'API-ji za izmenjavo podatkov',
            'Partnerski storitveni API-ji',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Primeri zmožnosti poslovnih API-jev',
      intro:
        'Kumuluz Business APIs lahko vključujejo ponovno uporabne zmožnosti na področjih strank, izdelkov, transakcij, uvajanja, skladnosti in operacij.',
      items: [
        {
          icon: Users,
          title: 'Stranke in identiteta',
          text: 'Ponovno uporabni API-ji za profile strank, podatke o strankah, uporabniške račune, identitetne workflowe in operacije življenjskega cikla strank.',
          bulletsTitle: 'Primeri API-jev',
          bullets: [
            'API za profil stranke',
            'API za podatke o strankah',
            'API za uporabniški račun',
            'API za soglasja strank',
            'API za status stranke',
            'API za življenjski cikel stranke',
            'API za upravičenost stranke',
          ],
        },
        {
          icon: Package,
          title: 'Izdelki in katalogi',
          text: 'API-ji za izpostavljanje informacij o izdelkih, katalogov storitev, cen, razpoložljivosti in povezanih podatkov o digitalnih izdelkih.',
          bulletsTitle: 'Primeri API-jev',
          bullets: [
            'API za katalog izdelkov',
            'API za podrobnosti izdelka',
            'API za cene',
            'API za razpoložljivost',
            'API za priporočila izdelkov',
            'API za konfiguracijo izdelka',
            'API za ponudbe',
          ],
        },
        {
          icon: ShoppingCart,
          title: 'Naročila in transakcije',
          text: 'Ponovno uporabni API-ji za naročanje, obravnavo transakcij, status naročil, potrditve in povezane poslovne procese.',
          bulletsTitle: 'Primeri API-jev',
          bullets: [
            'API za naročila',
            'API za status naročila',
            'API za transakcije',
            'API za sprožitev plačila',
            'API za status plačila',
            'API za potrditve',
            'API za vračilo ali preklic',
          ],
        },
        {
          icon: CreditCard,
          title: 'Naročnine in obračunavanje',
          text: 'API-ji za naročniške storitve, obračunavanje, izdajanje računov, podaljšanja in finančne interakcije, povezane z računom.',
          bulletsTitle: 'Primeri API-jev',
          bullets: [
            'API za naročnine',
            'API za status naročnine',
            'API za upravljanje paketov',
            'API za račune',
            'API za obračunavanje',
            'API za podaljšanja',
            'API za zapadla plačila',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'KYC in uvajanje',
          text: 'Ponovno uporabni API-ji za poti uvajanja, preverjanje identitete, zbiranje dokumentov, procese KYC in workflowe, povezane s skladnostjo.',
          bulletsTitle: 'Primeri API-jev',
          bullets: [
            'API za uvajanje',
            'API za proces KYC',
            'API za preverjanje identitete',
            'API za oddajo dokumentov',
            'API za status vloge',
            'API za preverbo skladnosti',
            'API za status odobritve',
          ],
        },
        {
          icon: ClipboardList,
          title: 'Primeri, naloge in workflowi',
          text: 'API-ji za vodenje primerov, obravnavo nalog, status procesov, dodeljevanje, eskalacijo in interakcijo z workflowi.',
          bulletsTitle: 'Primeri API-jev',
          bullets: [
            'API za primere',
            'API za status primera',
            'API za naloge',
            'API za dodeljevanje nalog',
            'API za eskalacijo',
            'API za status workflowa',
            'API za odobritve',
          ],
        },
        {
          icon: Bell,
          title: 'Obvestila in komunikacija',
          text: 'API-ji za pošiljanje in upravljanje obvestil, sporočil, opomnikov in komunikacije z uporabniki po digitalnih kanalih.',
          bulletsTitle: 'Primeri API-jev',
          bullets: [
            'API za obvestila',
            'API za e-poštna sporočila',
            'API za SMS sporočila',
            'API za potisna obvestila',
            'API za opomnike',
            'API za komunikacijske preference',
            'API za predajo pogovora',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Osrednje zmožnosti',
      intro:
        'Kumuluz Business APIs združujejo ponovno uporabno poslovno funkcionalnost, zasnovo orodij za AI agente, pripravljenost za workflowe in vzorce poslovne integracije.',
      items: [
        {
          icon: Boxes,
          title: 'Zasnova ponovno uporabnih API-jev',
          text: 'Business APIs so zasnovani kot ponovno uporabne zmožnosti namesto enkratnih končnih točk za eno samo aplikacijo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Ponovno uporabne API pogodbe',
            'Modeliranje poslovnih zmožnosti',
            'Domensko usmerjena zasnova API-jev',
            'Dosledno vedenje API-jev',
            'Razvoj API-first',
            'Struktura API-jev, pripravljena za verzioniranje',
            'Ponovna uporaba med kanali in agenti',
          ],
        },
        {
          icon: Bot,
          title: 'Pripravljenost za AI orodja',
          text: 'Business APIs je mogoče izpostaviti kot orodja za AI agente prek nadzorovanih vmesnikov orodij, tako da agenti komunicirajo s poslovnimi sistemi prek odobrenih poslovnih zmožnosti namesto z neposrednim, nenadzorovanim dostopom do zaledja.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'API-ji, ki jih lahko kličejo agenti',
            'Metapodatki in opisi orodij',
            'MCP-usmerjeni vzorci izpostavljanja',
            'Vhodne in izhodne sheme',
            'Modeli dovoljenj orodij',
            'Agentu specifične politike dostopa',
            'Varne meje izvajanja',
          ],
        },
        {
          icon: Workflow,
          title: 'Pripravljenost za workflowe',
          text: 'Business APIs je mogoče zasnovati za deterministično izvajanje workflowov na platformah, kot sta Temporal in Camunda, kar jih naredi primerne za dolgotrajne poslovne procese, odobritve, ponovne poskuse in procesno nadzorovano avtomatizacijo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Zasnova aktivnosti workflowov',
            'Vzorci storitvenih nalog Camunda',
            'Vzorci aktivnosti Temporal',
            'Podpora idempotentnosti',
            'Pripravljenost za ponovne poskuse in kompenzacijo',
            'Vidnost statusa procesov',
            'Podpora dolgotrajnim workflowom',
          ],
        },
        {
          icon: Layers,
          title: 'Abstrakcija poslovnih zmožnosti',
          text: 'Kumuluz Business APIs lahko abstrahirajo kompleksnost osnovnih sistemov in izpostavijo enostavnejše, poslovno usmerjene API vmesnike.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Abstrakcija zapuščenih sistemov',
            'Agregacija zalednih sistemov',
            'Poslovno prijazna zasnova API-jev',
            'Izpostavljanje domenskih zmožnosti',
            'Poenostavljene integracijske pogodbe',
            'Zmanjšana kompleksnost kanalov in agentov',
            'Ločitev digitalnih kanalov od kompleksnosti zaledja',
          ],
        },
        {
          icon: Cable,
          title: 'Integracija z obstoječimi sistemi',
          text: 'Business APIs se lahko povežejo z obstoječimi poslovnimi sistemi, podatkovnimi bazami, API-ji, storitvami in workflowi.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Integracija z osrednjimi sistemi',
            'Integracija ERP in CRM',
            'Integracija obračunskih in plačilnih sistemov',
            'Integracija dokumentnih sistemov in sistemov workflowov',
            'API in dogodkovna integracija',
            'Transformacija podatkov',
            'Orkestracija zaledja',
          ],
        },
        {
          icon: BookMarked,
          title: 'Pripravljenost za API governance',
          text: 'Kumuluz Business APIs je mogoče upravljati, dokumentirati in izpostaviti z uporabo praks upravljanja API-jev, skupaj s Kumuluz API pa strukturirano upravljati dostop, dokumentacijo, naročnine, verzije in uporabnike.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Pripravljenost za API katalog',
            'API-ji, pripravljeni za dokumentacijo',
            'Upravljanje verzij',
            'Integracija nadzora dostopa',
            'Izpostavljanje API-jev, pripravljeno za naročnine',
            'Združljivost s portalom za razvijalce',
            'Upravljanje življenjskega cikla API-jev',
          ],
        },
        {
          icon: Lock,
          title: 'Varnost in nadzor dostopa',
          text: 'Business APIs je mogoče zasnovati z mislijo na poslovne varnostne zahteve, zlasti ko so izpostavljeni AI agentom in avtomatiziranim workflowom.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Vzorci avtentikacije in avtorizacije',
            'Združljivost z OAuth2 in OIDC',
            'Nadzor dostopa na osnovi vlog',
            'Varnost med storitvami',
            'Avtorizacija agent-orodje',
            'Ravnanje z občutljivimi podatki',
            'Sledljivi vzorci dostopa',
          ],
        },
        {
          icon: Activity,
          title: 'Opazljivost in podpora življenjskemu ciklu',
          text: 'Ponovno uporabni API-ji morajo biti opazljivi, vzdržljivi in obvladljivi skozi čas. Pri AgenticAI in workflowih morajo organizacije vedeti, kateri agent, workflow, uporabnik ali sistem je sprožil zmožnost.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Vidnost uporabe API-jev',
            'Sledenje klicem agentov in workflowov',
            'Spremljanje in beleženje',
            'Sledenje napakam',
            'Vidnost zmogljivosti',
            'Upravljanje življenjskega cikla API-jev',
            'Načrtovanje opuščanja',
            'Operativna podpora',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Business APIs kot nadzorovana plast zmožnosti',
      body: [
        'Kumuluz Business APIs ustvarjajo ponovno uporabno plast zmožnosti med digitalnimi kanali, AI agenti, workflow pogoni in poslovnimi sistemi.',
        'Ta plast organizacijam pomaga graditi hitreje, hkrati pa ohranja nadzor nad poslovno logiko, kompleksnostjo integracij, dostopom AI orodij in izvajanjem procesov.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Digitalni kanali',
          text: 'Spletne aplikacije, mobilne aplikacije, portali, partnerski sistemi in storitve za stranke, ki uporabljajo poslovne API-je.',
        },
        {
          title: 'AI agenti in asistenti',
          text: 'AgenticAI sistemi, ki uporabljajo Business APIs kot nadzorovana orodja za pridobivanje podatkov, sprožanje dejanj in podporo procesom.',
        },
        {
          title: 'Workflow pogoni',
          text: 'Temporal, Camunda ali druge platforme workflowov, ki orkestrirajo deterministične poslovne procese z Business APIs kot aktivnostmi ali storitvenimi nalogami.',
        },
        {
          title: 'Plast poslovnih API-jev',
          text: 'Ponovno uporabne API zmožnosti, kot so API-ji za stranke, izdelke, naročila, plačila, naročnine, račune, KYC, uvajanje, primere in odobritve.',
        },
        {
          title: 'Orkestracijska in integracijska plast',
          text: 'Logika, ki povezuje Business APIs z osrednjimi sistemi, zunanjimi storitvami, workflowi in viri podatkov.',
        },
        {
          title: 'Poslovni sistemi',
          text: 'Obstoječe aplikacije, podatkovne baze, osrednji sistemi, ERP, CRM, obračunski sistemi, dokumentni sistemi in storitve tretjih oseb.',
        },
        {
          title: 'Plast upravljanja API-jev',
          text: 'Neobvezno upravljanje API-jev, katalog, nadzor dostopa, portal za razvijalce in spremljanje prek Kumuluz API.',
        },
        {
          title: 'Platformna in operativna plast',
          text: 'Uvajanje, varnost, opazljivost, CI/CD, konfiguracija in cloud-native operativni temelji.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Zasnovani za delo s KumuluzAI, workflowi in upravljanjem API-jev',
      body: [
        'Kumuluz Business APIs postanejo še posebej zmogljivi, ko se združijo s KumuluzAI, workflow pogoni in Kumuluz API.',
        'KumuluzAI zagotavlja AgenticAI platformo, kjer agenti sklepajo, pridobivajo znanje in odločajo, kakšna podpora je potrebna. Kumuluz Business APIs zagotavljajo nadzorovana poslovna orodja, ki jih agenti lahko uporabijo. Workflow pogoni, kot sta Temporal in Camunda, zagotavljajo deterministično izvajanje procesov tam, kjer zanesljivost, regulativa ali poslovna pravila zahtevajo strog nadzor. Kumuluz API zagotavlja upravljanje API-jev, dokumentacijo, nadzor dostopa in spremljanje.',
        'Skupaj ustvarjajo močan temelj za poslovno avtomatizacijo.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'KumuluzAI',
          text: 'AI agenti uporabljajo Business APIs kot nadzorovana orodja za dostop do podatkov, sprožanje dejanj in podporo poslovnim procesom.',
        },
        {
          title: 'Integracija MCP orodij',
          text: 'Business APIs je mogoče izpostaviti prek MCP-usmerjenih vzorcev orodij, da lahko agenti odkrivajo in uporabljajo odobrene zmožnosti.',
        },
        {
          title: 'Temporal in Camunda',
          text: 'Workflow pogoni izvajajo deterministične korake procesov z Business APIs kot aktivnostmi, storitvenimi nalogami ali konektorji.',
        },
        {
          title: 'Kumuluz API',
          text: 'Business APIs je mogoče katalogizirati, varovati, izpostaviti in spremljati prek Kumuluz API.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Business APIs tvorijo ponovno uporabno zaledno plast zmožnosti cloud-native digitalnih platform.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovani za okolja poslovne avtomatizacije',
      body: [
        'Kumuluz Business APIs so zasnovani za organizacije, ki morajo poslovne zmožnosti izpostavljati varno in dosledno v več digitalnih kanalih, AI agentih, workflow pogonih in poslovnih sistemih.',
        'Implementirati jih je mogoče kot del novih cloud-native platform, modernizacijskih pobud, programov omogočanja API-jev ali AgenticAI arhitektur avtomatizacije.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Cloud-native implementacija',
          text: 'Zgradite Business APIs kot sodobne storitve, ki lahko tečejo v cloud-native, kontejneriziranih in Kubernetes okoljih.',
        },
        {
          title: 'Hibridna poslovna integracija',
          text: 'Izpostavite poslovne zmožnosti sistemov, ki lahko ostanejo na lokaciji, medtem ko digitalni kanali, agenti ali workflowi tečejo v oblaku ali hibridnih okoljih.',
        },
        {
          title: 'Združljivost z lokalnim okoljem',
          text: 'Podprite okolja, kjer občutljivi sistemi, podatki ali regulativne zahteve terjajo lokalno namestitev.',
        },
        {
          title: 'Integracija z upravljanjem API-jev',
          text: 'Izpostavite in upravljajte Business APIs prek Kumuluz API ali obstoječih platform za upravljanje API-jev.',
        },
        {
          title: 'Integracija z AgenticAI platformo',
          text: 'Izpostavite izbrane Business APIs kot nadzorovana orodja za KumuluzAI agente in asistente.',
        },
        {
          title: 'Integracija z workflow pogoni',
          text: 'Uporabite Business APIs znotraj Temporal, Camunda ali podobnih platform za avtomatizacijo workflowov.',
        },
        {
          title: 'Varnost po zasnovi',
          text: 'Uveljavite nadzor dostopa, avtentikacijo, avtorizacijo, validacijo in sledljivost po vseh poslovnih zmožnostih.',
        },
        {
          title: 'Ponovno uporaben model dostave',
          text: 'Uporabite dosleden vzorec dostave za nove Business APIs med ekipami, produkti, workflowi in AI agenti.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kje se prilegajo Kumuluz Business APIs',
      body: [
        'Kumuluz Business APIs so uporabni povsod, kjer morajo organizacije graditi več digitalnih produktov, ponovno uporabljati poslovne zmožnosti, avtomatizirati procese in obstoječe sisteme izpostaviti prek sodobnih API-jev.',
      ],
      columns: 3,
      items: [
        {
          title: 'Bančništvo in finančne storitve',
          text: 'Podatki o strankah, KYC, uvajanje, plačila, katalogi izdelkov, računske storitve, avtomatizacija workflowov in orodja AI agentov za procese digitalnega bančništva.',
        },
        {
          title: 'Zavarovalništvo',
          text: 'Podatki o policah, status škod, informacije o strankah, katalogi izdelkov, uvajanje, partnerske storitve, workflowi škod in AI-podprta avtomatizacija procesov.',
        },
        {
          title: 'Energetika in oskrbne dejavnosti',
          text: 'Storitve za stranke, obračunavanje, naročnine, podatki števcev, storitveni zahtevki, orkestracija workflowov in AI-omogočena podpora strankam.',
        },
        {
          title: 'Proizvodnja in poslovne storitve',
          text: 'Katalogi izdelkov, naročila, partnerski portali, storitve za stranke, storitvene naročnine, API-ji oskrbne verige in avtomatizacija workflowov.',
        },
        {
          title: 'Javni sektor',
          text: 'Storitve za državljane, status primerov, oddaja dokumentov, API-ji workflowov, medinstitucionalna izmenjava podatkov in AI-podprti administrativni procesi.',
        },
        {
          title: 'Digitalne platforme in tržnice',
          text: 'Ponovno uporabne poslovne zmožnosti za večkanalne produkte, partnerske ekosisteme, API-vodene digitalne storitve in AgenticAI avtomatizacijo.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz Business APIs',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Hitrejša dostava digitalnih produktov',
          text: 'Produktne ekipe lahko uporabijo ponovno uporabne poslovne zmožnosti namesto, da bi za vsako novo rešitev znova gradile pogoste funkcije.',
        },
        {
          title: 'AgenticAI-ready po zasnovi',
          text: 'Business APIs so zasnovani za uporabo kot nadzorovana orodja AI agentov in asistentov, vključno z MCP-usmerjenimi vzorci integracije.',
        },
        {
          title: 'Deterministično izvajanje workflowov',
          text: 'Business APIs je mogoče uporabiti znotraj Temporal, Camunda in podobnih workflow pogonov za nadzorovano izvajanje poslovno-kritičnih procesov.',
        },
        {
          title: 'Dosledna poslovna logika',
          text: 'Pogoste poslovne operacije se izpostavljajo prek standardiziranih API-jev, kar zmanjšuje nedosledne implementacije med kanali, workflowi in agenti.',
        },
        {
          title: 'Boljša ponovna uporaba obstoječih sistemov',
          text: 'Obstoječe poslovne sisteme je mogoče izpostaviti prek sodobnih API-jev, ne da bi naenkrat zamenjali vse.',
        },
        {
          title: 'Temelj avtomatizacije API-first',
          text: 'Poslovne zmožnosti postanejo ponovno uporabna digitalna sredstva, ki podpirajo portale, mobilne aplikacije, partnerske integracije, AI agente in digitalne ekosisteme.',
        },
        {
          title: 'Deluje s KumuluzAI in Kumuluz API',
          text: 'Business APIs lahko služijo kot plast orodij za KumuluzAI agente ter jih je mogoče upravljati, varovati, dokumentirati in spremljati prek Kumuluz API.',
        },
        {
          title: 'Dostavlja Sunesis',
          text: 'Kumuluz Business APIs razvija in dostavlja Sunesis, ki združuje poslovni programski inženiring, API arhitekturo, AgenticAI, avtomatizacijo workflowov, integracije in izkušnje dostave digitalnih platform.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo s Kumuluz Business APIs',
      intro:
        'Kumuluz Business APIs je mogoče uvajati postopno, tako da prepoznamo najbolj dragocene ponovno uporabne poslovne zmožnosti in jih izpostavimo prek sodobnih API-jev za digitalne produkte, agente in workflowe.',
      items: [
        {
          title: 'Prepoznajte ponovno uporabne poslovne zmožnosti',
          text: 'Analiziramo obstoječe digitalne produkte, poslovne procese in sisteme, da prepoznamo zmožnosti, ki jih je mogoče ponovno uporabiti med kanali, workflowi in AI agenti.',
        },
        {
          title: 'Določite API domene in pogodbe',
          text: 'Določimo domene poslovnih API-jev, API pogodbe, podatkovne modele, lastništvo, načela verzioniranja in metapodatke orodij tam, kjer bodo API-je uporabljali agenti.',
        },
        {
          title: 'Preslikajte uporabo agentov in workflowov',
          text: 'Prepoznamo, katere zmožnosti naj bodo izpostavljene AI agentom, katere naj se izvajajo prek determinističnih workflowov in kje so potrebne človeške odobritve.',
        },
        {
          title: 'Povežite obstoječe sisteme',
          text: 'Business APIs se povežejo z obstoječimi osrednjimi sistemi, podatkovnimi bazami, workflowi ali zunanjimi storitvami.',
        },
        {
          title: 'Implementirajte ponovno uporabne API storitve',
          text: 'API-ji se implementirajo kot ponovno uporabne storitve z uporabo cloud-native, API-first in za workflowe pripravljenih razvojnih vzorcev.',
        },
        {
          title: 'Zavarujte in upravljajte dostop',
          text: 'Nadzor dostopa, avtentikacija, avtorizacija, validacija, spremljanje in upravljanje se konfigurirajo za uporabnike, sisteme, agente in workflowe.',
        },
        {
          title: 'Izpostavite produktnim ekipam, agentom in workflowom',
          text: 'Business APIs se dajo na voljo produktnim ekipam, portalom, mobilnim aplikacijam, partnerjem, AI agentom in workflow pogonom.',
        },
        {
          title: 'Razvijte se v platformo poslovnih zmožnosti',
          text: 'Sčasoma se dodaja, ponovno uporablja in upravlja več zmožnosti kot del širše platforme za digitalno in AgenticAI avtomatizacijo.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Del družine produktov Kumuluz',
      body: [
        'Kumuluz Business APIs so del širše družine produktov Kumuluz za Agentic AI, digitalne platforme, upravljanje API-jev in crowdsensing.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'AI agenti lahko uporabljajo Business APIs kot nadzorovana orodja za dostop do podatkov o strankah, pridobitev statusa naročil, sprožitev workflowov ali podporo avtomatizaciji poslovnih procesov.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Business APIs lahko tvorijo ponovno uporabno zaledno plast zmožnosti cloud-native digitalnih platform.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Business APIs je mogoče katalogizirati, varovati, izpostaviti in spremljati prek Kumuluz API.',
        },
        {
          label: 'Data',
          title: 'Kumuluz Crowdsensing',
          text: 'Crowdsensing zmožnosti in zbrane podatke je mogoče izpostaviti kot ponovno uporabne API-je za pametne storitve, analitiko in AI-podprto podporo odločanju.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Pripravljeni narediti poslovne zmožnosti ponovno uporabne za produkte, agente in workflowe?',
      body: [
        'Kumuluz Business APIs organizacijam pomagajo ustvariti ponovno uporabne, AgenticAI-ready in za workflowe pripravljene poslovne zmožnosti za hitrejši razvoj digitalnih produktov in nadzorovano avtomatizacijo procesov.',
        'Začnite s poslovnimi zmožnostmi, ki jih vaše ekipe najpogosteje gradijo znova — in jih spremenite v ponovno uporabna digitalna sredstva, ki jih lahko uporabljajo aplikacije, AI agenti in deterministični workflowi.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Kontaktirajte nas',
    },
  ],
}

export const businessApisPage: Record<LanguageCode, ProductPageContent> = {
  en,
  sl,
}
