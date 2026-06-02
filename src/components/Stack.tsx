const categories = [
  {
    label: 'Backend',
    items: [
      { name: 'Python', level: 95, color: '#3B82F6' },
      { name: 'FastAPI', level: 90, color: '#009688' },
      { name: 'Django', level: 75, color: '#44B78B' },
      { name: 'PostgreSQL', level: 85, color: '#336791' },
    ],
  },
  {
    label: 'IA & LLMs',
    items: [
      { name: 'GPT-4 / OpenAI', level: 92, color: '#10A37F' },
      { name: 'LangChain', level: 85, color: '#EC4899' },
      { name: 'Ollama', level: 80, color: '#6366F1' },
      { name: 'RAG / Embeddings', level: 82, color: '#A855F7' },
    ],
  },
  {
    label: 'DevOps & Infra',
    items: [
      { name: 'Docker', level: 85, color: '#2496ED' },
      { name: 'Azure', level: 70, color: '#0078D4' },
      { name: 'Linux', level: 80, color: '#FCC624' },
      { name: 'Git / CI/CD', level: 88, color: '#F05032' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', level: 70, color: '#61DAFB' },
      { name: 'TypeScript', level: 68, color: '#3178C6' },
      { name: 'Astro', level: 65, color: '#FF5D01' },
      { name: 'Tailwind CSS', level: 75, color: '#06B6D4' },
    ],
  },
];

const techIcons = [
  { name: 'Python', svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', color: '#3B82F6' },
  { name: 'FastAPI', svg: '', emoji: '⚡', color: '#009688' },
  { name: 'React', svg: '', emoji: '⚛️', color: '#61DAFB' },
  { name: 'PostgreSQL', svg: '', emoji: '🐘', color: '#336791' },
  { name: 'Docker', svg: '', emoji: '🐳', color: '#2496ED' },
  { name: 'GPT-4', svg: '', emoji: '🤖', color: '#10A37F' },
  { name: 'Ollama', svg: '', emoji: '🦙', color: '#6366F1' },
  { name: 'LangChain', svg: '', emoji: '🔗', color: '#EC4899' },
];

export default function Stack() {
  return (
    <section id="stack" className="py-28 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary-light font-mono text-sm mb-3">// tech_stack.yml</p>
        <h2 className="section-title">Stack tecnológico</h2>
        <p className="section-subtitle">Las herramientas con las que construyo</p>

        {/* Icon grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {techIcons.map(({ name, emoji, color }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-2"
              title={name}
            >
              <div
                className="w-16 h-16 rounded-2xl card flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-gray-600 transition-all duration-300"
                style={{ boxShadow: `0 0 20px -5px ${color}40` }}
              >
                {emoji}
              </div>
              <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors font-mono">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(({ label, items }) => (
            <div key={label} className="card p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5 font-mono">
                {label}
              </h3>
              <div className="space-y-4">
                {items.map(({ name, level, color }) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-medium">{name}</span>
                      <span className="text-gray-500 font-mono text-xs">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${level}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
