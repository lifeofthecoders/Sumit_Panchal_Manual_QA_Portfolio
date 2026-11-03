import React from 'react';

const SERVICES = [
  {
    title: 'Manual & Functional Testing',
    body:
      'Functional, regression, smoke, sanity, and exploratory testing to validate requirements, identify defects, and ensure reliable application behavior.',
  },
  {
    title: 'Test Design & Documentation',
    body:
      'Requirement analysis, test scenario development, test case design, test data preparation, traceability, and comprehensive test documentation.',
  },
  {
    title: 'Defect Management & Analysis',
    body:
      'Defect identification, reproduction, severity and priority assessment, bug reporting, retesting, and defect lifecycle management.',
  },
  {
    title: 'Quality Assurance & Tools',
    body:
      'Web and mobile application testing, cross-browser compatibility, UI validation, API testing, Jira, Postman, Agile/Scrum, SDLC, and STLC.',
  },
];

const SubHeader = () => {
  return (
    <div className='w-full flex flex-col items-start text-left px-4 md:px-0'>
      <div className='w-full text-base md:text-lg lg:text-xl flex flex-col gap-3 md:gap-4 leading-relaxed text-left text-fg'>
        <p className="font-medium">
          Hi, I&apos;m <span className="text-accent font-semibold">Sumit Panchal</span>,
          a Manual QA Engineer with 5+ years of professional experience
          ensuring software quality across web and mobile applications.
        </p>
        <p className="text-fg-muted">
          I specialize in functional and regression testing, test case design,
          defect lifecycle management, and end-to-end validation. With a
          detail-oriented, risk-based approach, I identify critical defects,
          validate business workflows, and collaborate with cross-functional
          teams to improve product reliability and release confidence.
        </p>
      </div>

      <div className='about-inline-services w-full mt-8 md:mt-12 h-auto'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>CORE EXPERTISE</span>
          <span className='text-xs text-fg-muted font-medium tracking-wider uppercase'>QUALITY ENGINEERING</span>
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
