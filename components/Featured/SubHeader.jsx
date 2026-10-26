import React from 'react';

const SERVICES = [
  {
    title: 'Full Stack & Frontend',
    body:
      'React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and REST API integration for high-performance, responsive web applications.',
  },
  {
    title: 'Backend & Architecture',
    body:
      'Node.js, Express.js, FastAPI, MongoDB, and SQL.',
  },
  {
    title: 'AI, ML & LLMs',
    body:
      'Google Gemini LLM, Tesseract OCR, predictive model pipelines, and Retrieval-Augmented Generation (RAG).',
  },
  {
    title: 'Data Analytics & Tools',
    body:
      'Python data preprocessing, PowerBI AI dashboards, Git/GitHub, and Docker containerization.',
  },
];

const SubHeader = () => {
  return (
    <div className='w-full flex flex-col items-start text-left px-4 md:px-0'>
      <div className='w-full text-base md:text-lg lg:text-xl flex flex-col gap-3 md:gap-4 leading-relaxed text-left text-fg'>
        <p className="font-medium">
          Hi, I&apos;m <span className="text-accent font-semibold">Harshitha Chodey</span>, a Full-Stack &amp; Frontend Developer and AI/ML Specialist currently pursuing B.Tech in Computer Science &amp; Engineering (AI &amp; ML) at Sasi Institute of Technology and Engineering.
        </p>
        <p className="text-fg-muted">
          With hands-on experience across three software engineering internships at Cerevyn Solutions, NIT Tiruchirappalli, and House of Companies, I build enterprise-grade full-stack platforms, real-time operations dashboards, and intelligent LLM/OCR-driven automation workflows.
        </p>
      </div>

      <div className='about-inline-services w-full mt-8 md:mt-12 h-auto'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>CORE EXPERTISE</span>
          <span className='text-xs text-fg-muted font-medium tracking-wider uppercase'>TECHNICAL HIGHLIGHTS</span>
        </div>
        <div className='about-inline-services__grid'>
          {SERVICES.map((service) => (
            <article key={service.title} className='about-inline-services__item'>
              <h4>{service.title}</h4>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
