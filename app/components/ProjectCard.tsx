import Image from "next/image";
import type { Project } from "../data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative">
      <div className="rounded-2xl bg-gradient-to-b from-violet-600/40 via-indigo-900/25 to-zinc-800/40 p-px opacity-70 transition-all duration-500 group-hover:opacity-100">
        <div className="flex h-full flex-col overflow-hidden rounded-[15px] bg-[#0a0a0d] transition-shadow duration-500 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="relative aspect-video w-full overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Screenshot ${project.title}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-600/25 via-zinc-900 to-indigo-950">
                <span className="text-4xl font-black text-violet-500/50">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <h3 className="text-sm font-bold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between pt-3">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-violet-400 transition-colors hover:text-violet-300"
              >
                View Live
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <button className="inline-flex items-center gap-2 rounded-lg border border-violet-500/50 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-violet-400 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-950 hover:text-white">
                Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
