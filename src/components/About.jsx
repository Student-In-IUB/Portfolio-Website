

import React from 'react';
import { motion } from 'framer-motion';
import MySkills from './MySkills';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-[5%] lg:px-[10%] pt-24 pb-16 flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="relative text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Hello! I'm <span className="font-bold text-cyan-400">Sadiq Hussain</span>, a passionate Frontend Web Developer dedicated to crafting exceptional digital experiences. I specialize in building responsive, accessible, and performant web applications using modern technologies.
          </p>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With over 3 years of professional experience, I've had the privilege to work with startups and established companies, helping them bring their digital visions to life. My journey began with HTML/CSS and has evolved into building complex React applications.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Development Approach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in clean, maintainable code and pixel-perfect implementations. My development process focuses on performance optimization, accessibility standards, and creating intuitive user interfaces that deliver real business value.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Core Technologies
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-gray-300">
                {[
                  { name: 'React.js/Next.js', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Tailwind CSS', color: 'from-blue-400 to-cyan-500' },
                  { name: 'TypeScript', color: 'from-blue-500 to-indigo-500' },
                  { name: 'JavaScript (ES6+)', color: 'from-yellow-400 to-amber-500' },
                  { name: 'Redux/Context API', color: 'from-purple-500 to-pink-500' },
                  { name: 'Framer Motion', color: 'from-indigo-400 to-purple-500' },
                ].map((tech, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mr-2`}></span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Beyond Coding
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new design trends. I'm passionate about mentoring junior developers and sharing knowledge within the tech community.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeInUp}
          className="mt-20"
        >
          <MySkills />
        </motion.div>
      </div>
    </section>
  );
};

export default About;