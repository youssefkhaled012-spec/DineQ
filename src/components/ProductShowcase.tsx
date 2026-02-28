"use client";

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './motion/Reveal';

export function ProductShowcase() {
    const t = useTranslations('Index');

    const products = [
        {
            title: t('showcase_menu_title'),
            desc: t('showcase_menu_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_menu_1772256101925.png",
            reverse: false,
        },
        {
            title: t('showcase_cart_title'),
            desc: t('showcase_cart_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_cart_system_v2_1772256970632.png",
            reverse: true,
        },
        {
            title: t('showcase_eta_title'),
            desc: t('showcase_eta_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_eta_tracking_v2_1772256115300.png",
            reverse: false,
        },
        {
            title: t('showcase_checkout_title'),
            desc: t('showcase_checkout_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_checkout_v2_1772256986512.png",
            reverse: true,
        },
        {
            title: t('showcase_ai_title'),
            desc: t('showcase_ai_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_ai_assistant_v2_1772256129275.png",
            reverse: false,
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden space-y-32">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <Reveal width="100%">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                            {t('showcase_title')}
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-xl font-medium">
                            {t('showcase_subtitle')}
                        </p>
                    </div>
                </Reveal>

                {products.map((product, i) => (
                    <ProductRow key={i} product={product} />
                ))}
            </div>

            {/* Background highlights */}
            <div className="absolute top-[20%] left-0 w-96 h-96 bg-glow-blue/5 blur-[120px] -z-10 rounded-full"></div>
            <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] bg-glow-purple/5 blur-[150px] -z-10 rounded-full"></div>
        </section>
    );
}

function ProductRow({ product }: { product: any }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <div ref={containerRef} className={`flex flex-col ${product.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24 mb-32 last:mb-0`}>
            <div className="flex-1 space-y-6">
                <Reveal width="100%" delay={0.1}>
                    <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white">
                        {product.title}
                    </h3>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-xl text-foreground/60 leading-relaxed font-medium">
                        {product.desc}
                    </p>
                </Reveal>
            </div>

            <div className="flex-1 relative group w-full max-w-lg">
                <motion.div
                    style={{ y: yMove }}
                    className="relative z-10 aspect-[9/16] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white/5 transition-all duration-700 premium-card-hover"
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                </motion.div>
                {/* Floating Glow */}
                <div className="absolute -inset-4 bg-glow-purple/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
        </div>
    );
}
