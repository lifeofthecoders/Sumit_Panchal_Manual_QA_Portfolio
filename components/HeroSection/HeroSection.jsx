"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const mediaContainerRef = useRef(null);
  const videoRef = useRef(null);
  const loaderRef = useRef(null);
  const [loaderDone, setLoaderDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentText, setCurrentText] = useState("સુમિત પંચાલ");

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.style.overflow = "hidden";

    // Initial hidden state setup for hero visual
    gsap.set(mediaContainerRef.current, { autoAlpha: 0, scale: 1.05 });

    const tl = gsap.timeline({
      onComplete: () => {
        setLoaderDone(true);
        document.body.style.overflow = "";
      },
    });

    // Loader slide up reveal
    tl.to(
      loaderRef.current,
      {
        y: "-100%",
        duration: 1.1,
        ease: "power3.out",
      },
      "start+=3.0"
    );

    // Hero visual reveal
    tl.to(
      mediaContainerRef.current,
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      "start+=3.2"
    );

    // Multilingual transition: Gujarati -> Hindi -> English
    const t1 = setTimeout(() => setCurrentText("सुमित पंचाल"), 1000);
    const t2 = setTimeout(() => setCurrentText("SUMIT PANCHAL"), 2000);

    return () => {
      tl.kill();
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects-section") || document.getElementById("about");
    if (target) {
      const lenis = window.__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(target, { offset: 0, duration: 1.4 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Video unmuted play failed, falling back to muted play:", err);
          videoRef.current.muted = true;
          videoRef.current.play();
          setIsPlaying(true);
        });
    }
  };

  // Framer Motion reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      {/* Loader Overlay */}
      <div
        id="loader"
        ref={loaderRef}
        style={{
          backgroundColor: "#0d0d11",
          zIndex: 100002,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center px-4"
        >
          {/* Logo Avatar */}
          <img
            src="/Sumit_Avatars.png"
            alt="Sumit Panchal"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/10 mb-6 object-cover shadow-2xl ring-2 ring-accent/30"
          />

          {/* Language Text Animating */}
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#F5F1EA] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest uppercase"
              style={{ fontFamily: "'Neue Montreal', 'Inter', sans-serif" }}
            >
              {currentText}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Section Container */}
      <section
        id="hero-section"
        ref={sectionRef}
        className="relative w-full h-screen min-h-[600px] overflow-hidden select-none transition-colors duration-300"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        {/* Background Visual Media: Image by default, Video with audio when playing */}
        <div
          ref={mediaContainerRef}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-white dark:bg-[#0A0A0C]"
        >
          {/* Animated Hero Image (Visible when NOT playing) */}
          <img
            src="/sumit-hero.png"
            alt="Sumit Panchal"
            className={`absolute inset-0 w-full h-full object-cover object-[center_top] md:object-[60%_top] transition-opacity duration-700 ease-in-out ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
          />

          {/* User's Animated Video with Audio (Plays and becomes visible when playing) */}
          <video
            ref={videoRef}
            src="/animated-video.mp4"
            loop
            playsInline
            preload="auto"
            onEnded={() => setIsPlaying(false)}
            className={`absolute inset-0 w-full h-full object-cover object-[center_top] md:object-[60%_top] transition-opacity duration-700 ease-in-out ${isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          />

          {/* No overlays or boxes: video is fully visible, crisp, and unblocked */}
        </div>

        {/* Content Corner Overlay - Vertically Centered in the Middle-Left: Pure text, no border or box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={loaderDone ? "visible" : "hidden"}
          className="absolute top-[16%] left-6 sm:left-12 lg:left-20 z-10 max-w-[540px] flex flex-col items-start text-left pointer-events-auto"
        >
          <motion.span
            variants={itemVariants}
            className="text-[16px] sm:text-xs font-bold tracking-[0.25em] text-[#060607]/80 uppercase mb-1"
            style={{
              fontFamily: "'Neue Montreal', 'Inter', sans-serif",
              fontWeight: 900,
            }}
          >
            HELLO, I&apos;M SUMIT PANCHAL
          </motion.span>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1.5 mb-3"
          >
            <div className="w-12 h-[1.5px] bg-accent" />
            <div className="w-2 h-2 rounded-full bg-accent" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[2.6rem] font-black uppercase leading-[1.05] tracking-tight text-[#060607] mb-3"
            style={{ fontFamily: "'AeonikBold', 'Neue Montreal', sans-serif" }}
          >
            QUALITY<br />
            ISN'T A<br />
            CHECKPOINT.<br />
            <span className="text-accent">IT'S A STANDARD.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-[#000000] font-bold leading-relaxed mb-8 max-w-[42ch]"
            style={{ fontFamily: "'Neue Montreal', 'Inter', sans-serif" }}
          >
            I’m a Manual QA Engineer with 5+ years of experience identifying critical defects, validating complex workflows, and safeguarding software quality through risk-based testing, meticulous test design, and a relentless focus on the end-user experience.
            {/* Experienced Manual QA Engineer with 5+ years of experience in functional testing, regression testing, test case design, defect lifecycle management, and delivering reliable software through a strong quality mindset. */}
          </motion.p>

          {/* View Work & Download CV Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 flex-wrap"
          >
            <a
              href="#projects-section"
              onClick={handleScrollToWork}
              className="px-6 py-3.5 bg-[#060607] text-[#F9F8FF] hover:bg-accent hover:text-white rounded-full flex items-center gap-2 text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
              style={{ fontFamily: "'Neue Montreal', 'Inter', sans-serif" }}
            >
              <span>View My Work</span>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <a
              href="/Sumit_Panchal_Resume.pdf"
              download="Sumit_Panchal_Resume.pdf"
              className="px-6 py-3.5 bg-[#2446F5] text-white hover:bg-[#060607] hover:text-white rounded-full flex items-center gap-2 text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
              style={{ fontFamily: "'Neue Montreal', 'Inter', sans-serif" }}
            >
              <span>Download Resume</span>
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <polyline points="7 10 12 15 17 10" />
                <path d="M5 19h14" />
              </svg>
            </a>
          </motion.div>


          {/* Social Links on Bottom-Left */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 mt-8 text-[#060607]/80"
          >
            {/* GitHub */}
            <a
              href="https://github.com/lifeofthecoders"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:text-[#0016EC] hover:scale-125"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.75-.24.75-.53v-2.07c-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.7-1.48-2.45-.28-5.02-1.23-5.02-5.46 0-1.2.43-2.2 1.13-2.97-.12-.28-.49-1.4.11-2.92 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.43 3.05-1.13 3.05-1.13.6 1.52.23 2.64.11 2.92.7.77 1.13 1.77 1.13 2.97 0 4.24-2.57 5.18-5.03 5.45.4.35.75 1.02.75 2.06V22c0 .3.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sumit-panchal-b790a8236/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:text-[#0016EC] hover:scale-125"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 19H5V9h3v10ZM6.5 7.73a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-5.2c0-3.12-4-2.88-4 0V19H9V9h3v1.36c1.4-2.58 7-2.78 7 2.48V19Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/workhard2livelarge?igsh=MmM0YmZvNHc0bDZ2"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
              className="inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:text-[#0016EC] hover:scale-125"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BxMxaQsV8/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
              className="inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:text-[#0016EC] hover:scale-125"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M24 12a12 12 0 1 0-13.88 11.86v-8.4H7.08V12h3.04V9.36c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.46h-2.79v8.4A12 12 0 0 0 24 12Z" />
              </svg>
            </a>

            {/* Quora */}
            <a
              href="https://www.quora.com/profile/Sumit-Panchal-345"
              target="_blank"
              rel="noopener noreferrer"
              title="Quora"
              aria-label="Quora"
              className="inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:text-[#0016EC] hover:scale-125"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12.2 2.5c-5.6 0-9.1 4.2-9.1 9.5s3.5 9.5 9.1 9.5c1.8 0 3.3-.4 4.6-1.2l2 1.7 2-2.2-2-1.8c1.6-1.7 2.5-4.1 2.5-7 0-5.3-3.5-8.5-9.1-8.5Zm0 15.7c-2.9 0-4.5-2.5-4.5-6.5s1.6-6.5 4.5-6.5 4.5 2.5 4.5 6.5c0 1.7-.3 3.2-.9 4.3l-1.5-1.3-1.8 2 1.2 1.1c-.5.3-1 .4-1.5.4Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:sumitpanchal5225@gmail.com"
              title="Email Sumit"
              aria-label="Email Sumit"
              className="inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:text-[#0016EC] hover:scale-125"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>

            {/* Call */}
            <a
              href="tel:7359914454"
              title="Call Sumit"
              aria-label="Call Sumit"
              className="inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:text-[#0016EC] hover:scale-125"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current scale-[0.85]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </motion.div>


        </motion.div>

        {/* Floating Sparkle + Play/Pause Video Button matching reference */}
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-20 flex flex-col items-center gap-3 pointer-events-auto">
          {/* Reference Sparkle Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={loaderDone ? { opacity: 0.75, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="text-black/30 hover:text-black/60 transition-colors pointer-events-none"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current animate-pulse">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaderDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={togglePlay}
            className="flex items-center gap-3 bg-white/90 border border-black/15 hover:border-black/30 px-4 py-2.5 rounded-full text-[#060607] hover:bg-[#060607] hover:text-white transition-all active:scale-95 shadow-md group cursor-pointer backdrop-blur-sm"
            style={{ fontFamily: "'Neue Montreal', 'Inter', sans-serif" }}
          >
            <span className="w-7 h-7 rounded-full bg-fg/10 group-hover:bg-bg/10 flex items-center justify-center transition-colors">
              {isPlaying ? (
                /* Pause Icon */
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                /* Play Icon */
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current translate-x-[1px]">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase pr-2">
              {isPlaying ? "PAUSE VIDEO" : "PLAY VIDEO"}
            </span>
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
