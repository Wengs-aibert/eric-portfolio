import { motion } from 'framer-motion';
import { Coffee, Music, Camera, BookOpen } from 'lucide-react';

const interests = [
  {
    icon: Coffee,
    title: 'Coffee Enthusiast',
    description: 'Always exploring new brewing methods and coffee origins.'
  },
  {
    icon: Music,
    title: 'Music Lover',
    description: 'From jazz to electronic, music fuels my creativity.'
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capturing moments and exploring the world through a lens.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Always reading about new technologies and methodologies.'
  }
];

export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
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
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond the code, here's what drives and inspires me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I started my journey in technology with a curiosity about how things work under the hood. 
                This led me to pursue computer science, where I discovered my passion for creating solutions 
                that make a real difference in people's lives.
              </p>
              <p>
                Over the years, I've evolved from writing simple scripts to architecting complex systems 
                that serve millions of users. What excites me most is the intersection of technology and 
                human experience — building tools that are not just functional, but genuinely helpful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and the power of collaboration to solve complex challenges.
              </p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Beyond Coding
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-orange-100 rounded-lg mr-3">
                      <interest.icon className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {interest.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}