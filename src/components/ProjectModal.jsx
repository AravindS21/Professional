import React, { useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Database 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content glass-card project-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button 
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header-area">
          <div className="modal-category-row">
            <span className="badge badge-primary">{project.category}</span>
            <span className="badge badge-cyan">{project.accuracy}</span>
          </div>
          <h2 className="modal-project-title">{project.title}</h2>
          <p className="modal-project-subtitle">{project.subtitle}</p>
        </div>

        {/* Blueprint Architecture Image */}
        <div className="modal-image-showcase">
          <div className="image-caption-bar">
            <span>Clinical Pipeline & Architecture Infographic</span>
          </div>
          <img 
            src={project.banner} 
            alt={`${project.title} Architecture Diagram`}
            className="modal-blueprint-img"
          />
        </div>

        {/* Modal Details Grid */}
        <div className="modal-body-content">
          <div className="modal-section-block">
            <h3 className="modal-section-title">
              <Cpu size={18} className="text-cyan" /> Project Overview & Objective
            </h3>
            <p className="modal-text">{project.summary}</p>
          </div>

          {/* Key Architecture Highlights */}
          <div className="modal-section-block">
            <h3 className="modal-section-title">
              <Layers size={18} className="text-indigo" /> Technical Highlights & Engineering Pipeline
            </h3>
            <div className="modal-highlights-grid">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="modal-highlight-item">
                  <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="modal-section-block">
            <h3 className="modal-section-title">
              <Database size={18} className="text-purple" /> Full Technology Stack
            </h3>
            <div className="modal-tech-flex">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge large">{tech}</span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="modal-footer-actions">
            <button onClick={onClose} className="btn-primary">
              Close Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
