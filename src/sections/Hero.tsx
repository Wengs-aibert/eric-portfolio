import { motion } from 'framer-motion';

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Photo Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Photo</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Eric Weng
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Software Engineer
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Building scalable solutions with modern technologies. 
            Passionate about full-stack development, cloud infrastructure, and creating elegant user experiences.
          </p>
          
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-blue-600 dark:bg-orange-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}