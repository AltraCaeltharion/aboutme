import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="text-center pt-16 pb-10">
      <p className="text-[9px] uppercase tracking-[0.8em] text-zinc-800 font-black">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
