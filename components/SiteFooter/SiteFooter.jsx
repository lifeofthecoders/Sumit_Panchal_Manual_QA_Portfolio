
"use client";

import React from "react";

const ACCENT_COLOR = "#0016EC";

const Icon = ({ children, className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`${className} shrink-0`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* GitHub */
const GithubIcon = () => (
  <Icon className="w-5 h-5">
    <path
      fill="currentColor"
      stroke="none"
      d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.75-.24.75-.53v-2.07c-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.7-1.48-2.45-.28-5.02-1.23-5.02-5.46 0-1.2.43-2.2 1.13-2.97-.12-.28-.49-1.4.11-2.92 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.43 3.05-1.13 3.05-1.13.6 1.52.23 2.64.11 2.92.7.77 1.13 1.77 1.13 2.97 0 4.24-2.57 5.18-5.03 5.45.4.35.75 1.02.75 2.06V22c0 .3.2.64.76.53A11.1 11.1 0 0 0 12 .9Z"
    />
  </Icon>
);

/* LinkedIn */
const LinkedinIcon = () => (
  <Icon className="w-5 h-5">
    <path
      fill="currentColor"
      stroke="none"
      d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 19H5V9h3v10ZM6.5 7.73a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-5.2c0-3.12-4-2.88-4 0V19H9V9h3v1.36c1.4-2.58 7-2.78 7 2.48V19Z"
    />
  </Icon>
);

/* Instagram */
const InstagramIcon = () => (
  <Icon className="w-5 h-5">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </Icon>
);

/* Facebook */
const FacebookIcon = () => (
  <Icon className="w-5 h-5">
    <path
      fill="currentColor"
      stroke="none"
      d="M24 12a12 12 0 1 0-13.88 11.86v-8.4H7.08V12h3.04V9.36c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.46h-2.79v8.4A12 12 0 0 0 24 12Z"
    />
  </Icon>
);

/* Quora */
const QuoraIcon = () => (
  <Icon className="w-5 h-5">
    <path
      fill="currentColor"
      stroke="none"
      d="M12.2 2.5c-5.6 0-9.1 4.2-9.1 9.5s3.5 9.5 9.1 9.5c1.8 0 3.3-.4 4.6-1.2l2 1.7 2-2.2-2-1.8c1.6-1.7 2.5-4.1 2.5-7 0-5.3-3.5-8.5-9.1-8.5Zm0 15.7c-2.9 0-4.5-2.5-4.5-6.5s1.6-6.5 4.5-6.5 4.5 2.5 4.5 6.5c0 1.7-.3 3.2-.9 4.3l-1.5-1.3-1.8 2 1.2 1.1c-.5.3-1 .4-1.5.4Z"
    />
  </Icon>
);

/* Email */
const MailIcon = () => (
  <Icon className="w-5 h-5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

/* Phone */
const PhoneIcon = () => (
  <Icon className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);

const SiteFooter = () => {
  const socialLinkClasses =
    "inline-flex items-center justify-center text-current transition-all duration-300 ease-in-out hover:!text-[#0016EC] hover:scale-125 focus-visible:!text-[#0016EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0016EC]";

  const sectionTitleClasses = "transition-colors duration-300";

  return (
    <footer id="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h1 className="f-logo">SUMIT PANCHAL</h1>

          <p className="f-desc">
            Manual QA Engineer &amp; Test Automation Specialist. <br />
            Passionate about delivering high-quality software and ensuring seamless user experiences.
          </p>

          <div
            className="f-socials flex items-center gap-5"
            role="group"
            aria-label="Social media and contact links"
          >
            <a
              href="https://github.com/lifeofthecoders"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={socialLinkClasses}
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/sumit-panchal-b790a8236/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className={socialLinkClasses}
            >
              <LinkedinIcon />
            </a>

            <a
              href="https://www.instagram.com/workhard2livelarge?igsh=MmM0YmZvNHc0bDZ2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className={socialLinkClasses}
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.facebook.com/share/1BxMxaQsV8/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className={socialLinkClasses}
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.quora.com/profile/Sumit-Panchal-345"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quora"
              title="Quora"
              className={socialLinkClasses}
            >
              <QuoraIcon />
            </a>

            <a
              href="mailto:sumitpanchal5225@gmail.com"
              aria-label="Email"
              title="Email"
              className={socialLinkClasses}
            >
              <MailIcon />
            </a>

            <a
              href="tel:7359914454"
              aria-label="Call"
              title="Call"
              className={socialLinkClasses}
            >
              <PhoneIcon />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="f-col">
            <h3
              className={sectionTitleClasses}
              style={{ color: ACCENT_COLOR }}
            >
              FEATURED PROJECTS
            </h3>

            <a href="#projects-section">LYMÜV - Taxi Booking Application</a>
            <a href="#projects-section">Dap Me - Professional Networking</a>
            <a href="#projects-section">Kinzwin - Multiplayer Gaming Platform</a>
            <a href="#projects-section">Bunny Books - Photo Book E-Commerce</a>
            <a href="#projects-section">Health-E - Digital Health Application</a>
            <a href="#projects-section">reGive - Community Sharing Application</a>
          </div>

          <div className="f-col">
            <h3
              className={sectionTitleClasses}
              style={{ color: ACCENT_COLOR }}
            >
              PORTFOLIO MAP
            </h3>

            <a href="#hero-section">Home &amp; Introduction</a>
            <a href="#about">About Me</a>
            <a href="#skills-section">QA Expertise &amp; Skills</a>
            <a href="#projects-section">Selected QA Projects</a>
            <a href="#certificates-section">Certifications &amp; Honors</a>
            <a href="#experience-section">Professional Experience</a>
            <a href="#education-section">Education &amp; Milestones</a>
            <a href="#achievements-section">Key Achievements</a>
            <a href="#contact-section">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sumit Panchal. All rights reserved.</p>
        <p>Crafted with precision. Driven by quality. Focused on excellence.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
