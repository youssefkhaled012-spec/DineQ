"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Quote, Star, MapPin, Building2 } from 'lucide-react';
import { Reveal } from './motion/Reveal';

export function TrustSection() {
    const t = useTranslations('Index');

    const logos = [
        { name: "Brew Master Cafe", city: "Cairo" },
        { name: "The Grill House", city: "Zayed" },
        { name: "Urban Food Court", city: "Alex" },
        { name: "Beach Club Elite", city: "Hurgada" },
        { name: "Sky Lounge", city: "Dubai" },
        { name: "Mama's Kitchen", city: "Maadi" }
    ];

    const testimonials = [
        {
            author: t('testimonial_1_author'),
            role: t('testimonial_1_role'),
            city: t('testimonial_1_city'),
            quote: t('testimonial_1_quote'),
            business: "Brew Master Cafe",
            rating: 5,
        },
        {
            author: t('testimonial_2_author'),
            role: t('testimonial_2_role'),
            city: t('testimonial_2_city'),
            quote: t('testimonial_2_quote'),
            business: "The Grill House",
            rating: 5,
        },
        {
            author: t('testimonial_3_author'),
            role: t('testimonial_3_role'),
            city: t('testimonial_3_city'),
            quote: t('testimonial_3_quote'),
            business: "Urban Food Court",
            rating: 5,
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Trusted By Logos: realistic placeholders for 9/10 SaaS feel */}
                <Reveal width="100%">
                    <div className="mb-40 text-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 mb-12">Trusted by Modern Hospitality Brands</p>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-30 grayscale contrast-125">
                            {logos.map(logo => (
                                <div key={logo.name} className="flex flex-col items-center group cursor-default">
                                    <span className="text-xl md:text-2xl font-black tracking-tighter italic group-hover:text-white transition-colors">
                                        {logo.name}
                                    </span>
                                    <span className="text-[8px] font-black uppercase tracking-widest text-foreground/40 group-hover:text-glow-purple transition-colors">
                                        {logo.city}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Reveal width="100%">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent italic tracking-tight">
                            {t('testimonials_title')}
                        </h2>
                    </div>
                </Reveal>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <Reveal key={item.author} width="100%" delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-12 rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm relative group transition-all duration-700 hover:border-white/20 hover:bg-white/[0.06] shadow-2xl"
                            >
                                <div className="absolute top-0 right-12 -translate-y-1/2 p-5 bg-glow-purple rounded-[1.5rem] shadow-[0_15px_30px_rgba(168,85,247,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                                    <Quote className="w-6 h-6 text-white fill-current" />
                                </div>

                                <div className="flex gap-1.5 mb-8">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-glow-purple fill-current" />
                                    ))}
                                </div>

                                <blockquote className="text-xl text-foreground/80 mb-10 italic leading-relaxed font-medium">
                                    "{item.quote}"
                                </blockquote>

                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-black text-glow-purple text-lg">
                                            {item.author[0]}
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-lg leading-tight">{item.author}</p>
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                                                <Building2 className="w-3 h-3" />
                                                {item.role} @ {item.business}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-glow-purple bg-glow-purple/5 px-3 py-1.5 rounded-full border border-glow-purple/10 w-fit">
                                        <MapPin className="w-3 h-3" />
                                        {item.city}
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Subtle flow lines decorative */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-12 -z-10"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-y-12 -z-10"></div>
        </section>
    );
}
