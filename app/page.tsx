import Hero from './components/Hero';
import Identity from './components/Identity';
import MyProject from './components/MyProject';
import Soundtrack from './components/Soundtrack';
import Connect from './components/Connect';
import Footer from './components/Footer';
import StarField from './components/StarField';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0e1733] via-[#070c1f] to-[#03040a] text-zinc-300 selection:bg-violet-500/30 overflow-x-hidden">
      <StarField />
      <Hero />
      <Identity />
      <MyProject />
      <Soundtrack />
      <Connect />
      <Footer />
    </main>
  );
}
