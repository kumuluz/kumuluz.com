# Kumuluz Business APIs

Kumuluz Business APIs provide a reusable business capability layer for digital products, partners, workflows and AI agents. They expose business-oriented operations rather than giving each application or agent direct, inconsistent access to backend systems.

Canonical HTML: https://kumuluz.com/en/products/business-apis/

Capabilities can wrap existing functionality, aggregate enterprise systems or implement new reusable services. The public catalogue explicitly presents the following as **example APIs**, not a guarantee that every named endpoint is preinstalled, available without implementation or suitable unchanged for every organisation.

## Advertised business capability catalogue

All seven domains and 49 API names below are explicitly advertised examples in the current English Business APIs catalogue. They are not inferred endpoint names or a fixed package inventory.

### Customer and identity

Customer profiles, data, accounts, consent and lifecycle operations:

- Customer profile API
- Customer data API
- User account API
- Customer consent API
- Customer status API
- Customer lifecycle API
- Customer eligibility API

### Products and catalogs

Product/service information, pricing, availability and offers:

- Product catalog API
- Product details API
- Pricing API
- Availability API
- Product recommendation API
- Product configuration API
- Offer API

### Orders and transactions

Ordering, transaction handling, payments and confirmations:

- Order API
- Order status API
- Transaction API
- Payment initiation API
- Payment status API
- Confirmation API
- Refund or cancellation API

### Subscriptions and billing

Subscription-based services, financial interactions and renewals:

- Subscription API
- Subscription status API
- Plan management API
- Invoice API
- Billing API
- Renewal API
- Payment due API

### KYC and onboarding

Onboarding, identity verification, document collection and compliance-related processes:

- Onboarding API
- KYC process API
- Identity verification API
- Document submission API
- Application status API
- Compliance check API
- Approval status API

### Cases, tasks and workflows

Case management, task handling, assignment, escalation and process status:

- Case API
- Case status API
- Task API
- Task assignment API
- Escalation API
- Workflow status API
- Approval API

### Notifications and communication

Messages, reminders, communication preferences and handover:

- Notification API
- Email message API
- SMS message API
- Push notification API
- Reminder API
- Communication preference API
- Conversation handover API

## Supported design and delivery capabilities

The advertised foundation includes reusable API contracts, domain-oriented capability modelling, consistent behavior, API-first development and versioning-ready structure.

AI-tool readiness includes agent-callable interfaces, tool descriptions, input/output schemas, MCP-oriented exposure, tool permission models and agent-specific access policies. Workflow readiness includes Temporal activity patterns, Camunda service-task patterns, idempotency support, retries, compensation readiness, process visibility and long-running workflow support.

Other capabilities include business-friendly abstraction of backend complexity, API/event-based integration, data transformation, backend orchestration, documentation and catalog readiness, access control integration, developer portal compatibility and lifecycle governance. Security patterns include authentication, authorization, OAuth2/OIDC compatibility, role-based access, service-to-service security and agent-to-tool authorization. Observability covers usage, agent/workflow invocation tracking, logging, errors and lifecycle planning.

These are design capabilities and implementation patterns. Retry safety, idempotency and compensation must be defined for each operation rather than assumed from the existence of an API.

## Use cases

Business APIs support customer self-service portals, mobile apps, partner portals, digital commerce, subscriptions and onboarding. Agent scenarios include customer lookup, KYC assistance, order status, case preparation and service requests. Workflow scenarios include onboarding, KYC, approvals and other controlled long-running processes.

Legacy core systems, ERP, CRM, billing, document systems and mainframes are example integration targets. A delivery-specific onboarding flow might expose document submission and application status while keeping approval in a workflow. This does not assert a preconfigured connector or a complete regulated onboarding process.

## Architectural relationships

Business APIs sit between digital channels, agents/workflow engines and enterprise systems. Integration services connect the business contracts to their underlying systems.

[KumuluzAI](kumuluz-ai.md) can use approved Business APIs as tools. [Kumuluz API](kumuluz-api.md) can catalog, secure, document, expose and monitor them; existing API management platforms are also described as an option. [Digital Platform](digital-platform.md) supports their cloud-native implementation and connectors. [Crowdsensing](crowdsensing.md) insights can feed notifications, cases, tasks or customer interactions.

Temporal, Camunda or similar engines can orchestrate deterministic steps using these APIs as activities, service tasks or connectors.

## Governance and deployment boundaries

Business operations require validation, authorization, business rules, data ownership and approval requirements. Agents may help prepare an action without being permitted to commit it. Invocation tracking should distinguish agent, user, workflow and system context.

The content describes cloud-native implementation, hybrid integration and on-premise compatibility. Deployment, underlying systems, API inventory, contracts and operating responsibilities are delivery-specific. A KYC or compliance-check API does not itself establish legal compliance or certification.

## Related documentation and next steps

Read [overview](./overview.md), [architecture](./architecture.md), [solutions](./solutions.md), [FAQ](./faq.md) and [company](./company.md).

[Request a Business APIs demo or contact the team](https://kumuluz.com/en/#contact) with the capabilities you repeatedly rebuild and the systems that own the relevant data.
