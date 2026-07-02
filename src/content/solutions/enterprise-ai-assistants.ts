import {
  AppWindow,
  BookMarked,
  Database,
  FileSearch,
  GraduationCap,
  Handshake,
  Headset,
  LineChart,
  MessagesSquare,
  Network,
  Plug,
  ScrollText,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { SolutionPageContent } from '../../views/solutions/types'

const en: SolutionPageContent = {
  seo: {
    title:
      'Enterprise AI Assistants | AI Assistants for Customers and Employees with Kumuluz',
    description:
      'Deploy secure, governed enterprise AI assistants for customers, employees, portals and service teams with KumuluzAI, enterprise knowledge access and controlled integrations.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Enterprise AI Assistants',
    title: 'AI assistants for customers, employees and digital services',
    body: [
      'Enterprise AI assistants help customers and employees find information, complete tasks and get support through a conversational interface.',
      'Kumuluz helps organizations deploy AI assistants connected to approved enterprise knowledge, integrated with digital services and governed through enterprise controls.',
      'Start with a focused use case — customer support, employee helpdesk, internal knowledge access or portal assistance — and evolve toward a broader AgenticAI platform when ready.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore KumuluzAI',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title: 'Users need answers and support without searching across systems',
      body: [
        'Customers and employees often struggle to find the right information or complete simple tasks. They search through websites, portals, FAQs, documents, intranets, policies, knowledge bases and support channels.',
        'This creates frustration for users and unnecessary workload for support teams.',
        'Many organizations try to solve this with basic chatbots, but these often fail because they are not connected to the right knowledge, cannot understand context, are difficult to maintain or operate outside enterprise governance.',
        'Enterprise AI assistants need to be more than generic chat interfaces. They need access to approved knowledge, clear scope, controlled integrations, fallback paths, observability and governance.',
      ],
      columns: 3,
      items: [
        {
          title: 'Information is scattered',
          text: 'Users must search across portals, documents, FAQs, intranets, applications and support teams.',
        },
        {
          title: 'Support teams are overloaded',
          text: 'Many requests are repetitive and could be resolved through better self-service.',
        },
        {
          title: 'Basic chatbots are limited',
          text: 'Rule-based bots often fail when questions are phrased differently or require contextual understanding.',
        },
        {
          title: 'Knowledge changes often',
          text: 'Assistants need to stay aligned with updated policies, documents, products and procedures.',
        },
        {
          title: 'Security and privacy matter',
          text: 'Enterprise assistants must respect user permissions, data sensitivity and access boundaries.',
        },
        {
          title: 'AI pilots become isolated',
          text: 'A standalone assistant can become another silo if it is not connected to a broader platform roadmap.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI assistants built on an enterprise platform foundation',
      body: [
        'Kumuluz provides a platform-based approach for building enterprise AI assistants.',
        'Instead of deploying isolated chatbots, organizations can create assistants on top of KumuluzAI — with controlled knowledge access, governance, identity integration, tool use, auditability and future extensibility.',
        'AI assistants can start with simple question answering and knowledge retrieval. Over time, they can be extended with approved tools, APIs, workflows and business capabilities. This makes them suitable both for first AI use cases and for organizations planning a broader AgenticAI roadmap.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Improve self-service',
          text: 'Help customers and employees find answers faster without opening support tickets.',
        },
        {
          title: 'Connect to approved knowledge',
          text: 'Use enterprise documents, FAQs, policies, procedures and knowledge bases as controlled sources.',
        },
        {
          title: 'Reduce support workload',
          text: 'Automate repetitive questions and guide users through common service journeys.',
        },
        {
          title: 'Grow beyond chatbot use cases',
          text: 'Extend assistants with APIs, tools, workflows and AgenticAI capabilities when needed.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Types of AI assistants you can build',
      intro:
        'Kumuluz can support different assistant scenarios depending on audience, channel and business goal.',
      items: [
        {
          icon: Headset,
          title: 'Customer support assistant',
          text: 'An AI assistant that helps customers find information, understand services, resolve common issues and navigate support options.',
          bulletsTitle: 'Examples',
          bullets: [
            'Product or service questions',
            'FAQ automation',
            'Claims or request status guidance',
            'Digital service navigation',
            'Support triage',
            'Handover to human support',
          ],
        },
        {
          icon: Users,
          title: 'Employee assistant',
          text: 'An internal AI assistant that helps employees access policies, procedures, internal knowledge and service desk information.',
          bulletsTitle: 'Examples',
          bullets: [
            'HR questions',
            'IT helpdesk support',
            'Internal procedures',
            'Legal and compliance guidance',
            'Employee onboarding',
            'Internal service navigation',
          ],
        },
        {
          icon: AppWindow,
          title: 'Portal assistant',
          text: 'An assistant embedded into a customer portal, employee portal or digital platform to guide users through services.',
          bulletsTitle: 'Examples',
          bullets: [
            'Portal navigation',
            'Form guidance',
            'Service recommendations',
            'Account-related guidance',
            'Process explanations',
            'Contextual user support',
          ],
        },
        {
          icon: BookMarked,
          title: 'Knowledge assistant',
          text: 'An assistant focused on making documents, policies, manuals and knowledge bases easier to access and understand.',
          bulletsTitle: 'Examples',
          bullets: [
            'Document Q&A',
            'Policy explanation',
            'Procedure guidance',
            'Source-aware answers',
            'Technical documentation help',
            'Training and onboarding support',
          ],
        },
        {
          icon: Wrench,
          title: 'Service assistant with tool use',
          text: 'An assistant that can not only answer questions, but also call approved tools or APIs to support simple service actions.',
          bulletsTitle: 'Examples',
          bullets: [
            'Check request status',
            'Retrieve customer or order information',
            'Create support ticket',
            'Start onboarding workflow',
            'Send notification',
            'Trigger human approval',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What an enterprise AI assistant solution includes',
      intro:
        'A production-ready enterprise AI assistant requires knowledge, channels, governance, integrations and operational control.',
      items: [
        {
          icon: MessagesSquare,
          title: 'Conversational interface',
          text: 'Users interact with the assistant through a natural language interface embedded in portals, applications, websites or internal tools.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'AI Smart Assistant'],
        },
        {
          icon: Database,
          title: 'Enterprise knowledge access',
          text: 'The assistant retrieves information from approved documents, FAQs, procedures, policies and knowledge bases.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: FileSearch,
          title: 'RAG and source-aware answers',
          text: 'Retrieval-augmented generation enables answers based on selected enterprise sources, with traceability where needed.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: ShieldCheck,
          title: 'Permission-aware access',
          text: 'Assistants can be designed to respect user roles, permissions and knowledge access boundaries.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'Kumuluz Digital Platform'],
        },
        {
          icon: Plug,
          title: 'Tool and API integration',
          text: 'Assistants can use approved APIs and tools to retrieve statuses, create tickets or trigger simple processes.',
          bulletsTitle: 'Supported by',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: Handshake,
          title: 'Human handover',
          text: 'When the assistant cannot resolve an issue or when human review is required, it can hand over to support teams or workflows.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'Kumuluz Business APIs'],
        },
        {
          icon: LineChart,
          title: 'Analytics and improvement',
          text: 'Usage, questions, gaps, failed answers and support deflection can be monitored to improve the assistant over time.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform'],
        },
        {
          icon: ScrollText,
          title: 'Governance and auditability',
          text: 'Enterprise assistants need logs, policies, controlled prompts, source tracking and operational visibility.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'Kumuluz API'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Answers grounded in approved enterprise knowledge',
      body: [
        'Enterprise AI assistants must not invent answers or rely only on general model knowledge.',
        'KumuluzAI enables assistants to retrieve information from approved organizational sources and generate answers based on those sources.',
        'This helps organizations build assistants that are more useful, traceable and aligned with internal policies, documentation and service information.',
      ],
      columns: 3,
      items: [
        {
          title: 'Document-based answers',
          text: 'Use documents, manuals, policies, procedures and support materials as assistant knowledge sources.',
        },
        {
          title: 'Source traceability',
          text: 'Show or track which sources were used to generate an answer.',
        },
        {
          title: 'Knowledge base integration',
          text: 'Connect assistants to existing knowledge bases, intranets, document repositories or structured content.',
        },
        {
          title: 'Permission-aware retrieval',
          text: 'Restrict knowledge access based on user identity, role or context where required.',
        },
        {
          title: 'Knowledge updates',
          text: 'Update source content and improve assistant responses as organizational knowledge changes.',
        },
        {
          title: 'Answer quality feedback',
          text: 'Capture user feedback and failed queries to improve the assistant over time.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Start with an assistant. Grow into AgenticAI.',
      body: [
        'Many organizations begin with a focused AI assistant because it is easy to understand and delivers visible value quickly.',
        'But the assistant should not become an isolated AI silo. With Kumuluz, an AI assistant can become the first step toward a broader AgenticAI platform. The same foundation can later support additional agents, knowledge sources, APIs, tools, workflows, approvals and governance.',
        'This allows organizations to start pragmatically while keeping a path toward more advanced AI automation.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'Knowledge assistant',
          text: 'The assistant answers questions using approved documents and knowledge bases.',
        },
        {
          title: 'Service assistant',
          text: 'The assistant retrieves statuses, creates tickets or helps users complete simple service tasks.',
        },
        {
          title: 'Tool-using assistant',
          text: 'The assistant calls approved APIs and Business APIs under governance.',
        },
        {
          title: 'Workflow-connected assistant',
          text: 'The assistant starts or participates in deterministic workflows with human approvals where needed.',
        },
        {
          title: 'AgenticAI platform',
          text: 'Multiple assistants and agents share knowledge, tools, policies, observability and governance.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for enterprise AI assistants',
      body: [
        'A secure enterprise AI assistant connects users, knowledge, AI models, tools and enterprise systems through a governed platform foundation.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'User channels',
          text: 'Websites, customer portals, employee portals, mobile apps, intranets, service desk tools and business applications.',
        },
        {
          title: 'Assistant experience layer',
          text: 'Conversational UI, assistant logic, context handling, user interaction and handover patterns.',
        },
        {
          title: 'KumuluzAI platform layer',
          text: 'Agent runtime, RAG, knowledge retrieval, prompts, guardrails, model routing, policies, auditability and usage visibility.',
        },
        {
          title: 'Knowledge layer',
          text: 'Documents, FAQs, procedures, policies, knowledge bases, manuals, product information and internal documentation.',
        },
        {
          title: 'Tool and API layer',
          text: 'Approved APIs, Business APIs and service tools that assistants can call under governance.',
        },
        {
          title: 'Workflow and handover layer',
          text: 'Human handover, support ticket creation, approval workflows and process orchestration where needed.',
        },
        {
          title: 'Enterprise systems',
          text: 'CRM, ERP, ticketing systems, document repositories, portals, identity providers and core business systems.',
        },
        {
          title: 'Governance and observability',
          text: 'Access control, audit trails, logs, usage analytics, source traceability, cost visibility and improvement feedback.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with Enterprise AI Assistants',
      intro:
        'Kumuluz supports assistant use cases across customer service, employee support, knowledge access and digital platforms.',
      items: [
        {
          icon: Headset,
          title: 'Customer support assistant',
          text: 'Help customers find answers and resolve common issues before contacting support.',
          bulletsTitle: 'Examples',
          bullets: [
            'FAQ support',
            'Product questions',
            'Service guidance',
            'Request status support',
            'Support triage',
            'Human handover',
          ],
        },
        {
          icon: Users,
          title: 'Employee service assistant',
          text: 'Help employees access HR, IT, legal, compliance and internal service information.',
          bulletsTitle: 'Examples',
          bullets: [
            'HR policy questions',
            'IT troubleshooting',
            'Internal procedure support',
            'Compliance guidance',
            'Employee onboarding',
            'Service desk deflection',
          ],
        },
        {
          icon: AppWindow,
          title: 'Portal assistant',
          text: 'Guide users inside a customer, partner or employee portal.',
          bulletsTitle: 'Examples',
          bullets: [
            'Navigation help',
            'Form assistance',
            'Service recommendations',
            'Process explanations',
            'Account-related guidance',
            'Contextual support',
          ],
        },
        {
          icon: GraduationCap,
          title: 'Knowledge mentor',
          text: 'Make large document collections easier to search, understand and use.',
          bulletsTitle: 'Examples',
          bullets: [
            'Policy explanation',
            'Technical documentation Q&A',
            'Training support',
            'Onboarding materials',
            'Procedure guidance',
            'Source-aware answers',
          ],
        },
        {
          icon: Network,
          title: 'Assistant with business tools',
          text: 'Allow assistants to use approved tools and APIs for simple tasks.',
          bulletsTitle: 'Examples',
          bullets: [
            'Create support ticket',
            'Retrieve order status',
            'Check application status',
            'Send notification',
            'Start workflow',
            'Prepare approval request',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Enterprise-grade governance for AI assistants',
      body: [
        'Enterprise AI assistants must be secure, trustworthy and manageable.',
        'Kumuluz helps organizations define assistant scope, connect approved knowledge, apply guardrails, control tool access and monitor assistant behavior.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Controlled knowledge sources',
          text: 'Assistants answer from approved content rather than arbitrary data.',
        },
        {
          title: 'Access control',
          text: 'User identity and role can determine which information or tools are available.',
        },
        {
          title: 'Prompt and response governance',
          text: 'Assistant behavior can be configured, tested and improved over time.',
        },
        {
          title: 'Tool authorization',
          text: 'Assistants can only call approved APIs or actions.',
        },
        {
          title: 'Human handover',
          text: 'Users can be routed to human support when needed.',
        },
        {
          title: 'Auditability',
          text: 'Track conversations, source usage, tool calls and decisions where required.',
        },
        {
          title: 'Privacy and sensitive data handling',
          text: 'Apply policies for personal data, confidential information and sensitive business context.',
        },
        {
          title: 'Usage and cost visibility',
          text: 'Monitor usage patterns, model consumption and improvement opportunities.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise deployment',
      body: [
        'Kumuluz AI assistant solutions can be deployed in enterprise environments where data, identity, integration and operational control matter.',
        'They can support internal, customer-facing or partner-facing channels and integrate with existing systems and knowledge sources.',
      ],
      columns: 3,
      items: [
        {
          title: 'Customer-facing deployment',
          text: 'Deploy assistants in websites, customer portals or digital service channels.',
        },
        {
          title: 'Internal deployment',
          text: 'Deploy assistants in employee portals, intranets or internal business applications.',
        },
        {
          title: 'Hybrid integration',
          text: 'Connect cloud-native AI assistant services with existing enterprise systems and data sources.',
        },
        {
          title: 'Enterprise identity integration',
          text: 'Respect user roles and permissions through identity-aware access patterns.',
        },
        {
          title: 'Knowledge source integration',
          text: 'Connect documents, knowledge bases, intranets, portals and repositories.',
        },
        {
          title: 'Operational monitoring',
          text: 'Monitor assistant usage, errors, unanswered questions, feedback and performance.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Kumuluz products used in this solution',
      body: [
        'Enterprise AI Assistants are built from several Kumuluz products that each play a distinct role.',
      ],
      items: [
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'The core platform for AI assistants, agents, knowledge retrieval, model routing, governance and auditability.',
        },
        {
          label: 'Assistant',
          title: 'AI Smart Assistant',
          text: 'A focused assistant accelerator for customer-facing or employee-facing conversational support.',
        },
        {
          label: 'Knowledge',
          title: 'AI Knowledge Mentor',
          text: 'A knowledge-focused assistant accelerator for documents, onboarding, policies, procedures and internal knowledge access.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Used when assistants need governed access to APIs, tools or enterprise systems.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Used when assistants need reusable business capabilities such as customer lookup, order status, cases, tasks or notifications.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Used to build the services, connectors and integrations needed around assistant deployments.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with AI assistants',
      intro:
        'Enterprise AI assistants can start with a focused use case and evolve over time.',
      items: [
        {
          title: 'Select the assistant use case',
          text: 'Choose a concrete scenario such as customer support, employee helpdesk, knowledge search or portal guidance.',
        },
        {
          title: 'Define the assistant scope',
          text: 'Define what the assistant should answer, what it should not answer and when it should hand over to a human.',
        },
        {
          title: 'Connect approved knowledge',
          text: 'Documents, FAQs, policies, procedures or knowledge bases are connected and prepared for retrieval.',
        },
        {
          title: 'Configure guardrails and access',
          text: 'Policies, access rules, prompts, fallback behavior and safety boundaries are configured.',
        },
        {
          title: 'Integrate channels',
          text: 'The assistant is embedded into a website, portal, mobile app, intranet or business application.',
        },
        {
          title: 'Add tools where needed',
          text: 'Approved APIs or Business APIs can be added for status checks, ticket creation, notifications or workflow initiation.',
        },
        {
          title: 'Monitor and improve',
          text: 'Questions, feedback, failed answers, support deflection and usage patterns are analyzed for continuous improvement.',
        },
        {
          title: 'Scale toward AgenticAI',
          text: 'Additional assistants, knowledge sources, tools, workflows and agents are added to the platform foundation.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz for Enterprise AI Assistants',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Start practical, scale strategically',
          text: 'Begin with a focused assistant use case and grow toward a broader AgenticAI platform.',
        },
        {
          title: 'Grounded in enterprise knowledge',
          text: 'Use approved documents, knowledge bases and source-aware retrieval to improve answer reliability.',
        },
        {
          title: 'Governed and secure',
          text: 'Apply access control, guardrails, auditability and tool authorization from the beginning.',
        },
        {
          title: 'Integration-ready',
          text: 'Assistants can connect to APIs, Business APIs, workflows and enterprise systems when needed.',
        },
        {
          title: 'Reusable platform foundation',
          text: 'Avoid isolated chatbot projects by building assistants on a shared platform.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Sunesis combines AI, enterprise software engineering, integrations, digital platforms, APIs and DevOps delivery expertise.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Ready to deploy an enterprise AI assistant?',
      body: [
        'Kumuluz helps organizations deploy AI assistants that improve self-service, reduce support workload and make enterprise knowledge easier to use.',
        'Start with a focused assistant for customers or employees, then evolve toward a governed AgenticAI platform.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore KumuluzAI',
    },
  ],
}

const sl: SolutionPageContent = {
  seo: {
    title:
      'Enterprise AI asistenti | AI asistenti za stranke in zaposlene s Kumuluz',
    description:
      'Uvedite varne, vodene poslovne AI asistente za stranke, zaposlene, portale in servisne ekipe s KumuluzAI, dostopom do poslovnega znanja in nadzorovanimi integracijami.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Enterprise AI asistenti',
    title: 'AI asistenti za stranke, zaposlene in digitalne storitve',
    body: [
      'Poslovni AI asistenti strankam in zaposlenim pomagajo najti informacije, opraviti naloge in dobiti podporo prek pogovornega vmesnika.',
      'Kumuluz organizacijam pomaga uvajati AI asistente, povezane z odobrenim poslovnim znanjem, integrirane z digitalnimi storitvami in vodene prek poslovnih kontrol.',
      'Začnite z osredotočenim primerom uporabe — podpora strankam, interni helpdesk, dostop do internega znanja ali pomoč v portalu — in se razvijte proti širši AgenticAI platformi, ko boste pripravljeni.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite KumuluzAI',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Uporabniki potrebujejo odgovore in podporo brez iskanja po sistemih',
      body: [
        'Stranke in zaposleni pogosto težko najdejo prave informacije ali opravijo preproste naloge. Iščejo po spletnih straneh, portalih, pogostih vprašanjih, dokumentih, intranetih, politikah, bazah znanja in podpornih kanalih.',
        'To ustvarja frustracijo pri uporabnikih in nepotrebno obremenitev podpornih ekip.',
        'Mnoge organizacije to poskušajo rešiti z osnovnimi klepetalnimi roboti, vendar ti pogosto odpovedo, ker niso povezani s pravim znanjem, ne razumejo konteksta, jih je težko vzdrževati ali delujejo zunaj poslovnega upravljanja.',
        'Poslovni AI asistenti morajo biti več kot le splošni klepetalni vmesniki. Potrebujejo dostop do odobrenega znanja, jasen obseg, nadzorovane integracije, rezervne poti, opazljivost in upravljanje.',
      ],
      columns: 3,
      items: [
        {
          title: 'Informacije so razpršene',
          text: 'Uporabniki morajo iskati po portalih, dokumentih, pogostih vprašanjih, intranetih, aplikacijah in podpornih ekipah.',
        },
        {
          title: 'Podporne ekipe so preobremenjene',
          text: 'Mnoge zahteve so ponavljajoče in bi jih bilo mogoče rešiti z boljšo samopostrežbo.',
        },
        {
          title: 'Osnovni klepetalni roboti so omejeni',
          text: 'Roboti na podlagi pravil pogosto odpovedo, ko so vprašanja drugače oblikovana ali zahtevajo razumevanje konteksta.',
        },
        {
          title: 'Znanje se pogosto spreminja',
          text: 'Asistenti morajo ostati usklajeni s posodobljenimi politikami, dokumenti, izdelki in postopki.',
        },
        {
          title: 'Varnost in zasebnost sta pomembni',
          text: 'Poslovni asistenti morajo spoštovati uporabniška dovoljenja, občutljivost podatkov in meje dostopa.',
        },
        {
          title: 'AI piloti postanejo izolirani',
          text: 'Samostojni asistent lahko postane nov silos, če ni povezan s širšim načrtom platforme.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI asistenti, zgrajeni na poslovnem platformskem temelju',
      body: [
        'Kumuluz ponuja platformski pristop za gradnjo poslovnih AI asistentov.',
        'Namesto uvajanja izoliranih klepetalnih robotov lahko organizacije ustvarijo asistente na temelju KumuluzAI — z nadzorovanim dostopom do znanja, upravljanjem, integracijo identitete, uporabo orodij, sledljivostjo in prihodnjo razširljivostjo.',
        'AI asistenti lahko začnejo s preprostim odgovarjanjem na vprašanja in pridobivanjem znanja. Sčasoma jih je mogoče razširiti z odobrenimi orodji, API-ji, workflowi in poslovnimi zmožnostmi. To jih naredi primerne tako za prve AI primere uporabe kot za organizacije, ki načrtujejo širši AgenticAI načrt.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Izboljšajte samopostrežbo',
          text: 'Pomagajte strankam in zaposlenim hitreje najti odgovore brez odpiranja zahtevkov za podporo.',
        },
        {
          title: 'Povežite se z odobrenim znanjem',
          text: 'Uporabite poslovne dokumente, pogosta vprašanja, politike, postopke in baze znanja kot nadzorovane vire.',
        },
        {
          title: 'Zmanjšajte obremenitev podpore',
          text: 'Avtomatizirajte ponavljajoča vprašanja in vodite uporabnike skozi pogoste servisne poti.',
        },
        {
          title: 'Zrastite onkraj primerov uporabe klepetalnih robotov',
          text: 'Razširite asistente z API-ji, orodji, workflowi in AgenticAI zmožnostmi, ko je potrebno.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Vrste AI asistentov, ki jih lahko zgradite',
      intro:
        'Kumuluz lahko podpira različne scenarije asistentov glede na občinstvo, kanal in poslovni cilj.',
      items: [
        {
          icon: Headset,
          title: 'Asistent za podporo strankam',
          text: 'AI asistent, ki strankam pomaga najti informacije, razumeti storitve, rešiti pogoste težave in krmariti po možnostih podpore.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Vprašanja o izdelkih ali storitvah',
            'Avtomatizacija pogostih vprašanj',
            'Vodenje glede statusa zahtevkov',
            'Krmarjenje po digitalnih storitvah',
            'Triaža podpore',
            'Predaja človeški podpori',
          ],
        },
        {
          icon: Users,
          title: 'Asistent za zaposlene',
          text: 'Interni AI asistent, ki zaposlenim pomaga dostopati do politik, postopkov, internega znanja in informacij servisnega centra.',
          bulletsTitle: 'Primeri',
          bullets: [
            'HR vprašanja',
            'IT helpdesk podpora',
            'Interni postopki',
            'Pravno vodenje in vodenje skladnosti',
            'Uvajanje zaposlenih',
            'Krmarjenje po internih storitvah',
          ],
        },
        {
          icon: AppWindow,
          title: 'Asistent v portalu',
          text: 'Asistent, vgrajen v portal za stranke, portal za zaposlene ali digitalno platformo, ki uporabnike vodi skozi storitve.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Krmarjenje po portalu',
            'Pomoč pri obrazcih',
            'Priporočila storitev',
            'Vodenje glede računa',
            'Razlaga procesov',
            'Kontekstualna podpora uporabnikom',
          ],
        },
        {
          icon: BookMarked,
          title: 'Asistent za znanje',
          text: 'Asistent, osredotočen na to, da so dokumenti, politike, priročniki in baze znanja lažje dostopni in razumljivi.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Vprašanja in odgovori o dokumentih',
            'Razlaga politik',
            'Vodenje po postopkih',
            'Odgovori z zavedanjem virov',
            'Pomoč pri tehnični dokumentaciji',
            'Podpora pri usposabljanju in uvajanju',
          ],
        },
        {
          icon: Wrench,
          title: 'Servisni asistent z uporabo orodij',
          text: 'Asistent, ki ne le odgovarja na vprašanja, ampak lahko tudi kliče odobrena orodja ali API-je za podporo preprostim servisnim dejanjem.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Preverjanje statusa zahtevka',
            'Pridobivanje informacij o stranki ali naročilu',
            'Ustvarjanje zahtevka za podporo',
            'Zagon workflowa uvajanja',
            'Pošiljanje obvestila',
            'Sprožitev človeške odobritve',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj vključuje rešitev poslovnega AI asistenta',
      intro:
        'Produkcijsko pripravljen poslovni AI asistent zahteva znanje, kanale, upravljanje, integracije in operativni nadzor.',
      items: [
        {
          icon: MessagesSquare,
          title: 'Pogovorni vmesnik',
          text: 'Uporabniki z asistentom komunicirajo prek vmesnika v naravnem jeziku, vgrajenega v portale, aplikacije, spletne strani ali interna orodja.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'AI Smart Assistant'],
        },
        {
          icon: Database,
          title: 'Dostop do poslovnega znanja',
          text: 'Asistent pridobiva informacije iz odobrenih dokumentov, pogostih vprašanj, postopkov, politik in baz znanja.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: FileSearch,
          title: 'RAG in odgovori z zavedanjem virov',
          text: 'Retrieval-augmented generation omogoča odgovore na podlagi izbranih poslovnih virov, s sledljivostjo, kjer je potrebno.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: ShieldCheck,
          title: 'Dostop z upoštevanjem dovoljenj',
          text: 'Asistente je mogoče zasnovati tako, da spoštujejo uporabniške vloge, dovoljenja in meje dostopa do znanja.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'Kumuluz Digital Platform'],
        },
        {
          icon: Plug,
          title: 'Integracija orodij in API-jev',
          text: 'Asistenti lahko uporabljajo odobrene API-je in orodja za pridobivanje statusov, ustvarjanje zahtevkov ali sprožitev preprostih procesov.',
          bulletsTitle: 'Podpira',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: Handshake,
          title: 'Predaja človeku',
          text: 'Ko asistent ne more rešiti težave ali ko je potreben človeški pregled, lahko preda podpornim ekipam ali workflowom.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'Kumuluz Business APIs'],
        },
        {
          icon: LineChart,
          title: 'Analitika in izboljšave',
          text: 'Uporabo, vprašanja, vrzeli, neuspele odgovore in razbremenitev podpore je mogoče spremljati za sčasoma boljšega asistenta.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform'],
        },
        {
          icon: ScrollText,
          title: 'Upravljanje in sledljivost',
          text: 'Poslovni asistenti potrebujejo dnevnike, politike, nadzorovane pozive, sledenje virom in operativno vidnost.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'Kumuluz API'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Odgovori, utemeljeni na odobrenem poslovnem znanju',
      body: [
        'Poslovni AI asistenti ne smejo izmišljati odgovorov ali se zanašati le na splošno znanje modela.',
        'KumuluzAI asistentom omogoča pridobivanje informacij iz odobrenih organizacijskih virov in generiranje odgovorov na podlagi teh virov.',
        'To organizacijam pomaga graditi asistente, ki so bolj uporabni, sledljivi in usklajeni z internimi politikami, dokumentacijo in informacijami o storitvah.',
      ],
      columns: 3,
      items: [
        {
          title: 'Odgovori na podlagi dokumentov',
          text: 'Uporabite dokumente, priročnike, politike, postopke in podporno gradivo kot vire znanja asistenta.',
        },
        {
          title: 'Sledljivost virov',
          text: 'Prikažite ali sledite, kateri viri so bili uporabljeni za generiranje odgovora.',
        },
        {
          title: 'Integracija baze znanja',
          text: 'Povežite asistente z obstoječimi bazami znanja, intraneti, repozitoriji dokumentov ali strukturirano vsebino.',
        },
        {
          title: 'Pridobivanje z upoštevanjem dovoljenj',
          text: 'Omejite dostop do znanja na podlagi identitete, vloge ali konteksta uporabnika, kjer je potrebno.',
        },
        {
          title: 'Posodobitve znanja',
          text: 'Posodabljajte vsebino virov in izboljšujte odgovore asistenta, ko se organizacijsko znanje spreminja.',
        },
        {
          title: 'Povratne informacije o kakovosti odgovorov',
          text: 'Zajemite povratne informacije uporabnikov in neuspele poizvedbe za sčasoma boljšega asistenta.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Začnite z asistentom. Zrastite v AgenticAI.',
      body: [
        'Mnoge organizacije začnejo z osredotočenim AI asistentom, ker ga je enostavno razumeti in hitro prinaša vidno vrednost.',
        'A asistent ne sme postati izoliran AI silos. S Kumuluz lahko AI asistent postane prvi korak proti širši AgenticAI platformi. Isti temelj lahko pozneje podpira dodatne agente, vire znanja, API-je, orodja, workflowe, odobritve in upravljanje.',
        'To organizacijam omogoča pragmatičen začetek, hkrati pa ohranja pot proti naprednejši AI avtomatizaciji.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'Asistent za znanje',
          text: 'Asistent odgovarja na vprašanja z uporabo odobrenih dokumentov in baz znanja.',
        },
        {
          title: 'Servisni asistent',
          text: 'Asistent pridobiva statuse, ustvarja zahtevke ali pomaga uporabnikom opraviti preproste servisne naloge.',
        },
        {
          title: 'Asistent z uporabo orodij',
          text: 'Asistent kliče odobrene API-je in Business API-je pod upravljanjem.',
        },
        {
          title: 'Asistent, povezan z workflowi',
          text: 'Asistent zažene ali sodeluje v determinističnih workflowih s človeškimi odobritvami, kjer je potrebno.',
        },
        {
          title: 'AgenticAI platforma',
          text: 'Več asistentov in agentov si deli znanje, orodja, politike, opazljivost in upravljanje.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za poslovne AI asistente',
      body: [
        'Varen poslovni AI asistent povezuje uporabnike, znanje, AI modele, orodja in poslovne sisteme prek vodenega platformskega temelja.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Uporabniški kanali',
          text: 'Spletne strani, portali za stranke, portali za zaposlene, mobilne aplikacije, intraneti, orodja servisnega centra in poslovne aplikacije.',
        },
        {
          title: 'Plast izkušnje asistenta',
          text: 'Pogovorni UI, logika asistenta, obravnava konteksta, interakcija uporabnika in vzorci predaje.',
        },
        {
          title: 'Plast platforme KumuluzAI',
          text: 'Runtime agentov, RAG, pridobivanje znanja, pozivi, varovala, usmerjanje modelov, politike, sledljivost in vidnost uporabe.',
        },
        {
          title: 'Plast znanja',
          text: 'Dokumenti, pogosta vprašanja, postopki, politike, baze znanja, priročniki, informacije o izdelkih in interna dokumentacija.',
        },
        {
          title: 'Plast orodij in API-jev',
          text: 'Odobreni API-ji, Business API-ji in servisna orodja, ki jih asistenti lahko kličejo pod upravljanjem.',
        },
        {
          title: 'Plast workflowov in predaje',
          text: 'Predaja človeku, ustvarjanje zahtevkov za podporo, workflowi odobritev in orkestracija procesov, kjer je potrebno.',
        },
        {
          title: 'Poslovni sistemi',
          text: 'CRM, ERP, sistemi za upravljanje zahtevkov, repozitoriji dokumentov, portali, ponudniki identitete in osrednji poslovni sistemi.',
        },
        {
          title: 'Upravljanje in opazljivost',
          text: 'Nadzor dostopa, revizijske sledi, dnevniki, analitika uporabe, sledljivost virov, vidnost stroškov in povratne informacije za izboljšave.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite z Enterprise AI asistenti',
      intro:
        'Kumuluz podpira primere uporabe asistentov v podpori strankam, podpori zaposlenim, dostopu do znanja in digitalnih platformah.',
      items: [
        {
          icon: Headset,
          title: 'Asistent za podporo strankam',
          text: 'Pomagajte strankam najti odgovore in rešiti pogoste težave, preden se obrnejo na podporo.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Podpora pri pogostih vprašanjih',
            'Vprašanja o izdelkih',
            'Vodenje glede storitev',
            'Podpora glede statusa zahtevkov',
            'Triaža podpore',
            'Predaja človeku',
          ],
        },
        {
          icon: Users,
          title: 'Servisni asistent za zaposlene',
          text: 'Pomagajte zaposlenim dostopati do HR, IT, pravnih, skladnostnih in internih servisnih informacij.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Vprašanja o HR politikah',
            'Odpravljanje IT težav',
            'Podpora internim postopkom',
            'Vodenje glede skladnosti',
            'Uvajanje zaposlenih',
            'Razbremenitev servisnega centra',
          ],
        },
        {
          icon: AppWindow,
          title: 'Asistent v portalu',
          text: 'Vodite uporabnike znotraj portala za stranke, partnerje ali zaposlene.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Pomoč pri krmarjenju',
            'Pomoč pri obrazcih',
            'Priporočila storitev',
            'Razlaga procesov',
            'Vodenje glede računa',
            'Kontekstualna podpora',
          ],
        },
        {
          icon: GraduationCap,
          title: 'Mentor za znanje',
          text: 'Naredite velike zbirke dokumentov lažje za iskanje, razumevanje in uporabo.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Razlaga politik',
            'Vprašanja in odgovori o tehnični dokumentaciji',
            'Podpora pri usposabljanju',
            'Gradivo za uvajanje',
            'Vodenje po postopkih',
            'Odgovori z zavedanjem virov',
          ],
        },
        {
          icon: Network,
          title: 'Asistent s poslovnimi orodji',
          text: 'Omogočite asistentom uporabo odobrenih orodij in API-jev za preproste naloge.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Ustvarjanje zahtevka za podporo',
            'Pridobivanje statusa naročila',
            'Preverjanje statusa vloge',
            'Pošiljanje obvestila',
            'Zagon workflowa',
            'Priprava zahteve za odobritev',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Upravljanje na poslovni ravni za AI asistente',
      body: [
        'Poslovni AI asistenti morajo biti varni, vredni zaupanja in obvladljivi.',
        'Kumuluz organizacijam pomaga določiti obseg asistenta, povezati odobreno znanje, uporabiti varovala, nadzorovati dostop do orodij in spremljati vedenje asistenta.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Nadzorovani viri znanja',
          text: 'Asistenti odgovarjajo iz odobrene vsebine namesto iz poljubnih podatkov.',
        },
        {
          title: 'Nadzor dostopa',
          text: 'Identiteta in vloga uporabnika lahko določata, katere informacije ali orodja so na voljo.',
        },
        {
          title: 'Upravljanje pozivov in odgovorov',
          text: 'Vedenje asistenta je mogoče konfigurirati, testirati in sčasoma izboljševati.',
        },
        {
          title: 'Avtorizacija orodij',
          text: 'Asistenti lahko kličejo samo odobrene API-je ali dejanja.',
        },
        {
          title: 'Predaja človeku',
          text: 'Uporabnike je mogoče po potrebi usmeriti k človeški podpori.',
        },
        {
          title: 'Sledljivost',
          text: 'Sledite pogovorom, uporabi virov, klicem orodij in odločitvam, kjer je potrebno.',
        },
        {
          title: 'Zasebnost in ravnanje z občutljivimi podatki',
          text: 'Uporabite politike za osebne podatke, zaupne informacije in občutljiv poslovni kontekst.',
        },
        {
          title: 'Vidnost uporabe in stroškov',
          text: 'Spremljajte vzorce uporabe, porabo modelov in priložnosti za izboljšave.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovano za poslovno uvedbo',
      body: [
        'Rešitve Kumuluz AI asistentov je mogoče uvesti v poslovnih okoljih, kjer so pomembni podatki, identiteta, integracija in operativni nadzor.',
        'Podpirajo lahko interne kanale, kanale za stranke ali kanale za partnerje ter se integrirajo z obstoječimi sistemi in viri znanja.',
      ],
      columns: 3,
      items: [
        {
          title: 'Uvedba za stranke',
          text: 'Uvedite asistente v spletnih straneh, portalih za stranke ali digitalnih servisnih kanalih.',
        },
        {
          title: 'Interna uvedba',
          text: 'Uvedite asistente v portalih za zaposlene, intranetih ali internih poslovnih aplikacijah.',
        },
        {
          title: 'Hibridna integracija',
          text: 'Povežite cloud-native storitve AI asistentov z obstoječimi poslovnimi sistemi in viri podatkov.',
        },
        {
          title: 'Integracija poslovne identitete',
          text: 'Spoštujte uporabniške vloge in dovoljenja prek vzorcev dostopa z zavedanjem identitete.',
        },
        {
          title: 'Integracija virov znanja',
          text: 'Povežite dokumente, baze znanja, intranete, portale in repozitorije.',
        },
        {
          title: 'Operativno spremljanje',
          text: 'Spremljajte uporabo asistenta, napake, neodgovorjena vprašanja, povratne informacije in zmogljivost.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Izdelki Kumuluz, uporabljeni v tej rešitvi',
      body: [
        'Enterprise AI asistenti so zgrajeni iz več izdelkov Kumuluz, od katerih ima vsak svojo vlogo.',
      ],
      items: [
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'Osrednja platforma za AI asistente, agente, pridobivanje znanja, usmerjanje modelov, upravljanje in sledljivost.',
        },
        {
          label: 'Asistent',
          title: 'AI Smart Assistant',
          text: 'Osredotočen pospeševalnik asistenta za pogovorno podporo strankam ali zaposlenim.',
        },
        {
          label: 'Znanje',
          title: 'AI Knowledge Mentor',
          text: 'Pospeševalnik asistenta, osredotočen na znanje, za dokumente, uvajanje, politike, postopke in dostop do internega znanja.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Uporablja se, ko asistenti potrebujejo voden dostop do API-jev, orodij ali poslovnih sistemov.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Uporablja se, ko asistenti potrebujejo ponovno uporabne poslovne zmožnosti, kot so iskanje strank, status naročila, primeri, naloge ali obvestila.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Uporablja se za gradnjo storitev, konektorjev in integracij, potrebnih okoli uvedb asistentov.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo z AI asistenti',
      intro:
        'Poslovni AI asistenti lahko začnejo z osredotočenim primerom uporabe in se sčasoma razvijejo.',
      items: [
        {
          title: 'Izberite primer uporabe asistenta',
          text: 'Izberite konkreten scenarij, kot je podpora strankam, interni helpdesk, iskanje znanja ali vodenje v portalu.',
        },
        {
          title: 'Določite obseg asistenta',
          text: 'Določite, na kaj naj asistent odgovarja, na kaj ne in kdaj naj preda človeku.',
        },
        {
          title: 'Povežite odobreno znanje',
          text: 'Dokumenti, pogosta vprašanja, politike, postopki ali baze znanja so povezani in pripravljeni za pridobivanje.',
        },
        {
          title: 'Konfigurirajte varovala in dostop',
          text: 'Konfigurirane so politike, pravila dostopa, pozivi, rezervno vedenje in varnostne meje.',
        },
        {
          title: 'Integrirajte kanale',
          text: 'Asistent je vgrajen v spletno stran, portal, mobilno aplikacijo, intranet ali poslovno aplikacijo.',
        },
        {
          title: 'Dodajte orodja, kjer je potrebno',
          text: 'Odobrene API-je ali Business API-je je mogoče dodati za preverjanje statusov, ustvarjanje zahtevkov, obvestila ali zagon workflowov.',
        },
        {
          title: 'Spremljajte in izboljšujte',
          text: 'Vprašanja, povratne informacije, neuspeli odgovori, razbremenitev podpore in vzorci uporabe se analizirajo za nenehno izboljševanje.',
        },
        {
          title: 'Skalirajte proti AgenticAI',
          text: 'Dodatni asistenti, viri znanja, orodja, workflowi in agenti se dodajo na platformski temelj.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz za Enterprise AI asistente',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Začnite praktično, skalirajte strateško',
          text: 'Začnite z osredotočenim primerom uporabe asistenta in zrastite proti širši AgenticAI platformi.',
        },
        {
          title: 'Utemeljeno na poslovnem znanju',
          text: 'Uporabite odobrene dokumente, baze znanja in pridobivanje z zavedanjem virov za boljšo zanesljivost odgovorov.',
        },
        {
          title: 'Vodeno in varno',
          text: 'Uporabite nadzor dostopa, varovala, sledljivost in avtorizacijo orodij že od začetka.',
        },
        {
          title: 'Pripravljeno za integracijo',
          text: 'Asistenti se lahko povežejo z API-ji, Business API-ji, workflowi in poslovnimi sistemi, ko je potrebno.',
        },
        {
          title: 'Ponovno uporaben platformski temelj',
          text: 'Izognite se izoliranim projektom klepetalnih robotov z gradnjo asistentov na skupni platformi.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'Sunesis združuje AI, poslovni programski inženiring, integracije, digitalne platforme, API-je in izkušnje dostave DevOps.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Pripravljeni na uvedbo poslovnega AI asistenta?',
      body: [
        'Kumuluz organizacijam pomaga uvajati AI asistente, ki izboljšajo samopostrežbo, zmanjšajo obremenitev podpore in olajšajo uporabo poslovnega znanja.',
        'Začnite z osredotočenim asistentom za stranke ali zaposlene, nato se razvijte proti vodeni AgenticAI platformi.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite KumuluzAI',
    },
  ],
}

export const enterpriseAiAssistantsPage: Record<
  LanguageCode,
  SolutionPageContent
> = {
  en,
  sl,
}
