# Kumuluz platform overview

Kumuluz is the Sunesis family of enterprise platforms and accelerators for governed AI agents, API ecosystems, reusable business capabilities, cloud-native digital services and distributed real-world data. Its purpose is to provide shared foundations rather than a separate technology stack for every new application or AI experiment.

Canonical HTML: https://kumuluz.com/en/

## The current five-product family

| Product                                         | Primary role                                                                                          | Typical starting point                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [KumuluzAI Platform](kumuluz-ai.md)             | Build, run and govern agents, assistants, enterprise knowledge retrieval and tool use.                | A customer assistant, employee knowledge assistant or governed agent workflow. |
| [Kumuluz API](kumuluz-api.md)                   | Discover, expose, secure, manage and monitor APIs for applications, partners and agents.              | API inventory, developer onboarding, partner access or an agent tool gateway.  |
| [Kumuluz Business APIs](business-apis.md)       | Reuse business operations across products, workflows and AI agents.                                   | Customer data, orders, payments, onboarding, cases or notifications.           |
| [Kumuluz Digital Platform](digital-platform.md) | Engineer cloud-native services, APIs, connectors, tools and deterministic workflows.                  | Modernize a backend or establish foundations for multiple digital products.    |
| [Kumuluz Crowdsensing](crowdsensing.md)         | Collect and process distributed observations with privacy-aware processing and AI-enhanced analytics. | Smart community services, field observations, IoT data or contextual services. |

These are complementary roles, not a requirement to deploy all five products. A focused use case can grow into broader platform adoption as reuse and governance needs become clearer.

## How the capabilities work together

KumuluzAI connects users to approved knowledge, models and tools. Kumuluz API provides API discovery, access policies, gateway routing, MCP integration patterns and usage visibility. Business APIs provide the business meaning behind those interfaces. Digital Platform supplies the engineering foundation for the services, adapters and workflows that implement them. Crowdsensing contributes real-world data and analytical context.

For example, a delivery-specific service assistant could retrieve a procedure, read a case through an approved Business API and prepare a proposed action. A workflow engine such as Temporal or Camunda could then enforce approval and execute the business-critical steps. This is an architectural example, not a packaged integration promised for every customer.

## Governance is part of the architecture

The advertised capabilities include identity integration, authorization, permission-aware retrieval, controlled API and tool access, human review, auditability, lifecycle management and operational visibility. AI reasoning does not replace business validation or authorization. A model's recommendation is not itself permission to execute an operation.

Deployment choices, connected systems, data handling, model providers, approval requirements and operating responsibilities are defined for the implementation. Supported integration patterns do not establish universal out-of-the-box connectivity. Public descriptions do not establish a particular license, certification, contractual service level or measured performance outcome.

## Seven solution paths

- [Agentic AI platforms](https://kumuluz.com/en/solutions/agentic-ai-platforms/): shared governance for agents, knowledge and tools.
- [Enterprise AI assistants](https://kumuluz.com/en/solutions/enterprise-ai-assistants/): customer and employee assistance.
- [AI knowledge management](https://kumuluz.com/en/solutions/ai-knowledge-management/): source-aware access to enterprise knowledge.
- [API management and API economy](https://kumuluz.com/en/solutions/api-management/): governed API ecosystems.
- [Cloud-native digital platforms](https://kumuluz.com/en/solutions/cloud-native-digital-platforms/): service, integration and workflow foundations.
- [Business APIs](https://kumuluz.com/en/solutions/business-apis/): reusable business capabilities.
- [Crowdsensing and smart communities](https://kumuluz.com/en/solutions/crowdsensing-smart-communities/): distributed data and smart services.

## Current products and historical names

KumuluzEE is an earlier microservice framework in the Kumuluz cloud-native heritage. The current English content states that it is maintained where needed for existing environments, but is not the primary foundation for new Digital Platform projects. New Java cloud-native projects follow a framework-flexible, Quarkus-first direction.

## Related documentation and next steps

Read [architecture](./architecture.md), [solutions](./solutions.md), the [product selection FAQ](./faq.md) and [Sunesis and Kumuluz](./company.md).

[Request a demo or contact the team](https://kumuluz.com/en/#contact) with your use case, existing systems and governance constraints.
