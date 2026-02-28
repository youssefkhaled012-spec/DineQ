import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TrustSection } from '@/components/TrustSection';
import { Reveal } from '@/components/motion/Reveal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Reveal width="100%">
        <HowItWorks />
      </Reveal>
      <Reveal width="100%">
        <FeaturesSection />
      </Reveal>
      <Reveal width="100%">
        <TrustSection />
      </Reveal>
    </div>
  );
}
