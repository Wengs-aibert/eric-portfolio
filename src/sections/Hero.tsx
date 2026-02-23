import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-bg"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Headshot Placeholder */}
          <div className="mb-10">
            <div className="w-36 h-36 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center border-2 border-accent/20">
              <span className="text-3xl font-bold text-accent">EW</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-text tracking-tight mb-4">
            Eric Weng
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-accent mb-8">
            Software Engineer
          </p>

          <p className="text-lg md:text-xl text-text/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Full stack engineer who's shipped production systems at scale.
            Now building for businesses that need to get online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              See My Work
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-200 hover:scale-105"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
