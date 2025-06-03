
import type { Project, Service, Skill, PricingPlan } from './types';
import { Smartphone, Monitor, Palette, Codepen, Layers, Zap, ShoppingCart, Users, Server, Brain, Bot, DollarSign, CheckCircle, ShieldCheck, GitBranch, Figma, Settings, BarChart, Database, Code, Sparkles } from 'lucide-react';

export const APP_NAME = "ShiwaniTiwari.Dev";

export const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#theme-customizer', label: 'Theme AI' },
  { href: '#contact', label: 'Contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with features like product listing, cart, checkout, and user authentication.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    tags: ['React', 'NodeJS', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: '2',
    title: 'Social Media App',
    description: 'A mobile-first social media application for sharing updates and connecting with friends.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'social network',
    tags: ['React Native', 'Firebase', 'iOS', 'Android'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'Project Management Tool',
    description: 'A web application to help teams manage projects, tasks, and deadlines efficiently.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'team collaboration',
    tags: ['React', 'Redux', 'NodeJS', 'PostgreSQL'],
    codeUrl: '#',
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Mobile App Development',
    description: 'Crafting high-performance, native-like mobile applications for iOS and Android using React Native.',
    icon: Smartphone,
    features: ['Cross-platform compatibility', 'Custom UI/UX design', 'API integration', 'Push notifications'],
  },
  {
    id: '2',
    title: 'Website Development',
    description: 'Building responsive and modern websites with Reactjs, Next.js, and robust backend solutions using NodeJS.',
    icon: Monitor,
    features: ['SEO-friendly architecture', 'CMS integration', 'E-commerce solutions', 'Performance optimization'],
  },
  {
    id: '3',
    title: 'UI/UX Redesigning',
    description: 'Revamping existing applications and websites with a focus on user experience and modern design principles using Figma.',
    icon: Palette,
    features: ['User research & analysis', 'Wireframing & prototyping', 'Usability testing', 'Visual design upgrade'],
  },
  {
    id: '4',
    title: 'Maintenance & Support',
    description: 'Providing ongoing maintenance, updates, and support for your digital products to ensure smooth operation.',
    icon: Settings,
    features: ['Bug fixes & troubleshooting', 'Performance monitoring', 'Security updates', 'Feature enhancements'],
  },
  {
    id: '5',
    title: 'Logo & Brand Design',
    description: 'Creating unique and memorable logos and brand identities that resonate with your target audience.',
    icon: Codepen,
    features: ['Conceptualization & sketching', 'Vector logo design', 'Brand style guides', 'Marketing collateral design'],
  },
];

export const SKILLS_DATA: Skill[] = [
  { id: 's1', name: 'React Native', category: 'Mobile', icon: Smartphone },
  { id: 's2', name: 'React.js', category: 'Frontend', icon: Code },
  { id: 's3', name: 'Next.js', category: 'Frontend', icon: Layers },
  { id: 's4', name: 'Node.js', category: 'Backend', icon: Server },
  { id: 's5', name: 'Express.js', category: 'Backend', icon: Zap },
  { id: 's6', name: 'MongoDB', category: 'Database', icon: Database },
  { id: 's7', name: 'PostgreSQL', category: 'Database', icon: Database },
  { id: 's8', name: 'Android Development', category: 'Mobile', icon: Smartphone },
  { id: 's9', name: 'iOS Development', category: 'Mobile', icon: Smartphone },
  { id: 's10', name: 'Figma', category: 'Design', icon: Figma },
  { id: 's11', name: 'JavaScript', category: 'Frontend', icon: Code },
  { id: 's12', name: 'TypeScript', category: 'Frontend', icon: Code },
  { id: 's13', name: 'HTML5 & CSS3', category: 'Frontend', icon: Code },
  { id: 's14', name: 'Git & GitHub', category: 'Tools', icon: GitBranch },
  { id: 's15', name: 'REST APIs', category: 'Backend', icon: Server },
  { id: 's16', name: 'GraphQL', category: 'Backend', icon: Server },
];

export const PRICING_PLANS_DATA: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Basic Website',
    price: '$500',
    frequency: 'one-time',
    features: ['Up to 5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO Setup'],
    ctaText: 'Get Started',
  },
  {
    id: 'p2',
    name: 'Mobile App (MVP)',
    price: '$2500',
    frequency: 'one-time',
    features: ['iOS & Android (React Native)', 'Up to 5 Screens', 'Basic Backend Setup', 'App Store Submission Help'],
    isPopular: true,
    ctaText: 'Choose Plan',
  },
  {
    id: 'p3',
    name: 'Full Stack Project',
    price: 'Custom',
    frequency: 'project-based',
    features: ['Web and/or Mobile App', 'Custom Features', 'Database Design', 'Ongoing Support Option'],
    ctaText: 'Request Quote',
  },
   {
    id: 'p4',
    name: 'Hourly Consultation',
    price: '$75',
    frequency: 'per hour',
    features: ['Technical Advice', 'Code Review', 'Problem Solving', 'Architecture Planning'],
    ctaText: 'Book Session',
  }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: GitBranch },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Users },
  // Add more social links here
];
