import SectionHeader from './SectionHeader';
import FavoriteSong from './FavoriteSong';

export default function Soundtrack() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center p-4 py-32 relative">
      <div className="w-full flex flex-col items-center">
        <SectionHeader label="Soundtrack" color="zinc" className="mb-20" />
        <FavoriteSong />
      </div>
    </section>
  );
}
