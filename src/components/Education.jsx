import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Award, 
  Scroll, 
  Atom, 
  Layers, 
  Terminal 
} from 'lucide-react';

const certIconMap = {
  Atom: Atom,
  Layers: Layers,
  Terminal: Terminal
};

export default function Education() {
  return (
    <section id="education" className="portfolio-section education-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} /> Academic Journey
          </span>
          <h2 className="section-title">
            Education & <span className="accent-text">Qualifications</span>
          </h2>
          <p className="section-description">
            Combining rigorous physical science analytical grounding with advanced computational and software engineering masters training.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx !== educationData.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content-card glass-card">
                <div className="edu-top-row">
                  <div>
                    <span className="badge badge-primary">{edu.period}</span>
                    <span className="badge badge-cyan">{edu.status}</span>
                  </div>
                  <div className="score-pill">
                    <span className="score-label">Aggregate Score</span>
                    <span className="score-number">{edu.score}</span>
                  </div>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution-row">
                  <span className="edu-institution">{edu.institution}</span>
                  <span className="edu-location">
                    <MapPin size={14} /> {edu.location}
                  </span>
                </div>

                <p className="edu-description">{edu.description}</p>

                <div className="edu-highlights">
                  <span className="highlight-title-mini">Core Disciplines:</span>
                  <div className="edu-tag-group">
                    {edu.highlights.map((h, i) => (
                      <span key={i} className="edu-tag">
                        <CheckCircle size={13} className="text-cyan" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className="certifications-subblock">
          <div className="certifications-header">
            <div className="flex-center-gap">
              <Scroll size={20} className="text-cyan" />
              <h3>Professional Certifications</h3>
            </div>
            <p className="cert-subtitle">Verified continuous learning milestones and specialized course completions.</p>
          </div>

          <div className="certifications-grid">
            {certificationsData.map((cert, index) => {
              const CertIcon = certIconMap[cert.icon] || Award;
              return (
                <div key={index} className="cert-card glass-card">
                  <div className="cert-top">
                    <div className="cert-icon-box">
                      <CertIcon size={22} className="text-indigo" />
                    </div>
                    <span className="badge badge-emerald">{cert.badge}</span>
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">Issued by {cert.issuer}</span>
                  <p className="cert-topics">{cert.topics}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
