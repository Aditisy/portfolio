import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Code2, BrainCircuit,
  Database, Layers3, Menu, ExternalLink, Sparkles, HeartPulse, CreditCard,
  BookOpenCheck, Search, GraduationCap, MapPin, Terminal, Workflow
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    name: "SheSync",
    type: "Multimodal AI · Explainable ML",
    description: "A menstrual health monitoring and PCOS risk-prediction project exploring clinical, lifestyle and menstrual-history features, with explainability to make model outputs easier to understand.",
    stack: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Streamlit"],
    icon: HeartPulse,
    accent: "pink",
    link: "",
    linkLabel: "Add project repository"
  },
  {
    number: "02",
    name: "RecoverAI",
    type: "AI-powered payment recovery",
    description: "A payment-failure recovery project built around identifying failed transactions and supporting recovery workflows. Developed with a FastAPI backend and React frontend.",
    stack: ["Python", "FastAPI", "React", "Razorpay Test Mode"],
    icon: CreditCard,
    accent: "blue",
    link: "https://github.com/Aditisy/recoverai",
    linkLabel: "View on GitHub"
  },
  {
    number: "03",
    name: "Scheme Sahayak",
    type: "Retrieval-Augmented Generation",
    description: "A RAG-based assistant designed to help users find and understand information about government schemes through natural-language questions.",
    stack: ["Python", "RAG", "LLM application"],
    icon: BookOpenCheck,
    accent: "violet",
    link: "",
    linkLabel: "Add project repository"
  },
  {
    number: "04",
    name: "Lost & Found Management System",
    type: "Full-stack web application",
    description: "A web application for reporting and managing lost and found items, with user login and item reporting workflows.",
    stack: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: Search,
    accent: "green",
    link: "https://github.com/Aditisy/Lost-and-Found-Management-System",
    linkLabel: "View on GitHub"
  }
];

