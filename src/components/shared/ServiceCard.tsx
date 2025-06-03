import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;
  return (
    <Card className="h-full flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <IconComponent className="h-8 w-8" />
        </div>
        <CardTitle className="font-headline text-xl md:text-2xl text-primary">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
