import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';

export default function MyProject() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#030303]">
      <div className="max-w-3xl w-full py-20">
        <SectionHeader label="My Project" className="mb-16" />
        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-10 md:p-14 bg-zinc-900/30 border border-zinc-800/50 rounded-[50px] backdrop-blur-2xl text-justify transition-all duration-500 hover:border-blue-600/50 hover:bg-zinc-900"
            >
              <div className="flex items-center gap-3 text-cyan-400 mb-6">
                <div className="p-2 bg-zinc-800/50 rounded-xl group-hover:bg-zinc-800 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-400"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Live Website</span>
              </div>
              <h3 className="text-2xl md:text-4xl leading-tight text-white font-light tracking-tighter">
                {project.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed group-hover:text-zinc-100 transition-colors">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
