# Email Setup Guide

## Server-Side Email Configuration

The contact form now sends emails directly through your server instead of opening the user's email client.

### Setup Steps

1. **Create `.env.local` file** in your project root with:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. **For Gmail users:**
   - Enable 2-factor authentication on your Google account
   - Go to Google Account Settings > Security > App Passwords
   - Generate a new app password for "Mail"
   - Use this app password (not your regular password) as `EMAIL_PASS`

3. **For other email providers:**
   - Update the `service` in `/src/app/api/contact/route.ts`
   - Common services: 'gmail', 'outlook', 'yahoo', 'hotmail'
   - Or use SMTP configuration with host, port, etc.

### How It Works

- User fills out the form
- Form data is sent to `/api/contact` endpoint
- Server sends formatted email to `rick@clyrastudios.com`
- User sees success/error message
- No email client required for users

### Benefits

- ✅ Professional form experience
- ✅ No email client dependency
- ✅ Formatted HTML emails
- ✅ Server-side validation
- ✅ Better user experience
