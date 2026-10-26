"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateModal from "./CertificateModal";

const CERTIFICATES = [
  {
    id: "fcc-ml",
    title: "Machine Learning with Python Developer",
    issuer: "freeCodeCamp",
    category: "AI & ML",
    date: "September 4, 2025",
    credentialId: "harshitha_chode",
    verifyUrl: "https://freecodecamp.org/certification/harshitha_chode/machine-learning-with-python-v7",
    image: "/certificates/freecodecamp-ml-python.jpeg",
    description: "Comprehensive 300-hour developer certification demonstrating proficiency in core Machine Learning pipelines and algorithms in Python.",
  },
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things (Elite 76%)",
    issuer: "NPTEL • IIT Kharagpur • SWAYAM",
    category: "Technical & Cloud",
    date: "Jan - Apr 2026",
    credentialId: "NPTEL26CS37S851301821",
    image: "/certificates/nptel-iot-elite.jpeg",
    description: "Elite 12-week academic certification by Ministry of Education, Govt. of India covering IoT communication architectures and cloud hardware integration.",
  },
  {
    id: "aws-genai",
    title: "Developing Generative AI Solutions",
    issuer: "AWS Training & Certification",
    category: "AI & ML",
    date: "July 22, 2026",
    credentialId: "AWS-GenAI-2026",
    image: "/certificates/aws-genai-solutions.jpeg",
    description: "Specialized AWS technical training on architecting, fine-tuning, and implementing generative foundation AI models.",
  },
  {
    id: "cerevyn-intern",
    title: "Full Stack Developer Internship Completion",
    issuer: "Cerevyn Solutions Pvt Ltd",
    category: "Internships",
    date: "June 1 – June 30, 2026",
    credentialId: "Dr. Krishna Kishore, CEO & Founder",
    image: "/certificates/cerevyn-solutions-internship.jpeg",
    description: "Official internship completion letter certifying successful tenure as Full Stack Developer Intern at Cerevyn Solutions, recognizing sincerity, dedication, and engineering contributions across web platforms and operations modules.",
  },
  {
    id: "nit-ml",
    title: "Machine Learning Research Internship",
    issuer: "National Institute of Technology (NIT), Tiruchirappalli",
    category: "Internships",
    date: "May 15 – July 31, 2025",
    credentialId: "Dr. Vinay Raj Guidance",
    image: "/certificates/nit-trichy-ml-internship.jpeg",
    description: "Research internship in predictive model architectures and validation pipelines under the direct guidance of Dr. Vinay Raj.",
  },
  {
    id: "hoc-intern",
    title: "Software Developer Internship Completion",
    issuer: "House of Companies",
    category: "Internships",
    date: "June 1 – July 1, 2025",
    credentialId: "Dr. Krishna Kishore, Director",
    image: "/certificates/house-of-companies-internship.jpeg",
    description: "Internship completion certificate recognizing core contributions across Java, web modules, and collaborative team sprints.",
  },
  {
    id: "tata-forage",
    title: "GenAI Powered Data Analytics Simulation",
    issuer: "Tata • Forage",
    category: "Data & Workshops",
    date: "July 17, 2026",
    credentialId: "6a59f1ac4bffa9009bfae047",
    image: "/certificates/tata-genai-data-analytics.jpeg",
    description: "Practical simulation in predictive risk profiling with AI, exploratory data analysis, and strategic data storytelling.",
  },
  {
    id: "deloitte-forage",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte • Forage",
    category: "Data & Workshops",
    date: "July 22, 2026",
    credentialId: "hYZaiaBwqjDPoPpFG",
    image: "/certificates/deloitte-data-analytics.jpeg",
    description: "Enterprise simulation tackling real-world business data analysis and forensic technology investigation workflows.",
  },
  {
    id: "codechef-1000",
    title: "Problem Solver Diamond Badge (1000+ Problems)",
    issuer: "CodeChef",
    category: "Achievements",
    date: "2025 - 2026",
    credentialId: "CodeChef Diamond Tier",
    image: "/certificates/codechef-1000-problems.jpeg",
    description: "Diamond tier milestone awarded for solving over 1,000 data structure and algorithm challenges on CodeChef.",
  },
  {
    id: "purplelane-mern",
    title: "2-Week MERN Stack Intensive Workshop",
    issuer: "PurpleLane • SASI Autonomous Institute",
    category: "Technical & Cloud",
    date: "October 18, 2025",
    credentialId: "PurpleLane MERN-2025",
    image: "/certificates/purplelane-sasi-mern.jpeg",
    description: "Hands-on full-stack development workshop building production web applications using MongoDB, Express, React, and Node.",
  },
  {
    id: "officemaster-pbi",
    title: "PowerBI AI Dashboards Workshop",
    issuer: "OfficeMaster",
    category: "Data & Workshops",
    date: "February 22, 2026",
    credentialId: "Verified OfficeMaster",
    image: "/certificates/officemaster-powerbi.jpeg",
    description: "Building interactive, AI-powered business intelligence dashboards and operational data models in PowerBI.",
  },
  {
    id: "hp-design",
    title: "Design Thinking Course Completion",
    issuer: "HP LIFE • HP Foundation",
    category: "Technical & Cloud",
    date: "July 18, 2026",
    credentialId: "e03cb92b-bebf-4714-9ff0-aa7a58542890",
    image: "/certificates/hp-life-design-thinking.jpeg",
    description: "Mastering user-centered problem solving, customer feedback synthesis, and iterative solution prototyping.",
  },
  {
    id: "quizoff-ai",
    title: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: "CampusCrew • Unstop",
    category: "Achievements",
    date: "July 19, 2026",
    credentialId: "National Competitor",
    image: "/certificates/quizoff-ai-quiz.jpeg",
    description: "Recognized among top competitors in India's largest AI competition across 525,000+ students from 35+ countries.",
  },
];

const CATEGORIES = ["ALL", "AI & ML", "INTERNSHIPS", "TECHNICAL & CLOUD", "DATA & WORKSHOPS", "ACHIEVEMENTS"];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts =
    activeCategory === "ALL"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="certificates-section" className="w-full px-6 sm:px-12 lg:px-20 py-24 bg-bg text-fg">
      <div className="pj-head mb-8">
        <span className="pj-label">VERIFIED CREDENTIALS</span>
        <h2 className="pj-title">certifications &amp; honors</h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === cat
                ? "bg-fg text-bg shadow-sm"
                : "bg-fg/5 text-fg-muted hover:text-fg hover:bg-fg/10"
            }`}
          >
            {cat} {cat === "ALL" ? `(${CERTIFICATES.length})` : ""}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              onClick={() => setSelectedCert(cert)}
              className="cert-card group p-5 rounded-2xl bg-bg-alt border border-theme-border hover:border-accent transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-black/5 border border-theme-border group-hover:border-accent/40 transition-colors flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-bg/90 backdrop-blur-sm text-fg text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <span>Inspect</span>
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </div>

                {/* Tag & Date */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold tracking-wider uppercase">
                    {cert.category}
                  </span>
                  <span className="text-[11px] text-fg-muted font-medium">{cert.date}</span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-fg group-hover:text-accent transition-colors line-clamp-2 mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-fg-muted/90 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-fg-muted line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Bottom bar */}
              <div className="pt-4 mt-4 border-t border-theme-border/60 flex items-center justify-between text-xs font-medium">
                <span className="text-fg-muted group-hover:text-fg transition-colors">
                  {cert.credentialId ? `ID: ${cert.credentialId.slice(0, 20)}` : "Verified Credential"}
                </span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

export default Certificates;
