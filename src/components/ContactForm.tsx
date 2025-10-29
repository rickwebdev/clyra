"use client";

import { useState } from 'react';
import GradientIcon from './GradientIcon';
import { faWrench, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

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
    let value = e.target.value;
    
    // Auto-add https:// to website field if missing
    if (e.target.name === 'website' && value && !value.match(/^https?:\/\//)) {
      value = `https://${value}`;
    }
    
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email via API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const responseData = await response.json();
        console.log('API Response:', responseData);

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            website: '',
            issue: ''
          });
        } else {
          console.error('API Error:', responseData);
          throw new Error(responseData.error || 'Failed to send email');
        }
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
              placeholder="yourwebsite.com (https:// will be added automatically)" 
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
