const projects = [
  {
    title: 'Sistema Facturas IVA',
    description:
      'Sistema automatizado de procesamiento y validación de facturas con cálculo de IVA. Extrae datos de PDFs con OCR, valida contra AFIP y genera reportes contables en Excel. Integrado con notificaciones por email.',
    tech: ['Python', 'FastAPI', 'GPT-4', 'PostgreSQL', 'Docker', 'Celery'],
    icon: '🧾',
    gradient: 'from-blue-600 to-primary',
    features: ['Procesamiento OCR automático', 'Validación AFIP', 'Reportes Excel', 'Notificaciones email'],
  },
  {
    title: 'MEDCO Bot',
    description:
      'Chatbot médico con IA generativa que responde consultas clínicas usando RAG sobre documentación médica especializada. Modelo local con Ollama para privacidad total de datos sensibles. Interfaz web integrada.',
    tech: ['Python', 'Ollama', 'LangChain', 'FastAPI', 'React', 'ChromaDB'],
    icon: '🏥',
    gradient: 'from-accent to-pink-600',
    features: ['RAG sobre docs médicos', 'Modelos LLM locales', 'Privacidad total', 'Interfaz conversacional'],
  },
  {
    title: 'Payroll PDF Processor',
    description:
      'Pipeline de automatización de liquidaciones de sueldos en PDF. Extrae, normaliza y consolida datos de múltiples formatos de recibos. Genera reportes de RRHH y detecta anomalías con ML.',
    tech: ['Python', 'pdfplumber', 'FastAPI', 'PostgreSQL', 'Pandas', 'Docker'],
    icon: '💼',
    gradient: 'from-green-600 to-teal-600',
    features: ['Multi-formato PDF', 'Detección de anomalías', 'Dashboard RRHH', 'Export CSV/Excel'],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary-light font-mono text-sm mb-3">// proyectos.py</p>
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">Soluciones reales construidas con IA y automatización</p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card p-6 flex flex-col group hover:border-gray-700/70 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">{project.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {project.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/50">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-gray-800/80 text-gray-300 text-xs rounded font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
