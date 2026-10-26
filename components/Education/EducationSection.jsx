"use client";

import React from "react";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "B.Tech, Computer Science & Engineering (AI & ML)",
    institution: "Sasi Institute of Technology and Engineering",
    period: "2023 – 2027",
    location: "Tadepalligudem, Andhra Pradesh",
    score: "CGPA: 7.9 / 10.0",
    description: "Specialized in Artificial Intelligence, Machine Learning algorithms, Full Stack Software Engineering, Distributed Databases, and Cloud Architecture.",
  },
  {
    degree: "Intermediate (Class XII) — MPC",
    institution: "Sasi Junior College",
    period: "2021 – 2023",
    location: "Andhra Pradesh",
    score: "Percentage: 94%",
    description: "Rigorous analytical curriculum focused on advanced Mathematics, Physics, and Chemistry.",
  },
  {
    degree: "Class X (Secondary School Certificate)",
    institution: "Saint Francis De Sales School",
    period: "2021",
    location: "Andhra Pradesh",
    score: "Percentage: 99.67%",
    description: "Exceptional academic record with top honors across foundational sciences, mathematics, and languages.",
  },
];

const ACHIEVEMENTS = [
  {
    title: "1,000+ Algorithmic Challenges Solved",
    platform: "CodeChef Diamond Problem Solver",
    summary: "Earned the Diamond Problem Solver Badge on CodeChef through consistent competitive programming across data structures, graph theory, and dynamic programming.",
  },
  {
    title: "Elite Certification — Internet of Things (76%)",
    platform: "NPTEL • IIT Kharagpur",
    summary: "Awarded Elite classification by the Ministry of Education, Govt. of India in a 12-week proctored certification exam covering sensor networks and cloud interfaces.",
  },
  {
    title: "National Competitor — QuizOff 2026",
    platform: "CampusCrew • Unstop",
    summary: "Competed in India's biggest AI competition among 525,000+ students from 48,500+ institutions across 35+ countries.",
  },
  {
    title: "Generative AI Hackathon Developer",
    platform: "Insightful RAG System",
    summary: "Built the responsive multi-stakeholder frontend interface for Insightful, analyzing customer sentiment and competitive themes using Gemini AI and Pinecone.",
  },
];

const EducationSection = () => {
  return (
    <section id="education-section" className="w-full px-6 sm:px-12 lg:px-20 py-24 bg-bg text-fg">
      {/* Education Header */}
      <div className="pj-head mb-12">
        <span className="pj-label">ACADEMIC BACKGROUND</span>
        <h2 className="pj-title">education &amp; milestones</h2>
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="edu-card p-6 sm:p-8 rounded-3xl bg-bg-alt border border-theme-border hover:border-accent transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-fg-muted uppercase tracking-widest">
                  0{idx + 1} // DEGREE
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {edu.score}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg mb-2">
                {edu.degree}
              </h3>
              <h4 className="text-sm font-medium text-fg-muted mb-4">
                {edu.institution} • <span className="italic">{edu.location}</span>
              </h4>
              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                {edu.description}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-theme-border/60 text-xs font-mono text-fg-muted">
              {edu.period}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Honors & Competitions */}
      <div className="pj-head mb-10">
        <span className="pj-label">RECOGNITION</span>
        <h2 className="pj-title">honors &amp; achievements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {ACHIEVEMENTS.map((ach, idx) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="edu-card p-6 sm:p-8 rounded-2xl bg-bg-alt border border-theme-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-fg/5 text-accent uppercase tracking-wider mb-3 inline-block">
                {ach.platform}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-fg mb-2">
                {ach.title}
              </h3>
              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                {ach.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
