import React from 'react';
import './index.css';
import profilePic from './assets/profile.jpeg';

function App() {
  const experiences = [
    {
      role: "Software Developer",
      company: "AITeg Academy",
      period: "Oct 2025 – Jan 2026",
      desc: "Built and maintained live production systems, including an academy website and financial management tools."
    },
    {
      role: "Full Stack Developer Intern",
      company: "Nexium (Remote)",
      period: "Jul 2025 – Aug 2025",
      desc: "Built AI-based projects including an AI Recipe Generator using Next.js, MongoDB, Supabase, and automation tools (n8n)."
    },
    {
      role: "Backend Developer Intern",
      company: "HireBridge",
      period: "May 2025 – Jun 2025",
      desc: "Developed authentication, application workflows, email notifications, and optimized backend APIs."
    }
  ];

  const projects = [
    {
      title: "MedINova",
      subtitle: "Offline AI Chatbot (FYP In Process)",
      desc: "An offline AI-powered health chatbot app using React Native, FastAPI, MongoDB. It features distilled Qwen for chat and PaddleOCR for text extraction, supporting both online and offline modes.",
      tags: ["React Native", "FastAPI", "MongoDB", "AI"]
    },
    {
      title: "EliteDrive",
      subtitle: "Online Car Rental Platform",
      desc: "A web-based car rental platform allowing showroom owners to list vehicles, and users to rent cars, book drivers, and track live locations with real-time chat and role-based authentication.",
      tags: ["Web", "Real-time", "Auth", "Location Tracking"],
      link: "https://luxury-cars-murex.vercel.app/login"
    },
    {
      title: "PoshakFabrics",
      subtitle: "Online Fabrics Store (Live on Google)",
      desc: "Built a scalable web-based Fabric Store with an admin panel and authentication. Designed to scale seamlessly with CDN integration and Redis caching.",
      tags: ["Web", "E-Commerce", "Redis", "AI", "React Query"],
      link: "https://www.poshakfabrics.org/"
    }
  ];

  const educationAndCerts = [
    {
      title: "BS in CS",
      institution: "University of Gujrat",
      desc: "Currently in 8th Semester • CGPA: 2.97/4.0",
      year: "2022-2026",
      type: "Education"
    },
    {
      title: "Software Engineering Course",
      institution: "Coursera",
      year: "2025",
      type: "Certificate"
    },
    {
      title: "Software Sprint Competition",
      institution: "Daira Participation",
      year: "2024",
      type: "Certificate"
    },
    {
      title: "Webinar: “The Growth Mindset”",
      institution: "Hirebridge",
      year: "2025",
      type: "Certificate"
    }
  ];

  const skills = [
    {
      category: "Languages & Frameworks",
      items: ["Python", "JavaScript", "React.js", "Node.js", "Express.js", "Next.js", "Django", "FastAPI", "Generative AI"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL"]
    },
    {
      category: "Additional Tools",
      items: ["Git", "VS Code", "Postman", "Google Antigravity", "Docker"]
    },
    {
      category: "Soft Skills",
      items: ["Problem-solving", "Team collaboration", "Fast learner"]
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <main className="main-content">
        {/* Header/Hero Section */}
        <header className="hero-section glass-card">
          <div className="hero-content">
            <div className="profile-container">
              <img src={profilePic} alt="Asad Imran" className="profile-image" />
            </div>
            <h1 className="name">Asad Imran</h1>
            <h2 className="title">Software Engineer</h2>
            <p className="bio">
              Passionate developer specializing in full-stack backend development, AI integration, and building robust production systems. Let's build something amazing.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/asad-imran-152638371" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                LinkedIn
              </a>
              <a href="https://github.com/asadimran12" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className="section">
          <h3 className="section-title">
            <span className="title-text">Skills & Technologies</span>
          </h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card glass-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="skill-category">{skillGroup.category}</h4>
                <div className="tags">
                  {skillGroup.items.map(item => (
                    <span key={item} className="tag tag-skill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h3 className="section-title">
            <span className="title-text">Professional Experience</span>
          </h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item glass-card slide-up" style={{ animationDelay: `${index * 0.15 + 0.2}s` }}>
                <div className="timeline-header">
                  <h4 className="role">{exp.role}</h4>
                  <span className="period">{exp.period}</span>
                </div>
                <h5 className="company">{exp.company}</h5>
                <p className="desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h3 className="section-title">
            <span className="title-text">Featured Projects</span>
          </h3>
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <div key={index} className="project-card glass-card slide-up" style={{ animationDelay: `${index * 0.15 + 0.3}s` }}>
                <h4 className="project-title">{proj.title}</h4>
                <h5 className="project-subtitle">{proj.subtitle}</h5>
                <p className="project-desc">{proj.desc}</p>
                <div className="tags">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certificates Section */}
        <section className="section">
          <h3 className="section-title">
            <span className="title-text">Education & Certificates</span>
          </h3>
          <div className="certs-grid">
            {educationAndCerts.map((item, index) => (
              <div key={index} className="cert-card glass-card slide-up" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                <div className="cert-header">
                  <span className="cert-type">{item.type}</span>
                  <span className="cert-year">{item.year}</span>
                </div>
                <h4 className="cert-title">{item.title}</h4>
                <p className="cert-institution">{item.institution}</p>
                {item.desc && <p className="cert-desc">{item.desc}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Asad Imran. Built with React + Vite.</p>
      </footer>
    </div>
  );
}

export default App;
