"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Smartphone, ShoppingBag, CheckCircle } from 'lucide-react';

export function HowItWorks() {
    const t = useTranslations('Index');

    const steps = [
        {
            title: t('step_1_title'),
            desc: t('step_1_desc'),
            icon: Smartphone,
            color: "bg-glow-purple/10 text-glow-purple border-glow-purple/20",
        },
        {
            title: t('step_2_title'),
            desc: t('step_2_desc'),
            icon: ShoppingBag,
            color: "bg-glow-blue/10 text-glow-blue border-glow-blue/20",
        },
        {
            title: t('step_3_title'),
            desc: t('step_3_desc'),
            icon: CheckCircle,
            color: "bg-glow-purple/10 text-glow-purple border-glow-purple/20",
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        {t('how_it_works_title')}
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] active:scale-[0.98]"
                            whileHover={{ y: -4 }}
                        >
                            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${step.color}`}>
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
