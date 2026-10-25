import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  Rocket, 
  ExternalLink, 
  Activity, 
  CheckCircle2, 
  Eye, 
  Sparkles, 
  Cpu, 
  Layers, 
  Code2,
  ZoomIn
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Rocket size={14} /> Capstone Implementations
          </span>
          <h2 className="section-title">
            Featured <span className="accent-text">AI & Healthcare Systems</span>
          </h2>
          <p className="section-description">
            Full-stack predictive web platforms integrating trained Machine Learning pipelines, clinical parameters, and Explainable AI.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Banner Image / Preview */}
              <div 
                className="project-banner-wrapper"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                title={`Click to view ${project.title} architecture blueprint`}
              >
                <img 
                  src={project.banner} 
                  alt={project.title} 
                  className="project-banner-img"
                  loading="lazy"
                />
                <div className="project-banner-overlay">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="preview-badge-btn"
                  >
                    <ZoomIn size={16} />
                    <span>View Architecture Blueprint</span>
                  </button>
                </div>
                <div className="project-floating-badge">
                  <span className="badge badge-primary">{project.accuracy}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-meta-row">
                  <span className="project-category">{project.category}</span>
                  <span className="project-badge-tag">{project.badge}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>

                <p className="project-summary">{project.summary}</p>

                {/* Key Metrics Strip */}
                <div className="project-metrics-strip">
                  {project.keyMetrics.map((metric, i) => (
                    <div key={i} className="metric-box">
                      <span className="metric-val">{metric.value}</span>
                      <span className="metric-lbl">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="project-highlights-list">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="highlight-row">
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-chips">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary project-btn"
                  >
                    <Eye size={16} />
                    <span>View Architecture & Specs</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
