import { useEffect, useState } from 'react';

const contact = {
  name: 'CHALLA ESWAR VENKATA DURGA RAO',
  phone: '+91 91XXXXXX67',
  email: 'eswarchalla9642@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/challa-eswar-venkata-durga-rao-472154227/',
};

  const sections = {
    summary: `I am a results-driven professional with 1+ years of experience in designing and implementing efficient solutions. With strong problem-solving skills, a collaborative mindset, and proficiency in data structures and algorithms, I have a proven track record of building scripts for automation, incident management, and improving client observability mechanisms with custom monitoring solutions to deliver impactful results.`,
    education: {
      degree: 'BTech in Computer Science and Engineering',
      institution: 'Vasireddy Venkatadri Institute of Technology',
      period: 'Apr 2020 – Apr 2024'
    },
    skills: {
      languages: ['Python', 'Java'],
      databases: ['MySQL'],
      technologies: ['Kubernetes', 'Docker', 'Private Cloud', 'Flask'],
      tools: ['Git', 'DSA', 'REST APIs', 'GitHub Actions CI/CD workflow'],
      fundamentals: ['OS', 'DBMS', 'OOP']
    },
    experience: {
      title: 'Software Engineer',
      team: 'Common Control Plane Team',
      company: 'Societe Generale',
      period: 'Aug 2024 - Current',
      responsibilities: [
        'Automated certificate renewal using Python script and GitHub Actions, preventing service outages.',
        'Built a custom Prometheus exporter to collect detailed resource utilization metrics per account.',
        'Played a key role in incident management for XAAS control planes, quickly resolving production issues.',
        'Created easy-to-use Grafana dashboards for clients to monitor logs, Kubernetes clusters, and certificate expiration.',
        'Prepared documentation and delivered knowledge transfer sessions for new team members.',
        'Supported major migrations from Gen1 to Gen2 and assisted clients during onboarding.',
        'Gained exposure to CI/CD workflows and agile development processes within platform teams.',
      ],
      timeline: [
        { company: 'Societe Generale', startDate: 'Aug 2024' },
      ],
      workExperience: [
        {
          company: 'Societe Generale',
          role: 'Software Engineer',
          joined: 'Aug 2024',
          current: 'Current',
          responsibilities: [
            'Automated certificate renewal with Python and GitHub Actions for improved reliability.',
            'Built observability tooling including Prometheus exporters and Grafana dashboards.',
            'Responded to production incidents and supported client onboarding during migrations.',
            'Developed reusable automation patterns for CI/CD and infrastructure monitoring.',
          ],
        },
      ],
    },
    projects: [
      {
        title: 'Rental Homes',
        technologies: ['JSP', 'Java', 'HTML', 'CSS', 'Tomcat Server'],
        details: 'Developed a property listing and search interface with detailed profiles and user management using standard web technologies.'
      },
      {
        title: 'Automated Car: Intelligent Maneuver',
        technologies: ['Raspberry Pi', 'Ultrasonic Sensors', 'Python'],
        details: 'Built an autonomous vehicle system with lane detection, object avoidance, self-parking, and traffic light detection. The research was published in IJRASET Journal.'
      },
      {
        title: 'Cloud Reliability Toolkit',
        technologies: ['Python', 'Terraform', 'Prometheus', 'Grafana'],
        details: 'Built a temporary automation toolkit for alerting, drift detection and observability orchestration across hybrid cloud services.',
      },
    ],
    achievements: [
      'Star of the Quarter',
      'Spot Award',
      'Bravo Award',
      'YG of the Quarter',
      'Support for clients during platform onboarding and transition',
      'Recognition for going above and beyond in delivery and collaboration'
    ],
    certifications: ['Azure 200 Certification', 'Adasci AI Solution Architect Certification', 'Microsoft Azure Fundamentals (AZ-900)']
  };

  const specialties = [
    'Site Reliability Engineering',
    'DevOps Automation',
    'Cloud Observability',
    'Backend Platform Reliability',
    'CI/CD and Release Orchestration'
  ];

  function SectionCard({ title, children }) {
    return (
      <section className="section-card">
        <h2>{title}</h2>
        {children}
      </section>
    );
  }

  function parseStartDate(period) {
    const startValue = period?.split('-')?.[0]?.trim();
    if (!startValue) return null;
    const [month, year] = startValue.split(' ');
    return month && year ? new Date(`${month} 1, ${year}`) : null;
  }

  function calculateYears(startDate) {
    if (!(startDate instanceof Date) || Number.isNaN(startDate.getTime())) return 0;
    const now = new Date();
    const totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    return Math.max(0, totalMonths / 12);
  }

  function formatJoinedText(startDate) {
    if (!(startDate instanceof Date) || Number.isNaN(startDate.getTime())) return '';
    return startDate.toLocaleString('default', { month: 'short', year: 'numeric' });
  }

  function SkillList({ label, items }) {
    return (
      <div className="skill-block">
        <h4>{label}</h4>
        <p>{items.join(' · ')}</p>
      </div>
    );
  }

