"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Reveal } from './motion/Reveal';

export function ProductShowcase() {
    const t = useTranslations('Index');

    const products = [
        {
            title: t('showcase_menu_title'),
            desc: t('showcase_menu_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_menu_1772256101925.png",
            color: "from-orange-500/10 to-transparent"
        },
        {
            title: t('showcase_eta_title'),
            desc: t('showcase_eta_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_eta_tracking_v2_1772256115300.png",
            color: "from-blue-500/10 to-transparent"
        },
        {
            title: t('showcase_ai_title'),
            desc: t('showcase_ai_desc'),
            image: "file:///C:/Users/Youssef%20Khaled/.gemini/antigravity/brain/ae8d3be8-4a0c-44b0-828a-1e38be5ee7f9/dineq_ui_ai_assistant_v2_1772256129275.png",
            color: "from-purple-500/10 to-transparent"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <Reveal width="100%">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                            {t('showcase_title')}
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
                            {t('showcase_subtitle')}
                        </p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <Reveal key={product.title} width="100%" delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative rounded-[2.5rem] border border-white/10 bg-white/5 p-8 h-full flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`}></div>

                                <div className="relative mb-8 aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <p className="text-white/80 text-sm font-medium leading-relaxed italic">
                                            {product.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{product.title}</h3>
                                    <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors leading-relaxed">
                                        {product.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Background highlights */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-glow-blue/5 blur-[120px] -z-10 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-glow-purple/5 blur-[150px] -z-10 rounded-full"></div>
        </section>
    );
}
