import SectionHeader from './SectionHeader';
import { socialLinks } from '../data/portfolio';

export default function Connect() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-6 py-32 relative">
      <div className="max-w-4xl w-full text-center">
        <SectionHeader label="Get In Touch" align="center" className="mb-16" withLine={false} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {socialLinks.map((social) => (
            <SocialCard key={social.title} {...social} />
          ))}
        </div>
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
