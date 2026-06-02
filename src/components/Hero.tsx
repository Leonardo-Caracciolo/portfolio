import { useState, useEffect } from 'react';

const roles = [
  'Backend Developer',
  'AI Automation Engineer',
  'Python Specialist',
  'LLM Integrator',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(i => i + 1);
      }, 80);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(i => i - 1);
      }, 40);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Disponible para nuevos proyectos
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-slide-up">
          <span className="text-white">Leonardo</span>
          <br />
          <span className="gradient-text">Caracciolo</span>
        </h1>

        {/* Animated role */}
        <div className="text-xl md:text-2xl font-mono text-gray-400 mb-6 h-8 animate-slide-up animate-delay-200">
          <span className="text-accent">{'> '}</span>
          <span className="text-gray-200">{displayed}</span>
          <span className="typing-cursor" />
        </div>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 animate-slide-up animate-delay-300">
          Construyo sistemas backend robustos e integro IA para automatizar procesos complejos.
          4+ años de experiencia en Deloitte, PwC y proyectos freelance.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up animate-delay-400">
          <a href="#proyectos" className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H7m6-7l-7 7 7 7" style={{transform:'rotate(180deg)', transformOrigin:'center'}} />
            </svg>
            Ver proyectos
          </a>
          <a href="#contacto" className="btn-outline">
            Contacto
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-xs font-mono">scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
