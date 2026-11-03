"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateModal from "./CertificateModal";
import { assetPath } from "../../lib/assetPath";

const CERTIFICATES = [
  // 1. Primary Quality Assurance Credentials
  {
    id: "quality-analyst-assessment",
    title: "Quality Analyst Assessment Certificate",
    issuer: "LearnTube.ai",
    category: "QUALITY ASSURANCE",
    date: "October 23, 2026",
    credentialId: "DJA-B-1-3236295-0",
    verifyUrl:
      "https://www.learntube.ai/verify/certificate/DJA-B-1-3236295-0",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Quality_Analyst Assessment_Certificate.png",
    description:
      "Quality Analyst assessment credential demonstrating professional competence in software quality assurance, analytical testing skills, and defect identification.",
  },
  {
    id: "automation-testing-assessment",
    title: "Automation Testing Assessment Certificate",
    issuer: "LearnTube.ai",
    category: "QUALITY ASSURANCE",
    date: "October 29, 2026",
    credentialId: "DJA-B-1-3249541-0",
    verifyUrl:
      "https://www.learntube.ai/verify/certificate/DJA-B-1-3249541-0",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Automation_Testing_Sumit_Certificate.png",
    description:
      "Successfully completed the Automation Testing Assessment offered by LearnTube.ai, demonstrating knowledge of test automation concepts and software testing practices.",
  },
  {
    id: "api-integration",
    title: "API Integration",
    issuer: "LearnTube.ai",
    category: "TECHNICAL SKILLS",
    date: "October 23, 2026",
    credentialId: "DJA-B-1-3236395-0",
    verifyUrl:
      "https://ai-ready.learntube.ai/",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - API Integration Certificate of Completion.png",
    description:
      "Successfully completed the API Integration course offered by LearnTube.ai, demonstrating knowledge of API integration concepts and practices.",
  },
  {
    id: "component-testing",
    title: "Component Testing",
    issuer: "LearnTube.ai",
    category: "QUALITY ASSURANCE",
    date: "October 23, 2026",
    credentialId: "DJA-B-1-323746-0",
    verifyUrl:
      "https://ai-ready.learntube.ai/",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Component Testing Certificate.png",
    description:
      "Successfully completed the Component Testing course offered by LearnTube.ai, demonstrating knowledge of component-level testing and software quality validation.",
  },
  {
    id: "frontend-debugging",
    title: "Frontend Debugging",
    issuer: "LearnTube.ai",
    category: "TECHNICAL SKILLS",
    date: "October 23, 2026",
    credentialId: "DJA-B-1-656688-0",
    verifyUrl:
      "https://ai-ready.learntube.ai/",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Frontend Debugging Certificate.png",
    description:
      "Successfully completed the Frontend Debugging course offered by LearnTube.ai, demonstrating knowledge of frontend debugging techniques and issue investigation.",
  },
  {
    id: "istqb-testing-generative-ai",
    title: "ISTQB Certified Tester – Testing with Generative AI (v1.1)",
    issuer: "ISTQB / iSQI",
    category: "QUALITY ASSURANCE",
    date: "October 08, 2026",
    credentialId: "25-CTGenAI-616984-15",
    verifyUrl:
      "https://www.istqb.in/certification-verification",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - ISTQB Generative AI Certificate.png",
    description:
      "Successfully passed the ISTQB Certified Tester examination in Testing with Generative AI (v1.1), demonstrating knowledge of generative AI fundamentals, LLM prompting for software testing, associated risks and mitigations, and the application of generative AI in software testing.",
  },
  {
    id: "istqb-automation",
    title: "ISTQB Automation Test Engineer",
    issuer: "ISTQB • Indian Testing Board",
    category: "QUALITY ASSURANCE",
    date: "October 1, 2026",
    credentialId: "CTFL-143893 India",
    verifyUrl:
      "https://www.istqb.in/certification-verification",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Certificate of Profession - ISTQB Automation Test Engineer.png",
    description:
      "ISTQB Automation Test Engineer certification awarded by the Indian Testing Board, validating skills in test automation strategies and implementation.",
  },
  {
    id: "istqb-ctfl-profession",
    title: "ISTQB CTFL Certificate of Profession",
    issuer: "ISTQB • Indian Testing Board",
    category: "QUALITY ASSURANCE",
    date: "September 1, 2026",
    credentialId: "CTFL-146891 India",
    verifyUrl:
      "https://www.istqb.in/certification-verification",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - ISTQB CTFL Certificate of Profession.png",
    description:
      "ISTQB CTFL Certificate of Profession confirming successful completion of Foundation Level requirements under the Indian Testing Board.",
  },
  {
    id: "istqb-foundation-profession",
    title: "Foundation Level Certificate in Software Testing",
    issuer: "ISTQB • Indian Testing Board",
    category: "QUALITY ASSURANCE",
    date: "August 1, 2026",
    credentialId: "CTFL-144993 India",
    verifyUrl:
      "https://www.istqb.in/certification-verification",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Certificate of Foundation Level Of Software Testing Profession.png",
    description:
      "Foundation Level Certificate in Software Testing awarded by the Indian Testing Board for satisfying ISTQB Foundation Level requirements.",
  },
  {
    id: "istqb-ctfl-core",
    title: "ISTQB Certified Tester – Foundation Level (Core)",
    issuer: "ISTQB • Sri Lanka Software Testing Board",
    category: "QUALITY ASSURANCE",
    date: "October 21, 2026",
    credentialId: "CTFL-2526-8991",
    verifyUrl:
      "https://www.istqb.in/certification-verification",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - ISTQB Foundation Level Certificate.png",
    description:
      "ISTQB Certified Tester Foundation Level (CTFL; Core) v4.0 – internationally recognized foundation certification in software testing principles and practices.",
  },
  {
    id: "istqb-ctfl-agile",
    title: "ISTQB Certified Tester – Foundation Level Agile Tester",
    issuer: "ISTQB • Sri Lanka Software Testing Board",
    category: "QUALITY ASSURANCE",
    date: "October 15, 2026",
    credentialId: "SL-CTFL-2425-8193",
    verifyUrl:
      "https://www.istqb.in/certification-verification",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - ISTQB Foundation Level Agile Tester Certificate.png",
    description:
      "ISTQB Certified Tester Foundation Level Agile Tester (CTFL-AT; Agile) v4.0 – specialized certification focused on testing in Agile environments.",
  },
  {
    id: "linkedin-exploratory-testing",
    title: "Software Testing: Exploratory Testing",
    issuer: "LinkedIn Learning",
    category: "QUALITY ASSURANCE",
    date: "August 22, 2020",
    credentialId: "LIL-2020-EXPTST-7845210369",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - LinkedIn Learning Certificate of Completion.png",
    description:
      "Completed Software Testing: Exploratory Testing training, strengthening knowledge of exploratory testing techniques and practical software quality evaluation.",
  },
  {
    id: "deloitte-qa",
    title: "Quality Assurance Job Simulation",
    issuer: "Deloitte • Forage",
    category: "QUALITY ASSURANCE",
    date: "July 22, 2026",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Deloitte Quality Assurance Certificate.png",
    description:
      "Completed practical tasks in Test Automation and Defect Management as part of Deloitte’s Quality Assurance Job Simulation.",
  },
  {
    id: "tata-forage-qa",
    title: "Quality Assurance Job Simulation",
    issuer: "Tata • Forage",
    category: "QUALITY ASSURANCE",
    date: "July 17, 2026",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - TATA Forage Certificate of Completion.png",
    description:
      "Completed practical tasks in test automation framework development, performance testing and analysis, defect lifecycle management and reporting, and continuous integration test execution.",
  },
  {
    id: "business-analyst-assessment",
    title: "Business Analyst Assessment Certificate",
    issuer: "LearnTube.ai",
    category: "QUALITY ASSURANCE",
    date: "February 13, 2025",
    credentialId: "DJA-B-1-988362-0",
    verifyUrl:
      "https://www.learntube.ai/verify/certificate/DJA-B-1-988362-0",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Business_Analyst Assessment_Certificate.png",
    description:
      "Business Analyst assessment credential supporting analytical thinking, requirements understanding, and quality-focused evaluation skills.",
  },

  // 2. Technical Skills Supporting QA
  {
    id: "github-foundations",
    title: "GitHub Foundations",
    issuer: "Microsoft",
    category: "TECHNICAL SKILLS",
    date: "October 21, 2026",
    credentialId: "7EBB6E-CW5424",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Microsoft GitHub Foundations Certificate.png",
    description:
      "Microsoft GitHub Foundations certification covering version control, collaboration workflows, and repository management essential for modern QA practices.",
  },
  {
    id: "oracle-java-foundations",
    title: "Oracle Certified Foundations Associate – Java",
    issuer: "Oracle University",
    category: "TECHNICAL SKILLS",
    date: "May 8, 2025",
    credentialId: "319309938JAVA8OJA",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Oracle Certified Foundations Associate Certificate.png",
    description:
      "Oracle Java Certified Foundations Associate recognition, providing a solid foundation in Java programming relevant to test automation and scripting.",
  },
  {
    id: "oracle-data-platform",
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    category: "TECHNICAL SKILLS",
    date: "September 29, 2025",
    credentialId: "3193099380C125DCFA",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Oracle Foundations Associate  Oracle_DataPlatform Certificate.png",
    description:
      "Oracle Data Platform 2025 Certified Foundations Associate, covering data concepts useful for database testing and data validation.",
  },
  {
    id: "react-essential-training",
    title: "React Essential Training",
    issuer: "LinkedIn Learning",
    category: "TECHNICAL SKILLS",
    date: "October 11, 2025",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - React Essential Training Certificate.png",
    description:
      "Training in React.js and front-end development, providing technical context for validating modern web application interfaces and user workflows.",
  },
  {
    id: "learning-python",
    title: "Learning Python",
    issuer: "LinkedIn Learning",
    category: "TECHNICAL SKILLS",
    date: "October 11, 2025",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - LinkedIn Learning Python Certificates.png",
    description:
      "Comprehensive introduction to Python programming, supporting scripting capabilities useful in test automation and data-driven testing.",
  },
  {
    id: "processing-text-python-essential",
    title: "Processing Text with Python Essential Training",
    issuer: "LinkedIn Learning",
    category: "TECHNICAL SKILLS",
    date: "October 11, 2025",
    credentialId: "o9f3c8e2b1d47f6a0e5c9b8d2f1a3e7c4b6d9f0e8a2c5b7d1e4f9a3c6b8d0e2",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - LinkedIn Learning Python Essential Certificate.png",
    description:
      "Completed Processing Text with Python Essential Training, covering unstructured data processing, Python programming, and text mining—skills that can support log analysis and data validation in software testing.",
  },
  {
    id: "processing-text-python",
    title: "Processing Text with Python Essential Training",
    issuer: "LinkedIn Learning",
    category: "TECHNICAL SKILLS",
    date: "October 11, 2025",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - LinkedIn Learning Python Certificate.png",
    description:
      "Specialized training in processing unstructured data and text mining with Python, relevant for log analysis and data validation in testing.",
  },
  {
    id: "intro-data-science",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy • JS Institute",
    category: "TECHNICAL SKILLS",
    date: "February 21, 2025",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Cisco Networking Academy Certificate.png",
    description:
      "Introduction to Data Science offered through the Cisco Networking Academy program, building analytical foundations useful for quality analysis.",
  },
  {
    id: "javascript-essentials-1",
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy • Silver Oak University",
    category: "TECHNICAL SKILLS",
    date: "August 23, 2017",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - JavaScript Essentials Certificate 1.png",
    description:
      "JavaScript Essentials 1 covering core language concepts, supporting understanding of client-side application behavior during testing.",
  },
  {
    id: "javascript-essentials-2",
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy • Silver Oak University",
    category: "TECHNICAL SKILLS",
    date: "August 23, 2017",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - JavaScript Essentials Certificate 2.png",
    description:
      "JavaScript Essentials 2 advancing programming skills for deeper insight into web application logic and test scenarios.",
  },
  {
    id: "css-essentials",
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy • Silver Oak University",
    category: "TECHNICAL SKILLS",
    date: "July 19, 2017",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Modern CSS Essentials Certificate.png",
    description:
      "CSS Essentials training focused on styling and layout, aiding visual and UI testing of web applications.",
  },
  {
    id: "html-essentials",
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy • Silver Oak University",
    category: "TECHNICAL SKILLS",
    date: "July 17, 2017",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - Modern HTML Essentials Certificate.png",
    description:
      "HTML Essentials covering structural web technologies, providing foundational knowledge for functional and accessibility testing.",
  },
  {
    id: "cpp-programming",
    title: "CLA: Programming Essentials in C",
    issuer: "C++ Institute • Cisco Networking Academy",
    category: "TECHNICAL SKILLS",
    date: "March 21, 2017",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - C++ Programming Achievement Certificate.png",
    description:
      "Programming Essentials in C covering fundamental programming concepts, syntax, and problem-solving techniques.",
  },

  // 3. Achievements & Extracurricular
  {
    id: "quizoff-ai",
    title: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: "CampusCrew • Unstop",
    category: "ACHIEVEMENTS",
    date: "July 19, 2026",
    credentialId: "",
    image:
      "/Sumit Panchal - Certificates/Sumit Panchal - QuizOff 2026 Certificate for Sumit Panchal.png",
    description:
      "Participation recognition for QuizOff 2026 – India’s Biggest AI Quiz, organized by CampusCrew and hosted on Unstop, involving over 525,000 students.",
  },
];

const CATEGORIES = [
  "ALL",
  "QUALITY ASSURANCE",
  "TECHNICAL SKILLS",
  "ACHIEVEMENTS",
];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts =
    activeCategory === "ALL"
      ? CERTIFICATES
      : CERTIFICATES.filter(
        (cert) =>
          cert.category.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <section
      id="certificates-section"
      className="w-full px-6 sm:px-12 lg:px-20 py-24 bg-bg text-fg"
    >
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
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat
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
                    src={assetPath(cert.image)}
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

                {/* Category & Date */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-0 py-0.5 rounded-full bg-accent/10 text-accent font-semibold tracking-wider uppercase">
                    {cert.category}
                  </span>
                  <span className="text-[11px] text-fg-muted font-medium">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-fg group-hover:text-[#0016EC] transition-colors duration-300 line-clamp-2 mb-1.5">
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
                  {cert.credentialId
                    ? `ID: ${cert.credentialId.slice(0, 20)}`
                    : "Certificate"}
                </span>

                <span className="text-accent group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Fullscreen Certificate Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

export default Certificates;