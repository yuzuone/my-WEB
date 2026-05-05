/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExperienceSection from './components/Experience';
import ProjectBento from './components/ProjectBento';
import Capabilities from './components/Capabilities';
import Footer from './components/Footer';
import DotField from './components/ui/DotField';
import ContactModal from './components/ContactModal';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-br from-[#e945f5] via-white to-[#6a6a6a]">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={0}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(233, 69, 245, 0.4)"
          gradientTo="rgba(0, 0, 0, 0.2)"
        />
      </div>

      <Navigation onContactClick={() => setIsContactOpen(true)} />

      <main className="w-full px-6 sm:px-10 lg:px-16 space-y-32 pb-32">
        <Hero />
        
        <section id="projects" className="pt-24">
          <ProjectBento onContactClick={() => setIsContactOpen(true)} />
        </section>

        <section id="experience">
           <ExperienceSection />
        </section>

        <section id="capabilities">
          <Capabilities />
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
