export default function Identity() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center p-8 md:py-32 relative">
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-3 mb-8 text-blue-500">
          <div className="w-10 h-px bg-blue-500"></div>
          <h2 className="text-xs font-black uppercase tracking-[0.5em]">Identity</h2>
        </div>
        <div className="bg-zinc-900/30 border border-zinc-800/50 p-10 md:p-14 rounded-[50px] backdrop-blur-2xl text-justify">
          <p className="text-2xl md:text-4xl leading-tight text-white font-light tracking-tighter">
            &quot;Seorang kreator yang bertumbuh di persimpangan kreativitas digital dan solusi teknologi. Fokus saya adalah membangun komunitas yang inklusif serta solusi web yang performan.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
