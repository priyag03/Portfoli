import React from 'react';
import { useState } from 'react';
import profilepic from './profilepic.png';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [tab, setTab] = React.useState(0);
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300">
      {/* Navigation */}
      <nav className="fixed w-full px-8 py-4 backdrop-blur-sm bg-[#0a192f]/80 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-teal-300 font-mono"
          >
            GG
          </motion.div>
          <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="flex space-x-8 font-mono"
>
  {['About', 'Experience', 'Projects', 'Contact'].map((item, i) => (
    <a 
      key={item}
      href={`#${item.toLowerCase()}`}
      className="text-sm hover:text-teal-300 transition-colors"
    >
      <span className="text-teal-300">0{i + 1}.</span> {item}
    </a>
  ))}

<a
  href="/PriyankaGaddam.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm hover:text-teal-300 transition-colors underline underline-offset-4"
>
  Resume
</a>

</motion.div>

        </div>
      </nav>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed left-8 bottom-0 hidden md:block"
      >
        <div className="flex flex-col items-center space-y-6">
          <a href="https://github.com/yourusername" className="text-slate-400 hover:text-teal-300 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/gayathrigaddam" className="text-slate-400 hover:text-teal-300 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ggaddam@cs.stonybrook.edu" className="text-slate-400 hover:text-teal-300 transition-colors">
            <Mail size={20} />
          </a>
          <div className="h-24 w-[1px] bg-slate-400"></div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-mono text-teal-300 mb-5"
          >
            Hi, my name is
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-6xl sm:text-7xl font-bold text-slate-200 mb-4"
          >
            Gayathri Priyanka Gaddam.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-slate-400 mb-8"
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="max-w-xl text-slate-400 mb-12"
          >
            I’m a software engineer currently pursuing my Master’s in Computer Science at 
  <span className="text-teal-300"> Stony Brook University</span>, with 1.5 years of experience in full-stack development and cloud technologies. 
  I’m passionate about creating scalable, user-focused applications and leveraging AI to build intelligent, impactful systems.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={scrollToContent}
            className="border border-teal-300 text-teal-300 px-6 py-3 rounded hover:bg-teal-300/10 transition-colors font-mono"
          >
            Check out my work!
          </motion.button>
        </div>
      </section>

      {/* Main Content */}
      <main id="content" className="max-w-6xl mx-auto px-8 py-24">
        {/* About Section */}
        <motion.section
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-32"
          id="about"
        >
          <h2 className="flex items-center text-2xl font-bold text-slate-200 mb-8">
            <span className="text-teal-300 font-mono mr-2">01.</span> About Me
            <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-slate-400">
              <p className="mb-4">
                Graduate student at Stony Brook University pursuing Master's in Computer Science. 
                Passionate about software development with expertise in full-stack development and cloud technologies.
              </p>
              <p className="mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {[
                  'JavaScript (ES6+)',
                  'TypeScript',
                  'React',
                  'Node.js',
                  'Python',
                  'Java',
                  'Spring Boot',
                  'Distributed Systems',
                  'MongoDB',
                  'ASP.NET',
                  'MySQL',
                  'AWS',
                  'Redis',
                  'Docker',
                  'Kubernetes',
                  'Load Balancers',
                  'Py Torch',
                  'Tensor Flow',
                  'NLP',
                  'LLM'

                ].map((tech) => (
                  <li key={tech} className="flex items-center">
                    <span className="text-teal-300 mr-2">▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="relative z-10">
                <img 
                  src={profilepic}
                  alt="Profile"
                  className="rounded grayscale hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 border-2 border-teal-300 rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
  {...fadeInUp}
  viewport={{ once: true }}
  className="mb-32"
  id="experience"
>
  <h2 className="flex items-center text-2xl font-bold text-slate-200 mb-8">
    <span className="text-teal-300 font-mono mr-2">02.</span> Where I’ve Worked
    <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
  </h2>

  <div className="flex flex-col md:flex-row gap-8">
    {/* Left tab nav */}
    <div className="md:w-1/4">
      <ul className="flex md:flex-col gap-4 font-mono text-sm text-slate-400">
        {['RealPage', 'Drivenest', 'SBU'].map((company, index) => (
          <li
            key={company}
            onClick={() => setTab(index)}
            className={`cursor-pointer px-4 py-2 rounded border-l-2 ${
              tab === index ? 'border-teal-300 text-teal-300 bg-slate-800' : 'border-transparent hover:text-teal-300'
            }`}
          >
            {company}
          </li>
        ))}
      </ul>
    </div>

    {/* Right job detail */}
    <div className="md:w-3/4">
      {tab === 0 && (
        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            Software Developer <span className="text-teal-300">@ RealPage</span>
          </h3>
          <p className="text-teal-300 font-mono mb-4">August 2023 – July 2024</p>
          <ul className="space-y-4 text-slate-400">
          <li>▹ Migrated a legacy invoice processing system to a modular architecture using ASP.NET and React, enhancing performance and maintainability.</li>
  <li>▹ Built RESTful APIs using .NET Core with asynchronous programming, middleware, and secure authentication.</li>
  <li>▹ Reduced execution time by <span className="text-teal-300 font-medium">40%</span> by optimizing SQL queries and database indexing.</li>
  <li>▹ Reduced post-release bugs by <span className="text-teal-300 font-medium">25%</span> through collaboration with QA and DevOps on streamlined deployments.</li>
  <li>▹ Ensured data accuracy by implementing validations and integrity checks, cutting inconsistencies by <span className="text-teal-300 font-medium">15%</span>.</li>
  <li>▹ Integrated OAuth and JWT-based authentication to strengthen user and service security.</li>
  <li>▹ Applied caching strategies using Redis to lower API latency and boost scalability.</li>
          </ul>
        </div>
      )}
      {tab === 1 && (
        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            Software Engineer Inter<span className="text-teal-300">@ Drivenest</span>
          </h3>
          <p className="text-teal-300 font-mono mb-4">Jan 2022 – June 2023</p>
          <ul className="space-y-4 text-slate-400">
          <li>▹ Migrated a Java-based on-premises infrastructure to AWS Cloud using Kubernetes, Elasticsearch, and Python.</li>
  <li>▹ Managed AWS services including CloudFormation, S3, Lambda, and Elastic Clusters for production-grade scalability.</li>
  <li>▹ Automated CI/CD pipelines using Screwdriver, reducing deployment time by <span className="text-teal-300 font-medium">40%</span>.</li>
  <li>▹ Resolved component dependencies, leading to a <span className="text-teal-300 font-medium">90%</span> reduction in system errors and improved service stability.</li>
          </ul>
        </div>
      )}
      {tab === 2 && (
        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            Research Assistant <span className="text-teal-300">@ SBU</span>
          </h3>
          <p className="text-teal-300 font-mono mb-4">Jan 2024 – Present</p>
          <ul className="space-y-4 text-slate-400">
            <li>▹ Working on prospectus document classification using RoBERTa and OpenAI’s GPT models.</li>
            <li>▹ In collaboration with Broadridge Financial Solutions and Dr. IV Ramakrishnan.</li>
          </ul>
        </div>
      )}
    </div>
  </div>
</motion.section>


        {/* Projects Section */}
        <motion.section
          {...fadeInUp}
          viewport={{ once: true }}
          id="projects"
        >
          <h2 className="flex items-center text-2xl font-bold text-slate-200 mb-8">
            <span className="text-teal-300 font-mono mr-2">03.</span> Projects
            <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                whileHover={{ y: -5 }}
                className="bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-200">Project {project}</h3>
                  <ExternalLink className="text-teal-300" size={20} />
                </div>
                <p className="text-slate-400 mb-4">
                  Description of your project goes here. Highlight the technologies used and your role.
                </p>
                <div className="flex gap-3 font-mono text-sm text-slate-400">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Contact Section */}
      <motion.section
        {...fadeInUp}
        viewport={{ once: true }}
        className="py-24 text-center px-8"
        id="contact"
      >
        <h2 className="text-2xl font-bold text-slate-200 mb-4">
          <span className="text-teal-300 font-mono">04. </span>What's Next?
        </h2>
        <h3 className="text-4xl font-bold text-slate-200 mb-6">Get In Touch</h3>
        <p className="max-w-md mx-auto text-slate-400 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a
          href="mailto:ggaddam@cs.stonybrook.edu"
          className="inline-block border border-teal-300 text-teal-300 px-8 py-4 rounded hover:bg-teal-300/10 transition-colors font-mono"
        >
          Say Hello
        </a>
      </motion.section>

      <footer className="py-6 text-center text-slate-400 font-mono text-sm">
        <p>Built by Gayathri Gaddam</p>
      </footer>
    </div>
  );
}

export default App;