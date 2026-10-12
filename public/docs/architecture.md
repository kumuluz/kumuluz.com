# Kumuluz architecture

Kumuluz supports a connected, API-first enterprise architecture in which AI agents, digital channels, business operations, workflows and real-world data have distinct responsibilities. The architecture below describes the advertised relationships; it is not a mandatory deployment topology or a claim that every component is included in every implementation.

Canonical HTML: https://kumuluz.com/en/about/

## Architectural layers and product responsibilities

1. **Users and channels.** Portals, mobile applications, partner systems, employee tools and conversational interfaces consume approved capabilities.
2. **Agents and knowledge.** [KumuluzAI Platform](kumuluz-ai.md) provides agent runtime and orchestration, enterprise RAG, tool integration, model routing and centralized governance. Knowledge retrieval preserves permissions and source traceability.
3. **API and tool governance.** [Kumuluz API](kumuluz-api.md) catalogs interfaces, manages consumers and subscriptions, applies gateway access policies, performs basic request checks and supports contextual routing. Its MCP server and MCP exposure patterns help agentic systems discover approved capabilities. LLM routing and token logging support visibility into AI-enabled API usage.
4. **Business capabilities.** [Kumuluz Business APIs](business-apis.md) encapsulate reusable operations such as customer lookup, order status, payments, onboarding, KYC, cases and notifications.
5. **Services, connectors and workflows.** [Kumuluz Digital Platform](digital-platform.md) supplies foundations for modular backend services, API-first interfaces, MCP-enabled tools, adapters and workflow implementation.
6. **Enterprise systems.** Existing applications, databases and core systems remain behind controlled integration boundaries. ERP, CRM, billing and document systems are delivery-specific integration examples, not a guaranteed connector inventory.
7. **Distributed data.** [Kumuluz Crowdsensing](crowdsensing.md) collects observations from users, devices and sensors, processes them with privacy-aware patterns, and exposes insights through APIs, dashboards and smart services.
8. **Operations.** Identity, configuration, deployment automation, logging, metrics, tracing, lifecycle management and auditability span the selected layers.

## Agentic reasoning versus deterministic execution

Agents can interpret intent, retrieve context, propose actions and call approved tools. Business-critical processes may instead require defined steps, validation, approval, retries, timeouts and compensation. The English content describes Temporal, Camunda or similar engines as workflow implementation options.

An illustrative onboarding flow could use an agent to explain requirements and prepare context, Business APIs to submit documents and check status, and a workflow to enforce review and execute approved steps. Kumuluz API controls the exposed interfaces; Digital Platform supports implementation of services and connectors. The workflow, contracts, idempotency and compensation behavior must be designed for the specific process.

## Explicit trust boundaries

- **Knowledge boundary:** access to an assistant does not imply access to every indexed document.
- **Tool boundary:** agent permissions, input/output schemas and allowed operations constrain tool use; MCP discovery does not grant execution rights.
- **Gateway boundary:** routing and basic request validation do not replace business rules or service-level authorization.
- **Process boundary:** reasoning and recommendations do not bypass approvals or deterministic business execution.
- **Data boundary:** collection, consent, anonymization, aggregation and onward use must be defined before sharing observations or AI context.
- **Model boundary:** external providers, private models and hybrid routing require appropriate data-handling policies.

Audit trails and operational visibility support review; they do not by themselves establish regulatory compliance or certification.

## Runtime and deployment direction

Digital Platform is framework-flexible and uses MicroProfile- and Jakarta EE-compatible technology patterns, with Quarkus preferred for new Java cloud-native projects. KumuluzEE belongs to earlier cloud-native heritage and is maintained where needed in existing environments, rather than being the primary foundation for new projects.

Deployment varies by product. KumuluzAI advertises dedicated single-tenant, cloud, hybrid and on-premise options with Kubernetes/OpenShift-oriented operation. Kumuluz API describes on-premise and SaaS models. Digital Platform describes cloud, hybrid and on-premise delivery; Crowdsensing describes cloud-native services and hybrid integration. These product-specific descriptions should not be flattened into an identical deployment promise for the whole family.

## All seven solution entry points

[Agentic AI platforms](https://kumuluz.com/en/solutions/agentic-ai-platforms/), [enterprise AI assistants](https://kumuluz.com/en/solutions/enterprise-ai-assistants/), [AI knowledge management](https://kumuluz.com/en/solutions/ai-knowledge-management/), [API management and API economy](https://kumuluz.com/en/solutions/api-management/), [cloud-native digital platforms](https://kumuluz.com/en/solutions/cloud-native-digital-platforms/), [Business APIs](https://kumuluz.com/en/solutions/business-apis/), and [crowdsensing and smart communities](https://kumuluz.com/en/solutions/crowdsensing-smart-communities/) describe different starting needs for this architecture.

## Related documentation and discussion

See [overview](./overview.md), [solutions](./solutions.md), [FAQ](./faq.md) and [company](./company.md).

[Request an architecture-focused demo or contact the team](https://kumuluz.com/en/#contact). Share identity, data residency, integration, workflow and operational requirements so the proposed boundaries can be evaluated.
