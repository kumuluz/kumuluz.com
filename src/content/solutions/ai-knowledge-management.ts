import {
  Bot,
  BookMarked,
  FileCode,
  FileSearch,
  GraduationCap,
  Headset,
  Library,
  MessageSquare,
  MessagesSquare,
  Network,
  Plug,
  Scale,
  ScrollText,
  ShieldCheck,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { SolutionPageContent } from '../../views/solutions/types'

const en: SolutionPageContent = {
  seo: {
    title:
      'AI Knowledge Management | Enterprise Knowledge Access with KumuluzAI',
    description:
      'Use KumuluzAI to make enterprise documents, policies, procedures and knowledge bases accessible through governed AI, RAG, source-aware answers and permission-aware retrieval.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'AI Knowledge Management',
    title: 'Make enterprise knowledge accessible through governed AI',
    body: [
      'Enterprise knowledge is often spread across documents, policies, procedures, knowledge bases, intranets, portals, manuals and support systems.',
      'Kumuluz makes this knowledge easier to find, understand and use through governed AI knowledge access, retrieval-augmented generation, source-aware answers and permission-aware retrieval.',
      'With KumuluzAI and AI Knowledge Mentor, you can turn complex knowledge repositories into practical AI-powered knowledge services for employees, customers, support teams and AI agents.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore KumuluzAI',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title: 'Enterprise knowledge is valuable, but often hard to use',
      body: [
        'Organizations already have a lot of knowledge. It exists in documents, manuals, policies, procedures, technical specifications, onboarding materials, product documentation, regulatory content, project archives and support articles.',
        'But users often cannot find what they need. They search across multiple systems, ask colleagues, open support tickets or rely on outdated copies of documents.',
        'This creates inefficiency, repeated questions, inconsistent answers and lost expertise.',
        'AI can help, but only if it is connected to the right sources, governed properly and able to show where answers come from.',
        'Kumuluz AI Knowledge Management helps organizations make knowledge accessible without losing control over source quality, permissions, traceability and governance.',
      ],
      columns: 3,
      items: [
        {
          title: 'Knowledge is scattered',
          text: 'Important information is spread across documents, intranets, portals, knowledge bases, file shares and business systems.',
        },
        {
          title: 'Search is not enough',
          text: 'Keyword search often returns too many results, irrelevant documents or content that users still need to interpret manually.',
        },
        {
          title: 'Answers are inconsistent',
          text: 'Different users may receive different answers depending on who they ask or which document they find.',
        },
        {
          title: 'Knowledge changes over time',
          text: 'Policies, procedures, products and regulations change, but users may still rely on outdated information.',
        },
        {
          title: 'Access control matters',
          text: 'Not every user should access every document, answer or source.',
        },
        {
          title: 'AI without governance is risky',
          text: 'Generic AI assistants may produce unsupported answers or use sources that are not approved.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'A governed AI layer for enterprise knowledge',
      body: [
        'Kumuluz provides an AI Knowledge Management solution that helps organizations connect approved knowledge sources to AI assistants, agents and knowledge services.',
        'The solution uses KumuluzAI and AI Knowledge Mentor to enable retrieval-augmented generation, source-aware answers, permission-aware retrieval and controlled knowledge access.',
        'Instead of relying only on generic model knowledge, users receive answers grounded in organizational content. This helps employees, support teams, customers and AI agents use enterprise knowledge more effectively while maintaining governance and traceability.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Find knowledge faster',
          text: 'Help users ask questions in natural language and receive relevant answers from approved sources.',
        },
        {
          title: 'Ground answers in real sources',
          text: 'Use source-aware retrieval so answers can be traced back to documents, policies or knowledge base entries.',
        },
        {
          title: 'Respect access permissions',
          text: 'Apply role-based and context-aware access patterns where different users have different knowledge access rights.',
        },
        {
          title: 'Turn knowledge into agent context',
          text: 'Make enterprise knowledge usable not only by people, but also by AI agents that support business processes.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'What AI Knowledge Management includes',
      intro:
        'Enterprise AI Knowledge Management combines knowledge ingestion, retrieval, AI-generated answers, access control, traceability, feedback and governance.',
      items: [
        {
          icon: Plug,
          title: 'Knowledge source integration',
          text: 'Connect approved enterprise knowledge sources so AI assistants and agents can retrieve relevant information.',
          bulletsTitle: 'Supported by',
          bullets: [
            'KumuluzAI Platform',
            'AI Knowledge Mentor',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: FileSearch,
          title: 'Retrieval-augmented generation',
          text: 'Use RAG to generate answers based on selected enterprise sources instead of relying only on general model knowledge.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: BookMarked,
          title: 'Source-aware answers',
          text: 'Provide traceability by identifying which sources were used to generate an answer.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: ShieldCheck,
          title: 'Permission-aware retrieval',
          text: 'Respect access rights when retrieving knowledge from documents, repositories or enterprise systems.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'Kumuluz Digital Platform'],
        },
        {
          icon: MessageSquare,
          title: 'Knowledge quality feedback',
          text: 'Capture user feedback, unanswered questions and low-confidence responses to improve the knowledge base.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform'],
        },
        {
          icon: MessagesSquare,
          title: 'Enterprise assistant integration',
          text: 'Expose knowledge access through AI assistants for employees, customers, support teams or portal users.',
          bulletsTitle: 'Supported by',
          bullets: [
            'KumuluzAI Platform',
            'AI Smart Assistant',
            'AI Knowledge Mentor',
          ],
        },
        {
          icon: Network,
          title: 'AgenticAI knowledge context',
          text: 'Use governed enterprise knowledge as context for AI agents that participate in workflows or decision support.',
          bulletsTitle: 'Supported by',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz Business APIs',
            'Kumuluz API',
          ],
        },
        {
          icon: ScrollText,
          title: 'Governance and auditability',
          text: 'Track knowledge usage, answer sources, user interactions, agent sessions and operational quality indicators.',
          bulletsTitle: 'Supported by',
          bullets: ['KumuluzAI Platform', 'Kumuluz API'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Connect the knowledge your organization already has',
      body: [
        'AI Knowledge Management does not require all knowledge to be rewritten from scratch.',
        'Kumuluz can connect to existing knowledge sources and make them usable through AI-powered retrieval and question answering.',
        'The goal is to turn existing content into an accessible, governed and continuously improving knowledge layer.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Documents and manuals',
          text: 'PDFs, Word documents, manuals, guides, handbooks and internal reference materials.',
        },
        {
          title: 'Policies and procedures',
          text: 'Corporate policies, work instructions, SOPs, compliance rules and operational procedures.',
        },
        {
          title: 'Knowledge bases',
          text: 'Support articles, FAQs, service documentation, help center content and internal knowledge repositories.',
        },
        {
          title: 'Technical documentation',
          text: 'Developer documentation, architecture notes, system manuals, API documentation and implementation guides.',
        },
        {
          title: 'Product and service information',
          text: 'Product descriptions, service catalogs, pricing information, configuration rules and support materials.',
        },
        {
          title: 'Onboarding and training materials',
          text: 'Learning content, onboarding guides, process explanations and internal training documentation.',
        },
        {
          title: 'Regulatory and compliance content',
          text: 'Legal requirements, regulatory guidance, internal compliance documentation and audit-related materials.',
        },
        {
          title: 'Structured enterprise data',
          text: 'Where appropriate, knowledge access can be combined with APIs or structured systems for up-to-date factual information.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Answers should be grounded, traceable and permission-aware',
      body: [
        'In enterprise environments, it is not enough for AI to provide a plausible answer. Users need answers they can trust, verify and act on.',
        'Kumuluz AI Knowledge Management can provide source-aware answers, helping users see which documents or knowledge entries were used. Where required, retrieval can also respect user roles and access permissions, so users only receive answers based on content they are allowed to access.',
        'This is especially important in regulated, confidential or document-heavy environments.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Source traceability',
          text: 'Track or display the sources used to generate an answer.',
        },
        {
          title: 'Access boundaries',
          text: 'Restrict retrieval based on user role, department, context or permission model.',
        },
        {
          title: 'Approved source control',
          text: 'Use only selected and validated knowledge repositories for production assistants.',
        },
        {
          title: 'Answer confidence and feedback',
          text: 'Capture feedback and identify areas where content quality or coverage should improve.',
        },
        {
          title: 'Content lifecycle awareness',
          text: 'Support update processes so assistants remain aligned with current documentation.',
        },
        {
          title: 'Audit-ready knowledge use',
          text: 'Record interactions where knowledge access must be traceable for compliance or operational reasons.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI Knowledge Mentor for practical knowledge access',
      body: [
        'AI Knowledge Mentor is a focused Kumuluz solution accelerator for organizations that want to make documents, policies, procedures and internal knowledge easier to access and understand.',
        'It is especially useful for employee onboarding, internal knowledge support, training, policy guidance, technical documentation and document-heavy business processes.',
        'AI Knowledge Mentor can be used as a standalone knowledge assistant or as part of the broader KumuluzAI platform.',
      ],
      columns: 3,
      items: [
        {
          title: 'Employee onboarding',
          text: 'Help new employees understand processes, policies, tools and internal knowledge faster.',
        },
        {
          title: 'Policy and procedure guidance',
          text: 'Make internal procedures and rules easier to search, explain and follow.',
        },
        {
          title: 'Technical documentation support',
          text: 'Help developers, engineers or support teams find answers in complex technical documentation.',
        },
        {
          title: 'Training and learning support',
          text: 'Use AI to help users understand training materials and internal learning content.',
        },
        {
          title: 'Operational knowledge support',
          text: 'Assist employees during daily work by providing quick access to relevant procedures and documents.',
        },
        {
          title: 'Knowledge preservation',
          text: 'Reduce dependency on individual experts by making documented knowledge easier to reuse.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Knowledge is the foundation for useful AI agents',
      body: [
        'AI agents become more useful when they can access reliable enterprise knowledge.',
        'A customer support agent needs product and service documentation. A compliance agent needs policies and regulations. An onboarding agent needs procedures, forms and KYC guidance. A service desk agent needs troubleshooting knowledge.',
        'Kumuluz AI Knowledge Management provides the governed knowledge layer that agents can use when answering questions, preparing context, recommending actions or participating in workflows. This connects knowledge management directly with broader AgenticAI automation.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Context for AI agents',
          text: 'Provide reliable enterprise knowledge for agents that assist users or support processes.',
        },
        {
          title: 'Knowledge-grounded decisions',
          text: 'Help agents base recommendations on approved content rather than generic model assumptions.',
        },
        {
          title: 'Process support',
          text: 'Use knowledge to guide workflows, approvals, classifications and case preparation.',
        },
        {
          title: 'Tool and API combination',
          text: 'Combine knowledge retrieval with Business APIs, API tools and workflow execution.',
        },
        {
          title: 'Human-in-the-loop support',
          text: 'Help users review source-based recommendations before taking sensitive actions.',
        },
        {
          title: 'Continuous learning loop',
          text: 'Use user feedback and unanswered questions to improve knowledge sources and agent behavior.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for AI Knowledge Management',
      body: [
        'AI Knowledge Management connects enterprise content, AI retrieval, assistants, agents and governance into one controlled knowledge access layer.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'User channels',
          text: 'Employee portals, customer portals, intranets, websites, support tools, service desks and business applications.',
        },
        {
          title: 'AI assistant and agent layer',
          text: 'AI assistants, knowledge mentors and agents that answer questions, retrieve context and support tasks.',
        },
        {
          title: 'KumuluzAI platform layer',
          text: 'RAG, knowledge retrieval, prompts, guardrails, model routing, policies, auditability and usage visibility.',
        },
        {
          title: 'Knowledge ingestion layer',
          text: 'Processes for connecting, indexing, structuring, chunking, tagging and updating knowledge sources.',
        },
        {
          title: 'Knowledge source layer',
          text: 'Documents, policies, procedures, manuals, knowledge bases, intranets, repositories and structured sources.',
        },
        {
          title: 'Permission and governance layer',
          text: 'Access control, source approval, retrieval rules, audit trails, feedback and quality monitoring.',
        },
        {
          title: 'Tool and API layer',
          text: 'Optional APIs, Business APIs and workflow integrations that combine knowledge with actions.',
        },
        {
          title: 'Analytics and improvement layer',
          text: 'Usage analytics, failed queries, feedback, knowledge gaps and content improvement insights.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with AI Knowledge Management',
      intro:
        'Kumuluz supports AI knowledge use cases across internal operations, customer support, onboarding, compliance and AgenticAI automation.',
      items: [
        {
          icon: Library,
          title: 'Enterprise knowledge assistant',
          text: 'An assistant that helps employees ask questions and receive answers from internal knowledge sources.',
          bulletsTitle: 'Examples',
          bullets: [
            'Internal knowledge search',
            'Policy questions',
            'Procedure guidance',
            'HR and IT knowledge',
            'Service desk support',
            'Operational support',
          ],
        },
        {
          icon: Headset,
          title: 'Customer knowledge assistant',
          text: 'An assistant that helps customers understand products, services, processes and support information.',
          bulletsTitle: 'Examples',
          bullets: [
            'Product information',
            'Service explanations',
            'FAQ automation',
            'Support guidance',
            'Portal help',
            'Request status explanation',
          ],
        },
        {
          icon: GraduationCap,
          title: 'Onboarding and training mentor',
          text: 'An AI mentor that helps employees, partners or customers understand materials and complete onboarding.',
          bulletsTitle: 'Examples',
          bullets: [
            'Employee onboarding',
            'Partner onboarding',
            'Training content support',
            'Process learning',
            'Internal tool guidance',
            'Role-specific knowledge assistance',
          ],
        },
        {
          icon: Scale,
          title: 'Compliance and policy assistant',
          text: 'An assistant that helps users understand rules, policies, procedures and regulatory content.',
          bulletsTitle: 'Examples',
          bullets: [
            'Compliance guidance',
            'Policy explanation',
            'Procedure interpretation',
            'Audit preparation support',
            'Regulatory document assistance',
            'Risk and control guidance',
          ],
        },
        {
          icon: FileCode,
          title: 'Technical documentation assistant',
          text: 'An assistant for developers, engineers, support teams and technical users.',
          bulletsTitle: 'Examples',
          bullets: [
            'API documentation Q&A',
            'Architecture documentation',
            'Troubleshooting guides',
            'System manuals',
            'Release notes',
            'Developer onboarding',
          ],
        },
        {
          icon: Bot,
          title: 'Knowledge layer for AI agents',
          text: 'A governed knowledge foundation that AI agents can use in workflows and process automation.',
          bulletsTitle: 'Examples',
          bullets: [
            'Claims support context',
            'KYC guidance',
            'Case preparation',
            'Support triage',
            'Document review',
            'Process recommendation',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Governance for enterprise knowledge AI',
      body: [
        'Enterprise AI Knowledge Management must be governed from the beginning.',
        'Kumuluz helps organizations define which sources are approved, who can access which content, how answers are generated, how source traceability works and how the system improves over time.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Approved knowledge sources',
          text: 'Control which documents and repositories are used in production AI assistants.',
        },
        {
          title: 'Role-based access',
          text: 'Restrict content and answers according to identity, role or organizational context.',
        },
        {
          title: 'Source traceability',
          text: 'Track the source material behind answers.',
        },
        {
          title: 'Content update process',
          text: 'Keep AI knowledge aligned with current documents, policies and procedures.',
        },
        {
          title: 'Feedback and improvement',
          text: 'Use user feedback and unanswered questions to improve content and retrieval quality.',
        },
        {
          title: 'Auditability',
          text: 'Track interactions, retrieved sources and assistant behavior where required.',
        },
        {
          title: 'Sensitive data handling',
          text: 'Apply policies for confidential, personal or regulated information.',
        },
        {
          title: 'Fallback and escalation',
          text: 'Route unclear, risky or unresolved questions to human experts.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise environments',
      body: [
        'Kumuluz AI Knowledge Management solutions are designed for organizations that need control over content, access, deployment, security and integrations.',
        'They can be deployed for internal users, customer-facing services, partner environments or broader AgenticAI platforms.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Internal knowledge access',
          text: 'Deploy for employees, support teams, service desks, onboarding and operations.',
        },
        {
          title: 'Customer-facing knowledge',
          text: 'Expose selected knowledge through customer portals, websites or digital services.',
        },
        {
          title: 'Hybrid knowledge sources',
          text: 'Connect documents, repositories, intranets, portals and structured data across different environments.',
        },
        {
          title: 'Enterprise identity integration',
          text: 'Respect user identity and roles when retrieving knowledge.',
        },
        {
          title: 'Secure and governed deployment',
          text: 'Support environments where privacy, compliance and auditability matter.',
        },
        {
          title: 'Operational monitoring',
          text: 'Monitor usage, answer quality, failed queries, source usage and improvement opportunities.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Kumuluz products used in this solution',
      body: [
        'AI Knowledge Management is built from several Kumuluz products that each play a distinct role.',
      ],
      items: [
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'Core platform for knowledge retrieval, AI assistants, agents, governance, model routing and auditability.',
        },
        {
          label: 'Knowledge',
          title: 'AI Knowledge Mentor',
          text: 'Focused accelerator for document-based knowledge access, onboarding, policies, procedures and internal knowledge support.',
        },
        {
          label: 'Assistant',
          title: 'AI Smart Assistant',
          text: 'Assistant accelerator for customer-facing or employee-facing conversational interfaces.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Used when knowledge access must be combined with governed APIs, tools or system integrations.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Used when knowledge answers need to be combined with business capabilities such as customer lookup, case status, onboarding or notifications.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Used to build custom integrations, connectors, knowledge services and digital channels around the knowledge solution.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with AI Knowledge Management',
      intro:
        'AI Knowledge Management can start with a focused knowledge domain and gradually expand across departments, channels and AI agents.',
      items: [
        {
          title: 'Identify the knowledge domain',
          text: 'Select a focused domain such as HR policies, support documentation, technical manuals, onboarding content or compliance procedures.',
        },
        {
          title: 'Select approved sources',
          text: 'Identify which documents, repositories, knowledge bases or portals should be connected first.',
        },
        {
          title: 'Prepare knowledge for retrieval',
          text: 'Content is structured, indexed, chunked, tagged or organized for effective AI retrieval.',
        },
        {
          title: 'Define access and governance rules',
          text: 'Set rules for source approval, user access, traceability, fallback behavior and feedback.',
        },
        {
          title: 'Deploy the knowledge assistant',
          text: 'Expose the assistant through an employee portal, customer portal, intranet, website or internal tool.',
        },
        {
          title: 'Monitor questions and quality',
          text: 'Track usage, failed answers, repeated questions, source gaps and user feedback.',
        },
        {
          title: 'Improve content and retrieval',
          text: 'Refine sources, update documents, improve retrieval quality and fill knowledge gaps.',
        },
        {
          title: 'Extend toward AgenticAI',
          text: 'Connect knowledge access with tools, APIs, workflows and AI agents for broader process support.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz for AI Knowledge Management',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Grounded enterprise answers',
          text: 'Help users get answers based on approved organizational knowledge.',
        },
        {
          title: 'Source-aware and traceable',
          text: 'Support answers that can be traced back to documents, policies or knowledge entries.',
        },
        {
          title: 'Permission-aware knowledge access',
          text: 'Design knowledge retrieval around user roles, access rights and enterprise security needs.',
        },
        {
          title: 'Practical assistant accelerators',
          text: 'Use AI Knowledge Mentor and AI Smart Assistant to start with focused, high-value use cases.',
        },
        {
          title: 'Foundation for AgenticAI',
          text: 'Use governed knowledge as context for agents, workflows and enterprise automation.',
        },
        {
          title: 'Integration-ready',
          text: 'Combine knowledge with APIs, Business APIs, digital services and enterprise systems.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Sunesis combines AI, enterprise software engineering, knowledge systems, integrations, APIs and digital platform delivery expertise.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Ready to make enterprise knowledge easier to use?',
      body: [
        'Kumuluz helps organizations turn documents, policies, procedures and knowledge bases into governed AI-powered knowledge services.',
        'Start with one knowledge domain and evolve toward enterprise-wide AI Knowledge Management and AgenticAI support.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore KumuluzAI',
    },
  ],
}

const sl: SolutionPageContent = {
  seo: {
    title: 'AI upravljanje znanja | Dostop do poslovnega znanja s KumuluzAI',
    description:
      'S KumuluzAI naredite poslovne dokumente, politike, postopke in baze znanja dostopne prek vodenega AI, RAG, odgovorov z zavedanjem virov in pridobivanja z upoštevanjem dovoljenj.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'AI upravljanje znanja',
    title: 'Naredite poslovno znanje dostopno prek vodenega AI',
    body: [
      'Poslovno znanje je pogosto razpršeno po dokumentih, politikah, postopkih, bazah znanja, intranetih, portalih, priročnikih in podpornih sistemih.',
      'Kumuluz to znanje naredi lažje za iskanje, razumevanje in uporabo prek vodenega AI dostopa do znanja, retrieval-augmented generation, odgovorov z zavedanjem virov in pridobivanja z upoštevanjem dovoljenj.',
      'S KumuluzAI in AI Knowledge Mentor lahko zapletene repozitorije znanja spremenite v praktične AI knowledge storitve za zaposlene, stranke, podporne ekipe in AI agente.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite KumuluzAI',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title: 'Poslovno znanje je dragoceno, a pogosto težko uporabno',
      body: [
        'Organizacije že imajo veliko znanja. Obstaja v dokumentih, priročnikih, politikah, postopkih, tehničnih specifikacijah, gradivu za uvajanje, produktni dokumentaciji, regulativni vsebini, projektnih arhivih in podpornih člankih.',
        'A uporabniki pogosto ne najdejo, kar potrebujejo. Iščejo po več sistemih, sprašujejo sodelavce, odpirajo zahtevke za podporo ali se zanašajo na zastarele kopije dokumentov.',
        'To ustvarja neučinkovitost, ponavljajoča vprašanja, neskladne odgovore in izgubo strokovnega znanja.',
        'AI lahko pomaga, a le, če je povezan s pravimi viri, ustrezno voden in sposoben pokazati, od kod prihajajo odgovori.',
        'Kumuluz AI upravljanje znanja organizacijam pomaga narediti znanje dostopno, ne da bi izgubile nadzor nad kakovostjo virov, dovoljenji, sledljivostjo in upravljanjem.',
      ],
      columns: 3,
      items: [
        {
          title: 'Znanje je razpršeno',
          text: 'Pomembne informacije so razpršene po dokumentih, intranetih, portalih, bazah znanja, datotečnih mapah in poslovnih sistemih.',
        },
        {
          title: 'Iskanje ni dovolj',
          text: 'Iskanje po ključnih besedah pogosto vrne preveč rezultatov, nepomembne dokumente ali vsebino, ki jo morajo uporabniki še vedno ročno interpretirati.',
        },
        {
          title: 'Odgovori so neskladni',
          text: 'Različni uporabniki lahko prejmejo različne odgovore glede na to, koga vprašajo ali kateri dokument najdejo.',
        },
        {
          title: 'Znanje se sčasoma spreminja',
          text: 'Politike, postopki, izdelki in predpisi se spreminjajo, a uporabniki se lahko še vedno zanašajo na zastarele informacije.',
        },
        {
          title: 'Nadzor dostopa je pomemben',
          text: 'Ni vsak uporabnik tisti, ki naj dostopa do vsakega dokumenta, odgovora ali vira.',
        },
        {
          title: 'AI brez upravljanja je tvegan',
          text: 'Splošni AI asistenti lahko ustvarijo neutemeljene odgovore ali uporabijo vire, ki niso odobreni.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Vodena AI plast za poslovno znanje',
      body: [
        'Kumuluz ponuja rešitev AI upravljanja znanja, ki organizacijam pomaga povezati odobrene vire znanja z AI asistenti, agenti in knowledge storitvami.',
        'Rešitev uporablja KumuluzAI in AI Knowledge Mentor za retrieval-augmented generation, odgovore z zavedanjem virov, pridobivanje z upoštevanjem dovoljenj in nadzorovan dostop do znanja.',
        'Namesto da bi se zanašali le na splošno znanje modela, uporabniki prejmejo odgovore, utemeljene na organizacijski vsebini. To zaposlenim, podpornim ekipam, strankam in AI agentom pomaga učinkoviteje uporabljati poslovno znanje ob ohranjanju upravljanja in sledljivosti.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Hitreje najdite znanje',
          text: 'Pomagajte uporabnikom postavljati vprašanja v naravnem jeziku in prejemati relevantne odgovore iz odobrenih virov.',
        },
        {
          title: 'Utemeljite odgovore na resničnih virih',
          text: 'Uporabite pridobivanje z zavedanjem virov, da je odgovore mogoče slediti nazaj do dokumentov, politik ali vnosov v bazi znanja.',
        },
        {
          title: 'Spoštujte dovoljenja za dostop',
          text: 'Uporabite vzorce dostopa na podlagi vlog in konteksta, kjer imajo različni uporabniki različne pravice dostopa do znanja.',
        },
        {
          title: 'Spremenite znanje v kontekst za agente',
          text: 'Naredite poslovno znanje uporabno ne le za ljudi, ampak tudi za AI agente, ki podpirajo poslovne procese.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Kaj vključuje AI upravljanje znanja',
      intro:
        'Poslovno AI upravljanje znanja združuje zajem znanja, pridobivanje, AI generirane odgovore, nadzor dostopa, sledljivost, povratne informacije in upravljanje.',
      items: [
        {
          icon: Plug,
          title: 'Integracija virov znanja',
          text: 'Povežite odobrene poslovne vire znanja, da lahko AI asistenti in agenti pridobivajo relevantne informacije.',
          bulletsTitle: 'Podpira',
          bullets: [
            'KumuluzAI Platform',
            'AI Knowledge Mentor',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: FileSearch,
          title: 'Retrieval-augmented generation',
          text: 'Uporabite RAG za generiranje odgovorov na podlagi izbranih poslovnih virov namesto zanašanja le na splošno znanje modela.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: BookMarked,
          title: 'Odgovori z zavedanjem virov',
          text: 'Zagotovite sledljivost z opredelitvijo, kateri viri so bili uporabljeni za generiranje odgovora.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'AI Knowledge Mentor'],
        },
        {
          icon: ShieldCheck,
          title: 'Pridobivanje z upoštevanjem dovoljenj',
          text: 'Spoštujte pravice dostopa pri pridobivanju znanja iz dokumentov, repozitorijev ali poslovnih sistemov.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'Kumuluz Digital Platform'],
        },
        {
          icon: MessageSquare,
          title: 'Povratne informacije o kakovosti znanja',
          text: 'Zajemite povratne informacije uporabnikov, neodgovorjena vprašanja in odgovore z nizko zanesljivostjo za izboljšanje baze znanja.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform'],
        },
        {
          icon: MessagesSquare,
          title: 'Integracija poslovnih asistentov',
          text: 'Izpostavite dostop do znanja prek AI asistentov za zaposlene, stranke, podporne ekipe ali uporabnike portala.',
          bulletsTitle: 'Podpira',
          bullets: [
            'KumuluzAI Platform',
            'AI Smart Assistant',
            'AI Knowledge Mentor',
          ],
        },
        {
          icon: Network,
          title: 'AgenticAI kontekst znanja',
          text: 'Uporabite vodeno poslovno znanje kot kontekst za AI agente, ki sodelujejo v workflowih ali podpori odločanju.',
          bulletsTitle: 'Podpira',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz Business APIs',
            'Kumuluz API',
          ],
        },
        {
          icon: ScrollText,
          title: 'Upravljanje in sledljivost',
          text: 'Sledite uporabi znanja, virom odgovorov, interakcijam uporabnikov, sejam agentov in kazalnikom operativne kakovosti.',
          bulletsTitle: 'Podpira',
          bullets: ['KumuluzAI Platform', 'Kumuluz API'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Povežite znanje, ki ga vaša organizacija že ima',
      body: [
        'AI upravljanje znanja ne zahteva, da se vse znanje napiše znova od začetka.',
        'Kumuluz se lahko poveže z obstoječimi viri znanja in jih naredi uporabne prek AI pridobivanja in odgovarjanja na vprašanja.',
        'Cilj je obstoječo vsebino spremeniti v dostopno, vodeno in nenehno izboljšujočo se plast znanja.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Dokumenti in priročniki',
          text: 'PDF-ji, Word dokumenti, priročniki, vodiči, priročniki in interna referenčna gradiva.',
        },
        {
          title: 'Politike in postopki',
          text: 'Korporativne politike, delovna navodila, SOP-ji, pravila skladnosti in operativni postopki.',
        },
        {
          title: 'Baze znanja',
          text: 'Podporni članki, pogosta vprašanja, servisna dokumentacija, vsebina centra za pomoč in interni repozitoriji znanja.',
        },
        {
          title: 'Tehnična dokumentacija',
          text: 'Razvijalska dokumentacija, arhitekturne opombe, sistemski priročniki, API dokumentacija in vodiči za implementacijo.',
        },
        {
          title: 'Informacije o izdelkih in storitvah',
          text: 'Opisi izdelkov, katalogi storitev, informacije o cenah, pravila konfiguracije in podporna gradiva.',
        },
        {
          title: 'Gradivo za uvajanje in usposabljanje',
          text: 'Učna vsebina, vodiči za uvajanje, razlage procesov in interna dokumentacija usposabljanja.',
        },
        {
          title: 'Regulativna in skladnostna vsebina',
          text: 'Pravne zahteve, regulativne smernice, interna dokumentacija skladnosti in gradiva, povezana z revizijami.',
        },
        {
          title: 'Strukturirani poslovni podatki',
          text: 'Kjer je primerno, je dostop do znanja mogoče kombinirati z API-ji ali strukturiranimi sistemi za ažurne dejanske informacije.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Odgovori naj bodo utemeljeni, sledljivi in z upoštevanjem dovoljenj',
      body: [
        'V poslovnih okoljih ni dovolj, da AI poda verjeten odgovor. Uporabniki potrebujejo odgovore, ki jim lahko zaupajo, jih preverijo in po njih ukrepajo.',
        'Kumuluz AI upravljanje znanja lahko zagotovi odgovore z zavedanjem virov in uporabnikom pomaga videti, kateri dokumenti ali vnosi znanja so bili uporabljeni. Kjer je potrebno, lahko pridobivanje upošteva tudi uporabniške vloge in dovoljenja za dostop, tako da uporabniki prejmejo le odgovore na podlagi vsebine, do katere imajo dostop.',
        'To je še posebej pomembno v reguliranih, zaupnih ali z dokumenti obremenjenih okoljih.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Sledljivost virov',
          text: 'Sledite ali prikažite vire, uporabljene za generiranje odgovora.',
        },
        {
          title: 'Meje dostopa',
          text: 'Omejite pridobivanje na podlagi uporabniške vloge, oddelka, konteksta ali modela dovoljenj.',
        },
        {
          title: 'Nadzor odobrenih virov',
          text: 'Za produkcijske asistente uporabite le izbrane in validirane repozitorije znanja.',
        },
        {
          title: 'Zanesljivost odgovorov in povratne informacije',
          text: 'Zajemite povratne informacije in opredelite področja, kjer bi se morala kakovost ali pokritost vsebine izboljšati.',
        },
        {
          title: 'Zavedanje življenjskega cikla vsebine',
          text: 'Podprite procese posodabljanja, da asistenti ostanejo usklajeni s trenutno dokumentacijo.',
        },
        {
          title: 'Revizijsko pripravljena uporaba znanja',
          text: 'Zabeležite interakcije, kjer mora biti dostop do znanja sledljiv iz razlogov skladnosti ali operativnih razlogov.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI Knowledge Mentor za praktičen dostop do znanja',
      body: [
        'AI Knowledge Mentor je osredotočen pospeševalnik rešitev Kumuluz za organizacije, ki želijo dokumente, politike, postopke in interno znanje narediti lažje dostopne in razumljive.',
        'Še posebej je uporaben za uvajanje zaposlenih, podporo internemu znanju, usposabljanje, vodenje glede politik, tehnično dokumentacijo in z dokumenti obremenjene poslovne procese.',
        'AI Knowledge Mentor je mogoče uporabljati kot samostojnega knowledge asistenta ali kot del širše platforme KumuluzAI.',
      ],
      columns: 3,
      items: [
        {
          title: 'Uvajanje zaposlenih',
          text: 'Pomagajte novim zaposlenim hitreje razumeti procese, politike, orodja in interno znanje.',
        },
        {
          title: 'Vodenje glede politik in postopkov',
          text: 'Naredite interne postopke in pravila lažja za iskanje, razlago in upoštevanje.',
        },
        {
          title: 'Podpora tehnični dokumentaciji',
          text: 'Pomagajte razvijalcem, inženirjem ali podpornim ekipam najti odgovore v zapleteni tehnični dokumentaciji.',
        },
        {
          title: 'Podpora usposabljanju in učenju',
          text: 'Uporabite AI, da uporabnikom pomagate razumeti gradiva za usposabljanje in interno učno vsebino.',
        },
        {
          title: 'Podpora operativnemu znanju',
          text: 'Pomagajte zaposlenim med vsakodnevnim delom s hitrim dostopom do relevantnih postopkov in dokumentov.',
        },
        {
          title: 'Ohranjanje znanja',
          text: 'Zmanjšajte odvisnost od posameznih strokovnjakov tako, da je dokumentirano znanje lažje za ponovno uporabo.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Znanje je temelj za uporabne AI agente',
      body: [
        'AI agenti postanejo uporabnejši, ko lahko dostopajo do zanesljivega poslovnega znanja.',
        'Agent za podporo strankam potrebuje dokumentacijo o izdelkih in storitvah. Agent za skladnost potrebuje politike in predpise. Agent za uvajanje potrebuje postopke, obrazce in KYC vodenje. Agent servisnega centra potrebuje znanje za odpravljanje težav.',
        'Kumuluz AI upravljanje znanja zagotavlja vodeno plast znanja, ki jo lahko agenti uporabijo pri odgovarjanju na vprašanja, pripravi konteksta, priporočanju dejanj ali sodelovanju v workflowih. To upravljanje znanja neposredno povezuje s širšo AgenticAI avtomatizacijo.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Kontekst za AI agente',
          text: 'Zagotovite zanesljivo poslovno znanje za agente, ki pomagajo uporabnikom ali podpirajo procese.',
        },
        {
          title: 'Odločitve, utemeljene na znanju',
          text: 'Pomagajte agentom utemeljiti priporočila na odobreni vsebini namesto na splošnih predpostavkah modela.',
        },
        {
          title: 'Podpora procesom',
          text: 'Uporabite znanje za vodenje workflowov, odobritev, klasifikacij in priprave primerov.',
        },
        {
          title: 'Kombinacija orodij in API-jev',
          text: 'Kombinirajte pridobivanje znanja z Business API-ji, API orodji in izvajanjem workflowov.',
        },
        {
          title: 'Podpora human-in-the-loop',
          text: 'Pomagajte uporabnikom pregledati priporočila na podlagi virov, preden izvedejo občutljiva dejanja.',
        },
        {
          title: 'Zanka nenehnega učenja',
          text: 'Uporabite povratne informacije uporabnikov in neodgovorjena vprašanja za izboljšanje virov znanja in vedenja agentov.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za AI upravljanje znanja',
      body: [
        'AI upravljanje znanja povezuje poslovno vsebino, AI pridobivanje, asistente, agente in upravljanje v eno nadzorovano plast dostopa do znanja.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Uporabniški kanali',
          text: 'Portali za zaposlene, portali za stranke, intraneti, spletne strani, podporna orodja, servisni centri in poslovne aplikacije.',
        },
        {
          title: 'Plast AI asistentov in agentov',
          text: 'AI asistenti, knowledge mentorji in agenti, ki odgovarjajo na vprašanja, pridobivajo kontekst in podpirajo naloge.',
        },
        {
          title: 'Plast platforme KumuluzAI',
          text: 'RAG, pridobivanje znanja, pozivi, varovala, usmerjanje modelov, politike, sledljivost in vidnost uporabe.',
        },
        {
          title: 'Plast zajema znanja',
          text: 'Procesi za povezovanje, indeksiranje, strukturiranje, razčlenjevanje, označevanje in posodabljanje virov znanja.',
        },
        {
          title: 'Plast virov znanja',
          text: 'Dokumenti, politike, postopki, priročniki, baze znanja, intraneti, repozitoriji in strukturirani viri.',
        },
        {
          title: 'Plast dovoljenj in upravljanja',
          text: 'Nadzor dostopa, odobritev virov, pravila pridobivanja, revizijske sledi, povratne informacije in spremljanje kakovosti.',
        },
        {
          title: 'Plast orodij in API-jev',
          text: 'Izbirni API-ji, Business API-ji in integracije workflowov, ki znanje kombinirajo z dejanji.',
        },
        {
          title: 'Plast analitike in izboljšav',
          text: 'Analitika uporabe, neuspele poizvedbe, povratne informacije, vrzeli v znanju in vpogledi za izboljšanje vsebine.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite z AI upravljanjem znanja',
      intro:
        'Kumuluz podpira primere uporabe AI znanja v internih operacijah, podpori strankam, uvajanju, skladnosti in AgenticAI avtomatizaciji.',
      items: [
        {
          icon: Library,
          title: 'Poslovni asistent za znanje',
          text: 'Asistent, ki zaposlenim pomaga postavljati vprašanja in prejemati odgovore iz internih virov znanja.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Iskanje po internem znanju',
            'Vprašanja o politikah',
            'Vodenje po postopkih',
            'HR in IT znanje',
            'Podpora servisnega centra',
            'Operativna podpora',
          ],
        },
        {
          icon: Headset,
          title: 'Asistent za znanje strank',
          text: 'Asistent, ki strankam pomaga razumeti izdelke, storitve, procese in podporne informacije.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Informacije o izdelkih',
            'Razlage storitev',
            'Avtomatizacija pogostih vprašanj',
            'Vodenje glede podpore',
            'Pomoč v portalu',
            'Razlaga statusa zahtevka',
          ],
        },
        {
          icon: GraduationCap,
          title: 'Mentor za uvajanje in usposabljanje',
          text: 'AI mentor, ki zaposlenim, partnerjem ali strankam pomaga razumeti gradiva in dokončati uvajanje.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Uvajanje zaposlenih',
            'Uvajanje partnerjev',
            'Podpora vsebini usposabljanja',
            'Učenje procesov',
            'Vodenje po internih orodjih',
            'Pomoč pri znanju, specifičnem za vlogo',
          ],
        },
        {
          icon: Scale,
          title: 'Asistent za skladnost in politike',
          text: 'Asistent, ki uporabnikom pomaga razumeti pravila, politike, postopke in regulativno vsebino.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Vodenje glede skladnosti',
            'Razlaga politik',
            'Interpretacija postopkov',
            'Podpora pripravi na revizijo',
            'Pomoč pri regulativnih dokumentih',
            'Vodenje glede tveganj in kontrol',
          ],
        },
        {
          icon: FileCode,
          title: 'Asistent za tehnično dokumentacijo',
          text: 'Asistent za razvijalce, inženirje, podporne ekipe in tehnične uporabnike.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Vprašanja in odgovori o API dokumentaciji',
            'Arhitekturna dokumentacija',
            'Vodiči za odpravljanje težav',
            'Sistemski priročniki',
            'Opombe ob izdaji',
            'Uvajanje razvijalcev',
          ],
        },
        {
          icon: Bot,
          title: 'Plast znanja za AI agente',
          text: 'Voden temelj znanja, ki ga AI agenti lahko uporabijo v workflowih in avtomatizaciji procesov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Kontekst za podporo zahtevkom',
            'KYC vodenje',
            'Priprava primerov',
            'Triaža podpore',
            'Pregled dokumentov',
            'Priporočanje procesov',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Upravljanje za poslovni AI za znanje',
      body: [
        'Poslovno AI upravljanje znanja mora biti vodeno že od začetka.',
        'Kumuluz organizacijam pomaga določiti, kateri viri so odobreni, kdo lahko dostopa do katere vsebine, kako se generirajo odgovori, kako deluje sledljivost virov in kako se sistem sčasoma izboljšuje.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Odobreni viri znanja',
          text: 'Nadzorujte, kateri dokumenti in repozitoriji se uporabljajo v produkcijskih AI asistentih.',
        },
        {
          title: 'Dostop na podlagi vlog',
          text: 'Omejite vsebino in odgovore glede na identiteto, vlogo ali organizacijski kontekst.',
        },
        {
          title: 'Sledljivost virov',
          text: 'Sledite izvornemu gradivu za odgovore.',
        },
        {
          title: 'Proces posodabljanja vsebine',
          text: 'Ohranjajte AI znanje usklajeno s trenutnimi dokumenti, politikami in postopki.',
        },
        {
          title: 'Povratne informacije in izboljšave',
          text: 'Uporabite povratne informacije uporabnikov in neodgovorjena vprašanja za izboljšanje kakovosti vsebine in pridobivanja.',
        },
        {
          title: 'Sledljivost',
          text: 'Sledite interakcijam, pridobljenim virom in vedenju asistenta, kjer je potrebno.',
        },
        {
          title: 'Ravnanje z občutljivimi podatki',
          text: 'Uporabite politike za zaupne, osebne ali regulirane informacije.',
        },
        {
          title: 'Rezervno vedenje in eskalacija',
          text: 'Usmerite nejasna, tvegana ali nerešena vprašanja k človeškim strokovnjakom.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovano za poslovna okolja',
      body: [
        'Rešitve Kumuluz AI upravljanja znanja so zasnovane za organizacije, ki potrebujejo nadzor nad vsebino, dostopom, uvedbo, varnostjo in integracijami.',
        'Uvesti jih je mogoče za interne uporabnike, storitve za stranke, partnerska okolja ali širše AgenticAI platforme.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Interni dostop do znanja',
          text: 'Uvedite za zaposlene, podporne ekipe, servisne centre, uvajanje in operacije.',
        },
        {
          title: 'Znanje za stranke',
          text: 'Izpostavite izbrano znanje prek portalov za stranke, spletnih strani ali digitalnih storitev.',
        },
        {
          title: 'Hibridni viri znanja',
          text: 'Povežite dokumente, repozitorije, intranete, portale in strukturirane podatke v različnih okoljih.',
        },
        {
          title: 'Integracija poslovne identitete',
          text: 'Spoštujte identiteto in vloge uporabnikov pri pridobivanju znanja.',
        },
        {
          title: 'Varna in vodena uvedba',
          text: 'Podprite okolja, kjer so pomembni zasebnost, skladnost in sledljivost.',
        },
        {
          title: 'Operativno spremljanje',
          text: 'Spremljajte uporabo, kakovost odgovorov, neuspele poizvedbe, uporabo virov in priložnosti za izboljšave.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Izdelki Kumuluz, uporabljeni v tej rešitvi',
      body: [
        'AI upravljanje znanja je zgrajeno iz več izdelkov Kumuluz, od katerih ima vsak svojo vlogo.',
      ],
      items: [
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'Osrednja platforma za pridobivanje znanja, AI asistente, agente, upravljanje, usmerjanje modelov in sledljivost.',
        },
        {
          label: 'Znanje',
          title: 'AI Knowledge Mentor',
          text: 'Osredotočen pospeševalnik za dostop do znanja na podlagi dokumentov, uvajanje, politike, postopke in podporo internemu znanju.',
        },
        {
          label: 'Asistent',
          title: 'AI Smart Assistant',
          text: 'Pospeševalnik asistenta za pogovorne vmesnike za stranke ali zaposlene.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Uporablja se, ko je treba dostop do znanja kombinirati z vodenimi API-ji, orodji ali sistemskimi integracijami.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Uporablja se, ko je treba odgovore znanja kombinirati s poslovnimi zmožnostmi, kot so iskanje strank, status primera, uvajanje ali obvestila.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Uporablja se za gradnjo prilagojenih integracij, konektorjev, knowledge storitev in digitalnih kanalov okoli rešitve znanja.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo z AI upravljanjem znanja',
      intro:
        'AI upravljanje znanja lahko začne z osredotočenim področjem znanja in se postopoma razširi po oddelkih, kanalih in AI agentih.',
      items: [
        {
          title: 'Opredelite področje znanja',
          text: 'Izberite osredotočeno področje, kot so HR politike, podporna dokumentacija, tehnični priročniki, vsebina za uvajanje ali postopki skladnosti.',
        },
        {
          title: 'Izberite odobrene vire',
          text: 'Opredelite, kateri dokumenti, repozitoriji, baze znanja ali portali naj bodo povezani najprej.',
        },
        {
          title: 'Pripravite znanje za pridobivanje',
          text: 'Vsebina je strukturirana, indeksirana, razčlenjena, označena ali organizirana za učinkovito AI pridobivanje.',
        },
        {
          title: 'Določite pravila dostopa in upravljanja',
          text: 'Določite pravila za odobritev virov, dostop uporabnikov, sledljivost, rezervno vedenje in povratne informacije.',
        },
        {
          title: 'Uvedite knowledge asistenta',
          text: 'Izpostavite asistenta prek portala za zaposlene, portala za stranke, intraneta, spletne strani ali internega orodja.',
        },
        {
          title: 'Spremljajte vprašanja in kakovost',
          text: 'Sledite uporabi, neuspelim odgovorom, ponavljajočim vprašanjem, vrzelim v virih in povratnim informacijam uporabnikov.',
        },
        {
          title: 'Izboljšajte vsebino in pridobivanje',
          text: 'Izpopolnite vire, posodobite dokumente, izboljšajte kakovost pridobivanja in zapolnite vrzeli v znanju.',
        },
        {
          title: 'Razširite proti AgenticAI',
          text: 'Povežite dostop do znanja z orodji, API-ji, workflowi in AI agenti za širšo podporo procesom.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz za AI upravljanje znanja',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Utemeljeni poslovni odgovori',
          text: 'Pomagajte uporabnikom dobiti odgovore na podlagi odobrenega organizacijskega znanja.',
        },
        {
          title: 'Z zavedanjem virov in sledljivo',
          text: 'Podprite odgovore, ki jih je mogoče slediti nazaj do dokumentov, politik ali vnosov znanja.',
        },
        {
          title: 'Dostop do znanja z upoštevanjem dovoljenj',
          text: 'Zasnujte pridobivanje znanja okoli uporabniških vlog, pravic dostopa in poslovnih varnostnih potreb.',
        },
        {
          title: 'Praktični pospeševalniki asistentov',
          text: 'Uporabite AI Knowledge Mentor in AI Smart Assistant za začetek z osredotočenimi primeri uporabe z visoko vrednostjo.',
        },
        {
          title: 'Temelj za AgenticAI',
          text: 'Uporabite vodeno znanje kot kontekst za agente, workflowe in poslovno avtomatizacijo.',
        },
        {
          title: 'Pripravljeno za integracijo',
          text: 'Kombinirajte znanje z API-ji, Business API-ji, digitalnimi storitvami in poslovnimi sistemi.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'Sunesis združuje AI, poslovni programski inženiring, sisteme znanja, integracije, API-je in izkušnje dostave digitalnih platform.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Pripravljeni narediti poslovno znanje lažje uporabno?',
      body: [
        'Kumuluz organizacijam pomaga spremeniti dokumente, politike, postopke in baze znanja v vodene AI knowledge storitve.',
        'Začnite z enim področjem znanja in se razvijte proti AI upravljanju znanja po vsej organizaciji ter podpori AgenticAI.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite KumuluzAI',
    },
  ],
}

export const aiKnowledgeManagementPage: Record<
  LanguageCode,
  SolutionPageContent
> = {
  en,
  sl,
}
