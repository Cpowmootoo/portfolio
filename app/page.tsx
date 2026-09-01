'use client';
import { useEffect, useState } from 'react';
import { projects } from './projects';
const projectGroups = [
 {key:'ai',title:'AI, Healthcare & Legal',text:'Intelligent products and service platforms designed to make complex work and information easier to manage.'},
 {key:'finance',title:'Finance, Risk & Compliance',text:'Platforms supporting security compliance, financial operations, fraud prevention, and risk management.'},
 {key:'business',title:'Business Platforms',text:'Digital products for lead generation, marketplaces, property services, and day-to-day operations.'},
];
const orderedProjects = projectGroups.flatMap(group=>projects.filter(project=>project.field===group.key));
const skillGroups = [
 {title:'Application development',items:['SaaS Development','Web Application Development','App Development','Mobile App Development','Artificial Intelligence']},
 {title:'Languages & APIs',items:['Node.js','Python','PHP','REST API','Stripe','Stripe API']},
 {title:'Cloud & delivery',items:['Cloud Architecture','Google Cloud Platform','AWS Lambda','Azure DevOps','Docker','Kubernetes','CI/CD Pipelines']},
 {title:'Enterprise & security',items:['Okta','PeopleSoft','Information Security']}
];
const expertise = [
 {n:'01',title:'SaaS & product engineering',text:'I build full-stack applications, subscription systems, and backend services that support your business as it grows.',tags:['Node.js','Python','PHP','Stripe']},
 {n:'02',title:'Cloud architecture & delivery',text:'I design cloud infrastructure, deploy containerized applications, and automate releases to make delivery more reliable.',tags:['AWS','Google Cloud','Docker','Kubernetes']},
 {n:'03',title:'Integrations & modernization',text:'I connect services through reliable APIs and modernize existing applications without rebuilding more than necessary.',tags:['REST APIs','Okta','PeopleSoft','CI/CD']}
];
const experience = [
 {date:'2020 — 2026',company:'Spatial Front, Inc',role:'Full-Stack & Cloud Engineer',text:'Built full-stack applications and distributed backend services, with responsibilities spanning API design, cloud infrastructure, and deployment automation. Diagnosed slow responses, database bottlenecks, and integration failures, then made targeted improvements.',tags:['AWS & GCP','PostgreSQL & MySQL','Docker & Kubernetes','Azure DevOps']},
 {date:'2014 — 2019',company:'Take Three Technologies',role:'SaaS & Cloud Developer',text:'Built and maintained SaaS platforms, REST APIs, background services, and enterprise integrations. Worked with PeopleSoft and Okta single sign-on to troubleshoot authentication, session management, and routing issues across connected systems.',tags:['Node.js & Python','REST APIs','SAML & SSO','Production reliability']},
 {date:'2008 — 2010',company:'MyFusion Solution',role:'Full-Stack SaaS Developer',text:'Developed PHP backend services, database-driven features, and workflows for business applications. Improved authentication, data validation, and integrations, and refactored tightly coupled components as requirements changed.',tags:['PHP','Relational databases','Access control','System integration']}
];
type Project = (typeof projects)[number];

