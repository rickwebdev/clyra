import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Required for static export
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set',
    SMTP_HOST: process.env.SMTP_HOST || 'mail.clyrastudios.com',
    SMTP_PORT: process.env.SMTP_PORT || '587',
    SMTP_SECURE: process.env.SMTP_SECURE || 'false',
    NODE_ENV: process.env.NODE_ENV
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, website, issue } = body;

    // Validate required fields
    if (!name || !email || !website || !issue) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Debug: Log environment variables (remove in production)
    console.log('Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set',
      SMTP_HOST: process.env.SMTP_HOST || 'mail.clyrastudios.com',
      SMTP_PORT: process.env.SMTP_PORT || '587',
      SMTP_SECURE: process.env.SMTP_SECURE || 'false',
      NODE_ENV: process.env.NODE_ENV
    });

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email credentials not configured, using fallback');
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

    // Create transporter for custom domain email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.clyrastudios.com', // Your SMTP server
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
      tls: {
        rejectUnauthorized: false // Sometimes needed for self-signed certificates
      }
    });

    // Test connection
    try {
      await transporter.verify();
      console.log('Email connection verified successfully');
    } catch (verifyError) {
      console.error('Email connection verification failed:', verifyError);
      throw verifyError;
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'rick@clyrastudios.com',
      subject: `WordPress Repair Request from ${name}`,
      html: `
        <h2>New WordPress Repair Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Website:</strong> <a href="${website}">${website}</a></p>
        <p><strong>Issue Description:</strong></p>
        <p>${issue.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This request came from the WordPress Mechanic landing page.</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
      emailPass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
    });
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
