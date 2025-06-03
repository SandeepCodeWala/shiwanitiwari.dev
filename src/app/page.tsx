import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { StyleGuideToolSection } from '@/components/sections/StyleGuideToolSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <SkillsSection />
        <PricingSection />
        <StyleGuideToolSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
