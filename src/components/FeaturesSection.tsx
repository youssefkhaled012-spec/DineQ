"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    QrCode,
    ShoppingCart,
    Clock,
    CreditCard,
    Sparkles,
    Settings2
} from 'lucide-react';

export function FeaturesSection() {
    const t = useTranslations('Index');

    const features = [
        {
            title: t('feature_qr'),
            icon: QrCode,
        },
        {
            title: t('feature_cart'),
            icon: ShoppingCart,
        },
        {
            title: t('feature_eta'),
            icon: Clock,
        },
        {
            title: t('feature_payment'),
            icon: CreditCard,
        },
        {
            title: t('feature_ai'),
            icon: Sparkles,
        },
        {
            title: t('feature_owner'),
            icon: Settings2,
        }
    ];

    return (
        <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        {t('features_title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-foreground/60 max-w-2xl mx-auto text-lg"
                    >
                        {t('features_desc')}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-2xl border border-white/10 flex items-start gap-4 transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] active:scale-[0.98] group"
                            whileHover={{ y: -4 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-glow-purple/10 flex items-center justify-center shrink-0 group-hover:bg-glow-purple/20 transition-colors">
                                <feature.icon className="w-5 h-5 text-glow-purple" />
                            </div>
                            <h3 className="text-lg font-semibold pt-1">{feature.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
