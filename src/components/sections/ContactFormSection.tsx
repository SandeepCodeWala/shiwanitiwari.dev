'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2, Send, AlertTriangle, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }).optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactFormSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        toast({
          title: 'Error Sending Message',
          description: result.error || 'An unknown error occurred.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="Have a project in mind or just want to say hi? Fill out the form below or reach out via email."
      className="bg-muted/30"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="max-w-md animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Get in Touch</h3>
          <p className="text-muted-foreground mb-6">
            I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
          </p>
          <div className="space-y-3 text-muted-foreground mb-6">
            <p>Email: <a href="mailto:sandyrnjs@gmail.com" className="text-primary hover:underline">sandyrnjs@gmail.com</a></p>
            <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-primary" />
                <Link href="https://www.linkedin.com/in/shiwani-tiwari-7b4757192/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Connect on LinkedIn
                </Link>
            </div>
            <p>Based in: Your City, Your Country</p>
          </div>
           <div className="mt-8">
             <Image 
                src="https://placehold.co/500x350.png" 
                alt="Shiwani Tiwari - Get in Touch" 
                width={500} 
                height={350} 
                className="rounded-lg shadow-lg"
                data-ai-hint="communication abstract"
              />
           </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-xl animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</Label>
            <Input id="name" {...register('name')} placeholder="John Doe" aria-invalid={errors.name ? "true" : "false"} className={errors.name ? 'border-destructive focus-visible:ring-destructive': ''}/>
            {errors.name && <p className="text-sm text-destructive mt-1 flex items-center gap-1"><AlertTriangle className="h-4 w-4"/> {errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</Label>
            <Input id="email" type="email" {...register('email')} placeholder="you@example.com" aria-invalid={errors.email ? "true" : "false"} className={errors.email ? 'border-destructive focus-visible:ring-destructive': ''}/>
            {errors.email && <p className="text-sm text-destructive mt-1 flex items-center gap-1"><AlertTriangle className="h-4 w-4"/> {errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject (Optional)</Label>
            <Input id="subject" {...register('subject')} placeholder="Project Inquiry" aria-invalid={errors.subject ? "true" : "false"} className={errors.subject ? 'border-destructive focus-visible:ring-destructive': ''}/>
            {errors.subject && <p className="text-sm text-destructive mt-1 flex items-center gap-1"><AlertTriangle className="h-4 w-4"/> {errors.subject.message}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</Label>
            <Textarea id="message" {...register('message')} rows={5} placeholder="Your message here..." aria-invalid={errors.message ? "true" : "false"} className={errors.message ? 'border-destructive focus-visible:ring-destructive': ''}/>
            {errors.message && <p className="text-sm text-destructive mt-1 flex items-center gap-1"><AlertTriangle className="h-4 w-4"/> {errors.message.message}</p>}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
