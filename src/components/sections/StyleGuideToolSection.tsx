'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { extractWebsiteColorScheme } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Loader2, Palette, AlertTriangle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
  websiteUrl: z.string().url({ message: 'Please enter a valid URL (e.g., https://example.com)' }),
});

type FormValues = z.infer<typeof FormSchema>;

export function StyleGuideToolSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [colorScheme, setColorScheme] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setColorScheme(null);
    setError(null);
    try {
      const result = await extractWebsiteColorScheme(data);
      if (result.error) {
        setError(result.error);
        toast({
          title: "Error Extracting Colors",
          description: result.error,
          variant: "destructive",
        });
      } else if (result.colorScheme && result.colorScheme.length > 0) {
        setColorScheme(result.colorScheme);
        toast({
          title: "Colors Extracted!",
          description: "Found a new color scheme for your inspiration.",
        });
      } else {
        setError("No color scheme found or an unexpected error occurred.");
         toast({
          title: "No Colors Found",
          description: "Could not extract a color scheme from the provided URL.",
          variant: "default",
        });
      }
    } catch (e: any) {
      const errorMessage = e.message || 'Failed to extract color scheme. Please try again.';
      setError(errorMessage);
      toast({
        title: "Extraction Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper
      id="style-tool"
      title="AI Style Guide Tool"
      subtitle="Enter a website URL to extract its primary color scheme. Powered by AI."
    >
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary font-headline">
            <Palette className="h-6 w-6" /> Extract Color Scheme
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Input
                {...register('websiteUrl')}
                placeholder="https://example.com"
                className={`transition-colors ${errors.websiteUrl ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                aria-invalid={errors.websiteUrl ? "true" : "false"}
              />
              {errors.websiteUrl && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4"/> {errors.websiteUrl.message}
                </p>
              )}
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Extracting...
                </>
              ) : (
                'Extract Colors'
              )}
            </Button>
          </form>

          {error && !isLoading && (
            <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-md text-sm flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> {error}
            </div>
          )}

          {colorScheme && colorScheme.length > 0 && !isLoading && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Extracted Colors:</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {colorScheme.map((color, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-md border border-border"
                      style={{ backgroundColor: color }}
                      title={color}
                      aria-label={`Color swatch ${color}`}
                    />
                    <p className="mt-2 text-xs text-muted-foreground font-mono">{color}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
