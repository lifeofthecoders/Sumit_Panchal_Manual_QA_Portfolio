"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "C"],
    summary: "Core languages utilized across algorithmic problem solving, modern web applications, and AI pipeline orchestration.",
  },
  {
    category: "Frontend Engineering",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "REST API Integration", "Responsive Architecture"],
    summary: "Designing modular UI systems, component lifecycles, state management, and pixel-perfect responsive layouts.",
  },
  {
    category: "Backend & Security",
    skills: ["Node.js", "Express.js", "FastAPI", "MongoDB", "RESTful APIs"],
    summary: "Architecting high-performance server architectures, scalable microservices, and robust RESTful API endpoints.",
  },
  {
    category: "AI, ML & LLMs",
    skills: ["Google Gemini LLM", "Tesseract OCR", "EasyOCR", "Machine Learning", "RAG Workflows", "Pinecone Vector DB", "Data Preprocessing"],
    summary: "Deploying intelligent retrieval-augmented generation systems, OCR document processors, and predictive modeling pipelines.",
  },
  {
    category: "Database",
    skills: ["MySQL", "SQL", "Database Connectivity", "REST API Integration"],
    summary: "Designing relational database schemas, structured querying, seamless backend database connectivity, and efficient REST API integrations.",
  },
  {
    category: "Development Practices",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter", "Antigravity", "Vercel", "Render"],
    summary: "Collaborative version control discipline, interactive notebook experimentation, rapid prototyping, and cloud application deployments.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills-section" className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-bg text-fg">
      <div className="pj-head mb-10">
        <span className="pj-label">TECHNICAL ARSENAL</span>
        <h2 className="pj-title">skills &amp; proficiencies</h2>
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
                  0{idx + 1} // DOMAIN
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
