"use client";

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    CheckCircle2,
    Send,
    Calendar,
    Clock,
    Zap,
    ShieldCheck,
    Video,
    HelpCircle,
    ChevronRight,
    Star
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

export default function DemoPage() {
    const t = useTranslations('Index');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    const benefits = [
        { icon: Video, text: t('demo_benefit_1') },
        { icon: Zap, text: t('demo_benefit_2') },
        { icon: HelpCircle, text: t('demo_benefit_3') },
    ];

    return (
        <div className="flex flex-col min-h-screen py-24 px-6 max-w-7xl mx-auto w-full">
            <Reveal width="100%">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glow-purple/10 border border-glow-purple/20 text-glow-purple text-xs font-black uppercase tracking-widest mb-6"
                    >
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {t('demo_strategy_badge')}
                    </motion.div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent italic tracking-tighter">
                        {t('demo_trust_title')}
                    </h1>
                    <p className="text-foreground/50 max-w-2xl mx-auto text-xl font-bold flex items-center justify-center gap-2">
                        <Clock className="w-5 h-5 text-glow-purple" />
                        {t('demo_trust_subtitle')}
                    </p>
                </div>
            </Reveal>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Left Side: Conversion Benefits */}
                <div className="lg:col-span-5 space-y-12 py-8">
                    <Reveal width="100%">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-white italic tracking-tight underline decoration-glow-purple/30 decoration-4 underline-offset-8">
                                {t('demo_q_title')}
                            </h2>
                            <div className="grid gap-6">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-glow-purple/30 transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-glow-purple/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <benefit.icon className="w-6 h-6 text-glow-purple" />
                                        </div>
                                        <span className="text-lg font-black tracking-tight text-white/80 group-hover:text-white">{benefit.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 shadow-2xl relative overflow-hidden">
                            <ShieldCheck className="w-12 h-12 text-foreground/10 absolute -bottom-2 -right-2 rotate-12" />
                            <p className="text-sm font-bold text-foreground/40 leading-relaxed italic">
                                {t('demo_trust_quote')}
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Right Side: High-End Form */}
                <div className="lg:col-span-7">
                    <Reveal width="100%" delay={0.2}>
                        <div className="p-10 md:p-12 rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_50px_100px_-15px_rgba(0,0,0,0.5)] relative">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                    >
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">{t('demo_label_name')}</Label>
                                                <Input id="name" required placeholder="John Doe" className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus:border-glow-purple/50 focus:ring-glow-purple/20 transition-all font-bold" />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="business" className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">{t('demo_label_business')}</Label>
                                                <Input id="business" required placeholder="Lux Café" className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus:border-glow-purple/50 focus:ring-glow-purple/20 transition-all font-bold" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="city" className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">{t('demo_label_city')}</Label>
                                                <Input id="city" required placeholder="Cairo" className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus:border-glow-purple/50 focus:ring-glow-purple/20 transition-all font-bold" />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="tables" className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">{t('demo_label_tables')}</Label>
                                                <select id="tables" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:border-glow-purple/50 outline-none transition-all font-bold appearance-none cursor-pointer">
                                                    <option className="bg-background">1-10</option>
                                                    <option className="bg-background">11-30</option>
                                                    <option className="bg-background">30+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">{t('demo_label_phone')}</Label>
                                            <Input id="phone" required type="tel" placeholder="+20 123 456 7890" className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus:border-glow-purple/50 focus:ring-glow-purple/20 transition-all font-bold" />
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">{t('demo_label_message')}</Label>
                                            <Textarea id="message" placeholder="Tell us about your needs..." className="min-h-[140px] bg-white/5 border-white/10 rounded-2xl p-6 focus:border-glow-purple/50 focus:ring-glow-purple/20 transition-all font-bold resize-none" />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-16 rounded-[1.5rem] bg-white text-black hover:bg-white/90 font-black text-xl transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-[0.98] relative overflow-hidden group"
                                        >
                                            {isLoading ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full"
                                                />
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    {t('demo_submit')} <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-24 h-24 bg-glow-purple/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                                            <CheckCircle2 className="w-12 h-12 text-glow-purple" />
                                        </div>
                                        <h2 className="text-4xl font-black mb-4 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent italic tracking-tight">{t('demo_success_title')}</h2>
                                        <p className="text-foreground/60 text-lg max-w-sm mx-auto font-bold leading-relaxed italic">{t('demo_success_desc')}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
