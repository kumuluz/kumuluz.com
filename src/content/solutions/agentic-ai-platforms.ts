import {
  AppWindow,
  BookMarked,
  Boxes,
  Cpu,
  Database,
  Headset,
  Network,
  Plug,
  Route,
  ScrollText,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { SolutionPageContent } from '../../views/solutions/types'

const en: SolutionPageContent = {
  seo: {
    title: 'Agentic AI Platforms | Governed Enterprise AI Agents with Kumuluz',
    description:
      'Build governed enterprise Agentic AI platforms with KumuluzAI, API management, reusable Business APIs, MCP-enabled tools, deterministic workflows and enterprise deployment control.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Agentic AI Platforms',
    title: 'Build governed enterprise platforms for AI agents',
    body: [
      'AgenticAI can transform how organizations automate processes, support employees, serve customers and connect knowledge with action.',
      'But enterprise AI agents need more than model access — they need a secure platform foundation for knowledge, tools, APIs, workflows, identity, human approvals, auditability, cost control and governance.',
      'Kumuluz helps you build Agentic AI platforms where AI agents reason, retrieve knowledge, use approved tools, call APIs, interact with business systems and participate in deterministic workflows — under enterprise control.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore KumuluzAI',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title: 'AI agents need a platform, not another silo',
      body: [
        'Many organizations start with AI assistants, document chatbots or departmental pilots. These experiments can prove value, but they often create fragmented AI stacks.',
        'Each team may choose different models, prompts, tools, knowledge sources, security rules, access models and cost structures. Some agents may connect directly to backend systems. Others may use separate knowledge bases or unmanaged integrations.',
        'This creates risk: duplicated work, weak governance, inconsistent access control, unclear auditability and limited production readiness.',
        'AgenticAI requires a platform approach. Organizations need shared foundations for agents, knowledge, APIs, tools, workflows, governance and operations.',
      ],
      columns: 3,
      items: [
        {
          title: 'Fragmented AI pilots',
          text: 'Departments create separate AI assistants and agent prototypes that are difficult to reuse, govern or scale.',
        },
        {
          title: 'Uncontrolled tool access',
          text: 'Agents may connect directly to systems or APIs without clear permissions, validation, routing or auditability.',
        },
        {
          title: 'Duplicated knowledge',
          text: 'Teams repeatedly ingest the same documents, procedures and data into separate AI solutions.',
        },
        {
          title: 'Non-deterministic process execution',
          text: 'AI agents can reason and assist, but critical business processes often require defined steps, validations and approvals.',
        },
        {
          title: 'Limited auditability',
          text: 'Organizations need to know which agent acted, which user triggered it, what knowledge was used and which tools were called.',
        },
        {
          title: 'Unclear cost and model governance',
          text: 'Without a platform, model usage, token consumption, routing and provider strategy are difficult to control.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'A governed foundation for enterprise AgenticAI',
      body: [
        'Kumuluz provides a platform-based approach for building enterprise AgenticAI solutions.',
        'At the center is KumuluzAI, which manages agents, knowledge, tools, model routing, guardrails, approvals and auditability. Around it, other Kumuluz products provide the API, business capability and digital platform foundations agents need to operate safely.',
        'Kumuluz API exposes and governs APIs, including MCP and agent integration scenarios. Kumuluz Business APIs provide reusable, agent-ready business capabilities. Kumuluz Digital Platform helps build the services, connectors, MCP-enabled tools and deterministic workflows that agents can safely use.',
        'Together, they create a controlled AgenticAI architecture for production environments.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Govern agents centrally',
          text: 'Manage agents, tools, knowledge sources, permissions, policies, approvals, audit trails and usage from a common platform foundation.',
        },
        {
          title: 'Connect AI to enterprise systems safely',
          text: 'Use APIs, MCP-enabled tools, connectors and Business APIs instead of giving agents direct backend access.',
        },
        {
          title: 'Combine reasoning with deterministic execution',
          text: 'Let AI agents assist, prepare context and suggest actions while workflows execute critical process steps in a predictable way.',
        },
        {
          title: 'Scale beyond one assistant',
          text: 'Reuse knowledge, tools, APIs, business capabilities and workflows across multiple agents, departments and channels.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'What an enterprise Agentic AI platform needs',
      intro:
        'Production AgenticAI requires multiple platform capabilities working together. Kumuluz provides these capabilities through a connected product family.',
      items: [
        {
          icon: Cpu,
          title: 'Agent runtime and orchestration',
          text: 'AI agents need a runtime where they can reason, retrieve knowledge, call tools, follow instructions and execute multi-step tasks.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform'],
        },
        {
          icon: BookMarked,
          title: 'Enterprise knowledge and RAG',
          text: 'Agents must access approved enterprise knowledge with source traceability and permission-aware retrieval.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: Plug,
          title: 'Tool and API governance',
          text: 'Agents need controlled access to APIs, tools and business systems.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz API',
            'Kumuluz Business APIs',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Boxes,
          title: 'MCP-enabled integration',
          text: 'Enterprise capabilities can be exposed to agents through MCP-oriented tool patterns and MCP server integrations.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz API',
            'Kumuluz Digital Platform',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: Workflow,
          title: 'Deterministic workflows',
          text: 'Critical processes need predictable execution, retries, approvals, compensation and audit trails.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz Digital Platform',
            'Kumuluz Business APIs',
            'Temporal / Camunda integration patterns',
          ],
        },
        {
          icon: Route,
          title: 'Model routing and cost control',
          text: 'Organizations need control over which models are used, how requests are routed and how token usage is monitored.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'Kumuluz API'],
        },
        {
          icon: ShieldCheck,
          title: 'Security, guardrails and approvals',
          text: 'AI interactions require authorization, policy enforcement, input/output validation and human-in-the-loop controls.',
          bulletsTitle: 'Supported by',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: ScrollText,
          title: 'Auditability and observability',
          text: 'Organizations need visibility into agent actions, knowledge retrieval, API calls, workflow steps, approvals and token usage.',
          bulletsTitle: 'Supported by',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'AgenticAI reference architecture',
      body: [
        'A production AgenticAI platform separates reasoning, tools, workflows, APIs and enterprise systems into clear layers.',
        'This avoids direct, uncontrolled access from agents to backend systems and creates a safer architecture for enterprise automation.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Users and channels',
          text: 'Employees, customers, operators, portals, mobile apps, service desks and business applications that interact with AI agents.',
        },
        {
          title: 'KumuluzAI agent layer',
          text: 'AI agents, assistants, RAG, prompts, policies, guardrails, human approvals, agent sessions and model routing.',
        },
        {
          title: 'MCP and tool layer',
          text: 'MCP-enabled tools, agent-callable APIs, connectors, skills and tool metadata exposed under governance.',
        },
        {
          title: 'API management and gateway layer',
          text: 'Kumuluz API manages API catalog, access, routing, monitoring, MCP exposure, LLM routing and token usage logging.',
        },
        {
          title: 'Business capability layer',
          text: 'Kumuluz Business APIs expose reusable business functions such as customer lookup, product data, onboarding, KYC, orders, payments, cases and notifications.',
        },
        {
          title: 'Workflow orchestration layer',
          text: 'Temporal, Camunda or similar engines execute deterministic process steps, approvals, retries and long-running workflows.',
        },
        {
          title: 'Digital platform service layer',
          text: 'Kumuluz Digital Platform provides cloud-native services, APIs, connectors and integration adapters.',
        },
        {
          title: 'Enterprise systems and data',
          text: 'Core systems, ERP, CRM, document repositories, databases, legacy applications, external services and data platforms.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build',
      intro:
        'Kumuluz AgenticAI platforms can support many enterprise automation and assistance scenarios.',
      items: [
        {
          icon: Headset,
          title: 'Enterprise service agents',
          text: 'AI agents that help employees or customers resolve service requests, find information and trigger approved actions.',
          bulletsTitle: 'Examples',
          bullets: [
            'Internal service desk agents',
            'Customer service agents',
            'HR support agents',
            'IT support agents',
            'Policy assistance agents',
            'Digital portal agents',
          ],
        },
        {
          icon: Database,
          title: 'Knowledge-based process support',
          text: 'AI agents that retrieve enterprise knowledge, prepare context and support complex business processes.',
          bulletsTitle: 'Examples',
          bullets: [
            'Claims preparation',
            'Compliance support',
            'Case analysis',
            'Legal and policy review',
            'Product support',
            'Technical documentation assistance',
          ],
        },
        {
          icon: Workflow,
          title: 'Agentic process automation',
          text: 'AI agents that participate in business workflows and use tools to support multi-step processes.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer onboarding',
            'KYC preparation',
            'Document review and routing',
            'Case enrichment',
            'Ticket classification',
            'Approval preparation',
            'Process exception handling',
          ],
        },
        {
          icon: AppWindow,
          title: 'AI-enabled digital applications',
          text: 'Add governed AI capabilities into portals, mobile apps, internal systems and business applications.',
          bulletsTitle: 'Examples',
          bullets: [
            'AI in customer portals',
            'AI-assisted business applications',
            'AI search and recommendations',
            'AI-supported forms',
            'AI-guided user journeys',
            'AI-enabled digital services',
          ],
        },
        {
          icon: Network,
          title: 'AI agents connected to APIs and workflows',
          text: 'Use Kumuluz API, Business APIs and workflow orchestration to let agents safely interact with enterprise systems.',
          bulletsTitle: 'Examples',
          bullets: [
            'Agent calls customer data API',
            'Agent checks order status',
            'Agent starts onboarding workflow',
            'Agent prepares KYC case',
            'Agent triggers approval process',
            'Agent retrieves crowdsensing insight',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Governance and safety built into the platform',
      body: [
        'Enterprise AgenticAI must be safe, traceable and controllable. Kumuluz helps organizations design governance into the platform foundation rather than adding it after pilots become production systems.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Identity-aware agents',
          text: 'Agents operate with user context, roles and permissions.',
        },
        {
          title: 'Permission-aware knowledge',
          text: 'Knowledge retrieval respects access rules and source traceability.',
        },
        {
          title: 'Tool authorization',
          text: 'Agents can only use approved tools and APIs under defined policies.',
        },
        {
          title: 'Gateway checks',
          text: 'Agent requests can pass through API gateway routing, validation and policy enforcement.',
        },
        {
          title: 'Human-in-the-loop approvals',
          text: 'Sensitive actions can require human review before execution.',
        },
        {
          title: 'Deterministic workflow boundaries',
          text: 'Critical process steps can be executed through workflow engines instead of relying only on agent reasoning.',
        },
        {
          title: 'Audit trails',
          text: 'Track agent sessions, prompts, knowledge retrieval, tool calls, API usage, workflow steps and approvals.',
        },
        {
          title: 'Token and cost visibility',
          text: 'Monitor model usage, token consumption and AI-related operational cost.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where AI should assist and where workflows should execute',
      body: [
        'AI agents are useful for understanding intent, retrieving knowledge, preparing context, classifying information and recommending actions.',
        'But many business processes require deterministic execution. Regulated, financial or operational workflows often need defined process steps, validations, human approvals, retries, compensations and audit trails.',
        'Kumuluz supports this separation. AI agents can assist and orchestrate interaction, while workflow engines such as Temporal or Camunda execute process-critical steps through Business APIs and platform services.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'AI agents',
          text: 'Understand intent, retrieve knowledge, prepare context and suggest actions.',
        },
        {
          title: 'Business APIs',
          text: 'Expose governed business capabilities.',
        },
        {
          title: 'Workflow engines',
          text: 'Execute deterministic process steps.',
        },
        {
          title: 'Kumuluz API',
          text: 'Routes, secures, monitors and logs API and agent requests.',
        },
        {
          title: 'Enterprise systems',
          text: 'Perform final business operations.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'MCP-enabled tool integration for enterprise agents',
      body: [
        'AI agents need a structured way to discover and use enterprise tools. MCP-oriented integration patterns help expose approved capabilities in a form agents can understand and use.',
        'Kumuluz supports MCP-enabled tool integration across the platform family. Kumuluz API can support MCP server scenarios and can expose its own MCP server for integration with agentic systems. Kumuluz Digital Platform can be used to build MCP-enabled tools, connectors and skills. Kumuluz Business APIs can be prepared as agent-callable business tools.',
      ],
      columns: 3,
      items: [
        {
          title: 'Tool discovery',
          text: 'Expose approved capabilities with descriptions, schemas and metadata.',
        },
        {
          title: 'Controlled tool access',
          text: 'Apply access rules and policies before agents can invoke tools.',
        },
        {
          title: 'Reusable tools',
          text: 'Use the same tools across multiple agents and use cases.',
        },
        {
          title: 'Platform integration',
          text: 'Integrate agentic systems with Kumuluz API and KumuluzAI platform services.',
        },
        {
          title: 'Business tool layer',
          text: 'Expose business capabilities such as customer lookup, KYC, onboarding, cases, orders or notifications as agent tools.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise deployment',
      body: [
        'Kumuluz AgenticAI platforms are designed for organizations that need control over data, security, integration, deployment and operations.',
        'Depending on requirements, solutions can support single-tenant, cloud, hybrid or on-premise deployment models and integrate with existing enterprise systems and identity providers.',
      ],
      columns: 3,
      items: [
        {
          title: 'Single-tenant deployment',
          text: 'Support dedicated customer environments for data isolation and enterprise control.',
        },
        {
          title: 'Cloud, hybrid or on-premise',
          text: 'Deploy according to infrastructure, data residency and regulatory requirements.',
        },
        {
          title: 'Kubernetes and OpenShift-ready',
          text: 'Use modern containerized deployment and enterprise platform engineering practices.',
        },
        {
          title: 'Enterprise identity integration',
          text: 'Integrate with existing identity providers and access management systems.',
        },
        {
          title: 'Existing system integration',
          text: 'Connect to APIs, databases, core systems, document repositories and business applications.',
        },
        {
          title: 'Operational visibility',
          text: 'Monitor agents, APIs, workflows, services, token usage and platform behavior.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Kumuluz products used in this solution',
      body: [
        'Agentic AI Platforms are built from several Kumuluz products that each play a distinct role.',
      ],
      items: [
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'The core AgenticAI platform for agents, assistants, knowledge, tool use, model routing, governance, human approvals and auditability.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'API management and gateway platform for exposing, securing, routing and monitoring APIs used by applications, partners and AI agents.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities that agents and workflows can use as governed business tools.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Engineering foundation for building services, APIs, connectors, MCP-enabled tools and deterministic workflows.',
        },
        {
          label: 'Data',
          title: 'Kumuluz Crowdsensing',
          text: 'Optional data-driven component for real-world data, AI-enhanced insights and smart service context.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with AgenticAI',
      intro:
        'Organizations can start with a focused AI use case and evolve toward a broader AgenticAI platform over time.',
      items: [
        {
          title: 'Identify high-value agent scenarios',
          text: 'We identify where AI agents can support users, processes, knowledge work or automation.',
        },
        {
          title: 'Map knowledge, tools and systems',
          text: 'We identify required knowledge sources, APIs, business capabilities, workflows and enterprise systems.',
        },
        {
          title: 'Define governance and safety boundaries',
          text: 'We define permissions, policies, tool access, approvals, auditability and deterministic workflow boundaries.',
        },
        {
          title: 'Build the platform foundation',
          text: 'KumuluzAI, APIs, tools, Business APIs, connectors and workflow patterns are configured and implemented.',
        },
        {
          title: 'Deploy first agents',
          text: 'Focused agents are deployed for selected users, channels or business processes.',
        },
        {
          title: 'Monitor, learn and improve',
          text: 'Usage, agent behavior, knowledge retrieval, API calls, token consumption and workflow outcomes are monitored.',
        },
        {
          title: 'Scale across use cases',
          text: 'Additional agents, tools, workflows, knowledge sources and departments are added to the same platform foundation.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platform approach instead of AI silos',
          text: 'Kumuluz helps organizations build reusable AgenticAI foundations instead of isolated assistants and experiments.',
        },
        {
          title: 'Enterprise governance',
          text: 'Security, identity, permissions, auditability, human approvals and cost visibility are part of the platform design.',
        },
        {
          title: 'Safe connection to enterprise systems',
          text: 'APIs, tools, Business APIs, connectors and workflows create controlled access between agents and backend systems.',
        },
        {
          title: 'Deterministic where it matters',
          text: 'Critical process steps can be executed through workflow engines while agents provide reasoning and assistance.',
        },
        {
          title: 'MCP and agent integration readiness',
          text: 'Kumuluz products support MCP-oriented integration patterns and agent-ready API/tool exposure.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Sunesis combines enterprise software engineering, cloud-native platforms, APIs, integrations, DevOps and AgenticAI implementation experience.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Ready to move from AI pilots to an enterprise AgenticAI platform?',
      body: [
        'Kumuluz helps organizations build governed Agentic AI platforms where agents can access knowledge, use tools, call APIs, participate in workflows and operate under enterprise control.',
        'Start with a focused use case and evolve toward a reusable platform foundation for AgenticAI across the organization.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore KumuluzAI',
    },
  ],
}

const sl: SolutionPageContent = {
  seo: {
    title: 'Agentic AI platforme | Vodeni poslovni AI agenti s Kumuluz',
    description:
      'Zgradite vodene poslovne Agentic AI platforme s KumuluzAI, upravljanjem API-jev, ponovno uporabnimi Business API-ji, MCP-pripravljenimi orodji, determinističnimi workflowi in nadzorom poslovne uvedbe.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Agentic AI platforme',
    title: 'Zgradite vodene poslovne platforme za AI agente',
    body: [
      'AgenticAI lahko spremeni način, kako organizacije avtomatizirajo procese, podpirajo zaposlene, strežejo strankam in povezujejo znanje z dejanji.',
      'A poslovni AI agenti potrebujejo več kot le dostop do modelov — potrebujejo varen platformski temelj za znanje, orodja, API-je, workflowe, identiteto, človeške odobritve, sledljivost, nadzor stroškov in upravljanje.',
      'Kumuluz vam pomaga graditi Agentic AI platforme, kjer AI agenti sklepajo, pridobivajo znanje, uporabljajo odobrena orodja, kličejo API-je, komunicirajo s poslovnimi sistemi in sodelujejo v determinističnih workflowih — pod poslovnim nadzorom.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite KumuluzAI',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title: 'AI agenti potrebujejo platformo, ne novega silosa',
      body: [
        'Mnoge organizacije začnejo z AI asistenti, dokumentnimi klepetalnimi roboti ali oddelčnimi piloti. Ti eksperimenti lahko dokažejo vrednost, vendar pogosto ustvarijo razdrobljene AI sklade.',
        'Vsaka ekipa lahko izbere različne modele, pozive, orodja, vire znanja, varnostna pravila, modele dostopa in strukture stroškov. Nekateri agenti se lahko neposredno povežejo z zalednimi sistemi. Drugi lahko uporabljajo ločene baze znanja ali neupravljane integracije.',
        'To ustvarja tveganje: podvojeno delo, šibko upravljanje, nedosledni nadzor dostopa, nejasno sledljivost in omejeno produkcijsko pripravljenost.',
        'AgenticAI zahteva platformski pristop. Organizacije potrebujejo skupne temelje za agente, znanje, API-je, orodja, workflowe, upravljanje in delovanje.',
      ],
      columns: 3,
      items: [
        {
          title: 'Razdrobljeni AI piloti',
          text: 'Oddelki ustvarjajo ločene AI asistente in prototipe agentov, ki jih je težko ponovno uporabiti, upravljati ali skalirati.',
        },
        {
          title: 'Nenadzorovan dostop do orodij',
          text: 'Agenti se lahko neposredno povežejo s sistemi ali API-ji brez jasnih dovoljenj, validacije, usmerjanja ali sledljivosti.',
        },
        {
          title: 'Podvojeno znanje',
          text: 'Ekipe večkrat zajemajo iste dokumente, postopke in podatke v ločene AI rešitve.',
        },
        {
          title: 'Nedeterministično izvajanje procesov',
          text: 'AI agenti lahko sklepajo in pomagajo, vendar kritični poslovni procesi pogosto zahtevajo določene korake, validacije in odobritve.',
        },
        {
          title: 'Omejena sledljivost',
          text: 'Organizacije morajo vedeti, kateri agent je deloval, kateri uporabnik ga je sprožil, katero znanje je bilo uporabljeno in katera orodja so bila klicana.',
        },
        {
          title: 'Nejasno upravljanje stroškov in modelov',
          text: 'Brez platforme je težko nadzorovati uporabo modelov, porabo žetonov, usmerjanje in strategijo ponudnikov.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Vodeni temelj za poslovni AgenticAI',
      body: [
        'Kumuluz ponuja platformski pristop za gradnjo poslovnih AgenticAI rešitev.',
        'V središču je KumuluzAI, ki upravlja agente, znanje, orodja, usmerjanje modelov, varovala, odobritve in sledljivost. Okoli njega drugi izdelki Kumuluz zagotavljajo temelje za API-je, poslovne zmožnosti in digitalno platformo, ki jih agenti potrebujejo za varno delovanje.',
        'Kumuluz API izpostavlja in upravlja API-je, vključno s scenariji MCP in integracije agentov. Kumuluz Business APIs zagotavljajo ponovno uporabne, za agente pripravljene poslovne zmožnosti. Kumuluz Digital Platform pomaga graditi storitve, konektorje, MCP-pripravljena orodja in deterministične workflowe, ki jih agenti lahko varno uporabljajo.',
        'Skupaj ustvarjajo nadzorovano AgenticAI arhitekturo za produkcijska okolja.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Centralno upravljajte agente',
          text: 'Upravljajte agente, orodja, vire znanja, dovoljenja, politike, odobritve, revizijske sledi in uporabo iz skupnega platformskega temelja.',
        },
        {
          title: 'Varno povežite AI s poslovnimi sistemi',
          text: 'Uporabite API-je, MCP-pripravljena orodja, konektorje in Business API-je namesto neposrednega dostopa agentov do zalednih sistemov.',
        },
        {
          title: 'Združite sklepanje z determinističnim izvajanjem',
          text: 'Naj AI agenti pomagajo, pripravljajo kontekst in predlagajo dejanja, medtem ko workflowi izvajajo kritične korake procesa na predvidljiv način.',
        },
        {
          title: 'Skalirajte onkraj enega asistenta',
          text: 'Ponovno uporabite znanje, orodja, API-je, poslovne zmožnosti in workflowe med več agenti, oddelki in kanali.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Kaj potrebuje poslovna Agentic AI platforma',
      intro:
        'Produkcijski AgenticAI zahteva več platformskih zmožnosti, ki delujejo skupaj. Kumuluz te zmožnosti zagotavlja prek povezane družine izdelkov.',
      items: [
        {
          icon: Cpu,
          title: 'Runtime in orkestracija agentov',
          text: 'AI agenti potrebujejo runtime, kjer lahko sklepajo, pridobivajo znanje, kličejo orodja, sledijo navodilom in izvajajo večkorakovne naloge.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform'],
        },
        {
          icon: BookMarked,
          title: 'Poslovno znanje in RAG',
          text: 'Agenti morajo dostopati do odobrenega poslovnega znanja s sledljivostjo virov in pridobivanjem z upoštevanjem dovoljenj.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: Plug,
          title: 'Upravljanje orodij in API-jev',
          text: 'Agenti potrebujejo nadzorovan dostop do API-jev, orodij in poslovnih sistemov.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz API',
            'Kumuluz Business APIs',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Boxes,
          title: 'MCP-pripravljena integracija',
          text: 'Poslovne zmožnosti je mogoče izpostaviti agentom prek MCP-usmerjenih vzorcev orodij in integracij MCP strežnika.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz API',
            'Kumuluz Digital Platform',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: Workflow,
          title: 'Deterministični workflowi',
          text: 'Kritični procesi potrebujejo predvidljivo izvajanje, ponovne poskuse, odobritve, kompenzacije in revizijske sledi.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz Digital Platform',
            'Kumuluz Business APIs',
            'Vzorci integracije Temporal / Camunda',
          ],
        },
        {
          icon: Route,
          title: 'Usmerjanje modelov in nadzor stroškov',
          text: 'Organizacije potrebujejo nadzor nad tem, kateri modeli se uporabljajo, kako se usmerjajo zahteve in kako se spremlja poraba žetonov.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'Kumuluz API'],
        },
        {
          icon: ShieldCheck,
          title: 'Varnost, varovala in odobritve',
          text: 'AI interakcije zahtevajo avtorizacijo, uveljavljanje politik, validacijo vhodnih/izhodnih podatkov in human-in-the-loop kontrole.',
          bulletsTitle: 'Podpira',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: ScrollText,
          title: 'Sledljivost in opazljivost',
          text: 'Organizacije potrebujejo vpogled v dejanja agentov, pridobivanje znanja, klice API-jev, korake workflowov, odobritve in porabo žetonov.',
          bulletsTitle: 'Podpira',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura AgenticAI',
      body: [
        'Produkcijska AgenticAI platforma loči sklepanje, orodja, workflowe, API-je in poslovne sisteme v jasne plasti.',
        'To prepreči neposreden, nenadzorovan dostop agentov do zalednih sistemov in ustvari varnejšo arhitekturo za poslovno avtomatizacijo.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Uporabniki in kanali',
          text: 'Zaposleni, stranke, operaterji, portali, mobilne aplikacije, servisni centri in poslovne aplikacije, ki komunicirajo z AI agenti.',
        },
        {
          title: 'Plast agentov KumuluzAI',
          text: 'AI agenti, asistenti, RAG, pozivi, politike, varovala, človeške odobritve, seje agentov in usmerjanje modelov.',
        },
        {
          title: 'Plast MCP in orodij',
          text: 'MCP-pripravljena orodja, za agente klicljivi API-ji, konektorji, veščine in metapodatki orodij, izpostavljeni pod upravljanjem.',
        },
        {
          title: 'Plast upravljanja API-jev in prehoda',
          text: 'Kumuluz API upravlja katalog API-jev, dostop, usmerjanje, spremljanje, izpostavljanje MCP, usmerjanje LLM in beleženje porabe žetonov.',
        },
        {
          title: 'Plast poslovnih zmožnosti',
          text: 'Kumuluz Business APIs izpostavljajo ponovno uporabne poslovne funkcije, kot so iskanje strank, podatki o izdelkih, uvajanje, KYC, naročila, plačila, primeri in obvestila.',
        },
        {
          title: 'Plast orkestracije workflowov',
          text: 'Temporal, Camunda ali podobni pogoni izvajajo deterministične korake procesov, odobritve, ponovne poskuse in dolgotrajne workflowe.',
        },
        {
          title: 'Plast storitev digitalne platforme',
          text: 'Kumuluz Digital Platform zagotavlja cloud-native storitve, API-je, konektorje in integracijske adapterje.',
        },
        {
          title: 'Poslovni sistemi in podatki',
          text: 'Osrednji sistemi, ERP, CRM, dokumentni repozitoriji, podatkovne baze, zapuščinske aplikacije, zunanje storitve in podatkovne platforme.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite',
      intro:
        'Kumuluz AgenticAI platforme lahko podpirajo številne scenarije poslovne avtomatizacije in pomoči.',
      items: [
        {
          icon: Headset,
          title: 'Poslovni servisni agenti',
          text: 'AI agenti, ki zaposlenim ali strankam pomagajo reševati servisne zahtevke, najti informacije in sprožiti odobrena dejanja.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Agenti internega servisnega centra',
            'Agenti za podporo strankam',
            'Agenti za podporo HR',
            'Agenti za IT podporo',
            'Agenti za pomoč pri politikah',
            'Agenti digitalnih portalov',
          ],
        },
        {
          icon: Database,
          title: 'Podpora procesom na osnovi znanja',
          text: 'AI agenti, ki pridobivajo poslovno znanje, pripravljajo kontekst in podpirajo kompleksne poslovne procese.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Priprava škodnih primerov',
            'Podpora skladnosti',
            'Analiza primerov',
            'Pravni pregled in pregled politik',
            'Podpora izdelkom',
            'Pomoč pri tehnični dokumentaciji',
          ],
        },
        {
          icon: Workflow,
          title: 'Agentna avtomatizacija procesov',
          text: 'AI agenti, ki sodelujejo v poslovnih workflowih in uporabljajo orodja za podporo večkorakovnim procesom.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Uvajanje strank',
            'Priprava KYC',
            'Pregled in usmerjanje dokumentov',
            'Obogatitev primerov',
            'Klasifikacija zahtevkov',
            'Priprava odobritev',
            'Obravnava procesnih izjem',
          ],
        },
        {
          icon: AppWindow,
          title: 'AI-podprte digitalne aplikacije',
          text: 'Dodajte vodene AI zmožnosti v portale, mobilne aplikacije, interne sisteme in poslovne aplikacije.',
          bulletsTitle: 'Primeri',
          bullets: [
            'AI v portalih za stranke',
            'AI-podprte poslovne aplikacije',
            'AI iskanje in priporočila',
            'AI-podprti obrazci',
            'AI-vodene uporabniške poti',
            'AI-podprte digitalne storitve',
          ],
        },
        {
          icon: Network,
          title: 'AI agenti, povezani z API-ji in workflowi',
          text: 'Uporabite Kumuluz API, Business API-je in orkestracijo workflowov, da agenti varno komunicirajo s poslovnimi sistemi.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Agent kliče API s podatki o strankah',
            'Agent preveri status naročila',
            'Agent zažene workflow uvajanja',
            'Agent pripravi KYC primer',
            'Agent sproži proces odobritve',
            'Agent pridobi crowdsensing vpogled',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Upravljanje in varnost, vgrajena v platformo',
      body: [
        'Poslovni AgenticAI mora biti varen, sledljiv in nadzorljiv. Kumuluz organizacijam pomaga zasnovati upravljanje v platformskem temelju, namesto da bi ga dodali, ko piloti postanejo produkcijski sistemi.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Agenti z upoštevanjem identitete',
          text: 'Agenti delujejo z uporabniškim kontekstom, vlogami in dovoljenji.',
        },
        {
          title: 'Znanje z upoštevanjem dovoljenj',
          text: 'Pridobivanje znanja spoštuje pravila dostopa in sledljivost virov.',
        },
        {
          title: 'Avtorizacija orodij',
          text: 'Agenti lahko uporabljajo samo odobrena orodja in API-je v skladu z določenimi politikami.',
        },
        {
          title: 'Preverjanja na prehodu',
          text: 'Zahteve agentov lahko potekajo skozi usmerjanje, validacijo in uveljavljanje politik API prehoda.',
        },
        {
          title: 'Human-in-the-loop odobritve',
          text: 'Občutljiva dejanja lahko pred izvedbo zahtevajo človeški pregled.',
        },
        {
          title: 'Meje determinističnih workflowov',
          text: 'Kritične korake procesa je mogoče izvajati prek pogonov workflowov namesto zanašanja zgolj na sklepanje agentov.',
        },
        {
          title: 'Revizijske sledi',
          text: 'Sledite sejam agentov, pozivom, pridobivanju znanja, klicem orodij, uporabi API-jev, korakom workflowov in odobritvam.',
        },
        {
          title: 'Vidnost žetonov in stroškov',
          text: 'Spremljajte uporabo modelov, porabo žetonov in operativne stroške, povezane z AI.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kje naj AI pomaga in kje naj se izvajajo workflowi',
      body: [
        'AI agenti so uporabni za razumevanje namena, pridobivanje znanja, pripravo konteksta, klasifikacijo informacij in priporočanje dejanj.',
        'A mnogi poslovni procesi zahtevajo deterministično izvajanje. Regulirani, finančni ali operativni workflowi pogosto potrebujejo določene korake procesa, validacije, človeške odobritve, ponovne poskuse, kompenzacije in revizijske sledi.',
        'Kumuluz podpira to ločitev. AI agenti lahko pomagajo in orkestrirajo interakcijo, medtem ko pogoni workflowov, kot sta Temporal ali Camunda, izvajajo procesno kritične korake prek Business API-jev in platformskih storitev.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'AI agenti',
          text: 'Razumejo namen, pridobivajo znanje, pripravljajo kontekst in predlagajo dejanja.',
        },
        {
          title: 'Business APIs',
          text: 'Izpostavljajo vodene poslovne zmožnosti.',
        },
        {
          title: 'Pogoni workflowov',
          text: 'Izvajajo deterministične korake procesov.',
        },
        {
          title: 'Kumuluz API',
          text: 'Usmerja, varuje, spremlja in beleži zahteve API-jev in agentov.',
        },
        {
          title: 'Poslovni sistemi',
          text: 'Izvajajo končne poslovne operacije.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'MCP-pripravljena integracija orodij za poslovne agente',
      body: [
        'AI agenti potrebujejo strukturiran način za odkrivanje in uporabo poslovnih orodij. MCP-usmerjeni vzorci integracije pomagajo izpostaviti odobrene zmožnosti v obliki, ki jo agenti lahko razumejo in uporabljajo.',
        'Kumuluz podpira MCP-pripravljeno integracijo orodij po celotni družini platform. Kumuluz API lahko podpira scenarije MCP strežnika in lahko izpostavi lasten MCP strežnik za integracijo z agentnimi sistemi. Kumuluz Digital Platform je mogoče uporabiti za gradnjo MCP-pripravljenih orodij, konektorjev in veščin. Kumuluz Business APIs je mogoče pripraviti kot za agente klicljiva poslovna orodja.',
      ],
      columns: 3,
      items: [
        {
          title: 'Odkrivanje orodij',
          text: 'Izpostavite odobrene zmožnosti z opisi, shemami in metapodatki.',
        },
        {
          title: 'Nadzorovan dostop do orodij',
          text: 'Uveljavite pravila dostopa in politike, preden lahko agenti kličejo orodja.',
        },
        {
          title: 'Ponovno uporabna orodja',
          text: 'Uporabite ista orodja med več agenti in primeri uporabe.',
        },
        {
          title: 'Integracija platforme',
          text: 'Integrirajte agentne sisteme s Kumuluz API in platformskimi storitvami KumuluzAI.',
        },
        {
          title: 'Plast poslovnih orodij',
          text: 'Izpostavite poslovne zmožnosti, kot so iskanje strank, KYC, uvajanje, primeri, naročila ali obvestila, kot orodja za agente.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovano za poslovno uvedbo',
      body: [
        'Kumuluz AgenticAI platforme so zasnovane za organizacije, ki potrebujejo nadzor nad podatki, varnostjo, integracijo, nameščanjem in delovanjem.',
        'Glede na zahteve lahko rešitve podpirajo enouporabniške, oblačne, hibridne ali lokalne modele uvedbe ter se integrirajo z obstoječimi poslovnimi sistemi in ponudniki identitete.',
      ],
      columns: 3,
      items: [
        {
          title: 'Enouporabniška uvedba',
          text: 'Podprite namenska okolja strank za izolacijo podatkov in poslovni nadzor.',
        },
        {
          title: 'Oblak, hibrid ali lokalno',
          text: 'Namestite glede na infrastrukturo, rezidenčnost podatkov in regulatorne zahteve.',
        },
        {
          title: 'Pripravljeno za Kubernetes in OpenShift',
          text: 'Uporabite sodobno vsebniško uvedbo in poslovne prakse platformskega inženiringa.',
        },
        {
          title: 'Integracija poslovne identitete',
          text: 'Integrirajte se z obstoječimi ponudniki identitete in sistemi za upravljanje dostopa.',
        },
        {
          title: 'Integracija obstoječih sistemov',
          text: 'Povežite se z API-ji, podatkovnimi bazami, osrednjimi sistemi, dokumentnimi repozitoriji in poslovnimi aplikacijami.',
        },
        {
          title: 'Operativna vidnost',
          text: 'Spremljajte agente, API-je, workflowe, storitve, porabo žetonov in vedenje platforme.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Izdelki Kumuluz, uporabljeni v tej rešitvi',
      body: [
        'Agentic AI platforme so zgrajene iz več izdelkov Kumuluz, od katerih ima vsak svojo vlogo.',
      ],
      items: [
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'Osrednja AgenticAI platforma za agente, asistente, znanje, uporabo orodij, usmerjanje modelov, upravljanje, človeške odobritve in sledljivost.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev in prehod za izpostavljanje, varovanje, usmerjanje in spremljanje API-jev, ki jih uporabljajo aplikacije, partnerji in AI agenti.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Ponovno uporabne poslovne zmožnosti, ki jih agenti in workflowi lahko uporabljajo kot vodena poslovna orodja.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Inženirski temelj za gradnjo storitev, API-jev, konektorjev, MCP-pripravljenih orodij in determinističnih workflowov.',
        },
        {
          label: 'Podatki',
          title: 'Kumuluz Crowdsensing',
          text: 'Izbirna podatkovno vodena komponenta za podatke iz resničnega sveta, AI-izboljšane vpoglede in kontekst pametnih storitev.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo z AgenticAI',
      intro:
        'Organizacije lahko začnejo z osredotočenim AI primerom uporabe in se sčasoma razvijejo proti širši AgenticAI platformi.',
      items: [
        {
          title: 'Prepoznajte scenarije agentov visoke vrednosti',
          text: 'Ugotovimo, kje lahko AI agenti podpirajo uporabnike, procese, delo z znanjem ali avtomatizacijo.',
        },
        {
          title: 'Preslikajte znanje, orodja in sisteme',
          text: 'Ugotovimo potrebne vire znanja, API-je, poslovne zmožnosti, workflowe in poslovne sisteme.',
        },
        {
          title: 'Določite meje upravljanja in varnosti',
          text: 'Določimo dovoljenja, politike, dostop do orodij, odobritve, sledljivost in meje determinističnih workflowov.',
        },
        {
          title: 'Zgradite platformski temelj',
          text: 'KumuluzAI, API-ji, orodja, Business API-ji, konektorji in vzorci workflowov so konfigurirani in implementirani.',
        },
        {
          title: 'Namestite prve agente',
          text: 'Osredotočeni agenti so nameščeni za izbrane uporabnike, kanale ali poslovne procese.',
        },
        {
          title: 'Spremljajte, se učite in izboljšujte',
          text: 'Spremljajo se uporaba, vedenje agentov, pridobivanje znanja, klici API-jev, poraba žetonov in izidi workflowov.',
        },
        {
          title: 'Skalirajte med primeri uporabe',
          text: 'Dodatni agenti, orodja, workflowi, viri znanja in oddelki se dodajo na isti platformski temelj.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Platformski pristop namesto AI silosov',
          text: 'Kumuluz organizacijam pomaga graditi ponovno uporabne AgenticAI temelje namesto izoliranih asistentov in eksperimentov.',
        },
        {
          title: 'Poslovno upravljanje',
          text: 'Varnost, identiteta, dovoljenja, sledljivost, človeške odobritve in vidnost stroškov so del zasnove platforme.',
        },
        {
          title: 'Varna povezava s poslovnimi sistemi',
          text: 'API-ji, orodja, Business API-ji, konektorji in workflowi ustvarjajo nadzorovan dostop med agenti in zalednimi sistemi.',
        },
        {
          title: 'Deterministično tam, kjer je pomembno',
          text: 'Kritične korake procesa je mogoče izvajati prek pogonov workflowov, medtem ko agenti zagotavljajo sklepanje in pomoč.',
        },
        {
          title: 'Pripravljenost za MCP in integracijo agentov',
          text: 'Izdelki Kumuluz podpirajo MCP-usmerjene vzorce integracije in za agente pripravljeno izpostavljanje API-jev/orodij.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'Sunesis združuje poslovni programski inženiring, cloud-native platforme, API-je, integracije, DevOps in izkušnje implementacije AgenticAI.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Pripravljeni na prehod od AI pilotov k poslovni AgenticAI platformi?',
      body: [
        'Kumuluz organizacijam pomaga graditi vodene Agentic AI platforme, kjer lahko agenti dostopajo do znanja, uporabljajo orodja, kličejo API-je, sodelujejo v workflowih in delujejo pod poslovnim nadzorom.',
        'Začnite z osredotočenim primerom uporabe in se razvijte proti ponovno uporabnemu platformskemu temelju za AgenticAI po vsej organizaciji.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite KumuluzAI',
    },
  ],
}

export const agenticAiPlatformsPage: Record<LanguageCode, SolutionPageContent> =
  {
    en,
    sl,
  }
