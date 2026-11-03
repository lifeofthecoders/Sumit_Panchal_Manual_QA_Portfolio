
"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Makein Technologies",
    role: "Manual QA Engineer | Quality Assurance Analyst",
    period: "January 2021 – March 2021",
    location: "Internship / Project",
    project: "Manual Quality Assurance",
    bullets: [
      "Analyzed project requirements and translated business expectations into structured test scenarios and test cases.",
      "Executed manual test cases to validate application functionality, expected behavior, and business workflows.",
      "Identified, documented, and reported defects with clear reproduction steps to support efficient investigation and resolution.",
      "Performed regression testing to verify existing functionality after application changes and defect fixes.",
    ],
    tech: [
      "Jira",
      "Redmine",
      "Trello",
      "TestRail",
      "Browser DevTools",
      "Microsoft Excel",
      "Google Sheets",
    ],
  },
  {
    company: "Makein Technologies",
    role: "Automation QA Engineer",
    period: "April 2021 – June 2026",
    location: "Internship / Project",
    project: "Test Automation",
    bullets: [
      "Developed automation test scripts and automated regression scenarios to support repeatable software validation.",
      "Worked on web UI automation, API test automation, and test framework design using established automation technologies.",
      "Managed test data and contributed to defect reporting, investigation, and root-cause analysis.",
      "Supported continuous integration and automated test execution workflows to improve testing consistency.",
      "Collaborated with developers and QA team members to investigate failures, verify fixes, and improve test coverage.",
    ],
    tech: [
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "Maven",
      "REST Assured",
      "Jenkins",
      "Git & GitHub",
      "Cucumber BDD",
      "Browser DevTools",
      "BrowserStack",
      "Jira",
      "TestNG Reports",
      "Allure Reports",
    ],
  },
  {
    company: "Echo Innovate IT",
    role: "Manual QA Engineer | Quality Assurance Analyst",
    period: "June 2021 – Present",
    location: "Full-Time Employment / Projects",
    project: "Manual Quality Assurance",
    bullets: [
      "Analyzed requirements and prepared test plans, test scenarios, and comprehensive test cases aligned with business objectives.",
      "Performed functional, end-to-end, regression, smoke, sanity, exploratory, and risk-based testing across application workflows.",
      "Executed positive, negative, and boundary testing to identify defects and validate expected application behavior.",
      "Evaluated web interfaces, cross-browser compatibility, responsive layouts, usability, and user experience.",
      "Validated database records and application data to verify accuracy, consistency, and expected business outcomes.",
      "Managed defect reporting, triage, retesting, verification, and root-cause investigation throughout the defect lifecycle.",
      "Supported User Acceptance Testing (UAT), release validation, and quality sign-off activities.",
      "Applied Agile/Scrum practices and SDLC/STLC processes while maintaining test documentation and QA reports.",
    ],
    tech: [
      "Jira",
      "Chrome DevTools",
      "BrowserStack",
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "Maven",
      "Microsoft Excel",
      "Google Sheets",
      "Git",
      "GitHub",
      "Chrome",
      "Firefox",
      "Microsoft Edge",
      "JSON",
      "Confluence",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience-section"
      className="w-full px-6 sm:px-12 lg:px-20 py-24 bg-bg text-fg"
    >
      <div className="pj-head mb-12">
        <span className="pj-label">CAREER JOURNEY</span>
        <h2 className="pj-title">professional experience</h2>
      </div>

      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="exp-item group p-6 sm:p-8 lg:p-10 rounded-3xl bg-bg-alt border border-theme-border hover:border-accent/60 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-theme-border">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-0 py-0.5 rounded-full bg-accent/10 text-accent font-semibold tracking-wider uppercase">
                    {String(idx + 1).padStart(2, "0")} //{" "}
                    {exp.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg group-hover:text-[#0016EC] transition-colors duration-300">
                  {exp.role}
                </h3>

                <h4 className="text-base sm:text-lg font-medium text-fg-muted mt-1">
                  {exp.company}
                </h4>
              </div>

              <div className="text-sm font-semibold tracking-wider text-fg-muted md:text-right bg-fg/5 px-4 py-2 rounded-full self-start md:self-center">
                {exp.period}
              </div>
            </div>

            {/* Skills and responsibilities */}
            <ul className="mt-6 flex flex-col gap-3 text-sm sm:text-base text-fg-muted font-medium leading-relaxed">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent text-base mt-0.5 font-bold shrink-0">
                    ➔
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-theme-border/60">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-fg/5 text-fg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
