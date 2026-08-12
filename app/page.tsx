import Hero from './components/Hero';
import Identity from './components/Identity';
import MyProject from './components/MyProject';
import Soundtrack from './components/Soundtrack';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-900 via-indigo-950 to-[#080816] text-zinc-300 selection:bg-violet-500/30 overflow-x-hidden">
      <Hero />
      <Identity />
      <MyProject />
      <Soundtrack />
      <Connect />
      <Footer />
    </main>
  );
}
