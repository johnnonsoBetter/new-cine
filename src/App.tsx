import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConsistencyProof from '@/components/ConsistencyProof';
import Reviewer from '@/components/Reviewer';
import FreeVsPaid from '@/components/FreeVsPaid';
import FourGates from '@/components/FourGates';
import WorksWithTools from '@/components/WorksWithTools';
import TakesProvenance from '@/components/TakesProvenance';
import Showcase from '@/components/Showcase';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ConsistencyProof />
        <Reviewer />
        <FreeVsPaid />
        <FourGates />
        <WorksWithTools />
        <TakesProvenance />
        <Showcase />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
