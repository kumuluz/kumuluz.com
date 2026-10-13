# Kumuluz Digital Platform

Kumuluz Digital Platform is a cloud-native, API-first and AI-agent-ready engineering foundation for enterprise digital services. It supports development of modular backend services, APIs, integration connectors, MCP-enabled tools and deterministic workflow orchestrations used by applications, partners and agents.

Canonical HTML: https://kumuluz.com/en/products/digital-platform/

It is framework-flexible, with MicroProfile- and Jakarta EE-compatible technology patterns and Quarkus as the preferred foundation for new Java cloud-native projects.

## Core platform capability catalogue

### Cloud-native architecture

Container-ready services, Kubernetes-oriented deployment, scalable backend design, resilience/availability patterns, environment portability and cloud, hybrid or on-premise deployment support.

### Framework-flexible, Quarkus-first

MicroProfile-compatible architecture, Jakarta EE-compatible development principles, runtime flexibility and Kubernetes-oriented design. Quarkus is preferred for new Java cloud-native work, without requiring a single runtime for every environment.

### Service and API development

Cloud-native services, API-first design, business capability APIs, internal/external interfaces, agent-callable service patterns, service contracts, versioning and reusable APIs.

### MCP tools and agent integration

MCP-compatible tool patterns, agent-callable APIs, tool-safe service design, metadata and schemas, integration adapters, controlled backend access and reusable agent skills.

### Workflow orchestration

Temporal and Camunda patterns, long-running processes, human-in-the-loop workflows, service tasks, activity execution, retry/compensation patterns and process observability.

### Microservice foundations

Modular service design, domain-driven service boundaries, independent evolution, service communication, data ownership considerations and incremental modernization.

### Enterprise integration readiness

Legacy and enterprise application integration, APIs, event-driven patterns, connector/adapter development, data exchange workflows, partner connectivity and backend-for-frontend patterns.

### Security and identity integration

Authentication/authorization patterns, OAuth2/OpenID Connect support patterns, enterprise identity integration, role-based access, API/tool security, service-to-service security and secure session/token handling.

### DevOps and deployment readiness

CI/CD-ready application structure, containers, Kubernetes patterns, environment configuration, automated release workflows, infrastructure/platform integration and production deployment support.

### Observability and operations

Logging, metrics, monitoring, tracing readiness, OpenTelemetry-oriented observability, health/readiness probes, workflow/service-call visibility, dashboards and operational supportability.

### Reusable platform patterns

Architecture templates, standardized backends, shared services, reusable APIs, tools/connectors, workflows, security/deployment templates and delivery accelerators.

## Agent-ready and reusable building blocks

The agent-ready building blocks are **agent-ready services**, **tool-safe APIs**, **MCP-enabled tools**, **connectors and adapters**, **workflow orchestration**, and **reusable skills and capabilities**. These give agents approved interfaces instead of direct, uncontrolled backend access.

Examples of reusable digital capabilities:

- User and profile services
- Customer data APIs
- Product catalog APIs
- Order and subscription services
- Notification services
- Integration services
- Business workflow services
- Agent tools and skills

Teams build these once and reuse them across products.

## Use cases and modernization paths

Digital Platform covers seven delivery scenario groups:

| Scenario                               | Explicit examples                                                                                                                                                                                                                            |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise digital platforms           | Customer self-service platforms, partner portals, business portals, internal enterprise platforms, digital service platforms and multi-channel digital solutions.                                                                            |
| AI-agent-ready service layers          | Agent-callable services, tool-safe APIs, MCP-enabled tools, agent integration adapters, agentic workflow services and controlled backend access layers.                                                                                      |
| API-first backend platforms            | API-based backend systems, digital channel backends, mobile application backends, partner API platforms, internal service platforms and business capability APIs.                                                                            |
| Workflow orchestration platforms       | Temporal-based workflows, Camunda-based workflows, approval workflows, onboarding workflows, case management workflows, long-running business processes and human-in-the-loop process automation.                                            |
| Cloud-native application modernization | Legacy system API enablement, modularization of monolithic systems, strangler pattern modernization, AI-readiness for legacy systems, containerization readiness, cloud-native migration foundations and incremental modernization roadmaps. |
| Microservice-based digital solutions   | Domain-driven microservices, modular backend architectures, event-enabled services, service-based business platforms, independently deployable components and scalable distributed applications.                                             |
| Reusable digital capabilities          | User/profile services, customer data APIs, product catalog APIs, order/subscription services, notification services, integration services, business workflow services and agent tools/skills, detailed above.                                |

Modernization patterns include API enablement, tool-safe service design, MCP-enabled exposure, modularization, workflow boundaries, the strangler pattern, integration modernization and platform consolidation. Existing systems can remain in place while selected functionality is wrapped or replaced incrementally.

For example, a customer portal can use reusable customer APIs, integration adapters and an approval workflow around an existing billing system, with the billing integration, business rules and migration plan designed for the project.

## Architectural relationships

Digital channels and agents consume an API/tool layer backed by modular services. A workflow orchestration layer executes deterministic steps. Integration connectors reach enterprise systems, while deployment, security, configuration, CI/CD and observability form the operations layer.

[KumuluzAI](kumuluz-ai.md) runs and governs agents that use these services and tools. [Kumuluz API](kumuluz-api.md) governs API exposure and consumer access. [Business APIs](business-apis.md) organize reusable business capabilities on the backend. [Crowdsensing](crowdsensing.md) can contribute data and insights to digital applications.

## Governance, deployment and heritage

Agents can gather context or suggest actions, while services and workflow engines enforce critical business execution. Tool contracts, validation, authorization, idempotency, approvals and auditability must be implemented for the process. Gateway or MCP access does not remove those responsibilities.

Digital Platform supports cloud, hybrid and on-premise delivery, container/Kubernetes-oriented deployment and OpenShift-compatible architecture.

### KumuluzEE and the current technology direction

KumuluzEE is an earlier microservice framework, maintained where needed in existing environments, but not the primary foundation for new projects. The new-project direction is framework-flexible and Quarkus-first.

## Related documentation and next steps

See [overview](./overview.md), [architecture](./architecture.md), [solutions](./solutions.md), [FAQ](./faq.md) and [company](./company.md).

[Request a Digital Platform demo or contact the team](https://kumuluz.com/en/#contact) with your application boundaries, existing systems and modernization goals.
