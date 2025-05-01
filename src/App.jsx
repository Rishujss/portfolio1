// Rishabh Srivastava Portfolio - Pure React + CSS (no Tailwind or Framer Motion)
import React from 'react';
import './App.css';
import { Mail } from 'lucide-react';

export default function PortfolioHome() {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <div className="email-contact">
          <Mail size={16} />
          <span>rishabhsrivastava492@gmail.com</span>
        </div>
        <nav className="nav-links">
          <a href="#works">Works</a>
          <a href="#resume">Resume</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <img src="/profile.png" alt="Rishabh Srivastava" className="avatar" />
        <h2>Hi, I'm Rishabh 👋</h2>
        <h1>Backend Engineer & Fintech Developer</h1>
        <p>
          Specializing in scalable Java backends, high-performance banking systems, and modern enterprise solutions.
        </p>
        <a href="mailto:rishabhsrivastava492@gmail.com" className="cta-button">Connect with Me</a>
      </section>

      {/* Works */}
      <section id="works" className="section">
        <h2>Selected Work</h2>
        <div className="card">
          <h3>Finnone-Neo (Nucleus Software)</h3>
          <p>Built backend modules for a large-scale banking product. Improved query performance by 80% and implemented multithreading.</p>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="section">
        <h2>Resume</h2>
        <ul>
          <li>Software Engineer at Nucleus Software (Aug 2022 – Present)</li>
          <li>Expertise: Java, Spring, Hibernate, SQL, REST</li>
          <li>B.Tech, Electronics & Communication – JSS Academy (7.77 CGPA)</li>
          <li>Multiple Spot Awards for bug resolution and performance</li>
          <li><a href="/Rishabh_Srivastava_Resume.pdf" download>📄 Download Resume</a></li>
        </ul>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Services</h2>
        <ul>
          <li><strong>Backend Development:</strong> Clean, modular Java architecture</li>
          <li><strong>API Design:</strong> RESTful & SOAP APIs for enterprise use</li>
          <li><strong>Performance Tuning:</strong> Query optimization & multithreaded systems</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>Java, Spring, Hibernate, SQL (Oracle), REST, SOAP, Git, SVN, Multithreading, DSA, Design Patterns</p>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <h2>Testimonials</h2>
        <p>"Rishabh consistently delivers high-quality work and is highly reliable." – Client Feedback</p>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Get in Touch</h2>
        <p>I'd love to hear from you for collaboration or project work.</p>
        <a href="mailto:rishabhsrivastava492@gmail.com" className="cta-button">Send an Email</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Rishabh Srivastava. All rights reserved.</p>
      </footer>
    </div>
  );
}