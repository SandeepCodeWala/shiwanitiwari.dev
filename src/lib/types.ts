import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ElementType; // Allow custom SVG components too
  features?: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon?: LucideIcon | React.ElementType;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Design' | 'Tools';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  frequency: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}
