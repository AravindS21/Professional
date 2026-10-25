import React from 'react';
import { personalInfo, languagesData } from '../data/portfolioData';
import { 
  UserCheck, 
  Layers, 
  BrainCircuit, 
  GraduationCap, 
  Globe2, 
  CheckCircle,
  Sparkles,
  TerminalSquare
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <BrainCircuit className="pillar-icon text-cyan" size={26} />,
      title: "AI/ML & Clinical Intelligence",
      description: "Proven experience engineering predictive models (Random Forest, XGBoost) and integrating SHAP Explainable AI for high-stakes healthcare risk analysis with up to 95% accuracy."
    },
    {
      icon: <Layers className="pillar-icon text-indigo" size={26} />,
      title: "Full-Stack Web Engineering",
      description: "Building production-grade web applications with React.js on the frontend, Spring Boot and Flask on the backend, and MySQL for relational persistence."
    },
    {
      icon: <GraduationCap className="pillar-icon text-purple" size={26} />,
      title: "Physics & Computational Rigor",
      description: "Holding a B.Sc. in Physics (73%) combined with an MCA (82%), bringing rigorous analytical problem-solving, mathematical intuition, and algorithmic precision to code."
    },
    {
      icon: <TerminalSquare className="pillar-icon text-emerald" size={26} />,
      title: "Modern Toolchain & Collaboration",
      description: "Proficient across modern development ecosystems: Antigravity, IntelliJ IDEA, VS Code, PyCharm, MySQL Workbench, Git version control, and GitHub."
    }
  ];

  return (
    <section id="about" className="portfolio-section about-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <UserCheck size={14} /> Background & Focus
          </span>
          <h2 className="section-title">
            Passionate About Building <span className="accent-text">Intelligent Applications</span>
          </h2>
          <p className="section-description">
            Transforming complex algorithmic machine learning models into accessible, reliable, and user-centric web platforms.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="about-main-grid">
          {/* Left Narrative Card */}
          <div className="about-narrative-card glass-card">
            <div className="card-top-indicator">
              <span className="indicator-label">Summary Overview</span>
              <span className="badge badge-primary">MCA Post-Graduate</span>
            </div>

            <h3 className="narrative-heading">
              A developer driven by data structures, clean architecture, and practical machine learning.
            </h3>

            <p className="narrative-text">
              I am an <strong>MCA graduate (82%)</strong> with a solid foundation in Java, Data Structures, Full-Stack Development, and AI/ML. My engineering journey bridges the gap between machine learning research and responsive user interfaces.
            </p>

            <p className="narrative-text">
              Whether building an end-to-end early cancer detection pipeline using urinary biomarkers and <strong>SHAP Explainable AI (95% accuracy)</strong> or creating real-time heart disease predictive dashboards with <strong>Random Forest (90% accuracy)</strong>, I focus on delivering reliable, accessible software solutions.
            </p>

            <div className="about-bullets-list">
              <div className="bullet-item">
                <CheckCircle size={18} className="text-emerald" />
                <span>Strong grasp of Object-Oriented Programming (Java) & RESTful Microservices</span>
              </div>
              <div className="bullet-item">
                <CheckCircle size={18} className="text-emerald" />
                <span>Modern React.js frontend component design and state management</span>
              </div>
              <div className="bullet-item">
                <CheckCircle size={18} className="text-emerald" />
                <span>Full lifecycle ML integration: Scikit-learn, XGBoost, Flask APIs, and SHAP</span>
              </div>
              <div className="bullet-item">
                <CheckCircle size={18} className="text-emerald" />
                <span>Proven competitive excellence: Smart India Hackathon Finalist & Prize Winner</span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Language Card */}
          <div className="about-side-column">
            {/* 4 Pillars Grid */}
            <div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card glass-card">
                  <div className="pillar-icon-box">
                    {pillar.icon}
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* Languages Proficiency Card */}
            <div className="languages-card glass-card">
              <div className="lang-header">
                <Globe2 size={20} className="text-cyan" />
                <h4 className="lang-title">Linguistic Proficiency</h4>
              </div>
              <div className="lang-list">
                {languagesData.map((lang, idx) => (
                  <div key={idx} className="lang-item">
                    <div className="lang-info">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <div className="lang-stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star-dot active">★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