const skillGroups = [
  { icon: Code2, title: "Programming & Web", items: ["Python", "C", "HTML", "CSS", "JavaScript"] },
  { icon: BrainCircuit, title: "Machine Learning & AI", items: ["Machine Learning fundamentals", "Scikit-learn", "XGBoost", "SHAP", "RAG concepts"] },
  { icon: Database, title: "Data & Backend", items: ["NumPy", "Pandas", "MySQL", "Flask", "Streamlit"] },
  { icon: Layers3, title: "Tools & Platforms", items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab"] }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const nav = ["About", "Skills", "Projects", "Education", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>aditi<span>.</span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu size={21}/></button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="mailto:syaranaladiti@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial={{opacity:0, y:22}} animate={{opacity:1, y:0}} transition={{duration:.7}}>
            <div className="eyebrow"><span className="status-dot"/> OPEN TO AI/ML & SOFTWARE OPPORTUNITIES</div>
            <h1>Building thoughtful<br/><span className="gradient-text">AI-powered</span> solutions.</h1>
            <p className="hero-lead">Hi, I'm <strong>Aditi S Yaranal</strong> — an Artificial Intelligence & Machine Learning engineering student interested in turning ideas into useful software and intelligent applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="mailto:syaranaladiti@gmail.com"><Mail size={16}/> Get in touch</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15}/> Bengaluru, India</span>
              <span><GraduationCap size={16}/> B.E. · AI & ML</span>
            </div>
          </motion.div>
          <motion.div className="hero-art" initial={{opacity:0, scale:.94}} animate={{opacity:1, scale:1}} transition={{duration:.8, delay:.15}}>
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="core-card">
              <div className="core-top"><span className="mini-label">CURRENT FOCUS</span><Sparkles size={17}/></div>
              <div className="core-symbol"><BrainCircuit size={55} strokeWidth={1.25}/></div>
              <div className="core-title">AI + Engineering</div>
              <div className="core-sub">Learning by building</div>
              <div className="core-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
            </div>
            <div className="float-chip chip-top"><span className="chip-pulse"/> Machine Learning</div>
            <div className="float-chip chip-bottom"><Code2 size={15}/> Creative problem solving</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-heading"><span className="section-kicker">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <div className="about-grid">
            <div className="about-text">
              <p className="large-copy">Curious about how technology can solve real problems — especially where <span className="text-highlight">AI, data and thoughtful product design</span> meet.</p>
              <p>I'm pursuing a B.E. in Artificial Intelligence & Machine Learning at Global Academy of Technology, Bengaluru. I enjoy learning through hands-on projects, experimenting with machine-learning workflows and building practical web applications.</p>
              <p>I'm currently looking to grow through internships and entry-level opportunities where I can contribute, learn from experienced teams and strengthen my engineering fundamentals.</p>
            </div>
            <div className="about-stats">
              <div className="stat-card"><span className="stat-value">7.66</span><span className="stat-label">CGPA</span><span className="stat-note">Current academic record</span></div>
              <div className="stat-card"><span className="stat-value">04</span><span className="stat-label">FEATURED PROJECTS</span><span className="stat-note">AI, ML & software</span></div>
              <div className="stat-card stat-wide"><span className="stat-value">AI/ML</span><span className="stat-label">AREA OF STUDY</span><span className="stat-note">B.E. · Global Academy of Technology</span></div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-heading"><span className="section-kicker">02 / TOOLKIT</span><h2>Skills & <span className="gradient-text">technologies.</span></h2><p className="section-intro">A snapshot of the tools and concepts I've been learning and using in coursework and projects.</p></div>
          <div className="skill-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return <motion.div className="skill-card" key={group.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
                <div className="skill-icon"><Icon size={20}/></div><h3>{group.title}</h3>
                <div className="tag-list">{group.items.map(item=><span className="tag" key={item}>{item}</span>)}</div>
              </motion.div>
            })}
          </div>
          <p className="small-note">Skill levels are intentionally not rated. Be prepared to explain your hands-on experience with each item.</p>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="section-heading"><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects I've <span className="gradient-text">built.</span></h2><p className="section-intro">A few projects that reflect my interest in applied AI, machine learning and software development.</p></div>
          <div className="project-list">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <motion.article className={`project-card ${project.accent}`} key={project.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}>
                <div className="project-number">{project.number}</div>
                <div className="project-icon"><Icon size={23}/></div>
                <div className="project-content"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></div>
                <div className="project-link">{project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={project.linkLabel}><Github size={18}/><span>{project.linkLabel}</span><ArrowUpRight size={16}/></a> : <span className="link-placeholder">{project.linkLabel} <span>—</span></span>}</div>
              </motion.article>
            })}
          </div>
          <div className="github-banner"><div><Github size={21}/><div><strong>More code on GitHub</strong><span>Explore repositories and follow my learning journey.</span></div></div><a href="https://github.com/Aditisy" target="_blank" rel="noreferrer">Visit GitHub <ExternalLink size={15}/></a></div>
        </section>

        <section className="education section-wrap section-pad" id="education">
          <div className="section-heading"><span className="section-kicker">04 / EDUCATION</span><h2>Learning is a <span className="gradient-text">journey.</span></h2></div>
          <div className="education-card">
            <div className="edu-icon"><GraduationCap size={25}/></div>
            <div className="edu-main"><span className="edu-period">UNDERGRADUATE · BENGALURU, INDIA</span><h3>Bachelor of Engineering</h3><p className="edu-branch">Artificial Intelligence & Machine Learning</p><p className="edu-college">Global Academy of Technology</p></div>
            <div className="edu-score"><span>CGPA</span><strong>7.66</strong></div>
          </div>
          <div className="education-footnote">Currently in the 7th semester. Add your expected graduation year and verified certification details before publishing if you'd like them displayed.</div>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="contact-panel">
            <span className="section-kicker">05 / CONTACT</span>
            <h2>Have an opportunity<br/>or an idea? <span className="gradient-text">Let's connect.</span></h2>
            <p>I'm open to conversations about AI/ML internships, software opportunities and interesting projects.</p>
            <a className="button button-primary" href="mailto:syaranaladiti@gmail.com">Say hello <ArrowUpRight size={17}/></a>
            <div className="contact-links">
              <a href="mailto:syaranaladiti@gmail.com"><Mail size={17}/> syaranaladiti@gmail.com</a>
              <a href="https://github.com/Aditisy" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> Add your LinkedIn URL</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home">aditi<span>.</span></a><span>Designed & built with curiosity.</span><span>© {new Date().getFullYear()} Aditi S Yaranal</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
