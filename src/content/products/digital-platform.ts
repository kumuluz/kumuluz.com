import {
  Activity,
  Bot,
  Boxes,
  Building2,
  Cable,
  Cloud,
  Component,
  GitBranch,
  Layers,
  LayoutGrid,
  Plug,
  Server,
  ShieldCheck,
  Workflow,
  Wrench,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { ProductPageContent } from '../../views/products/types'

const en: ProductPageContent = {
  seo: {
    title:
      'Kumuluz Digital Platform | Cloud-native Platform for Digital Services and AI Agents',
    description:
      'Kumuluz Digital Platform provides cloud-native, API-first and AI-agent-ready foundations for enterprise digital services, APIs, MCP-enabled tools, connectors and deterministic workflows.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz Digital Platform',
    title:
      'Cloud-native foundation for digital services, APIs and AI-agent-ready enterprise platforms',
    body: [
      'Kumuluz Digital Platform helps organizations build modern, scalable and integration-ready digital solutions on cloud-native, microservice, API-first and AI-agent-ready architecture principles.',
      'It provides the engineering foundation for digital services, APIs, connectors, MCP-enabled tools and workflow orchestrations used by enterprise applications, portals, mobile apps, partner systems and AI agents.',
      'The platform is framework-flexible, implemented with modern MicroProfile and Jakarta EE compatible technologies, with Quarkus as the preferred foundation for new Java cloud-native projects.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore platform capabilities',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Digital platforms now need to serve applications, systems and AI agents',
      body: [
        'Many organizations build digital solutions project by project. Each new portal, backend, integration or customer-facing service introduces its own architecture, APIs, deployment model, security approach and operational patterns.',
        'Over time, this creates duplicated effort, inconsistent architecture and higher maintenance cost.',
        'With AgenticAI, the challenge becomes even broader. AI agents need safe access to enterprise capabilities — services, APIs, tools, workflows and connectors — but they should not interact directly with backend systems without clear boundaries, validation, governance and auditability.',
        'Kumuluz Digital Platform provides a reusable cloud-native foundation for building digital solutions and AI-agent-ready service layers in a structured way.',
      ],
      columns: 3,
      items: [
        {
          title: 'Duplicated platform work',
          text: 'Teams repeatedly rebuild common backend, integration, security and deployment foundations for every new digital solution.',
        },
        {
          title: 'Monolithic legacy constraints',
          text: 'Existing systems often slow down digital innovation because they are difficult to extend, expose through APIs or prepare for AI-agent usage.',
        },
        {
          title: 'Unsafe agent access to backend systems',
          text: 'AI agents need tools and business capabilities, but direct access to backend systems can create security, compliance and reliability risks.',
        },
        {
          title: 'Inconsistent APIs and integrations',
          text: 'Without shared platform principles, APIs, connectors and integrations become fragmented, hard to govern and difficult to reuse.',
        },
        {
          title: 'Non-deterministic process automation',
          text: 'AI agents can assist and reason, but many business-critical processes require deterministic workflows, validations, approvals and audit trails.',
        },
        {
          title: 'Operational complexity',
          text: 'Modern digital and AgenticAI-ready systems require deployment automation, observability, resilience and production readiness from the beginning.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'A reusable foundation for modern digital and AI-agent-ready solutions',
      body: [
        'Kumuluz Digital Platform provides a cloud-native foundation for building modular, API-first and integration-ready enterprise applications.',
        'It helps organizations accelerate development by using proven architecture patterns, reusable capabilities and modern platform practices instead of starting from scratch for each project.',
        'In AgenticAI architectures, Kumuluz Digital Platform plays a specific role: it helps teams build the services, APIs, connectors, MCP-enabled tools and deterministic workflows that AI agents can safely use.',
        'This makes it possible to prepare existing and new digital systems for AI-assisted automation while keeping process logic, integration boundaries and operational control in the platform layer.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Build faster with reusable foundations',
          text: 'Use proven patterns and shared platform capabilities to reduce repeated development effort.',
        },
        {
          title: 'Prepare systems for AI agents',
          text: 'Expose approved services, APIs, connectors and tools that agents can use safely and predictably.',
        },
        {
          title: 'Modernize without replacing everything',
          text: 'Introduce APIs, modular services, connectors and workflow boundaries around existing systems.',
        },
        {
          title: 'Improve long-term maintainability',
          text: 'Design applications with modularity, clear service boundaries and operational readiness from the start.',
        },
      ],
    },
    {
      type: 'cards',
      id: 'capabilities',
      title: 'AI-agent-ready digital platform foundations',
      body: [
        'AI agents become useful when they can safely interact with real enterprise systems. For that, organizations need well-designed services, APIs, connectors, tools and workflows — not direct, uncontrolled access to backend applications.',
        'Kumuluz Digital Platform helps teams build the digital service layer that connects enterprise applications, business processes and AI agents.',
        'It enables development of cloud-native services, APIs, MCP-enabled tools, connectors and workflow orchestrations that can be integrated with KumuluzAI or other AgenticAI platforms.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Agent-ready services',
          text: 'Build services that expose clear, controlled and reusable business or technical capabilities to applications and AI agents.',
        },
        {
          title: 'Tool-safe APIs',
          text: 'Design APIs that are safe to expose as agent tools — with clear inputs, outputs, permissions, validation, idempotency and auditability.',
        },
        {
          title: 'MCP-enabled tools',
          text: 'Create tool interfaces and MCP-compatible exposure patterns so agents can discover and use approved platform capabilities.',
        },
        {
          title: 'Connectors and adapters',
          text: 'Connect AI agents and digital applications to existing enterprise systems through controlled integration services.',
        },
        {
          title: 'Workflow orchestration',
          text: 'Build deterministic workflows with Temporal, Camunda or similar engines for processes that require reliability, auditability and control.',
        },
        {
          title: 'Reusable skills and capabilities',
          text: 'Package recurring business or technical functionality as reusable skills, services or platform capabilities.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Agentic flexibility with deterministic process control',
      body: [
        'AgenticAI introduces flexibility, but many enterprise processes still require deterministic execution: defined steps, validations, approvals, retries, compensations and audit trails.',
        'Kumuluz Digital Platform helps implement this deterministic layer through workflow orchestration, business services and APIs.',
        'AI agents can assist users, gather context, retrieve information or suggest actions, while services and workflow engines execute process-critical steps in a controlled and auditable way.',
        'Workflow orchestration can be implemented using platforms such as Temporal, Camunda or similar engines, depending on the process model and enterprise requirements.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Defined process steps',
          text: 'Model and execute process-critical steps through workflow engines rather than relying only on agent reasoning.',
        },
        {
          title: 'Service-based execution',
          text: 'Use cloud-native services and APIs as workflow activities, service tasks or connectors.',
        },
        {
          title: 'Human approvals',
          text: 'Introduce review and approval checkpoints where sensitive decisions require human confirmation.',
        },
        {
          title: 'Retries and compensation',
          text: 'Support resilient process execution with retries, timeout handling, rollback or compensation patterns.',
        },
        {
          title: 'Auditability',
          text: 'Track workflow progress, service calls, decisions, approvals and outcomes.',
        },
        {
          title: 'Agent-assisted workflows',
          text: 'Let AI agents support users and prepare context while deterministic workflows execute critical business operations.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with Kumuluz Digital Platform',
      intro:
        'Kumuluz Digital Platform supports enterprise digital solution scenarios, modernization initiatives and AgenticAI-ready service architectures.',
      items: [
        {
          icon: Building2,
          title: 'Enterprise digital platforms',
          text: 'Build complete digital platforms that support customer journeys, internal processes, partner services and business operations.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer self-service platforms',
            'Partner portals',
            'Business portals',
            'Internal enterprise platforms',
            'Digital service platforms',
            'Multi-channel digital solutions',
          ],
        },
        {
          icon: Bot,
          title: 'AI-agent-ready service layers',
          text: 'Create controlled service layers that expose approved capabilities to AI agents and AgenticAI platforms.',
          bulletsTitle: 'Examples',
          bullets: [
            'Agent-callable services',
            'Tool-safe APIs',
            'MCP-enabled tools',
            'Agent integration adapters',
            'Agentic workflow services',
            'Controlled backend access layers',
          ],
        },
        {
          icon: Plug,
          title: 'API-first backend platforms',
          text: 'Create modular backend platforms that expose business capabilities through secure, reusable APIs.',
          bulletsTitle: 'Examples',
          bullets: [
            'API-based backend systems',
            'Digital channel backends',
            'Mobile application backends',
            'Partner API platforms',
            'Internal service platforms',
            'Business capability APIs',
          ],
        },
        {
          icon: Workflow,
          title: 'Workflow orchestration platforms',
          text: 'Build process automation foundations using workflow engines and service-based execution.',
          bulletsTitle: 'Examples',
          bullets: [
            'Temporal-based workflows',
            'Camunda-based workflows',
            'Approval workflows',
            'Onboarding workflows',
            'Case management workflows',
            'Long-running business processes',
            'Human-in-the-loop process automation',
          ],
        },
        {
          icon: Layers,
          title: 'Cloud-native application modernization',
          text: 'Modernize existing systems using modular services, APIs, containers, connectors and incremental migration patterns.',
          bulletsTitle: 'Examples',
          bullets: [
            'Legacy system API enablement',
            'Modularization of monolithic systems',
            'Strangler pattern modernization',
            'AI-readiness for legacy systems',
            'Containerization readiness',
            'Cloud-native migration foundations',
            'Incremental modernization roadmaps',
          ],
        },
        {
          icon: Boxes,
          title: 'Microservice-based digital solutions',
          text: 'Build modular software systems where services can evolve independently while remaining integrated and manageable.',
          bulletsTitle: 'Examples',
          bullets: [
            'Domain-driven microservices',
            'Modular backend architectures',
            'Event-enabled services',
            'Service-based business platforms',
            'Independently deployable components',
            'Scalable distributed applications',
          ],
        },
        {
          icon: Component,
          title: 'Reusable digital capabilities',
          text: 'Create reusable platform capabilities that can be shared across digital products, channels, workflows and AI agents.',
          bulletsTitle: 'Examples',
          bullets: [
            'User and profile services',
            'Customer data APIs',
            'Product catalog APIs',
            'Order and subscription services',
            'Notification services',
            'Integration services',
            'Business workflow services',
            'Agent tools and skills',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Core platform capabilities',
      intro:
        'Kumuluz Digital Platform combines cloud-native architecture principles, reusable development patterns, AgenticAI-readiness and enterprise delivery experience into a foundation for modern digital systems.',
      items: [
        {
          icon: Cloud,
          title: 'Cloud-native architecture',
          text: 'Designed for modern cloud-native application development and deployment, with support for containerized workloads, scalable services, automated deployment and resilient architecture patterns.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Cloud-native application architecture',
            'Container-ready services',
            'Kubernetes-oriented deployment patterns',
            'Scalable backend design',
            'Resilience and availability patterns',
            'Environment portability',
            'Cloud, hybrid and on-premise deployment support',
          ],
        },
        {
          icon: Boxes,
          title: 'Framework-flexible, Quarkus-first',
          text: 'Not tied to a single runtime. It can be implemented using MicroProfile and Jakarta EE compatible technologies, with Quarkus as the preferred foundation for new Java cloud-native projects.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Framework-flexible implementation',
            'MicroProfile-compatible architecture patterns',
            'Jakarta EE compatible development principles',
            'Quarkus-first approach for new Java cloud-native projects',
            'Runtime and framework flexibility',
            'Kubernetes-oriented application design',
            'Avoidance of unnecessary platform lock-in',
          ],
        },
        {
          icon: Server,
          title: 'Service and API development',
          text: 'Supports development of cloud-native services and APIs that expose business and technical capabilities to applications, partners, workflows and AI agents.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Cloud-native service development',
            'API-first service design',
            'Business capability APIs',
            'Internal and external service APIs',
            'Agent-callable service patterns',
            'Service contracts and versioning',
            'Reusable API capabilities',
          ],
        },
        {
          icon: Wrench,
          title: 'MCP tools and agent integration',
          text: 'Enables teams to design services and APIs that can be exposed as MCP-enabled tools or agent-callable capabilities through controlled, well-defined integration boundaries.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'MCP-compatible tool patterns',
            'Agent-callable APIs',
            'Tool-safe service design',
            'Tool metadata and schemas',
            'Agent integration adapters',
            'Controlled backend access',
            'Reusable agent skills',
          ],
        },
        {
          icon: Workflow,
          title: 'Workflow orchestration',
          text: 'Supports deterministic workflow orchestration for business processes that require reliability, auditability and control, using Temporal, Camunda or similar engines.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Temporal workflow patterns',
            'Camunda workflow patterns',
            'Long-running process support',
            'Human-in-the-loop workflows',
            'Service task implementation',
            'Activity execution patterns',
            'Retry and compensation patterns',
            'Process observability',
          ],
        },
        {
          icon: Component,
          title: 'Microservice foundations',
          text: 'Supports modular service-based architectures where business capabilities can be developed, deployed and evolved independently with clear service boundaries.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Microservice architecture patterns',
            'Modular service design',
            'Domain-driven service boundaries',
            'Independent service evolution',
            'Service communication patterns',
            'Data ownership considerations',
            'Incremental modernization support',
          ],
        },
        {
          icon: Cable,
          title: 'Enterprise integration readiness',
          text: 'Designed to integrate with existing enterprise systems, data sources, APIs and business processes — and to become the controlled connector layer between AI agents and enterprise systems.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Integration with legacy systems',
            'Integration with enterprise applications',
            'API-based integration',
            'Event-driven integration patterns',
            'Connector and adapter development',
            'Data exchange workflows',
            'Partner system connectivity',
            'Backend-for-frontend patterns',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Security and identity integration',
          text: 'Provides secure access, identity integration and authorization patterns across users, services, APIs, tools and workflows.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Authentication and authorization patterns',
            'OAuth2 and OpenID Connect support patterns',
            'Enterprise identity provider integration',
            'Role-based access control',
            'API and tool security patterns',
            'Service-to-service security',
            'Secure session and token handling',
          ],
        },
        {
          icon: GitBranch,
          title: 'DevOps and deployment readiness',
          text: 'Designed to fit modern DevOps and platform engineering practices, with support for automated delivery, container-based deployment and production operations.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'CI/CD-ready application structure',
            'Containerized deployment',
            'Kubernetes deployment patterns',
            'Environment configuration management',
            'Automated release workflows',
            'Infrastructure and platform integration',
            'Production deployment support',
          ],
        },
        {
          icon: Activity,
          title: 'Observability and operations',
          text: 'Supports architecture patterns for monitoring, logging, tracing and operational visibility across services, APIs, workflows, integrations and agent-called tools.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Application logging patterns',
            'Metrics and monitoring',
            'Distributed tracing readiness',
            'OpenTelemetry-oriented observability',
            'Health checks and readiness probes',
            'Workflow and service call visibility',
            'Operational dashboards',
            'Production supportability',
          ],
        },
        {
          icon: LayoutGrid,
          title: 'Reusable platform patterns',
          text: 'Helps teams reuse proven patterns across digital initiatives instead of reinventing architecture, integration, workflow and deployment foundations for each project.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Reusable architecture templates',
            'Standardized backend patterns',
            'Shared service patterns',
            'Reusable API capabilities',
            'Tool and connector patterns',
            'Workflow implementation patterns',
            'Security and deployment templates',
            'Delivery accelerators',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'A platform architecture for applications, services and AI agents',
      body: [
        'Kumuluz Digital Platform is designed as a foundation for building modular digital systems that connect users, applications, APIs, services, workflows, AI agents and enterprise systems.',
        'It supports the creation of digital platforms where backend services, APIs, workflows, integrations and user-facing channels can evolve together without creating unnecessary complexity.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Digital channels',
          text: 'Web applications, mobile apps, customer portals, partner portals, internal tools and other user-facing digital services.',
        },
        {
          title: 'AI agents and assistants',
          text: 'KumuluzAI agents or other AgenticAI systems that use approved services, APIs, tools and workflows.',
        },
        {
          title: 'API and tool layer',
          text: 'Reusable APIs, MCP-enabled tools and agent-callable capabilities exposed through controlled access patterns.',
        },
        {
          title: 'Service layer',
          text: 'Modular backend services that encapsulate business logic, process support and domain-specific functionality.',
        },
        {
          title: 'Workflow orchestration layer',
          text: 'Temporal, Camunda or similar workflow engines that execute deterministic process steps, approvals and long-running workflows.',
        },
        {
          title: 'Integration connectors',
          text: 'Connectors and adapters that integrate services, workflows and agents with existing enterprise systems and external services.',
        },
        {
          title: 'Enterprise systems',
          text: 'Existing applications, databases, core systems, ERP, CRM, billing, document systems, third-party services and legacy platforms.',
        },
        {
          title: 'Platform and operations layer',
          text: 'Deployment, configuration, observability, security, CI/CD and cloud-native operational foundations.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise deployment environments',
      body: [
        'Kumuluz Digital Platform is suitable for organizations that need flexibility in where and how digital solutions and AI-agent-ready services are deployed.',
        'It supports cloud-native and hybrid deployment models, integration with enterprise platforms and operational practices required in production environments.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Cloud deployment',
          text: 'Deploy digital solutions on modern cloud platforms using cloud-native application and automation patterns.',
        },
        {
          title: 'Hybrid deployment',
          text: 'Support architectures where new digital services, agents or workflows connect to existing on-premise systems and private infrastructure.',
        },
        {
          title: 'On-premise deployment',
          text: 'Deploy in private enterprise environments where data, security or regulatory requirements demand local control.',
        },
        {
          title: 'Kubernetes-ready',
          text: 'Design applications and services for containerized deployment and Kubernetes-based operations.',
        },
        {
          title: 'OpenShift-compatible architecture',
          text: 'Support enterprise environments where OpenShift is the standard application platform.',
        },
        {
          title: 'DevOps integration',
          text: 'Integrate with CI/CD, infrastructure automation, GitOps and platform engineering workflows.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Modernize gradually and prepare systems for AI agents',
      body: [
        'Kumuluz Digital Platform helps organizations modernize existing systems incrementally.',
        'Instead of replacing everything at once, teams can expose legacy capabilities through APIs, introduce modular services around existing systems, create connectors and workflows, and gradually move toward cloud-native architecture.',
        'The same approach helps prepare enterprise systems for AgenticAI: selected capabilities can be exposed as safe services, tools or workflow steps instead of giving AI agents direct access to backend systems.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'API enablement',
          text: 'Expose existing business functionality through secure and reusable APIs.',
        },
        {
          title: 'Tool-safe service design',
          text: 'Design services and APIs that can be safely used by AI agents with clear inputs, outputs, permissions and validation.',
        },
        {
          title: 'MCP-enabled exposure',
          text: 'Prepare selected capabilities for MCP-compatible tool exposure where appropriate.',
        },
        {
          title: 'Modularization',
          text: 'Break large systems into more manageable modules or services where it creates business and technical value.',
        },
        {
          title: 'Workflow boundaries',
          text: 'Use workflow orchestration to create deterministic process boundaries around business-critical operations.',
        },
        {
          title: 'Strangler pattern',
          text: 'Build new capabilities around existing systems and gradually replace selected functionality over time.',
        },
        {
          title: 'Integration modernization',
          text: 'Replace point-to-point integration complexity with more structured API, connector and event-driven patterns.',
        },
        {
          title: 'Platform consolidation',
          text: 'Create shared foundations for multiple digital solutions, workflows and AI-agent use cases instead of isolated project-specific architectures.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Technology direction',
      title: 'Modern Java cloud-native direction',
      body: [
        'Kumuluz Digital Platform follows modern Java cloud-native architecture principles and is designed to work with current enterprise Java technologies.',
        'For new Java cloud-native projects, we primarily use Quarkus because it is well suited for Kubernetes-based deployment, fast startup, efficient resource usage and modern MicroProfile/Jakarta EE compatible development.',
        'KumuluzEE, our earlier open-source microservice framework, remains part of the Kumuluz history and is maintained where needed for existing environments. However, it is not the primary technology foundation for new Kumuluz Digital Platform projects.',
      ],
      quote:
        'Kumuluz Digital Platform is framework-flexible and Quarkus-first for new Java cloud-native projects.',
    },
    {
      type: 'kumuluz',
      title: 'Part of the Kumuluz product family',
      body: [
        'Kumuluz Digital Platform is part of the broader Kumuluz product family. It provides the engineering foundation for building the services, APIs, connectors, tools and workflows that other Kumuluz products can manage, expose, govern or use.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'KumuluzAI runs and governs AI agents. Kumuluz Digital Platform helps build the services, APIs, connectors and workflows that those agents can safely use.',
        },
        {
          label: 'APIs',
          title: 'Kumuluz API',
          text: 'Kumuluz API manages, exposes, secures and monitors APIs, including APIs and tools built on Kumuluz Digital Platform.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Kumuluz Business APIs provide reusable business capabilities that can be implemented, extended or integrated through Kumuluz Digital Platform.',
        },
        {
          label: 'Data',
          title: 'Kumuluz Crowdsensing',
          text: 'Kumuluz Crowdsensing can use digital platform services and APIs to support data collection, integration, analytics and smart services.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where Kumuluz Digital Platform fits',
      body: [
        'Kumuluz Digital Platform is suitable for organizations that need scalable, secure and integrated digital systems across complex environments — and want to prepare those systems for AI-assisted automation.',
      ],
      columns: 3,
      items: [
        {
          title: 'Banking and financial services',
          text: 'Digital banking platforms, customer journeys, onboarding, KYC, APIs, workflow automation and AI-agent-ready service layers.',
        },
        {
          title: 'Insurance',
          text: 'Digital insurance services, process support, integration platforms, customer portals, claims workflows and agent-callable business services.',
        },
        {
          title: 'Public sector',
          text: 'Digital administration, case management, secure workflows, document-heavy processes, citizen services and AI-assisted administrative support.',
        },
        {
          title: 'Energy and utilities',
          text: 'Customer engagement platforms, operational systems, integrations, data-driven digital services and AI-enabled process support.',
        },
        {
          title: 'Manufacturing and enterprise services',
          text: 'Partner portals, business platforms, product information systems, customer-facing digital services and AI-agent-ready integrations.',
        },
        {
          title: 'Technology and platform organizations',
          text: 'Cloud-native digital products, API platforms, modular backend systems, workflow orchestration and reusable digital capabilities.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz Digital Platform',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platform foundation instead of one-off applications',
          text: 'Kumuluz Digital Platform helps organizations create reusable digital foundations instead of rebuilding architecture for every project.',
        },
        {
          title: 'AI-agent-ready service architecture',
          text: 'The platform helps teams build services, APIs, tools, connectors and workflows that AI agents can use safely and predictably.',
        },
        {
          title: 'Cloud-native, API-first and framework-flexible',
          text: 'It supports modular, scalable and integration-ready systems built around APIs, services and modern deployment practices, with Quarkus as the preferred foundation for new Java cloud-native projects.',
        },
        {
          title: 'Deterministic process control',
          text: 'Kumuluz Digital Platform supports workflow orchestration where business-critical processes require defined steps, approvals, retries, compensation and auditability.',
        },
        {
          title: 'Works with existing enterprise environments',
          text: 'It is designed to integrate with existing systems, cloud platforms, identity providers, APIs and operational processes.',
        },
        {
          title: 'Supports gradual modernization',
          text: 'Organizations can modernize step by step through API enablement, modularization, containerization, workflow boundaries and AI-agent-ready service layers.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Kumuluz Digital Platform is developed and delivered by Sunesis, combining platform product development with enterprise engineering, integration, cloud-native, DevOps, AgenticAI and workflow automation expertise.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with Kumuluz Digital Platform',
      intro:
        'Kumuluz Digital Platform can be introduced as the foundation for a new digital initiative, modernization program or AI-agent-ready enterprise service layer.',
      items: [
        {
          title: 'Assess the digital and integration landscape',
          text: 'We analyze existing applications, integrations, business capabilities, digital channels, workflows and modernization goals.',
        },
        {
          title: 'Identify AI-agent-ready opportunities',
          text: 'We identify which services, APIs, connectors and workflows could safely support AI agents and which process boundaries must remain deterministic.',
        },
        {
          title: 'Define the target platform architecture',
          text: 'We design the target architecture, including APIs, services, connectors, workflows, deployment model, security, observability and governance.',
        },
        {
          title: 'Select the technology foundation',
          text: 'We select the most suitable implementation foundation. For new Java cloud-native projects, this is typically Quarkus; for other environments, we adapt to compatible enterprise technology requirements.',
        },
        {
          title: 'Build services, APIs and connectors',
          text: 'Core services, APIs, integration adapters, tool-safe endpoints and platform capabilities are implemented iteratively.',
        },
        {
          title: 'Implement workflow orchestration where needed',
          text: 'Temporal, Camunda or similar workflow engines are used where processes require deterministic execution, approvals, retries or long-running orchestration.',
        },
        {
          title: 'Expose capabilities to applications and agents',
          text: 'Digital products, portals, mobile apps, partner systems and AI agents can use approved services, APIs, tools and workflows.',
        },
        {
          title: 'Operate, evolve and scale',
          text: 'The platform grows over time with new capabilities, integrations, services, workflows and AI-agent-ready use cases.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Need a stronger foundation for digital platforms and AI-agent-ready services?',
      body: [
        'Kumuluz Digital Platform helps organizations build cloud-native, API-first and integration-ready digital solutions with reusable platform foundations.',
        'It also helps prepare enterprise systems for AgenticAI by enabling safe services, APIs, MCP-enabled tools, connectors and deterministic workflows that AI agents can use under control.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Contact us',
    },
  ],
}

const sl: ProductPageContent = {
  seo: {
    title:
      'Kumuluz Digital Platform | Cloud-native platforma za digitalne storitve in AI agente',
    description:
      'Kumuluz Digital Platform zagotavlja cloud-native, API-first in AI-agent-ready temelje za poslovne digitalne storitve, API-je, MCP-omogočena orodja, konektorje in deterministične workflowe.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz Digital Platform',
    title:
      'Cloud-native temelj za digitalne storitve, API-je in AI-agent-ready poslovne platforme',
    body: [
      'Kumuluz Digital Platform organizacijam pomaga graditi sodobne, skalabilne in integracijsko pripravljene digitalne rešitve na cloud-native, mikrostoritvenih, API-first in AI-agent-ready arhitekturnih načelih.',
      'Zagotavlja inženirski temelj za digitalne storitve, API-je, konektorje, MCP-omogočena orodja in orkestracije workflowov, ki jih uporabljajo poslovne aplikacije, portali, mobilne aplikacije, partnerski sistemi in AI agenti.',
      'Platforma je neodvisna od ogrodja in jo je mogoče implementirati s sodobnimi tehnologijami, združljivimi z MicroProfile in Jakarta EE, pri čemer je Quarkus prednostni temelj za nove Java cloud-native projekte.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite zmožnosti platforme',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Digitalne platforme morajo zdaj streči aplikacijam, sistemom in AI agentom',
      body: [
        'Mnoge organizacije gradijo digitalne rešitve projekt za projektom. Vsak nov portal, zaledni sistem, integracija ali storitev za stranke uvaja svojo arhitekturo, API-je, model namestitve, varnostni pristop in operativne vzorce.',
        'Sčasoma to ustvarja podvojeno delo, nedosledno arhitekturo in višje stroške vzdrževanja.',
        'Z AgenticAI postane izziv še širši. AI agenti potrebujejo varen dostop do poslovnih zmožnosti — storitev, API-jev, orodij, workflowov in konektorjev — vendar ne smejo neposredno komunicirati z zalednimi sistemi brez jasnih meja, validacije, upravljanja in sledljivosti.',
        'Kumuluz Digital Platform zagotavlja ponovno uporabni cloud-native temelj za strukturirano gradnjo digitalnih rešitev in AI-agent-ready storitvenih plasti.',
      ],
      columns: 3,
      items: [
        {
          title: 'Podvojeno platformsko delo',
          text: 'Ekipe vedno znova gradijo skupne zaledne, integracijske, varnostne in namestitvene temelje za vsako novo digitalno rešitev.',
        },
        {
          title: 'Omejitve monolitnih starih sistemov',
          text: 'Obstoječi sistemi pogosto zavirajo digitalne inovacije, ker jih je težko razširiti, izpostaviti prek API-jev ali pripraviti za uporabo AI agentov.',
        },
        {
          title: 'Nevaren dostop agentov do zalednih sistemov',
          text: 'AI agenti potrebujejo orodja in poslovne zmožnosti, vendar lahko neposreden dostop do zalednih sistemov ustvari varnostna, skladnostna in zanesljivostna tveganja.',
        },
        {
          title: 'Nedosledni API-ji in integracije',
          text: 'Brez skupnih platformskih načel postanejo API-ji, konektorji in integracije razdrobljeni, težko obvladljivi in težko ponovno uporabni.',
        },
        {
          title: 'Nedeterministična avtomatizacija procesov',
          text: 'AI agenti lahko pomagajo in sklepajo, vendar mnogi poslovno kritični procesi zahtevajo deterministične workflowe, validacije, odobritve in revizijske sledi.',
        },
        {
          title: 'Operativna kompleksnost',
          text: 'Sodobni digitalni in AgenticAI-ready sistemi že od začetka zahtevajo avtomatizacijo namestitve, opazljivost, odpornost in pripravljenost za produkcijo.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Ponovno uporabni temelj za sodobne digitalne in AI-agent-ready rešitve',
      body: [
        'Kumuluz Digital Platform zagotavlja cloud-native temelj za gradnjo modularnih, API-first in integracijsko pripravljenih poslovnih aplikacij.',
        'Organizacijam pomaga pospešiti razvoj z uporabo preverjenih arhitekturnih vzorcev, ponovno uporabnih zmožnosti in sodobnih platformskih praks namesto začenjanja od začetka za vsak projekt.',
        'V AgenticAI arhitekturah ima Kumuluz Digital Platform posebno vlogo: ekipam pomaga graditi storitve, API-je, konektorje, MCP-omogočena orodja in deterministične workflowe, ki jih AI agenti lahko varno uporabljajo.',
        'To omogoča pripravo obstoječih in novih digitalnih sistemov za AI-podprto avtomatizacijo, hkrati pa ohranja procesno logiko, integracijske meje in operativni nadzor v platformski plasti.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Hitrejša gradnja z uporabo temeljev',
          text: 'Uporabite preverjene vzorce in skupne platformske zmožnosti za zmanjšanje ponavljajočega se razvojnega dela.',
        },
        {
          title: 'Pripravite sisteme za AI agente',
          text: 'Izpostavite odobrene storitve, API-je, konektorje in orodja, ki jih agenti lahko uporabljajo varno in predvidljivo.',
        },
        {
          title: 'Modernizacija brez zamenjave vsega',
          text: 'Uvedite API-je, modularne storitve, konektorje in meje workflowov okrog obstoječih sistemov.',
        },
        {
          title: 'Boljša dolgoročna vzdržljivost',
          text: 'Aplikacije zasnujte z modularnostjo, jasnimi mejami storitev in operativno pripravljenostjo od začetka.',
        },
      ],
    },
    {
      type: 'cards',
      id: 'capabilities',
      title: 'Temelji AI-agent-ready digitalne platforme',
      body: [
        'AI agenti postanejo uporabni, ko lahko varno komunicirajo z realnimi poslovnimi sistemi. Za to organizacije potrebujejo dobro zasnovane storitve, API-je, konektorje, orodja in workflowe — ne neposrednega, nenadzorovanega dostopa do zalednih aplikacij.',
        'Kumuluz Digital Platform ekipam pomaga graditi digitalno storitveno plast, ki povezuje poslovne aplikacije, poslovne procese in AI agente.',
        'Omogoča razvoj cloud-native storitev, API-jev, MCP-omogočenih orodij, konektorjev in orkestracij workflowov, ki jih je mogoče integrirati s KumuluzAI ali drugimi AgenticAI platformami.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Storitve, pripravljene za agente',
          text: 'Gradite storitve, ki aplikacijam in AI agentom izpostavljajo jasne, nadzorovane in ponovno uporabne poslovne ali tehnične zmožnosti.',
        },
        {
          title: 'Tool-safe API-ji',
          text: 'Zasnujte API-je, ki jih je varno izpostaviti kot orodja agentov — z jasnimi vhodi, izhodi, dovoljenji, validacijo, idempotentnostjo in sledljivostjo.',
        },
        {
          title: 'MCP-omogočena orodja',
          text: 'Ustvarite vmesnike orodij in MCP-združljive vzorce izpostavljanja, da agenti lahko odkrijejo in uporabljajo odobrene platformske zmožnosti.',
        },
        {
          title: 'Konektorji in adapterji',
          text: 'Povežite AI agente in digitalne aplikacije z obstoječimi poslovnimi sistemi prek nadzorovanih integracijskih storitev.',
        },
        {
          title: 'Orkestracija workflowov',
          text: 'Gradite deterministične workflowe s Temporal, Camunda ali podobnimi pogoni za procese, ki zahtevajo zanesljivost, sledljivost in nadzor.',
        },
        {
          title: 'Ponovno uporabne veščine in zmožnosti',
          text: 'Ponavljajočo se poslovno ali tehnično funkcionalnost zapakirajte kot ponovno uporabne veščine, storitve ali platformske zmožnosti.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Agentska prožnost z determinističnim nadzorom procesov',
      body: [
        'AgenticAI uvaja prožnost, vendar mnogi poslovni procesi še vedno zahtevajo deterministično izvajanje: določene korake, validacije, odobritve, ponovne poskuse, kompenzacije in revizijske sledi.',
        'Kumuluz Digital Platform pomaga implementirati to deterministično plast prek orkestracije workflowov, poslovnih storitev in API-jev.',
        'AI agenti lahko pomagajo uporabnikom, zbirajo kontekst, pridobivajo informacije ali predlagajo dejanja, medtem ko storitve in pogoni workflowov izvajajo procesno kritične korake na nadzorovan in sledljiv način.',
        'Orkestracijo workflowov je mogoče implementirati s platformami, kot so Temporal, Camunda ali podobni pogoni, odvisno od procesnega modela in poslovnih zahtev.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Določeni procesni koraki',
          text: 'Modelirajte in izvajajte procesno kritične korake prek pogonov workflowov, namesto da se zanašate le na sklepanje agentov.',
        },
        {
          title: 'Izvajanje na osnovi storitev',
          text: 'Uporabljajte cloud-native storitve in API-je kot aktivnosti workflowov, storitvene naloge ali konektorje.',
        },
        {
          title: 'Človeške odobritve',
          text: 'Uvedite kontrolne točke za pregled in odobritev, kjer občutljive odločitve zahtevajo človeško potrditev.',
        },
        {
          title: 'Ponovni poskusi in kompenzacija',
          text: 'Podprite odporno izvajanje procesov s ponovnimi poskusi, obravnavo časovnih iztekov, povrnitvijo ali vzorci kompenzacije.',
        },
        {
          title: 'Sledljivost',
          text: 'Spremljajte napredek workflowov, klice storitev, odločitve, odobritve in izide.',
        },
        {
          title: 'Workflowi s podporo agentov',
          text: 'Pustite, da AI agenti podpirajo uporabnike in pripravljajo kontekst, medtem ko deterministični workflowi izvajajo kritične poslovne operacije.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite s Kumuluz Digital Platform',
      intro:
        'Kumuluz Digital Platform podpira scenarije poslovnih digitalnih rešitev, modernizacijske pobude in AgenticAI-ready storitvene arhitekture.',
      items: [
        {
          icon: Building2,
          title: 'Poslovne digitalne platforme',
          text: 'Gradite celovite digitalne platforme, ki podpirajo poti strank, interne procese, partnerske storitve in poslovne operacije.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Platforme za samopostrežbo strank',
            'Partnerski portali',
            'Poslovni portali',
            'Interne poslovne platforme',
            'Platforme digitalnih storitev',
            'Večkanalne digitalne rešitve',
          ],
        },
        {
          icon: Bot,
          title: 'AI-agent-ready storitvene plasti',
          text: 'Ustvarite nadzorovane storitvene plasti, ki izpostavljajo odobrene zmožnosti AI agentom in AgenticAI platformam.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Storitve, klicljive s strani agentov',
            'Tool-safe API-ji',
            'MCP-omogočena orodja',
            'Adapterji za integracijo agentov',
            'Agentske storitve workflowov',
            'Nadzorovane plasti dostopa do zaledja',
          ],
        },
        {
          icon: Plug,
          title: 'API-first zaledne platforme',
          text: 'Ustvarite modularne zaledne platforme, ki izpostavljajo poslovne zmožnosti prek varnih, ponovno uporabnih API-jev.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Zaledni sistemi na osnovi API-jev',
            'Zaledja digitalnih kanalov',
            'Zaledja mobilnih aplikacij',
            'Partnerske API platforme',
            'Interne storitvene platforme',
            'API-ji poslovnih zmožnosti',
          ],
        },
        {
          icon: Workflow,
          title: 'Platforme za orkestracijo workflowov',
          text: 'Gradite temelje avtomatizacije procesov z uporabo pogonov workflowov in izvajanja na osnovi storitev.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Workflowi na osnovi Temporal',
            'Workflowi na osnovi Camunda',
            'Workflowi odobritev',
            'Workflowi uvajanja',
            'Workflowi vodenja primerov',
            'Dolgotrajni poslovni procesi',
            'Avtomatizacija procesov s human-in-the-loop',
          ],
        },
        {
          icon: Layers,
          title: 'Cloud-native modernizacija aplikacij',
          text: 'Modernizirajte obstoječe sisteme z modularnimi storitvami, API-ji, vsebniki, konektorji in vzorci postopne migracije.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Omogočanje API-jev za stare sisteme',
            'Modularizacija monolitnih sistemov',
            'Modernizacija po vzorcu strangler',
            'Pripravljenost starih sistemov za AI',
            'Pripravljenost za vsebnike',
            'Temelji za cloud-native migracijo',
            'Postopni načrti modernizacije',
          ],
        },
        {
          icon: Boxes,
          title: 'Digitalne rešitve na osnovi mikrostoritev',
          text: 'Gradite modularne programske sisteme, kjer se storitve lahko razvijajo neodvisno, hkrati pa ostajajo integrirane in obvladljive.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Domensko vodene mikrostoritve',
            'Modularne zaledne arhitekture',
            'Dogodkovno omogočene storitve',
            'Poslovne platforme na osnovi storitev',
            'Neodvisno namestljive komponente',
            'Skalabilne porazdeljene aplikacije',
          ],
        },
        {
          icon: Component,
          title: 'Ponovno uporabne digitalne zmožnosti',
          text: 'Ustvarite ponovno uporabne platformske zmožnosti, ki jih je mogoče deliti med digitalnimi produkti, kanali, workflowi in AI agenti.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Storitve uporabnikov in profilov',
            'API-ji podatkov o strankah',
            'API-ji kataloga izdelkov',
            'Storitve naročil in naročnin',
            'Storitve obveščanja',
            'Integracijske storitve',
            'Storitve poslovnih workflowov',
            'Orodja in veščine agentov',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Osrednje zmožnosti platforme',
      intro:
        'Kumuluz Digital Platform združuje cloud-native arhitekturna načela, ponovno uporabne razvojne vzorce, AgenticAI-pripravljenost in izkušnje z dostavo v poslovnem okolju v temelj za sodobne digitalne sisteme.',
      items: [
        {
          icon: Cloud,
          title: 'Cloud-native arhitektura',
          text: 'Zasnovana za sodoben cloud-native razvoj in namestitev aplikacij, s podporo za vsebniške obremenitve, skalabilne storitve, avtomatizirano namestitev in odporne arhitekturne vzorce.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Cloud-native arhitektura aplikacij',
            'Storitve, pripravljene za vsebnike',
            'Kubernetes-usmerjeni vzorci namestitve',
            'Skalabilna zasnova zaledja',
            'Vzorci odpornosti in razpoložljivosti',
            'Prenosljivost med okolji',
            'Podpora za cloud, hibridno in on-premise namestitev',
          ],
        },
        {
          icon: Boxes,
          title: 'Neodvisno od ogrodja, Quarkus-first',
          text: 'Ni vezana na eno samo izvajalno okolje. Implementirati jo je mogoče s tehnologijami, združljivimi z MicroProfile in Jakarta EE, pri čemer je Quarkus prednostni temelj za nove Java cloud-native projekte.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Implementacija, neodvisna od ogrodja',
            'MicroProfile-združljivi arhitekturni vzorci',
            'Razvojna načela, združljiva z Jakarta EE',
            'Quarkus-first pristop za nove Java cloud-native projekte',
            'Prožnost izvajalnega okolja in ogrodja',
            'Kubernetes-usmerjena zasnova aplikacij',
            'Izogibanje nepotrebni vezanosti na platformo',
          ],
        },
        {
          icon: Server,
          title: 'Razvoj storitev in API-jev',
          text: 'Podpira razvoj cloud-native storitev in API-jev, ki izpostavljajo poslovne in tehnične zmožnosti aplikacijam, partnerjem, workflowom in AI agentom.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Razvoj cloud-native storitev',
            'API-first zasnova storitev',
            'API-ji poslovnih zmožnosti',
            'Interni in zunanji storitveni API-ji',
            'Vzorci storitev, klicljivih s strani agentov',
            'Pogodbe storitev in verzioniranje',
            'Ponovno uporabne API zmožnosti',
          ],
        },
        {
          icon: Wrench,
          title: 'MCP orodja in integracija agentov',
          text: 'Ekipam omogoča zasnovo storitev in API-jev, ki jih je mogoče izpostaviti kot MCP-omogočena orodja ali zmožnosti, klicljive s strani agentov, prek nadzorovanih, dobro definiranih integracijskih meja.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'MCP-združljivi vzorci orodij',
            'API-ji, klicljivi s strani agentov',
            'Tool-safe zasnova storitev',
            'Metapodatki in sheme orodij',
            'Adapterji za integracijo agentov',
            'Nadzorovan dostop do zaledja',
            'Ponovno uporabne veščine agentov',
          ],
        },
        {
          icon: Workflow,
          title: 'Orkestracija workflowov',
          text: 'Podpira deterministično orkestracijo workflowov za poslovne procese, ki zahtevajo zanesljivost, sledljivost in nadzor, z uporabo Temporal, Camunda ali podobnih pogonov.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Vzorci workflowov Temporal',
            'Vzorci workflowov Camunda',
            'Podpora za dolgotrajne procese',
            'Workflowi s human-in-the-loop',
            'Implementacija storitvenih nalog',
            'Vzorci izvajanja aktivnosti',
            'Vzorci ponovnih poskusov in kompenzacije',
            'Opazljivost procesov',
          ],
        },
        {
          icon: Component,
          title: 'Temelji mikrostoritev',
          text: 'Podpira modularne arhitekture na osnovi storitev, kjer je mogoče poslovne zmožnosti razvijati, nameščati in razvijati neodvisno z jasnimi mejami storitev.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Vzorci mikrostoritvene arhitekture',
            'Modularna zasnova storitev',
            'Domensko vodene meje storitev',
            'Neodvisen razvoj storitev',
            'Vzorci komunikacije med storitvami',
            'Premisleki o lastništvu podatkov',
            'Podpora za postopno modernizacijo',
          ],
        },
        {
          icon: Cable,
          title: 'Pripravljenost za poslovne integracije',
          text: 'Zasnovana za integracijo z obstoječimi poslovnimi sistemi, podatkovnimi viri, API-ji in poslovnimi procesi — ter za postati nadzorovana konektorska plast med AI agenti in poslovnimi sistemi.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Integracija s starimi sistemi',
            'Integracija s poslovnimi aplikacijami',
            'Integracija na osnovi API-jev',
            'Dogodkovno vodeni integracijski vzorci',
            'Razvoj konektorjev in adapterjev',
            'Workflowi izmenjave podatkov',
            'Povezljivost s partnerskimi sistemi',
            'Vzorci backend-for-frontend',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Varnost in integracija identitete',
          text: 'Zagotavlja varen dostop, integracijo identitete in vzorce avtorizacije med uporabniki, storitvami, API-ji, orodji in workflowi.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Vzorci avtentikacije in avtorizacije',
            'Podporni vzorci za OAuth2 in OpenID Connect',
            'Integracija s ponudniki poslovne identitete',
            'Nadzor dostopa na osnovi vlog',
            'Varnostni vzorci za API-je in orodja',
            'Varnost med storitvami',
            'Varno upravljanje sej in žetonov',
          ],
        },
        {
          icon: GitBranch,
          title: 'Pripravljenost za DevOps in namestitev',
          text: 'Zasnovana za sodobne prakse DevOps in platformnega inženiringa, s podporo za avtomatizirano dostavo, namestitev na osnovi vsebnikov in produkcijske operacije.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'CI/CD-pripravljena struktura aplikacij',
            'Vsebniška namestitev',
            'Vzorci namestitve Kubernetes',
            'Upravljanje konfiguracije okolij',
            'Avtomatizirani workflowi izdaj',
            'Integracija z infrastrukturo in platformo',
            'Podpora za produkcijsko namestitev',
          ],
        },
        {
          icon: Activity,
          title: 'Opazljivost in operacije',
          text: 'Podpira arhitekturne vzorce za spremljanje, beleženje, sledenje in operativno vidljivost med storitvami, API-ji, workflowi, integracijami in orodji, ki jih kličejo agenti.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Vzorci beleženja aplikacij',
            'Metrike in spremljanje',
            'Pripravljenost za porazdeljeno sledenje',
            'OpenTelemetry-usmerjena opazljivost',
            'Preverjanja zdravja in pripravljenosti',
            'Vidljivost klicev workflowov in storitev',
            'Operativne nadzorne plošče',
            'Podpora v produkciji',
          ],
        },
        {
          icon: LayoutGrid,
          title: 'Ponovno uporabni platformski vzorci',
          text: 'Ekipam pomaga ponovno uporabljati preverjene vzorce med digitalnimi pobudami namesto vsakič znova izumljati arhitekturne, integracijske, workflow in namestitvene temelje.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Ponovno uporabne arhitekturne predloge',
            'Standardizirani zaledni vzorci',
            'Skupni storitveni vzorci',
            'Ponovno uporabne API zmožnosti',
            'Vzorci orodij in konektorjev',
            'Vzorci implementacije workflowov',
            'Varnostne in namestitvene predloge',
            'Pospeševalniki dostave',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Platformska arhitektura za aplikacije, storitve in AI agente',
      body: [
        'Kumuluz Digital Platform je zasnovana kot temelj za gradnjo modularnih digitalnih sistemov, ki povezujejo uporabnike, aplikacije, API-je, storitve, workflowe, AI agente in poslovne sisteme.',
        'Podpira ustvarjanje digitalnih platform, kjer se zaledne storitve, API-ji, workflowi, integracije in uporabniški kanali lahko razvijajo skupaj brez ustvarjanja nepotrebne kompleksnosti.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Digitalni kanali',
          text: 'Spletne aplikacije, mobilne aplikacije, portali za stranke, partnerski portali, interna orodja in druge uporabniške digitalne storitve.',
        },
        {
          title: 'AI agenti in asistenti',
          text: 'KumuluzAI agenti ali drugi AgenticAI sistemi, ki uporabljajo odobrene storitve, API-je, orodja in workflowe.',
        },
        {
          title: 'Plast API-jev in orodij',
          text: 'Ponovno uporabni API-ji, MCP-omogočena orodja in zmožnosti, klicljive s strani agentov, izpostavljene prek nadzorovanih vzorcev dostopa.',
        },
        {
          title: 'Storitvena plast',
          text: 'Modularne zaledne storitve, ki enkapsulirajo poslovno logiko, podporo procesom in domensko specifično funkcionalnost.',
        },
        {
          title: 'Plast orkestracije workflowov',
          text: 'Temporal, Camunda ali podobni pogoni workflowov, ki izvajajo deterministične procesne korake, odobritve in dolgotrajne workflowe.',
        },
        {
          title: 'Integracijski konektorji',
          text: 'Konektorji in adapterji, ki integrirajo storitve, workflowe in agente z obstoječimi poslovnimi sistemi in zunanjimi storitvami.',
        },
        {
          title: 'Poslovni sistemi',
          text: 'Obstoječe aplikacije, baze podatkov, jedrni sistemi, ERP, CRM, obračunavanje, dokumentni sistemi, storitve tretjih oseb in stari sistemi.',
        },
        {
          title: 'Platformska in operativna plast',
          text: 'Namestitev, konfiguracija, opazljivost, varnost, CI/CD in cloud-native operativni temelji.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovana za poslovna namestitvena okolja',
      body: [
        'Kumuluz Digital Platform je primerna za organizacije, ki potrebujejo prožnost glede tega, kje in kako se nameščajo digitalne rešitve in AI-agent-ready storitve.',
        'Podpira cloud-native in hibridne modele namestitve, integracijo s poslovnimi platformami in operativne prakse, potrebne v produkcijskih okoljih.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Namestitev v oblaku',
          text: 'Nameščajte digitalne rešitve na sodobnih oblačnih platformah z uporabo cloud-native aplikacijskih in avtomatizacijskih vzorcev.',
        },
        {
          title: 'Hibridna namestitev',
          text: 'Podprite arhitekture, kjer se nove digitalne storitve, agenti ali workflowi povezujejo z obstoječimi on-premise sistemi in zasebno infrastrukturo.',
        },
        {
          title: 'On-premise namestitev',
          text: 'Nameščajte v zasebnih poslovnih okoljih, kjer podatkovne, varnostne ali regulativne zahteve terjajo lokalni nadzor.',
        },
        {
          title: 'Pripravljeno za Kubernetes',
          text: 'Aplikacije in storitve zasnujte za vsebniško namestitev in operacije na osnovi Kubernetesa.',
        },
        {
          title: 'OpenShift-združljiva arhitektura',
          text: 'Podprite poslovna okolja, kjer je OpenShift standardna aplikacijska platforma.',
        },
        {
          title: 'Integracija z DevOps',
          text: 'Integrirajte se s CI/CD, avtomatizacijo infrastrukture, GitOps in workflowi platformnega inženiringa.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Modernizirajte postopno in pripravite sisteme za AI agente',
      body: [
        'Kumuluz Digital Platform organizacijam pomaga postopno modernizirati obstoječe sisteme.',
        'Namesto da bi vse zamenjali naenkrat, lahko ekipe izpostavijo zmožnosti starih sistemov prek API-jev, uvedejo modularne storitve okrog obstoječih sistemov, ustvarijo konektorje in workflowe ter se postopno premikajo k cloud-native arhitekturi.',
        'Isti pristop pomaga pripraviti poslovne sisteme za AgenticAI: izbrane zmožnosti je mogoče izpostaviti kot varne storitve, orodja ali korake workflowov namesto, da AI agentom omogočimo neposreden dostop do zalednih sistemov.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Omogočanje API-jev',
          text: 'Izpostavite obstoječo poslovno funkcionalnost prek varnih in ponovno uporabnih API-jev.',
        },
        {
          title: 'Tool-safe zasnova storitev',
          text: 'Zasnujte storitve in API-je, ki jih AI agenti lahko varno uporabljajo, z jasnimi vhodi, izhodi, dovoljenji in validacijo.',
        },
        {
          title: 'MCP-omogočeno izpostavljanje',
          text: 'Pripravite izbrane zmožnosti za MCP-združljivo izpostavljanje orodij, kjer je to primerno.',
        },
        {
          title: 'Modularizacija',
          text: 'Velike sisteme razdelite na bolj obvladljive module ali storitve, kjer to ustvarja poslovno in tehnično vrednost.',
        },
        {
          title: 'Meje workflowov',
          text: 'Uporabite orkestracijo workflowov za ustvarjanje determinističnih procesnih meja okrog poslovno kritičnih operacij.',
        },
        {
          title: 'Vzorec strangler',
          text: 'Gradite nove zmožnosti okrog obstoječih sistemov in postopno zamenjajte izbrano funkcionalnost skozi čas.',
        },
        {
          title: 'Modernizacija integracij',
          text: 'Zamenjajte kompleksnost integracij točka-do-točke z bolj strukturiranimi API, konektorskimi in dogodkovno vodenimi vzorci.',
        },
        {
          title: 'Konsolidacija platforme',
          text: 'Ustvarite skupne temelje za več digitalnih rešitev, workflowov in primerov uporabe AI agentov namesto izoliranih, projektno specifičnih arhitektur.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Tehnološka usmeritev',
      title: 'Sodobna Java cloud-native usmeritev',
      body: [
        'Kumuluz Digital Platform sledi sodobnim Java cloud-native arhitekturnim načelom in je zasnovana za delo s sodobnimi poslovnimi Java tehnologijami.',
        'Za nove Java cloud-native projekte primarno uporabljamo Quarkus, ker je dobro primeren za namestitev na osnovi Kubernetesa, hiter zagon, učinkovito porabo virov in sodoben razvoj, združljiv z MicroProfile/Jakarta EE.',
        'KumuluzEE, naše prejšnje open source mikrostoritveno ogrodje, ostaja del zgodovine Kumuluz in se vzdržuje, kjer je potrebno, za obstoječa okolja. Vendar ni primarni tehnološki temelj za nove projekte Kumuluz Digital Platform.',
      ],
      quote:
        'Kumuluz Digital Platform je neodvisna od ogrodja in Quarkus-first za nove Java cloud-native projekte.',
    },
    {
      type: 'kumuluz',
      title: 'Del družine izdelkov Kumuluz',
      body: [
        'Kumuluz Digital Platform je del širše družine izdelkov Kumuluz. Zagotavlja inženirski temelj za gradnjo storitev, API-jev, konektorjev, orodij in workflowov, ki jih drugi izdelki Kumuluz lahko upravljajo, izpostavljajo, vodijo ali uporabljajo.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'KumuluzAI poganja in vodi AI agente. Kumuluz Digital Platform pomaga graditi storitve, API-je, konektorje in workflowe, ki jih ti agenti lahko varno uporabljajo.',
        },
        {
          label: 'API-ji',
          title: 'Kumuluz API',
          text: 'Kumuluz API upravlja, izpostavlja, varuje in spremlja API-je, vključno z API-ji in orodji, zgrajenimi na Kumuluz Digital Platform.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Kumuluz Business APIs zagotavljajo ponovno uporabne poslovne zmožnosti, ki jih je mogoče implementirati, razširiti ali integrirati prek Kumuluz Digital Platform.',
        },
        {
          label: 'Podatki',
          title: 'Kumuluz Crowdsensing',
          text: 'Kumuluz Crowdsensing lahko uporablja storitve in API-je digitalne platforme za podporo zbiranju podatkov, integraciji, analitiki in pametnim storitvam.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kam sodi Kumuluz Digital Platform',
      body: [
        'Kumuluz Digital Platform je primerna za organizacije, ki potrebujejo skalabilne, varne in integrirane digitalne sisteme v kompleksnih okoljih — in želijo te sisteme pripraviti za AI-podprto avtomatizacijo.',
      ],
      columns: 3,
      items: [
        {
          title: 'Bančništvo in finančne storitve',
          text: 'Digitalne bančne platforme, poti strank, uvajanje, KYC, API-ji, avtomatizacija workflowov in AI-agent-ready storitvene plasti.',
        },
        {
          title: 'Zavarovalništvo',
          text: 'Digitalne zavarovalniške storitve, podpora procesom, integracijske platforme, portali za stranke, workflowi škod in poslovne storitve, klicljive s strani agentov.',
        },
        {
          title: 'Javni sektor',
          text: 'Digitalna uprava, vodenje primerov, varni workflowi, dokumentno intenzivni procesi, storitve za državljane in AI-podprta administrativna podpora.',
        },
        {
          title: 'Energetika in komunalne storitve',
          text: 'Platforme za sodelovanje s strankami, operativni sistemi, integracije, podatkovno vodene digitalne storitve in AI-omogočena podpora procesom.',
        },
        {
          title: 'Proizvodnja in poslovne storitve',
          text: 'Partnerski portali, poslovne platforme, sistemi informacij o izdelkih, digitalne storitve za stranke in AI-agent-ready integracije.',
        },
        {
          title: 'Tehnološke in platformske organizacije',
          text: 'Cloud-native digitalni produkti, API platforme, modularni zaledni sistemi, orkestracija workflowov in ponovno uporabne digitalne zmožnosti.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz Digital Platform',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platformski temelj namesto enkratnih aplikacij',
          text: 'Kumuluz Digital Platform organizacijam pomaga ustvariti ponovno uporabne digitalne temelje namesto vsakič znova graditi arhitekturo za vsak projekt.',
        },
        {
          title: 'AI-agent-ready storitvena arhitektura',
          text: 'Platforma ekipam pomaga graditi storitve, API-je, orodja, konektorje in workflowe, ki jih AI agenti lahko uporabljajo varno in predvidljivo.',
        },
        {
          title: 'Cloud-native, API-first in neodvisno od ogrodja',
          text: 'Podpira modularne, skalabilne in integracijsko pripravljene sisteme, zgrajene okrog API-jev, storitev in sodobnih namestitvenih praks, s Quarkusom kot prednostnim temeljem za nove Java cloud-native projekte.',
        },
        {
          title: 'Deterministični nadzor procesov',
          text: 'Kumuluz Digital Platform podpira orkestracijo workflowov, kjer poslovno kritični procesi zahtevajo določene korake, odobritve, ponovne poskuse, kompenzacijo in sledljivost.',
        },
        {
          title: 'Deluje z obstoječimi poslovnimi okolji',
          text: 'Zasnovana je za integracijo z obstoječimi sistemi, oblačnimi platformami, ponudniki identitete, API-ji in operativnimi procesi.',
        },
        {
          title: 'Podpira postopno modernizacijo',
          text: 'Organizacije lahko modernizirajo korak za korakom prek omogočanja API-jev, modularizacije, vsebnikov, meja workflowov in AI-agent-ready storitvenih plasti.',
        },
        {
          title: 'Dostavlja Sunesis',
          text: 'Kumuluz Digital Platform razvija in dostavlja Sunesis, ki združuje razvoj platformskega produkta s poslovnim inženiringom, integracijami, cloud-native, DevOps, AgenticAI in znanjem avtomatizacije workflowov.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo s Kumuluz Digital Platform',
      intro:
        'Kumuluz Digital Platform je mogoče uvesti kot temelj za novo digitalno pobudo, modernizacijski program ali AI-agent-ready poslovno storitveno plast.',
      items: [
        {
          title: 'Ocenite digitalno in integracijsko okolje',
          text: 'Analiziramo obstoječe aplikacije, integracije, poslovne zmožnosti, digitalne kanale, workflowe in modernizacijske cilje.',
        },
        {
          title: 'Prepoznajte priložnosti za AI agente',
          text: 'Prepoznamo, katere storitve, API-ji, konektorji in workflowi bi lahko varno podpirali AI agente in katere procesne meje morajo ostati deterministične.',
        },
        {
          title: 'Določite ciljno arhitekturo platforme',
          text: 'Zasnujemo ciljno arhitekturo, vključno z API-ji, storitvami, konektorji, workflowi, modelom namestitve, varnostjo, opazljivostjo in upravljanjem.',
        },
        {
          title: 'Izberite tehnološki temelj',
          text: 'Izberemo najprimernejši implementacijski temelj. Za nove Java cloud-native projekte je to običajno Quarkus; za druga okolja se prilagodimo združljivim poslovnim tehnološkim zahtevam.',
        },
        {
          title: 'Zgradite storitve, API-je in konektorje',
          text: 'Osrednje storitve, API-ji, integracijski adapterji, tool-safe končne točke in platformske zmožnosti se implementirajo iterativno.',
        },
        {
          title: 'Implementirajte orkestracijo workflowov, kjer je potrebno',
          text: 'Temporal, Camunda ali podobni pogoni workflowov se uporabijo, kjer procesi zahtevajo deterministično izvajanje, odobritve, ponovne poskuse ali dolgotrajno orkestracijo.',
        },
        {
          title: 'Izpostavite zmožnosti aplikacijam in agentom',
          text: 'Digitalni produkti, portali, mobilne aplikacije, partnerski sistemi in AI agenti lahko uporabljajo odobrene storitve, API-je, orodja in workflowe.',
        },
        {
          title: 'Upravljajte, razvijajte in skalirajte',
          text: 'Platforma se sčasoma širi z novimi zmožnostmi, integracijami, storitvami, workflowi in AI-agent-ready primeri uporabe.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Potrebujete močnejši temelj za digitalne platforme in AI-agent-ready storitve?',
      body: [
        'Kumuluz Digital Platform organizacijam pomaga graditi cloud-native, API-first in integracijsko pripravljene digitalne rešitve s ponovno uporabnimi platformskimi temelji.',
        'Pomaga tudi pripraviti poslovne sisteme za AgenticAI z omogočanjem varnih storitev, API-jev, MCP-omogočenih orodij, konektorjev in determinističnih workflowov, ki jih AI agenti lahko uporabljajo pod nadzorom.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Kontaktirajte nas',
    },
  ],
}

export const digitalPlatformPage: Record<LanguageCode, ProductPageContent> = {
  en,
  sl,
}
