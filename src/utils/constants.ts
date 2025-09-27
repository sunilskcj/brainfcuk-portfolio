import { Service, Technology, Project } from '../types';

export const SERVICES: Service[] = [
  // Strategy Services
  {
    id: 'research-planning',
    title: 'Research & Planning',
    description: 'In-depth market research and strategic planning to ensure your digital project succeeds from day one.',
    icon: 'TrendingUp',
    features: [
      'Market Research & Analysis',
      'Competitive Intelligence',
      'User Research & Personas',
      'Digital Strategy Planning',
      'Project Roadmap Development',
      'ROI Analysis & Forecasting'
    ],
    technologies: ['Analytics Tools', 'Survey Platforms', 'Research Methodologies', 'Strategic Planning']
  },
  {
    id: 'system-analysis',
    title: 'System Analysis',
    description: 'Comprehensive analysis of existing systems and infrastructure to optimize performance and scalability.',
    icon: 'Users',
    features: [
      'System Architecture Review',
      'Performance Auditing',
      'Security Assessment',
      'Scalability Planning',
      'Integration Analysis',
      'Technology Stack Evaluation'
    ],
    technologies: ['System Architecture', 'Performance Testing', 'Security Auditing', 'Code Analysis']
  },
  {
    id: 'ux-prototyping',
    title: 'UX Prototyping',
    description: 'Create intuitive user experiences through comprehensive UX research, wireframing, and interactive prototyping.',
    icon: 'Palette',
    features: [
      'User Journey Mapping',
      'Wireframing & Mockups',
      'Interactive Prototypes',
      'Usability Testing',
      'Design System Creation',
      'Accessibility Compliance'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer']
  },
  {
    id: 'technical-consultation',
    title: 'Technical Consultation',
    description: 'Expert guidance on technology strategy, architecture decisions, and digital transformation initiatives.',
    icon: 'Users',
    features: [
      'Technology Selection',
      'Architecture Planning',
      'Code Reviews',
      'Performance Optimization',
      'Team Training',
      'Digital Transformation'
    ],
    technologies: ['Technical Leadership', 'Architecture Design', 'Code Quality', 'Best Practices']
  },

  // Design Services
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Create compelling brand identities that resonate with your target audience and drive business growth.',
    icon: 'Palette',
    features: [
      'Logo Design & Brand Identity',
      'Brand Guidelines Development',
      'Visual Identity Systems',
      'Brand Strategy & Positioning',
      'Marketing Collateral Design',
      'Brand Asset Management'
    ],
    technologies: ['Adobe Creative Suite', 'Brand Strategy', 'Design Systems', 'Visual Design']
  },
  {
    id: 'ui-design',
    title: 'Interface Design',
    description: 'Design beautiful, functional user interfaces that provide exceptional user experiences across all devices.',
    icon: 'Palette',
    features: [
      'UI/UX Design',
      'Responsive Web Design',
      'Mobile App Design',
      'Design System Development',
      'Component Libraries',
      'Cross-platform Consistency'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Design Tokens', 'Component Libraries']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Professional graphic design services for marketing materials, presentations, and digital assets.',
    icon: 'Palette',
    features: [
      'Marketing Material Design',
      'Presentation Design',
      'Social Media Graphics',
      'Print Design',
      'Infographic Creation',
      'Digital Asset Design'
    ],
    technologies: ['Adobe Creative Suite', 'Canva Pro', 'Print Production', 'Digital Design']
  },

  // Technology Services
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Build scalable, modern web applications using cutting-edge technologies and best practices.',
    icon: 'Code2',
    features: [
      'Custom Web Applications',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development & Integration',
      'Responsive Design'
    ],
    technologies: ['React', 'Next.js', '.NET', 'Node.js', 'TypeScript', 'PostgreSQL']
  },
  {
    id: 'mobile-development',
    title: 'Mobile Applications',
    description: 'Create powerful mobile applications for iOS and Android with seamless user experiences.',
    icon: 'Smartphone',
    features: [
      'Cross-platform Development',
      'Native iOS & Android',
      'React Native Solutions',
      'Mobile Backend Services',
      'App Store Deployment',
      'Push Notifications'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    description: 'Comprehensive e-commerce platforms with payment integration, inventory management, and analytics.',
    icon: 'ShoppingCart',
    features: [
      'Online Store Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing Systems',
      'Customer Management',
      'Analytics & Reporting'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal']
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    description: 'Custom WordPress solutions including themes, plugins, and complete website development.',
    icon: 'Code2',
    features: [
      'Custom Theme Development',
      'Plugin Development',
      'WordPress Optimization',
      'Content Migration',
      'Security Hardening',
      'Maintenance & Support'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Themes', 'Plugin Development']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Leverage cloud platforms for scalable, reliable, and cost-effective infrastructure solutions.',
    icon: 'Cloud',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'CI/CD Pipelines',
      'Containerization',
      'Microservices Architecture',
      'Monitoring & Analytics'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
  },

  // Digital Marketing Services
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with comprehensive SEO strategies.',
    icon: 'TrendingUp',
    features: [
      'Keyword Research & Analysis',
      'On-page SEO Optimization',
      'Technical SEO Audits',
      'Content Strategy',
      'Link Building',
      'Performance Tracking'
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog']
  },
  {
    id: 'sem-advertising',
    title: 'Search Engine Marketing',
    description: 'Drive targeted traffic and conversions through strategic paid search campaigns and PPC advertising.',
    icon: 'Megaphone',
    features: [
      'Google Ads Management',
      'Bing Ads Campaigns',
      'Keyword Strategy',
      'Ad Copy Optimization',
      'Landing Page Optimization',
      'Conversion Tracking'
    ],
    technologies: ['Google Ads', 'Bing Ads', 'Google Analytics', 'Conversion Tracking', 'A/B Testing']
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage your audience through strategic social media marketing campaigns.',
    icon: 'Megaphone',
    features: [
      'Social Media Strategy',
      'Content Creation & Curation',
      'Community Management',
      'Influencer Partnerships',
      'Social Media Analytics',
      'Brand Reputation Management'
    ],
    technologies: ['Facebook Business', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok', 'Social Media Tools']
  },
  {
    id: 'social-media-advertising',
    title: 'Social Media Advertising',
    description: 'Reach your target audience with precision through strategic social media advertising campaigns.',
    icon: 'Megaphone',
    features: [
      'Facebook & Instagram Ads',
      'LinkedIn Advertising',
      'Twitter Ads',
      'TikTok Advertising',
      'Audience Targeting',
      'Campaign Optimization'
    ],
    technologies: ['Facebook Ads Manager', 'LinkedIn Campaign Manager', 'Twitter Ads', 'TikTok Ads Manager']
  }
];

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend', proficiency: 90 },
  { name: 'TypeScript', icon: '📘', category: 'frontend', proficiency: 85 },
  { name: 'Next.js', icon: '▲', category: 'frontend', proficiency: 80 },
  { name: 'Vue.js', icon: '💚', category: 'frontend', proficiency: 75 },

  // Backend
  { name: 'C#/.NET', icon: '🔷', category: 'backend', proficiency: 95 },
  { name: 'Node.js', icon: '💚', category: 'backend', proficiency: 85 },
  { name: 'Python', icon: '🐍', category: 'backend', proficiency: 80 },
  { name: 'Java', icon: '☕', category: 'backend', proficiency: 75 },

  // Database
  { name: 'PostgreSQL', icon: '🐘', category: 'database', proficiency: 90 },
  { name: 'MySQL', icon: '🗄️', category: 'database', proficiency: 85 },
  { name: 'MongoDB', icon: '🍃', category: 'database', proficiency: 80 },
  { name: 'Redis', icon: '🔴', category: 'database', proficiency: 75 },

  // Cloud
  { name: 'AWS', icon: '☁️', category: 'cloud', proficiency: 85 },
  { name: 'Google Cloud', icon: '🌐', category: 'cloud', proficiency: 80 },
  { name: 'Azure', icon: '🔵', category: 'cloud', proficiency: 75 },

  // Mobile
  { name: 'React Native', icon: '📱', category: 'mobile', proficiency: 85 },
  { name: 'Flutter', icon: '🦋', category: 'mobile', proficiency: 70 },

  // DevOps
  { name: 'Docker', icon: '🐳', category: 'devops', proficiency: 85 },
  { name: 'Kubernetes', icon: '⛵', category: 'devops', proficiency: 80 },
  { name: 'GitHub Actions', icon: '🚀', category: 'devops', proficiency: 85 },
  { name: 'Terraform', icon: '🏗️', category: 'devops', proficiency: 75 }
];

export const PROJECTS: Project[] = [
  {
    id: 'fintech-app',
    title: 'FinTech Application',
    description: 'Comprehensive financial management platform with real-time transactions, analytics, and multi-tenant architecture.',
    longDescription: 'A full-stack fintech application built with .NET 9, React 18, and PostgreSQL. Features include user management, account handling, transaction processing, and detailed financial analytics. Deployed on Google Cloud Platform with Kubernetes orchestration.',
    image: '/projects/fintech-app.jpg',
    technologies: ['.NET 9', 'React 18', 'TypeScript', 'PostgreSQL', 'Docker', 'GCP', 'Kubernetes'],
    category: 'fintech',
    status: 'in-progress'
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Management System',
    description: 'Patient management system with appointment scheduling, medical records, and telemedicine integration.',
    longDescription: 'Modern healthcare platform enabling seamless patient-doctor interactions, appointment management, and secure medical record storage. Built with compliance to healthcare regulations.',
    image: '/projects/healthcare-portal.jpg',
    technologies: ['C#', 'React', 'MySQL', 'AWS', 'Docker'],
    category: 'web',
    status: 'planned'
  },
  {
    id: 'startup-mvp',
    title: 'E-commerce Startup MVP',
    description: 'Rapid MVP development for e-commerce startup with payment integration and inventory management.',
    longDescription: 'Quick-to-market e-commerce solution with modern UX, payment processing, inventory management, and admin dashboard. Optimized for performance and scalability.',
    image: '/projects/ecommerce-mvp.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Vercel'],
    category: 'web',
    status: 'planned'
  }
];

export const COMPANY_INFO = {
  name: 'Vox',
  tagline: 'Design for Outcomes. Build with Empathy. Grow with Purpose.',
  description: 'Vox is a full-service digital agency serving clients in over 30 countries. With 4+ years of combined experience, we deliver comprehensive solutions across strategy, design, technology, and digital marketing. Our ROI-driven approach and adaptable engagement models make us the perfect partner for startups, agencies, and businesses seeking digital transformation.',
  mission: 'To empower businesses with strategic digital solutions that drive measurable outcomes, foster meaningful connections, and create sustainable growth through innovative design, cutting-edge technology, and data-driven marketing.',
  specialties: [
    'Strategy & Research',
    'UI/UX Design & Branding',
    'Web & Mobile Development',
    'E-commerce Solutions',
    'Digital Marketing & SEO',
    'Cloud Solutions & DevOps'
  ],
  differentiators: [
    'Global reach across 30+ countries',
    'ROI-driven approach to all projects',
    'Comprehensive technology capabilities',
    'Adaptable engagement models',
    'Intellectual property protection protocols',
    'White-label service options'
  ],
  email: 'hello@vox.agency',
  phone: '+1 (555) 123-4567',
  address: 'Global Digital Agency - Remote First',
  social: {
    github: 'https://github.com/vox-agency',
    linkedin: 'https://linkedin.com/company/vox-agency',
    twitter: 'https://twitter.com/vox_agency'
  }
};