export default function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storageKey = 'eswar-portfolio-visit-count';
    const currentCount = Number(localStorage.getItem(storageKey) || 0) + 1;
    localStorage.setItem(storageKey, currentCount.toString());
    setVisitorCount(currentCount);
  }, []);



  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer · SRE · DevOps · Backend Engineer</p>
          <h1>{contact.name}</h1>
          <p className="hero-description">
            Building reliable cloud platforms with automation, monitoring, and infrastructure intelligence.
            I help teams reduce outages, improve observability, and deliver resilient backend services.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            <a className="button secondary" href={contact.linkedIn} target="_blank" rel="noreferrer">View LinkedIn</a>
          </div>
          <div className="hero-metrics">
            <div className="metric-card">
              <p className="metric-value">{visitorCount}</p>
              <p className="metric-label">Page visitors</p>
            </div>
            <div className="metric-card">
              <p className="metric-value">99.97%</p>
              <p className="metric-label">Service uptime</p>
            </div>
            <div className="metric-card">
              <p className="metric-value">3</p>
              <p className="metric-label">Certifications</p>
            </div>
          </div>
          <div className="visual-tag-grid">
            <span>Python</span>
            <span>Kubernetes</span>
            <span>Grafana</span>
            <span>CI/CD</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-chip">Platform & Infrastructure</div>
            <div className="visual-panel">
              <div className="expertise-grid">
                <div className="expertise-item">
                  <p className="expertise-label">DevOps</p>
                  <strong>Automation & CI/CD</strong>
                </div>
                <div className="expertise-item">
                  <p className="expertise-label">SRE</p>
                  <strong>Reliability Engineering</strong>
                </div>
                <div className="expertise-item">
                  <p className="expertise-label">Cloud Ops</p>
                  <strong>Infrastructure at Scale</strong>
                </div>
                <div className="expertise-item">
                  <p className="expertise-label">Observability</p>
                  <strong>Monitoring & Alerting</strong>
                </div>
                <div className="expertise-item">
                  <p className="expertise-label">Container Orch.</p>
                  <strong>Kubernetes & Docker</strong>
                </div>
                <div className="expertise-item">
                  <p className="expertise-label">Incident Mgmt</p>
                  <strong>Production Support</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="specialty-banner">
        {specialties.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <main className="content-grid enhanced">
        <div className="main-column">
          <SectionCard title="Summary">
            <p>{sections.summary}</p>
          </SectionCard>

          <SectionCard title="Career Highlights">
            <ul className="highlight-list">
              <li>Designed automation flows for certificate renewal and reduced downtime risk.</li>
              <li>Delivered custom Prometheus exporters and Grafana dashboards for deep infrastructure observability.</li>
              <li>Supported Gen1 to Gen2 migrations for client onboarding in private cloud environments.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Projects">
            <div className="project-grid">
              {sections.projects.map((project, index) => (
                <article key={index} className="project-card">
                  <div className="project-tag">Project</div>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.technologies.join(' · ')}</p>
                  <p>{project.details}</p>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Experience Timeline">
            <div className="timeline-graph">
              {sections.experience.timeline.map((item, index) => (
                <div key={index} className="timeline-bar-row">
                  <div className="timeline-company">{item.company}</div>
                  <div className="timeline-bar-track">
                    <div className="timeline-bar-fill" style={{ width: '100%' }}>
                      <span>{calculateYears(parseStartDate(item.startDate)).toFixed(1)} yrs</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Work Experience">
            <ul className="work-experience-list">
              {sections.experience.workExperience.map((item, index) => (
                <li key={index}>
                  <div className="experience-summary">
                    <strong>{item.company}</strong>
                    <span>{item.role}</span>
                    <span>Joined {formatJoinedText(parseStartDate(item.joined))} - {item.current}</span>
                  </div>
                  <ul className="experience-responsibilities">
                    {item.responsibilities.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Education">
            <div className="education-card">
              <p className="period">{sections.education.period}</p>
              <h3>{sections.education.degree}</h3>
              <p>{sections.education.institution}</p>
            </div>
          </SectionCard>
        </div>

        <aside className="sidebar-column">
          <SectionCard title="Contact & Resume">
            <p className="info-line"><strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
            <p className="info-line"><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <a className="link-button" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </SectionCard>

          <SectionCard title="Skills & Tools">
            <SkillList label="Languages" items={sections.skills.languages} />
            <SkillList label="Databases" items={sections.skills.databases} />
            <SkillList label="Technologies" items={sections.skills.technologies} />
            <SkillList label="Tools" items={sections.skills.tools} />
            <SkillList label="Fundamentals" items={sections.skills.fundamentals} />
          </SectionCard>

          <SectionCard title="Certifications">
            <ul>
              {sections.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Recognition">
            <ul>
              {sections.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </SectionCard>
        </aside>
      </main>
    </div>
  );
}
