
"use client";

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";

import LetsTalk from "./LetsTalk";
import MenuButton from "./MenuButton";
import Link from "next/link";
import MusicButton from "./MusicButton";

const ACCENT_BLUE = "#0016EC";

const EMAIL = "sumitpanchal5225@gmail.com";
const PHONE = "tel:6301496899";
const LINKEDIN_URL = "https://www.linkedin.com/in/sumit-panchal-b790a8236/";
const GITHUB_URL = "https://github.com/lifeofthecoders";

const scrollToSection = (id) => {
  if (typeof window === "undefined") return;

  const target = id === "top" ? 0 : document.getElementById(id);
  if (target == null) return;

  const lenis = window.__lenis;

  if (lenis && typeof lenis.scrollTo === "function") {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
    return;
  }

  if (target === 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const MOBILE_NAV_ITEMS = [
  { label: "HOME", target: "top" },
  { label: "ABOUT", target: "about" },
  { label: "SKILLS", target: "skills-section" },
  { label: "WORK", target: "projects-section" },
  { label: "CERTIFICATES", target: "certificates-section" },
  { label: "EXPERIENCE", target: "experience-section" },
  { label: "EDUCATION", target: "education-section" },
  { label: "CONTACT", target: "contact-section" },
];

function Navbar() {
  const [rotate, setRotate] = useSpring(() => ({
    transform: "rotate(0deg)",
    config: { tension: 300, friction: 20, mass: 1 },
  }));

  const [open, set] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    set(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined" || !mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const handleMobileNav = (e, target) => {
    e.preventDefault();
    setMobileOpen(false);
    setRotate({ transform: "rotate(0deg)" });
    setTimeout(() => scrollToSection(target), 50);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setRotate({ transform: "rotate(0deg)" });
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 z-[100001] w-full px-5 py-5 lg:hidden transition-all duration-300 ${
          scrolled ? "bg-bg/85 backdrop-blur-md shadow-sm" : ""
        }`}
      >
        <div className="flex w-full items-center justify-between font-extrabold">
          <Link
            href="/"
            aria-label="Home"
            onClick={(e) => handleMobileNav(e, "top")}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-85 transition-opacity"
          >
            <img
              src="/avatar.png"
              alt="Sumit Panchal"
              className="w-8 h-8 rounded-full object-cover border border-fg/10"
            />

            <span
              className={`tracking-wider font-semibold text-lg transition-colors duration-200 ${
                scrolled ? "text-fg" : "text-[#060607]"
              }`}
              style={{ letterSpacing: "-0.03em" }}
            >
              SUMIT PANCHAL
            </span>
          </Link>

          <div className="flex items-center">
            <MusicButton />

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="nav_btn_sm flex items-center justify-center cursor-pointer transition-colors duration-200 hover:!text-[#0016EC]"
              onMouseEnter={() =>
                !mobileOpen && setRotate({ transform: "rotate(90deg)" })
              }
              onMouseLeave={() =>
                !mobileOpen && setRotate({ transform: "rotate(0deg)" })
              }
              onClick={() => {
                const next = !mobileOpen;
                setMobileOpen(next);
                setRotate({
                  transform: next ? "rotate(45deg)" : "rotate(0deg)",
                });
              }}
            >
              <animated.div
                className="text-[0.55rem] leading-none"
                style={rotate}
              >
                {mobileOpen ? "✕" : "⬤ ⬤"}
              </animated.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100000] lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-bg"
          onClick={closeMobileMenu}
        />

        <div className="relative z-10 flex h-full w-full flex-col overflow-y-auto px-6 pt-20 pb-8">
          <nav className="flex flex-col gap-0.5">
            {MOBILE_NAV_ITEMS.map((item, i) => (
              <a
                key={item.target}
                href={item.target === "top" ? "#" : `#${item.target}`}
                onClick={(e) => handleMobileNav(e, item.target)}
                className="group flex items-center justify-between py-3 border-b border-theme-border text-fg text-2xl font-semibold transition-[color,transform,opacity] duration-200 hover:!text-[#0016EC]"
                style={{
                  letterSpacing: "-0.03em",
                  transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: mobileOpen ? 1 : 0,
                  transitionProperty: "color, transform, opacity",
                  transitionDuration: "0.4s, 0.4s, 0.4s",
                  transitionDelay: `${0.03 + i * 0.04}s`,
                  transitionTimingFunction: "ease",
                }}
              >
                <span className="transition-colors duration-200 group-hover:!text-[#0016EC]">
                  {item.label}
                </span>

                <span className="text-fg-muted text-xs transition-colors duration-200 group-hover:!text-[#0016EC]">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-theme-border flex flex-col gap-2.5">
            <p className="text-fg-muted text-[10px] tracking-[0.2em] uppercase">
              Connect directly
            </p>

            <a
              href={`mailto:${EMAIL}`}
              onClick={closeMobileMenu}
              className="flex items-center justify-between bg-fg text-bg rounded-full px-5 py-3 text-xs tracking-[0.2em] font-semibold transition-colors duration-200 hover:!bg-[#0016EC] hover:!text-white"
            >
              <span>EMAIL</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-between border-2 border-fg text-fg rounded-full px-5 py-3 text-xs tracking-[0.2em] font-semibold transition-colors duration-200 hover:!border-[#0016EC] hover:!text-[#0016EC]"
            >
              <span>LINKEDIN</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-between border-2 border-fg text-fg rounded-full px-5 py-3 text-xs tracking-[0.2em] font-semibold transition-colors duration-200 hover:!border-[#0016EC] hover:!text-[#0016EC]"
            >
              <span>GITHUB</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={PHONE}
              onClick={closeMobileMenu}
              className="flex items-center justify-between border-2 border-fg text-fg rounded-full px-5 py-3 text-xs tracking-[0.2em] font-semibold transition-colors duration-200 hover:!border-[#0016EC] hover:!text-[#0016EC]"
            >
              <span>+91 7359914454</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div
        className={`fixed top-0 left-0 w-full px-6 lg:px-20 z-[100001] transition-all duration-300 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-md shadow-sm pt-4 pb-4"
            : "pt-10 pb-10"
        }`}
      >
        <div className="hidden lg:flex items-start justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center gap-3 hover:opacity-85 transition-opacity"
            >
              <img
                src="/avatar.png"
                alt="Sumit Panchal"
                className="w-10 h-10 rounded-full object-cover border border-fg/10"
              />

              <span
                className={`font-AeonikMedium text-2xl tracking-wider uppercase font-extrabold transition-colors duration-200 ${
                  scrolled ? "text-fg" : "text-[#060607]"
                }`}
                style={{ fontWeight: 700 }}
              >
                SUMIT PANCHAL
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-around font-AeonikMedium">
            <Trail open={open} className="flex">
              <MusicButton />
              <LetsTalk />

              {/* Desktop menu hover color */}
              <div
                className="transition-colors duration-200 hover:!text-[#0016EC]"
                style={{ "--menu-hover-color": ACCENT_BLUE }}
              >
                <MenuButton />
              </div>
            </Trail>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
