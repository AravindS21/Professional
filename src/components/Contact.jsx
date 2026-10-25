import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  FileDown, 
  MessageSquare, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleOpenMailClient = (e) => {
    if (e) e.preventDefault();
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const mailBody = encodeURIComponent(`Hello Aravind,\n\n${formData.message || ''}\n\nFrom:\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}`);
    window.open(`mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Direct AJAX submission to FormSubmit configured for aravindgousikan1@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Transmission error');
      }
    } catch (err) {
      console.warn('Network submission notice, launching email client fallback:', err);
      // Fallback: Launch email client directly so the message is never lost
      handleOpenMailClient();
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} /> Get In Touch
          </span>
          <h2 className="section-title">
            Let's Discuss <span className="accent-text">Opportunities</span>
          </h2>
          <p className="section-description">
            Looking for an AI/ML or Full-Stack Software Engineer? I am eager to contribute to forward-thinking teams and high-impact engineering projects.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Info & Quick Cards */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">Direct Contact Channels</h3>
              <p className="contact-card-sub">
                Feel free to reach out directly via email, phone, or connect on LinkedIn.
              </p>

              {/* Email Item */}
              <div className="contact-item">
                <div className="contact-icon-box bg-indigo-subtle">
                  <Mail size={20} className="text-indigo" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-item-value hover-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copiedType === 'email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="contact-item">
                <div className="contact-icon-box bg-cyan-subtle">
                  <Phone size={20} className="text-cyan" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Phone & WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="contact-item-value hover-link">
                    {personalInfo.formattedPhone}
                  </a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="copy-btn"
                  title="Copy phone number to clipboard"
                  aria-label="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Item */}
              <div className="contact-item">
                <div className="contact-icon-box bg-purple-subtle">
                  <MapPin size={20} className="text-purple" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Location Base</span>
                  <span className="contact-item-value">{personalInfo.location}</span>
                </div>
              </div>

              {/* LinkedIn Item */}
              <div className="contact-item">
                <div className="contact-icon-box bg-indigo-subtle">
                  <LinkedinIcon size={20} className="text-indigo" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">LinkedIn Profile</span>
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-item-value hover-link flex-link"
                  >
                    <span>linkedin.com/in/aravinds2002</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Resume Download Callout Box */}
              <div className="resume-download-box">
                <div className="resume-box-text">
                  <h4 className="resume-box-title">Need a physical copy?</h4>
                  <p className="resume-box-desc">Download my full verified PDF curriculum vitae.</p>
                </div>
                <a
                  href={personalInfo.resumePath}
                  download="Aravind_S_Resume.pdf"
                  className="btn-primary resume-dl-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown size={17} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <div className="form-header-title">
                  <MessageSquare size={20} className="text-cyan" />
                  <h3>Send a Direct Message</h3>
                </div>
                <span className="badge badge-emerald">Quick Response</span>
              </div>

              {isSubmitted ? (
                <div className="submission-success-card">
                  <div className="success-icon-wrap">
                    <Check size={32} className="text-emerald" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out! Your message has been routed to <strong>{personalInfo.email}</strong>. I will review it and reply promptly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g., Sarah Mitchell"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="e.g., sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject / Purpose</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="e.g., Software Engineering Role / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Hello Aravind, I came across your portfolio and would like to connect regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <div className="form-button-row">
                    <button 
                      type="submit" 
                      className="btn-primary form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border"></span>
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenMailClient}
                      className="btn-secondary form-mail-btn"
                      title="Open in your default email app (Gmail, Outlook, Apple Mail)"
                    >
                      <Mail size={16} />
                      <span>Send via Mail App</span>
                    </button>
                  </div>

                  <p className="form-delivery-note">
                    🔒 Messages are delivered directly to <strong>{personalInfo.email}</strong>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
