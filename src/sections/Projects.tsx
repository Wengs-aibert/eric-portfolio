import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Equipment Management System',
    description: 'Real-time equipment tracking and shift management tool for 24/7 operations. Centralized dashboard integrating multiple APIs into a single source of truth for operators and engineering teams.',
    tech: ['React', 'TypeScript', 'REST APIs', 'Slack/Jira Integration'],
    link: null,
  },
  {
    title: 'Golf Leaderboard',
    description: 'Match and tournament tracking app for golfers — create rounds, track scores per hole, and compete on persistent leaderboards.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    link: null,
  },
  {
    title: 'VROlympics Landing Page',
    description: 'Landing page for VROlympics — a virtual reality competitive events platform featuring real-time scoring and live leaderboards.',
    tech: ['React', 'TypeScript', 'Vercel'],
    link: 'https://vrolympics1.vercel.app',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wider"
          style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--color-text)' }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Wrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className={`project-card rounded-xl p-6 ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
              style={{
                backgroundColor: 'var(--color-bg)',
              }}
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-text)' }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5 opacity-70"
                style={{ color: 'var(--color-text)' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full"
                    style={{
                      border: '1px solid var(--color-accent)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .project-card {
          border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-accent);
        }
      `}</style>
    </section>
  );
}
