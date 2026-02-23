import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left column — 2+ years */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="md:w-[40%] flex flex-col items-center justify-center relative"
        >
          <div className="relative flex flex-col items-center justify-center">
            <span
              style={{
                fontSize: 'clamp(8rem, 20vw, 16rem)',
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                color: 'var(--color-text)',
                opacity: 0.15,
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              2+
            </span>
            <span
              style={{
                color: 'var(--color-text)',
                opacity: 0.6,
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 'clamp(0.75rem, 1.5vw, 1.1rem)',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginTop: '-1.5rem',
              }}
            >
              Years of Experience
            </span>
          </div>
        </motion.div>

        {/* Right column — About text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true }}
          className="md:w-[60%]"
        >
          <p
            style={{
              color: 'var(--color-accent)',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            About
          </p>

          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, lineHeight: 1.15, marginBottom: '2rem' }}>
            <span style={{ display: 'block', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-text)' }}>THE</span>
            <span style={{ display: 'block', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-accent)' }}>&lsquo;WHY&rsquo;</span>
            <span style={{ display: 'block', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-text)' }}>BEHIND WHO I AM</span>
          </h2>

          <div style={{ maxWidth: '600px' }} className="space-y-6">
            <p style={{ color: 'var(--color-text)', opacity: 0.7, lineHeight: 1.8, fontSize: '1.05rem' }}>
              Growing up in Danville, I was the kid who asked &lsquo;why&rsquo; about everything
              — why is the sky blue, why do we build things this way, why does this work
              but that doesn&apos;t. That curiosity never stopped. It&apos;s what pulled me into
              software engineering, and it&apos;s what I bring to every project I build.
            </p>
            <p style={{ color: 'var(--color-text)', opacity: 0.7, lineHeight: 1.8, fontSize: '1.05rem' }}>
              I don&apos;t just write code — I dig into the problem, understand the &lsquo;why&rsquo;
              behind what you need, and build something that actually solves it. Whether
              it&apos;s a local business that needs more customers online or a complex web
              application, I approach every project with the same question: &ldquo;Why does
              this matter, and how do I make it great?&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
