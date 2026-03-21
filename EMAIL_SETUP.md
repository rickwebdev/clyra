# Email setup (contact forms)

Forms POST to `/api/contact/`. The API sends mail with **[Resend](https://resend.com/)** (transactional). Your **mailbox** (Google Workspace, Fastmail, etc.) is separate—you verify a domain (or use Resend’s test sender) in Resend for the **from** address.

## Local development

Create `.env.local` in the project root:

```
RESEND_API_KEY=re_xxx...
RESEND_FROM_EMAIL=Clyra Studios <notifications@yourdomain.com>
```

Restart `npm run dev` after changing env vars.

- **API key:** [Resend → API Keys](https://resend.com/api-keys).
- **From address:** Must use an address on a [verified domain](https://resend.com/docs/dashboard/domains/introduction), or Resend’s onboarding domain for testing (see Resend docs).

`RESEND_FROM_EMAIL` can be a plain email or `Name <email@domain.com>`.

Quick check: open `GET /api/contact/` in the browser—it reports whether `RESEND_API_KEY` is loaded (useful for debugging; consider removing or locking down that handler on a public site).

## Production (Netlify / Vercel)

Add **`RESEND_API_KEY`** and **`RESEND_FROM_EMAIL`** in the host’s environment variables. Remove old **`SENDGRID_*`** variables if they are still set.

If the key is missing, the API still returns **200** with `Form received (email not configured)`—so the UI can look “successful” with no email.

## Legacy

Older SendGrid and nodemailer-based code paths are no longer used; the active route is `src/app/api/contact/route.ts` (Resend).
