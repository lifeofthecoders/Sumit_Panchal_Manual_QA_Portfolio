
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "LYMÜV - Taxi Booking Application",
    href: null,
    github: null,
    role:
      "Manual Testing • Ride Booking Flow • Driver Assignment • Payment & Wallet • Live Tracking • Notifications • Regression Testing • Admin Panel Testing",
    kind: "Taxi Booking & Ride-Hailing QA Project",
    note:
      "A real-time taxi booking platform with live tracking, digital payments, wallet, promotions, ratings, and invoicing. QA coverage includes end-to-end booking workflows, driver assignment logic, payment gateway and wallet validation, notifications, invoicing, and admin panel functionality across Android, iOS, and web admin platforms.",
  },
  {
    name: "Dap Me - Professional Networking Application",
    href: null,
    github: null,
    role:
      "Manual Testing • Registration & Login • User Profiles • Connections & Networking • Chat & Messaging • Search & Discovery • Notifications • Privacy & Account Settings • Admin Panel",
    kind: "Professional Networking QA Project",
    note:
      "A React Native professional networking application for discovering professionals, connecting with people, chatting in real time, sharing profiles, and managing professional interactions securely. Testing covers authentication, profile management, connections, messaging, notifications, subscriptions, payment gateway workflows, and admin moderation.",
  },
  {
    name: "Kinzwin - Multiplayer Gaming Platform & Scoreboard Application",
    href: null,
    github: null,
    role:
      "Manual QA • Gameplay Testing • Scoring Validation • Multiplayer Synchronization • Chat Testing • Leaderboards • Fair Play Validation • Regression Testing",
    kind: "Multiplayer Gaming & Scoreboard QA Project",
    note:
      "A competitive multiplayer gaming platform offering casual and skill-based games, social engagement, and real-time competition. QA activities include gameplay and scoring validation, multiplayer synchronization, chat functionality, leaderboard verification, fair-play checks, and release regression testing.",
  },
  {
    name: "Bunny Books - Photo Book E-Commerce Application",
    href: null,
    github: null,
    role:
      "Manual Testing • Photo Upload • Album Creation • Design Preview • Cart & Checkout • Payment Processing • Order Management • Delivery Tracking • Notifications",
    kind: "Photo Book E-Commerce QA Project",
    note:
      "A photo-book ordering platform that enables users to upload photos, create and preview personalized photo books, select layouts and cover types, complete secure checkout, and track order delivery. Testing focuses on photo uploads, album creation, design previews, cart and checkout flows, payment processing, notifications, delivery tracking, and admin management.",
  },
  {
    name: "Health-E - Digital Health & Medical Records Application",
    href: null,
    github: null,
    role:
      "Manual QA • Registration & OTP Verification • Medical Records & Reports • Profile & Health Information • Appointment Scheduling • Medication Reminders • ABHA Number Generation • Pregnancy & Paediatric Modules • Authentication & Role-Based Access",
    kind: "Digital Health & Medical Records QA Project",
    note:
      "An ABHA-focused digital health application for managing medical records, health information, appointments, medication reminders, and emergency contacts. QA coverage includes mobile registration and OTP verification, profile validation, medical-record lifecycle operations, appointment scheduling, ABHA number generation, pregnancy and paediatric care features, and administrator access controls.",
  },
  {
    name: "reGive - Community Sharing & Gift Transaction Application",
    href: null,
    github: null,
    role:
      "Manual Testing • Post & Edit Article • Image Upload & Item Details • Article Request & Withdrawal • Promise, Accept & Decline • Pickup Time & Address Selection • Transaction Status Progression • Notifications & Reminders • Rating Scenarios",
    kind: "Community Sharing & Gift Transaction QA Project",
    note:
      "A community-sharing app where users post articles they want to give away, browse item details, send or withdraw requests, and coordinate pickup times. The documented transaction lifecycle progresses through Posted, Requested, Promised, Accepted, Handover, Pickup, Concluded, and Rating, with notifications and expiry handling for time-sensitive steps.",
  },
];

const VENTURES = [
  {
    name: "End-to-End Quality Assurance",
    role: "Functional • Integration • Regression • Release Testing",
    href: null,
    kind: "QA Capability",
    note:
      "Validating complete business workflows across web and mobile applications, including integrations, critical user journeys, regression coverage, and release readiness.",
  },
  {
    name: "Test Design & Documentation",
    role: "Requirements • Test Scenarios • Test Cases • Test Coverage",
    href: null,
    kind: "QA Capability",
    note:
      "Translating business requirements into structured test scenarios, detailed test cases, test data, and traceable documentation that supports systematic validation.",
  },
  {
    name: "Defect Analysis & Management",
    role: "Bug Reporting • Severity & Priority • Retesting • Verification",
    href: null,
    kind: "QA Capability",
    note:
      "Identifying, reproducing, documenting, and tracking defects with clear evidence and reproducible steps to support effective resolution and reliable verification.",
  },
  {
    name: "Web, Mobile & User Experience Testing",
    role: "UI Validation • Compatibility • Usability • User Workflows",
    href: null,
    kind: "QA Capability",
    note:
      "Evaluating responsive interfaces, cross-browser behavior, device compatibility, usability, and real-world user interactions to identify risks before release.",
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
        <span className="pj-num">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="pj-meta">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="pj-name text-fg group-hover:text-accent transition-colors">
              {item.name}
            </span>

            {/*
              FUTURE USE: Live Demo button
              Uncomment when a project demo URL is available.

            {item.href && (
              <a href={item.href} target="_blank" rel="noreferrer" className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors flex items-center gap-1" title="Open Live Project">
                <span>Live Demo</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            */}

            {/*
              FUTURE USE: Source button
              Uncomment when a project repository URL is available.

            {item.github && (
              <a href={item.github} target="_blank" rel="noreferrer" className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-fg/20 text-fg-muted hover:text-fg hover:border-fg transition-colors flex items-center gap-1" title="View GitHub Repository">
                <span>Source</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            */}
          </div>

          {item.role && (
            <span className="pj-role">{item.role}</span>
          )}

          {item.note && (
            <span className="pj-note leading-relaxed">
              {item.note}
            </span>
          )}
        </div>

        <span className="pj-kind">{item.kind}</span>

        <span className="pj-arrow" aria-hidden="true">
          {/*
            FUTURE USE: Live App / repository arrow link
            Restore this conditional link when project URLs are available.

          {hasLink ? (
            <a href={primaryUrl} target="_blank" rel="noreferrer" aria-label={`Open ${item.name}`} className="text-fg group-hover:text-accent transition-colors">
              <ArrowIcon />
            </a>
          ) : (
            <span className="pj-dot">•</span>
          )}
          */}

          <span className="pj-dot">•</span>
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
        <h2 className="pj-title">QUALITY & ASSURANCE</h2>
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
