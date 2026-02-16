import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? 'Set' : 'Not set',
    SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL || 'rick@clyrastudios.com',
    NODE_ENV: process.env.NODE_ENV
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, website, issue, formType, newsletterOptIn } = body;

    // Validate required fields
    if (!name || !email || !website || !issue) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if SendGrid API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.log('SendGrid API key not configured, using fallback');
      // Fallback: Log the form data and return success
      console.log('Form submission received:', {
        name,
        email,
        phone,
        website,
        issue,
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { message: 'Form received (email not configured)' },
        { status: 200 }
      );
    }

    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Email content
    const isGrowth = formType === 'growth-application' || (typeof issue === 'string' && issue.includes('Form Type: growth-application'));
    const isAudit = formType === 'site-audit' || (typeof issue === 'string' && issue.includes('Form Type: site-audit'));
    const isRfp = formType === 'rfp' || (typeof issue === 'string' && issue.includes('Form Type: rfp'));

    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'rick@clyrastudios.com';
    
    const msg = {
      to: 'rick@clyrastudios.com',
      from: fromEmail,
      replyTo: email,
      subject: isGrowth 
        ? `Growth Website System Application — ${name}`
        : isAudit
        ? `Site Audit Request — ${name}`
        : isRfp
        ? `RFP Request — ${name}`
        : `WordPress Repair Request — ${name}`,
      html: `
        <h2>${isGrowth ? 'New Growth Website System Application' : isAudit ? 'New Site Audit Request' : isRfp ? 'New Request for Proposal' : 'New WordPress Repair Request'}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Website:</strong> <a href="${website}">${website}</a></p>
        ${typeof newsletterOptIn !== 'undefined' ? `<p><strong>Newsletter Opt-in:</strong> ${newsletterOptIn ? 'Yes' : 'No'}</p>` : ''}
        <p><strong>Issue Description:</strong></p>
        <p>${issue.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This request came from the ${isGrowth ? 'Growth Website System apply page' : isAudit ? 'Site Audit page' : isRfp ? 'RFP page' : 'WordPress Mechanic landing page'}.</em></p>
      `,
    };

    // Send email via SendGrid
    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      sendgridApiKey: process.env.SENDGRID_API_KEY ? 'Set' : 'Not set',
      sendgridFromEmail: process.env.SENDGRID_FROM_EMAIL || 'rick@clyrastudios.com'
    });
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
