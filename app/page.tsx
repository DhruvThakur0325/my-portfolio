"use client";

import { useEffect, useState } from "react";
import { GitBranch, Link, Mail } from "lucide-react";
import CursorGlow from "./CursorGlow";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 100) {
        setVisibleSections((prev) =>
          prev.includes(section.id) ? prev : [...prev, section.id]
        );
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen relative overflow-hidden">
      <CursorGlow />

      {/* Navbar */}
      <nav className="w-full px-8 py-6 flex items-center justify-between fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          DH<span className="text-purple-500">.</span>
        </div>

        {/* Navigation Links */}
       <div className="hidden md:flex gap-6 text-gray-400">



  <a href="#" className="hover:text-white transition">
    Home
  </a>

  <a href="#about" className="hover:text-white transition">
    About
  </a>

  <a href="#skills" className="hover:text-white transition">
    Skills
  </a>

  <a href="#projects" className="hover:text-white transition">
    Projects
  </a>

  <a href="#experience" className="hover:text-white transition">
    Experience
  </a>

  <a href="#education" className="hover:text-white transition">
    Education
  </a>

  <a href="#certificates" className="hover:text-white transition">
    Certificates
  </a>

  <a href="#learning" className="hover:text-white transition">
  Learning
</a>

  <a href="#contact" className="hover:text-white transition">
    Contact
  </a>

</div> 

{/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-2xl text-gray-300 hover:text-white"
>
  ☰
</button>

{/* Mobile Navigation */}
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden">
    <div className="flex flex-col items-center gap-6 py-8 text-gray-300">
      <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        Home
      </a>

      <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        About
      </a>

      <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        Skills
      </a>

      <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        Projects
      </a>

      <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        Experience
      </a>

      <a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        Education
      </a>

      <a href="#certificates" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        Certificates
      </a>

<a
  href="#learning"
  onClick={() => setMenuOpen(false)}
  className="text-gray-300 hover:text-white transition"
>
  Learning
</a>

      <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
        Contact
      </a>
    </div>
  </div>
)} 

      </nav>


      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -top-20 -left-20 glow-animation"></div>

      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -bottom-20 -right-20 glow-animation"></div>


      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 relative z-10">
     
      <div className="text-center max-w-3xl fade-up flex flex-col items-center">

<img
  src="/profile.jpg"
  alt="Dhruv Thakur"
  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.35)] mb-8 profile-glow"
/>

         <div className="flex justify-center mb-6">
  <span className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm">
    ● Available for Internships & Opportunities
  </span>
</div>

<p className="text-lg text-gray-400 mb-3">Hi, I'm</p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 gradient-text">
             Dhruv Thakur
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            BCA Student & Aspiring Full-Stack Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8 max-w-2xl mx-auto">
            I build modern web applications and AI-powered solutions
            while continuously learning and improving my development skills.
          </p>

   <div className="flex flex-col sm:flex-row justify-center gap-4">
  <a
    href="#projects"
    className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform glow-button"
  >
    View My Projects
  </a>

  <a
    href="/resume.pdf"
    download
    className="inline-block px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
  >
    Download Resume ↓
  </a>
</div>      

<div className="mt-16 flex flex-col items-center gap-3 text-gray-500">
  <span className="text-xs tracking-[0.3em] uppercase">
    Scroll
  </span>

  <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
    <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
  </div>
</div>
        </div>

       <div className="mt-20 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
  
</div>

      {/* Tech Stack */}
      <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl">
        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          React.js
        </span>

        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          Next.js
        </span>

        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          Node.js
        </span>

        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          Python
        </span>

        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          MongoDB
        </span>

        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          FastAPI
        </span>
      </div>

