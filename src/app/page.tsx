"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mail, ExternalLink, Copy, Check, MapPin, ChevronUp,
  Brain, Code2, Cloud, TestTube2, ArrowUpRight, Zap,
} from "lucide-react";

// ─── SVG Brand Icons ─────────────────────────────────────────────────────────
function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const EMAIL = "pillalamarriakshay2@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Opportunity%20for%20Akshay%20Pillalamarri`;
const GITHUB  = "https://github.com/akshaypillalamarri";
const LINKEDIN = "https://www.linkedin.com/in/akshay-p-4b9a23211";
const HUGGINGFACE = "https://huggingface.co/akshayrinku";

const ROLES = [
  "AI Engineer",
  "LangGraph Developer",
  "Agentic AI Builder",
  "ML Systems Engineer",
];

const NAV = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Certs",      href: "#certifications" },
  { label: "Contact",    href: "#contact" },
];

const STATS = [
  { value: "1+",   suffix: " yr",  label: "AI Engineering" },
  { value: "5+",   suffix: "",     label: "AI Systems Deployed" },
  { value: "90%+", suffix: "",     label: "RAG Retrieval Accuracy" },
  { value: "60%",  suffix: "",     label: "Regression Time Cut" },
];

const SKILL_CATEGORIES = [
  {
    icon: Brain,
    label: "AI & Generative AI",
    items: [
      "LangGraph (Certified)", "LangChain (Certified)", "CrewAI",
      "Agentic AI Architecture", "Multi-Agent Orchestration",
      "Tool Use & Function Calling", "Human-in-the-Loop",
      "OpenAI API", "Anthropic Claude API", "Google Gemini API",
      "LLaMA-3 (Local)", "Hugging Face", "LLM Fine-Tuning (LoRA/PEFT)",
      "RAG Pipelines", "Prompt Engineering", "LLM Evaluation", "Claude Code",
    ],
  },
  {
    icon: Code2,
    label: "Languages & Frameworks",
    items: [
      "Python", "C++", "Java", "JavaScript (ES6+)", "TypeScript", "Node.js",
      "FastAPI", "REST APIs", "Gradio", "HTML5", "CSS3",
      "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV", "MediaPipe",
    ],
  },
  {
    icon: TestTube2,
    label: "Test Automation & QA",
    items: [
      "Selenium WebDriver", "TestNG", "Apache POI", "Postman",
      "Data-Driven Testing", "Regression Testing", "Root Cause Analysis",
      "Tricentis Tosca AE1", "Tricentis Tosca AS2",
    ],
  },
  {
    icon: Cloud,
    label: "Cloud, CI/CD & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, IAM)", "AWS Certified Cloud Practitioner",
      "Azure DevOps", "GitHub Actions", "Jenkins",
      "Docker", "PostgreSQL", "Git", "JIRA", "Agile / Scrum",
    ],
  },
];

const EXPERIENCE = [
  {
    title: "Software Engineer (AI/ML Focus)",
    company: "Cloud Nexus Solutions",
    location: "Folsom, CA",
    dates: "Nov 2025 – Present",
    current: true,
    bullets: [
      "Integrated LangGraph & LangChain (certified) agentic pipelines with tool use across 3+ enterprise systems",
      "Built Python FastAPI backend services with structured logging across Dev / QA / Production environments",
      "Applied GitHub Actions, Jenkins & Azure DevOps CI/CD for automated build & deployment gates",
      "Synthesized requirements from 5+ stakeholders in agile sprint cycles, contributing to code reviews",
      "Researched and evaluated emerging AI frameworks, leading proof-of-concept integrations each sprint",
    ],
  },
  {
    title: "Graduate AI/ML Project Engineer",
    company: "University of Central Missouri",
    location: "Warrensburg, MO",
    dates: "Aug 2023 – May 2025",
    current: false,
    bullets: [
      "Built & deployed 5+ production AI systems publicly on Hugging Face Spaces serving real users",
      "Fine-tuned TinyLlama-1.1B with LoRA/PEFT on 15 curated training pairs for domain-specific LLM generation",
      "Constructed RAG pipelines achieving 90%+ retrieval accuracy with PostgreSQL vector storage",
      "Designed CI/CD test automation framework (Selenium + Jenkins + TestNG) cutting regression time by 60%",
      "Maintained 3.6/4.0 GPA across MS Computer Science curriculum while shipping production AI applications",
    ],
  },
];

