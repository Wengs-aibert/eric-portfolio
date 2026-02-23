import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'erictweng@gmail.com', href: 'mailto:erictweng@gmail.com' },
  { icon: Phone, label: '(925) 487-3118', href: 'tel:+19254873118' },
  { icon: Github, label: 'github.com/erictweng', href: 'https://github.com/erictweng' },
  { icon: Linkedin, label: 'linkedin.com/in/ericweng', href: 'https://linkedin.com/in/ericweng' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    } catch { /* silent */ }
    setSubmitting(false);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    borderColor: 'color-mix(in srgb, var(--color-text) 20%, transparent)',
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--color-accent)';
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'color-mix(in srgb, var(--color-text) 20%, transparent)';
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-[0.2em]"
          style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--color-accent)' }}
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {/* TODO: Replace FORM_ID with your Formspree form ID from https://formspree.io */}
          <form
            action="https://formspree.io/f/FORM_ID"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {(['Name', 'Email'] as const).map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                  {field}
                </label>
                <input
                  name={field.toLowerCase()}
                  type={field === 'Email' ? 'email' : 'text'}
                  required
                  placeholder={field === 'Email' ? 'your@email.com' : 'Your name'}
                  className="w-full px-4 py-3 border rounded-lg transition-colors duration-200 outline-none"
                  style={inputStyle}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 border rounded-lg resize-none transition-colors duration-200 outline-none"
                style={inputStyle}
                onFocus={focusHandler}
                onBlur={blurHandler}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-lg font-bold text-lg transition-opacity duration-200 disabled:opacity-50"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
            {sent && (
              <p className="text-center font-medium" style={{ color: 'var(--color-accent)' }}>
                Message sent!
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-8">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 text-lg transition-opacity duration-200 hover:opacity-80"
                style={{ color: 'var(--color-text)' }}
              >
                <Icon size={22} style={{ color: 'var(--color-accent)' }} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
