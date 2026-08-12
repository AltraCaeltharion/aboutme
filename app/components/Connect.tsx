export default function Connect() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 py-32 relative">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-blue-600 mb-16">Get In Touch</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <SocialCard href="https://discord.gg/invite-code" title="Discord" subtitle="Bocah Ronda" color="hover:border-indigo-600" />
          <SocialCard href="https://github.com/Bardan1172" title="Github" subtitle="Repositories" color="hover:border-white" />
          <SocialCard href="https://youtube.com/@bardan1172" title="Youtube" subtitle="Video Content" color="hover:border-red-600" />
          <SocialCard href="https://www.instagram.com/bardan_1172/" title="Instagram" subtitle="Daily Life" color="hover:border-pink-600" />
          <SocialCard href="https://trakteer.id/bardan1172/tip" title="Trakteer" subtitle="Support Me" color="hover:border-yellow-600" />
          <SocialCard href="#" title="Heppy Cloud" subtitle="Cloud Service" color="hover:border-cyan-600" />
        </div>
        <footer className="mt-32">
          <p className="text-[9px] uppercase tracking-[0.8em] text-zinc-800 font-black">
            © {new Date().getFullYear()} Altra Caeltharion
          </p>
        </footer>
      </div>
    </section>
  );
}

function SocialCard({ href, title, subtitle, color }: { href: string, title: string, subtitle: string, color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-start gap-4 p-6 bg-zinc-900/20 border border-zinc-800/40 rounded-[32px] transition-all duration-500 hover:bg-zinc-900 backdrop-blur-md ${color}`}
    >
      <div className="w-full flex justify-between items-start">
        <div className="p-2 bg-zinc-800/50 rounded-xl group-hover:bg-zinc-800 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-500 group-hover:text-white transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
      </div>
      <div className="text-left mt-2">
        <h3 className="text-sm font-bold text-zinc-100">{title}</h3>
        <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-1 font-bold">{subtitle}</p>
      </div>
    </a>
  );
}
