# Kumuluz API

Kumuluz API is an API management and API economy platform for exposing, managing, securing and monitoring APIs across internal teams, partners, applications and AI agents. It is the governance and access layer for an API ecosystem, not the business implementation behind every endpoint.

Canonical HTML: https://kumuluz.com/en/products/kumuluz-api/

## Supported capability areas

- **API catalog and documentation:** register and discover APIs, specifications, ownership, consumers and reusable capabilities.
- **Developer and consumer portal:** self-service discovery, documentation, access requests and subscription management for internal and external consumers.
- **API gateway management:** centralized routing, authentication, access policies, traffic control and monitoring.
- **AI agent and MCP integration:** structured, discoverable exposure of approved APIs and integration with agentic platforms.
- **Contextual routing and request checks:** route requests by context, target capability or policy, with basic structure, parameter and access checks before backend execution.
- **LLM routing and token logging:** route selected requests to LLM endpoints and record token consumption for usage and cost visibility.
- **Access control and policies:** consumer management, access plans, subscriptions, API keys, quotas and permissions.
- **Sandbox environments:** exploration and integration testing before production use.
- **Change and version management:** understand consumers, dependencies and change impact before evolving interfaces.
- **Monitoring and analytics:** API traffic, response behavior, usage trends, consumer activity and agent-enabled consumption.
- **B2B integration support:** visibility and control over partner API integrations.
- **API economy enablement:** expose APIs as reusable business assets for digital channels, partners and ecosystem services.

Access plans and service-level expectations are management concerns; the public description does not itself establish a contractual SLA.

## MCP and AI gateway responsibilities

The English content distinguishes two MCP-related capabilities:

1. Selected APIs and business capabilities can be exposed through MCP server patterns for governed agent discovery and tool use.
2. The **Kumuluz API MCP server** can expose the API management platform's own capabilities to agentic systems.

These are not the same interface or permission scope. Agent integration also includes contextual routing, basic request validation, tool-boundary policies, LLM routing and usage/token logging. Discoverability does not make every operation authorized, and gateway checks do not replace domain-level validation.

## Use cases and consumer experience

Typical starting scenarios are an enterprise API catalog, a partner API ecosystem, an AI agent tool gateway, MCP-enabled exposure, gateway access control, API change governance and API economy initiatives.

The onboarding experience can include API discovery, documentation, controlled access requests, subscription approval, API key provisioning and sandbox exploration. This gives developers, partners and agent integration teams a structured way to consume capabilities.

The English content describes use in banking, insurance, enterprise services and aviation maintenance. A delivery-specific partner onboarding programme could catalog selected APIs and grant access after review; a banking integration programme could use ownership and dependency information to plan changes. These examples do not prove that every backend connector or industry workflow is included.

## Architectural relationships

API providers may include microservices, legacy applications, cloud services, business systems and LLM endpoints. Management and consumer portal layers organize discovery and access. The gateway enforces routing and policies. Agent/MCP and LLM routing layers support AI-related consumption, while analytics and governance track usage and change impact.

[KumuluzAI Platform](kumuluz-ai.md) can use managed APIs as approved tools. [Business APIs](business-apis.md) supply reusable business operations. [Digital Platform](digital-platform.md) supports the services and connectors that provide them. [Crowdsensing](crowdsensing.md) data and analytics can also be exposed through managed APIs.

Kumuluz API does not replace agent runtime, enterprise knowledge retrieval, backend business logic or deterministic workflow orchestration.

## Deployment and governance boundaries

The product describes on-premise and SaaS deployment models, modular adoption, separate management/developer experiences, enterprise security integration and operational monitoring.

API owners must define contracts, consumer permissions, versions and supported operations. Backends remain responsible for business rules and data authorization. Model routing requires appropriate provider and data-handling policies. Logs support visibility, not automatic compliance certification.

Actual gateway configuration, identities, connectors, token accounting and commercial terms depend on scope. No blanket out-of-the-box integrations, measured performance, license or service-level commitments should be inferred.

## Related documentation and next steps

See [overview](./overview.md), [architecture](./architecture.md), [solutions](./solutions.md), [FAQ](./faq.md) and [company](./company.md).

[Request a Kumuluz API demo or contact the team](https://kumuluz.com/en/#contact) with your API inventory, consumer groups and governance requirements.
