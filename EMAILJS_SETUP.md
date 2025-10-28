# EmailJS Setup Guide

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (100 emails/month free)

### 2. Add Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the setup instructions
- **Service ID**: Copy this (e.g., `service_abc123`)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

**Subject**: `WordPress Repair Request from {{from_name}}`

**Content**:
```
New WordPress Repair Request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Website: {{website}}

Issue Description:
{{issue}}

This request came from the WordPress Mechanic landing page.

Please respond within 2 hours for priority service.
```

- **Template ID**: Copy this (e.g., `template_xyz789`)

### 4. Get Public Key
- Go to "Account" → "General"
- Copy your **Public Key** (e.g., `abc123def456`)

### 5. Update Configuration
- Open `src/lib/emailjs.ts`
- Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_abc123', // Your actual service ID
  templateId: 'template_xyz789', // Your actual template ID
  publicKey: 'abc123def456', // Your actual public key
};
```

### 6. Test the Form
- Go to `http://localhost:3000/wordpress-mechanic`
- Fill out the form and submit
- Check your email (rick@clyrastudios.com)

## Email Template Variables Available

The form sends these variables to your email template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{website}}` - User's website URL
- `{{issue}}` - Description of the problem

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify all three IDs are correct
- Make sure your email service is active

**Emails not arriving?**
- Check spam folder
- Verify email service is properly connected
- Check EmailJS dashboard for delivery status

## Security Notes

- EmailJS public key is safe to expose in client-side code
- No sensitive data is stored
- Free tier includes 100 emails/month
- Upgrade to paid plan for more emails and features
