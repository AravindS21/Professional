import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Sparkles, 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

const ROLES = [
  "AI/ML Engineer",
  "Full-Stack Web Developer",
  "Spring Boot & React Specialist",
  "Predictive Healthcare Innovator"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, isDeleting ? 60 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="hero-section">
      <div className="content-wrapper">
        <div className="hero-single-column">
          {/* Main Content */}
          <div className="hero-content">
            {/* Availability Pill */}
            <div className="availability-pill">
              <span className="pulse-dot"></span>
              <span className="availability-text">MCA Graduate • Available for Full-Stack & AI/ML Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="hero-title-group">
              <p className="hero-eyebrow">Hello, I'm</p>
              <h1 className="hero-name">
                <span className="gradient-title">{personalInfo.name}</span>
              </h1>
              <div className="hero-role-wrapper">
                <span className="role-prefix">Specializing in</span>
                <span className="dynamic-role-text">
                  {displayedText}
                  <span className="cursor-blink">|</span>
                </span>
              </div>
            </div>

            {/* Summary description */}
            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="hero-meta-list">
              <span className="hero-meta-item">
                <MapPin size={16} className="text-cyan" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="hero-meta-item hover-link">
                <Mail size={16} className="text-indigo" />
                {personalInfo.email}
              </a>
            </div>

            {/* Call to Actions */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <span>Explore Featured Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Aravind_S_Resume.pdf"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Global Key Stats Bar */}
        <div className="hero-stats-strip glass-card">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-num">{stat.value}</span>
              <span className="stat-name">{stat.label}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
