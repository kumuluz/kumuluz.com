# Kumuluz product selection FAQ

This FAQ explains product roles and selection boundaries using the public English product and solution descriptions. It is a discovery aid, not a deployment specification or commercial offer.

Canonical HTML: https://kumuluz.com/en/

## Which product should I start with?

Choose [KumuluzAI Platform](kumuluz-ai.md) for governed agents, assistants and enterprise knowledge retrieval. Choose [Kumuluz API](kumuluz-api.md) to discover, expose, secure and monitor existing APIs. Choose [Kumuluz Business APIs](business-apis.md) when repeated business functions need reusable contracts. Choose [Kumuluz Digital Platform](digital-platform.md) to build services, connectors and workflows. Choose [Kumuluz Crowdsensing](crowdsensing.md) when the core problem is collecting and interpreting distributed real-world data.

These roles can be combined, but adopting one product does not require adopting the entire family.

## Is KumuluzAI just a chatbot?

No. Its advertised role includes agent runtime and orchestration, RAG, tool calling, model routing, identity-aware access, guardrails, human approvals, auditability and usage/cost visibility. Conversational assistants are useful starting solutions on this broader foundation.

AI Smart Assistant focuses on customer and employee assistance, support and digital service navigation. AI Knowledge Mentor focuses on internal documents, procedures, onboarding and learning. They are named AI assistants and knowledge accelerators, not extra top-level family products.

## How do Kumuluz API and Business APIs differ?

Kumuluz API manages the API ecosystem: catalogs, documentation, consumers, subscriptions, access policies, gateways, change visibility and analytics. Business APIs provide the actual reusable business operations, such as customer data, order status, invoicing, KYC, onboarding or notifications. Business APIs may be governed by Kumuluz API or an existing API management platform.

## How does Digital Platform differ from Business APIs?

Digital Platform supplies engineering foundations for services, integrations, MCP-enabled tools, workflow implementation, deployment and operations. Business APIs organize reusable business capabilities and contracts that can be implemented on those foundations. One concerns the platform foundation; the other concerns business meaning and reuse.

## Does MCP support make every backend safe for an agent?

No. MCP-oriented interfaces can make approved capabilities discoverable and callable, but authorization, tool schemas, input validation, least privilege, business rules and auditability remain necessary. Kumuluz API also advertises its own MCP server for interaction with the API management platform itself. That is distinct from exposing a selected business API as an agent tool.

## Can AI replace deterministic workflows?

Not for every process. Agents can interpret intent, retrieve information and prepare actions. Critical processes can use Temporal, Camunda or similar workflow engines for defined steps, human approval, retries and compensation. Integration patterns do not mean those engines are automatically included or configured.

## Are all integrations ready out of the box?

The public content supports integration with enterprise APIs, identity providers, data sources and applications. ERP, CRM, billing, document systems and core systems are example integration targets. Exact connectors, mappings, supported versions and implementation responsibilities must be confirmed for the delivery.

## Where can the products run?

Deployment is product-specific. KumuluzAI describes dedicated single-tenant environments and cloud, hybrid or on-premise deployment. Kumuluz API describes on-premise and SaaS models. Digital Platform describes cloud, hybrid and on-premise implementation, with container/Kubernetes and OpenShift-oriented architecture. Crowdsensing describes cloud-native deployment and hybrid integration. Discuss the selected product and data requirements rather than assuming one deployment model for everything.

## How does KumuluzEE relate to the current Digital Platform?

KumuluzEE is part of the earlier cloud-native microservice heritage, maintained where needed for existing environments. It is not the primary technology foundation for new Digital Platform projects; those follow a framework-flexible, Quarkus-first direction. This distinction does not establish deprecation or licensing status.

## Does privacy-aware processing guarantee compliance?

No. Crowdsensing advertises consent-aware processing, anonymization and aggregation patterns. KumuluzAI advertises permission-aware knowledge, sensitive-data handling and governance. These support responsible implementation but do not themselves establish certification, compliance, approved retention or lawful processing for a particular organisation.

## What should be confirmed before procurement or delivery?

Confirm required APIs and tools, model strategy, source permissions, integration scope, deployment, residency, human approvals, workflow semantics, operational ownership and commercial terms. The public pages do not establish specific licenses, certifications, service-level agreements or measured performance guarantees.

## Related documentation and contact

Read [overview](./overview.md), [architecture](./architecture.md), [solutions](./solutions.md) and [Sunesis and Kumuluz](./company.md).

[Request a demo or contact the team](https://kumuluz.com/en/#contact) to evaluate the right starting scope.
