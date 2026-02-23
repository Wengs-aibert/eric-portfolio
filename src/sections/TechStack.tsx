import { motion } from 'framer-motion';

const techCategories = [
  {
    category: 'Languages',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'SQL']
  },
  {
    category: 'Frameworks',
    technologies: ['React', 'Node.js', 'Express', 'FastAPI', 'Django', 'Spring']
  },
  {
    category: 'Tools',
    technologies: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Webpack']
  },
  {
    category: 'Cloud',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Heroku', 'DigitalOcean']
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Elasticsearch']
  },
  {
    category: 'AI/ML',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'Pandas']
  }
];

export default function TechStack() {
  return (
    <section 
      id="tech-stack" 
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
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-orange-900 hover:text-blue-700 dark:hover:text-orange-300 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}