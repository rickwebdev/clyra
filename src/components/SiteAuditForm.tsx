"use client";

import { useState } from 'react';
import GradientIcon from './GradientIcon';
import { faSearch, faCheckCircle, faExclamationTriangle, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function SiteAuditForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    industry: '',
    budget: '',
    timeline: '',
    currentIssues: [] as string[],
    goals: '',
    heardAbout: '',
    additionalInfo: '',
    newsletterOptIn: false,
  });

  const industries = [
    'Local Service Business',
    'Therapists & Coaches',
    'Restaurants & Hospitality',
    'Law Firms & Agencies',
    'E‑commerce & Product Brands',
    'Professional Services',
    'Other'
  ];

  // Includes a lower gate ($1k–$5k) then standard ranges
  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  const timelines = ['ASAP', '1-2 months', '3-6 months', '6+ months'];

  const issueOptions = [
    'Slow loading',
    'Poor mobile experience',
    'Not ranking on Google',
    'Outdated design',
    'Hard to update content',
    'Low leads/sales',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletterOptIn') {
        setFormData(prev => ({ ...prev, newsletterOptIn: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          currentIssues: checked
            ? [...prev.currentIssues, value]
            : prev.currentIssues.filter(v => v !== value)
        }));
      }
      return;
    }

    let processed = value;
    if (name === 'website' && value && !/^https?:\/\//.test(value)) processed = `https://${value}`;
    setFormData(prev => ({ ...prev, [name]: processed }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

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
        formData.currentIssues.length ? `Issues: ${formData.currentIssues.join(', ')}` : '',
        formData.goals ? `Primary Goals: ${formData.goals}` : '',
        formData.heardAbout ? `Heard About: ${formData.heardAbout}` : '',
        formData.additionalInfo ? `Notes: ${formData.additionalInfo}` : '',
        `Form Type: site-audit`,
        `Newsletter Opt-in: ${formData.newsletterOptIn ? 'Yes' : 'No'}`
      ].filter(Boolean).join('\n'),
      formType: 'site-audit',
      newsletterOptIn: formData.newsletterOptIn,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', companyName: '', website: '', industry: '',
        budget: '', timeline: '', currentIssues: [], goals: '', heardAbout: '', additionalInfo: '', newsletterOptIn: false
      });
    } catch (e) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="growth-application-form">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h3 className="form-section-title">
          <GradientIcon icon={faSearch} size="sm" className="primary" />
          Request Your Free Website Audit
        </h3>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="companyName">Company</label>
              <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" placeholder="yourdomain.com" value={formData.website} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry</label>
              <select id="industry" name="industry" value={formData.industry} onChange={handleChange}>
                <option value="">Select industry</option>
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="budget">Budget *</label>
              <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required>
                <option value="">Select budget</option>
                {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timeline">Timeline</label>
              <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
                <option value="">Select timeline</option>
                {timelines.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4 className="form-section-title">
            <GradientIcon icon={faExclamationTriangle} size="sm" className="warning" />
            Current Issues (select any)
          </h4>
          <div className="checkbox-grid">
            {issueOptions.map(opt => (
              <label key={opt} className="checkbox-label">
                <input type="checkbox" name="currentIssues" value={opt} checked={formData.currentIssues.includes(opt)} onChange={handleChange} />
                <span className="checkbox-text">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label htmlFor="goals">Primary Goals *</label>
            <textarea id="goals" name="goals" rows={3} value={formData.goals} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-section">
          <label className="newsletter-opt-in">
            <input type="checkbox" name="newsletterOptIn" checked={formData.newsletterOptIn} onChange={handleChange} />
            <span className="newsletter-text">Keep me updated with Clyra Studios news and web insights.</span>
          </label>
        </div>

        {status === 'success' && (
          <div className="form-status success">
            <GradientIcon icon={faCheckCircle} size="sm" className="success" />
            <span>Thanks! We\'ll email your audit results within 24 hours.</span>
          </div>
        )}
        {status === 'error' && (
          <div className="form-status error">
            <GradientIcon icon={faExclamationTriangle} size="sm" className="danger" />
            <span>Sorry, there was an error. Please try again or call us.</span>
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
          <GradientIcon icon={faSearch} size="sm" className="white" />
          <span className="ml-2">Request Free Audit</span>
        </button>
      </form>
    </div>
  );
}


