import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior Software Engineer',
    dates: '2022 - Present',
    highlights: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented CI/CD pipelines reducing deployment time by 80%',
      'Mentored junior developers and conducted technical interviews'
    ]
  },
  {
    company: 'StartupCo',
    role: 'Full Stack Developer',
    dates: '2020 - 2022',
    highlights: [
      'Built MVP from scratch using React and Node.js',
      'Developed real-time features using WebSocket technology',
      'Integrated payment systems and third-party APIs'
    ]
  },
  {
    company: 'Digital Solutions Ltd.',
    role: 'Software Developer',
    dates: '2018 - 2020',
    highlights: [
      'Developed and maintained web applications using modern frameworks',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Optimized database queries improving performance by 40%'
    ]
  },
  {
    company: 'University Research Lab',
    role: 'Research Assistant',
    dates: '2017 - 2018',
    highlights: [
      'Conducted machine learning research on natural language processing',
      'Published findings in peer-reviewed conferences',
      'Developed data analysis tools using Python and R'
    ]
  }
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development and technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-blue-500 dark:bg-orange-500 rounded-full border-4 border-white dark:border-black shadow-md"></div>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{exp.dates}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-blue-600 dark:text-orange-400 mb-3">
                    {exp.company}
                  </h4>
                  
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li 
                        key={highlightIndex}
                        className="text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-blue-500 dark:text-orange-500 mr-2 mt-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}