</section>
      
      {/* About Section */}
     <section
  id="about"
  className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("about")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
        <div className="max-w-4xl text-center">

          <p className="text-purple-400 font-semibold mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Who I Am
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            I'm Dhruv Thakur, a BCA student and aspiring full-stack
            developer passionate about web development, artificial
            intelligence, and building useful digital experiences.
          </p>

          <p className="text-gray-400 text-lg leading-8">
            I enjoy turning ideas into practical projects and
            continuously improving my programming and development skills.
            Currently, I'm exploring modern web technologies and
            AI-powered applications.
          </p>

        </div>
      </section>
            {/* Skills Section */}
      <section
  id="skills"
  className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("skills")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
        <div className="max-w-6xl w-full">

          <div className="text-center mb-16">

            <p className="text-purple-400 font-semibold mb-3">
              MY SKILLS
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Technologies I Use
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            {/* Frontend */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6">
                Frontend
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>

            </div>


            {/* Backend */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6">
                Backend
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>FastAPI</li>
                <li>REST APIs</li>
              </ul>

            </div>


            {/* Database */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6">
                Database
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>

            </div>

          </div>

        </div>
      </section>



            {/* Projects Section */}
      <section
  id="projects"
  className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("projects")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
        <div className="max-w-6xl w-full">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <p className="text-purple-400 font-semibold mb-3">
              MY PROJECTS
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Things I've Built
            </h2>

          </div>


        
{/* Project Cards */}
<div className="grid md:grid-cols-2 gap-8">

 
  {/* Project 1: Customer Support AI */}
  <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-500">
    <p className="text-blue-400 mb-4">01</p>

    <h3 className="text-2xl font-bold mb-4">
      Customer Support Ticket Management System
    </h3>

    <p className="text-gray-400 leading-7 mb-6">
      A full-stack web application for managing customer support
      tickets. Users can create tickets, view existing tickets,
      search and filter the ticket list, and update ticket statuses.
      Ticket data is stored in MongoDB and status changes persist
      after refreshing the page.
    </p>

    <div className="flex flex-wrap gap-2 mb-8">
      {[
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full bg-white/10 text-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex flex-wrap gap-x-5 gap-y-3">
      <a
        href="https://customer-support-6pu7z148j-dhruv-s-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold hover:text-blue-400 transition"
      >
        Live Demo →
      </a>

      <a
        href="https://github.com/DhruvThakur0325/customer-support-ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold hover:text-blue-400 transition"
      >
        GitHub Repository →
      </a>
    </div>
  </div>


  {/* Project 2: AI-Powered Recruitment & ATS */}
  <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-500">
    <p className="text-purple-400 mb-4">02</p>

    <h3 className="text-2xl font-bold mb-4">
      AI-Powered Recruitment &amp; ATS Platform
    </h3>

    <p className="text-gray-400 leading-7 mb-6">
      A full-stack recruitment platform for managing candidates
      and screening PDF and DOCX resumes against job requirements.
      It provides skill-match scores, matched skills, and missing skills.
    </p>

    <div className="flex flex-wrap gap-2 mb-8">
      {["Next.js", "TypeScript", "FastAPI", "PostgreSQL"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full bg-white/10 text-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex flex-wrap gap-x-5 gap-y-3">
      <a
        href="https://hireflow-frontend-lime.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold hover:text-purple-400 transition"
      >
        Live Demo ↗
      </a>

      <a
        href="https://github.com/DhruvThakur0325/hireflow-frontend"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold hover:text-purple-400 transition"
      >
        Frontend Code ↗
      </a>

      <a
        href="https://github.com/DhruvThakur0325/hireflow-backend"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold hover:text-purple-400 transition"
      >
        Backend Code ↗
      </a>
    </div>
  </div>

</div>

</div>
      </section>


            {/* Experience Section */}
      <section
  id="experience"
  className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("experience")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
        <div className="max-w-4xl w-full">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <p className="text-purple-400 font-semibold mb-3">
              EXPERIENCE
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              My Journey
            </h2>

          </div>


          {/* Experience Card */}
          <div className="border border-white/10 bg-white/5 rounded-2xl p-8 md:p-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

              <div>

                <h3 className="text-2xl md:text-3xl font-bold">
                  Web Developer Intern
                </h3>

                <p className="text-purple-400 mt-2">
                  Codec Technologies
                </p>

              </div>

              <p className="text-gray-500 mt-4 md:mt-0">
                2026
              </p>

            </div>


            <p className="text-gray-400 leading-7 mb-6">
              Worked on web development projects and gained practical
              experience in building and working with modern web
              technologies.
            </p>


            <ul className="space-y-3 text-gray-400">

              <li>→ Worked on practical web development tasks</li>

              <li>→ Improved frontend development skills</li>

              <li>→ Worked with modern web technologies</li>

              <li>→ Gained experience with real-world development workflows</li>

            </ul>

          </div>

        </div>
      </section>
            {/* Education Section */}
<section
  id="education"
  className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("education")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
        <div className="max-w-4xl w-full">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <p className="text-purple-400 font-semibold mb-3">
              EDUCATION
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              My Education
            </h2>

          </div>


          {/* Education Card */}
          <div className="border border-white/10 bg-white/5 rounded-2xl p-8 md:p-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

              <div>

                <h3 className="text-3xl font-bold">
                  Bachelor of Computer Applications
                </h3>

                <p className="text-purple-400 mt-2">
                  SRM University
                </p>

              </div>

              <p className="text-gray-500 mt-4 md:mt-0">
                2025 – Present
              </p>

            </div>


            <p className="text-gray-400 leading-7 mb-8">
              Currently pursuing a Bachelor of Computer Applications
              with an interest in software development, web technologies,
              databases, and artificial intelligence.
            </p>


            <div>

              <h4 className="text-xl font-semibold mb-4">
                Focus Areas
              </h4>

              <div className="flex flex-wrap gap-3">

                <span className="px-4 py-2 rounded-full bg-white/10 text-gray-300">
                  Programming
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-gray-300">
                  Web Development
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-gray-300">
                  Database Management
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-gray-300">
                  Artificial Intelligence
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>
            {/* Certificates Section */}
      <section
  id="certificates"
  className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("certificates")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
        <div className="max-w-6xl w-full">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <p className="text-purple-400 font-semibold mb-3">
              CERTIFICATES
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              My Achievements
            </h2>

          </div>


          {/* Certificate Cards */}
          <div className="grid md:grid-cols-2 gap-8">


            {/* Certificate 1 */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition">

              <p className="text-purple-400 mb-4">
                01
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Web Development Internship
              </h3>

              <p className="text-gray-400 mb-6">
                Codec Technologies
              </p>

              <a
  href="/internship-certificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
>
  View Certificate →
</a>

            </div>


            {/* Certificate 2 */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition">

              <p className="text-blue-400 mb-4">
                02
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Add Your Certificate
              </h3>

              <p className="text-gray-400 mb-6">
                More achievements coming soon.
              </p>

              <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                View Certificate →
              </button>

            </div>


          </div>

        </div>
      </section>

{/* Currently Learning Section */}
<section
  id="learning"
  className={`min-h-[60vh] flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("learning")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
  <div className="max-w-5xl w-full">
    <div className="text-center mb-12">
      <p className="text-blue-400 font-semibold mb-3">
        CURRENTLY LEARNING
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Always Improving
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        I'm continuously learning new technologies and improving
        my development skills through practical projects.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
        <h3 className="text-xl font-bold mb-3">
          Full-Stack Development
        </h3>

        <p className="text-gray-400 leading-7">
          Improving my skills in building complete web applications
          using modern frontend and backend technologies.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
        <h3 className="text-xl font-bold mb-3">
          Artificial Intelligence
        </h3>

        <p className="text-gray-400 leading-7">
          Exploring AI and machine learning concepts and learning
          how to integrate intelligent features into applications.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
        <h3 className="text-xl font-bold mb-3">
          Backend & APIs
        </h3>

        <p className="text-gray-400 leading-7">
          Building and understanding REST APIs, authentication,
          databases, and backend application architecture.
        </p>
      </div>
    </div>
  </div>
</section>

            {/* Contact Section */}
      
<section
  id="contact"
  className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-1000 ${
    visibleSections.includes("contact")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
        <div className="max-w-4xl w-full text-center p-10 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500">

          <p className="text-purple-400 font-semibold mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-purple-400 font-medium mb-6">
  Open to internship opportunities & collaborations
</p>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Have a project idea, internship opportunity, or just want
            to connect? I'd love to hear from you.
          </p>


          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
  href="mailto:thakurdevansh236@gmail.com"
  className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
>
  <Mail size={18} />
  Email Me
</a>

       <a
  href="https://www.linkedin.com/in/dhruvthakur0325/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
>
  <Link size={18} />
  LinkedIn
</a>     

        <a
  href="https://github.com/DhruvThakur0325"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
>
  <GitBranch size={18} />
  GitHub
</a> 

          </div>

        </div>
      </section>

{/* Footer */}
<footer className="border-t border-white/10 py-8 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-gray-500 text-sm">
      © 2026 Dhruv Thakur. All rights reserved.
    </p>

    <div className="flex gap-6 text-gray-500 text-sm">
      <a
        href="https://github.com/DhruvThakur0325"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/dhruvthakur0325/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        LinkedIn
      </a>

      <a
        href="mailto:thakurdevansh236@gmail.com"
        className="hover:text-white transition"
      >
        Email
      </a>
    </div>
  </div>
</footer>

{/* Back to Top */}
<a
  href="#"
  className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold hover:scale-110 transition-transform shadow-lg"
  aria-label="Back to top"
>
  ↑
</a>

    </main>
  );
}