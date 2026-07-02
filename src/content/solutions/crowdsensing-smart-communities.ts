import {
  Bell,
  Bot,
  Brain,
  Building2,
  ClipboardList,
  Cpu,
  Database,
  Filter,
  LayoutDashboard,
  LineChart,
  Megaphone,
  Plug,
  Radio,
  ShieldCheck,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { SolutionPageContent } from '../../views/solutions/types'

const en: SolutionPageContent = {
  seo: {
    title:
      'Crowdsensing & Smart Communities | AI-enhanced Distributed Data with Kumuluz',
    description:
      'Build smart community services with AI-enhanced crowdsensing, distributed data collection, IoT-enabled sensing, privacy-aware analytics and AI-ready data services with Kumuluz.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Crowdsensing & Smart Communities',
    title: 'Use distributed data and AI analytics to build smarter services',
    body: [
      'Smart communities, cities and organizations need real-world data to understand needs, behavior, infrastructure, mobility, environment and service usage.',
      'Kumuluz helps organizations collect, process and use distributed data from people, apps, devices, sensors and environments to support smart services and data-driven decisions.',
      'With Kumuluz Crowdsensing, you can combine crowdsensing, IoT-enabled data collection, privacy-aware processing, analytics and AI algorithms to turn distributed signals into insights, recommendations and actions.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Kumuluz Crowdsensing',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title: 'Smart services need real-world data',
      body: [
        'Many organizations want to improve services, optimize operations, understand users, engage communities or make better decisions.',
        'But real-world data is often fragmented. It comes from citizens, customers, employees, mobile apps, IoT devices, sensors, smart infrastructure, field teams, enterprise systems and external datasets.',
        'Without a structured platform, this data is difficult to collect, validate, anonymize, analyze and use.',
        'AI can create additional value, but only if the data is reliable, contextual, responsibly processed and available in the right form. Kumuluz helps organizations build smart community and crowdsensing solutions that transform distributed data into insight and action.',
      ],
      columns: 3,
      items: [
        {
          title: 'Data is fragmented',
          text: 'Useful real-world signals are spread across people, devices, sensors, mobile apps and enterprise systems.',
        },
        {
          title: 'Limited situational awareness',
          text: 'Organizations often lack timely insight into what is happening across communities, infrastructure or service environments.',
        },
        {
          title: 'Raw data is hard to use',
          text: 'Crowdsensed and sensor data needs validation, cleaning, aggregation, anonymization and interpretation.',
        },
        {
          title: 'Manual analysis does not scale',
          text: 'As data volume grows, manual analysis becomes too slow and inconsistent.',
        },
        {
          title: 'Privacy and trust matter',
          text: 'Crowdsensing must be designed around consent, anonymization, security and responsible data use.',
        },
        {
          title: 'Insights do not trigger action',
          text: 'Data is only valuable when it supports recommendations, alerts, workflows, service improvements or decisions.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI-enhanced crowdsensing for smart services',
      body: [
        'Kumuluz provides a solution approach for collecting and using distributed real-world data.',
        'At the center is Kumuluz Crowdsensing, which enables data collection from people, devices, sensors, mobile applications and environments. The platform can process, validate, anonymize, aggregate, analyze and visualize data. AI algorithms can support anomaly detection, pattern recognition, prediction, segmentation, recommendation and data quality improvement.',
        'Together with Kumuluz API, KumuluzAI and Kumuluz Digital Platform, crowdsensing insights can be exposed through APIs, used by AI agents, connected to workflows or integrated into smart services.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Collect real-world signals',
          text: 'Gather data from people, mobile apps, sensors, devices, systems and connected environments.',
        },
        {
          title: 'Use AI to understand patterns',
          text: 'Apply AI algorithms to detect anomalies, predict trends, segment data and generate recommendations.',
        },
        {
          title: 'Respect privacy and trust',
          text: 'Use privacy-aware data collection, anonymization, aggregation and responsible processing patterns.',
        },
        {
          title: 'Turn insight into action',
          text: 'Connect insights to alerts, dashboards, workflows, APIs, AI agents and smart services.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'What Crowdsensing & Smart Communities includes',
      intro:
        'A smart crowdsensing solution combines data collection, privacy-aware processing, AI analytics, visualization, APIs and action mechanisms.',
      items: [
        {
          icon: Radio,
          title: 'Distributed data collection',
          text: 'Collect data from people, mobile devices, IoT devices, sensors, smart infrastructure and external systems.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Crowdsensing'],
        },
        {
          icon: ShieldCheck,
          title: 'Privacy-aware processing',
          text: 'Apply anonymization, aggregation, consent-aware patterns and secure data handling.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Crowdsensing', 'Kumuluz Digital Platform'],
        },
        {
          icon: Filter,
          title: 'Data validation and quality improvement',
          text: 'Clean, validate, deduplicate, enrich and score crowdsensed data.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Crowdsensing'],
        },
        {
          icon: Brain,
          title: 'AI-enhanced analytics',
          text: 'Use AI algorithms for anomaly detection, pattern recognition, prediction, segmentation and recommendation.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Crowdsensing', 'KumuluzAI Platform'],
        },
        {
          icon: LayoutDashboard,
          title: 'Dashboards and visualization',
          text: 'Present insights through dashboards, maps, reports, trends, alerts and operational views.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Crowdsensing', 'Kumuluz Digital Platform'],
        },
        {
          icon: Plug,
          title: 'APIs and integrations',
          text: 'Expose data, insights and events through APIs for smart services, analytics platforms and enterprise systems.',
          bulletsTitle: 'Supported by',
          bullets: ['Kumuluz Crowdsensing', 'Kumuluz API'],
        },
        {
          icon: Bot,
          title: 'AI agent context',
          text: 'Provide real-world context that AI agents can use for assistance, recommendations or operational decision support.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz Crowdsensing',
            'KumuluzAI Platform',
            'Kumuluz API',
          ],
        },
        {
          icon: Bell,
          title: 'Alerts, recommendations and workflows',
          text: 'Use detected events and AI-generated insights to trigger actions, notifications, workflows or service tasks.',
          bulletsTitle: 'Supported by',
          bullets: [
            'Kumuluz Crowdsensing',
            'Kumuluz Digital Platform',
            'Kumuluz Business APIs',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI algorithms that turn signals into insight',
      body: [
        'Crowdsensing creates value when distributed data becomes meaningful.',
        'Kumuluz Crowdsensing can use AI algorithms and analytics techniques to process large volumes of distributed data, identify relevant patterns and support better decision-making.',
        'This allows organizations to move from passive data collection toward intelligent services that adapt to real-world conditions.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Anomaly detection',
          text: 'Identify unusual behavior, unexpected events or outliers in collected data.',
        },
        {
          title: 'Pattern recognition',
          text: 'Detect recurring behaviors, movement patterns, service usage patterns, infrastructure signals or environmental trends.',
        },
        {
          title: 'Prediction and forecasting',
          text: 'Use historical and real-time data to forecast demand, conditions, incidents, service usage or events.',
        },
        {
          title: 'Segmentation',
          text: 'Group users, locations, devices, events or behaviors into meaningful segments for analysis and personalization.',
        },
        {
          title: 'Recommendation support',
          text: 'Generate recommendations for users, operators, planners or service teams.',
        },
        {
          title: 'Data quality improvement',
          text: 'Detect noise, duplicates, incomplete data and reliability issues.',
        },
        {
          title: 'Context generation for AI agents',
          text: 'Turn distributed real-world data into structured context for AI assistants and agents.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Smart communities powered by real-world data',
      body: [
        'Smart community services need continuous feedback from the real world.',
        'Kumuluz Crowdsensing can help collect and analyze data from residents, users, devices, infrastructure and environments, making it possible to better understand needs, detect issues and improve services.',
        'This is relevant for public sector, municipalities, utilities, mobility providers, smart city initiatives and organizations that operate distributed services.',
      ],
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Citizen and user engagement',
          text: 'Collect feedback, observations and service input from residents, customers or users.',
          meta: 'feedback, observations, service input',
        },
        {
          title: 'Infrastructure awareness',
          text: 'Use distributed data to understand infrastructure status, incidents or service quality.',
          meta: 'status, incidents, service quality',
        },
        {
          title: 'Mobility insights',
          text: 'Analyze mobility patterns, location-based behavior and transport-related observations.',
          meta: 'mobility, location, transport',
        },
        {
          title: 'Environmental sensing',
          text: 'Collect environmental signals from sensors, devices or user observations.',
          meta: 'sensors, environment, observations',
        },
        {
          title: 'Contextual communication',
          text: 'Send targeted notifications, alerts or recommendations based on location, context or detected events.',
          meta: 'notifications, alerts, location-based',
        },
        {
          title: 'Data-driven planning',
          text: 'Use crowdsensed insights to support service design, planning, operations and investment decisions.',
          meta: 'planning, operations, investment',
        },
      ],
    },
    {
      type: 'cards',
      title: 'From crowdsensing to AI-ready data services',
      body: [
        'Crowdsensing is not only useful for dashboards and reports. It can also create data foundations for AI models, AI agents, analytics services and data spaces.',
        'Kumuluz Crowdsensing can help prepare distributed data for AI use by applying validation, aggregation, anonymization, enrichment and structured exposure through APIs.',
        'This makes the platform relevant for organizations that want to create AI-ready data services and participate in broader data ecosystems.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'AI-ready datasets',
          text: 'Prepare crowdsensed and sensor data for analytics, AI models and decision-support systems.',
        },
        {
          title: 'Data space integration',
          text: 'Expose processed and governed data into broader data ecosystems or domain-specific data spaces.',
        },
        {
          title: 'Insight APIs',
          text: 'Make analytics results, trends, events and recommendations available through APIs.',
        },
        {
          title: 'Agent context services',
          text: 'Provide real-world context to AI agents for more relevant assistance and decision support.',
        },
        {
          title: 'Sustainable analytics',
          text: 'Support scenarios where data processing efficiency and responsible AI use matter.',
        },
        {
          title: 'Cross-domain data reuse',
          text: 'Use distributed data across smart mobility, energy, agriculture, public services, finance or enterprise operations.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Green.Dat.AI',
      title: 'Used in the Green.Dat.AI Horizon Europe context',
      body: [
        'Kumuluz Crowdsensing has been used in the context of Green.Dat.AI, a Horizon Europe project focused on energy-efficient AI-ready data spaces.',
        'Green.Dat.AI is focused on using AI and large-scale data analytics to support European Green Deal goals, while reducing the environmental impact of data management processes. The project demonstrates AI-ready data services across domains such as smart energy, smart agriculture and agri-food, smart mobility and smart banking.',
        'This makes Kumuluz Crowdsensing especially relevant for scenarios where distributed data collection, AI-ready data preparation, sustainable analytics and data-driven decision-making need to work together.',
      ],
      columns: 2,
      variant: 'feature',
      items: [
        {
          label: 'Horizon Europe',
          title: 'AI-ready data spaces',
          text: 'Support data collection and preparation patterns that can feed AI-ready data ecosystems.',
        },
        {
          label: 'Sustainability',
          title: 'Energy-efficient analytics',
          text: 'Relevant for scenarios where AI and data processing must consider efficiency and sustainability.',
        },
        {
          label: 'Pilots',
          title: 'Cross-industry pilots',
          text: 'Applicable across smart energy, agriculture, mobility, banking and other data-driven sectors.',
        },
        {
          label: 'Foundation',
          title: 'Real-world data foundation',
          text: 'Collect distributed real-world signals that can support advanced analytics and AI services.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for crowdsensing and smart communities',
      body: [
        'A crowdsensing and smart community architecture connects data sources, privacy-aware processing, AI analytics, APIs, dashboards, agents and service workflows.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Data sources',
          text: 'People, mobile apps, IoT devices, sensors, smart infrastructure, field teams, enterprise systems and external datasets.',
        },
        {
          title: 'Data collection layer',
          text: 'Mechanisms for capturing observations, events, device signals, geolocation, user feedback and sensor data.',
        },
        {
          title: 'Processing and privacy layer',
          text: 'Validation, cleaning, aggregation, anonymization, consent-aware processing and secure data handling.',
        },
        {
          title: 'AI and analytics layer',
          text: 'Anomaly detection, prediction, segmentation, recommendation, trend analysis and data quality scoring.',
        },
        {
          title: 'Visualization layer',
          text: 'Dashboards, maps, reports, operational views, alerts and decision-support interfaces.',
        },
        {
          title: 'API and integration layer',
          text: 'APIs and connectors for exposing data, insights and events to platforms, services, workflows and AI agents.',
        },
        {
          title: 'Smart service layer',
          text: 'Applications, notifications, workflows, recommendations, service tasks and smart community services.',
        },
        {
          title: 'AI agent layer',
          text: 'AI assistants and agents that use crowdsensing insights as context for support, planning or operational workflows.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with Crowdsensing & Smart Communities',
      intro:
        'Kumuluz supports crowdsensing and smart data scenarios across public sector, communities, enterprise operations and AI-ready analytics.',
      items: [
        {
          icon: Building2,
          title: 'Smart city and smart community services',
          text: 'Collect and use distributed data to improve public, community or customer services.',
          bulletsTitle: 'Examples',
          bullets: [
            'Citizen feedback collection',
            'Infrastructure issue reporting',
            'Service quality monitoring',
            'Community needs sensing',
            'Smart service optimization',
            'Local engagement platforms',
          ],
        },
        {
          icon: Cpu,
          title: 'IoT-enabled data collection',
          text: 'Collect and process data from connected devices, sensors and environments.',
          bulletsTitle: 'Examples',
          bullets: [
            'Environmental sensors',
            'Smart infrastructure devices',
            'Mobility sensors',
            'Field devices',
            'Location-based observations',
            'Sensor-based monitoring',
          ],
        },
        {
          icon: LineChart,
          title: 'AI-enhanced analytics',
          text: 'Use AI algorithms to interpret crowdsensed and IoT data.',
          bulletsTitle: 'Examples',
          bullets: [
            'Anomaly detection',
            'Predictive analytics',
            'Trend analysis',
            'Segmentation',
            'Event detection',
            'Recommendation support',
          ],
        },
        {
          icon: Megaphone,
          title: 'Contextual communication and engagement',
          text: 'Use data and segmentation to support timely and relevant communication.',
          bulletsTitle: 'Examples',
          bullets: [
            'Location-based notifications',
            'Smart alerts',
            'Personalized recommendations',
            'Community engagement',
            'Customer engagement',
            'Public information services',
          ],
        },
        {
          icon: ClipboardList,
          title: 'Field data collection and operations',
          text: 'Enable structured data collection from employees, field teams, users or connected devices.',
          bulletsTitle: 'Examples',
          bullets: [
            'Inspection reporting',
            'Incident reporting',
            'Asset condition monitoring',
            'Service feedback',
            'Workforce observations',
            'Operational data collection',
          ],
        },
        {
          icon: Database,
          title: 'AI-ready data services',
          text: 'Prepare distributed data for AI systems, data spaces, analytics platforms and AI agents.',
          bulletsTitle: 'Examples',
          bullets: [
            'AI-ready datasets',
            'Data pipelines',
            'Insight APIs',
            'Data space integration',
            'AI agent context',
            'Decision-support services',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Privacy-aware and responsible by design',
      body: [
        'Crowdsensing solutions must be built around trust.',
        'Kumuluz helps organizations design data collection and analytics processes with privacy, security, consent, anonymization, aggregation and responsible AI use in mind.',
        'This is especially important when data comes from people, devices, locations or community environments.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Consent-aware data collection',
          text: 'Design collection patterns that respect user participation and data use expectations.',
        },
        {
          title: 'Anonymization and aggregation',
          text: 'Reduce privacy risk by aggregating and anonymizing data where appropriate.',
        },
        {
          title: 'Secure data handling',
          text: 'Protect data during collection, transmission, processing and integration.',
        },
        {
          title: 'Responsible AI use',
          text: 'Apply AI algorithms in ways that are explainable, monitored and aligned with the use case.',
        },
        {
          title: 'Access governance',
          text: 'Control who can access raw data, aggregated data, insights, dashboards and APIs.',
        },
        {
          title: 'Auditability',
          text: 'Track data flows, processing steps, model outputs and decision-support usage where needed.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Designed for public-sector, enterprise and smart service environments',
      body: [
        'Kumuluz Crowdsensing can support public-sector, municipal, enterprise and cross-domain smart service scenarios.',
        'It can integrate with existing systems, APIs, dashboards, smart city platforms, AI services and operational workflows.',
      ],
      columns: 3,
      items: [
        {
          title: 'Cloud-native deployment',
          text: 'Deploy crowdsensing services in modern cloud-native environments.',
        },
        {
          title: 'Hybrid integration',
          text: 'Connect smart services with enterprise systems, public-sector systems or IoT platforms.',
        },
        {
          title: 'API-based integration',
          text: 'Expose processed data, events and insights through managed APIs.',
        },
        {
          title: 'Dashboard and operational views',
          text: 'Provide visual insight for operators, planners, service teams and decision-makers.',
        },
        {
          title: 'AI analytics integration',
          text: 'Use AI algorithms to generate insight and support data-driven decisions.',
        },
        {
          title: 'Workflow and alert integration',
          text: 'Trigger notifications, service tasks or workflows based on detected events or thresholds.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Kumuluz products used in this solution',
      body: [
        'Crowdsensing & Smart Communities solutions are built from several Kumuluz products that each play a distinct role.',
      ],
      items: [
        {
          label: 'Crowdsensing',
          title: 'Kumuluz Crowdsensing',
          text: 'Core platform for distributed data collection, crowdsensing, privacy-aware processing and AI-enhanced analytics.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Expose, secure and monitor crowdsensing data APIs, analytics APIs and insight services.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'Use crowdsensing data and insights as real-world context for AI assistants, agents and decision support.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Build the cloud-native services, dashboards, connectors and workflows around crowdsensing solutions.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Connect crowdsensing insights to notifications, cases, tasks, service requests and other reusable business capabilities.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start',
      intro:
        'Crowdsensing and smart community solutions can start with a focused data collection or smart service use case, then evolve into broader AI-ready data services.',
      items: [
        {
          title: 'Define the sensing challenge',
          text: 'Identify what needs to be understood: community needs, mobility, infrastructure, service usage, environment, operations or customer behavior.',
        },
        {
          title: 'Identify data sources',
          text: 'Determine which people, devices, sensors, applications, systems or external datasets can provide useful signals.',
        },
        {
          title: 'Design privacy-aware collection',
          text: 'Define consent, anonymization, aggregation, security and responsible data processing patterns.',
        },
        {
          title: 'Configure processing and AI analytics',
          text: 'Set up validation, cleaning, enrichment, dashboards and AI algorithms for the use case.',
        },
        {
          title: 'Expose insights and APIs',
          text: 'Make data, insights, alerts and recommendations available through dashboards, APIs or integration services.',
        },
        {
          title: 'Connect to actions',
          text: 'Trigger notifications, workflows, service tasks, recommendations or AI-agent-supported decision processes.',
        },
        {
          title: 'Evolve into AI-ready data services',
          text: 'Expand from one use case into data services, AI-ready datasets, data spaces or smart community platforms.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz for Crowdsensing & Smart Communities',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Distributed data collection',
          text: 'Collect data from people, mobile devices, IoT devices, sensors and enterprise systems.',
        },
        {
          title: 'AI-enhanced analytics',
          text: 'Use AI algorithms to detect patterns, identify anomalies, support predictions and generate recommendations.',
        },
        {
          title: 'Privacy-aware processing',
          text: 'Design crowdsensing around consent, anonymization, aggregation, security and responsible data use.',
        },
        {
          title: 'Smart service enablement',
          text: 'Turn insight into alerts, dashboards, workflows, recommendations and service improvements.',
        },
        {
          title: 'AI-ready data foundation',
          text: 'Prepare distributed data for AI models, analytics platforms, data spaces and AI agents.',
        },
        {
          title: 'Green.Dat.AI innovation context',
          text: 'Kumuluz Crowdsensing has been used in the Green.Dat.AI Horizon Europe context for AI-ready data spaces and sustainable analytics.',
        },
        {
          title: 'Part of the Kumuluz ecosystem',
          text: 'Integrates with KumuluzAI, Kumuluz API, Kumuluz Digital Platform and Kumuluz Business APIs.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Sunesis combines software engineering, cloud-native platforms, AI, data platforms, smart services and European research innovation experience.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Ready to turn distributed data into smarter services?',
      body: [
        'Kumuluz helps organizations collect, process and use distributed real-world data from people, devices, sensors and environments.',
        'With AI-enhanced analytics, privacy-aware processing and integration with APIs, workflows and AI agents, Kumuluz Crowdsensing provides a foundation for smart communities, AI-ready data services and data-driven decision-making.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Explore Kumuluz Crowdsensing',
    },
  ],
}

const sl: SolutionPageContent = {
  seo: {
    title:
      'Crowdsensing in pametne skupnosti | AI-podprti porazdeljeni podatki s Kumuluz',
    description:
      'Gradite storitve pametnih skupnosti z AI-podprtim crowdsensingom, porazdeljenim zbiranjem podatkov, IoT zaznavanjem, zasebnosti prijazno analitiko in AI-pripravljenimi podatkovnimi storitvami s Kumuluz.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Crowdsensing in pametne skupnosti',
    title:
      'Uporabite porazdeljene podatke in AI analitiko za gradnjo pametnejših storitev',
    body: [
      'Pametne skupnosti, mesta in organizacije potrebujejo podatke iz resničnega sveta za razumevanje potreb, vedenja, infrastrukture, mobilnosti, okolja in uporabe storitev.',
      'Kumuluz organizacijam pomaga zbirati, obdelovati in uporabljati porazdeljene podatke iz ljudi, aplikacij, naprav, senzorjev in okolij za podporo pametnim storitvam in odločanju na podlagi podatkov.',
      'S Kumuluz Crowdsensing lahko združite crowdsensing, IoT zbiranje podatkov, zasebnosti prijazno obdelavo, analitiko in AI algoritme ter porazdeljene signale spremenite v vpoglede, priporočila in dejanja.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite Kumuluz Crowdsensing',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title: 'Pametne storitve potrebujejo podatke iz resničnega sveta',
      body: [
        'Mnoge organizacije želijo izboljšati storitve, optimizirati delovanje, razumeti uporabnike, vključiti skupnosti ali sprejemati boljše odločitve.',
        'A podatki iz resničnega sveta so pogosto razdrobljeni. Prihajajo od občanov, strank, zaposlenih, mobilnih aplikacij, IoT naprav, senzorjev, pametne infrastrukture, terenskih ekip, poslovnih sistemov in zunanjih podatkovnih zbirk.',
        'Brez strukturirane platforme je te podatke težko zbirati, validirati, anonimizirati, analizirati in uporabljati.',
        'AI lahko ustvari dodatno vrednost, a le, če so podatki zanesljivi, kontekstualni, odgovorno obdelani in na voljo v pravi obliki. Kumuluz organizacijam pomaga graditi rešitve pametnih skupnosti in crowdsensinga, ki porazdeljene podatke spremenijo v vpogled in dejanje.',
      ],
      columns: 3,
      items: [
        {
          title: 'Podatki so razdrobljeni',
          text: 'Uporabni signali iz resničnega sveta so razpršeni med ljudmi, napravami, senzorji, mobilnimi aplikacijami in poslovnimi sistemi.',
        },
        {
          title: 'Omejena situacijska zavest',
          text: 'Organizacijam pogosto manjka pravočasen vpogled v dogajanje po skupnostih, infrastrukturi ali servisnih okoljih.',
        },
        {
          title: 'Surove podatke je težko uporabiti',
          text: 'Crowdsensing in senzorski podatki potrebujejo validacijo, čiščenje, agregacijo, anonimizacijo in interpretacijo.',
        },
        {
          title: 'Ročna analiza se ne skalira',
          text: 'Z naraščanjem količine podatkov ročna analiza postane prepočasna in nedosledna.',
        },
        {
          title: 'Zasebnost in zaupanje sta pomembna',
          text: 'Crowdsensing mora biti zasnovan okoli privolitve, anonimizacije, varnosti in odgovorne uporabe podatkov.',
        },
        {
          title: 'Vpogledi ne sprožijo dejanj',
          text: 'Podatki so dragoceni le, ko podpirajo priporočila, opozorila, workflowe, izboljšave storitev ali odločitve.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI-podprt crowdsensing za pametne storitve',
      body: [
        'Kumuluz ponuja rešitveni pristop za zbiranje in uporabo porazdeljenih podatkov iz resničnega sveta.',
        'V središču je Kumuluz Crowdsensing, ki omogoča zbiranje podatkov iz ljudi, naprav, senzorjev, mobilnih aplikacij in okolij. Platforma lahko podatke obdeluje, validira, anonimizira, agregira, analizira in vizualizira. AI algoritmi lahko podpirajo zaznavanje anomalij, prepoznavanje vzorcev, napovedovanje, segmentacijo, priporočila in izboljšanje kakovosti podatkov.',
        'Skupaj s Kumuluz API, KumuluzAI in Kumuluz Digital Platform je mogoče crowdsensing vpoglede izpostaviti prek API-jev, jih uporabiti za AI agente, povezati z workflowi ali integrirati v pametne storitve.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Zbirajte signale iz resničnega sveta',
          text: 'Zberite podatke iz ljudi, mobilnih aplikacij, senzorjev, naprav, sistemov in povezanih okolij.',
        },
        {
          title: 'Uporabite AI za razumevanje vzorcev',
          text: 'Uporabite AI algoritme za zaznavanje anomalij, napovedovanje trendov, segmentacijo podatkov in generiranje priporočil.',
        },
        {
          title: 'Spoštujte zasebnost in zaupanje',
          text: 'Uporabite zasebnosti prijazno zbiranje podatkov, anonimizacijo, agregacijo in odgovorne vzorce obdelave.',
        },
        {
          title: 'Spremenite vpogled v dejanje',
          text: 'Povežite vpoglede z opozorili, nadzornimi ploščami, workflowi, API-ji, AI agenti in pametnimi storitvami.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Kaj vključuje Crowdsensing in pametne skupnosti',
      intro:
        'Rešitev pametnega crowdsensinga združuje zbiranje podatkov, zasebnosti prijazno obdelavo, AI analitiko, vizualizacijo, API-je in mehanizme za dejanja.',
      items: [
        {
          icon: Radio,
          title: 'Porazdeljeno zbiranje podatkov',
          text: 'Zberite podatke iz ljudi, mobilnih naprav, IoT naprav, senzorjev, pametne infrastrukture in zunanjih sistemov.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Crowdsensing'],
        },
        {
          icon: ShieldCheck,
          title: 'Zasebnosti prijazna obdelava',
          text: 'Uporabite anonimizacijo, agregacijo, vzorce z upoštevanjem privolitve in varno ravnanje s podatki.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Crowdsensing', 'Kumuluz Digital Platform'],
        },
        {
          icon: Filter,
          title: 'Validacija in izboljšanje kakovosti podatkov',
          text: 'Očistite, validirajte, odstranite podvojitve, obogatite in ocenite crowdsensing podatke.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Crowdsensing'],
        },
        {
          icon: Brain,
          title: 'AI-podprta analitika',
          text: 'Uporabite AI algoritme za zaznavanje anomalij, prepoznavanje vzorcev, napovedovanje, segmentacijo in priporočila.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Crowdsensing', 'KumuluzAI Platform'],
        },
        {
          icon: LayoutDashboard,
          title: 'Nadzorne plošče in vizualizacija',
          text: 'Predstavite vpoglede prek nadzornih plošč, zemljevidov, poročil, trendov, opozoril in operativnih pogledov.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Crowdsensing', 'Kumuluz Digital Platform'],
        },
        {
          icon: Plug,
          title: 'API-ji in integracije',
          text: 'Izpostavite podatke, vpoglede in dogodke prek API-jev za pametne storitve, analitične platforme in poslovne sisteme.',
          bulletsTitle: 'Podpira',
          bullets: ['Kumuluz Crowdsensing', 'Kumuluz API'],
        },
        {
          icon: Bot,
          title: 'Kontekst za AI agente',
          text: 'Zagotovite kontekst iz resničnega sveta, ki ga lahko AI agenti uporabijo za pomoč, priporočila ali operativno podporo pri odločanju.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz Crowdsensing',
            'KumuluzAI Platform',
            'Kumuluz API',
          ],
        },
        {
          icon: Bell,
          title: 'Opozorila, priporočila in workflowi',
          text: 'Uporabite zaznane dogodke in AI-generirane vpoglede za sprožitev dejanj, obvestil, workflowov ali servisnih nalog.',
          bulletsTitle: 'Podpira',
          bullets: [
            'Kumuluz Crowdsensing',
            'Kumuluz Digital Platform',
            'Kumuluz Business APIs',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI algoritmi, ki signale spremenijo v vpogled',
      body: [
        'Crowdsensing ustvarja vrednost, ko porazdeljeni podatki postanejo smiselni.',
        'Kumuluz Crowdsensing lahko uporablja AI algoritme in analitične tehnike za obdelavo velikih količin porazdeljenih podatkov, prepoznavanje relevantnih vzorcev in podporo boljšemu odločanju.',
        'To organizacijam omogoča prehod od pasivnega zbiranja podatkov k inteligentnim storitvam, ki se prilagajajo razmeram v resničnem svetu.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Zaznavanje anomalij',
          text: 'Prepoznajte nenavadno vedenje, nepričakovane dogodke ali odstopanja v zbranih podatkih.',
        },
        {
          title: 'Prepoznavanje vzorcev',
          text: 'Zaznajte ponavljajoča vedenja, vzorce gibanja, vzorce uporabe storitev, infrastrukturne signale ali okoljske trende.',
        },
        {
          title: 'Napovedovanje',
          text: 'Uporabite zgodovinske in podatke v realnem času za napovedovanje povpraševanja, razmer, incidentov, uporabe storitev ali dogodkov.',
        },
        {
          title: 'Segmentacija',
          text: 'Razvrstite uporabnike, lokacije, naprave, dogodke ali vedenja v smiselne segmente za analizo in personalizacijo.',
        },
        {
          title: 'Podpora priporočilom',
          text: 'Generirajte priporočila za uporabnike, operaterje, načrtovalce ali servisne ekipe.',
        },
        {
          title: 'Izboljšanje kakovosti podatkov',
          text: 'Zaznajte šum, podvojitve, nepopolne podatke in težave z zanesljivostjo.',
        },
        {
          title: 'Generiranje konteksta za AI agente',
          text: 'Spremenite porazdeljene podatke iz resničnega sveta v strukturiran kontekst za AI asistente in agente.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Pametne skupnosti, podprte s podatki iz resničnega sveta',
      body: [
        'Storitve pametnih skupnosti potrebujejo neprekinjene povratne informacije iz resničnega sveta.',
        'Kumuluz Crowdsensing lahko pomaga zbirati in analizirati podatke od prebivalcev, uporabnikov, naprav, infrastrukture in okolij, kar omogoča boljše razumevanje potreb, zaznavanje težav in izboljševanje storitev.',
        'To je relevantno za javni sektor, občine, komunalna podjetja, ponudnike mobilnosti, pobude pametnih mest in organizacije, ki upravljajo porazdeljene storitve.',
      ],
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Vključevanje občanov in uporabnikov',
          text: 'Zbirajte povratne informacije, opažanja in vnose o storitvah od prebivalcev, strank ali uporabnikov.',
          meta: 'povratne informacije, opažanja, vnosi',
        },
        {
          title: 'Zavedanje o infrastrukturi',
          text: 'Uporabite porazdeljene podatke za razumevanje stanja infrastrukture, incidentov ali kakovosti storitev.',
          meta: 'stanje, incidenti, kakovost storitev',
        },
        {
          title: 'Vpogledi v mobilnost',
          text: 'Analizirajte vzorce mobilnosti, vedenje glede na lokacijo in opažanja, povezana s prevozom.',
          meta: 'mobilnost, lokacija, prevoz',
        },
        {
          title: 'Okoljsko zaznavanje',
          text: 'Zbirajte okoljske signale iz senzorjev, naprav ali opažanj uporabnikov.',
          meta: 'senzorji, okolje, opažanja',
        },
        {
          title: 'Kontekstualna komunikacija',
          text: 'Pošiljajte ciljana obvestila, opozorila ali priporočila na podlagi lokacije, konteksta ali zaznanih dogodkov.',
          meta: 'obvestila, opozorila, glede na lokacijo',
        },
        {
          title: 'Načrtovanje na podlagi podatkov',
          text: 'Uporabite crowdsensing vpoglede za podporo zasnovi storitev, načrtovanju, delovanju in naložbenim odločitvam.',
          meta: 'načrtovanje, delovanje, naložbe',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Od crowdsensinga do AI-pripravljenih podatkovnih storitev',
      body: [
        'Crowdsensing ni uporaben le za nadzorne plošče in poročila. Lahko ustvari tudi podatkovne temelje za AI modele, AI agente, analitične storitve in podatkovne prostore.',
        'Kumuluz Crowdsensing lahko pomaga pripraviti porazdeljene podatke za AI uporabo z validacijo, agregacijo, anonimizacijo, obogatitvijo in strukturirano izpostavitvijo prek API-jev.',
        'To naredi platformo relevantno za organizacije, ki želijo ustvariti AI-pripravljene podatkovne storitve in sodelovati v širših podatkovnih ekosistemih.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'AI-pripravljeni podatkovni nizi',
          text: 'Pripravite crowdsensing in senzorske podatke za analitiko, AI modele in sisteme za podporo odločanju.',
        },
        {
          title: 'Integracija podatkovnih prostorov',
          text: 'Izpostavite obdelane in vodene podatke v širše podatkovne ekosisteme ali domensko specifične podatkovne prostore.',
        },
        {
          title: 'API-ji za vpoglede',
          text: 'Omogočite dostop do analitičnih rezultatov, trendov, dogodkov in priporočil prek API-jev.',
        },
        {
          title: 'Storitve konteksta za agente',
          text: 'Zagotovite kontekst iz resničnega sveta za AI agente za bolj relevantno pomoč in podporo odločanju.',
        },
        {
          title: 'Trajnostna analitika',
          text: 'Podprite scenarije, kjer sta učinkovitost obdelave podatkov in odgovorna uporaba AI pomembni.',
        },
        {
          title: 'Medsektorska ponovna uporaba podatkov',
          text: 'Uporabite porazdeljene podatke v pametni mobilnosti, energetiki, kmetijstvu, javnih storitvah, financah ali poslovnem delovanju.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Green.Dat.AI',
      title: 'Uporabljeno v kontekstu Green.Dat.AI Horizon Europe',
      body: [
        'Kumuluz Crowdsensing je bil uporabljen v okviru Green.Dat.AI, projekta Horizon Europe, ki se osredotoča na energetsko učinkovite AI-pripravljene podatkovne prostore.',
        'Green.Dat.AI se osredotoča na uporabo AI in obsežne podatkovne analitike za podporo ciljem Evropskega zelenega dogovora, hkrati pa zmanjšuje okoljski vpliv procesov upravljanja podatkov. Projekt prikazuje AI-pripravljene podatkovne storitve v domenah, kot so pametna energetika, pametno kmetijstvo in agroživilstvo, pametna mobilnost in pametno bančništvo.',
        'To naredi Kumuluz Crowdsensing še posebej relevanten za scenarije, kjer morajo porazdeljeno zbiranje podatkov, AI-pripravljena priprava podatkov, trajnostna analitika in odločanje na podlagi podatkov delovati skupaj.',
      ],
      columns: 2,
      variant: 'feature',
      items: [
        {
          label: 'Horizon Europe',
          title: 'AI-pripravljeni podatkovni prostori',
          text: 'Podprite vzorce zbiranja in priprave podatkov, ki lahko napajajo AI-pripravljene podatkovne ekosisteme.',
        },
        {
          label: 'Trajnost',
          title: 'Energetsko učinkovita analitika',
          text: 'Relevantno za scenarije, kjer morata AI in obdelava podatkov upoštevati učinkovitost in trajnost.',
        },
        {
          label: 'Piloti',
          title: 'Medsektorski piloti',
          text: 'Uporabno v pametni energetiki, kmetijstvu, mobilnosti, bančništvu in drugih sektorjih, ki temeljijo na podatkih.',
        },
        {
          label: 'Temelj',
          title: 'Temelj podatkov iz resničnega sveta',
          text: 'Zbirajte porazdeljene signale iz resničnega sveta, ki lahko podpirajo napredno analitiko in AI storitve.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za crowdsensing in pametne skupnosti',
      body: [
        'Arhitektura crowdsensinga in pametne skupnosti povezuje podatkovne vire, zasebnosti prijazno obdelavo, AI analitiko, API-je, nadzorne plošče, agente in servisne workflowe.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Podatkovni viri',
          text: 'Ljudje, mobilne aplikacije, IoT naprave, senzorji, pametna infrastruktura, terenske ekipe, poslovni sistemi in zunanje podatkovne zbirke.',
        },
        {
          title: 'Plast zbiranja podatkov',
          text: 'Mehanizmi za zajem opažanj, dogodkov, signalov naprav, geolokacije, povratnih informacij uporabnikov in senzorskih podatkov.',
        },
        {
          title: 'Plast obdelave in zasebnosti',
          text: 'Validacija, čiščenje, agregacija, anonimizacija, obdelava z upoštevanjem privolitve in varno ravnanje s podatki.',
        },
        {
          title: 'Plast AI in analitike',
          text: 'Zaznavanje anomalij, napovedovanje, segmentacija, priporočila, analiza trendov in ocenjevanje kakovosti podatkov.',
        },
        {
          title: 'Plast vizualizacije',
          text: 'Nadzorne plošče, zemljevidi, poročila, operativni pogledi, opozorila in vmesniki za podporo odločanju.',
        },
        {
          title: 'Plast API-jev in integracij',
          text: 'API-ji in konektorji za izpostavitev podatkov, vpogledov in dogodkov platformam, storitvam, workflowom in AI agentom.',
        },
        {
          title: 'Plast pametnih storitev',
          text: 'Aplikacije, obvestila, workflowi, priporočila, servisne naloge in storitve pametnih skupnosti.',
        },
        {
          title: 'Plast AI agentov',
          text: 'AI asistenti in agenti, ki crowdsensing vpoglede uporabljajo kot kontekst za podporo, načrtovanje ali operativne workflowe.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite s Crowdsensing in pametnimi skupnostmi',
      intro:
        'Kumuluz podpira scenarije crowdsensinga in pametnih podatkov v javnem sektorju, skupnostih, poslovnem delovanju in AI-pripravljeni analitiki.',
      items: [
        {
          icon: Building2,
          title: 'Storitve pametnih mest in pametnih skupnosti',
          text: 'Zbirajte in uporabljajte porazdeljene podatke za izboljšanje javnih, skupnostnih ali storitev za stranke.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Zbiranje povratnih informacij občanov',
            'Prijava infrastrukturnih težav',
            'Spremljanje kakovosti storitev',
            'Zaznavanje potreb skupnosti',
            'Optimizacija pametnih storitev',
            'Platforme za lokalno vključevanje',
          ],
        },
        {
          icon: Cpu,
          title: 'IoT zbiranje podatkov',
          text: 'Zbirajte in obdelujte podatke iz povezanih naprav, senzorjev in okolij.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Okoljski senzorji',
            'Naprave pametne infrastrukture',
            'Senzorji mobilnosti',
            'Terenske naprave',
            'Opažanja glede na lokacijo',
            'Spremljanje na podlagi senzorjev',
          ],
        },
        {
          icon: LineChart,
          title: 'AI-podprta analitika',
          text: 'Uporabite AI algoritme za interpretacijo crowdsensing in IoT podatkov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Zaznavanje anomalij',
            'Napovedna analitika',
            'Analiza trendov',
            'Segmentacija',
            'Zaznavanje dogodkov',
            'Podpora priporočilom',
          ],
        },
        {
          icon: Megaphone,
          title: 'Kontekstualna komunikacija in vključevanje',
          text: 'Uporabite podatke in segmentacijo za podporo pravočasni in relevantni komunikaciji.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Obvestila glede na lokacijo',
            'Pametna opozorila',
            'Personalizirana priporočila',
            'Vključevanje skupnosti',
            'Vključevanje strank',
            'Storitve javnega obveščanja',
          ],
        },
        {
          icon: ClipboardList,
          title: 'Terensko zbiranje podatkov in delovanje',
          text: 'Omogočite strukturirano zbiranje podatkov od zaposlenih, terenskih ekip, uporabnikov ali povezanih naprav.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Poročanje o pregledih',
            'Poročanje o incidentih',
            'Spremljanje stanja sredstev',
            'Povratne informacije o storitvah',
            'Opažanja delovne sile',
            'Operativno zbiranje podatkov',
          ],
        },
        {
          icon: Database,
          title: 'AI-pripravljene podatkovne storitve',
          text: 'Pripravite porazdeljene podatke za AI sisteme, podatkovne prostore, analitične platforme in AI agente.',
          bulletsTitle: 'Primeri',
          bullets: [
            'AI-pripravljeni podatkovni nizi',
            'Podatkovni cevovodi',
            'API-ji za vpoglede',
            'Integracija podatkovnih prostorov',
            'Kontekst za AI agente',
            'Storitve za podporo odločanju',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasebnosti prijazno in odgovorno po zasnovi',
      body: [
        'Crowdsensing rešitve morajo biti zgrajene okoli zaupanja.',
        'Kumuluz organizacijam pomaga zasnovati procese zbiranja podatkov in analitike z mislijo na zasebnost, varnost, privolitev, anonimizacijo, agregacijo in odgovorno uporabo AI.',
        'To je še posebej pomembno, ko podatki prihajajo od ljudi, naprav, lokacij ali okolij skupnosti.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Zbiranje z upoštevanjem privolitve',
          text: 'Zasnujte vzorce zbiranja, ki spoštujejo sodelovanje uporabnikov in pričakovanja glede uporabe podatkov.',
        },
        {
          title: 'Anonimizacija in agregacija',
          text: 'Zmanjšajte tveganje za zasebnost z agregacijo in anonimizacijo podatkov, kjer je to primerno.',
        },
        {
          title: 'Varno ravnanje s podatki',
          text: 'Zaščitite podatke med zbiranjem, prenosom, obdelavo in integracijo.',
        },
        {
          title: 'Odgovorna uporaba AI',
          text: 'Uporabite AI algoritme na načine, ki so razložljivi, nadzorovani in usklajeni s primerom uporabe.',
        },
        {
          title: 'Upravljanje dostopa',
          text: 'Nadzorujte, kdo lahko dostopa do surovih podatkov, agregiranih podatkov, vpogledov, nadzornih plošč in API-jev.',
        },
        {
          title: 'Sledljivost',
          text: 'Sledite tokovom podatkov, korakom obdelave, izhodom modelov in uporabi za podporo odločanju, kjer je potrebno.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Zasnovano za javni sektor, podjetja in okolja pametnih storitev',
      body: [
        'Kumuluz Crowdsensing lahko podpira scenarije javnega sektorja, občin, podjetij in medsektorskih pametnih storitev.',
        'Integrira se lahko z obstoječimi sistemi, API-ji, nadzornimi ploščami, platformami pametnih mest, AI storitvami in operativnimi workflowi.',
      ],
      columns: 3,
      items: [
        {
          title: 'Cloud-native uvedba',
          text: 'Uvedite crowdsensing storitve v sodobnih cloud-native okoljih.',
        },
        {
          title: 'Hibridna integracija',
          text: 'Povežite pametne storitve s poslovnimi sistemi, sistemi javnega sektorja ali IoT platformami.',
        },
        {
          title: 'Integracija na podlagi API-jev',
          text: 'Izpostavite obdelane podatke, dogodke in vpoglede prek upravljanih API-jev.',
        },
        {
          title: 'Nadzorne plošče in operativni pogledi',
          text: 'Zagotovite vizualni vpogled za operaterje, načrtovalce, servisne ekipe in odločevalce.',
        },
        {
          title: 'Integracija AI analitike',
          text: 'Uporabite AI algoritme za generiranje vpogleda in podporo odločitvam na podlagi podatkov.',
        },
        {
          title: 'Integracija workflowov in opozoril',
          text: 'Sprožite obvestila, servisne naloge ali workflowe na podlagi zaznanih dogodkov ali pragov.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Izdelki Kumuluz, uporabljeni v tej rešitvi',
      body: [
        'Rešitve Crowdsensing in pametne skupnosti so zgrajene iz več izdelkov Kumuluz, od katerih ima vsak svojo vlogo.',
      ],
      items: [
        {
          label: 'Crowdsensing',
          title: 'Kumuluz Crowdsensing',
          text: 'Osrednja platforma za porazdeljeno zbiranje podatkov, crowdsensing, zasebnosti prijazno obdelavo in AI-podprto analitiko.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Izpostavite, zavarujte in spremljajte crowdsensing podatkovne API-je, analitične API-je in storitve vpogledov.',
        },
        {
          label: 'AI',
          title: 'KumuluzAI Platform',
          text: 'Uporabite crowdsensing podatke in vpoglede kot kontekst iz resničnega sveta za AI asistente, agente in podporo odločanju.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Zgradite cloud-native storitve, nadzorne plošče, konektorje in workflowe okoli crowdsensing rešitev.',
        },
        {
          label: 'Poslovno',
          title: 'Kumuluz Business APIs',
          text: 'Povežite crowdsensing vpoglede z obvestili, primeri, nalogami, servisnimi zahtevki in drugimi ponovno uporabnimi poslovnimi zmožnostmi.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo',
      intro:
        'Rešitve crowdsensinga in pametnih skupnosti lahko začnejo z osredotočenim primerom uporabe zbiranja podatkov ali pametne storitve, nato pa se razvijejo v širše AI-pripravljene podatkovne storitve.',
      items: [
        {
          title: 'Določite izziv zaznavanja',
          text: 'Opredelite, kaj je treba razumeti: potrebe skupnosti, mobilnost, infrastrukturo, uporabo storitev, okolje, delovanje ali vedenje strank.',
        },
        {
          title: 'Identificirajte podatkovne vire',
          text: 'Določite, kateri ljudje, naprave, senzorji, aplikacije, sistemi ali zunanje podatkovne zbirke lahko zagotovijo uporabne signale.',
        },
        {
          title: 'Zasnujte zasebnosti prijazno zbiranje',
          text: 'Določite vzorce privolitve, anonimizacije, agregacije, varnosti in odgovorne obdelave podatkov.',
        },
        {
          title: 'Konfigurirajte obdelavo in AI analitiko',
          text: 'Nastavite validacijo, čiščenje, obogatitev, nadzorne plošče in AI algoritme za primer uporabe.',
        },
        {
          title: 'Izpostavite vpoglede in API-je',
          text: 'Omogočite dostop do podatkov, vpogledov, opozoril in priporočil prek nadzornih plošč, API-jev ali integracijskih storitev.',
        },
        {
          title: 'Povežite se z dejanji',
          text: 'Sprožite obvestila, workflowe, servisne naloge, priporočila ali procese odločanja s podporo AI agentov.',
        },
        {
          title: 'Razvijte se v AI-pripravljene podatkovne storitve',
          text: 'Razširite se iz enega primera uporabe v podatkovne storitve, AI-pripravljene podatkovne nize, podatkovne prostore ali platforme pametnih skupnosti.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz za Crowdsensing in pametne skupnosti',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Porazdeljeno zbiranje podatkov',
          text: 'Zbirajte podatke iz ljudi, mobilnih naprav, IoT naprav, senzorjev in poslovnih sistemov.',
        },
        {
          title: 'AI-podprta analitika',
          text: 'Uporabite AI algoritme za zaznavanje vzorcev, prepoznavanje anomalij, podporo napovedim in generiranje priporočil.',
        },
        {
          title: 'Zasebnosti prijazna obdelava',
          text: 'Zasnujte crowdsensing okoli privolitve, anonimizacije, agregacije, varnosti in odgovorne uporabe podatkov.',
        },
        {
          title: 'Omogočanje pametnih storitev',
          text: 'Spremenite vpogled v opozorila, nadzorne plošče, workflowe, priporočila in izboljšave storitev.',
        },
        {
          title: 'AI-pripravljen podatkovni temelj',
          text: 'Pripravite porazdeljene podatke za AI modele, analitične platforme, podatkovne prostore in AI agente.',
        },
        {
          title: 'Inovacijski kontekst Green.Dat.AI',
          text: 'Kumuluz Crowdsensing je bil uporabljen v kontekstu Green.Dat.AI Horizon Europe za AI-pripravljene podatkovne prostore in trajnostno analitiko.',
        },
        {
          title: 'Del ekosistema Kumuluz',
          text: 'Integrira se s KumuluzAI, Kumuluz API, Kumuluz Digital Platform in Kumuluz Business APIs.',
        },
        {
          title: 'Zagotavlja Sunesis',
          text: 'Sunesis združuje programski inženiring, cloud-native platforme, AI, podatkovne platforme, pametne storitve in izkušnje evropskih raziskovalnih inovacij.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Pripravljeni spremeniti porazdeljene podatke v pametnejše storitve?',
      body: [
        'Kumuluz organizacijam pomaga zbirati, obdelovati in uporabljati porazdeljene podatke iz resničnega sveta od ljudi, naprav, senzorjev in okolij.',
        'Z AI-podprto analitiko, zasebnosti prijazno obdelavo in integracijo z API-ji, workflowi in AI agenti Kumuluz Crowdsensing zagotavlja temelj za pametne skupnosti, AI-pripravljene podatkovne storitve in odločanje na podlagi podatkov.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Raziščite Kumuluz Crowdsensing',
    },
  ],
}

export const crowdsensingSmartCommunitiesPage: Record<
  LanguageCode,
  SolutionPageContent
> = {
  en,
  sl,
}
