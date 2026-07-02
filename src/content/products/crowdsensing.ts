import {
  Antenna,
  BarChart3,
  Bell,
  Bot,
  BrainCircuit,
  Building2,
  ClipboardList,
  Cpu,
  Database,
  Filter,
  MapPin,
  MessageSquare,
  Plug,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { ProductPageContent } from '../../views/products/types'

const en: ProductPageContent = {
  seo: {
    title:
      'Kumuluz Crowdsensing | AI-enhanced Crowdsensing and Distributed Data Platform',
    description:
      'Kumuluz Crowdsensing is an AI-enhanced platform for distributed data collection, crowdsensing, smart communities, IoT-enabled services and data-driven decision-making.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz Crowdsensing',
    title:
      'AI-enhanced crowdsensing for smart communities and data-driven services',
    body: [
      'Kumuluz Crowdsensing helps organizations collect, process and use distributed data from people, devices, sensors and environments to support smart services, smart communities and data-driven decisions.',
      'The platform combines crowdsensing, IoT-enabled data collection, geolocation, segmentation, analytics and AI algorithms to turn distributed signals into useful insights, recommendations and actions.',
      'It can support smart cities and communities, mobility, sustainability, customer engagement, field data collection, environmental monitoring and AI-ready data services.',
    ],
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore platform capabilities',
    trustLine: 'Trusted by',
  },
  sections: [
    {
      type: 'cards',
      title: 'Smart services need real-world data, not assumptions',
      body: [
        'Organizations increasingly need to understand what is happening across physical spaces, communities, services, infrastructure and user interactions.',
        'But real-world data is often fragmented. It comes from different devices, mobile applications, sensors, users, systems and environments. Without a platform, this data is difficult to collect, validate, anonymize, analyze and use.',
        'Kumuluz Crowdsensing provides a structured platform for collecting and processing distributed data so organizations can build smarter services, understand real-world patterns and make better decisions.',
        'With AI algorithms in the background, the platform can support data validation, anomaly detection, pattern recognition, prediction, segmentation and intelligent recommendations.',
      ],
      columns: 3,
      items: [
        {
          title: 'Fragmented real-world data',
          text: 'Data is distributed across users, mobile devices, IoT devices, sensors, systems and environments.',
        },
        {
          title: 'Limited visibility',
          text: 'Organizations often lack timely insight into what is happening in communities, services, infrastructure or customer interactions.',
        },
        {
          title: 'Hard-to-use crowdsensed data',
          text: 'Raw crowdsensing data needs validation, aggregation, anonymization, interpretation and visualization before it becomes useful.',
        },
        {
          title: 'Manual analysis does not scale',
          text: 'As data volumes grow, manual analysis becomes too slow and inconsistent.',
        },
        {
          title: 'Privacy and trust requirements',
          text: 'Crowdsensing solutions must respect privacy, security, consent, anonymization and responsible data use.',
        },
        {
          title: 'Disconnected actions',
          text: 'Insights are only valuable if they can trigger recommendations, workflows, alerts or service improvements.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'A platform for collecting, processing and understanding distributed data',
      body: [
        'Kumuluz Crowdsensing is a platform for distributed data collection and crowdsensing-based digital services.',
        'It enables organizations to collect information from users, mobile devices, IoT devices, sensors and digital systems, then process, anonymize, analyze and use that data for smart services and decision support.',
        'The platform can use AI algorithms to detect patterns, identify anomalies, generate predictions, support segmentation and help turn distributed data into actionable insight.',
        'Kumuluz Crowdsensing is especially valuable where organizations need to understand real-world behavior, service usage, environmental signals, mobility patterns, infrastructure conditions or community needs.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Collect distributed data',
          text: 'Gather data from mobile applications, users, IoT devices, sensors, systems and connected environments.',
        },
        {
          title: 'Turn signals into insights',
          text: 'Process, validate, aggregate and analyze crowdsensed data to identify patterns and trends.',
        },
        {
          title: 'Use AI in the background',
          text: 'Apply AI algorithms for anomaly detection, prediction, segmentation, recommendation and intelligent data interpretation.',
        },
        {
          title: 'Support smart services',
          text: 'Use collected data to improve services, trigger actions, personalize communication and support better decisions.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI-enhanced data processing and decision support',
      body: [
        'Crowdsensing creates value when distributed data can be transformed into reliable insight. Kumuluz Crowdsensing uses AI algorithms and analytics techniques to help organizations process large volumes of distributed data more effectively.',
        'AI can support the platform in identifying data patterns, detecting unusual events, predicting future conditions, classifying signals, segmenting users or locations, and recommending actions.',
        'This makes Kumuluz Crowdsensing suitable not only for data collection, but also for intelligent services that adapt to real-world conditions.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Anomaly detection',
          text: 'Identify unusual events, outliers or unexpected changes in collected data.',
        },
        {
          title: 'Pattern recognition',
          text: 'Detect recurring behaviors, trends, movement patterns, service usage patterns or environmental signals.',
        },
        {
          title: 'Prediction and forecasting',
          text: 'Use historical and real-time data to predict future demand, conditions, usage or events.',
        },
        {
          title: 'Segmentation',
          text: 'Group users, areas, devices, events or behaviors into meaningful segments for analysis and service personalization.',
        },
        {
          title: 'Recommendation support',
          text: 'Generate recommendations for users, operators or service teams based on collected data and detected patterns.',
        },
        {
          title: 'Data quality improvement',
          text: 'Support validation, noise reduction, duplicate detection and reliability scoring of crowdsensed data.',
        },
        {
          title: 'Context generation for AI agents',
          text: 'Provide structured, real-world data context that AI agents can use when assisting users or supporting operational workflows.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What you can build with Kumuluz Crowdsensing',
      intro:
        'Kumuluz Crowdsensing supports smart services and data-driven applications where distributed data from people, devices and environments is essential.',
      items: [
        {
          icon: Building2,
          title: 'Smart cities and smart communities',
          text: 'Build services that collect and use data from residents, devices, infrastructure and environments to improve urban and community services.',
          bulletsTitle: 'Examples',
          bullets: [
            'Citizen feedback collection',
            'Urban mobility insights',
            'Infrastructure issue reporting',
            'Environmental observations',
            'Community needs sensing',
            'Smart service optimization',
          ],
        },
        {
          icon: Cpu,
          title: 'IoT-enabled data collection',
          text: 'Collect and process data from connected devices, sensors and environments.',
          bulletsTitle: 'Examples',
          bullets: [
            'Environmental sensors',
            'Mobility sensors',
            'Smart infrastructure devices',
            'Connected field devices',
            'Location-based observations',
            'Sensor-based monitoring',
          ],
        },
        {
          icon: BrainCircuit,
          title: 'AI-enhanced analytics services',
          text: 'Use AI algorithms to interpret crowdsensed and IoT data.',
          bulletsTitle: 'Examples',
          bullets: [
            'Anomaly detection',
            'Predictive analytics',
            'Trend analysis',
            'Segmentation',
            'Data classification',
            'Recommendation engines',
            'Event detection',
          ],
        },
        {
          icon: MessageSquare,
          title: 'Personalized and contextual communication',
          text: 'Use collected data and segmentation to support relevant, timely and contextual communication.',
          bulletsTitle: 'Examples',
          bullets: [
            'Location-based notifications',
            'Context-aware messages',
            'Personalized service recommendations',
            'Citizen engagement',
            'Customer engagement',
            'Smart alerts',
          ],
        },
        {
          icon: ClipboardList,
          title: 'Field data collection',
          text: 'Enable structured data collection from users, employees, field teams or connected devices.',
          bulletsTitle: 'Examples',
          bullets: [
            'Mobile field reporting',
            'Inspection data collection',
            'Incident reporting',
            'Service feedback',
            'Asset condition reporting',
            'Distributed observations',
          ],
        },
        {
          icon: Database,
          title: 'AI-ready data services',
          text: 'Prepare crowdsensed data for use in AI systems, data spaces, analytics platforms and decision-support applications.',
          bulletsTitle: 'Examples',
          bullets: [
            'Data preparation for AI models',
            'AI-ready datasets',
            'Data space integration',
            'Analytics pipelines',
            'Decision-support dashboards',
            'AI agent context services',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Core platform capabilities',
      intro:
        'Kumuluz Crowdsensing combines distributed data collection, privacy-aware processing, analytics and AI-enhanced interpretation into one platform foundation.',
      items: [
        {
          icon: Antenna,
          title: 'Distributed data collection',
          text: 'Collect data from multiple distributed sources, including users, mobile applications, sensors, IoT devices and enterprise systems.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Mobile data collection',
            'User-generated observations',
            'IoT and sensor data collection',
            'Geolocation-based data capture',
            'Event and interaction data',
            'Field data collection',
            'Multi-source data ingestion',
          ],
        },
        {
          icon: Filter,
          title: 'Crowdsensing data processing',
          text: 'Transform raw crowdsensed data into structured, usable and reliable datasets.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Data aggregation',
            'Data validation',
            'Data cleaning',
            'Noise reduction',
            'Duplicate detection',
            'Data enrichment',
            'Reliability scoring',
          ],
        },
        {
          icon: BrainCircuit,
          title: 'AI algorithms and analytics',
          text: 'Use AI and analytics to interpret collected data and support better decisions.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Pattern detection',
            'Anomaly detection',
            'Classification',
            'Prediction and forecasting',
            'Segmentation',
            'Recommendation support',
            'Trend analysis',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Privacy-aware data handling',
          text: 'Crowdsensing platforms must handle data responsibly. Kumuluz Crowdsensing supports privacy-aware data processing patterns.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Data anonymization',
            'Aggregation before analysis',
            'Consent-aware data collection',
            'Sensitive data handling',
            'Privacy-oriented analytics',
            'Secure data transmission',
            'Responsible data use patterns',
          ],
        },
        {
          icon: MapPin,
          title: 'Geolocation and context awareness',
          text: 'Location and context are often essential in crowdsensing scenarios.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Location-aware data collection',
            'Geofencing patterns',
            'Contextual data capture',
            'Area-based analytics',
            'Movement pattern analysis',
            'Location-based notifications',
            'Spatial visualization',
          ],
        },
        {
          icon: Users,
          title: 'Segmentation and personalization',
          text: 'Use collected data to understand different groups, behaviors, locations or needs.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'User segmentation',
            'Location segmentation',
            'Behavioral segmentation',
            'Context-based grouping',
            'Personalized recommendations',
            'Targeted notifications',
            'Service personalization',
          ],
        },
        {
          icon: BarChart3,
          title: 'Dashboards and visualization',
          text: 'Make crowdsensed data understandable through dashboards, maps, reports and visual analytics.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Operational dashboards',
            'Data visualization',
            'Map-based views',
            'Trend reports',
            'Event views',
            'Segment analysis',
            'Decision-support reporting',
          ],
        },
        {
          icon: Bell,
          title: 'Alerts, triggers and workflows',
          text: 'Collected data and AI-generated insights can trigger alerts, workflows or service actions.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Rule-based triggers',
            'AI-assisted alerts',
            'Event notifications',
            'Workflow integration',
            'Service task creation',
            'Escalation patterns',
            'Action recommendation',
          ],
        },
        {
          icon: Plug,
          title: 'API and integration readiness',
          text: 'Kumuluz Crowdsensing can expose data, insights and platform capabilities through APIs and integrations.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Data APIs',
            'Analytics APIs',
            'Integration with enterprise systems',
            'Integration with smart city platforms',
            'Data export',
            'Event integration',
            'Connection with Kumuluz API',
          ],
        },
        {
          icon: Bot,
          title: 'AI agent integration',
          text: 'Crowdsensing data can provide useful real-world context for AI agents and assistants.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Context APIs for AI agents',
            'Data-driven agent support',
            'AI assistant integration',
            'Operational decision support',
            'Insight retrieval',
            'Recommendation explanation',
            'Event-based agent triggers',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'A platform architecture for crowdsensing, AI and smart services',
      body: [
        'Kumuluz Crowdsensing is designed as a platform layer for collecting, processing, analyzing and using distributed data.',
        'It connects people, devices, sensors, applications, analytics, AI algorithms, dashboards, APIs and smart service workflows into one data-driven foundation.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Data source layer',
          text: 'Users, mobile apps, IoT devices, sensors, smart infrastructure, enterprise systems and external data sources.',
        },
        {
          title: 'Data collection layer',
          text: 'Mechanisms for capturing observations, events, locations, device signals, user input and sensor data.',
        },
        {
          title: 'Processing and privacy layer',
          text: 'Data validation, cleaning, aggregation, anonymization, consent-aware processing and secure transmission.',
        },
        {
          title: 'AI and analytics layer',
          text: 'Pattern detection, anomaly detection, prediction, segmentation, recommendation and data quality support.',
        },
        {
          title: 'Visualization and insight layer',
          text: 'Dashboards, maps, reports, trends, alerts and operational views.',
        },
        {
          title: 'API and integration layer',
          text: 'APIs and connectors for exposing data, insights and events to digital platforms, enterprise systems and AI agents.',
        },
        {
          title: 'Smart service layer',
          text: 'Applications, notifications, workflows, recommendations, decision support and smart community services.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Used in the Green.Dat.AI Horizon Europe context',
      body: [
        'Kumuluz Crowdsensing has been used in the context of Green.Dat.AI, a Horizon Europe project focused on energy-efficient AI-ready data spaces.',
        'Green.Dat.AI aims to channel AI potential toward European Green Deal goals by developing energy-efficient large-scale data analytics services for industrial AI systems while reducing the environmental impact of data management processes. The project demonstrates AI-ready data services across industries such as smart energy, smart agriculture/agri-food, smart mobility and smart banking.',
        'This makes Kumuluz Crowdsensing especially relevant for scenarios where distributed data collection, AI-ready data preparation, sustainable analytics and data-driven decision-making need to work together.',
      ],
      columns: 4,
      variant: 'feature',
      items: [
        {
          title: 'AI-ready data spaces',
          text: 'Support data collection and preparation patterns that can feed AI-ready data services and analytics ecosystems.',
        },
        {
          title: 'Energy-efficient analytics context',
          text: 'Relevant for scenarios where AI and data processing must consider efficiency, sustainability and responsible data use.',
        },
        {
          title: 'Cross-industry pilots',
          text: 'Applicable to smart energy, smart agriculture, mobility, banking and other data-driven sectors.',
        },
        {
          title: 'Real-world data foundation',
          text: 'Provides mechanisms for collecting distributed real-world data that can support advanced analytics and AI services.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for smart communities and real-world engagement',
      body: [
        'Kumuluz Crowdsensing is especially suitable for smart communities, where organizations need to understand real-world needs, conditions and behavior.',
        'The platform can help collect distributed information, process it securely, analyze it with AI support and use it to improve services, infrastructure and communication.',
        'The existing Kumuluz Crowdsensing positioning highlights smart cities and communities, including data collection from sensors, mobile phones and IoT devices, aggregation, anonymization, validation, analysis and visualization of data.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Citizen and user participation',
          text: 'Collect observations, feedback and context from people using mobile and digital channels.',
        },
        {
          title: 'Smart infrastructure',
          text: 'Combine data from devices, sensors and infrastructure to support better operational visibility.',
        },
        {
          title: 'Mobility and environment',
          text: 'Analyze mobility patterns, environmental signals and location-based observations.',
        },
        {
          title: 'Service improvement',
          text: 'Use collected data and AI-enhanced insights to improve public, community or customer services.',
        },
        {
          title: 'Contextual communication',
          text: 'Send relevant messages, alerts or recommendations based on location, behavior or detected events.',
        },
        {
          title: 'Data-driven decisions',
          text: 'Support planning, operations and service design with real-world evidence.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Designed for enterprise and public-sector environments',
      body: [
        'Kumuluz Crowdsensing is designed for organizations that need control over data collection, privacy, analytics, integration and operations.',
        'It can support private, public-sector and enterprise use cases where distributed data must be collected responsibly and used for smart services, analytics or AI-ready data pipelines.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Cloud-native deployment',
          text: 'Deploy crowdsensing services in modern cloud-native environments.',
        },
        {
          title: 'Hybrid integration',
          text: 'Connect crowdsensing services with existing enterprise systems, smart city platforms or analytics environments.',
        },
        {
          title: 'Privacy-aware implementation',
          text: 'Support anonymization, aggregation and consent-aware processing patterns.',
        },
        {
          title: 'API-based integration',
          text: 'Expose data, insights and events through APIs for other systems and platforms.',
        },
        {
          title: 'AI analytics integration',
          text: 'Use AI algorithms and analytics pipelines to process crowdsensed data and generate insight.',
        },
        {
          title: 'Operational monitoring',
          text: 'Monitor data flows, events, platform usage, alerts and service behavior.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Part of the Kumuluz product family',
      body: [
        'Kumuluz Crowdsensing is part of the broader Kumuluz product family for Agentic AI, digital platforms, API management and reusable business capabilities.',
        'Together, Kumuluz products can support a full data-driven and AI-enabled architecture.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'KumuluzAI agents can use crowdsensing data and insights as real-world context for assistance, decision support and automation.',
        },
        {
          label: 'Platform',
          title: 'Kumuluz Digital Platform',
          text: 'Kumuluz Digital Platform can provide the cloud-native services, integrations and workflows around crowdsensing-based applications.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Kumuluz API can expose, secure and monitor crowdsensing data APIs, analytics APIs and integration endpoints.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Crowdsensing insights can be connected with reusable business capabilities such as notifications, cases, tasks, service requests or customer interactions.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where Kumuluz Crowdsensing fits',
      body: [
        'Kumuluz Crowdsensing is suitable for organizations that need to collect distributed data, understand real-world behavior and build AI-enhanced smart services.',
      ],
      columns: 3,
      items: [
        {
          title: 'Smart cities and public sector',
          text: 'Citizen feedback, infrastructure reporting, environmental observations, smart services and community engagement.',
        },
        {
          title: 'Energy and utilities',
          text: 'Distributed observations, demand-related insights, service feedback, infrastructure monitoring and AI-ready analytics.',
        },
        {
          title: 'Mobility and transport',
          text: 'Mobility patterns, traffic-related observations, smart routing support, event detection and user feedback.',
        },
        {
          title: 'Agriculture and agrifood',
          text: 'Field observations, distributed sensor data, environmental signals, AI-ready datasets and data-driven decision support.',
        },
        {
          title: 'Banking and services',
          text: 'Contextual engagement, customer behavior signals, service feedback and AI-enhanced segmentation.',
        },
        {
          title: 'Enterprise operations',
          text: 'Field reporting, asset observations, workforce input, service quality monitoring and operational analytics.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why Kumuluz Crowdsensing',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Distributed data collection',
          text: 'Collect data from people, mobile devices, IoT devices, sensors and enterprise systems.',
        },
        {
          title: 'AI-enhanced insight',
          text: 'Use AI algorithms to detect patterns, identify anomalies, support predictions and generate recommendations.',
        },
        {
          title: 'Privacy-aware crowdsensing',
          text: 'Support anonymization, aggregation, consent-aware processing and responsible data use.',
        },
        {
          title: 'Smart service enablement',
          text: 'Use crowdsensed data to improve services, trigger alerts, support workflows and personalize communication.',
        },
        {
          title: 'AI-ready data foundation',
          text: 'Prepare distributed data for AI models, analytics platforms, data spaces and AI agent context.',
        },
        {
          title: 'Research and innovation validation',
          text: 'Kumuluz Crowdsensing has been used in the Green.Dat.AI Horizon Europe context, connecting it with AI-ready data spaces and sustainable data analytics.',
        },
        {
          title: 'Part of the Kumuluz ecosystem',
          text: 'Integrates with KumuluzAI, Kumuluz API, Kumuluz Digital Platform and Kumuluz Business APIs.',
        },
        {
          title: 'Delivered by Sunesis',
          text: 'Kumuluz Crowdsensing is developed and delivered by Sunesis, combining enterprise software engineering, data platforms, cloud-native architecture, AI and research innovation experience.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How organizations start with Kumuluz Crowdsensing',
      intro:
        'Kumuluz Crowdsensing can be introduced gradually, starting with a focused data collection or smart service use case and evolving toward broader AI-enhanced analytics and smart community services.',
      items: [
        {
          title: 'Identify the data and service challenge',
          text: 'We define what needs to be sensed, collected, analyzed or improved — community needs, infrastructure status, user behavior, environmental signals or service feedback.',
        },
        {
          title: 'Define data sources',
          text: 'We identify relevant sources such as users, mobile apps, sensors, IoT devices, enterprise systems or external datasets.',
        },
        {
          title: 'Design privacy-aware data collection',
          text: 'We define consent, anonymization, aggregation, security and responsible data use patterns.',
        },
        {
          title: 'Configure processing and analytics',
          text: 'Data validation, aggregation, enrichment, dashboards and AI algorithms are configured according to the use case.',
        },
        {
          title: 'Integrate with services and systems',
          text: 'Crowdsensing data and insights are connected with digital services, APIs, dashboards, workflows or AI agents.',
        },
        {
          title: 'Trigger actions and decisions',
          text: 'Insights can trigger notifications, recommendations, workflows, service tasks or decision-support processes.',
        },
        {
          title: 'Evolve into AI-ready data services',
          text: 'Over time, crowdsensed data can become part of broader AI-ready data spaces, analytics services or AgenticAI use cases.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Ready to turn distributed data into AI-enhanced smart services?',
      body: [
        'Kumuluz Crowdsensing helps organizations collect, process and use distributed data from people, devices, sensors and environments.',
        'With AI-enhanced analytics, privacy-aware data handling and integration with the broader Kumuluz ecosystem, it provides a foundation for smart communities, data-driven services and AI-ready decision support.',
      ],
      primaryCta: 'Request a demo',
      secondaryCta: 'Contact us',
    },
  ],
}

const sl: ProductPageContent = {
  seo: {
    title:
      'Kumuluz Crowdsensing | AI-podprta platforma za crowdsensing in porazdeljene podatke',
    description:
      'Kumuluz Crowdsensing je AI-podprta platforma za porazdeljeno zbiranje podatkov, crowdsensing, pametne skupnosti, IoT-podprte storitve in odločanje na podlagi podatkov.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz Crowdsensing',
    title:
      'AI-podprt crowdsensing za pametne skupnosti in podatkovno vodene storitve',
    body: [
      'Kumuluz Crowdsensing organizacijam pomaga zbirati, obdelovati in uporabljati porazdeljene podatke iz ljudi, naprav, senzorjev in okolij za podporo pametnim storitvam, pametnim skupnostim in odločanju na podlagi podatkov.',
      'Platforma združuje crowdsensing, IoT-podprto zbiranje podatkov, geolokacijo, segmentacijo, analitiko in AI algoritme, da porazdeljene signale pretvori v uporabne vpoglede, priporočila in akcije.',
      'Podpira lahko pametna mesta in skupnosti, mobilnost, trajnost, vključevanje strank, terensko zbiranje podatkov, okoljski monitoring in AI-ready podatkovne storitve.',
    ],
    primaryCta: 'Naročite demo',
    secondaryCta: 'Raziščite zmožnosti platforme',
    trustLine: 'Zaupajo nam',
  },
  sections: [
    {
      type: 'cards',
      title:
        'Pametne storitve potrebujejo podatke iz resničnega sveta, ne ugibanj',
      body: [
        'Organizacije morajo vse bolj razumeti, kaj se dogaja v fizičnih prostorih, skupnostih, storitvah, infrastrukturi in interakcijah uporabnikov.',
        'Toda podatki iz resničnega sveta so pogosto razdrobljeni. Prihajajo iz različnih naprav, mobilnih aplikacij, senzorjev, uporabnikov, sistemov in okolij. Brez platforme je te podatke težko zbirati, validirati, anonimizirati, analizirati in uporabljati.',
        'Kumuluz Crowdsensing zagotavlja strukturirano platformo za zbiranje in obdelavo porazdeljenih podatkov, da lahko organizacije gradijo pametnejše storitve, razumejo vzorce iz resničnega sveta in sprejemajo boljše odločitve.',
        'Z AI algoritmi v ozadju lahko platforma podpira validacijo podatkov, zaznavanje anomalij, prepoznavanje vzorcev, napovedovanje, segmentacijo in inteligentna priporočila.',
      ],
      columns: 3,
      items: [
        {
          title: 'Razdrobljeni podatki iz resničnega sveta',
          text: 'Podatki so porazdeljeni med uporabniki, mobilnimi napravami, IoT napravami, senzorji, sistemi in okolji.',
        },
        {
          title: 'Omejena vidnost',
          text: 'Organizacije pogosto nimajo pravočasnega vpogleda v dogajanje v skupnostih, storitvah, infrastrukturi ali interakcijah s strankami.',
        },
        {
          title: 'Težko uporabni crowdsensing podatki',
          text: 'Surovi crowdsensing podatki potrebujejo validacijo, agregacijo, anonimizacijo, interpretacijo in vizualizacijo, preden postanejo uporabni.',
        },
        {
          title: 'Ročna analiza se ne skalira',
          text: 'Z naraščanjem količine podatkov ročna analiza postane prepočasna in nedosledna.',
        },
        {
          title: 'Zahteve glede zasebnosti in zaupanja',
          text: 'Crowdsensing rešitve morajo spoštovati zasebnost, varnost, privolitev, anonimizacijo in odgovorno rabo podatkov.',
        },
        {
          title: 'Nepovezane akcije',
          text: 'Vpogledi so dragoceni le, če lahko sprožijo priporočila, workflowe, opozorila ali izboljšave storitev.',
        },
      ],
    },
    {
      type: 'cards',
      title:
        'Platforma za zbiranje, obdelavo in razumevanje porazdeljenih podatkov',
      body: [
        'Kumuluz Crowdsensing je platforma za porazdeljeno zbiranje podatkov in digitalne storitve na osnovi crowdsensinga.',
        'Organizacijam omogoča zbiranje informacij od uporabnikov, mobilnih naprav, IoT naprav, senzorjev in digitalnih sistemov ter nato obdelavo, anonimizacijo, analizo in uporabo teh podatkov za pametne storitve in podporo odločanju.',
        'Platforma lahko uporablja AI algoritme za zaznavanje vzorcev, prepoznavanje anomalij, generiranje napovedi, podporo segmentaciji in pretvorbo porazdeljenih podatkov v uporabne vpoglede.',
        'Kumuluz Crowdsensing je še posebej dragocen tam, kjer morajo organizacije razumeti vedenje v resničnem svetu, uporabo storitev, okoljske signale, vzorce mobilnosti, stanje infrastrukture ali potrebe skupnosti.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Zbirajte porazdeljene podatke',
          text: 'Zberite podatke iz mobilnih aplikacij, uporabnikov, IoT naprav, senzorjev, sistemov in povezanih okolij.',
        },
        {
          title: 'Spremenite signale v vpoglede',
          text: 'Obdelajte, validirajte, agregirajte in analizirajte crowdsensing podatke za prepoznavanje vzorcev in trendov.',
        },
        {
          title: 'Uporabite AI v ozadju',
          text: 'Uporabite AI algoritme za zaznavanje anomalij, napovedovanje, segmentacijo, priporočila in inteligentno interpretacijo podatkov.',
        },
        {
          title: 'Podprite pametne storitve',
          text: 'Uporabite zbrane podatke za izboljšanje storitev, sprožanje akcij, personalizacijo komunikacije in podporo boljšim odločitvam.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AI-podprta obdelava podatkov in podpora odločanju',
      body: [
        'Crowdsensing ustvari vrednost, ko je porazdeljene podatke mogoče pretvoriti v zanesljiv vpogled. Kumuluz Crowdsensing uporablja AI algoritme in analitične tehnike, da organizacijam pomaga učinkoviteje obdelovati velike količine porazdeljenih podatkov.',
        'AI lahko platformo podpira pri prepoznavanju vzorcev podatkov, zaznavanju nenavadnih dogodkov, napovedovanju prihodnjih razmer, klasifikaciji signalov, segmentaciji uporabnikov ali lokacij in priporočanju akcij.',
        'To naredi Kumuluz Crowdsensing primeren ne le za zbiranje podatkov, ampak tudi za inteligentne storitve, ki se prilagajajo razmeram v resničnem svetu.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Zaznavanje anomalij',
          text: 'Prepoznajte nenavadne dogodke, odstopanja ali nepričakovane spremembe v zbranih podatkih.',
        },
        {
          title: 'Prepoznavanje vzorcev',
          text: 'Zaznajte ponavljajoča se vedenja, trende, vzorce gibanja, vzorce uporabe storitev ali okoljske signale.',
        },
        {
          title: 'Napovedovanje in predikcija',
          text: 'Uporabite zgodovinske in realnočasovne podatke za napovedovanje prihodnjega povpraševanja, razmer, uporabe ali dogodkov.',
        },
        {
          title: 'Segmentacija',
          text: 'Razvrstite uporabnike, območja, naprave, dogodke ali vedenja v smiselne segmente za analizo in personalizacijo storitev.',
        },
        {
          title: 'Podpora priporočilom',
          text: 'Ustvarite priporočila za uporabnike, operaterje ali storitvene ekipe na podlagi zbranih podatkov in zaznanih vzorcev.',
        },
        {
          title: 'Izboljšanje kakovosti podatkov',
          text: 'Podprite validacijo, zmanjšanje šuma, zaznavanje podvojitev in ocenjevanje zanesljivosti crowdsensing podatkov.',
        },
        {
          title: 'Generiranje konteksta za AI agente',
          text: 'Zagotovite strukturiran kontekst podatkov iz resničnega sveta, ki ga AI agenti lahko uporabijo pri pomoči uporabnikom ali podpori operativnim workflowom.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj lahko zgradite s Kumuluz Crowdsensing',
      intro:
        'Kumuluz Crowdsensing podpira pametne storitve in podatkovno vodene aplikacije, kjer so porazdeljeni podatki iz ljudi, naprav in okolij ključni.',
      items: [
        {
          icon: Building2,
          title: 'Pametna mesta in pametne skupnosti',
          text: 'Gradite storitve, ki zbirajo in uporabljajo podatke od prebivalcev, naprav, infrastrukture in okolij za izboljšanje mestnih in skupnostnih storitev.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Zbiranje povratnih informacij občanov',
            'Vpogledi v mestno mobilnost',
            'Prijavljanje težav z infrastrukturo',
            'Okoljska opazovanja',
            'Zaznavanje potreb skupnosti',
            'Optimizacija pametnih storitev',
          ],
        },
        {
          icon: Cpu,
          title: 'IoT-podprto zbiranje podatkov',
          text: 'Zbirajte in obdelujte podatke iz povezanih naprav, senzorjev in okolij.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Okoljski senzorji',
            'Senzorji mobilnosti',
            'Naprave pametne infrastrukture',
            'Povezane terenske naprave',
            'Opazovanja na podlagi lokacije',
            'Spremljanje na podlagi senzorjev',
          ],
        },
        {
          icon: BrainCircuit,
          title: 'AI-podprte analitične storitve',
          text: 'Uporabite AI algoritme za interpretacijo crowdsensing in IoT podatkov.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Zaznavanje anomalij',
            'Napovedna analitika',
            'Analiza trendov',
            'Segmentacija',
            'Klasifikacija podatkov',
            'Sistemi priporočil',
            'Zaznavanje dogodkov',
          ],
        },
        {
          icon: MessageSquare,
          title: 'Personalizirana in kontekstualna komunikacija',
          text: 'Uporabite zbrane podatke in segmentacijo za podporo relevantni, pravočasni in kontekstualni komunikaciji.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Obvestila na podlagi lokacije',
            'Kontekstno ozaveščena sporočila',
            'Personalizirana priporočila storitev',
            'Vključevanje občanov',
            'Vključevanje strank',
            'Pametna opozorila',
          ],
        },
        {
          icon: ClipboardList,
          title: 'Terensko zbiranje podatkov',
          text: 'Omogočite strukturirano zbiranje podatkov od uporabnikov, zaposlenih, terenskih ekip ali povezanih naprav.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Mobilno terensko poročanje',
            'Zbiranje podatkov o pregledih',
            'Prijavljanje incidentov',
            'Povratne informacije o storitvah',
            'Poročanje o stanju sredstev',
            'Porazdeljena opazovanja',
          ],
        },
        {
          icon: Database,
          title: 'AI-ready podatkovne storitve',
          text: 'Pripravite crowdsensing podatke za uporabo v AI sistemih, podatkovnih prostorih, analitičnih platformah in aplikacijah za podporo odločanju.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Priprava podatkov za AI modele',
            'AI-ready podatkovni nabori',
            'Integracija s podatkovnimi prostori',
            'Analitični cevovodi',
            'Nadzorne plošče za podporo odločanju',
            'Storitve konteksta za AI agente',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'capabilities',
      title: 'Osrednje zmožnosti platforme',
      intro:
        'Kumuluz Crowdsensing združuje porazdeljeno zbiranje podatkov, obdelavo z zavestjo o zasebnosti, analitiko in AI-podprto interpretacijo v eno platformno osnovo.',
      items: [
        {
          icon: Antenna,
          title: 'Porazdeljeno zbiranje podatkov',
          text: 'Zbirajte podatke iz več porazdeljenih virov, vključno z uporabniki, mobilnimi aplikacijami, senzorji, IoT napravami in poslovnimi sistemi.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Mobilno zbiranje podatkov',
            'Opazovanja, ki jih ustvarijo uporabniki',
            'Zbiranje IoT in senzorskih podatkov',
            'Zajem podatkov na podlagi geolokacije',
            'Podatki o dogodkih in interakcijah',
            'Terensko zbiranje podatkov',
            'Zajem podatkov iz več virov',
          ],
        },
        {
          icon: Filter,
          title: 'Obdelava crowdsensing podatkov',
          text: 'Surove crowdsensing podatke pretvorite v strukturirane, uporabne in zanesljive podatkovne nabore.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Agregacija podatkov',
            'Validacija podatkov',
            'Čiščenje podatkov',
            'Zmanjšanje šuma',
            'Zaznavanje podvojitev',
            'Obogatitev podatkov',
            'Ocenjevanje zanesljivosti',
          ],
        },
        {
          icon: BrainCircuit,
          title: 'AI algoritmi in analitika',
          text: 'Uporabite AI in analitiko za interpretacijo zbranih podatkov in podporo boljšim odločitvam.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Zaznavanje vzorcev',
            'Zaznavanje anomalij',
            'Klasifikacija',
            'Napovedovanje in predikcija',
            'Segmentacija',
            'Podpora priporočilom',
            'Analiza trendov',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Ravnanje s podatki z zavestjo o zasebnosti',
          text: 'Crowdsensing platforme morajo s podatki ravnati odgovorno. Kumuluz Crowdsensing podpira vzorce obdelave podatkov z zavestjo o zasebnosti.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Anonimizacija podatkov',
            'Agregacija pred analizo',
            'Zbiranje podatkov z upoštevanjem privolitve',
            'Ravnanje z občutljivimi podatki',
            'Analitika, usmerjena v zasebnost',
            'Varen prenos podatkov',
            'Vzorci odgovorne rabe podatkov',
          ],
        },
        {
          icon: MapPin,
          title: 'Geolokacija in kontekstualna ozaveščenost',
          text: 'Lokacija in kontekst sta v crowdsensing scenarijih pogosto ključna.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Zbiranje podatkov z zavedanjem lokacije',
            'Vzorci geofencinga',
            'Kontekstualni zajem podatkov',
            'Analitika na podlagi območij',
            'Analiza vzorcev gibanja',
            'Obvestila na podlagi lokacije',
            'Prostorska vizualizacija',
          ],
        },
        {
          icon: Users,
          title: 'Segmentacija in personalizacija',
          text: 'Uporabite zbrane podatke za razumevanje različnih skupin, vedenj, lokacij ali potreb.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Segmentacija uporabnikov',
            'Segmentacija lokacij',
            'Vedenjska segmentacija',
            'Razvrščanje na podlagi konteksta',
            'Personalizirana priporočila',
            'Ciljana obvestila',
            'Personalizacija storitev',
          ],
        },
        {
          icon: BarChart3,
          title: 'Nadzorne plošče in vizualizacija',
          text: 'Naredite crowdsensing podatke razumljive prek nadzornih plošč, zemljevidov, poročil in vizualne analitike.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Operativne nadzorne plošče',
            'Vizualizacija podatkov',
            'Pogledi na podlagi zemljevidov',
            'Poročila o trendih',
            'Pogledi dogodkov',
            'Analiza segmentov',
            'Poročanje za podporo odločanju',
          ],
        },
        {
          icon: Bell,
          title: 'Opozorila, sprožilci in workflowi',
          text: 'Zbrani podatki in z AI generirani vpogledi lahko sprožijo opozorila, workflowe ali storitvene akcije.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Sprožilci na podlagi pravil',
            'AI-podprta opozorila',
            'Obvestila o dogodkih',
            'Integracija z workflowi',
            'Ustvarjanje storitvenih nalog',
            'Vzorci eskalacije',
            'Priporočanje akcij',
          ],
        },
        {
          icon: Plug,
          title: 'Pripravljenost za API-je in integracije',
          text: 'Kumuluz Crowdsensing lahko izpostavi podatke, vpoglede in zmožnosti platforme prek API-jev in integracij.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Podatkovni API-ji',
            'Analitični API-ji',
            'Integracija s poslovnimi sistemi',
            'Integracija s platformami pametnih mest',
            'Izvoz podatkov',
            'Integracija dogodkov',
            'Povezava s Kumuluz API',
          ],
        },
        {
          icon: Bot,
          title: 'Integracija z AI agenti',
          text: 'Crowdsensing podatki lahko zagotovijo uporaben kontekst iz resničnega sveta za AI agente in asistente.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Kontekstni API-ji za AI agente',
            'Podatkovno vodena podpora agentom',
            'Integracija z AI asistenti',
            'Podpora operativnemu odločanju',
            'Pridobivanje vpogledov',
            'Razlaga priporočil',
            'Sprožilci agentov na podlagi dogodkov',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Platformna arhitektura za crowdsensing, AI in pametne storitve',
      body: [
        'Kumuluz Crowdsensing je zasnovan kot platformna plast za zbiranje, obdelavo, analizo in uporabo porazdeljenih podatkov.',
        'Povezuje ljudi, naprave, senzorje, aplikacije, analitiko, AI algoritme, nadzorne plošče, API-je in workflowe pametnih storitev v eno podatkovno vodeno osnovo.',
      ],
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Plast virov podatkov',
          text: 'Uporabniki, mobilne aplikacije, IoT naprave, senzorji, pametna infrastruktura, poslovni sistemi in zunanji viri podatkov.',
        },
        {
          title: 'Plast zbiranja podatkov',
          text: 'Mehanizmi za zajem opazovanj, dogodkov, lokacij, signalov naprav, uporabniškega vnosa in senzorskih podatkov.',
        },
        {
          title: 'Plast obdelave in zasebnosti',
          text: 'Validacija, čiščenje, agregacija, anonimizacija, obdelava z upoštevanjem privolitve in varen prenos podatkov.',
        },
        {
          title: 'Plast AI in analitike',
          text: 'Zaznavanje vzorcev, zaznavanje anomalij, napovedovanje, segmentacija, priporočila in podpora kakovosti podatkov.',
        },
        {
          title: 'Plast vizualizacije in vpogledov',
          text: 'Nadzorne plošče, zemljevidi, poročila, trendi, opozorila in operativni pogledi.',
        },
        {
          title: 'Plast API-jev in integracije',
          text: 'API-ji in konektorji za izpostavljanje podatkov, vpogledov in dogodkov digitalnim platformam, poslovnim sistemom in AI agentom.',
        },
        {
          title: 'Plast pametnih storitev',
          text: 'Aplikacije, obvestila, workflowi, priporočila, podpora odločanju in storitve pametnih skupnosti.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Uporabljen v kontekstu Green.Dat.AI Horizon Europe',
      body: [
        'Kumuluz Crowdsensing je bil uporabljen v kontekstu Green.Dat.AI, projekta Horizon Europe, osredotočenega na energetsko učinkovite AI-ready podatkovne prostore.',
        'Green.Dat.AI želi usmeriti potencial AI k ciljem evropskega zelenega dogovora z razvojem energetsko učinkovitih obsežnih storitev podatkovne analitike za industrijske AI sisteme, hkrati pa zmanjšati okoljski vpliv procesov upravljanja podatkov. Projekt demonstrira AI-ready podatkovne storitve v panogah, kot so pametna energetika, pametno kmetijstvo/agroživilstvo, pametna mobilnost in pametno bančništvo.',
        'To naredi Kumuluz Crowdsensing še posebej relevanten za scenarije, kjer morajo porazdeljeno zbiranje podatkov, priprava AI-ready podatkov, trajnostna analitika in odločanje na podlagi podatkov delovati skupaj.',
      ],
      columns: 4,
      variant: 'feature',
      items: [
        {
          title: 'AI-ready podatkovni prostori',
          text: 'Podprite vzorce zbiranja in priprave podatkov, ki lahko napajajo AI-ready podatkovne storitve in analitične ekosisteme.',
        },
        {
          title: 'Kontekst energetsko učinkovite analitike',
          text: 'Relevantno za scenarije, kjer morata AI in obdelava podatkov upoštevati učinkovitost, trajnost in odgovorno rabo podatkov.',
        },
        {
          title: 'Medpanožni piloti',
          text: 'Uporabno za pametno energetiko, pametno kmetijstvo, mobilnost, bančništvo in druge podatkovno vodene sektorje.',
        },
        {
          title: 'Osnova podatkov iz resničnega sveta',
          text: 'Zagotavlja mehanizme za zbiranje porazdeljenih podatkov iz resničnega sveta, ki lahko podpirajo napredno analitiko in AI storitve.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovan za pametne skupnosti in vključevanje v resničnem svetu',
      body: [
        'Kumuluz Crowdsensing je še posebej primeren za pametne skupnosti, kjer morajo organizacije razumeti potrebe, razmere in vedenje v resničnem svetu.',
        'Platforma lahko pomaga zbirati porazdeljene informacije, jih varno obdelati, analizirati s podporo AI in uporabiti za izboljšanje storitev, infrastrukture in komunikacije.',
        'Obstoječe pozicioniranje Kumuluz Crowdsensing izpostavlja pametna mesta in skupnosti, vključno z zbiranjem podatkov iz senzorjev, mobilnih telefonov in IoT naprav, agregacijo, anonimizacijo, validacijo, analizo in vizualizacijo podatkov.',
      ],
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Sodelovanje občanov in uporabnikov',
          text: 'Zbirajte opazovanja, povratne informacije in kontekst od ljudi prek mobilnih in digitalnih kanalov.',
        },
        {
          title: 'Pametna infrastruktura',
          text: 'Združite podatke iz naprav, senzorjev in infrastrukture za podporo boljši operativni vidnosti.',
        },
        {
          title: 'Mobilnost in okolje',
          text: 'Analizirajte vzorce mobilnosti, okoljske signale in opazovanja na podlagi lokacije.',
        },
        {
          title: 'Izboljšanje storitev',
          text: 'Uporabite zbrane podatke in AI-podprte vpoglede za izboljšanje javnih, skupnostnih ali storitev za stranke.',
        },
        {
          title: 'Kontekstualna komunikacija',
          text: 'Pošiljajte relevantna sporočila, opozorila ali priporočila na podlagi lokacije, vedenja ali zaznanih dogodkov.',
        },
        {
          title: 'Odločitve na podlagi podatkov',
          text: 'Podprite načrtovanje, operacije in oblikovanje storitev z dokazi iz resničnega sveta.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovan za poslovna in javna okolja',
      body: [
        'Kumuluz Crowdsensing je zasnovan za organizacije, ki potrebujejo nadzor nad zbiranjem podatkov, zasebnostjo, analitiko, integracijo in operacijami.',
        'Podpira lahko zasebne, javne in poslovne primere uporabe, kjer je treba porazdeljene podatke zbirati odgovorno in jih uporabiti za pametne storitve, analitiko ali AI-ready podatkovne cevovode.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Cloud-native namestitev',
          text: 'Namestite crowdsensing storitve v sodobna cloud-native okolja.',
        },
        {
          title: 'Hibridna integracija',
          text: 'Povežite crowdsensing storitve z obstoječimi poslovnimi sistemi, platformami pametnih mest ali analitičnimi okolji.',
        },
        {
          title: 'Implementacija z zavestjo o zasebnosti',
          text: 'Podprite vzorce anonimizacije, agregacije in obdelave z upoštevanjem privolitve.',
        },
        {
          title: 'Integracija na osnovi API-jev',
          text: 'Izpostavite podatke, vpoglede in dogodke prek API-jev za druge sisteme in platforme.',
        },
        {
          title: 'Integracija AI analitike',
          text: 'Uporabite AI algoritme in analitične cevovode za obdelavo crowdsensing podatkov in generiranje vpogledov.',
        },
        {
          title: 'Operativno spremljanje',
          text: 'Spremljajte podatkovne tokove, dogodke, uporabo platforme, opozorila in vedenje storitev.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Del družine produktov Kumuluz',
      body: [
        'Kumuluz Crowdsensing je del širše družine produktov Kumuluz za Agentic AI, digitalne platforme, upravljanje API-jev in ponovno uporabne poslovne zmožnosti.',
        'Skupaj lahko produkti Kumuluz podpirajo celovito podatkovno vodeno in AI-podprto arhitekturo.',
      ],
      items: [
        {
          label: 'AgenticAI',
          title: 'KumuluzAI Platform',
          text: 'Agenti KumuluzAI lahko uporabljajo crowdsensing podatke in vpoglede kot kontekst iz resničnega sveta za pomoč, podporo odločanju in avtomatizacijo.',
        },
        {
          label: 'Platforma',
          title: 'Kumuluz Digital Platform',
          text: 'Kumuluz Digital Platform lahko zagotovi cloud-native storitve, integracije in workflowe okoli aplikacij na osnovi crowdsensinga.',
        },
        {
          label: 'API',
          title: 'Kumuluz API',
          text: 'Kumuluz API lahko izpostavi, varuje in spremlja crowdsensing podatkovne API-je, analitične API-je in integracijske točke.',
        },
        {
          label: 'Business',
          title: 'Kumuluz Business APIs',
          text: 'Crowdsensing vpoglede je mogoče povezati s ponovno uporabnimi poslovnimi zmožnostmi, kot so obvestila, primeri, naloge, storitvene zahteve ali interakcije s strankami.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kam se umešča Kumuluz Crowdsensing',
      body: [
        'Kumuluz Crowdsensing je primeren za organizacije, ki morajo zbirati porazdeljene podatke, razumeti vedenje v resničnem svetu in graditi AI-podprte pametne storitve.',
      ],
      columns: 3,
      items: [
        {
          title: 'Pametna mesta in javni sektor',
          text: 'Povratne informacije občanov, poročanje o infrastrukturi, okoljska opazovanja, pametne storitve in vključevanje skupnosti.',
        },
        {
          title: 'Energetika in komunalne storitve',
          text: 'Porazdeljena opazovanja, vpogledi v povpraševanje, povratne informacije o storitvah, spremljanje infrastrukture in AI-ready analitika.',
        },
        {
          title: 'Mobilnost in promet',
          text: 'Vzorci mobilnosti, opazovanja v zvezi s prometom, podpora pametnemu usmerjanju, zaznavanje dogodkov in povratne informacije uporabnikov.',
        },
        {
          title: 'Kmetijstvo in agroživilstvo',
          text: 'Terenska opazovanja, porazdeljeni senzorski podatki, okoljski signali, AI-ready podatkovni nabori in podpora odločanju na podlagi podatkov.',
        },
        {
          title: 'Bančništvo in storitve',
          text: 'Kontekstualno vključevanje, signali vedenja strank, povratne informacije o storitvah in AI-podprta segmentacija.',
        },
        {
          title: 'Poslovne operacije',
          text: 'Terensko poročanje, opazovanja sredstev, vnos delovne sile, spremljanje kakovosti storitev in operativna analitika.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz Crowdsensing',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Porazdeljeno zbiranje podatkov',
          text: 'Zbirajte podatke iz ljudi, mobilnih naprav, IoT naprav, senzorjev in poslovnih sistemov.',
        },
        {
          title: 'AI-podprt vpogled',
          text: 'Uporabite AI algoritme za zaznavanje vzorcev, prepoznavanje anomalij, podporo napovedim in generiranje priporočil.',
        },
        {
          title: 'Crowdsensing z zavestjo o zasebnosti',
          text: 'Podprite anonimizacijo, agregacijo, obdelavo z upoštevanjem privolitve in odgovorno rabo podatkov.',
        },
        {
          title: 'Omogočanje pametnih storitev',
          text: 'Uporabite crowdsensing podatke za izboljšanje storitev, sprožanje opozoril, podporo workflowom in personalizacijo komunikacije.',
        },
        {
          title: 'AI-ready podatkovna osnova',
          text: 'Pripravite porazdeljene podatke za AI modele, analitične platforme, podatkovne prostore in kontekst za AI agente.',
        },
        {
          title: 'Validacija z raziskavami in inovacijami',
          text: 'Kumuluz Crowdsensing je bil uporabljen v kontekstu Green.Dat.AI Horizon Europe, kar ga povezuje z AI-ready podatkovnimi prostori in trajnostno podatkovno analitiko.',
        },
        {
          title: 'Del ekosistema Kumuluz',
          text: 'Integrira se s KumuluzAI, Kumuluz API, Kumuluz Digital Platform in Kumuluz Business APIs.',
        },
        {
          title: 'Dostavlja Sunesis',
          text: 'Kumuluz Crowdsensing razvija in dostavlja Sunesis, ki združuje poslovni razvoj programske opreme, podatkovne platforme, cloud-native arhitekturo, AI in izkušnje z raziskovalnimi inovacijami.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako organizacije začnejo s Kumuluz Crowdsensing',
      intro:
        'Kumuluz Crowdsensing je mogoče uvajati postopoma, začenši z osredotočenim primerom zbiranja podatkov ali pametne storitve in razvijati proti širši AI-podprti analitiki in storitvam pametnih skupnosti.',
      items: [
        {
          title: 'Prepoznajte podatkovni in storitveni izziv',
          text: 'Opredelimo, kaj je treba zaznati, zbrati, analizirati ali izboljšati — potrebe skupnosti, stanje infrastrukture, vedenje uporabnikov, okoljske signale ali povratne informacije o storitvah.',
        },
        {
          title: 'Opredelite vire podatkov',
          text: 'Prepoznamo relevantne vire, kot so uporabniki, mobilne aplikacije, senzorji, IoT naprave, poslovni sistemi ali zunanji podatkovni nabori.',
        },
        {
          title: 'Zasnujte zbiranje podatkov z zavestjo o zasebnosti',
          text: 'Opredelimo vzorce privolitve, anonimizacije, agregacije, varnosti in odgovorne rabe podatkov.',
        },
        {
          title: 'Konfigurirajte obdelavo in analitiko',
          text: 'Validacija podatkov, agregacija, obogatitev, nadzorne plošče in AI algoritmi se konfigurirajo glede na primer uporabe.',
        },
        {
          title: 'Integrirajte s storitvami in sistemi',
          text: 'Crowdsensing podatki in vpogledi se povežejo z digitalnimi storitvami, API-ji, nadzornimi ploščami, workflowi ali AI agenti.',
        },
        {
          title: 'Sprožite akcije in odločitve',
          text: 'Vpogledi lahko sprožijo obvestila, priporočila, workflowe, storitvene naloge ali procese za podporo odločanju.',
        },
        {
          title: 'Razvijte v AI-ready podatkovne storitve',
          text: 'Sčasoma lahko crowdsensing podatki postanejo del širših AI-ready podatkovnih prostorov, analitičnih storitev ali AgenticAI primerov uporabe.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Ste pripravljeni porazdeljene podatke spremeniti v AI-podprte pametne storitve?',
      body: [
        'Kumuluz Crowdsensing organizacijam pomaga zbirati, obdelovati in uporabljati porazdeljene podatke iz ljudi, naprav, senzorjev in okolij.',
        'Z AI-podprto analitiko, ravnanjem s podatki z zavestjo o zasebnosti in integracijo s širšim ekosistemom Kumuluz zagotavlja osnovo za pametne skupnosti, podatkovno vodene storitve in AI-ready podporo odločanju.',
      ],
      primaryCta: 'Naročite demo',
      secondaryCta: 'Kontaktirajte nas',
    },
  ],
}

export const crowdsensingPage: Record<LanguageCode, ProductPageContent> = {
  en,
  sl,
}
