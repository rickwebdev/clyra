"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import GradientIcon from './GradientIcon';
import { faWrench, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

interface ContactFormProps {
  formId?: string;
  className?: string;
}

export default function ContactForm({ formId = "priority-form", className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        // Fallback: Open email client with pre-filled content
        const subject = `WordPress Repair Request from ${formData.name}`;
        const body = `
New WordPress Repair Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website}

Issue Description:
${formData.issue}

This request came from the WordPress Mechanic landing page.
        `;
        
        const mailtoLink = `mailto:rick@clyrastudios.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
        
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          website: '',
          issue: ''
        });
        return;
      }

      // EmailJS configuration
      const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        website: formData.website,
        issue: formData.issue,
        to_email: 'rick@clyrastudios.com',
        subject: `WordPress Repair Request from ${formData.name}`,
        message: `
New WordPress Repair Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website}

Issue Description:
${formData.issue}

This request came from the WordPress Mechanic landing page.
        `
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        issue: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`priority-form ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website URL *</label>
            <input 
              type="url" 
              id="website" 
              name="website" 
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com" 
              required 
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="issue">What went wrong? *</label>
          <textarea 
            id="issue" 
            name="issue" 
            rows={4} 
            value={formData.issue}
            onChange={handleChange}
            placeholder="Describe the problem you're experiencing..."
            required
          ></textarea>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="form-status success">
            <GradientIcon icon={faCheckCircle} size="sm" className="success" />
            <span>Thank you! We'll contact you within 2 hours to get your site fixed.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-status error">
            <GradientIcon icon={faExclamationTriangle} size="sm" className="danger" />
            <span>Sorry, there was an error. Please call us directly at (646) 632-2070.</span>
          </div>
        )}

        <button 
          type="submit" 
          className="btn btn-primary btn-lg"
          disabled={isSubmitting}
        >
          <GradientIcon icon={faWrench} size="sm" className="white" />
          {isSubmitting ? 'Sending...' : 'Submit — Get Help Now'}
        </button>
        <p className="form-note">
          Free diagnostics. Pay only if we fix it.
        </p>
      </form>
    </div>
  );
}