const PROJECTS = [
  {
    name: "Agentic Banking Customer Support",
    description: "Production multi-agent AI system with 5 specialized LangGraph agents, human-in-the-loop escalation, live observability dashboard, and tool use connecting to financial APIs.",
    tech: ["Python", "LangGraph", "LangChain", "Gemini API", "FastAPI", "HF Spaces"],
    live: "https://huggingface.co/spaces/akshayrinku/agentic-banking-support",
    github: GITHUB,
    metric: "5 AI Agents Orchestrated",
    featured: true,
  },
  {
    name: "AI-Powered Hedge Fund",
    description: "Multi-agent AI system for real-time stock analysis, risk assessment, and trade recommendations using LangGraph state graphs with tool use and function calling.",
    tech: ["Python", "LangGraph", "CrewAI", "Gemini API", "OpenAI API"],
    live: null,
    github: GITHUB,
    metric: "3+ Agents · Real-Time",
    featured: false,
  },
  {
    name: "Resume Tailor LLM",
    description: "Fine-tuned TinyLlama-1.1B with LoRA/PEFT on custom resume-JD pairs. Live Gradio app with PDF/DOCX upload and automated LLM evaluation.",
    tech: ["Python", "TinyLlama-1.1B", "LoRA/PEFT", "Hugging Face", "Gradio"],
    live: "https://huggingface.co/spaces/akshayrinku/resume-tailor-demo",
    github: GITHUB,
    metric: "Fine-Tuned LLM",
    featured: false,
  },
  {
    name: "Q&A PDF Chatbot — RAG Pipeline",
    description: "Production RAG pipeline achieving 90%+ retrieval accuracy. PostgreSQL + pgvector, FastAPI async backend, LangChain orchestration, automated LLM evaluation.",
    tech: ["Python", "LangChain", "OpenAI API", "PostgreSQL", "FastAPI", "pgvector"],
    live: null,
    github: GITHUB,
    metric: "90%+ Accuracy",
    featured: false,
  },
  {
    name: "Automated CI/CD Test Framework",
    description: "Data-driven framework reducing regression test time by 60%. Java + Selenium WebDriver + Jenkins CI/CD, 30+ automated test cases, Apache POI data integration.",
    tech: ["Java", "Selenium WebDriver", "Jenkins", "TestNG", "Apache POI"],
    live: null,
    github: GITHUB,
    metric: "60% Faster Testing",
    featured: false,
  },
  {
    name: "Job Search Automation Pipeline",
    description: "Autonomous pipeline replacing manual job research — scrapes, scores, and delivers HTML digest emails via GitHub Actions CI/CD with zero daily manual effort.",
    tech: ["Python", "GitHub Actions", "Gmail SMTP", "JobSpy API", "CI/CD"],
    live: null,
    github: GITHUB,
    metric: "Fully Autonomous",
    featured: false,
  },
];

const EDUCATION = [
  {
    degree: "Master of Science — Computer Science",
    institution: "University of Central Missouri",
    location: "Warrensburg, MO",
    dates: "Aug 2023 – May 2025",
    note: "Focus: AI/ML, Algorithms, Cloud Systems · GPA: 3.6/4.0",
    gpa: "3.6",
  },
  {
    degree: "Bachelor of Engineering — Computer Science",
    institution: "Gokaraju Rangaraju Institute of Engineering & Technology",
    location: "Hyderabad, India",
    dates: "Jul 2019 – May 2023",
    note: "",
    gpa: "",
  },
];

const CERTIFICATIONS = [
  { name: "LangChain Foundation Certificate", issuer: "LangChain Academy", date: "May 2026", accent: true },
  { name: "LangGraph Certificate",            issuer: "LangChain Academy", date: "May 2026", accent: true },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "",      accent: false },
  { name: "Selenium WebDriver with Java — Basics to Advanced", issuer: "Udemy", date: "",  accent: false },
  { name: "Tricentis Tosca Deep Dive — AE1",  issuer: "Tricentis", date: "",               accent: false },
  { name: "Tricentis Tosca Fundamentals — AS2", issuer: "Tricentis", date: "",             accent: false },
  { name: "Data Science for Engineers",        issuer: "NPTEL", date: "",                  accent: false },
  { name: "Data Analytics with Python",        issuer: "NPTEL", date: "",                  accent: false },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-amber-500/60" />
      <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold">{text}</p>
    </div>
  );
}

