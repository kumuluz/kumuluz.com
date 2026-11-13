# KumuluzAI Platform

KumuluzAI Platform is an enterprise AgenticAI foundation for building, managing and operating AI agents, digital workers and autonomous organizations with defined authority and human oversight. Assistants, retrieval-augmented generation (RAG) solutions and AI-enabled business applications remain practical starting points on the same reusable knowledge, tool, model and governance foundation.

Canonical HTML: https://kumuluz.com/en/products/kumuluz-ai/

## From assistants to autonomous AgenticAI organizations

An AI assistant usually responds to a person. A tool-using agent plans multiple steps and invokes approved tools. A **digital worker** is a defined operational role with event or schedule triggers, responsibilities, permitted actions, escalation rules and success measures. It can proactively monitor events and handle cases continuously in the background rather than waiting for a chat request.

A **digital worker team** coordinates specialized roles and handovers across a complete process. An **autonomous AgenticAI organization** connects those teams across routine daily operations. People set goals and boundaries, supervise outcomes, resolve exceptions and approve sensitive actions. Autonomy does not remove human accountability.

Sunesis designs and integrates these operating models on KumuluzAI. They are not preconfigured autonomous organizations or a guarantee that every process can run without human intervention. Start with one bounded process and expand according to measured outcomes and risk.

## Supported platform capabilities

- **Agent runtime and orchestration:** tool-using agents, digital workers, multi-step workflows, task planning, reusable agent templates and lifecycle management. Event- and schedule-driven execution patterns and digital role coordination are configured for each implementation.
- **Enterprise knowledge and RAG:** document ingestion and indexing, enterprise knowledge connectors, vector search, semantic retrieval, source attribution, permission-aware access and knowledge-base management.
- **Tool and system integration:** a tool registry, API integration, function/tool calling, MCP-ready integration patterns, least-privilege access and approval-controlled execution.
- **Model gateway and routing:** model-provider abstraction, external and self-hosted model routing, selection policies, fallback strategies, hybrid LLM deployment, budget controls and usage tracking.
- **Security and guardrails:** prompt shielding, input/output validation, sensitive-data and PII handling, policy-based tool access, moderation patterns and safe execution boundaries.
- **Identity and access control:** enterprise identity integration, user and role-based access, agent permissions, tool authorization, knowledge permissions and identity propagation. Each digital role needs explicit read, autonomous-write and approval-required boundaries.
- **Human-in-the-loop workflows:** approvals, review checkpoints, escalation, manual override and traceable sensitive-action decisions. Design handovers to include case context, checked information, attempted actions and the specific human decision needed.
- **Auditability and traceability:** session history, tool-call logs, retrieval traces, prompt/response tracking, triggering user/event/schedule, execution identity and decision/approval history.
- **Observability and cost control:** usage monitoring, token/model visibility, cost tracking, error visibility, operational dashboards and improvement feedback.
- **Management console:** centralized management of agents, tools, knowledge sources, prompts, configuration, policies, approvals, usage and audit views.

The model strategy, knowledge connectors, tools, policies and operational configuration are selected for each implementation.

## Operating, measuring and improving digital workers

Autonomous operations require a process-specific control and evaluation layer alongside platform observability. These are solution design requirements, implemented and validated for the selected workflow:

- **Detect silent errors:** evaluate business-rule adherence and outcome quality as well as technical availability. Monitor stale context, missed exceptions, repeated agent exchanges and stalled handovers.
- **Bound execution:** define per-case time, tool-call and cost limits, prevent loops and design retries, timeouts and compensation. Durable workflows preserve state and support safe resumption from confirmed checkpoints.
- **Measure completed processes:** track the share of cases completed autonomously from start to finish, escalation and rework rates, handover bottlenecks, and time and cost per completed business case.
- **Use operational feedback:** human corrections, approvals and resolved exceptions inform proposed improvements to context, routing, model choice and process steps. This does not imply automatic model retraining.
- **Validate changes:** evaluate proposed improvements on historical cases before a controlled rollout. Automated improvement does not mean uncontrolled production changes.
- **Retain human control:** define accountable owners and escalation thresholds, with approval for sensitive financial, contractual or communication actions according to the process.

