"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, QrCode, ShoppingCart, Clock, CreditCard, Sparkles, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Index');

    return (
        <section className="relative overflow-hidden pt-32 md:pt-48 pb-20 md:pb-32">
            {/* Premium Background Depth Blobs - Refined for 9/10 quality */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-5%] left-[15%] w-[600px] h-[600px] bg-glow-purple/5 blur-[140px] rounded-full -z-20"
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Updated Badge: Authority Upgrade */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-sm font-bold text-glow-purple shadow-[0_0_30px_rgba(168,85,247,0.1)] mb-10 group hover:border-white/20 transition-colors"
                    >
                        <ShieldCheck className="w-4 h-4 mr-2 text-glow-purple" />
                        {t('badge')}
                    </motion.div>

                    {/* Headline: Revenue Focused */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-black tracking-tight max-w-5xl bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent mb-8 text-balance leading-[1.05]"
                    >
                        {t('title')}
                    </motion.h1>

                    {/* Subheadline: Benefit Driven */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-foreground/60 max-w-3xl mb-12 leading-relaxed text-balance font-medium px-4"
                    >
                        {t('subtitle')}
                    </motion.p>

                    {/* CTAs with Micro-interactions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-6 mb-12"
                    >
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button asChild size="lg" className="h-14 px-10 bg-white text-black hover:bg-white/90 font-black text-lg shadow-[0_20px_40px_rgba(255,255,255,0.15)] rounded-2xl relative overflow-hidden group premium-button-glow">
                                    <Link href="/demo" className="flex items-center">
                                        {t('cta_primary')} <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button asChild variant="outline" size="lg" className="h-14 px-10 border-white/10 hover:bg-white/5 backdrop-blur-md transition-all font-bold text-lg rounded-2xl">
                                    <Link href="/pricing">{t('cta_secondary')}</Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Trust Line: Authority Upgrade */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="flex items-center gap-2 text-foreground/40 text-sm font-bold tracking-wide uppercase"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-glow-purple/60" />
                            {t('trust_line')}
                        </motion.div>
                    </motion.div>

                    {/* Step Path visual with refined icons */}
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
                            <div key={item.label} className="flex flex-col items-center p-5 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-glow-purple/20 transition-all duration-500 hover:bg-white/[0.04]">
                                <item.icon className="w-6 h-6 mb-3 text-foreground/30 group-hover:text-glow-purple transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 group-hover:text-foreground/80 transition-colors">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative Grid - Faded for 9/10 look */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_60%,transparent_100%)] -z-10 mt-24"></div>
        </section>
    );
}
