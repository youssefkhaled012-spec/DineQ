"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, QrCode, ShoppingCart, Clock, CreditCard, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Index');

    return (
        <section className="relative overflow-hidden pt-32 md:pt-48 pb-20 md:pb-32">
            {/* Premium Background Depth Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-glow-purple/10 blur-[120px] rounded-full -z-20"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -40, 0],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-glow-blue/10 blur-[150px] rounded-full -z-20"
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-glow-purple shadow-[0_0_20px_rgba(168,85,247,0.15)] mb-10"
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-glow-purple animate-pulse" />
                        {t('badge')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-black tracking-tight max-w-5xl bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent mb-8 text-balance leading-[1.1]"
                    >
                        {t('title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-foreground/60 max-w-3xl mb-12 leading-relaxed text-balance font-medium"
                    >
                        {t('subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-6 mb-16"
                    >
                        <Button asChild size="lg" className="h-14 px-10 bg-white text-black hover:bg-white/90 font-black text-lg shadow-[0_20px_40px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-[0.98] rounded-2xl">
                            <Link href="/demo">
                                {t('cta_primary')} <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-10 border-white/10 hover:bg-white/5 backdrop-blur-md transition-all font-bold text-lg hover:scale-105 active:scale-[0.98] rounded-2xl">
                            <Link href="/pricing">{t('cta_secondary')}</Link>
                        </Button>
                    </motion.div>

                    {/* Feature Pills for Core Path */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full"
                    >
                        {[
                            { icon: QrCode, label: "Scan QR" },
                            { icon: ShoppingCart, label: "Order" },
                            { icon: Clock, label: "Track ETA" },
                            { icon: CreditCard, label: "Pay" }
                        ].map((item, i) => (
                            <div key={item.label} className="flex flex-col items-center p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-glow-purple/20 transition-colors">
                                <item.icon className="w-6 h-6 mb-2 text-foreground/40 group-hover:text-glow-purple transition-colors" />
                                <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 group-hover:text-foreground/80">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative Grid with enhanced masking */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_60%,transparent_100%)] -z-10 mt-24"></div>
        </section>
    );
}
