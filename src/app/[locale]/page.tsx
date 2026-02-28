import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TrustSection } from '@/components/TrustSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HowItWorks />
      <FeaturesSection />
      <TrustSection />
    </div>
  );
}
