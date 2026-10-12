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

These are advertised capability areas. The model strategy, knowledge connectors, tools, policies and operational configuration are selected for the implementation.

## Named assistants and knowledge accelerators

### AI Smart Assistant

AI Smart Assistant helps users find information, ask questions, navigate digital services and complete simple supported tasks through conversation. Advertised use cases include customer support, employee assistance, digital service navigation, internal helpdesk support, FAQ automation and first AI deployments. It can be used in customer channels, employee portals, support environments or digital products.

### AI Knowledge Mentor

AI Knowledge Mentor makes internal documentation, procedures, policies and learning materials easier to access and understand. Advertised use cases include employee onboarding, knowledge management, training and enablement, policy guidance and document-heavy business processes.

The English solutions index lists **AI Smart Assistant** alongside KumuluzAI for enterprise AI assistants, and uses the shorter label **Knowledge Mentor** alongside KumuluzAI for AI knowledge management. The product page describes the knowledge accelerator as **AI Knowledge Mentor**. These references identify focused solution building blocks, not additional standalone flagship products.

These are focused assistant solutions and accelerators, not additional top-level products. They can be delivered as standalone assistant implementations or as part of a broader KumuluzAI platform roadmap.

## Use cases

KumuluzAI supports enterprise agents, agentic process assistance, RAG-based knowledge services, customer/employee assistants and AI capabilities embedded in existing applications. Industry examples include claims support in insurance, KYC assistance in banking, case preparation in public administration, field-support knowledge in utilities and product/service knowledge in manufacturing.

A delivery-specific claims assistant, for example, could retrieve approved policy guidance and call a case-status tool. Whether it can initiate an operation, and whether approval is required, depends on the configured permissions and business process. This example does not promise a ready-made integration with every claims system.

## Architectural relationships

The platform sits between channels, enterprise knowledge, models and business tools. Its architecture includes user/channel, agent orchestration, knowledge, tool integration, model gateway, and governance/control layers.

[Kumuluz API](kumuluz-api.md) can govern the APIs and tools agents use. [Business APIs](business-apis.md) provide reusable business operations behind those tools. [Digital Platform](digital-platform.md) supports implementation of services, connectors, MCP-enabled tools and deterministic workflows. [Crowdsensing](crowdsensing.md) can contribute structured real-world data and insights.

Temporal, Camunda or similar engines can execute critical process steps while an agent gathers context or proposes actions. Workflow engine selection and integration are implementation decisions, not automatic inclusions.

## Deployment and governance boundaries

The English content describes dedicated single-tenant deployment, cloud/hybrid/on-premise options, Kubernetes/OpenShift-ready environments and external, private or hybrid model strategies.

Knowledge access must respect source permissions. Tool execution must respect user context, allowed operations, validation and approvals. Model routing requires appropriate data-handling policies. Auditability and guardrails support governance but do not guarantee that generated answers are correct or establish regulatory certification.

Exact integrations, residency arrangements, operational ownership, licensing and service levels require confirmation. Public capability descriptions are not quantified performance or universal connector guarantees.

## Related documentation and next steps

Read [overview](./overview.md), [architecture](./architecture.md), [solutions](./solutions.md), [FAQ](./faq.md) and [company](./company.md).

[Request a KumuluzAI demo or contact the team](https://kumuluz.com/en/#contact) with the users, knowledge sources, tools and approval boundaries for your first use case.
