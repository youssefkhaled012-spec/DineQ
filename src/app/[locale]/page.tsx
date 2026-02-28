import { useTranslations } from 'next-intl';
import { Hero } from '@/components/Hero';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
    </div>
  );
}
