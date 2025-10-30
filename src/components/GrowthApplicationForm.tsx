"use client";

import { useState } from 'react';
import GradientIcon from './GradientIcon';
import { faRocket, faCheckCircle, faExclamationTriangle, faBuilding, faGlobe, faUsers } from '@fortawesome/free-solid-svg-icons';

interface GrowthApplicationFormProps {
  formId?: string;
  className?: string;
}

export default function GrowthApplicationForm({ formId = "growth-application", className = "" }: GrowthApplicationFormProps) {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    
    // Company Information
    companyName: '',
    website: '',
    industry: '',
    
    // Project Details
    budget: '',
    timeline: '',
    currentIssues: [] as string[],
    goals: '',
    currentTraffic: '',
    monthlyLeads: '',
    
    // Lead Source
    heardAbout: '',
    additionalInfo: '',
    
    // Newsletter
    newsletterOptIn: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const industries = [
    'Restaurant & Food Service',
    'Healthcare & Medical',
    'Legal Services',
    'Real Estate',
    'Financial Services',
    'E-commerce & Retail',
    'Professional Services',
    'Technology',
    'Education',
    'Non-Profit',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP (within 2 weeks)',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Just exploring options'
  ];

  const currentIssuesOptions = [
    'I don\'t have a website yet',
    'Website is slow/not loading properly',
    'Poor SEO/not ranking on Google',
    'Outdated design that looks unprofessional',
    'Hard to update content myself',
    'Not getting enough leads/sales',
    'High maintenance costs',
    'Security concerns',
    'Mobile responsiveness issues',
    'E-commerce functionality problems',
    'Integration with other tools',
    'Other'
  ];

  const heardAboutOptions = [
    'Google Search',
    'Referral from friend/colleague',
    'Social Media (Facebook, Instagram, LinkedIn)',
    'Previous client',
    'Industry event/conference',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletterOptIn') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle currentIssues checkboxes
        setFormData(prev => ({
          ...prev,
          currentIssues: checked 
            ? [...prev.currentIssues, value]
            : prev.currentIssues.filter(issue => issue !== value)
        }));
      }
    } else {
      // Auto-add https:// to website field if missing
      let processedValue = value;
      if (name === 'website' && value && !value.match(/^https?:\/\//)) {
        processedValue = `https://${value}`;
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: processedValue
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Map this multi-section form to the contact API's expected shape
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        website: formData.website || formData.companyName || 'N/A',
        issue: [
          formData.companyName ? `Company: ${formData.companyName}` : '',
          formData.industry ? `Industry: ${formData.industry}` : '',
          formData.budget ? `Budget: ${formData.budget}` : '',
          formData.timeline ? `Timeline: ${formData.timeline}` : '',
          formData.currentTraffic ? `Current Traffic: ${formData.currentTraffic}` : '',
          formData.monthlyLeads ? `Monthly Leads: ${formData.monthlyLeads}` : '',
          formData.currentIssues.length ? `Current Issues: ${formData.currentIssues.join(', ')}` : '',
          formData.goals ? `Goals: ${formData.goals}` : '',
          formData.heardAbout ? `Heard About Us: ${formData.heardAbout}` : '',
          formData.additionalInfo ? `Additional Info: ${formData.additionalInfo}` : '',
          `Form Type: growth-application`,
          `Newsletter Opt-in: ${formData.newsletterOptIn ? 'Yes' : 'No'}`
        ].filter(Boolean).join('\n'),
        formType: 'growth-application',
        newsletterOptIn: formData.newsletterOptIn
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      let responseData: unknown = {};
      try {
        responseData = await response.json();
      } catch (_) {
        // no-op: some environments may return empty body on 200
      }
      console.log('API Response:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          jobTitle: '',
          companyName: '',
          website: '',
          industry: '',
          budget: '',
          timeline: '',
          currentIssues: [],
          goals: '',
          currentTraffic: '',
          monthlyLeads: '',
          heardAbout: '',
          additionalInfo: '',
          newsletterOptIn: false
        });
      } else {
        const err = (responseData as { error?: string } | undefined)?.error;
        console.error('API Error:', responseData);
        throw new Error(err || 'Failed to send application');
      }
    } catch (error) {
      console.error('Error sending application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`growth-application-form ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="form-section">
          <h3 className="form-section-title">
            <GradientIcon icon={faUsers} size="sm" className="primary" />
            Your Information
          </h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
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
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input 
                type="text" 
                id="jobTitle" 
                name="jobTitle" 
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="e.g., Owner, Marketing Director, CEO"
              />
            </div>
          </div>
        </div>

        {/* Company Information Section */}
        <div className="form-section">
          <h3 className="form-section-title">
            <GradientIcon icon={faBuilding} size="sm" className="primary" />
            Company Information
          </h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="companyName">Company Name *</label>
              <input 
                type="text" 
                id="companyName" 
                name="companyName" 
                value={formData.companyName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Current Website</label>
              <input 
                type="url" 
                id="website" 
                name="website" 
                value={formData.website}
                onChange={handleChange}
                placeholder="yourwebsite.com (https:// will be added automatically)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry *</label>
              <select 
                id="industry" 
                name="industry" 
                value={formData.industry}
                onChange={handleChange}
                required
              >
                <option value="">Select your industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="form-section">
          <h3 className="form-section-title">
            <GradientIcon icon={faRocket} size="sm" className="primary" />
            Project Details
          </h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="budget">Project Budget *</label>
              <select 
                id="budget" 
                name="budget" 
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timeline">Project Timeline *</label>
              <select 
                id="timeline" 
                name="timeline" 
                value={formData.timeline}
                onChange={handleChange}
                required
              >
                <option value="">Select timeline</option>
                {timelines.map(timeline => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="currentTraffic">Current Monthly Website Traffic</label>
              <input 
                type="text" 
                id="currentTraffic" 
                name="currentTraffic" 
                value={formData.currentTraffic}
                onChange={handleChange}
                placeholder="e.g., 1,000 visitors, 5,000 page views"
              />
            </div>
            <div className="form-group">
              <label htmlFor="monthlyLeads">Current Monthly Leads</label>
              <input 
                type="text" 
                id="monthlyLeads" 
                name="monthlyLeads" 
                value={formData.monthlyLeads}
                onChange={handleChange}
                placeholder="e.g., 5 leads, 20 inquiries"
              />
            </div>
          </div>
        </div>

        {/* Current Issues Section */}
        <div className="form-section">
          <h3 className="form-section-title">
            <GradientIcon icon={faExclamationTriangle} size="sm" className="warning" />
            Current Website Issues (Select all that apply) *
          </h3>
          <div className="checkbox-grid">
            {currentIssuesOptions.map((issue, index) => (
              <label key={index} className="checkbox-label">
                <input
                  type="checkbox"
                  name="currentIssues"
                  value={issue}
                  checked={formData.currentIssues.includes(issue)}
                  onChange={handleChange}
                />
                <span className="checkbox-text">{issue}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="goals">What are your main business goals? *</label>
            <textarea 
              id="goals" 
              name="goals" 
              rows={4} 
              value={formData.goals}
              onChange={handleChange}
              placeholder="Tell us about your business goals and what you hope to achieve with a new website..."
              required
            />
          </div>
        </div>

        {/* Lead Source Section */}
        <div className="form-section">
          <h3 className="form-section-title">
            <GradientIcon icon={faGlobe} size="sm" className="primary" />
            How did you hear about us?
          </h3>
          <div className="form-group">
            <select 
              id="heardAbout" 
              name="heardAbout" 
              value={formData.heardAbout}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {heardAboutOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Information */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="additionalInfo">Anything else you'd like us to know?</label>
            <textarea 
              id="additionalInfo" 
              name="additionalInfo" 
              rows={3} 
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any specific requirements, questions, or additional context..."
            />
          </div>
        </div>

        {/* Newsletter Opt-in */}
        <div className="form-section">
          <label className="newsletter-opt-in">
            <input
              type="checkbox"
              name="newsletterOptIn"
              checked={formData.newsletterOptIn}
              onChange={handleChange}
            />
            <span className="newsletter-text">
              Keep me updated with the latest news about Clyra Studios and web development insights.
            </span>
          </label>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="form-status success">
            <GradientIcon icon={faCheckCircle} size="sm" className="success" />
            <span>Thank you! We've received your application and will review it within 24 hours. We'll be in touch soon!</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-status error">
            <GradientIcon icon={faExclamationTriangle} size="sm" className="danger" />
            <span>Sorry, there was an error submitting your application. Please call us directly at (646) 632-2070.</span>
          </div>
        )}

        <button 
          type="submit" 
          className="btn btn-primary btn-lg"
          disabled={isSubmitting}
        >
          <GradientIcon icon={faRocket} size="sm" className="white" />
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </button>
        
        <p className="form-note">
          Free consultation included. No obligation to proceed.
        </p>
      </form>
    </div>
  );
}
