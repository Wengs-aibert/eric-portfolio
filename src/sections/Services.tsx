import { motion } from 'framer-motion';
import { Code, Cloud, Brain, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building modern web applications with React, TypeScript, Node.js, and more.'
  },
  {
    icon: Brain,
    title: 'ML/AI Solutions',
    description: 'Developing intelligent systems and machine learning models for complex problems.'
  },
  {
    icon: Settings,
    title: 'System Design',
    description: 'Architecting scalable, maintainable systems that grow with your business needs.'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Deploying and managing applications on AWS, GCP, and other cloud platforms.'
  }
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
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
            What I Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I specialize in creating robust, scalable solutions across the full technology stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-orange-100 rounded-lg mb-4">
                <service.icon className="w-6 h-6 text-blue-600 dark:text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}