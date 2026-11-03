"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "TEST EXECUTION",
    category: "Manual Testing",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Exploratory Testing",
      "Retesting",
    ],
    summary:
      "Validating application functionality, business requirements, and end-to-end workflows to ensure reliable behavior across web and mobile platforms.",
  },
  {
    label: "TEST DESIGN",
    category: "Test Design & Documentation",
    skills: [
      "Test Case Design",
      "Test Scenarios",
      "Test Planning",
      "Test Data Preparation",
      "Requirement Analysis",
      "RTM",
    ],
    summary:
      "Translating business requirements into structured test scenarios, comprehensive test cases, and traceable validation strategies.",
  },
  {
    label: "DEFECT CONTROL",
    category: "Defect Management",
    skills: [
      "Bug Reporting",
      "Defect Lifecycle",
      "Severity & Priority",
      "Defect Reproduction",
      "Retesting",
      "Root Cause Analysis",
    ],
    summary:
      "Identifying, documenting, prioritizing, and tracking defects with clear reproduction steps to support efficient resolution and verification.",
  },
  {
    label: "APPLICATION QA",
    category: "Web & Mobile QA",
    skills: [
      "UI Validation",
      "Cross-Browser Testing",
      "Responsive Testing",
      "Usability Testing",
      "Compatibility Testing",
      "End-to-End Testing",
    ],
    summary:
      "Evaluating user interfaces, device compatibility, responsive behavior, and complete user journeys across web and mobile applications.",
  },
  {
    label: "QA METHODOLOGY",
    category: "QA Methodologies",
    skills: [
      "SDLC",
      "STLC",
      "Agile / Scrum",
      "Risk-Based Testing",
      "Test Coverage",
      "Release Validation",
    ],
    summary:
      "Applying structured QA practices throughout the software development lifecycle to manage risks, improve coverage, and support release readiness.",
  },
  {
    label: "QA TOOLKIT",
    category: "QA Tools & Collaboration",
    skills: [
      "Jira",
      "Postman",
      "Git",
      "GitHub",
      "Browser DevTools",
      "Test Documentation",
    ],
    summary:
      "Supporting defect tracking, API validation, troubleshooting, version control, and effective collaboration with development and product teams.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills-section" className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-bg text-fg">
      <div className="pj-head mb-10">
        <span className="pj-label">QA EXPERTISE</span>
        <h2 className="pj-title">QUALITY ASSURANCE SKILLS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="skill-card group p-6 sm:p-8 rounded-2xl bg-bg-alt border border-theme-border hover:border-accent transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-fg-muted uppercase tracking-widest">
                  {String(idx + 1).padStart(2, "0")} // {group.label}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 tracking-tight group-hover:text-accent transition-colors">
                {group.category}
              </h3>
              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mb-6">
                {group.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-theme-border/60">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-fg/5 text-fg group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
