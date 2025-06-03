import { PRICING_PLANS_DATA } from '@/lib/constants';
import { PricingCard } from '@/components/shared/PricingCard';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export function PricingSection() {
  return (
    <SectionWrapper
      id="pricing"
      title="Flexible Pricing Plans"
      subtitle="Choose a plan that suits your needs, or contact me for a custom quote for your unique project."
      className="bg-muted/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
        {PRICING_PLANS_DATA.map((plan, index) => (
          <div key={plan.id} className="animate-slide-in" style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'backwards' }}>
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
