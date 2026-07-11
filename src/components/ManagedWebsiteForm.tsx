"use client";

import { useRef, useState } from "react";
import GradientIcon from "./GradientIcon";
import {
  faCheckCircle,
  faExclamationTriangle,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { trackEvent } from "@/lib/analytics";

const businessTypes = [
  "Painter",
  "Contractor",
  "Landscaper",
  "Electrician",
  "Plumber",
  "HVAC",
  "Cleaning company",
  "Restaurant or hospitality",
  "Salon or personal care",
  "Medical or dental office",
  "Law firm",
  "Auto shop",
  "Professional services",
  "Other local service business",
];

const needOptions = [
  "A new business website",
  "A redesign",
  "Help with an existing website",
  "Website hosting and maintenance",
  "Local SEO",
  "Not sure",
];

const websiteStatusOptions = [
  { value: "no", label: "No, I need a new website" },
  { value: "yes", label: "Yes, I have a website" },
  { value: "outdated", label: "Yes, but it is outdated or broken" },
  { value: "social_only", label: "I only use Facebook or Google Business Profile" },
];

export default function ManagedWebsiteForm() {
  const formStarted = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    hasWebsite: "",
    website: "",
    need: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const showWebsiteField =
    formData.hasWebsite === "yes" ||
    formData.hasWebsite === "outdated" ||
    formData.hasWebsite === "social_only";

  const trackFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("managed_website_form_start");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    trackFormStart();
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    let processed = value;
    if (name === "website" && value && !/^https?:\/\//.test(value)) {
      processed = `https://${value}`;
    }

    setFormData((prev) => ({ ...prev, [name]: processed }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const websiteValue =
      formData.hasWebsite === "no"
        ? "No website yet"
        : formData.website || formData.businessName || "Not provided";

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: websiteValue,
      issue: [
        `Business: ${formData.businessName}`,
        `Business Type: ${formData.businessType}`,
        `Has Website: ${formData.hasWebsite}`,
        formData.need ? `Need: ${formData.need}` : "",
        formData.message ? `Message: ${formData.message}` : "",
        `Phone Consent: ${formData.consent ? "Yes" : "No"}`,
        "Form Type: managed-website",
      ]
        .filter(Boolean)
        .join("\n"),
      formType: "managed-website",
    };

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      trackEvent("managed_website_form_submit", {
        need: formData.need,
        has_website: formData.hasWebsite,
      });
      setSubmitStatus("success");
      formStarted.current = false;
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        businessType: "",
        hasWebsite: "",
        website: "",
        need: "",
        message: "",
        consent: false,
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="growth-application-form managed-website-form">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="form-section-title" role="heading" aria-level={3}>
          <GradientIcon icon={faRocket} size="sm" className="primary" />
          <span>Get My Website</span>
        </div>
        <p className="section-description" style={{ marginBottom: "1.5rem" }}>
          Tell us about your business. We will recommend the right plan and next
          steps.
        </p>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="mw-name">Name *</label>
            <input
              id="mw-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mw-businessName">Business name *</label>
            <input
              id="mw-businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              autoComplete="organization"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mw-email">Email *</label>
            <input
              type="email"
              id="mw-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mw-phone">Phone *</label>
            <input
              type="tel"
              id="mw-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mw-businessType">Business type *</label>
            <select
              id="mw-businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            >
              <option value="">Select your business type</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mw-hasWebsite">
              Do you currently have a website? *
            </label>
            <select
              id="mw-hasWebsite"
              name="hasWebsite"
              value={formData.hasWebsite}
              onChange={handleChange}
              required
            >
              <option value="">Select one</option>
              {websiteStatusOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {showWebsiteField && (
            <div className="form-group">
              <label htmlFor="mw-website">Current website URL</label>
              <input
                type="url"
                id="mw-website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="yourbusiness.com"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="mw-need">What do you need? *</label>
            <select
              id="mw-need"
              name="need"
              value={formData.need}
              onChange={handleChange}
              required
            >
              <option value="">Select one</option>
              {needOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mw-message">Message (optional)</label>
          <textarea
            id="mw-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your services, service area, or anything else that helps us prepare."
          />
        </div>

        <label className="newsletter-opt-in">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <span className="newsletter-text">
            I agree that Clyra Studios may contact me by phone, email, or text
            about my website request. Message and data rates may apply.
          </span>
        </label>

        {submitStatus === "success" && (
          <div className="form-status success" role="status">
            <GradientIcon icon={faCheckCircle} size="sm" className="success" />
            <span>
              Thank you. We will reach out within one business day with plan
              options and next steps.
            </span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="form-status error" role="alert">
            <GradientIcon
              icon={faExclamationTriangle}
              size="sm"
              className="danger"
            />
            <span>
              Something went wrong. Please call{" "}
              <a href="tel:+16466322070">(646) 632-2070</a> or email{" "}
              <a href="mailto:rick@clyrastudios.com">rick@clyrastudios.com</a>.
            </span>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Get My Website"}
        </button>
      </form>
    </div>
  );
}
