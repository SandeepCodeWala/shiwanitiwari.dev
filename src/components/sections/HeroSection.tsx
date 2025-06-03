import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background to-primary/10">
      <div className="absolute inset-0 opacity-30">
        {/* Subtle background pattern or image can go here */}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & UI/UX Enthusiast
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-foreground animate-slide-in" style={{ animationDelay: '0.4s' }}>
            Hi, I&apos;m <span className="text-primary">Shiwani Tiwari</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '0.6s' }}>
            I build beautiful, responsive, and performant web and mobile applications. Passionate about creating intuitive user experiences and solving complex problems with code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-primary rotate-90" />
      </div>
    </section>
  );
}
