

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive, accessible interfaces with user-centered design principles that drive engagement and conversions.',
    icon: 'fas fa-pencil-ruler',
    color: 'from-cyan-400 to-blue-500',
    delay: 0.1
  },
  {
    title: 'Frontend Development',
    description: 'Building performant, scalable web applications with React, Next.js, and modern JavaScript frameworks.',
    icon: 'fas fa-code',
    color: 'from-blue-500 to-indigo-500',
    delay: 0.2
  },
  {
    title: 'Responsive Design',
    description: 'Creating flawless experiences across all devices with mobile-first approaches and adaptive layouts.',
    icon: 'fas fa-mobile-alt',
    color: 'from-indigo-400 to-purple-500',
    delay: 0.3
  },
  {
    title: 'Performance Optimization',
    description: 'Implementing cutting-edge techniques to maximize speed and minimize load times for better SEO and UX.',
    icon: 'fas fa-tachometer-alt',
    color: 'from-purple-500 to-pink-500',
    delay: 0.4
  },
  {
    title: 'Web Accessibility',
    description: 'Developing inclusive websites that meet WCAG standards and work for all users regardless of ability.',
    icon: 'fas fa-universal-access',
    color: 'from-pink-500 to-rose-500',
    delay: 0.5
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert guidance on architecture, tech stack selection, and development best practices.',
    icon: 'fas fa-hands-helping',
    color: 'from-cyan-500 to-blue-600',
    delay: 0.6
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-[5%] lg:px-[10%] py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="relative text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Services
            </span>
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-28 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
          </h2>

          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business goals—from strategy and design to development and deployment.
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={fadeIn}
              transition={{ delay: service.delay }}
              className="group relative bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400/30"
            >
              <div className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl mb-5 shadow-md`}>
                  <i className={service.icon}></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <button className="text-sm font-medium text-cyan-400 hover:text-white group-hover:text-white group-hover:bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg border border-cyan-400/30 group-hover:border-transparent transition-all duration-300">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>

              {/* Gradient Glow Background on Hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-tr ${service.color} blur-xl opacity-20`}></div>
                <div className={`absolute -bottom-12 -left-12 w-28 h-28 rounded-full bg-gradient-to-tl ${service.color} blur-xl opacity-20`}></div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            Not seeing exactly what you need?
          </p>
          <button className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Let's discuss your project
            <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;