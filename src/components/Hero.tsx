"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Index');

    return (
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-sm font-medium text-glow-purple mb-8 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-glow-purple mr-2 blur-[1px]"></span>
                        {t('badge')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent mb-6 text-balance"
                    >
                        {t('title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed text-balance"
                    >
                        {t('subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Button asChild size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-95">
                            <Link href="/demo">
                                {t('cta_primary')} <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 border-white/10 hover:bg-white/5 backdrop-blur-sm transition-all active:scale-95">
                            <Link href="/pricing">{t('cta_secondary')}</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 mt-16"></div>
        </section>
    );
}
