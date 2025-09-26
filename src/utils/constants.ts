import { Service, Technology, Project } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Application Development',
    description: 'Build scalable, modern web applications using cutting-edge technologies like .NET, React, and cloud services.',
    icon: 'Code2',
    features: [
      'Custom Web Applications',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Enterprise Dashboards',
      'API Development & Integration',
      'Responsive Design'
    ],
    technologies: ['C#', '.NET Core', 'React', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
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
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions & DevOps',
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
    technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
  },
  {
    id: 'consulting',
    title: 'Technology Consulting',
    description: 'Expert guidance on technology strategy, architecture decisions, and digital transformation.',
    icon: 'Users',
    features: [
      'Technical Architecture',
      'Code Reviews',
      'Performance Optimization',
      'Security Assessments',
      'Team Training',
      'Project Management'
    ],
    technologies: ['Agile', 'Scrum', 'Technical Leadership', 'Code Quality']
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
  tagline: 'Your shortcut to digital excellence',
  description: 'We are a team of young, passionate professionals with 4+ years of industry experience, dedicated to building trust and hustling hard for the future. We specialize in cutting-edge technologies and deliver exceptional digital solutions.',
  mission: 'To empower startups and businesses with innovative technology solutions that drive growth, build trust, and create lasting impact in their industries.',
  email: 'contact@vox.dev',
  phone: '+1 (555) 123-4567',
  address: 'Remote-First Company',
  social: {
    github: 'https://github.com/vox-dev',
    linkedin: 'https://linkedin.com/company/vox-dev',
    twitter: 'https://twitter.com/vox_dev'
  }
};