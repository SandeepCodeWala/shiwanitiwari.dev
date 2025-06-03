import { SERVICES_DATA } from '@/lib/constants';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      title="What I Offer"
      subtitle="From concept to deployment, I provide comprehensive development services to bring your ideas to life."
      className="bg-muted/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES_DATA.map((service, index) => (
           <div key={service.id} className="animate-slide-in" style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'backwards' }}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
