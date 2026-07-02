import {
  Activity,
  BookMarked,
  Bot,
  BrainCircuit,
  Cable,
  Coins,
  DoorOpen,
  FlaskConical,
  GitBranch,
  Handshake,
  LayoutGrid,
  Network,
  Plug,
  Route,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { ProductPageContent } from '../../views/products/types'

const en: ProductPageContent = {
  seo: {
    title:
      'Kumuluz API | API Management Platform for Enterprise APIs and AI Agents',
    description:
      'Kumuluz API helps organizations expose, manage, secure and monitor APIs across teams, partners, AI agents and AgenticAI ecosystems, with API gateway, MCP and LLM routing capabilities.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz API',
    title: 'API management for enterprise digital ecosystems and AI agents',
    body: [
      'Kumuluz API helps organizations expose, manage, secure and monitor APIs across teams, partners, digital ecosystems and AgenticAI environments.',
      'It provides a central platform for API cataloging, access control, developer onboarding, gateway and change management, sandbox environments, API economy initiatives and AI-agent-ready API exposure.',
      'It is also built for modern AgenticAI architectures, supporting AI agent integrations, MCP server patterns, contextual routing, request validation, LLM routing and token usage logging — turning APIs into governed tools for AI agents.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore API capabilities',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'split',
      title: 'Trusted in demanding API environments',
      body: [
        'Kumuluz API has been used by organizations across banking, insurance, aviation maintenance and enterprise services, including OTP banka, Generali, Prva zavarovalnica, Zavarovalniška skupina Sava, Adria Tehnika and others.',
        'These organizations operate in environments where APIs must be secure, reliable, visible and governed — supporting internal integration, partner ecosystems, digital services, long-term API lifecycle management and increasingly also AI-enabled automation.',
      ],
      quote:
        'Secure, reliable, visible and governed APIs — for humans, applications, partners and AI agents.',
    },
    {
      type: 'cards',
      title:
        'APIs become difficult to manage when they grow without a platform',
      body: [
        'APIs are now the foundation of digital products, integrations, mobile applications, partner ecosystems, internal business platforms and AI-enabled automation.',
        'But as the number of APIs grows, so does complexity. Organizations often lose visibility into which APIs exist, who uses them, how they are secured, which applications depend on them and how changes will affect consumers.',
        'With AgenticAI, the challenge becomes even bigger. AI agents need controlled access to business APIs, tools, LLMs, context and workflows. Without a governed API layer, agents may connect directly to backend systems, use inconsistent tool definitions or operate without sufficient visibility, validation and auditability.',
        'Kumuluz API provides the structure organizations need to manage APIs as reusable, secure and governed digital assets — for humans, applications, partners and AI agents.',
      ],
      columns: 3,
      items: [
        {
          title: 'Lack of API visibility',
          text: 'Teams do not always know which APIs already exist, what they do, who owns them or who is using them.',
        },
        {
          title: 'Duplicated business capabilities',
          text: 'Without a central API catalog, teams may rebuild the same functionality multiple times.',
        },
        {
          title: 'Uncontrolled access',
          text: 'API consumers, access plans, API keys, authentication and usage policies become difficult to manage consistently.',
        },
        {
          title: 'Risky API changes',
          text: 'Changing an API can break applications, integrations, partner systems or AI agent workflows if dependencies are not understood.',
        },
        {
          title: 'Ungoverned AI agent access',
          text: 'AI agents need APIs and tools, but exposing backend systems directly can create security, reliability and compliance risks.',
        },
        {
          title: 'Limited visibility into AI usage',
          text: 'Without API-level logging, LLM routing visibility and token usage tracking, organizations cannot properly monitor agent-driven consumption.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'A central platform for API management, API economy and AgenticAI integration',
      body: [
        'Kumuluz API is an API management platform that helps organizations manage the full lifecycle of APIs — from cataloging and documentation to access control, onboarding, gateway management, monitoring, controlled change and AI-agent-ready exposure.',
        'It provides a central view of APIs across the organization and helps teams expose business capabilities in a structured, secure and reusable way.',
        'Kumuluz API supports internal API management, external API ecosystem scenarios, partner integrations, B2B APIs, API economy initiatives and AgenticAI architectures where APIs become governed tools for AI agents.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Manage APIs in one place',
          text: 'Create a central catalog of APIs, documentation, specifications, owners, consumers, dependencies and usage patterns.',
        },
        {
          title: 'Secure API access',
          text: 'Control who can access APIs, under which policies, access plans, keys, identities and service-level conditions.',
        },
        {
          title: 'Enable AI-agent-ready APIs',
          text: 'Expose APIs to AI agents as controlled tools, with validation, contextual routing, MCP patterns and auditability.',
        },
        {
          title: 'Support API economy',
          text: 'Expose APIs as business assets for partners, digital ecosystems, internal platforms and AI-enabled automation.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'API management ready for AI agents and AgenticAI platforms',
      body: [
        'AgenticAI systems need a reliable way to discover, access and use enterprise APIs. AI agents should not connect directly to backend systems without governance, validation, routing and monitoring.',
        'Kumuluz API provides an API management and gateway layer that helps organizations expose APIs safely to AI agents and AgenticAI platforms.',
        'It supports MCP server patterns, agent integrations, contextual routing of agent requests, basic request checks, LLM routing and token usage logging. Kumuluz API can also expose its own MCP server, making the API management platform itself integrable into agentic environments.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'AI-agent-ready API exposure',
          text: 'Expose selected APIs as governed tools that AI agents can call under defined access rules and policies.',
        },
        {
          title: 'MCP server support',
          text: 'Support MCP server patterns for exposing APIs and capabilities to AI agents in a structured and discoverable way.',
        },
        {
          title: 'Kumuluz API MCP server',
          text: 'Kumuluz API can expose its own MCP server so that agentic systems can interact with the API management platform itself.',
        },
        {
          title: 'Agent integration layer',
          text: 'Support integration scenarios where AI agents, assistants and AgenticAI platforms use APIs as controlled tools.',
        },
        {
          title: 'Contextual routing',
          text: 'Route agent requests based on context, purpose, policies, target systems or execution requirements.',
        },
        {
          title: 'Basic request validation',
          text: 'Perform basic checks before agent requests reach backend systems, reducing risk from malformed or unauthorized requests.',
        },
        {
          title: 'LLM routing',
          text: 'Enable routing of selected requests toward LLM services where AI processing is required.',
        },
        {
          title: 'Token usage logging',
          text: 'Log token consumption and related usage information to support cost visibility, monitoring and governance of AI-enabled API interactions.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with Kumuluz API',
      intro:
        'Kumuluz API supports multiple API management scenarios — from internal API governance and partner ecosystems to AgenticAI integration and API-based business models.',
      items: [
        {
          icon: LayoutGrid,
          title: 'Enterprise API catalog',
          text: 'Create a central catalog of APIs across departments, applications, teams and platforms.',
          bulletsTitle: 'Examples',
          bullets: [
            'Internal API registry',
            'API documentation hub',
            'API ownership overview',
            'API dependency tracking',
            'Business capability catalog',
            'Reusable integration overview',
          ],
        },
        {
          icon: Handshake,
          title: 'Partner API ecosystem',
          text: 'Expose selected APIs to partners, suppliers, distributors, customers or external developers in a controlled way.',
          bulletsTitle: 'Examples',
          bullets: [
            'Partner onboarding',
            'B2B integrations',
            'External developer portal',
            'Partner API subscriptions',
            'API key provisioning',
            'SLA and access plan management',
          ],
        },
        {
          icon: Bot,
          title: 'AI agent tool gateway',
          text: 'Expose enterprise APIs as governed tools that AI agents can use safely.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer lookup tools',
            'Product information tools',
            'Order status tools',
            'KYC process tools',
            'Claims support tools',
            'Case management tools',
            'Workflow action tools',
          ],
        },
        {
          icon: Plug,
          title: 'MCP-enabled API exposure',
          text: 'Expose selected APIs and capabilities through MCP-oriented patterns for agent discovery and integration.',
          bulletsTitle: 'Examples',
          bullets: [
            'MCP server for enterprise APIs',
            'MCP-based tool discovery',
            'Agent-accessible API capabilities',
            'Structured tool metadata',
            'Tool permission models',
            'Agent platform integration',
          ],
        },
        {
          icon: DoorOpen,
          title: 'API gateway and access control',
          text: 'Route, secure and control API traffic through a managed gateway layer.',
          bulletsTitle: 'Examples',
          bullets: [
            'Central API gateway',
            'API authentication',
            'API authorization',
            'Rate limits and quotas',
            'Access policies',
            'Monitoring of API traffic',
            'Agent request routing',
          ],
        },
        {
          icon: GitBranch,
          title: 'API change management',
          text: 'Manage API changes, versions and dependencies to reduce the risk of breaking existing applications, integrations, partners or agent workflows.',
          bulletsTitle: 'Examples',
          bullets: [
            'API version management',
            'Consumer dependency overview',
            'Controlled API migration',
            'Deprecation planning',
            'Change impact analysis',
            'Agent tool compatibility',
            'Zero-disruption transition planning',
          ],
        },
        {
          icon: Coins,
          title: 'API economy initiatives',
          text: 'Turn APIs into digital products that can be offered to partners, platforms and external ecosystems.',
          bulletsTitle: 'Examples',
          bullets: [
            'API productization',
            'API monetization models',
            'Partner access tiers',
            'API usage visibility',
            'Digital ecosystem enablement',
            'New B2B value chains',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Core platform capabilities',
      intro:
        'Kumuluz API provides the capabilities needed to manage APIs securely, consistently and at scale — including modern AI-agent-ready API management and gateway functionality.',
      items: [
        {
          icon: BookMarked,
          title: 'API catalog and documentation',
          text: 'A central place where APIs can be registered, described, documented and discovered, reducing duplication and improving reuse across teams, partners and agents.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Central API catalog',
            'API documentation',
            'API specifications',
            'API ownership metadata',
            'API lifecycle status',
            'Business capability mapping',
            'Search and discovery',
            'Agent-ready API metadata',
          ],
        },
        {
          icon: Users,
          title: 'Developer and consumer portal',
          text: 'Enables internal and external developers to discover APIs, read documentation, request access and manage subscriptions through a self-service experience.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Self-service API discovery',
            'API documentation access',
            'Developer registration',
            'API subscription workflows',
            'Access request management',
            'API key delivery',
            'Internal and external developer support',
            'API consumer management',
          ],
        },
        {
          icon: Network,
          title: 'API gateway management',
          text: 'Centralized access through an API gateway layer, helping organizations secure, route and monitor API traffic — and a controlled entry point for agent requests.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API gateway integration',
            'API routing',
            'Centralized access point',
            'Traffic control',
            'Security policy enforcement',
            'Request and response monitoring',
            'Gateway performance visibility',
            'Contextual routing of agent requests',
          ],
        },
        {
          icon: Bot,
          title: 'AI agent and MCP integration',
          text: 'Supports integration patterns where APIs are exposed to AI agents through governed, discoverable and structured interfaces, including its own MCP server.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'AI-agent-ready API exposure',
            'MCP server support',
            'Kumuluz API MCP server',
            'Agent integration patterns',
            'Tool metadata and descriptions',
            'Agent-accessible API capabilities',
            'Agent tool governance',
          ],
        },
        {
          icon: Route,
          title: 'Contextual routing and request checks',
          text: 'Supports contextual routing and basic checks at the API gateway level, helping route requests appropriately and reduce risk before they reach backend systems.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Context-aware request routing',
            'Agent request classification',
            'Basic request validation',
            'Policy-based routing',
            'Target system selection',
            'Request filtering',
            'Guardrail-oriented gateway patterns',
          ],
        },
        {
          icon: BrainCircuit,
          title: 'LLM routing and token logging',
          text: 'Supports LLM routing patterns and can log token usage, helping organizations gain visibility into AI consumption and operational cost.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'LLM request routing',
            'Model endpoint routing',
            'AI provider abstraction patterns',
            'Token usage logging',
            'AI consumption visibility',
            'Cost monitoring support',
            'Agent and model usage traceability',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Access control and policies',
          text: 'Enables controlled access to APIs through defined policies, access plans and consumer management across applications, partners, systems and AI agents.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Access plans',
            'API subscriptions',
            'API keys',
            'Consumer application management',
            'Agent consumer management',
            'Rate limiting',
            'Quotas',
            'QoS and SLA-oriented policies',
          ],
        },
        {
          icon: FlaskConical,
          title: 'Sandbox environments',
          text: 'Allow developers, partners and agentic platform teams to explore and test APIs safely before production integration.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API sandbox',
            'Safe testing environment',
            'Developer experimentation',
            'Agent integration testing',
            'Pre-production API access',
            'Mock or controlled API interaction',
            'Partner onboarding support',
          ],
        },
        {
          icon: GitBranch,
          title: 'Change and version management',
          text: 'Helps organizations understand API consumers, dependencies and integration impact before changes are introduced, supporting controlled API evolution.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API version management',
            'Consumer dependency tracking',
            'Agent tool dependency tracking',
            'Change impact visibility',
            'Deprecation workflows',
            'Migration planning',
            'Controlled API transition',
            'Communication with API consumers',
          ],
        },
        {
          icon: Activity,
          title: 'Monitoring and analytics',
          text: 'Provides visibility into API usage, trends, traffic, response behavior, consumer activity and AI-enabled API usage.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API usage monitoring',
            'Traffic analytics',
            'Consumer activity tracking',
            'Agent request tracking',
            'Response time visibility',
            'Trend analysis',
            'Gateway activity overview',
            'Operational reporting',
          ],
        },
        {
          icon: Cable,
          title: 'B2B integration support',
          text: 'Helps organizations manage partner integrations with better visibility, access control and operational oversight.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Partner API access',
            'B2B integration management',
            'Partner-specific access policies',
            'SLA visibility',
            'API consumer tracking',
            'Secure external exposure',
            'Integration governance',
          ],
        },
        {
          icon: Coins,
          title: 'API economy enablement',
          text: 'Helps organizations treat APIs as business assets that can support new digital channels, partner ecosystems, AI agents and revenue models.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API productization',
            'Partner access models',
            'API packaging',
            'API subscription concepts',
            'Usage-based insight',
            'Digital ecosystem support',
            'New business model enablement',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title:
        'API management architecture for enterprise and AgenticAI ecosystems',
      body: [
        'Kumuluz API is designed as a management, governance and gateway layer for API ecosystems.',
        'It connects API providers, API consumers, developers, gateways, policies, documentation, AI agents, MCP servers, LLM routing and operational visibility into one API management foundation.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'API provider layer',
          text: 'Backend systems, microservices, legacy applications, cloud services, LLM services and business platforms that expose APIs or processing capabilities.',
        },
        {
          title: 'API management layer',
          text: 'API catalog, lifecycle management, documentation, ownership, subscription management, access plans, consumer governance and agent-ready API metadata.',
        },
        {
          title: 'Developer and consumer portal',
          text: 'Self-service access for internal developers, external partners, API consumers and teams preparing APIs for AI agent use.',
        },
        {
          title: 'API gateway layer',
          text: 'Centralized API access, routing, policy enforcement, authentication, monitoring, traffic control and contextual routing of agent requests.',
        },
        {
          title: 'Agent and MCP layer',
          text: 'AI agents, AgenticAI platforms and MCP server integrations that discover and use approved API capabilities as governed tools.',
        },
        {
          title: 'LLM routing layer',
          text: 'Routing of selected requests toward LLM endpoints or AI processing layers, with token usage logging and AI consumption visibility.',
        },
        {
          title: 'Consumer applications',
          text: 'Web applications, mobile apps, partner systems, internal platforms, business applications, external integrations and AI agents.',
        },
        {
          title: 'Analytics and governance layer',
          text: 'Usage monitoring, consumer activity, agent request tracking, dependency visibility, change management, token logging and operational reporting.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Self-service onboarding for developers, partners and agentic systems',
      body: [
        'A strong API ecosystem needs more than technical endpoints. Developers need clear documentation, access workflows, testing environments and predictable onboarding.',
        'In AgenticAI environments, agentic systems also need structured descriptions of available tools, clear access boundaries and integration patterns that make APIs discoverable and safe to use.',
        'Kumuluz API provides both classic API onboarding capabilities and MCP-oriented integration patterns for agentic environments.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Faster developer onboarding',
          text: 'Developers can find APIs, read documentation and request access through a self-service process.',
        },
        {
          title: 'Better documentation access',
          text: 'API specifications and usage information are available in one central place.',
        },
        {
          title: 'Controlled access requests',
          text: 'API subscriptions and access approval can follow defined workflows.',
        },
        {
          title: 'Secure API key delivery',
          text: 'API keys can be provisioned through the platform after access is approved.',
        },
        {
          title: 'Sandbox exploration',
          text: 'Developers and agent integration teams can test APIs in a safe environment before connecting production systems.',
        },
        {
          title: 'MCP-based integration',
          text: 'Selected APIs and platform capabilities can be exposed through MCP server patterns for AI agents and AgenticAI platforms.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'API gateway for controlled AI agent execution',
      body: [
        'AI agents should not have unrestricted access to enterprise systems. Even when agents are allowed to call tools, organizations need routing, validation, authorization, monitoring and auditability.',
        'Kumuluz API provides gateway-level capabilities that help organizations manage agent-driven API calls. It can route requests based on context, perform basic checks, apply policies and log usage before requests reach backend systems or AI processing layers.',
        'This makes Kumuluz API an important control point between AI agents and enterprise capabilities.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Contextual routing',
          text: 'Route agent requests based on context, target capability, policy, business domain or execution requirements.',
        },
        {
          title: 'Basic request checks',
          text: 'Validate basic request structure, required parameters, access conditions and allowed execution patterns.',
        },
        {
          title: 'Policy enforcement',
          text: 'Apply access policies before an agent request reaches a backend system or business API.',
        },
        {
          title: 'Tool boundary control',
          text: 'Limit which APIs and operations agents can access in specific scenarios.',
        },
        {
          title: 'LLM routing',
          text: 'Route selected requests toward LLM endpoints or AI processing layers where needed.',
        },
        {
          title: 'Usage and token logging',
          text: 'Record API usage, agent activity and token consumption to support monitoring, cost visibility and governance.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Turn APIs into business assets',
      body: [
        'APIs are not only technical integration points. They can become digital business capabilities that support partner channels, new ecosystems, AI agents and API-based business models.',
        'Kumuluz API helps organizations expose APIs in a controlled and reusable way, making it easier to create partner integrations, B2B ecosystems, API economy initiatives and governed AI tool ecosystems.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Expose business capabilities',
          text: 'Turn selected business functions into secure APIs that partners, internal teams and AI agents can reuse.',
        },
        {
          title: 'Support partner ecosystems',
          text: 'Give partners controlled access to APIs, documentation, sandbox environments and access plans.',
        },
        {
          title: 'Create new channels',
          text: 'Use APIs to support new digital services, platforms, mobile applications, business partnerships and AI-enabled applications.',
        },
        {
          title: 'Monitor adoption and value',
          text: 'Track API usage, consumer activity, agent calls and integration trends to understand how APIs are being used.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Flexible deployment for enterprise environments',
      body: [
        'Kumuluz API is designed to support different enterprise deployment and operating models.',
        'It can be deployed in environments where organizations require control over infrastructure, security, API traffic, AI agent access and operational processes.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'On-premise deployment',
          text: 'Deploy Kumuluz API in a customer-controlled environment where infrastructure, data and access must remain under enterprise control.',
        },
        {
          title: 'SaaS deployment',
          text: 'Use Kumuluz API as a managed platform model where that is more suitable for the organization.',
        },
        {
          title: 'Modular architecture',
          text: 'Adopt and extend platform components according to organizational requirements and maturity.',
        },
        {
          title: 'Separate management and developer experiences',
          text: 'Support different needs for API managers, administrators, developers, partners and agent integration teams.',
        },
        {
          title: 'Enterprise security integration',
          text: 'Integrate API access with enterprise security, identity and gateway policies.',
        },
        {
          title: 'AgenticAI integration readiness',
          text: 'Support AI agents, MCP server scenarios, LLM routing and token usage logging in enterprise integration architectures.',
        },
        {
          title: 'Operational monitoring',
          text: 'Monitor API traffic, response behavior, usage patterns, agent requests and access activity.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where Kumuluz API fits',
      body: [
        'Kumuluz API is suitable for organizations that need structured API management across internal systems, partners, digital products, external ecosystems and AI-enabled automation.',
      ],
      columns: 3,
      items: [
        {
          title: 'Banking and financial services',
          text: 'Internal integration infrastructure, partner APIs, mobile backends, digital banking ecosystems, secure API access and AI-agent-ready business tools.',
        },
        {
          title: 'Insurance',
          text: 'Partner ecosystems, policy and claims APIs, customer channels, digital insurance services, API-based business models and AgenticAI process support.',
        },
        {
          title: 'Aviation maintenance and enterprise services',
          text: 'Operational integrations, partner connectivity, service APIs, workflow systems and controlled access to business capabilities.',
        },
        {
          title: 'Public sector',
          text: 'Secure API exposure, digital public services, inter-institutional integrations, controlled API access and AI-assisted administrative workflows.',
        },
        {
          title: 'Energy and utilities',
          text: 'Operational integrations, customer service APIs, partner data exchange, energy platform connectivity and AI-enabled service automation.',
        },
        {
          title: 'Manufacturing and enterprise services',
          text: 'Partner portals, B2B integrations, product data APIs, order APIs, supply-chain connectivity and agent-enabled operational support.',
        },
        {
          title: 'Technology platforms',
          text: 'API products, developer ecosystems, API monetization, integration platforms and AI-agent tool ecosystems.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Proven in demanding API environments',
      intro:
        'Kumuluz API has been used in complex enterprise environments where API visibility, integration control, partner access and operational governance are essential — across banking, insurance, aviation maintenance and enterprise services.',
      items: [
        {
          title: 'Insurance API ecosystem',
          text: 'Kumuluz API has supported insurance environments where the goal was to establish better visibility over APIs and internal integrations, while enabling external partner API ecosystems.',
          bulletsTitle: 'Outcomes enabled',
          bullets: [
            'Improved API visibility',
            'Partner ecosystem support',
            'Better control over integrations',
            'Structured access management',
            'New partner economy models',
            'Foundation for AI-agent-ready API exposure',
          ],
        },
        {
          title: 'Banking integration infrastructure',
          text: 'Kumuluz API has supported banking integration infrastructure across internal and external API scenarios.',
          bulletsTitle: 'Outcomes enabled',
          bullets: [
            'Integration API management',
            'High-volume API traffic support',
            'Internal and external integrations',
            'Better API governance',
            'Improved operational visibility',
            'Controlled access to business capabilities',
          ],
        },
        {
          title: 'Enterprise and aviation maintenance integrations',
          text: 'Kumuluz API has also been used in enterprise and aviation maintenance environments where structured API access, partner connectivity and integration governance are required.',
          bulletsTitle: 'Outcomes enabled',
          bullets: [
            'Controlled API exposure',
            'Partner and supplier integration',
            'Operational API visibility',
            'Secure access to business capabilities',
            'More structured integration lifecycle',
          ],
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Positioning',
      title: 'Governed digital assets for applications, partners and AI agents',
      body: [
        'Kumuluz API is more than an API catalog, a gateway or a developer portal. It is the layer that turns enterprise APIs into reusable, secure and governed digital assets — with AI-agent-ready exposure, MCP server support, contextual routing, LLM routing and token usage visibility built in.',
      ],
      quote:
        'Kumuluz API turns enterprise APIs into governed digital assets that can be used safely by applications, partners and AI agents.',
    },
    {
      type: 'kumuluz',
      title: 'Part of the Kumuluz product family',
      body: [
        'Kumuluz API is part of the broader Kumuluz product family. It can be used together with other Kumuluz products to support AI, digital platforms, business APIs and data-driven services.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'Kumuluz API exposes and governs the APIs, tools and integrations that KumuluzAI agents can use in enterprise environments.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Build cloud-native, API-first digital platforms that expose reusable business capabilities through a managed API ecosystem.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Use pre-built or reusable business APIs and expose them through a managed API ecosystem for applications, workflows and AI agents.',
        },
        {
          label: 'Data',
          title: 'Kumuluz Crowdsensing',
          text: 'Expose crowdsensing data, analytics and smart service capabilities through managed APIs.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz API',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Central API visibility',
          text: 'Create a central overview of APIs, consumers, documentation, ownership and dependencies.',
        },
        {
          title: 'Governed API access',
          text: 'Manage subscriptions, API keys, policies, plans, quotas and service-level expectations.',
        },
        {
          title: 'AI-agent-ready API layer',
          text: 'Expose selected APIs as governed tools for AI agents and AgenticAI platforms.',
        },
        {
          title: 'MCP and agent integration support',
          text: 'Support MCP server patterns, agent integrations and platform-level MCP exposure through its own MCP server.',
        },
        {
          title: 'Gateway control for agent requests',
          text: 'Use API gateway capabilities for contextual routing, basic checks, policy enforcement and controlled execution of agent-driven calls.',
        },
        {
          title: 'LLM routing and token visibility',
          text: 'Route selected requests toward LLM services and log token usage to support monitoring, cost visibility and governance.',
        },
        {
          title: 'Better developer and partner experience',
          text: 'Support internal and external developers with self-service discovery, documentation, sandbox environments and onboarding workflows.',
        },
        {
          title: 'Reduced integration risk',
          text: 'Understand dependencies, manage API versions and introduce changes in a controlled way.',
        },
        {
          title: 'API economy readiness',
          text: 'Turn APIs into reusable business assets that support partner ecosystems, digital value chains and AI-enabled automation.',
        },
        {
          title: 'Enterprise-proven',
          text: 'Kumuluz API has been used by organizations across banking, insurance, aviation maintenance and enterprise services.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Kumuluz API is developed and delivered by Sunesis, combining platform product development with enterprise software engineering, API architecture, integration experience and AgenticAI delivery expertise.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with Kumuluz API',
      intro:
        'Kumuluz API can be introduced gradually — starting with API visibility and internal governance, then expanding toward developer onboarding, partner ecosystems, API economy initiatives and AgenticAI integration.',
      items: [
        {
          title: 'Assess the API and agent landscape',
          text: 'We identify existing APIs, integrations, consumer applications, agent use cases, ownership, documentation quality and governance gaps.',
        },
        {
          title: 'Define API management and AgenticAI goals',
          text: 'We define whether the first focus is internal visibility, partner onboarding, API security, gateway control, API economy, integration governance or AI-agent-ready API exposure.',
        },
        {
          title: 'Set up the API catalog',
          text: 'APIs are registered, documented and organized into a central catalog with ownership, lifecycle metadata and agent-readiness information where relevant.',
        },
        {
          title: 'Configure access, policies and gateway routing',
          text: 'Access plans, subscriptions, API keys, gateway policies, contextual routing and consumer workflows are configured.',
        },
        {
          title: 'Enable developer, partner and agent onboarding',
          text: 'Developers, partners and agent integration teams get structured access to API documentation, sandbox environments, MCP patterns and onboarding workflows.',
        },
        {
          title: 'Integrate MCP and AgenticAI scenarios',
          text: 'Selected APIs can be exposed through MCP-oriented patterns, while the Kumuluz API MCP server can make platform capabilities available to agentic systems.',
        },
        {
          title: 'Configure LLM routing and token logging',
          text: 'Where needed, selected requests can be routed toward LLM services, with token usage logging and consumption visibility.',
        },
        {
          title: 'Monitor usage and evolve',
          text: 'API usage, consumer activity, agent requests, performance, dependencies and AI consumption are monitored to support continuous improvement.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Ready to manage APIs for applications, partners and AI agents?',
      body: [
        'Kumuluz API helps organizations expose, manage, secure and scale APIs across internal teams, partners, digital ecosystems and AgenticAI platforms.',
        'Whether you are building an internal API catalog, a partner API ecosystem, an API economy initiative or an AI-agent-ready API gateway, Kumuluz API gives you the platform foundation to move forward with control.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Contact us',
    },
  ],
}

const sl: ProductPageContent = {
  seo: {
    title:
      'Kumuluz API | Platforma za upravljanje API-jev za poslovne API-je in AI agente',
    description:
      'Kumuluz API organizacijam pomaga izpostavljati, upravljati, varovati in spremljati API-je med ekipami, partnerji, AI agenti in AgenticAI ekosistemi, z zmožnostmi API gateway, MCP in LLM usmerjanja.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz API',
    title: 'Upravljanje API-jev za poslovne digitalne ekosisteme in AI agente',
    body: [
      'Kumuluz API organizacijam pomaga izpostavljati, upravljati, varovati in spremljati API-je med ekipami, partnerji, digitalnimi ekosistemi in AgenticAI okolji.',
      'Zagotavlja osrednjo platformo za katalogizacijo API-jev, nadzor dostopa, uvajanje razvijalcev, upravljanje gatewaya in sprememb, peskovniška okolja, pobude API ekonomije in AI-agent-ready izpostavljanje API-jev.',
      'Zasnovan je tudi za sodobne AgenticAI arhitekture in podpira integracije AI agentov, vzorce MCP strežnikov, kontekstualno usmerjanje, validacijo zahtev, LLM usmerjanje in beleženje porabe žetonov — tako API-ji postanejo nadzorovana orodja za AI agente.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite zmožnosti API-jev',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'split',
      title: 'Zaupanja vreden v zahtevnih API okoljih',
      body: [
        'Kumuluz API uporabljajo organizacije v bančništvu, zavarovalništvu, letalskem vzdrževanju in poslovnih storitvah, vključno z OTP banko, Generali, Prvo zavarovalnico, Zavarovalniško skupino Sava, Adrio Tehniko in drugimi.',
        'Te organizacije delujejo v okoljih, kjer morajo biti API-ji varni, zanesljivi, vidni in nadzorovani — kar podpira interno integracijo, partnerske ekosisteme, digitalne storitve, dolgoročno upravljanje življenjskega cikla API-jev in vse bolj tudi AI-podprto avtomatizacijo.',
      ],
      quote:
        'Varni, zanesljivi, vidni in nadzorovani API-ji — za ljudi, aplikacije, partnerje in AI agente.',
    },
    {
      type: 'cards',
      title: 'API-ji postanejo težko obvladljivi, ko rastejo brez platforme',
      body: [
        'API-ji so danes temelj digitalnih produktov, integracij, mobilnih aplikacij, partnerskih ekosistemov, internih poslovnih platform in AI-podprte avtomatizacije.',
        'Toda z naraščanjem števila API-jev narašča tudi kompleksnost. Organizacije pogosto izgubijo pregled nad tem, kateri API-ji obstajajo, kdo jih uporablja, kako so zavarovani, katere aplikacije so od njih odvisne in kako bodo spremembe vplivale na uporabnike.',
        'Z AgenticAI postane izziv še večji. AI agenti potrebujejo nadzorovan dostop do poslovnih API-jev, orodij, LLM-jev, konteksta in workflowov. Brez nadzorovane API plasti se lahko agenti neposredno povežejo z zalednimi sistemi, uporabljajo nedosledne definicije orodij ali delujejo brez zadostne vidnosti, validacije in sledljivosti.',
        'Kumuluz API zagotavlja strukturo, ki jo organizacije potrebujejo za upravljanje API-jev kot ponovno uporabnih, varnih in nadzorovanih digitalnih sredstev — za ljudi, aplikacije, partnerje in AI agente.',
      ],
      columns: 3,
      items: [
        {
          title: 'Pomanjkanje vidnosti API-jev',
          text: 'Ekipe ne vedo vedno, kateri API-ji že obstajajo, kaj počnejo, kdo je njihov lastnik ali kdo jih uporablja.',
        },
        {
          title: 'Podvojene poslovne zmožnosti',
          text: 'Brez osrednjega API kataloga lahko ekipe večkrat znova gradijo isto funkcionalnost.',
        },
        {
          title: 'Nenadzorovan dostop',
          text: 'Uporabnike API-jev, dostopne načrte, API ključe, avtentikacijo in politike uporabe je težko dosledno upravljati.',
        },
        {
          title: 'Tvegane spremembe API-jev',
          text: 'Sprememba API-ja lahko pokvari aplikacije, integracije, partnerske sisteme ali workflowe AI agentov, če odvisnosti niso razumljene.',
        },
        {
          title: 'Nenadzorovan dostop AI agentov',
          text: 'AI agenti potrebujejo API-je in orodja, vendar lahko neposredno izpostavljanje zalednih sistemov ustvari varnostna, zanesljivostna in skladnostna tveganja.',
        },
        {
          title: 'Omejena vidnost uporabe AI',
          text: 'Brez beleženja na ravni API-jev, vidnosti LLM usmerjanja in sledenja porabi žetonov organizacije ne morejo ustrezno spremljati porabe, ki jo poganjajo agenti.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Osrednja platforma za upravljanje API-jev, API ekonomijo in AgenticAI integracijo',
      body: [
        'Kumuluz API je platforma za upravljanje API-jev, ki organizacijam pomaga upravljati celoten življenjski cikel API-jev — od katalogizacije in dokumentacije do nadzora dostopa, uvajanja, upravljanja gatewaya, spremljanja, nadzorovanih sprememb in AI-agent-ready izpostavljanja.',
        'Zagotavlja osrednji pregled nad API-ji v celotni organizaciji in ekipam pomaga izpostavljati poslovne zmožnosti na strukturiran, varen in ponovno uporaben način.',
        'Kumuluz API podpira interno upravljanje API-jev, scenarije zunanjih API ekosistemov, partnerske integracije, B2B API-je, pobude API ekonomije in AgenticAI arhitekture, kjer API-ji postanejo nadzorovana orodja za AI agente.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Upravljajte API-je na enem mestu',
          text: 'Ustvarite osrednji katalog API-jev, dokumentacije, specifikacij, lastnikov, uporabnikov, odvisnosti in vzorcev uporabe.',
        },
        {
          title: 'Varen dostop do API-jev',
          text: 'Nadzorujte, kdo lahko dostopa do API-jev, pod katerimi politikami, dostopnimi načrti, ključi, identitetami in storitvenimi pogoji.',
        },
        {
          title: 'Omogočite AI-agent-ready API-je',
          text: 'Izpostavite API-je AI agentom kot nadzorovana orodja, z validacijo, kontekstualnim usmerjanjem, MCP vzorci in sledljivostjo.',
        },
        {
          title: 'Podprite API ekonomijo',
          text: 'Izpostavite API-je kot poslovna sredstva za partnerje, digitalne ekosisteme, interne platforme in AI-podprto avtomatizacijo.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Upravljanje API-jev, pripravljeno za AI agente in AgenticAI platforme',
      body: [
        'AgenticAI sistemi potrebujejo zanesljiv način za odkrivanje, dostop in uporabo poslovnih API-jev. AI agenti se ne smejo neposredno povezovati z zalednimi sistemi brez upravljanja, validacije, usmerjanja in spremljanja.',
        'Kumuluz API zagotavlja plast za upravljanje API-jev in gateway, ki organizacijam pomaga varno izpostavljati API-je AI agentom in AgenticAI platformam.',
        'Podpira vzorce MCP strežnikov, integracije agentov, kontekstualno usmerjanje zahtev agentov, osnovne preverbe zahtev, LLM usmerjanje in beleženje porabe žetonov. Kumuluz API lahko izpostavi tudi lasten MCP strežnik, s čimer postane sama platforma za upravljanje API-jev integrabilna v agentska okolja.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'AI-agent-ready izpostavljanje API-jev',
          text: 'Izpostavite izbrane API-je kot nadzorovana orodja, ki jih AI agenti lahko kličejo po določenih pravilih in politikah dostopa.',
        },
        {
          title: 'Podpora za MCP strežnik',
          text: 'Podprite vzorce MCP strežnikov za izpostavljanje API-jev in zmožnosti AI agentom na strukturiran in odkrivljiv način.',
        },
        {
          title: 'Kumuluz API MCP strežnik',
          text: 'Kumuluz API lahko izpostavi lasten MCP strežnik, da lahko agentski sistemi komunicirajo s samo platformo za upravljanje API-jev.',
        },
        {
          title: 'Plast za integracijo agentov',
          text: 'Podprite scenarije integracije, kjer AI agenti, asistenti in AgenticAI platforme uporabljajo API-je kot nadzorovana orodja.',
        },
        {
          title: 'Kontekstualno usmerjanje',
          text: 'Usmerjajte zahteve agentov glede na kontekst, namen, politike, ciljne sisteme ali izvedbene zahteve.',
        },
        {
          title: 'Osnovna validacija zahtev',
          text: 'Izvedite osnovne preverbe, preden zahteve agentov dosežejo zaledne sisteme, ter zmanjšajte tveganje napačnih ali nepooblaščenih zahtev.',
        },
        {
          title: 'LLM usmerjanje',
          text: 'Omogočite usmerjanje izbranih zahtev proti LLM storitvam, kjer je potrebna AI obdelava.',
        },
        {
          title: 'Beleženje porabe žetonov',
          text: 'Beležite porabo žetonov in povezane informacije za podporo vidnosti stroškov, spremljanja in upravljanja AI-podprtih API interakcij.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite s Kumuluz API',
      intro:
        'Kumuluz API podpira več scenarijev upravljanja API-jev — od interne API governance in partnerskih ekosistemov do AgenticAI integracije in poslovnih modelov na osnovi API-jev.',
      items: [
        {
          icon: LayoutGrid,
          title: 'Poslovni API katalog',
          text: 'Ustvarite osrednji katalog API-jev med oddelki, aplikacijami, ekipami in platformami.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Interni register API-jev',
            'Vozlišče dokumentacije API-jev',
            'Pregled lastništva API-jev',
            'Sledenje odvisnostim API-jev',
            'Katalog poslovnih zmožnosti',
            'Pregled ponovno uporabnih integracij',
          ],
        },
        {
          icon: Handshake,
          title: 'Partnerski API ekosistem',
          text: 'Na nadzorovan način izpostavite izbrane API-je partnerjem, dobaviteljem, distributerjem, strankam ali zunanjim razvijalcem.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Uvajanje partnerjev',
            'B2B integracije',
            'Zunanji portal za razvijalce',
            'Partnerske naročnine na API-je',
            'Dodeljevanje API ključev',
            'Upravljanje SLA in dostopnih načrtov',
          ],
        },
        {
          icon: Bot,
          title: 'Gateway orodij za AI agente',
          text: 'Izpostavite poslovne API-je kot nadzorovana orodja, ki jih AI agenti lahko varno uporabljajo.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Orodja za iskanje podatkov o strankah',
            'Orodja za informacije o izdelkih',
            'Orodja za status naročil',
            'Orodja za procese KYC',
            'Orodja za podporo škodnim primerom',
            'Orodja za vodenje primerov',
            'Orodja za dejanja v workflowih',
          ],
        },
        {
          icon: Plug,
          title: 'MCP-omogočeno izpostavljanje API-jev',
          text: 'Izpostavite izbrane API-je in zmožnosti prek MCP-usmerjenih vzorcev za odkrivanje in integracijo agentov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'MCP strežnik za poslovne API-je',
            'Odkrivanje orodij na osnovi MCP',
            'API zmožnosti, dostopne agentom',
            'Strukturirani metapodatki orodij',
            'Modeli dovoljenj orodij',
            'Integracija z agentsko platformo',
          ],
        },
        {
          icon: DoorOpen,
          title: 'API gateway in nadzor dostopa',
          text: 'Usmerjajte, varujte in nadzorujte API promet prek upravljane gateway plasti.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Osrednji API gateway',
            'Avtentikacija API-jev',
            'Avtorizacija API-jev',
            'Omejitve hitrosti in kvote',
            'Politike dostopa',
            'Spremljanje API prometa',
            'Usmerjanje zahtev agentov',
          ],
        },
        {
          icon: GitBranch,
          title: 'Upravljanje sprememb API-jev',
          text: 'Upravljajte spremembe, verzije in odvisnosti API-jev, da zmanjšate tveganje okvar obstoječih aplikacij, integracij, partnerjev ali workflowov agentov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Upravljanje verzij API-jev',
            'Pregled odvisnosti uporabnikov',
            'Nadzorovana migracija API-jev',
            'Načrtovanje opuščanja',
            'Analiza vpliva sprememb',
            'Združljivost orodij agentov',
            'Načrtovanje prehoda brez motenj',
          ],
        },
        {
          icon: Coins,
          title: 'Pobude API ekonomije',
          text: 'Spremenite API-je v digitalne produkte, ki jih lahko ponudite partnerjem, platformam in zunanjim ekosistemom.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Produktizacija API-jev',
            'Modeli monetizacije API-jev',
            'Partnerski nivoji dostopa',
            'Vidnost uporabe API-jev',
            'Omogočanje digitalnih ekosistemov',
            'Nove B2B verige vrednosti',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Osrednje zmožnosti platforme',
      intro:
        'Kumuluz API zagotavlja zmožnosti, potrebne za varno, dosledno in obsežno upravljanje API-jev — vključno s sodobnim AI-agent-ready upravljanjem API-jev in gateway funkcionalnostjo.',
      items: [
        {
          icon: BookMarked,
          title: 'API katalog in dokumentacija',
          text: 'Osrednje mesto, kjer je mogoče API-je registrirati, opisati, dokumentirati in odkrivati, kar zmanjšuje podvajanje in izboljšuje ponovno uporabo med ekipami, partnerji in agenti.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Osrednji API katalog',
            'Dokumentacija API-jev',
            'Specifikacije API-jev',
            'Metapodatki lastništva API-jev',
            'Status življenjskega cikla API-jev',
            'Preslikava poslovnih zmožnosti',
            'Iskanje in odkrivanje',
            'Agent-ready metapodatki API-jev',
          ],
        },
        {
          icon: Users,
          title: 'Portal za razvijalce in uporabnike',
          text: 'Internim in zunanjim razvijalcem omogoča odkrivanje API-jev, branje dokumentacije, zahtevanje dostopa in upravljanje naročnin prek samopostrežne izkušnje.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Samopostrežno odkrivanje API-jev',
            'Dostop do dokumentacije API-jev',
            'Registracija razvijalcev',
            'Workflowi naročnin na API-je',
            'Upravljanje zahtev za dostop',
            'Dostava API ključev',
            'Podpora internim in zunanjim razvijalcem',
            'Upravljanje uporabnikov API-jev',
          ],
        },
        {
          icon: Network,
          title: 'Upravljanje API gatewaya',
          text: 'Centraliziran dostop prek API gateway plasti, ki organizacijam pomaga varovati, usmerjati in spremljati API promet — ter nadzorovana vstopna točka za zahteve agentov.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Integracija API gatewaya',
            'Usmerjanje API-jev',
            'Centralizirana dostopna točka',
            'Nadzor prometa',
            'Uveljavljanje varnostnih politik',
            'Spremljanje zahtev in odgovorov',
            'Vidnost zmogljivosti gatewaya',
            'Kontekstualno usmerjanje zahtev agentov',
          ],
        },
        {
          icon: Bot,
          title: 'Integracija AI agentov in MCP',
          text: 'Podpira vzorce integracije, kjer so API-ji izpostavljeni AI agentom prek nadzorovanih, odkrivljivih in strukturiranih vmesnikov, vključno z lastnim MCP strežnikom.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'AI-agent-ready izpostavljanje API-jev',
            'Podpora za MCP strežnik',
            'Kumuluz API MCP strežnik',
            'Vzorci integracije agentov',
            'Metapodatki in opisi orodij',
            'API zmožnosti, dostopne agentom',
            'Upravljanje orodij agentov',
          ],
        },
        {
          icon: Route,
          title: 'Kontekstualno usmerjanje in preverbe zahtev',
          text: 'Podpira kontekstualno usmerjanje in osnovne preverbe na ravni API gatewaya, kar pomaga ustrezno usmerjati zahteve in zmanjšati tveganje, preden dosežejo zaledne sisteme.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Kontekstno občutljivo usmerjanje zahtev',
            'Klasifikacija zahtev agentov',
            'Osnovna validacija zahtev',
            'Usmerjanje na osnovi politik',
            'Izbira ciljnega sistema',
            'Filtriranje zahtev',
            'Gateway vzorci, usmerjeni v varovala',
          ],
        },
        {
          icon: BrainCircuit,
          title: 'LLM usmerjanje in beleženje žetonov',
          text: 'Podpira vzorce LLM usmerjanja in lahko beleži porabo žetonov, kar organizacijam pomaga pridobiti vidnost nad porabo AI in operativnimi stroški.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Usmerjanje LLM zahtev',
            'Usmerjanje na končne točke modelov',
            'Vzorci abstrakcije ponudnikov AI',
            'Beleženje porabe žetonov',
            'Vidnost porabe AI',
            'Podpora spremljanju stroškov',
            'Sledljivost uporabe agentov in modelov',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Nadzor dostopa in politike',
          text: 'Omogoča nadzorovan dostop do API-jev prek določenih politik, dostopnih načrtov in upravljanja uporabnikov med aplikacijami, partnerji, sistemi in AI agenti.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Dostopni načrti',
            'Naročnine na API-je',
            'API ključi',
            'Upravljanje aplikacij uporabnikov',
            'Upravljanje agentov kot uporabnikov',
            'Omejevanje hitrosti',
            'Kvote',
            'Politike, usmerjene v QoS in SLA',
          ],
        },
        {
          icon: FlaskConical,
          title: 'Peskovniška okolja',
          text: 'Razvijalcem, partnerjem in ekipam agentskih platform omogočajo varno raziskovanje in testiranje API-jev pred produkcijsko integracijo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'API peskovnik',
            'Varno testno okolje',
            'Eksperimentiranje razvijalcev',
            'Testiranje integracije agentov',
            'Predprodukcijski dostop do API-jev',
            'Lažna ali nadzorovana API interakcija',
            'Podpora uvajanju partnerjev',
          ],
        },
        {
          icon: GitBranch,
          title: 'Upravljanje sprememb in verzij',
          text: 'Organizacijam pomaga razumeti uporabnike API-jev, odvisnosti in vpliv integracij, preden so uvedene spremembe, kar podpira nadzorovan razvoj API-jev.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Upravljanje verzij API-jev',
            'Sledenje odvisnostim uporabnikov',
            'Sledenje odvisnostim orodij agentov',
            'Vidnost vpliva sprememb',
            'Workflowi opuščanja',
            'Načrtovanje migracije',
            'Nadzorovan prehod API-jev',
            'Komunikacija z uporabniki API-jev',
          ],
        },
        {
          icon: Activity,
          title: 'Spremljanje in analitika',
          text: 'Zagotavlja vidnost nad uporabo API-jev, trendi, prometom, vedenjem odgovorov, aktivnostjo uporabnikov in AI-podprto uporabo API-jev.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Spremljanje uporabe API-jev',
            'Analitika prometa',
            'Sledenje aktivnosti uporabnikov',
            'Sledenje zahtevam agentov',
            'Vidnost odzivnih časov',
            'Analiza trendov',
            'Pregled aktivnosti gatewaya',
            'Operativno poročanje',
          ],
        },
        {
          icon: Cable,
          title: 'Podpora za B2B integracije',
          text: 'Organizacijam pomaga upravljati partnerske integracije z boljšo vidnostjo, nadzorom dostopa in operativnim nadzorom.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Partnerski dostop do API-jev',
            'Upravljanje B2B integracij',
            'Partnersko specifične politike dostopa',
            'Vidnost SLA',
            'Sledenje uporabnikom API-jev',
            'Varno zunanje izpostavljanje',
            'Upravljanje integracij',
          ],
        },
        {
          icon: Coins,
          title: 'Omogočanje API ekonomije',
          text: 'Organizacijam pomaga obravnavati API-je kot poslovna sredstva, ki lahko podpirajo nove digitalne kanale, partnerske ekosisteme, AI agente in modele prihodkov.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Produktizacija API-jev',
            'Modeli partnerskega dostopa',
            'Pakiranje API-jev',
            'Koncepti naročnin na API-je',
            'Vpogled na osnovi uporabe',
            'Podpora digitalnim ekosistemom',
            'Omogočanje novih poslovnih modelov',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Arhitektura upravljanja API-jev za poslovne in AgenticAI ekosisteme',
      body: [
        'Kumuluz API je zasnovan kot plast za upravljanje, governance in gateway za API ekosisteme.',
        'Povezuje ponudnike API-jev, uporabnike API-jev, razvijalce, gatewaye, politike, dokumentacijo, AI agente, MCP strežnike, LLM usmerjanje in operativno vidnost v en temelj za upravljanje API-jev.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Plast ponudnikov API-jev',
          text: 'Zaledni sistemi, mikrostoritve, stare aplikacije, oblačne storitve, LLM storitve in poslovne platforme, ki izpostavljajo API-je ali zmožnosti obdelave.',
        },
        {
          title: 'Plast za upravljanje API-jev',
          text: 'API katalog, upravljanje življenjskega cikla, dokumentacija, lastništvo, upravljanje naročnin, dostopni načrti, governance uporabnikov in agent-ready metapodatki API-jev.',
        },
        {
          title: 'Portal za razvijalce in uporabnike',
          text: 'Samopostrežni dostop za interne razvijalce, zunanje partnerje, uporabnike API-jev in ekipe, ki pripravljajo API-je za uporabo AI agentov.',
        },
        {
          title: 'Plast API gatewaya',
          text: 'Centraliziran dostop do API-jev, usmerjanje, uveljavljanje politik, avtentikacija, spremljanje, nadzor prometa in kontekstualno usmerjanje zahtev agentov.',
        },
        {
          title: 'Plast agentov in MCP',
          text: 'AI agenti, AgenticAI platforme in integracije MCP strežnikov, ki odkrivajo in uporabljajo odobrene API zmožnosti kot nadzorovana orodja.',
        },
        {
          title: 'Plast LLM usmerjanja',
          text: 'Usmerjanje izbranih zahtev proti LLM končnim točkam ali AI obdelovalnim plastem, z beleženjem porabe žetonov in vidnostjo porabe AI.',
        },
        {
          title: 'Uporabniške aplikacije',
          text: 'Spletne aplikacije, mobilne aplikacije, partnerski sistemi, interne platforme, poslovne aplikacije, zunanje integracije in AI agenti.',
        },
        {
          title: 'Plast analitike in governance',
          text: 'Spremljanje uporabe, aktivnost uporabnikov, sledenje zahtevam agentov, vidnost odvisnosti, upravljanje sprememb, beleženje žetonov in operativno poročanje.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Samopostrežno uvajanje za razvijalce, partnerje in agentske sisteme',
      body: [
        'Močan API ekosistem potrebuje več kot le tehnične končne točke. Razvijalci potrebujejo jasno dokumentacijo, workflowe dostopa, testna okolja in predvidljivo uvajanje.',
        'V AgenticAI okoljih agentski sistemi prav tako potrebujejo strukturirane opise razpoložljivih orodij, jasne meje dostopa in vzorce integracije, ki API-je naredijo odkrivljive in varne za uporabo.',
        'Kumuluz API zagotavlja tako klasične zmožnosti uvajanja API-jev kot MCP-usmerjene vzorce integracije za agentska okolja.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Hitrejše uvajanje razvijalcev',
          text: 'Razvijalci lahko najdejo API-je, berejo dokumentacijo in zahtevajo dostop prek samopostrežnega procesa.',
        },
        {
          title: 'Boljši dostop do dokumentacije',
          text: 'Specifikacije API-jev in informacije o uporabi so na voljo na enem osrednjem mestu.',
        },
        {
          title: 'Nadzorovane zahteve za dostop',
          text: 'Naročnine na API-je in odobritev dostopa lahko sledijo določenim workflowom.',
        },
        {
          title: 'Varna dostava API ključev',
          text: 'API ključi se lahko dodelijo prek platforme po odobritvi dostopa.',
        },
        {
          title: 'Raziskovanje v peskovniku',
          text: 'Razvijalci in ekipe za integracijo agentov lahko testirajo API-je v varnem okolju pred povezavo produkcijskih sistemov.',
        },
        {
          title: 'Integracija na osnovi MCP',
          text: 'Izbrane API-je in platformske zmožnosti je mogoče izpostaviti prek vzorcev MCP strežnikov za AI agente in AgenticAI platforme.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'API gateway za nadzorovano izvajanje AI agentov',
      body: [
        'AI agenti ne smejo imeti neomejenega dostopa do poslovnih sistemov. Tudi ko agenti smejo klicati orodja, organizacije potrebujejo usmerjanje, validacijo, avtorizacijo, spremljanje in sledljivost.',
        'Kumuluz API zagotavlja zmožnosti na ravni gatewaya, ki organizacijam pomagajo upravljati API klice, ki jih poganjajo agenti. Lahko usmerja zahteve glede na kontekst, izvaja osnovne preverbe, uveljavlja politike in beleži uporabo, preden zahteve dosežejo zaledne sisteme ali AI obdelovalne plasti.',
        'To naredi Kumuluz API pomembno kontrolno točko med AI agenti in poslovnimi zmožnostmi.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Kontekstualno usmerjanje',
          text: 'Usmerjajte zahteve agentov glede na kontekst, ciljno zmožnost, politiko, poslovno domeno ali izvedbene zahteve.',
        },
        {
          title: 'Osnovne preverbe zahtev',
          text: 'Validirajte osnovno strukturo zahtev, obvezne parametre, pogoje dostopa in dovoljene vzorce izvajanja.',
        },
        {
          title: 'Uveljavljanje politik',
          text: 'Uveljavite politike dostopa, preden zahteva agenta doseže zaledni sistem ali poslovni API.',
        },
        {
          title: 'Nadzor meja orodij',
          text: 'Omejite, do katerih API-jev in operacij agenti lahko dostopajo v posameznih scenarijih.',
        },
        {
          title: 'LLM usmerjanje',
          text: 'Usmerjajte izbrane zahteve proti LLM končnim točkam ali AI obdelovalnim plastem, kjer je to potrebno.',
        },
        {
          title: 'Beleženje uporabe in žetonov',
          text: 'Beležite uporabo API-jev, aktivnost agentov in porabo žetonov za podporo spremljanju, vidnosti stroškov in governance.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Spremenite API-je v poslovna sredstva',
      body: [
        'API-ji niso le tehnične integracijske točke. Lahko postanejo digitalne poslovne zmožnosti, ki podpirajo partnerske kanale, nove ekosisteme, AI agente in poslovne modele na osnovi API-jev.',
        'Kumuluz API organizacijam pomaga izpostavljati API-je na nadzorovan in ponovno uporaben način, kar olajša ustvarjanje partnerskih integracij, B2B ekosistemov, pobud API ekonomije in nadzorovanih ekosistemov AI orodij.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Izpostavite poslovne zmožnosti',
          text: 'Spremenite izbrane poslovne funkcije v varne API-je, ki jih partnerji, interne ekipe in AI agenti lahko ponovno uporabljajo.',
        },
        {
          title: 'Podprite partnerske ekosisteme',
          text: 'Partnerjem omogočite nadzorovan dostop do API-jev, dokumentacije, peskovniških okolij in dostopnih načrtov.',
        },
        {
          title: 'Ustvarite nove kanale',
          text: 'Uporabite API-je za podporo novih digitalnih storitev, platform, mobilnih aplikacij, poslovnih partnerstev in AI-podprtih aplikacij.',
        },
        {
          title: 'Spremljajte uporabo in vrednost',
          text: 'Spremljajte uporabo API-jev, aktivnost uporabnikov, klice agentov in trende integracij, da razumete, kako se API-ji uporabljajo.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Prožna namestitev za poslovna okolja',
      body: [
        'Kumuluz API je zasnovan za podporo različnih poslovnih modelov namestitve in delovanja.',
        'Namestiti ga je mogoče v okoljih, kjer organizacije zahtevajo nadzor nad infrastrukturo, varnostjo, API prometom, dostopom AI agentov in operativnimi procesi.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'On-premise namestitev',
          text: 'Namestite Kumuluz API v okolje pod nadzorom stranke, kjer morajo infrastruktura, podatki in dostop ostati pod nadzorom organizacije.',
        },
        {
          title: 'SaaS namestitev',
          text: 'Uporabite Kumuluz API kot upravljani platformski model, kjer je to za organizacijo bolj primerno.',
        },
        {
          title: 'Modularna arhitektura',
          text: 'Prevzemite in razširite platformske komponente glede na organizacijske zahteve in zrelost.',
        },
        {
          title: 'Ločene izkušnje za upravljanje in razvijalce',
          text: 'Podprite različne potrebe upraviteljev API-jev, administratorjev, razvijalcev, partnerjev in ekip za integracijo agentov.',
        },
        {
          title: 'Integracija poslovne varnosti',
          text: 'Integrirajte dostop do API-jev s poslovno varnostjo, identiteto in politikami gatewaya.',
        },
        {
          title: 'Pripravljenost za AgenticAI integracijo',
          text: 'Podprite AI agente, scenarije MCP strežnikov, LLM usmerjanje in beleženje porabe žetonov v poslovnih integracijskih arhitekturah.',
        },
        {
          title: 'Operativno spremljanje',
          text: 'Spremljajte API promet, vedenje odgovorov, vzorce uporabe, zahteve agentov in aktivnost dostopa.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kam se Kumuluz API umešča',
      body: [
        'Kumuluz API je primeren za organizacije, ki potrebujejo strukturirano upravljanje API-jev med internimi sistemi, partnerji, digitalnimi produkti, zunanjimi ekosistemi in AI-podprto avtomatizacijo.',
      ],
      columns: 3,
      items: [
        {
          title: 'Bančništvo in finančne storitve',
          text: 'Interna integracijska infrastruktura, partnerski API-ji, mobilna zaledja, digitalni bančni ekosistemi, varen dostop do API-jev in AI-agent-ready poslovna orodja.',
        },
        {
          title: 'Zavarovalništvo',
          text: 'Partnerski ekosistemi, API-ji za police in škodne primere, kanali za stranke, digitalne zavarovalniške storitve, poslovni modeli na osnovi API-jev in podpora AgenticAI procesom.',
        },
        {
          title: 'Letalsko vzdrževanje in poslovne storitve',
          text: 'Operativne integracije, partnerska povezljivost, storitveni API-ji, sistemi workflowov in nadzorovan dostop do poslovnih zmožnosti.',
        },
        {
          title: 'Javni sektor',
          text: 'Varno izpostavljanje API-jev, digitalne javne storitve, medinstitucionalne integracije, nadzorovan dostop do API-jev in AI-podprti administrativni workflowi.',
        },
        {
          title: 'Energetika in komunalne storitve',
          text: 'Operativne integracije, API-ji za pomoč strankam, partnerska izmenjava podatkov, povezljivost energetskih platform in AI-podprta avtomatizacija storitev.',
        },
        {
          title: 'Proizvodnja in poslovne storitve',
          text: 'Partnerski portali, B2B integracije, API-ji podatkov o izdelkih, API-ji za naročila, povezljivost dobavne verige in agentsko podprta operativna podpora.',
        },
        {
          title: 'Tehnološke platforme',
          text: 'API produkti, ekosistemi razvijalcev, monetizacija API-jev, integracijske platforme in ekosistemi AI orodij agentov.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Preverjen v zahtevnih API okoljih',
      intro:
        'Kumuluz API se uporablja v kompleksnih poslovnih okoljih, kjer so vidnost API-jev, nadzor integracij, partnerski dostop in operativna governance ključni — v bančništvu, zavarovalništvu, letalskem vzdrževanju in poslovnih storitvah.',
      items: [
        {
          title: 'Zavarovalniški API ekosistem',
          text: 'Kumuluz API je podpiral zavarovalniška okolja, kjer je bil cilj vzpostaviti boljšo vidnost nad API-ji in internimi integracijami, hkrati pa omogočiti zunanje partnerske API ekosisteme.',
          bulletsTitle: 'Omogočeni rezultati',
          bullets: [
            'Izboljšana vidnost API-jev',
            'Podpora partnerskemu ekosistemu',
            'Boljši nadzor nad integracijami',
            'Strukturirano upravljanje dostopa',
            'Novi modeli partnerske ekonomije',
            'Temelj za AI-agent-ready izpostavljanje API-jev',
          ],
        },
        {
          title: 'Bančna integracijska infrastruktura',
          text: 'Kumuluz API je podpiral bančno integracijsko infrastrukturo v internih in zunanjih API scenarijih.',
          bulletsTitle: 'Omogočeni rezultati',
          bullets: [
            'Upravljanje integracijskih API-jev',
            'Podpora API prometu velikega obsega',
            'Interne in zunanje integracije',
            'Boljša API governance',
            'Izboljšana operativna vidnost',
            'Nadzorovan dostop do poslovnih zmožnosti',
          ],
        },
        {
          title: 'Poslovne integracije in letalsko vzdrževanje',
          text: 'Kumuluz API se uporablja tudi v poslovnih okoljih in okoljih letalskega vzdrževanja, kjer so potrebni strukturiran dostop do API-jev, partnerska povezljivost in governance integracij.',
          bulletsTitle: 'Omogočeni rezultati',
          bullets: [
            'Nadzorovano izpostavljanje API-jev',
            'Integracija s partnerji in dobavitelji',
            'Operativna vidnost API-jev',
            'Varen dostop do poslovnih zmožnosti',
            'Bolj strukturiran življenjski cikel integracij',
          ],
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Pozicioniranje',
      title:
        'Nadzorovana digitalna sredstva za aplikacije, partnerje in AI agente',
      body: [
        'Kumuluz API je več kot API katalog, gateway ali portal za razvijalce. Je plast, ki poslovne API-je spremeni v ponovno uporabna, varna in nadzorovana digitalna sredstva — z vgrajenim AI-agent-ready izpostavljanjem, podporo za MCP strežnik, kontekstualnim usmerjanjem, LLM usmerjanjem in vidnostjo porabe žetonov.',
      ],
      quote:
        'Kumuluz API poslovne API-je spremeni v nadzorovana digitalna sredstva, ki jih lahko varno uporabljajo aplikacije, partnerji in AI agenti.',
    },
    {
      type: 'kumuluz',
      title: 'Del družine produktov Kumuluz',
      body: [
        'Kumuluz API je del širše družine produktov Kumuluz. Uporabljati ga je mogoče skupaj z drugimi produkti Kumuluz za podporo AI, digitalnim platformam, poslovnim API-jem in podatkovno vodenim storitvam.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'Kumuluz API izpostavlja in upravlja API-je, orodja in integracije, ki jih agenti KumuluzAI lahko uporabljajo v poslovnih okoljih.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Gradite cloud-native, API-first digitalne platforme, ki izpostavljajo ponovno uporabne poslovne zmožnosti prek upravljanega API ekosistema.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Uporabite vnaprej pripravljene ali ponovno uporabne poslovne API-je in jih izpostavite prek upravljanega API ekosistema za aplikacije, workflowe in AI agente.',
        },
        {
          label: 'Podatki',
          title: 'Kumuluz Crowdsensing',
          text: 'Izpostavite podatke crowdsensinga, analitiko in pametne storitvene zmožnosti prek upravljanih API-jev.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz API',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Osrednja vidnost API-jev',
          text: 'Ustvarite osrednji pregled nad API-ji, uporabniki, dokumentacijo, lastništvom in odvisnostmi.',
        },
        {
          title: 'Nadzorovan dostop do API-jev',
          text: 'Upravljajte naročnine, API ključe, politike, načrte, kvote in pričakovanja glede ravni storitev.',
        },
        {
          title: 'AI-agent-ready API plast',
          text: 'Izpostavite izbrane API-je kot nadzorovana orodja za AI agente in AgenticAI platforme.',
        },
        {
          title: 'Podpora za MCP in integracijo agentov',
          text: 'Podprite vzorce MCP strežnikov, integracije agentov in izpostavljanje MCP na ravni platforme prek lastnega MCP strežnika.',
        },
        {
          title: 'Nadzor gatewaya za zahteve agentov',
          text: 'Uporabite zmožnosti API gatewaya za kontekstualno usmerjanje, osnovne preverbe, uveljavljanje politik in nadzorovano izvajanje klicev, ki jih poganjajo agenti.',
        },
        {
          title: 'LLM usmerjanje in vidnost žetonov',
          text: 'Usmerjajte izbrane zahteve proti LLM storitvam in beležite porabo žetonov za podporo spremljanju, vidnosti stroškov in governance.',
        },
        {
          title: 'Boljša izkušnja razvijalcev in partnerjev',
          text: 'Podprite interne in zunanje razvijalce s samopostrežnim odkrivanjem, dokumentacijo, peskovniškimi okolji in workflowi uvajanja.',
        },
        {
          title: 'Zmanjšano tveganje integracij',
          text: 'Razumite odvisnosti, upravljajte verzije API-jev in uvajajte spremembe na nadzorovan način.',
        },
        {
          title: 'Pripravljenost za API ekonomijo',
          text: 'Spremenite API-je v ponovno uporabna poslovna sredstva, ki podpirajo partnerske ekosisteme, digitalne verige vrednosti in AI-podprto avtomatizacijo.',
        },
        {
          title: 'Preverjen v poslovnem okolju',
          text: 'Kumuluz API uporabljajo organizacije v bančništvu, zavarovalništvu, letalskem vzdrževanju in poslovnih storitvah.',
        },
        {
          title: 'Dostavlja Sunesis',
          text: 'Kumuluz API razvija in dostavlja Sunesis, ki združuje razvoj platformskih produktov s poslovnim programskim inženiringom, API arhitekturo, izkušnjami z integracijami in strokovnostjo za dostavo AgenticAI.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo s Kumuluz API',
      intro:
        'Kumuluz API je mogoče uvajati postopoma — od vidnosti API-jev in interne governance, nato pa širiti proti uvajanju razvijalcev, partnerskim ekosistemom, pobudam API ekonomije in AgenticAI integraciji.',
      items: [
        {
          title: 'Ocenite okolje API-jev in agentov',
          text: 'Prepoznamo obstoječe API-je, integracije, uporabniške aplikacije, primere uporabe agentov, lastništvo, kakovost dokumentacije in vrzeli v governance.',
        },
        {
          title: 'Določite cilje upravljanja API-jev in AgenticAI',
          text: 'Določimo, ali je prvi poudarek na interni vidnosti, uvajanju partnerjev, varnosti API-jev, nadzoru gatewaya, API ekonomiji, governance integracij ali AI-agent-ready izpostavljanju API-jev.',
        },
        {
          title: 'Vzpostavite API katalog',
          text: 'API-ji se registrirajo, dokumentirajo in organizirajo v osrednji katalog z lastništvom, metapodatki življenjskega cikla in informacijami o pripravljenosti za agente, kjer je to relevantno.',
        },
        {
          title: 'Konfigurirajte dostop, politike in usmerjanje gatewaya',
          text: 'Konfigurirajo se dostopni načrti, naročnine, API ključi, politike gatewaya, kontekstualno usmerjanje in workflowi uporabnikov.',
        },
        {
          title: 'Omogočite uvajanje razvijalcev, partnerjev in agentov',
          text: 'Razvijalci, partnerji in ekipe za integracijo agentov dobijo strukturiran dostop do dokumentacije API-jev, peskovniških okolij, MCP vzorcev in workflowov uvajanja.',
        },
        {
          title: 'Integrirajte MCP in AgenticAI scenarije',
          text: 'Izbrane API-je je mogoče izpostaviti prek MCP-usmerjenih vzorcev, medtem ko lahko Kumuluz API MCP strežnik platformske zmožnosti naredi dostopne agentskim sistemom.',
        },
        {
          title: 'Konfigurirajte LLM usmerjanje in beleženje žetonov',
          text: 'Kjer je potrebno, je mogoče izbrane zahteve usmeriti proti LLM storitvam, z beleženjem porabe žetonov in vidnostjo porabe.',
        },
        {
          title: 'Spremljajte uporabo in razvijajte',
          text: 'Uporaba API-jev, aktivnost uporabnikov, zahteve agentov, zmogljivost, odvisnosti in poraba AI se spremljajo za podporo stalnemu izboljševanju.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Pripravljeni upravljati API-je za aplikacije, partnerje in AI agente?',
      body: [
        'Kumuluz API organizacijam pomaga izpostavljati, upravljati, varovati in skalirati API-je med internimi ekipami, partnerji, digitalnimi ekosistemi in AgenticAI platformami.',
        'Ne glede na to, ali gradite interni API katalog, partnerski API ekosistem, pobudo API ekonomije ali AI-agent-ready API gateway, vam Kumuluz API daje platformski temelj za nadzorovan napredek.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Kontaktirajte nas',
    },
  ],
}

export const kumuluzApiPage: Record<LanguageCode, ProductPageContent> = {
  en,
  sl,
}
