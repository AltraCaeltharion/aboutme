import FavoriteSong from '../FavoriteSong';

export default function Soundtrack() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center p-4 py-32 relative">
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center gap-4 mb-20 text-zinc-700">
          <div className="w-16 h-[1px] bg-zinc-900"></div>
          <h2 className="text-[10px] font-black uppercase tracking-[1.2em] ml-4">Soundtrack</h2>
        </div>
        <FavoriteSong />
      </div>
    </section>
  );
}
