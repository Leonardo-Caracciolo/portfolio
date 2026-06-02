export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span className="font-mono">
          © {new Date().getFullYear()} Leonardo Caracciolo
        </span>
        <span className="font-mono">
          Built with <span className="text-primary-light">Astro</span> + <span className="text-accent">React</span> + <span className="text-blue-400">Tailwind</span>
        </span>
      </div>
    </footer>
  );
}
