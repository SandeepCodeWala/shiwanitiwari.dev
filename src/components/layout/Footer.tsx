import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto py-8 px-4 md:px-6 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="https://placehold.co/500x350.png"
            alt="Shiwani Tiwari - Mobile App & Website Development"
            width={500}
            height={350}
            className="rounded-lg shadow-md"
            data-ai-hint="developer portrait"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          {SOCIAL_LINKS.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Designed & Developed with <span className="text-red-500">&hearts;</span>
        </p>
      </div>
    </footer>
  );
}
