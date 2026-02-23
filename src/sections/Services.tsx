import { motion } from 'framer-motion';

const services = [
  { title: 'Websites', stat: 'Custom', subtitle: 'Designed & built from scratch' },
  { title: 'Web Apps', stat: 'Full Stack', subtitle: 'Frontend to backend to deploy' },
  { title: 'Booking Systems', stat: '24/7', subtitle: 'Online scheduling that just works' },
  { title: 'Online Ordering', stat: 'E-commerce', subtitle: 'Orders, payments, fulfillment' },
  { title: 'iOS Apps', stat: 'Native', subtitle: 'iPhone & iPad applications' },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p
            style={{
              color: 'var(--color-accent)',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            What I Do
          </p>
          <h2
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
            }}
          >
            Services
          </h2>
        </motion.div>

        {/* Cards row — no container animation, only individual cards */}
        <div
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="service-card relative rounded-lg p-6 md:p-8 flex-shrink-0 cursor-default group"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
                minWidth: '220px',
                width: 'clamp(220px, 18vw, 260px)',
                minHeight: '260px',
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid transparent',
              }}
            >
              {/* Accent square top-right */}
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-sm transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />

              {/* Title */}
              <h3
                style={{
                  color: 'var(--color-text)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
              >
                {service.title}
              </h3>

              {/* Bottom content */}
              <div>
                <p
                  style={{
                    color: 'var(--color-accent)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontFamily: "'Orbitron', sans-serif",
                    lineHeight: 1.2,
                    marginBottom: '0.25rem',
                  }}
                >
                  {service.stat}
                </p>
                <p style={{ color: 'var(--color-text)', opacity: 0.5, fontSize: '0.85rem' }}>
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card {
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-accent);
        }
      `}</style>
    </section>
  );
}
