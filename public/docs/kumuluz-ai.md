# KumuluzAI Platform

KumuluzAI Platform is an enterprise AgenticAI foundation for building, managing and operating AI agents, assistants, retrieval-augmented generation (RAG) solutions and AI-enabled business applications. It combines reusable knowledge, tools, model access and governance rather than creating a separate AI stack for each use case.

Canonical HTML: https://kumuluz.com/en/products/kumuluz-ai/

## Supported platform capabilities

- **Agent runtime and orchestration:** tool-using agents, multi-step workflows, task planning, reusable agent templates and lifecycle management.
- **Enterprise knowledge and RAG:** document ingestion and indexing, enterprise knowledge connectors, vector search, semantic retrieval, source attribution, permission-aware access and knowledge-base management.
- **Tool and system integration:** a tool registry, API integration, function/tool calling, MCP-ready integration patterns, least-privilege access and approval-controlled execution.
- **Model gateway and routing:** model-provider abstraction, external and self-hosted model routing, selection policies, fallback strategies, hybrid LLM deployment, budget controls and usage tracking.
- **Security and guardrails:** prompt shielding, input/output validation, sensitive-data and PII handling, policy-based tool access, moderation patterns and safe execution boundaries.
- **Identity and access control:** enterprise identity integration, user and role-based access, agent permissions, tool authorization, knowledge permissions and identity propagation.
- **Human-in-the-loop workflows:** approvals, review checkpoints, escalation, manual override and traceable sensitive-action decisions.
- **Auditability and traceability:** session history, tool-call logs, retrieval traces, prompt/response tracking, user context and decision/approval history.
- **Observability and cost control:** usage monitoring, token/model visibility, cost tracking, error visibility, operational dashboards and improvement feedback.
- **Management console:** centralized management of agents, tools, knowledge sources, prompts, configuration, policies, approvals, usage and audit views.

The model strategy, knowledge connectors, tools, policies and operational configuration are selected for each implementation.

## Named assistants and knowledge accelerators

### AI Smart Assistant

AI Smart Assistant helps users find information, ask questions, navigate digital services and complete simple supported tasks through conversation. Use cases include customer support, employee assistance, digital service navigation, internal helpdesk support, FAQ automation and first AI deployments. It can be used in customer channels, employee portals, support environments or digital products.

### AI Knowledge Mentor

AI Knowledge Mentor makes internal documentation, procedures, policies and learning materials easier to access and understand. Use cases include employee onboarding, knowledge management, training and enablement, policy guidance and document-heavy business processes.

AI Smart Assistant is part of the enterprise AI assistants solution, and AI Knowledge Mentor (listed as **Knowledge Mentor** in the solutions index) is part of the AI knowledge management solution. Both are accelerators built on KumuluzAI and can be delivered as standalone assistant implementations or as part of a broader KumuluzAI platform roadmap.

## Use cases

KumuluzAI supports enterprise agents, agentic process assistance, RAG-based knowledge services, customer/employee assistants and AI capabilities embedded in existing applications. Industry examples include claims support in insurance, KYC assistance in banking, case preparation in public administration, field-support knowledge in utilities and product/service knowledge in manufacturing.

A claims assistant, for example, can retrieve approved policy guidance and call a case-status tool. Whether it can initiate an operation, and whether approval is required, depends on the configured permissions and business process.

## Architectural relationships

The platform sits between channels, enterprise knowledge, models and business tools. Its architecture includes user/channel, agent orchestration, knowledge, tool integration, model gateway, and governance/control layers.

[Kumuluz API](kumuluz-api.md) can govern the APIs and tools agents use. [Business APIs](business-apis.md) provide reusable business operations behind those tools. [Digital Platform](digital-platform.md) supports implementation of services, connectors, MCP-enabled tools and deterministic workflows. [Crowdsensing](crowdsensing.md) can contribute structured real-world data and insights.

Temporal, Camunda or similar engines can execute critical process steps while an agent gathers context or proposes actions. Workflow engine selection and integration are decided per implementation.

## Deployment and governance boundaries

KumuluzAI supports dedicated single-tenant deployment, cloud/hybrid/on-premise options, Kubernetes/OpenShift-ready environments and external, private or hybrid model strategies.

Knowledge access must respect source permissions. Tool execution must respect user context, allowed operations, validation and approvals. Model routing requires appropriate data-handling policies. Guardrails and auditability keep AI behaviour controlled and reviewable.

Integrations, data residency, operational ownership, licensing and service levels are agreed for each deployment.

## Related documentation and next steps

Read [overview](./overview.md), [architecture](./architecture.md), [solutions](./solutions.md), [FAQ](./faq.md) and [company](./company.md).

[Request a KumuluzAI demo or contact the team](https://kumuluz.com/en/#contact) with the users, knowledge sources, tools and approval boundaries for your first use case.
