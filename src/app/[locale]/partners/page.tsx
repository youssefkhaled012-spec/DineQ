"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export default function PartnersPage() {
    const t = useTranslations('Index');

    const plans = [
        {
            title: t('partners_referral_title'),
            desc: t('partners_referral_desc'),
            bullets: [t('partners_referral_b1'), t('partners_referral_b2'), t('partners_referral_b3')],
            icon: Users,
            cta: t('partners_referral_cta'),
            color: "from-glow-purple/20 to-glow-purple/5",
            iconColor: "text-glow-purple",
        },
        {
            title: t('partners_reseller_title'),
            desc: t('partners_reseller_desc'),
            bullets: [t('partners_reseller_b1'), t('partners_reseller_b2'), t('partners_reseller_b3')],
            icon: Building2,
            cta: t('partners_reseller_cta'),
            color: "from-glow-blue/20 to-glow-blue/5",
            iconColor: "text-glow-blue",
        }
    ];

    return (
        <div className="flex flex-col min-h-screen py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        {t('partners_title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 max-w-2xl mx-auto text-lg"
                    >
                        {t('partners_subtitle')}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${plan.color} flex flex-col h-full`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 ${plan.iconColor}`}>
                                <plan.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">{plan.title}</h2>
                            <p className="text-foreground/60 mb-10 leading-relaxed text-lg">
                                {plan.desc}
                            </p>
                            <div className="space-y-4 mb-12 flex-1">
                                {plan.bullets.map(bullet => (
                                    <div key={bullet} className="flex items-start gap-4">
                                        <CheckCircle className={`w-6 h-6 shrink-0 mt-0.5 ${plan.iconColor}`} />
                                        <span className="text-foreground/80 font-medium">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                            <Button asChild size="lg" className="h-14 bg-white text-black hover:bg-white/90 font-bold text-lg rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <Link href="/demo">
                                    {plan.cta} <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180" />
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
