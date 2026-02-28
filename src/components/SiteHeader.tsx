"use client";

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/pricing', label: t('pricing') },
        { href: '/business', label: t('business') },
        { href: '/partners', label: t('partners') },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
                ? 'border-white/10 bg-background/80 backdrop-blur-xl py-3'
                : 'border-transparent bg-transparent py-5'
                }`}
        >
            <div className="flex items-center justify-between mx-auto px-6 max-w-7xl">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="font-bold text-2xl tracking-tighter text-glow-purple group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">DineQ</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors relative py-1 px-1 ${pathname === link.href
                                ? 'text-white'
                                : 'text-foreground/60 hover:text-white'
                                }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="navUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-purple to-transparent"
                                />
                            )}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        <LanguageToggle />
                        <Button asChild className="bg-white text-black hover:bg-white/90 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98]">
                            <Link href="/demo">{t('demo')}</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium transition-colors ${pathname === link.href ? 'text-glow-purple' : 'text-foreground/60'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-white/5 w-full my-2" />
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-foreground/40">{t('language')}</span>
                                <LanguageToggle />
                            </div>
                            <Button asChild className="w-full h-12 bg-white text-black hover:bg-white/90 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98]">
                                <Link href="/demo" onClick={() => setIsOpen(false)}>{t('demo')}</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
