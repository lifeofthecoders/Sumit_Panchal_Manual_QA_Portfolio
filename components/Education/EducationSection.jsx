
"use client";

import React from "react";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    educationLevel: "BACHELOR'S DEGREE",
    degree:
      "Bachelor of Engineering (B.E.) in Electronics & Communication Engineering",
    institution: "Silver Oak University",
    period: "Graduated: May 2017",
    location: "Ahmedabad, Gujarat, India",
    score: "CGPA: 7.48",
    description:
      "Completed an undergraduate engineering degree in Electronics & Communication Engineering.",
  },
  {
    educationLevel: "DIPLOMA",
    degree:
      "Diploma of Engineering (D.E.) in Electronics & Communication Engineering",
    institution: "Atul Polytechnic",
    period: "Graduated: May 2014",
    location: "Khadat, Mahudi, Gujarat, India",
    score: "CGPA: 7.74",
    description:
      "Completed a diploma in Electronics & Communication Engineering, building a foundation in engineering principles and technical problem-solving.",
  },
  {
    educationLevel: "HSC · CLASS XII",
    degree: "Higher Secondary Certificate (HSC) - Commerce",
    institution: "Vishawa Vidhyalaya Higher Secondary School",
    period: "Passed: March 2011",
    location: "Ahmedabad, Gujarat, India",
    score: "Percentage: 70.10%",
    description:
      "Completed Higher Secondary Education in Commerce under the Gujarat Secondary and Higher Secondary Education Board (GSEB).",
  },
];

const ACHIEVEMENTS = [
  {
    title: "40% Reduction in Post-Production Defects",
    platform: "REGRESSION TESTING",
    summary:
      "Improved regression testing strategies to identify defects earlier, strengthen validation coverage, and reduce post-production issues.",
  },
  {
    title: "99% Release Stability",
    platform: "RELEASE QUALITY ASSURANCE",
    summary:
      "Maintained high release stability across multiple project deployments through systematic testing, defect verification, and release validation.",
  },
  {
    title: "50+ Critical & High-Severity Issues Prevented",
    platform: "DEFECT PREVENTION",
    summary:
      "Proactively identified and helped prevent critical and high-severity production issues through comprehensive testing and risk-focused validation.",
  },
  {
    title: "100% On-Time Sprint Testing Commitments",
    platform: "AGILE / SCRUM",
    summary:
      "Delivered testing activities within sprint timelines while supporting team coordination, timely defect reporting, and reliable release planning.",
  },
  {
    title: "High-Accuracy Defect Reporting",
    platform: "DEFECT MANAGEMENT",
    summary:
      "Recognized for clear, reproducible defect reports, accurate severity assessment, and thorough test coverage across critical business workflows.",
  },
  {
    title: "Client UAT & Release Sign-Off Support",
    platform: "USER ACCEPTANCE TESTING",
    summary:
      "Supported client acceptance testing and production release decisions through requirement validation, defect verification, and quality reporting.",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education-section"
      className="w-full px-6 sm:px-12 lg:px-20 py-24 bg-bg text-fg"
    >
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
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="edu-card group p-6 sm:p-8 rounded-3xl bg-bg-alt border border-theme-border hover:border-accent transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4 gap-2">
                <span className="text-xs font-mono text-fg-muted uppercase tracking-widest">
                  {String(idx + 1).padStart(2, "0")} // {edu.educationLevel}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {edu.score}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg group-hover:text-[#0016EC] transition-colors duration-300 mb-2">
                {edu.degree}
              </h3>

              <h4 className="text-sm font-medium text-fg-muted mb-4">
                {edu.institution} •{" "}
                <span className="italic">{edu.location}</span>
              </h4>

              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                {edu.description}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-theme-border/60 text-xs font-bold font-mono text-[#0016EC]">
              {edu.period}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Honors & Competitions */}
      <div id="achievements-section" className="pj-head mb-10 scroll-mt-24">
        <span className="pj-label">QUALITY IMPACT</span>
        <h2 className="pj-title">Key Achievements</h2>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {ACHIEVEMENTS.map((ach, idx) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="edu-card group p-6 sm:p-8 rounded-2xl bg-bg-alt border border-theme-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold px-0 py-1 rounded-full bg-fg/5 text-accent uppercase tracking-wider mb-3 inline-block">
                {ach.platform}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-fg group-hover:text-[#0016EC] transition-colors duration-300 mb-2">
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
