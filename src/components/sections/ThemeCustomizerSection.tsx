
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateThemeFromColor } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Loader2, Palette, AlertTriangle, Sparkles, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import type { GenerateThemeColorsOutput } from '@/ai/flows/generate-theme-colors';
import { cn } from '@/lib/utils';

const FormSchema = z.object({
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, { message: 'Enter a valid HEX color (e.g., #A020F0)' }),
});

type FormValues = z.infer<typeof FormSchema>;

const camelToKebab = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const SUGGESTED_COLORS = [
  { name: 'Royal Purple', hex: '#7857FF' },
  { name: 'Ocean Blue', hex: '#1A73E8' },
  { name: 'Forest Green', hex: '#188038' },
  { name: 'Sunset Orange', hex: '#F97316' },
  { name: 'Ruby Red', hex: '#DC2626' },
  { name: 'Teal', hex: '#14B8A6' },
];

export function ThemeCustomizerSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [appliedTheme, setAppliedTheme] = useState<GenerateThemeColorsOutput | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue, // Get setValue from useForm
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      primaryColor: '#9D2EC5', // Default to current primary
    }
  });

  const watchedPrimaryColor = watch('primaryColor');

  const handleSuggestedColorClick = (hex: string) => {
    setValue('primaryColor', hex, { shouldValidate: true }); // Update form value and trigger validation
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setAppliedTheme(null);
    try {
      const result = await generateThemeFromColor(data);
      if (result.error) {
        toast({
          title: "Error Generating Theme",
          description: result.error,
          variant: "destructive",
        });
      } else if (result.themeColors) {
        const themeColors = result.themeColors;
        Object.entries(themeColors).forEach(([key, value]) => {
          const cssVarName = `--${camelToKebab(key)}`;
          if (document.documentElement) {
            document.documentElement.style.setProperty(cssVarName, value as string);
          }
        });
        setAppliedTheme(themeColors);
        toast({
          title: "Theme Applied!",
          description: `New theme generated based on ${data.primaryColor}.`,
          className: "bg-green-500 text-white", // Using Tailwind for success toast
        });
      } else {
         toast({
          title: "No Theme Generated",
          description: "Could not generate a theme. Please try a different color.",
          variant: "default",
        });
      }
    } catch (e: any) {
      const errorMessage = e.message || 'Failed to generate theme. Please try again.';
      toast({
        title: "Generation Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper
      id="theme-customizer"
      title="AI Theme Customizer"
      subtitle="Enter a primary HEX color, or pick a suggestion, and let AI craft a unique theme for this portfolio instantly!"
    >
      <Card className="max-w-2xl mx-auto shadow-xl animate-slide-in" style={{animationDelay: '0.2s'}}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary font-headline">
            <Sparkles className="h-6 w-6" /> Customize Your Theme
          </CardTitle>
          <CardDescription>
            Input your desired primary color (e.g., #1A73E8) and watch the site transform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  {...register('primaryColor')}
                  placeholder="#RRGGBB"
                  className={cn(
                    'flex-grow transition-colors text-base md:text-sm',
                    errors.primaryColor ? 'border-destructive focus-visible:ring-destructive' : ''
                  )}
                  aria-invalid={errors.primaryColor ? "true" : "false"}
                />
                <div 
                  className="w-10 h-10 rounded-md border border-border" 
                  style={{ backgroundColor: errors.primaryColor ? 'transparent' : watchedPrimaryColor || '#9D2EC5' }}
                  title="Current color preview"
                />
              </div>
              {errors.primaryColor && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4"/> {errors.primaryColor.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Or pick a suggestion:</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_COLORS.map((color) => (
                  <Button
                    key={color.hex}
                    type="button"
                    variant="outline"
                    onClick={() => handleSuggestedColorClick(color.hex)}
                    className={cn(
                        "h-9 px-3 text-xs rounded-md border transition-all",
                        watchedPrimaryColor === color.hex ? 'ring-2 ring-primary ring-offset-2 border-primary' : 'hover:border-primary/70'
                    )}
                    title={`Use ${color.name} (${color.hex})`}
                  >
                    <div 
                      className="w-4 h-4 rounded-sm mr-2 border border-black/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.name}
                    {watchedPrimaryColor === color.hex && <Check className="ml-2 h-3 w-3 text-primary"/>}
                  </Button>
                ))}
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-base">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Theme...
                </>
              ) : (
                <>
                  Apply AI Theme <Palette className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          {appliedTheme && !isLoading && (
            <div className="mt-8 p-4 bg-muted/50 rounded-md">
              <h3 className="text-md font-semibold mb-3 text-foreground">Theme Applied Successfully!</h3>
              <p className="text-sm text-muted-foreground">
                Primary Color Used: <span className="font-mono p-1 rounded bg-popover" style={{color: appliedTheme.primaryForeground, backgroundColor: `hsl(${appliedTheme.primary})`}}>{appliedTheme.primary}</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Background: <span className="font-mono p-1 rounded bg-popover">{appliedTheme.background}</span>, 
                Foreground: <span className="font-mono p-1 rounded bg-popover">{appliedTheme.foreground}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
