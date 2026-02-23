import { motion } from 'framer-motion';
import { Globe, Code2, Calendar, ShoppingCart, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Websites',
    description: 'Custom websites that look great and actually bring in customers.',
  },
  {
    icon: Code2,
    title: 'Web Apps',
    description: 'Full-stack applications built to handle real users and real data.',
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    description: 'Let your customers schedule appointments online, 24/7.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Ordering',
    description: 'E-commerce and ordering systems that just work.',
  },
  {
    icon: Smartphone,
    title: 'iOS Apps',
    description: 'Native mobile apps for iPhone and iPad.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-bg"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
            What I Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-text/10 rounded-xl p-8 hover:-translate-y-1 hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                {service.title}
              </h3>
              <p className="text-text/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
