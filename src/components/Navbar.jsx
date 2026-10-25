import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileDown, 
  Code2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on desktop resize or Escape key press
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Honors', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="content-wrapper nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="logo-icon-box">
            <Code2 size={22} className="logo-icon" />
          </div>
          <div className="logo-text-group">
            <span className="logo-name">ARAVIND<span className="logo-dot">.S</span></span>
            <span className="logo-sub">AI & Full-Stack</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-link-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={19} className="theme-icon sun" /> : <Moon size={19} className="theme-icon moon" />}
          </button>

          {/* Resume Quick Action */}
          <a
            href={personalInfo.resumePath}
            download="Aravind_S_Resume.pdf"
            className="btn-resume-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-backdrop" 
            onClick={() => setMobileMenuOpen(false)} 
            aria-hidden="true" 
          />
          <div 
            className="mobile-drawer" 
            role="dialog" 
            aria-modal="true" 
            aria-label="Mobile Navigation Menu"
          >
            <ul className="mobile-link-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </li>
              ))}
              <li className="mobile-resume-li">
                <a
                  href={personalInfo.resumePath}
                  download="Aravind_S_Resume.pdf"
                  className="btn-primary mobile-resume-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown size={18} />
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
