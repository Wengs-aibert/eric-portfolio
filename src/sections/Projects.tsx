import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#'
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Real-time analytics dashboard for business intelligence. Built with Python, FastAPI, and React with interactive visualizations.',
    tech: ['Python', 'FastAPI', 'React', 'D3.js'],
    github: '#',
    live: '#'
  },
  {
    title: 'AI Chat Application',
    description: 'Intelligent chatbot application using natural language processing. Features context-aware responses and multi-language support.',
    tech: ['Python', 'TensorFlow', 'React', 'WebSocket'],
    github: '#',
    live: '#'
  },
  {
    title: 'Cloud Infrastructure Tool',
    description: 'DevOps automation tool for managing cloud resources. Supports AWS, GCP with infrastructure as code principles.',
    tech: ['Go', 'AWS', 'Terraform', 'Docker'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of recent work spanning full-stack development, machine learning, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-orange-100 text-blue-700 dark:text-orange-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}