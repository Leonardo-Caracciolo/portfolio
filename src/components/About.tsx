const stats = [
  { value: '4+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos entregados' },
  { value: '3', label: 'Empresas top' },
  { value: '∞', label: 'Café consumido' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-primary-light font-mono text-sm mb-3">// sobre_mi.py</p>
            <h2 className="section-title">Sobre mí</h2>
            <p className="text-gray-400 text-base mb-4 leading-7">
              Soy Backend Developer con más de 4 años de experiencia construyendo sistemas
              escalables e integrando inteligencia artificial en flujos de trabajo empresariales.
              Pasé por <span className="text-white font-medium">PwC</span> y{' '}
              <span className="text-white font-medium">Deloitte</span>, donde desarrollé
              soluciones de automatización para clientes corporativos de primer nivel.
            </p>
            <p className="text-gray-400 text-base mb-8 leading-7">
              Hoy combino mi experiencia en empresas de consultoría con proyectos freelance
              donde aplico LLMs, automatización de documentos y APIs robustas para resolver
              problemas reales de negocio.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'FastAPI', 'LLMs', 'Docker', 'PostgreSQL', 'Automatización'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary-light text-sm rounded-lg font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="card p-6 text-center glow">
                <div className="text-4xl font-extrabold gradient-text mb-2">{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
