import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.05 },
  }),
};

export default function Portfolio() {
  const aboutText = "I'm a frontend developer who crafts immersive and visually stunning web experiences. Passionate about UI/UX design and interactive applications.".split(" ");

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-gray-100 min-h-screen" style={{ fontFamily: "'Fira Code', monospace" }}>
      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={fadeInVariants} 
        className="h-screen flex flex-col justify-center items-center text-center p-6"
      >
        <motion.h1 className="text-7xl font-extrabold text-purple-400" variants={fadeInVariants}>
          Welcome to My Portfolio
        </motion.h1>
        <motion.p className="mt-4 text-2xl text-gray-300" variants={fadeInVariants}>
          Creative Web Developer & Designer
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.2, rotate: 3 }}
          className="mt-6 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl text-white font-bold shadow-xl transition-transform"
        >
          View My Work
        </motion.a>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        className="py-20 px-6 text-center bg-gray-800"
      >
        <h2 className="text-6xl font-bold text-purple-300 ">About Me</h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          {aboutText.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={typewriterVariants}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }} 
        variants={fadeInVariants} 
        className="py-20 px-6 text-center bg-gray-900"
      >
        <h2 className="text-6xl font-bold text-purple-300">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInVariants}
              className="bg-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-purple-500 transition-all transform hover:-translate-y-2"
            >
              <h3 className="text-3xl font-semibold text-purple-400">Project {project}</h3>
              <p className="mt-3 text-gray-300 text-lg">A dynamic and engaging web application.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }} 
        variants={fadeInVariants} 
        className="py-20 px-6 text-center bg-gray-800"
      >
        <h2 className="text-6xl font-bold text-purple-300">Contact</h2>
        <p className="mt-6 text-gray-300 text-lg">Let's collaborate on something amazing!</p>
        <a href="mailto:you@example.com" className="mt-6 inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-white shadow-lg transform hover:scale-105 transition-all">Say Hello</a>
      </motion.section>
    </div>
  );
}
