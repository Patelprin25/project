export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  image: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 'esg-aadhar',
    title: 'ESG Aadhar',
    shortDescription: 'Comprehensive ESG identity and verification system for Indian businesses to establish their sustainability credentials.',
    longDescription: `Our ESG Aadhar service provides a unique digital identity for businesses in India, verifying and documenting their Environmental, Social, and Governance (ESG) practices. This innovative system helps organizations establish their sustainability credentials and demonstrate compliance with evolving ESG standards.

We assist companies in building their ESG Aadhar profile through detailed assessments, documentation, and verification processes. Our experts guide you through data collection, performance evaluation, and continuous monitoring to maintain an up-to-date and credible ESG identity.`,
    benefits: [
      'Establish credible ESG credentials',
      'Streamlined verification process',
      'Enhanced stakeholder trust',
      'Simplified regulatory compliance',
      'Competitive advantage in Indian market'
    ],
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: '🆔'
  },
  {
    id: 'esg',
    title: 'ESG Consulting',
    shortDescription: 'Comprehensive guidance to develop and implement effective ESG strategies aligned with your business goals.',
    longDescription: `ESG (Environmental, Social, Governance) consulting provides organizations with expert guidance on embedding sustainability into their core business strategy. Our consultants conduct thorough assessments of your current practices, identify gaps and opportunities, and develop tailored roadmaps for improvement.

We help you set meaningful ESG goals, implement effective measurement systems, and create transparent reporting frameworks that satisfy stakeholders while driving real operational improvements. Our holistic approach ensures your ESG initiatives create both business value and positive impact.`,
    benefits: [
      'Improved risk management and resilience',
      'Enhanced brand reputation and stakeholder trust',
      'Attract and retain environmentally conscious customers',
      'Access to sustainable financing options',
      'Compliance with evolving regulations'
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '🌱'
  },
  {
    id: 'ghg-reporting',
    title: 'GHG Emission Reporting',
    shortDescription: 'Accurate greenhouse gas emissions measurement, reporting, and verification to meet regulatory requirements.',
    longDescription: `Our GHG (Greenhouse Gas) Emission Reporting service helps organizations accurately measure, report, and verify their carbon footprint in accordance with global standards like the GHG Protocol. We assist in collecting activity data across your operations, applying appropriate emission factors, and calculating your Scope 1, 2, and 3 emissions.

Our experts ensure your GHG inventory is comprehensive, accurate, and defensible, ready for disclosure to stakeholders, sustainability platforms, or regulatory bodies. We also identify emission hotspots and provide strategic recommendations for reduction initiatives.`,
    benefits: [
      'Compliance with mandatory reporting regulations',
      'Identification of emission reduction opportunities',
      'Robust data for setting science-based targets',
      'Enhanced credibility with investors and customers',
      'Support for carbon neutrality goals'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '🌡️'
  },
  {
    id: 'pcf',
    title: 'PCF Reporting',
    shortDescription: `Detailed assessment and reporting of your products' carbon footprints throughout their lifecycle.`,
    longDescription: `Our Product Carbon Footprint (PCF) Reporting service provides a comprehensive assessment of the greenhouse gas emissions associated with each stage of your products' lifecycle. Using methodologies aligned with ISO 14067 and the GHG Protocol Product Standard, we analyze emissions from raw material extraction through manufacturing, distribution, use, and end-of-life.

Our detailed PCF assessments enable you to identify carbon hotspots in your product lifecycle, prioritize reduction efforts, differentiate your products in the marketplace, and meet the growing demand for climate-transparent products.`,
    benefits: [
      'Product differentiation in a climate-conscious market',
      'Identification of emission hotspots in product lifecycle',
      'Support for eco-design and product innovation',
      'Enhanced supply chain transparency',
      'Compliance with emerging product carbon disclosure requirements'
    ],
    image: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '📊'
  },
  {
    id: 'brsr',
    title: 'BRSR Reporting',
    shortDescription: 'Expert guidance for Business Responsibility and Sustainability Reporting to meet Indian regulatory requirements.',
    longDescription: `Our BRSR (Business Responsibility and Sustainability Reporting) service supports Indian companies in meeting SEBI's enhanced disclosure requirements. We guide you through the comprehensive BRSR framework, helping you report effectively on environmental, social, and governance parameters.

Our experts assist in gathering relevant data, establishing appropriate metrics, and crafting compelling narratives that showcase your sustainability journey. We ensure your BRSR submission is not just compliant but also leverages your sustainability initiatives to enhance stakeholder confidence and corporate reputation.`,
    benefits: [
      'Regulatory compliance with SEBI requirements',
      'Enhanced transparency and stakeholder trust',
      'Structured approach to sustainability management',
      'Improved corporate governance',
      'Competitive advantage in the Indian market'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '📝'
  },
  {
    id: 'ecovadis',
    title: 'EcoVadis Certification',
    shortDescription: 'Expert support to achieve and maintain EcoVadis certification, improving your sustainability rating.',
    longDescription: `Our EcoVadis Certification service helps organizations successfully navigate the assessment process to achieve and improve their EcoVadis rating. We provide end-to-end support, beginning with a gap analysis against EcoVadis criteria across environment, labor practices, ethics, and sustainable procurement.

Our consultants develop strategic action plans to address identified gaps, assist in gathering and organizing required documentation, and prepare compelling responses to the assessment questionnaire. We help you showcase your sustainability initiatives effectively and implement improvements to enhance your rating in subsequent assessments.`,
    benefits: [
      'Access to new business opportunities with EcoVadis partners',
      'Competitive advantage in sustainability-focused supply chains',
      'Structured approach to sustainability improvement',
      'Enhanced credibility with stakeholders',
      'Benchmarking against industry peers'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '🏆'
  },
  {
    id: 'sedex',
    title: 'SEDEX Certification',
    shortDescription: 'Comprehensive support for SEDEX membership, SMETA audits, and ethical supply chain verification.',
    longDescription: `Our SEDEX (Supplier Ethical Data Exchange) service supports organizations in demonstrating their commitment to ethical business practices throughout their supply chain. We guide you through SEDEX membership setup, Self-Assessment Questionnaire (SAQ) completion, and preparation for SMETA (Sedex Members Ethical Trade Audit) audits.

Our consultants help you implement robust systems to address the four pillars of SMETA: labor standards, health and safety, environment, and business ethics. We support continuous improvement of your ethical practices, ensuring you meet the expectations of buyers and strengthen your position in global supply chains.`,
    benefits: [
      'Enhanced market access to SEDEX member buyers',
      'Reduced audit duplication through shared audit results',
      'Improved supplier relationships and supply chain transparency',
      'Demonstration of ethical business commitment',
      'Risk reduction in labor practices and human rights'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '🔍'
  },
  {
    id: 'iso',
    title: 'ISO Certification',
    shortDescription: 'Expert guidance for implementing and certifying ISO environmental management systems.',
    longDescription: `Our ISO Certification service helps organizations implement and obtain certification for key environmental and sustainability management standards, including ISO 14001 (Environmental Management), ISO 50001 (Energy Management), and ISO 14064 (Greenhouse Gas Accounting).

Our consultants guide you through every step, from initial gap assessment and system design to implementation, internal auditing, and certification audit preparation. We develop tailored management systems that conform to ISO requirements while enhancing operational efficiency and supporting your sustainability objectives.`,
    benefits: [
      'Internationally recognized validation of your management systems',
      'Structured approach to environmental risk management',
      'Enhanced operational efficiency and resource conservation',
      'Compliance with regulatory requirements',
      'Improved stakeholder confidence and market credibility'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '📜'
  },
  {
    id: 'iscc-plus',
    title: 'ISCC PLUS Certification',
    shortDescription: 'Support for achieving International Sustainability & Carbon Certification for bio-based materials.',
    longDescription: `Our ISCC PLUS (International Sustainability and Carbon Certification) service supports organizations in achieving certification for sustainable, circular, and bio-based materials across various supply chains. We guide you through implementing the rigorous ISCC PLUS requirements, focusing on traceability, chain of custody, and sustainability verification.

Our experts help you establish robust management systems, prepare required documentation, train relevant staff, and navigate the certification audit process. We ensure your certification provides credible sustainability claims for your products and materials, opening access to premium markets.`,
    benefits: [
      'Verified sustainability claims for bio-based and circular materials',
      'Access to markets demanding certified sustainable inputs',
      'Enhanced supply chain transparency and traceability',
      'Support for circular economy initiatives',
      'Competitive advantage in sustainability-conscious industries'
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '♻️'
  },
  {
    id: 'grs',
    title: 'GRS Certification',
    shortDescription: 'Expert guidance for Global Recycled Standard certification for textile and other industries.',
    longDescription: `Our GRS (Global Recycled Standard) Certification service supports manufacturers, brands, and retailers in verifying recycled content and responsible production practices. We guide you through implementing GRS requirements for chain of custody, environmental practices, social responsibility, and chemical restrictions.

Our consultants help you establish appropriate documentation systems, train staff, conduct internal assessments, and prepare for certification audits. We ensure your GRS certification enables credible communication about recycled materials and responsible practices throughout your product lifecycle.`,
    benefits: [
      'Verified claims about recycled content in products',
      'Access to environmentally conscious markets and partners',
      'Demonstration of commitment to circular economy principles',
      'Enhanced brand reputation for sustainability leadership',
      'Structured approach to responsible material sourcing'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '🔄'
  },
  {
    id: 'tfs',
    title: 'TFS Compliance',
    shortDescription: 'Comprehensive support for meeting Transboundary Shipment of Waste regulations and compliance requirements.',
    longDescription: `Our TFS (Transfrontier Shipment of Waste) Compliance service helps organizations navigate the complex regulatory landscape governing the international movement of waste materials. We provide guidance on classification, notification requirements, consent procedures, and documentation for waste shipments across borders.

Our experts ensure you understand and fulfill all obligations under the Basel Convention, OECD Decision, and regional regulations like the EU Waste Shipment Regulation. We help you implement robust compliance systems, train staff, and manage the end-to-end administrative process for legal and responsible waste shipments.`,
    benefits: [
      'Legal compliance with international waste shipment regulations',
      'Risk mitigation for transboundary material movements',
      'Efficient administrative processes for waste transfers',
      'Enhanced environmental responsibility in waste management',
      'Support for circular economy initiatives involving cross-border material flows'
    ],
    image: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: '🌐'
  }
];

export default services;