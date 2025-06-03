
'use server';
/**
 * @fileOverview Generates a full color theme based on a primary color using AI.
 *
 * - generateThemeColors - A function that takes a primary hex color and returns a full theme palette.
 * - GenerateThemeColorsInput - The input type for the generateThemeColors function.
 * - GenerateThemeColorsOutput - The return type for the generateThemeColors function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThemeColorsInputSchema = z.object({
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid hex color format. Example: #RRGGBB").describe('The primary hex color for the theme (e.g., #FF0000).'),
});
export type GenerateThemeColorsInput = z.infer<typeof GenerateThemeColorsInputSchema>;

const ThemeColorsSchema = z.object({
  background: z.string().describe("HSL value string for background (e.g., '0 0% 100%')"),
  foreground: z.string().describe("HSL value string for foreground (e.g., '222 47% 11%')"),
  card: z.string().describe("HSL value string for card background"),
  cardForeground: z.string().describe("HSL value string for card foreground"),
  popover: z.string().describe("HSL value string for popover background"),
  popoverForeground: z.string().describe("HSL value string for popover foreground"),
  primary: z.string().describe("HSL value string for primary color"),
  primaryForeground: z.string().describe("HSL value string for primary foreground"),
  secondary: z.string().describe("HSL value string for secondary color"),
  secondaryForeground: z.string().describe("HSL value string for secondary foreground"),
  muted: z.string().describe("HSL value string for muted color"),
  mutedForeground: z.string().describe("HSL value string for muted foreground"),
  accent: z.string().describe("HSL value string for accent color"),
  accentForeground: z.string().describe("HSL value string for accent foreground"),
  destructive: z.string().describe("HSL value string for destructive color (e.g., a reddish tone)"),
  destructiveForeground: z.string().describe("HSL value string for destructive foreground"),
  border: z.string().describe("HSL value string for border color"),
  input: z.string().describe("HSL value string for input background color"),
  ring: z.string().describe("HSL value string for ring color (focus indicator)"),
  sidebarBackground: z.string().describe("HSL value string for sidebar background"),
  sidebarForeground: z.string().describe("HSL value string for sidebar foreground"),
  sidebarPrimary: z.string().describe("HSL value string for sidebar primary color"),
  sidebarPrimaryForeground: z.string().describe("HSL value string for sidebar primary foreground"),
  sidebarAccent: z.string().describe("HSL value string for sidebar accent color"),
  sidebarAccentForeground: z.string().describe("HSL value string for sidebar accent foreground"),
  sidebarBorder: z.string().describe("HSL value string for sidebar border color"),
  sidebarRing: z.string().describe("HSL value string for sidebar ring color"),
}).describe("A comprehensive theme palette with HSL values.");

export type GenerateThemeColorsOutput = z.infer<typeof ThemeColorsSchema>;

export async function generateThemeColors(input: GenerateThemeColorsInput): Promise<GenerateThemeColorsOutput> {
  return generateThemeColorsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThemeColorsPrompt',
  input: {schema: GenerateThemeColorsInputSchema},
  output: {schema: ThemeColorsSchema},
  prompt: `You are an expert color palette designer and color theorist.
Given a primary color in hexadecimal format (e.g., #FF0000), generate a complete, harmonious, and WCAG AA accessible color theme for a web application. The theme should be suitable for a modern, professional portfolio website.

The input primary color ({{{primaryColor}}}) should be used as the basis for the "primary" CSS variable in the theme.

Output a JSON object with the exact keys specified in the output schema. Each key's value must be a string representing HSL values in the format "H S% L%" (e.g., "210 40% 96%"). Do NOT include the "hsl()" wrapper or any other text, just the HSL values string.

Ensure good contrast ratios, especially between foreground and background colors. For example, 'foreground' on 'background', 'cardForeground' on 'card', 'primaryForeground' on 'primary', etc., should meet WCAG AA standards.
The 'destructive' color should be a reddish tone suitable for error messages.
The 'accent' color should complement the 'primary' color.

Input Primary Color: {{{primaryColor}}}
`,
});

const generateThemeColorsFlow = ai.defineFlow(
  {
    name: 'generateThemeColorsFlow',
    inputSchema: GenerateThemeColorsInputSchema,
    outputSchema: ThemeColorsSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error("AI failed to generate theme colors.");
    }
    return output;
  }
);
