import { motion } from 'framer-motion';

const categories = [
  { label: 'Languages', items: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'Rust'] },
  { label: 'Frameworks', items: ['React'] },
  { label: 'Tools', items: ['Git', 'Claude/Cursor', 'ESP32', 'NoSQL'] },
  { label: 'Platforms', items: ['Unix/Linux', 'macOS', 'Windows'] },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wider"
          style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--color-text)' }}
        >
          Stack &amp; Code
        </motion.h2>

        <div className="space-y-10">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-1 rounded-full text-sm cursor-default transition-colors duration-200"
                    style={{
                      color: 'var(--color-text)',
                      border: '1px solid color-mix(in srgb, var(--color-text) 20%, transparent)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-text) 20%, transparent)';
                      e.currentTarget.style.color = 'var(--color-text)';
                    }}
                  >
                    {item}
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
