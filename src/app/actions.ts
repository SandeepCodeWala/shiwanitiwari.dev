'use server';

import { z } from 'zod';
import { extractColorScheme as aiExtractColorScheme } from '@/ai/flows/extract-color-scheme';

// Schema for Style Guide Tool input
const ExtractColorSchemeInputSchema = z.object({
  websiteUrl: z.string().url(),
});

export async function extractWebsiteColorScheme(
  input: z.infer<typeof ExtractColorSchemeInputSchema>
): Promise<{ colorScheme?: string[]; error?: string }> {
  const validatedInput = ExtractColorSchemeInputSchema.safeParse(input);
  if (!validatedInput.success) {
    return { error: 'Invalid URL provided.' };
  }

  try {
    const result = await aiExtractColorScheme({ websiteUrl: validatedInput.data.websiteUrl });
    return { colorScheme: result.colorScheme };
  } catch (error: any) {
    console.error('Error extracting color scheme:', error);
    // Check if the error object has a message property
    let errorMessage = 'Failed to extract color scheme due to an AI processing error.';
    if (error && typeof error.message === 'string') {
      errorMessage = error.message;
    }
    // More specific error handling based on error structure from Genkit if available
    if (error && error.details) {
       errorMessage = `AI Error: ${error.details}`;
    }
    return { error: errorMessage };
  }
}

// Schema for Contact Form input
const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

export async function submitContactForm(
  data: z.infer<typeof ContactFormSchema>
): Promise<{ success: boolean; error?: string }> {
  const validatedData = ContactFormSchema.safeParse(data);
  if (!validatedData.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  try {
    // In a real application, you would send an email or save to a database here.
    // For this example, we'll just log the data.
    console.log('Contact form submitted:', validatedData.data);
    
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form. Please try again later.' };
  }
}