function SectionHeading({ text, gradient }: { text: string; gradient?: boolean }) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-tight ${gradient ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-amber-200" : "text-white"}`}>
      {text}
    </h2>
  );
}

function SkillTag({ text }: { text: string }) {
  return (
    <span className="skill-tag-hover inline-block px-3 py-1 text-xs font-medium bg-zinc-800/80 text-zinc-400 rounded-full border border-zinc-700/80 transition-all duration-300 cursor-default select-none">
      {text}
    </span>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [navScrolled, setNavScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const photoRef = useRef<HTMLDivElement>(null);

  // Role typewriter cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Cursor glow effect
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const winH = window.innerHeight;
      const docH = document.documentElement.scrollHeight - winH;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
      setNavScrolled(y > 20);
      setShowScrollTop(y > 500);
      if (photoRef.current) {
        const opacity = Math.max(0, 1 - y / (winH * 0.55));
        const translateY = y * 0.16;
        const scale = 1 - (1 - opacity) * 0.06;
        photoRef.current.style.opacity = String(opacity);
        photoRef.current.style.transform = `translateY(-${translateY}px) scale(${scale})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.25 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Fade-up
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add("visible"), i * 60);
      }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Stagger children
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".stagger-child").forEach((card, i) => {
            setTimeout(() => card.classList.add("visible"), i * 75);
          });
        }
      }),
      { threshold: 0.05 }
    );
    document.querySelectorAll(".stagger-parent").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">

      {/* ── Progress bar ── */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-none"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #f59e0b, #fcd34d, #f59e0b)",
        }}
      />

      {/* ── Cursor glow ── */}
      <div className="cursor-glow fixed inset-0 pointer-events-none z-[1]" />

      {/* ── Ambient grid ── */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      {/* ── Ambient orbs ── */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-amber-500/4 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-amber-600/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <nav className={`fixed top-2 left-0 right-0 z-50 px-6 transition-all duration-500 ${navScrolled ? "" : ""}`}>
        <div className={`max-w-5xl mx-auto transition-all duration-500 ${navScrolled ? "bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/60 rounded-2xl px-5 shadow-2xl shadow-black/40" : "bg-transparent px-0"}`}>
          <div className="h-14 flex items-center justify-between">
            <a href="#hero" className="text-amber-400 font-bold text-lg tracking-tight hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-dot" />
              AP
            </a>
            <div className="hidden md:flex items-center gap-1">
              {NAV.map((item) => (
                <a key={item.href} href={item.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-amber-400 bg-amber-500/8"
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60"
                  }`}>
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full" />
                  )}
                </a>
              ))}
            </div>
            <a href={GMAIL_COMPOSE} target="_blank" rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs text-zinc-950 font-bold bg-amber-400 px-4 py-2 rounded-full hover:bg-amber-300 transition-colors">
              <Zap size={12} /> Hire Me
            </a>
            <a href={GMAIL_COMPOSE} target="_blank" rel="noreferrer"
              className="md:hidden text-xs text-amber-400 font-medium border border-amber-500/30 px-3 py-1.5 rounded-full hover:bg-amber-500/10 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">

        <div className="relative max-w-6xl mx-auto w-full z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-8">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">

              {/* Available badge */}
              <div className="hero-animate delay-100 inline-flex items-center gap-2 mb-6 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs font-semibold text-zinc-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Available for AI Engineering Roles
              </div>

              {/* Role typewriter */}
              <p className="hero-animate delay-100 text-amber-400 text-xs tracking-[0.3em] uppercase mb-3 font-semibold h-4 overflow-hidden">
                <span className={roleVisible ? "role-visible inline-block" : "role-hidden inline-block"}>
                  {ROLES[roleIndex]}
                </span>
              </p>

              {/* Name */}
              <h1 className="hero-animate delay-200 text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-5 leading-[0.92]">
                Akshay<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  Pillalamarri
                </span>
              </h1>

              <p className="hero-animate delay-300 text-zinc-400 text-base md:text-lg mb-3 leading-relaxed lg:max-w-lg">
                LangGraph & LangChain Certified · Agentic AI Systems · Full-Stack Python · Test Automation
              </p>
              <div className="hero-animate delay-300 flex items-center justify-center lg:justify-start gap-1.5 text-zinc-500 text-sm mb-8">
                <MapPin size={13} className="text-amber-400/70" />
                <span>Folsom, CA · Open to Relocation</span>
              </div>

              {/* Tags */}
              <div className="hero-animate delay-400 flex flex-wrap justify-center lg:justify-start gap-2 mb-9">
                {["AI NATIVE", "LANGGRAPH CERTIFIED", "LANGCHAIN CERTIFIED", "AWS CCP", "CLAUDE CODE DAILY"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold tracking-wider bg-zinc-900/80 text-zinc-500 rounded-full border border-zinc-800 hover:border-amber-500/30 hover:text-amber-400/80 transition-all duration-200 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="hero-animate delay-500 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a href="#projects"
                  className="group flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-bold rounded-full text-sm hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105">
                  View My Work
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href={GMAIL_COMPOSE} target="_blank" rel="noreferrer"
                  className="px-6 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-full text-sm hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all duration-200">
                  Get In Touch
                </a>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="p-3 border border-zinc-800 rounded-full text-zinc-500 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all duration-200" aria-label="GitHub">
                  <GithubIcon size={17} />
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="p-3 border border-zinc-800 rounded-full text-zinc-500 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all duration-200" aria-label="LinkedIn">
                  <LinkedinIcon size={17} />
                </a>
                <a href={HUGGINGFACE} target="_blank" rel="noreferrer" className="p-3 border border-zinc-800 rounded-full text-zinc-500 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all duration-200" aria-label="Hugging Face">
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>

            {/* Photo */}
            <div ref={photoRef} className="flex-shrink-0 hero-animate delay-300" style={{ willChange: "opacity, transform" }}>
              <div className="relative animate-float">
                {/* Glow halo */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-amber-500/20 to-amber-600/5 blur-2xl scale-110 pointer-events-none" />
                {/* Rotating ring */}
                <div className="absolute -inset-4 rounded-[32px] border border-dashed border-amber-500/12 animate-spin-slow pointer-events-none" />
                {/* Inner ring */}
                <div className="absolute -inset-2 rounded-[30px] border border-amber-500/8 pointer-events-none" />
                {/* Frame */}
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-[300px] lg:h-[360px] rounded-[24px] overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/akshay.jpg"
                    alt="Akshay Pillalamarri"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-zinc-900/95 backdrop-blur border border-zinc-700/80 rounded-2xl px-4 py-3 shadow-2xl">
                  <p className="text-amber-400 text-xs font-bold">AI Engineer</p>
                  <p className="text-zinc-500 text-[10px] mt-0.5">LangGraph & LangChain Certified</p>
                </div>
                {/* Top badge */}
                <div className="absolute -top-3 -left-3 bg-zinc-900/95 backdrop-blur border border-zinc-800 rounded-xl px-3 py-1.5 shadow-xl">
                  <p className="text-zinc-400 text-[10px] font-semibold">Claude Code · Daily User</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-700 pointer-events-none">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500/20 to-amber-500/50" />
          <span className="tracking-widest uppercase text-[9px] text-zinc-700">SCROLL</span>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <SectionLabel text="PROFILE" />
            <SectionHeading text="Who I Am" gradient />
          </div>

          {/* Stats row */}
          <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="grad-border p-5 text-center hover:bg-amber-500/3 transition-colors duration-300">
                <p className="text-3xl font-bold text-amber-400 tabular-nums mb-1">
                  {stat.value}<span className="text-lg">{stat.suffix}</span>
                </p>
                <p className="text-zinc-600 text-xs leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="fade-up bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-10 glow-card">
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-5">
              AI automation engineer with{" "}
              <span className="text-amber-400 font-semibold">1+ year</span> of hands-on daily experience applying AI-based tools to software engineering and testing workflows. Applies{" "}
              <span className="text-amber-400 font-semibold">Claude Code daily</span> for AI-assisted development, holds{" "}
              <span className="text-amber-400 font-semibold">LangGraph and LangChain certifications</span>{" "}
              (LangChain Academy, May 2026) covering agentic AI architecture, tool use, and multi-agent orchestration.
            </p>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-5">
              Builder of automated test frameworks and quality pipelines — designed a data-driven CI/CD framework reducing regression test execution time by{" "}
              <span className="text-amber-400 font-semibold">60%</span>, maintained automated test suites covering{" "}
              <span className="text-amber-400 font-semibold">30+ test cases</span>, and constructed RAG pipelines achieving{" "}
              <span className="text-amber-400 font-semibold">90%+</span> retrieval accuracy.
            </p>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
              Designed and deployed production multi-agent AI systems using LangGraph state graphs — integrated{" "}
              <span className="text-amber-400 font-semibold">OpenAI, Anthropic Claude, and Google Gemini APIs</span> into production agentic workflows, applied{" "}
              <span className="text-amber-400 font-semibold">AWS infrastructure</span> (Certified Cloud Practitioner), and shipped live AI applications on Hugging Face Spaces serving real users.
            </p>
            <div className="flex flex-wrap gap-2">
              {["FULL STACK", "AI NATIVE", "CLOUD PRACTITIONER", "AGENTIC AI", "CERTIFIED", "OPEN SOURCE"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 text-xs font-bold tracking-widest bg-zinc-800/80 text-zinc-500 rounded-lg border border-zinc-700/80 uppercase hover:border-amber-500/30 hover:text-amber-400/70 transition-all duration-200 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-28 px-6 bg-zinc-900/15">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up">
            <SectionLabel text="ARSENAL" />
            <SectionHeading text="Technical Skills" gradient />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-parent">
            {SKILL_CATEGORIES.map(({ icon: Icon, label, items }) => (
              <div key={label} className="stagger-child grad-border p-6 glow-card group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/15 transition-colors">
                    <Icon size={16} className="text-amber-400" />
                  </div>
                  <h3 className="text-white text-sm font-bold">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => <SkillTag key={skill} text={skill} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────────────────── */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-up">
            <SectionLabel text="TIMELINE" />
            <SectionHeading text="Work Experience" gradient />
          </div>
          <div className="relative stagger-parent">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent hidden md:block" />

            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="stagger-child fade-up relative md:pl-14">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-[13px] top-7 w-[7px] h-[7px] rounded-full border-2 border-amber-400 bg-zinc-950">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping" />
                    )}
                  </div>

                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 glow-card">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-base leading-tight">{exp.title}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full uppercase tracking-wider">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-amber-400 text-sm font-semibold">{exp.company}</p>
                      </div>
                      <div className="sm:text-right flex-shrink-0">
                        <p className="text-zinc-400 text-sm font-medium">{exp.dates}</p>
                        <p className="text-zinc-600 text-xs mt-0.5 flex items-center sm:justify-end gap-1">
                          <MapPin size={10} /> {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                          <span className="text-amber-500/70 mt-[5px] flex-shrink-0 text-[8px]">◆</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6 bg-zinc-900/15">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up">
            <SectionLabel text="SHOWCASE" />
            <SectionHeading text="Key Projects" gradient />
          </div>

          {/* Featured project */}
          <div className="fade-up mb-5">
            <div className="relative grad-border p-7 md:p-9 glow-card overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-bold bg-amber-500/15 text-amber-400 rounded-full border border-amber-500/25">
                      ★ FEATURED
                    </span>
                    <span className="px-3 py-1 text-xs font-bold bg-zinc-800/80 text-zinc-400 rounded-full border border-zinc-700">
                      {featured.metric}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-3 group-hover:text-amber-100 transition-colors">
                    {featured.name}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 max-w-xl">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs bg-zinc-800/80 text-zinc-400 rounded-lg border border-zinc-700/80">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {featured.live && (
                      <a href={featured.live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-amber-500 text-zinc-950 font-bold rounded-full text-xs hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                        <ExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    <a href={featured.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 border border-zinc-700 text-zinc-400 rounded-full text-xs hover:border-amber-500/40 hover:text-amber-300 transition-all">
                      <GithubIcon size={12} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-parent">
            {rest.map((proj, i) => (
              <div key={i} className="stagger-child group grad-border p-6 flex flex-col glow-card hover:-translate-y-1 transition-transform duration-300">
                <span className="self-start px-3 py-1 text-xs font-bold bg-zinc-800/80 text-zinc-500 rounded-full border border-zinc-700 mb-4">
                  {proj.metric}
                </span>
                <h3 className="text-white font-bold text-sm mb-2.5 group-hover:text-amber-100 transition-colors duration-200 leading-snug">
                  {proj.name}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] bg-zinc-800/80 text-zinc-600 rounded border border-zinc-700/80">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-zinc-800/60">
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                      <ExternalLink size={11} /> Live
                    </a>
                  )}
                  <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-300 transition-colors">
                    <GithubIcon size={11} /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────────────────────── */}
      <section id="education" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-up">
            <SectionLabel text="BACKGROUND" />
            <SectionHeading text="Education" gradient />
          </div>
          <div className="space-y-5 stagger-parent">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="stagger-child fade-up grad-border p-6 md:p-8 glow-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{edu.degree}</h3>
                    <p className="text-amber-400 text-sm font-semibold mt-1.5">{edu.institution}</p>
                    {edu.note && (
                      <p className="text-zinc-500 text-xs mt-2 leading-relaxed max-w-sm">{edu.note}</p>
                    )}
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <p className="text-zinc-400 text-sm font-medium">{edu.dates}</p>
                    <p className="text-zinc-600 text-xs mt-0.5 flex items-center sm:justify-end gap-1">
                      <MapPin size={10} /> {edu.location}
                    </p>
                    {edu.gpa && (
                      <span className="inline-block mt-2 px-2.5 py-0.5 text-xs font-bold bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                        GPA {edu.gpa}/4.0
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ─────────────────────────────────────────────────── */}
      <section id="certifications" className="py-28 px-6 bg-zinc-900/15">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up">
            <SectionLabel text="CREDENTIALS" />
            <SectionHeading text="Certifications" gradient />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-parent">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className={`stagger-child group grad-border p-5 glow-card hover:-translate-y-1 transition-transform duration-300 ${cert.accent ? "before:!from-amber-400/40 before:!to-amber-500/15" : ""}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold transition-colors ${cert.accent ? "bg-amber-500/15 border border-amber-500/25 text-amber-400 group-hover:bg-amber-500/25" : "bg-zinc-800/80 border border-zinc-700 text-zinc-400 group-hover:border-amber-500/20"}`}>
                  {cert.issuer.slice(0, 2).toUpperCase()}
                </div>
                <h3 className={`text-xs font-bold leading-snug mb-2 ${cert.accent ? "text-white" : "text-zinc-300"}`}>{cert.name}</h3>
                <p className="text-zinc-600 text-xs">{cert.issuer}</p>
                {cert.date && (
                  <span className="inline-block mt-2.5 px-2 py-0.5 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                    {cert.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <SectionLabel text="CONNECT" />

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
            Let&apos;s Build<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Something.
            </span>
          </h2>

          <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Open to AI engineering roles, collaborations, and consulting. Based in Folsom, CA — open to relocation across the US.
          </p>

          {/* Email card */}
          <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl px-6 py-4 mb-10 glow-card cursor-default backdrop-blur">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Mail size={14} className="text-amber-400" />
            </div>
            <span className="text-zinc-300 text-sm font-mono tracking-tight">{EMAIL}</span>
            <button onClick={copyEmail} className="text-zinc-600 hover:text-amber-400 transition-colors ml-1 p-1" aria-label="Copy email">
              {copied
                ? <Check size={15} className="text-emerald-400" />
                : <Copy size={15} />
              }
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={GMAIL_COMPOSE} target="_blank" rel="noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-zinc-950 font-bold rounded-full text-sm hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105">
              <Mail size={15} /> Send Email
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-zinc-700 text-zinc-400 rounded-full text-sm font-semibold hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all">
              <GithubIcon size={15} /> GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-zinc-700 text-zinc-400 rounded-full text-sm font-semibold hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all">
              <LinkedinIcon size={15} /> LinkedIn
            </a>
            <a href={HUGGINGFACE} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-zinc-700 text-zinc-400 rounded-full text-sm font-semibold hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all">
              <ExternalLink size={15} /> Hugging Face
            </a>
          </div>

          <p className="text-zinc-800 text-xs mt-16 font-mono">
            Built with Next.js · Tailwind CSS v4 · TypeScript · Deployed on GitHub Pages
          </p>
        </div>
      </section>

      {/* ── SCROLL TO TOP ─────────────────────────────────────────────────── */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-amber-500 text-zinc-950 rounded-full shadow-lg shadow-amber-500/30 hover:bg-amber-400 hover:scale-110 active:scale-95 transition-all duration-200 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={19} />
        </button>
      )}
    </div>
  );
}
