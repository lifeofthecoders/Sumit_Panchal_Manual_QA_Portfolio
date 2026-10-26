"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "CivicFlow AI",
    href: "https://civic-flow-2.vercel.app",
    github: "https://github.com/harshithachodey05-hub/civic-flow-2",
    role: "React.js • Node.js • Express • MongoDB • Gemini LLM • Tesseract OCR",
    kind: "Live App",
    note: "AI-powered civic grievance routing platform with photo and geolocation evidence, automated classification via LLM & OCR, and robust security architecture.",
  },
  {
    name: "BioFactor Pulse",
    href: "https://intern-mu-one.vercel.app",
    github: "https://github.com/harshithachodey05-hub/intern",
    role: "React.js • REST APIs • Enterprise Dashboards • Field Operations Platform",
    kind: "Live App",
    note: "Enterprise agricultural operations platform featuring real-time workforce tracking, farmer onboarding CRM, live leaderboards, and automated attendance workflows delivered during internship at Cerevyn Solutions.",
  },
  {
    name: "Insightful",
    href: null,
    github: "https://github.com/harshithachodey05-hub",
    role: "React.js • Vite • Node.js • Gemini AI • Pinecone • MongoDB Atlas",
    kind: "AI / RAG Platform",
    note: "AI customer feedback analysis platform built for a Generative AI Workshop, utilizing Retrieval-Augmented Generation (RAG) to transform unstructured user reviews into sentiment insights, emerging themes, and competitive intelligence.",
  },
  {
    name: "SmartPooling",
    href: null,
    github: "https://github.com/harshithachodey05-hub/smartpooling-frontend",
    role: "React.js • Tailwind CSS • Smart Ride Sharing",
    kind: "Frontend System",
    note: "Intelligent carpooling and route-sharing web application optimizing commute sharing, passenger discovery, and route matching.",
  },
  {
    name: "Smart Parking Management System",
    href: "https://parking-management-system-umber.vercel.app",
    github: "https://github.com/harshithachodey05-hub/parking-management",
    role: "React.js • Vite • Material-UI • Node.js • REST API • Render",
    kind: "Live App",
    note: "Comprehensive smart parking management ecosystem featuring interactive multi-floor slot mapping, real-time vehicle allocation (Car/Bike/EV), dynamic check-in/check-out billing, and an administrative control suite with bulk slot provisioning and live occupancy analytics.",
  },
];

const VENTURES = [
  {
    name: "Enterprise Full-Stack Platforms",
    role: "Scalable Application Architecture",
    href: null,
    kind: "Capability",
    note: "Multi-role enterprise platforms with scalable modular architecture, robust authentication, and high-concurrency client state.",
  },
  {
    name: "AI Systems & LLM Workflows",
    role: "Gemini • OCR • RAG • Vector DB",
    href: null,
    kind: "Capability",
    note: "Intelligent document classification, automated grievance routing, sentiment analysis, and conversational pipelines.",
  },
  {
    name: "Real-Time Operations Dashboards",
    role: "Analytics • Metrics • Visual Reporting",
    href: null,
    kind: "Capability",
    note: "Real-time field workforce monitoring, dynamic charts, data tables, and automated attendance analytics.",
  },
  {
    name: "High-Performance Modern Web Frontends",
    role: "React.js • Next.js • Tailwind CSS",
    href: null,
    kind: "Capability",
    note: "Modular, accessible user interfaces built with responsive design standards, micro-interactions, and sub-second load times.",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const Row = ({ item, index }) => {
  const hasLink = Boolean(item.href || item.github);
  const primaryUrl = item.href || item.github;

  return (
    <li className="pj-row">
      <div className="pj-link group">
        <span className="pj-num">{String(index + 1).padStart(2, "0")}</span>
        
        <div className="pj-meta">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="pj-name text-fg group-hover:text-accent transition-colors">
              {item.name}
            </span>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors flex items-center gap-1"
                title="Open Live Project"
              >
                <span>Live Demo</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-fg/20 text-fg-muted hover:text-fg hover:border-fg transition-colors flex items-center gap-1"
                title="View GitHub Repository"
              >
                <span>Source</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
          {item.role && <span className="pj-role">{item.role}</span>}
          {item.note && <span className="pj-note leading-relaxed">{item.note}</span>}
        </div>

        <span className="pj-kind">{item.kind}</span>
        <span className="pj-arrow" aria-hidden="true">
          {hasLink ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${item.name}`}
              className="text-fg group-hover:text-accent transition-colors"
            >
              <ArrowIcon />
            </a>
          ) : (
            <span className="pj-dot">•</span>
          )}
        </span>
      </div>
    </li>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = sectionRef.current.querySelectorAll(".pj-row");
      gsap.fromTo(
        rows,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      const titles = sectionRef.current.querySelectorAll(".pj-title");
      gsap.fromTo(
        titles,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      const fallbackTimer = setTimeout(() => {
        rows.forEach((r) => {
          r.style.opacity = "1";
          r.style.transform = "none";
        });
      }, 2500);

      return () => clearTimeout(fallbackTimer);
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div className="pj-head">
        <span className="pj-label">PROJECTS</span>
        <h2 className="pj-title">selected work</h2>
      </div>

      <ul className="pj-list">
        {PROJECTS.map((p, i) => (
          <Row key={p.name} item={p} index={i} />
        ))}
      </ul>

      <div id="ventures" className="pj-head pj-head--secondary">
        <span className="pj-label">WHAT I BUILD</span>
        <h2 className="pj-title">systems &amp; solutions</h2>
      </div>

      <ul className="pj-list">
        {VENTURES.map((v, i) => (
          <Row key={v.name} item={v} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
