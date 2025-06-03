'use server';

/**
 * @fileOverview Extracts the color scheme from a website design URL.
 *
 * - extractColorScheme - A function that takes a URL and returns the extracted color scheme.
 * - ExtractColorSchemeInput - The input type for the extractColorScheme function.
 * - ExtractColorSchemeOutput - The return type for the extractColorScheme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractColorSchemeInputSchema = z.object({
  websiteUrl: z.string().url().describe('The URL of the website design.'),
});
export type ExtractColorSchemeInput = z.infer<typeof ExtractColorSchemeInputSchema>;

const ExtractColorSchemeOutputSchema = z.object({
  colorScheme: z
    .array(z.string().regex(/^#[0-9A-Fa-f]{6}$/))
    .describe('An array of hexadecimal color codes extracted from the website.'),
});
export type ExtractColorSchemeOutput = z.infer<typeof ExtractColorSchemeOutputSchema>;

export async function extractColorScheme(input: ExtractColorSchemeInput): Promise<ExtractColorSchemeOutput> {
  return extractColorSchemeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractColorSchemePrompt',
  input: {schema: ExtractColorSchemeInputSchema},
  output: {schema: ExtractColorSchemeOutputSchema},
  prompt: `You are an expert web designer.
  Extract the dominant color scheme from the website at the following URL.
  Return a JSON array of hexadecimal color codes. Only include the hex codes, and nothing else.

  URL: {{{websiteUrl}}}

  Example output: ["#FFFFFF", "#000000", "#F0F0F0"]
  `,
});

const extractColorSchemeFlow = ai.defineFlow(
  {
    name: 'extractColorSchemeFlow',
    inputSchema: ExtractColorSchemeInputSchema,
    outputSchema: ExtractColorSchemeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
