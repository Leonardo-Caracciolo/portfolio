import { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `Sos el asistente profesional de Leonardo Caracciolo, Backend Developer especializado en IA y automatización. Respondés preguntas sobre su experiencia, proyectos y habilidades basándote en su CV. Respondés en el mismo idioma que te hablan. Sos conciso, profesional y honesto. Si no sabés algo, lo decís. No inventás información.

CV de Leonardo:
- 4+ años de experiencia en Backend, RPA e IA aplicada
- Actualmente en Deloitte Argentina (Abr 2023): automatización contable/fiscal con Python, SOLID, reducción 70-80% tiempo de procesamiento manual
- Freelance (Jul 2024): MEDCO Bot (WhatsApp + FastAPI + PostgreSQL + OpenRouter), Payroll PDF Processor (PyQt5 + OCR)
- PwC Argentina (Nov 2021 - Abr 2023): Power BI, Qlik, pandas, migración Google Apps Script a Python
- Stack: Python, FastAPI, React, PostgreSQL, GPT-4o, RAG/FAISS, Ollama, PyMuPDF, Playwright
- Email: leonardo.a.caracciolo@gmail.com
- LinkedIn: linkedin.com/in/leonardo-caracciolo
- Cursando Ingeniería en Informática en UBA`;

const WELCOME = 'Hola! Soy el asistente de Leonardo. Preguntame sobre su experiencia, proyectos o habilidades 👋';

const API_KEY = import.meta.env.PUBLIC_OPENROUTER_API_KEY as string;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function DotsLoader() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [open, messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const next: Message[] = [...messages, { role: 'user', content: text }];
    // keep max 10 messages
    const trimmed = next.slice(-10);
    setMessages(trimmed);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
          'HTTP-Referer': window.location.origin,
        },
        body: JSON.stringify({
          model: 'qwen/qwen3-8b:free',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...trimmed,
          ],
        }),
      });

      if (!res.ok) throw new Error('api_error');

      const data = await res.json();
      const reply: string = data.choices?.[0]?.message?.content ?? '';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Error al conectar. Intentá de nuevo.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') sendMessage();
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: '#7c3aed' }}
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          '💬'
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl border border-gray-700/60 bg-gray-900 shadow-2xl overflow-hidden"
          style={{ width: '380px', height: '500px' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ backgroundColor: '#7c3aed' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <span className="text-white font-semibold text-sm">Hablá con Leonardo</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {/* Welcome message */}
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2.5 bg-gray-700 text-gray-100 text-sm leading-relaxed">
                {WELCOME}
              </div>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'rounded-tr-sm text-white'
                      : 'rounded-tl-sm bg-gray-700 text-gray-100'
                  }`}
                  style={msg.role === 'user' ? { backgroundColor: '#7c3aed' } : undefined}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-sm bg-gray-700">
                  <DotsLoader />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-gray-700/60 px-3 py-3 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
              placeholder="Escribí tu pregunta..."
              className="flex-1 bg-gray-800 text-gray-100 text-sm rounded-xl px-4 py-2.5 outline-none placeholder-gray-500 border border-gray-700/50 focus:border-violet-500/60 transition-colors disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Enviar"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 shrink-0"
              style={{ backgroundColor: '#7c3aed' }}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile: full-width panel override */}
      <style>{`
        @media (max-width: 420px) {
          .fixed.bottom-24.right-6 {
            right: 0.5rem;
            left: 0.5rem;
            width: auto !important;
          }
        }
      `}</style>
    </>
  );
}
