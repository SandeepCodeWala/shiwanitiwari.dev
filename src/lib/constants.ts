
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
    title: 'GlamCode- Luxury Home Salon',
    description: 'Glam Code is an Upscale Fully-Equipped Home Salon Services start-up, initiated by a mother and daughter-in-law duo.',
    imageUrl: 'https://sandyrn.netlify.app/images/glam.png',
    imageHint: 'online store',
    tags: ['Website','Mobile Application','React', 'NodeJS', 'MongoDB', 'React Native'],
    liveUrl: 'https://www.glamcode.in/',
    codeUrl: 'https://apps.apple.com/in/app/glamcode/id6449648391',
  },
  {
    id: '2',
    title: 'JSQuestion: AI Interviews',
    description: 'Interview Questions, Videos, Quizzess, User Post and many more are available on JSQuestion app.',
    imageUrl: 'https://play-lh.googleusercontent.com/3LBZdzR7N5OLvMTReQS4puVdP_hq9-WGeGT7huP4RqdiZaasnD_i6AX990TIjwfXPctd=w480-h960-rw',
    imageHint: 'social network',
    tags: ['React Native', 'Firebase', 'iOS', 'Android'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.jsquestion',
  },
  {
    id: '4',
    title: 'SeaPeople: Boat, Fish, Paddle',
    description: 'SeaPeople makes GPS boat tracking social. We house your entire marine journey in one spot  whether you are sailing, boating, or on a yacht, and you get to share it with your social network. Enhance your real-world moments & social connections while growing your network of friends around the world. All water connects; we are all sea people.',
    imageUrl: 'https://sandyrn.netlify.app/images/sea.png',
    imageHint: 'Team collaboration',
    tags: ['React Native', 'Firebase', 'Redux', 'NodeJS','MongoDB'],
    codeUrl: 'https://seapeopleapp.com/',
    liveUrl:'https://apps.apple.com/us/app/seapeople-boat-fish-paddle/id6447652420'
  },
  {
    id: '5',
    title: 'Ittzy',
    description: 'Ittzy - Stay Informed, Stay Connected Discover whats happening in your city, explore local trends, and share your stories. Local Marketplace: Ittzy also serves as a marketplace for promoting local businesses. Post offers or browse deals in your city across various categories based on your location.',
    imageUrl: 'https://play-lh.googleusercontent.com/ZR75OHUv2NSVhCERXBZLtilbPePuK4TKPVvRhL_XWi6CJiggzCNoERUiumNe3b0wtAU=w480-h960-rw',
    imageHint: 'Team collaboration',
    tags: ['Website','Mobile Application','React Native', 'Firebase', 'Redux', 'NodeJS','MongoDB','PHP'],
    codeUrl: 'https://ittzy.com/',
    liveUrl:'https://play.google.com/store/apps/details?id=com.ittzyapp.app'
  },
  {
    id: '6',
    title: 'ThressJS Demo',
    description: 'A web application to help teams manage projects, tasks, and deadlines efficiently.',
    imageUrl: 'https://sandyrn.netlify.app/images/hero.svg',
    imageHint: 'Team collaboration',
    tags: ['React', 'ThreeJS', 'Redux'],
    codeUrl: 'https://sandeepcodewala.netlify.app/',
    
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
    price: '$149',
    frequency: 'one-time',
    features: ['Up to 5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO Setup'],
    ctaText: 'Get Started',
  },
  {
    id: 'p2',
    name: 'Mobile App (MVP)',
    price: '$499',
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
    price: '$10',
    frequency: 'per hour',
    features: ['Technical Advice', 'Code Review', 'Problem Solving', 'Architecture Planning'],
    ctaText: 'Book Session',
  }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/SandeepCodeWala', icon: GitBranch },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shiwani-tiwari-7b4757192/', icon: Users },
  // Add more social links here
];
