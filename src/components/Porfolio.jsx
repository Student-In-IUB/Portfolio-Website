
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Modern E-Commerce Platform',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxTX2EHClwHOwInrlAZxrjO2oqwYqZZpgjg&s',
    description: 'Full-featured online store with cart and Stripe integration.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    category: 'Web App',
    github: 'https://github.com/yourusername/ecommerce-platform',
    liveDemo: 'https://your-ecommerce-demo.com'
  },
  {
    title: 'Mobile-First Social App',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnXICJYBx4wEbCAlRnxgp_qJNPAaKjgRN5Q&s',
    description: 'Community platform with messaging and profiles.',
    tags: ['React Native', 'Expo', 'Firebase'],
    category: 'Mobile',
    github: 'https://github.com/yourusername/social-app',
    liveDemo: 'https://your-socialapp-demo.com'
  },
  {
    title: 'Portfolio Website',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2ce_9ohZs63enxjTdzTFwMEgPMCeRNhqmFDsEVPKFn1KdQ31hXYLPpTCe_JxDAEwpx4&usqp=CAU',
    description: 'Animated personal portfolio site.',
    tags: ['GSAP', 'Framer Motion', 'SCSS'],
    category: 'UI/UX',
    github: 'https://github.com/yourusername/portfolio',
    liveDemo: 'https://yourportfolio.com'
  },
  {
    title: 'Enterprise CRM System',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMOVqaLz0k6gDXYzbL9EHsOlL6XswoRPtOQ&s',
    description: 'CRM with data insights and team features.',
    tags: ['Angular', 'NestJS', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/yourusername/crm-system',
    liveDemo: 'https://yourcrm.com'
  },
  {
    title: 'AI Chatbot Platform',
    image: 'https://101blockchains.com/wp-content/uploads/2023/10/AI-Chatbots-Tutorial-1.png',
    description: 'AI-powered chatbot for customer service automation.',
    tags: ['Next.js', 'OpenAI API', 'Tailwind'],
    category: 'Full Stack',
    github: 'https://github.com/yourusername/ai-chatbot',
    liveDemo: 'https://ai-chatbot-demo.com'
  },
  {
    title: 'Fitness Tracking App',
    image: 'https://common-blog-suffes.s3.us-east-2.amazonaws.com/16871796296490516daa74e.webp',
    description: 'Track workouts, goals, and progress visually.',
    tags: ['Flutter', 'Firebase', 'HealthKit'],
    category: 'Mobile',
    github: 'https://github.com/yourusername/fitness-tracker',
    liveDemo: 'https://fitness-tracker-demo.com'
  }
];

const filters = ['All', 'Web App', 'Mobile', 'UI/UX', 'Full Stack'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-20 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A selection of my work from full-stack platforms to mobile apps.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-sm border border-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-700"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) =>
                    (e.target.src =
                      'https://via.placeholder.com/600x400?text=Project+Image')
                  }
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-cyan-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                  <span className="text-sm text-cyan-400">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-4">Want to see more projects?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            View Full Portfolio <FiExternalLink className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;