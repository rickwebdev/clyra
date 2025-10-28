// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below

export const EMAILJS_CONFIG = {
  serviceId: 'service_clyra_studios', // Replace with your service ID
  templateId: 'template_wordpress_repair', // Replace with your template ID
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your public key
};

// Email template variables that will be sent:
// - from_name: User's name
// - from_email: User's email
// - phone: User's phone number
// - website: User's website URL
// - issue: Description of the problem
// - to_email: rick@clyrastudios.com
// - subject: WordPress Repair Request from [Name]
// - message: Formatted message with all details
