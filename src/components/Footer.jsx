import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Code2, Mail, MapPin } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="content-wrapper footer-content">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="logo-group">
              <div className="logo-icon-box">
                <Code2 size={20} className="logo-icon" />
              </div>
              <span className="logo-name">ARAVIND<span className="logo-dot">.S</span></span>
            </div>
            <p className="footer-tagline">
              AI/ML Engineer & Full-Stack Developer • MCA Post-Graduate
            </p>
            <span className="footer-location">
              <MapPin size={14} className="text-cyan" /> {personalInfo.location}
            </span>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Quick Navigation</h4>
            <div className="footer-links-grid">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#achievements">Honors</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-action-col">
            <h4 className="footer-links-title">Connect</h4>
            <div className="footer-social-links">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              title="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-divider"></div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & modern web engineering standards.
          </p>
          <div className="stack-acknowledgement">
            <span>React.js • Spring Boot • Scikit-learn • XGBoost • SHAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
