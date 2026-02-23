import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-bg relative overflow-hidden"
    >
      {/* Name container */}
      <div className="relative flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <h1
            className="hero-name font-black uppercase text-center leading-[0.9] select-none"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              color: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            <span className="block sm:inline">ERIC</span>
            <span className="block sm:inline sm:ml-[0.3em]">WENG</span>
          </h1>
        </motion.div>

        {/* Orange accent line cutting through center */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
          className="absolute top-1/2 left-0 w-full h-[3px] bg-accent z-10"
          style={{ transformOrigin: 'left center' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 text-accent uppercase tracking-[0.25em] text-center"
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: 'clamp(0.6rem, 1.5vw, 1rem)',
          }}
        >
          Full Stack Software Engineer
        </motion.p>
      </div>

      {/* Scroll-down arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute bottom-10 z-20"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() =>
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="text-text/40 hover:text-text/60 transition-colors"
          aria-label="Scroll down"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Skills marquee bar */}
      <div className="absolute -bottom-4 left-0 w-full z-10">
        <div
          className="w-[120vw] -ml-[10vw] bg-accent overflow-hidden py-3"
          style={{ transform: 'rotate(7deg)' }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'marquee 35s linear infinite' }}
          >
            {[0, 1].map((i) => (
              <span
                key={i}
                className="text-bg font-bold uppercase text-lg tracking-wider px-4"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                PYTHON &nbsp;★&nbsp; JAVA &nbsp;★&nbsp; C/C++ &nbsp;★&nbsp; JAVASCRIPT &nbsp;★&nbsp; REACT &nbsp;★&nbsp; TYPESCRIPT &nbsp;★&nbsp; RUST &nbsp;★&nbsp; GIT &nbsp;★&nbsp; CLAUDE/CURSOR &nbsp;★&nbsp; ESP32 &nbsp;★&nbsp; NOSQL &nbsp;★&nbsp; UNIX/LINUX &nbsp;★&nbsp; MACOS &nbsp;★&nbsp; WINDOWS &nbsp;★&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-name {
          -webkit-text-stroke: 2px rgba(0, 0, 0, 0.2);
        }
        :root.dark .hero-name {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </section>
  );
}
