import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
    const t = useTranslations('Navigation');
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/50 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between mx-auto px-6 max-w-7xl">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-2xl tracking-tighter text-glow-purple">DineQ</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/pricing" className="transition-colors hover:text-glow-blue text-foreground/80">{t('pricing')}</Link>
                    <Link href="/business" className="transition-colors hover:text-glow-blue text-foreground/80">{t('business')}</Link>
                    <Link href="/partners" className="transition-colors hover:text-glow-blue text-foreground/80">{t('partners')}</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <LanguageToggle />
                    <Button asChild className="hidden md:flex shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-shadow">
                        <Link href="/demo">{t('demo')}</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
