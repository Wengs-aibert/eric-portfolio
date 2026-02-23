import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/erictweng' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ericweng' },
  { icon: Mail, href: 'mailto:erictweng@gmail.com' },
];

export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
      }}
    >
      <p className="text-sm mb-4" style={{ color: 'color-mix(in srgb, var(--color-text) 50%, transparent)' }}>
        © 2026 Eric Weng
      </p>
      <div className="flex justify-center gap-5">
        {socials.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="transition-colors duration-200"
            style={{ color: 'var(--color-text)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
}
