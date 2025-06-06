
'use server';

import { z } from 'zod';
import { generateThemeColors as aiGenerateThemeColors, type GenerateThemeColorsOutput } from '@/ai/flows/generate-theme-colors';

// Schema for Theme Customizer input
const GenerateThemeInputSchema = z.object({
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, { message: 'Invalid HEX color format. Please use #RRGGBB.' }),
});

export async function generateThemeFromColor(
  input: z.infer<typeof GenerateThemeInputSchema>
): Promise<{ themeColors?: GenerateThemeColorsOutput; error?: string }> {
  const validatedInput = GenerateThemeInputSchema.safeParse(input);
  if (!validatedInput.success) {
    return { error: validatedInput.error.errors.map(e => e.message).join(', ') };
  }

  try {
    const result = await aiGenerateThemeColors({ primaryColor: validatedInput.data.primaryColor });
    return { themeColors: result };
  } catch (error: any) {
    console.error('Error generating theme colors:', error);
    let errorMessage = 'Failed to generate theme due to an AI processing error.';
    if (error && typeof error.message === 'string') {
      errorMessage = error.message;
    }
    if (error && error.details) { // Genkit specific error
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
    // Simulate sending an email.
    // In a real application, you would integrate an email service (e.g., SendGrid, Resend, Nodemailer) here.
    console.log('Contact form submitted. Data:', validatedData.data);
    console.log(`Simulating email dispatch to sandyrnjs@gmail.com`);
    console.log(`Email Subject: New Contact Form Submission - ${validatedData.data.subject || 'No Subject'}`);
    console.log(`Email Body:
      Name: ${validatedData.data.name}
      Email: ${validatedData.data.email}
      Subject: ${validatedData.data.subject || 'N/A'}
      Message: ${validatedData.data.message}
    `);
    
    // Simulate an API call or email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Error submitting contactForm:', error);
    return { success: false, error: 'Failed to submit form. Please try again later.' };
  }
}
