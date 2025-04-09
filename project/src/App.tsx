import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
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
                  'Java'
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
                  src="https://via.placeholder.com/300"
                  alt="Profile"
                  className="rounded grayscale hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 border-2 border-teal-300 rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-32"
          id="experience"
        >
          <h2 className="flex items-center text-2xl font-bold text-slate-200 mb-8">
            <span className="text-teal-300 font-mono mr-2">02.</span> Experience
            <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
          </h2>
          <div className="bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-colors">
            <h3 className="text-xl font-semibold text-slate-200">Software Engineer Intern</h3>
            <p className="text-teal-300 font-mono mb-4">Stony Brook University • May 2023 - Present</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal-300 mr-2 mt-1.5">▹</span>
                <span>Developed and maintained web applications using React and Node.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-300 mr-2 mt-1.5">▹</span>
                <span>Collaborated with cross-functional teams to deliver high-quality software solutions</span>
              </li>
            </ul>
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