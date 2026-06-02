const jobs = [
  {
    company: 'Deloitte',
    role: 'Backend Developer · AI Automation',
    period: 'Abr 2023 – Presente',
    type: 'Full-time',
    description:
      'Desarrollo de sistemas de automatización con Python y LLMs para clientes del sector financiero y energético. Integración de GPT-4 en flujos de procesamiento documental, reduciendo tiempos manuales en un 70%.',
    tech: ['Python', 'FastAPI', 'GPT-4', 'Azure', 'PostgreSQL', 'Docker'],
    color: 'from-primary to-accent',
    current: true,
  },
  {
    company: 'Freelance',
    role: 'AI & Backend Developer',
    period: 'Jul 2024 – Presente',
    type: 'Freelance',
    description:
      'Desarrollo de bots de IA, procesadores de documentos PDF y sistemas de facturación automatizados. Clientes en Argentina, España y EEUU. Especialización en RAG, embeddings y automatización con LLMs locales.',
    tech: ['Python', 'Ollama', 'LangChain', 'FastAPI', 'React', 'PostgreSQL'],
    color: 'from-accent to-pink-500',
    current: true,
  },
  {
    company: 'PwC',
    role: 'Backend Developer',
    period: 'Nov 2021 – Abr 2023',
    type: 'Full-time',
    description:
      'Construcción de APIs REST y pipelines de datos para proyectos de auditoría digital. Automatización de reportes y procesamiento de datos contables a gran escala.',
    tech: ['Python', 'Django', 'REST APIs', 'SQL Server', 'Power BI'],
    color: 'from-blue-500 to-primary',
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-28 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary-light font-mono text-sm mb-3">// experiencia.json</p>
        <h2 className="section-title">Experiencia</h2>
        <p className="section-subtitle">Dónde he construido cosas que importan</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br ${job.color} ring-4 ring-gray-950 -translate-x-1/2`}
                />

                <div className="card p-6 hover:border-gray-700/70 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white">{job.company}</h3>
                        {job.current && (
                          <span className="px-2 py-0.5 bg-green-500/15 border border-green-500/30 text-green-400 text-xs rounded-full font-mono">
                            Activo
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-primary-light font-medium mt-1">{job.role}</p>
                    </div>
                    <span className="text-gray-500 text-sm font-mono shrink-0">{job.period}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-6 mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-lg font-mono border border-gray-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
