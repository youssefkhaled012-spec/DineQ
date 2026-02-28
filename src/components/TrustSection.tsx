"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Reveal } from './motion/Reveal';

export function TrustSection() {
    const t = useTranslations('Index');

    const logos = [
        "CAFE LUX", "THE GRILL", "URBAN FOOD", "BEACH CLUB", "HOTEL ROYALE", "MAMA'S KITCHEN"
    ];

    const testimonials = [
        {
            author: t('testimonial_1_author'),
            role: t('testimonial_1_role'),
            quote: t('testimonial_1_quote'),
            business: "Elite Cafe",
            rating: 5,
        },
        {
            author: t('testimonial_2_author'),
            role: t('testimonial_2_role'),
            quote: t('testimonial_2_quote'),
            business: "The Grill House",
            rating: 5,
        },
        {
            author: t('testimonial_3_author'),
            role: t('testimonial_3_role'),
            quote: t('testimonial_3_quote'),
            business: "Urban Food Court",
            rating: 5,
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Trusted By Logos */}
                <Reveal width="100%">
                    <div className="mb-32 text-center">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground/30 mb-10">Trusted by modern brands</p>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale contrast-150">
                            {logos.map(logo => (
                                <span key={logo} className="text-2xl font-black tracking-tighter italic">{logo}</span>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Reveal width="100%">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                            {t('testimonials_title')}
                        </h2>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <Reveal key={item.author} width="100%" delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 relative group transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] shadow-2xl"
                            >
                                <div className="absolute top-0 right-10 -translate-y-1/2 p-4 bg-glow-purple rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Quote className="w-5 h-5 text-white fill-current" />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-glow-purple fill-current" />
                                    ))}
                                </div>

                                <blockquote className="text-lg text-foreground/80 mb-8 italic leading-relaxed">
                                    "{item.quote}"
                                </blockquote>

                                <div>
                                    <p className="font-black text-white text-lg">{item.author}</p>
                                    <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">{item.role}</p>
                                    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-tighter text-glow-purple">
                                        {item.business}
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
