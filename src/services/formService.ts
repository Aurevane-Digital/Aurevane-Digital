/**
 * Form Submission Service using Web3Forms
 * Access Key: 5997eddf-c01e-4be8-b0e2-3e3638e28b10
 * Forwards all website submissions directly to user's registered inbox.
 */

export const WEB3FORMS_ACCESS_KEY = '5997eddf-c01e-4be8-b0e2-3e3638e28b10';

export interface SubmitFormOptions {
  formType: 'Website Check / Audit' | 'Direct Contact Inquiry' | 'Package Booking Reservation';
  subject: string;
  name: string;
  email: string;
  data: Record<string, string | number | boolean | undefined>;
}

export async function submitToWeb3Forms(
  options: SubmitFormOptions
): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: options.subject,
      from_name: 'Aurevane Digital Client Portal',
      name: options.name,
      email: options.email,
      replyto: options.email,
      'Form Type': options.formType,
      'Submitted At': new Date().toLocaleString('en-US', {
        timeZoneName: 'short',
      }),
      ...options.data,
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return {
      success: result.success === true,
      message: result.message || (result.success ? 'Form submitted successfully' : 'Submission failed'),
    };
  } catch (error) {
    console.error('Web3Forms dispatch error:', error);
    // Return gracefully so user UI flow is not blocked
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Network error during form submission',
    };
  }
}
