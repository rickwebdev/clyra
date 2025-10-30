"use client";

import { useState } from 'react';
import GradientIcon from './GradientIcon';
import { faFileAlt, faPaperPlane, faExclamationTriangle, faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons';

export default function RFPForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    projectType: '',
    scope: '',
    budget: '',
    timeline: '',
    goals: '',
    successCriteria: '',
    heardAbout: '',
    newsletterOptIn: false,
  });

  const projectTypes = [
    'New Website / Platform Build',
    'Redesign / Migration',
    'E‑commerce (Shopify/WooCommerce)',
    'Headless CMS (Sanity/Contentful)',
    'SEO & Content Program',
    'Automation / CRM / Analytics',
    'Other'
  ];

  const budgets = [
    '$5k–$10k', '$10k–$20k', '$20k–$50k', '$50k+', 'Not sure yet'
  ];

  const timelines = ['ASAP', '1–2 months', '3–6 months', '6+ months'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
      return;
    }
    let v = value;
    if (name === 'website' && v && !/^https?:\/\//.test(v)) v = `https://${v}`;
    setFormData(prev => ({ ...prev, [name]: v }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        website: formData.website || formData.company || 'N/A',
        issue: [
          formData.company ? `Company: ${formData.company}` : '',
          formData.industry ? `Industry: ${formData.industry}` : '',
          formData.projectType ? `Project Type: ${formData.projectType}` : '',
          formData.scope ? `Scope: ${formData.scope}` : '',
          formData.budget ? `Budget: ${formData.budget}` : '',
          formData.timeline ? `Timeline: ${formData.timeline}` : '',
          formData.goals ? `Goals: ${formData.goals}` : '',
          formData.successCriteria ? `Success Criteria: ${formData.successCriteria}` : '',
          formData.heardAbout ? `Heard About: ${formData.heardAbout}` : '',
          `Form Type: rfp`,
          `Newsletter Opt-in: ${formData.newsletterOptIn ? 'Yes' : 'No'}`
        ].filter(Boolean).join('\n'),
        formType: 'rfp',
        newsletterOptIn: formData.newsletterOptIn,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', company: '', website: '', industry: '',
        projectType: '', scope: '', budget: '', timeline: '', goals: '', successCriteria: '', heardAbout: '',
        newsletterOptIn: false
      });
    } catch (_) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="growth-application-form">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h3 className="form-section-title">
          <GradientIcon icon={faFileAlt} size="sm" className="primary" />
          Request for Proposal
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
              <label htmlFor="company">Company *</label>
              <input id="company" name="company" value={formData.company} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" placeholder="yourdomain.com" value={formData.website} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry</label>
              <input id="industry" name="industry" value={formData.industry} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="projectType">Project Type *</label>
              <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} required>
                <option value="">Select type</option>
                {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget">Budget *</label>
              <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required>
                <option value="">Select budget</option>
                {budgets.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timeline">Timeline *</label>
              <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} required>
                <option value="">Select timeline</option>
                {timelines.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label htmlFor="scope">Scope / Requirements *</label>
            <textarea id="scope" name="scope" rows={4} value={formData.scope} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="goals">Primary Goals *</label>
              <textarea id="goals" name="goals" rows={3} value={formData.goals} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="successCriteria">Success Criteria</label>
              <textarea id="successCriteria" name="successCriteria" rows={3} value={formData.successCriteria} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <label className="newsletter-opt-in">
            <input type="checkbox" name="newsletterOptIn" checked={formData.newsletterOptIn} onChange={handleChange} />
            <span className="newsletter-text">Keep me updated with Clyra Studios news and insights.</span>
          </label>
        </div>

        {status === 'success' && (
          <div className="form-status success">
            <GradientIcon icon={faBriefcase} size="sm" className="success" />
            <span>Thanks! Your RFP was received. We’ll respond within 24 hours.</span>
          </div>
        )}
        {status === 'error' && (
          <div className="form-status error">
            <GradientIcon icon={faExclamationTriangle} size="sm" className="danger" />
            <span>Sorry, there was an error. Please try again or call us.</span>
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
          <GradientIcon icon={faPaperPlane} size="sm" className="white" />
          <span className="ml-2">Submit RFP</span>
        </button>
      </form>
    </div>
  );
}


