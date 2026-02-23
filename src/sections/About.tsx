import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-bg"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-accent mb-6">
            The &lsquo;Why&rsquo; Behind Who I Am
          </p>

          <div className="text-lg md:text-xl lg:text-2xl text-text/80 leading-relaxed md:leading-loose space-y-8">
            <p>
              Growing up in Danville, I was the kid who asked &lsquo;why&rsquo; about everything
              — why is the sky blue, why do we build things this way, why does this work
              but that doesn't. That curiosity never stopped.
            </p>
            <p>
              It's what pulled me into software engineering, and it's what I bring to
              every project I build. I don't just write code — I dig into the problem,
              understand the &lsquo;why&rsquo; behind what you need, and build something that
              actually solves it.
            </p>
            <p>
              Whether it's a local business that needs more customers online or a complex
              web application, I approach every project with the same question:{' '}
              <span className="text-accent font-semibold">
                &ldquo;Why does this matter, and how do I make it great?&rdquo;
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