## Named assistants and knowledge accelerators

### AI Smart Assistant

AI Smart Assistant helps users find information, ask questions, navigate digital services and complete simple supported tasks through conversation. Use cases include customer support, employee assistance, digital service navigation, internal helpdesk support, FAQ automation and first AI deployments. It can be used in customer channels, employee portals, support environments or digital products.

### AI Knowledge Mentor

AI Knowledge Mentor makes internal documentation, procedures, policies and learning materials easier to access and understand. Use cases include employee onboarding, knowledge management, training and enablement, policy guidance and document-heavy business processes.

AI Smart Assistant is part of the enterprise AI assistants solution, and AI Knowledge Mentor (listed as **Knowledge Mentor** in the solutions index) is part of the AI knowledge management solution. Both are accelerators built on KumuluzAI and can be delivered as standalone assistant implementations or as part of a broader KumuluzAI platform roadmap.

## Use cases

KumuluzAI supports digital workers, autonomous AgenticAI organizations, enterprise agents, agentic process assistance, RAG-based knowledge services, customer/employee assistants and AI capabilities embedded in existing applications. Industry examples include claims support in insurance, KYC assistance in banking, case preparation in public administration, field-support knowledge in utilities and product/service knowledge in manufacturing.

A claims assistant, for example, can retrieve approved policy guidance and call a case-status tool. Whether it can initiate an operation, and whether approval is required, depends on the configured permissions and business process.

An illustrative digital service worker can receive a request, check documentation, request missing information, update a case through approved Business APIs and monitor deadlines. A team can coordinate intake, validation and follow-up while handing exceptions to a person with decision-ready context. These are implementation examples, not packaged integrations or customer claims.

## Architectural relationships

The platform sits between channels, business events, schedules, enterprise knowledge, models and business tools. Its architecture includes trigger/channel, agent orchestration, knowledge, tool integration, model gateway, and governance/control layers.

[Kumuluz API](kumuluz-api.md) can govern the APIs and tools agents use. [Business APIs](business-apis.md) provide reusable business operations behind those tools. [Digital Platform](digital-platform.md) supports implementation of services, connectors, MCP-enabled tools and deterministic workflows. [Crowdsensing](crowdsensing.md) can contribute structured real-world data and insights.

Temporal, Camunda or similar engines can execute critical process steps while an agent gathers context or proposes actions. Workflow engine selection and integration are decided per implementation.

For autonomous operations, probabilistic model reasoning remains separate from deterministic business execution. Agents use governed Business APIs and MCP tools rather than direct backend or database access. OAuth2/OIDC identity propagation, OpenTelemetry tracing and narrowly scoped, single-use authorization such as Mandate Sentinel are implementation-specific integration patterns, not universally bundled capabilities.

## Deployment and governance boundaries

KumuluzAI supports dedicated single-tenant deployment, cloud/hybrid/on-premise options, Kubernetes/OpenShift-ready environments and external, private or hybrid model strategies.

Knowledge access must respect source permissions. Tool execution must respect user context, allowed operations, validation and approvals. Model routing requires appropriate data-handling policies. Guardrails and auditability keep AI behaviour controlled and reviewable.

Integrations, data residency, operational ownership, licensing and service levels are agreed for each deployment.

## Related documentation and next steps

Read [overview](./overview.md), [architecture](./architecture.md), [solutions](./solutions.md), [FAQ](./faq.md) and [company](./company.md).

[Request a KumuluzAI demo or contact the team](https://kumuluz.com/en/#contact) with one process, its digital roles, triggers, knowledge sources, tools, autonomy boundaries and success measures. You can also start with a focused assistant.
