import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 animate-fade-in', className)}
      {...props}
      style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
    >
      <div className={cn('container mx-auto px-4 md:px-6', contentClassName)}>
        {(title || subtitle) && (
          <div className="mb-10 md:mb-14 text-center">
            {title && (
              <h2 className={cn('font-headline text-3xl md:text-4xl font-bold text-primary mb-3', titleClassName)}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto', subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
