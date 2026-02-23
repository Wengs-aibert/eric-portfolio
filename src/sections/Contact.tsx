import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-accent)' }}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="mb-12 uppercase"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--color-bg)',
            lineHeight: 1.1,
          }}
        >
          Let's Turn Ideas Into Reality
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:erictweng@gmail.com"
            className="inline-block px-8 py-4 font-bold uppercase tracking-wider rounded-sm transition-opacity duration-200 hover:opacity-90"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
            }}
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/erictweng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 font-bold uppercase tracking-wider rounded-sm transition-all duration-200"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              backgroundColor: 'transparent',
              color: 'var(--color-bg)',
              border: '2px solid var(--color-bg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-bg)';
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-bg)';
            }}
          >
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