function Tags({items}:{items:string[]}) {return <div className="tags">{items.map(t=><span key={t}>{t}</span>)}</div>}
function ProjectCard({p,i,onOpen}:{p:Project;i:number;onOpen:(project:Project)=>void}) {
 const hasCaseStudy = Boolean(p.caseStudy);
 const content=<><div className={'project-visual '+(p.fit||'')}><img src={p.image} alt={p.alt} loading="lazy" decoding="async"/><span className="project-count">{String(i+1).padStart(2,'0')} / {projects.length}</span><span className="visit">{hasCaseStudy?'View case study':'View website ↗'}</span></div><div className="project-caption"><div><span className="eyebrow">{p.category}</span><h3>{p.name}</h3></div><span className="project-arrow" aria-hidden="true">{hasCaseStudy?'＋':'↗'}</span></div></>;
 return <article className={'project '+p.key}>{hasCaseStudy?<button className="project-trigger" type="button" onClick={()=>onOpen(p)} aria-haspopup="dialog" aria-label={'View '+p.name+' case study'}>{content}</button>:<a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={'Visit '+p.name+' (opens in a new tab)'}>{content}</a>}<p className="project-description">{p.description}</p></article>
}
function ProjectModal({project,onClose}:{project:Project|null;onClose:()=>void}) {
 useEffect(()=>{if(!project)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';const close=(event:KeyboardEvent)=>{if(event.key==='Escape')onClose()};window.addEventListener('keydown',close);return()=>{document.body.style.overflow=previous;window.removeEventListener('keydown',close)}},[project,onClose]);
 if(!project||!project.caseStudy)return null;
 const study=project.caseStudy;
 return <div className="modal-backdrop" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)onClose()}}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title" aria-describedby="case-study-summary"><header className="modal-header"><span className="eyebrow">PROJECT CASE STUDY</span><h2 id="case-study-title">{project.name}</h2><p id="case-study-summary">{study.summary}</p><Tags items={study.capabilities}/></header><div className="modal-columns"><section><span className="modal-label">01 / THE CHALLENGE</span><h3>Problems I addressed</h3><ul>{study.problems.map(item=><li key={item}>{item}</li>)}</ul></section><section><span className="modal-label">02 / THE APPROACH</span><h3>How I solved them</h3><ul>{study.solutions.map(item=><li key={item}>{item}</li>)}</ul></section></div><div className="modal-outcome"><span className="modal-label">03 / THE RESULT</span><p>{study.outcome}</p></div><div className="modal-actions"><button type="button" className="modal-secondary" onClick={onClose} autoFocus>Close</button><a className="modal-primary" href={project.url} target="_blank" rel="noopener noreferrer">Visit {project.name} <span aria-hidden="true">↗</span></a></div></section></div>
}
export default function Home(){const [activeProject,setActiveProject]=useState<Project|null>(null);return <>
 <a href="#main" className="skip">Skip to content</a>
 <header className="wrap header"><a href="#" className="brand" aria-label="Bradley Kell home"><span className="monogram">BK</span><span>BRADLEY KELL</span></a><nav aria-label="Main navigation"><a href="#work">Projects</a><a href="#expertise">Expertise</a><a href="#about">About</a></nav></header>
 <main id="main">
 <section className="wrap personal-intro" aria-labelledby="intro-heading">
   <div className="intro-identity">
     <p className="intro-role">Full Stack SaaS & Cloud Architect</p>
     <h1 id="intro-heading">Bradley Kell.</h1>
     <p className="intro-location">US-based in Colorado, working with clients worldwide.</p>
   </div>
   <div className="intro-summary">
     <p>I help startups and growing businesses build reliable SaaS platforms and cloud applications.</p>
     <p>Whether you’re launching an MVP or improving an established product, I build software that’s reliable, maintainable, and ready to grow with your business.</p>
     <a className="primary" href="#work">View my work <span aria-hidden="true">↗</span></a>
   </div>
 </section>
 <section className="work wrap" id="work"><div className="section-heading"><div><span className="eyebrow">PORTFOLIO</span><h2>Projects by field</h2></div><p>{projects.length} projects across specialized technology, finance, and business platforms.</p></div><div className="project-fields">{projectGroups.map((group,groupIndex)=><section className="project-field" key={group.key} aria-labelledby={'field-'+group.key}><div className="field-heading"><span className="field-number">{String(groupIndex+1).padStart(2,'0')}</span><div><h3 id={'field-'+group.key}>{group.title}</h3><p>{group.text}</p></div></div><div className="project-grid">{orderedProjects.filter(p=>p.field===group.key).map(p=><ProjectCard p={p} i={orderedProjects.indexOf(p)} onOpen={setActiveProject} key={p.key}/>)}</div></section>)}</div></section>
 <section className="expertise" id="expertise"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">CAPABILITIES</span><h2>Technical expertise</h2></div><p>I work across application development and cloud infrastructure, from initial architecture to production.</p></div><div className="expertise-grid">{expertise.map(x=><article key={x.n}><span className="number">{x.n} /</span><h3>{x.title}</h3><p>{x.text}</p><Tags items={x.tags}/></article>)}</div><section className="skills" aria-labelledby="skills-heading"><h3 id="skills-heading">Skills & technologies</h3><div className="skills-grid">{skillGroups.map(group=><div className="skill-group" key={group.title}><h4>{group.title}</h4><ul>{group.items.map(skill=><li key={skill}>{skill}</li>)}</ul></div>)}</div></section></div></section>
 <section className="experience wrap" id="experience"><div className="section-heading"><div><span className="eyebrow">BACKGROUND</span><h2>Professional experience</h2></div><p>My experience spans backend development, enterprise integrations, and the infrastructure that supports them.</p></div><div className="experience-list">{experience.map(x=><article className="experience-row" key={x.company}><div className="date">{x.date}</div><div><p className="role">{x.role}</p><h3>{x.company}</h3></div><div><p className="experience-copy">{x.text}</p><Tags items={x.tags}/></div></article>)}</div></section>
 <section className="about wrap" id="about"><div><span className="eyebrow">HOW I WORK</span><h2>Practical engineering.<br/>Long-term thinking.</h2></div><div className="about-copy"><p className="lead">I build software that works reliably in production and is straightforward to maintain.</p><p>That might mean designing a new platform, resolving a performance bottleneck, or updating one part of an existing system. I choose the approach that makes sense for your product, your team, and your business.</p><p>Across backend development, payments, cloud infrastructure, and automated delivery, I weigh the trade-offs and keep long-term maintenance in mind.</p><div className="education"><span className="eyebrow">EDUCATION</span><div><strong>MSCS</strong><span>Colorado State University · 2010–2014</span></div><div><strong>BCompSc</strong><span>University of Colorado Boulder · 2004–2008</span></div></div></div></section>
 </main><footer><div className="wrap footer-inner"><div><span className="footer-name">Bradley Kell<span>.</span></span><p>Full Stack SaaS & Cloud Architect</p></div><a className="back" href="#">Back to top ↑</a></div></footer><ProjectModal project={activeProject} onClose={()=>setActiveProject(null)}/>
 </>}
