import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Wrench, 
  Search, 
  Brain, 
  Server, 
  Layout, 
  Database, 
  Code, 
  Cpu, 
  Layers, 
  Sparkles, 
  Coffee, 
  Terminal, 
  Atom, 
  FileCode, 
  Workflow, 
  GitBranch 
} from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Server: Server,
  Layout: Layout,
  Database: Database,
  Code: Code,
  Cpu: Cpu,
  Layers: Layers,
  Sparkles: Sparkles,
  Coffee: Coffee,
  Terminal: Terminal,
  Atom: Atom,
  FileCode: FileCode,
  Workflow: Workflow,
  Wrench: Wrench,
  GitBranch: GitBranch
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} /> Technical Stack & Expertise
          </span>
          <h2 className="section-title">
            Technologies & <span className="accent-text">Frameworks</span>
          </h2>
          <p className="section-description">
            A comprehensive overview of my technical stacks spanning machine learning, backend microservices, and modern frontend interfaces.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="skills-filter-container">
          {/* Category Tabs */}
          <div className="tab-list">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Real-time search */}
          <div className="skills-search-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search technologies (e.g., React, Java, XGBoost, MySQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                aria-label="Clear Search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div key={index} className="skill-card glass-card">
                <div className="skill-card-top">
                  <div className="skill-icon-wrap">
                    <IconComponent size={22} className="skill-icon-svg" />
                  </div>
                  <div className="skill-title-group">
                    <h3 className="skill-title">{skill.name}</h3>
                    <span className="skill-highlight-tag">{skill.highlight}</span>
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>

                {/* Level Progress Bar */}
                <div className="skill-progress-track">
                  <div 
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="no-skills-found glass-card">
            <p>No matching technologies found for "{searchQuery}".</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="btn-secondary">
              Reset Filters
            </button>
          </div>
        )}

        {/* Resume Technical Stacks Matrix Summary Bar */}
        <div className="resume-stack-matrix glass-card">
          <div className="matrix-heading">
            <Sparkles size={18} className="text-cyan" />
            <h4>Resume Technical Stacks Overview</h4>
          </div>
          <div className="matrix-columns">
            <div className="matrix-col">
              <span className="col-label">Programming</span>
              <div className="col-tags">
                <span className="matrix-tag">Java</span>
                <span className="matrix-tag">Python</span>
                <span className="matrix-tag">C</span>
              </div>
            </div>

            <div className="matrix-col">
              <span className="col-label">AI / ML</span>
              <div className="col-tags">
                <span className="matrix-tag">Machine Learning</span>
                <span className="matrix-tag">LLM Fundamentals</span>
                <span className="matrix-tag">RAG</span>
                <span className="matrix-tag">SHAP Ex-AI</span>
              </div>
            </div>

            <div className="matrix-col">
              <span className="col-label">Backend & DB</span>
              <div className="col-tags">
                <span className="matrix-tag">SpringBoot</span>
                <span className="matrix-tag">Flask</span>
                <span className="matrix-tag">MySQL</span>
                <span className="matrix-tag">JDBC Connection</span>
              </div>
            </div>

            <div className="matrix-col">
              <span className="col-label">Frontend & Tools</span>
              <div className="col-tags">
                <span className="matrix-tag">React.js</span>
                <span className="matrix-tag">JavaScript / HTML / CSS</span>
                <span className="matrix-tag">Antigravity</span>
                <span className="matrix-tag">Git / GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
