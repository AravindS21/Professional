import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { 
  Trophy, 
  Award, 
  Medal, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Calendar 
} from 'lucide-react';

const achievementIcons = {
  Trophy: Trophy,
  Award: Award,
  Medal: Medal
};

export default function Achievements() {
  return (
    <section id="achievements" className="portfolio-section achievements-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Trophy size={14} /> Competitive Honors & Awards
          </span>
          <h2 className="section-title">
            Recognized <span className="accent-text">Excellence</span>
          </h2>
          <p className="section-description">
            Demonstrated technical prowess in national hackathons, research poster presentations, and inter-collegiate technical quiz competitions.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item, idx) => {
            const IconComponent = achievementIcons[item.icon] || Trophy;
            return (
              <div key={idx} className="achievement-card glass-card">
                <div className="achievement-top">
                  <div className="award-icon-box">
                    <IconComponent size={26} className="award-icon" />
                  </div>
                  <div className="award-badge-group">
                    <span className="badge badge-amber">{item.badge}</span>
                    <span className="badge badge-primary">{item.year}</span>
                  </div>
                </div>

                <h3 className="achievement-title">{item.title}</h3>

                <div className="achievement-org-row">
                  <Building2 size={16} className="text-cyan flex-shrink-0" />
                  <span>{item.organization}</span>
                </div>

                <p className="achievement-description">{item.description}</p>

                <div className="achievement-footer">
                  <span className="category-chip">{item.category}</span>
                  <div className="verified-pill">
                    <CheckCircle2 size={14} className="text-emerald" />
                    <span>Verified Honor</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
