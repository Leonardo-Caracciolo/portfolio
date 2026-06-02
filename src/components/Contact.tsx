export default function Contact() {
  return (
    <section id="contacto" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary-light font-mono text-sm mb-3">// contacto.send()</p>
        <h2 className="section-title">Hablemos</h2>
        <p className="text-gray-400 text-lg mb-12 leading-7">
          ¿Tenés un proyecto de automatización o IA en mente? Estoy disponible para
          proyectos freelance y oportunidades full-time. No dudes en escribirme.
        </p>

        <div className="card p-8 mb-8 glow">
          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:leonardo.a.caracciolo@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors duration-200 group text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-0.5">Email</div>
                <div className="text-gray-200 group-hover:text-white transition-colors font-medium">
                  leonardo.a.caracciolo@gmail.com
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-primary-light ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leonardo-caracciolo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors duration-200 group text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-0.5">LinkedIn</div>
                <div className="text-gray-200 group-hover:text-white transition-colors font-medium">
                  linkedin.com/in/leonardo-caracciolo
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-primary-light ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-gray-600 text-sm font-mono">
          Respondo en menos de 24hs · Buenos Aires, Argentina 🇦🇷
        </p>
      </div>
    </section>
  );
}
