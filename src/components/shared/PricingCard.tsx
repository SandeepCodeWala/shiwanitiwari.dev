import type { PricingPlan } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className={cn(
      "h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-xl",
      plan.isPopular ? "border-primary ring-2 ring-primary relative" : "border-border"
    )}>
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-md">
          Popular
        </div>
      )}
      <CardHeader className="p-6 text-center">
        <CardTitle className="font-headline text-2xl md:text-3xl mb-2 text-primary">{plan.name}</CardTitle>
        <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
            {plan.frequency !== 'project-based' && <span className="text-sm font-semibold text-muted-foreground">/{plan.frequency}</span>}
        </div>
        {plan.price === 'Custom' && <CardDescription className="mt-1 text-sm">Tailored to your needs</CardDescription>}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <Check className="h-5 w-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button 
          size="lg" 
          className={cn(
            "w-full",
            plan.isPopular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-accent hover:bg-accent/90 text-accent-foreground"
          )}
        >
          {plan.ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}
