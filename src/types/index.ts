// Type aliases for better type safety
export type Status = 'completed' | 'in-progress' | 'planned';
export type ProjectCategory = 'web' | 'mobile' | 'cloud' | 'fintech';
export type TechnologyCategory = 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'devops';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export interface Technology {
  name: string;
  icon: string;
  category: TechnologyCategory;
  proficiency: number; // 0-100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  demoUrl?: string;
  codeUrl?: string;
  status: Status;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  company?: string;
  phone?: string;
  budget?: string; // Made optional
  timeline?: string; // Made optional
}

// Additional utility types
export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}
