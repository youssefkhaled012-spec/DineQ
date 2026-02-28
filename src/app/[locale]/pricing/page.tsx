"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from '@/components/motion/Reveal';

export default function PricingPage() {
    const t = useTranslations('Index');

    const plans = [
        {
            name: t('pricing_starter_name'),
            price: t('pricing_starter_price'),
            desc: t('pricing_starter_desc'),
            features: [
                t('pricing_feature_qr'),
                t('pricing_feature_cart'),
                t('pricing_feature_tracking'),
                t('pricing_feature_cash')
            ],
            notIncluded: [
                t('pricing_feature_eta'),
                t('pricing_feature_visa'),
                t('pricing_feature_ai'),
                t('pricing_feature_dashboard')
            ],
            popular: false,
        },
        {
            name: t('pricing_growth_name'),
            price: t('pricing_growth_price'),
            desc: t('pricing_growth_desc'),
            features: [
                t('pricing_feature_qr'),
                t('pricing_feature_cart'),
                t('pricing_feature_eta'),
                t('pricing_feature_visa'),
                t('pricing_feature_ai'),
                t('pricing_feature_dashboard')
            ],
            notIncluded: [t('pricing_feature_multi')],
            popular: true,
        },
        {
            name: t('pricing_enterprise_name'),
            price: t('pricing_enterprise_price'),
            desc: t('pricing_enterprise_desc'),
            features: [
                t('pricing_feature_qr'),
                t('pricing_feature_cart'),
                t('pricing_feature_eta'),
                t('pricing_feature_multi'),
                t('pricing_feature_priority'),
                t('pricing_feature_integrations')
            ],
            notIncluded: [],
            popular: false,
        }
    ];

    return (
        <div className="flex flex-col min-h-screen py-24 px-6 max-w-7xl mx-auto w-full">
            <Reveal width="100%">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                        {t('pricing_title')}
                    </h1>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        {t('pricing_subtitle')}
                    </p>
                </div>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-8 mb-32 items-stretch">
                {plans.map((plan, i) => (
                    <Reveal key={plan.name} width="100%" delay={i * 0.1}>
                        <motion.div
                            whileHover={{ y: plan.popular ? -12 : -6, scale: plan.popular ? 1.02 : 1 }}
                            className={`flex flex-col h-full p-8 rounded-[2.5rem] border relative transition-all duration-500 ${plan.popular
                                ? 'border-glow-purple bg-gradient-to-b from-glow-purple/20 to-glow-purple/5 shadow-[0_30px_60px_rgba(168,85,247,0.2)] z-10 scale-105'
                                : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-glow-purple text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center gap-2">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    {t('pricing_popular_badge')}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : ''}`}>{plan.name}</h3>
                                <p className="text-foreground/60 min-h-[3rem] text-sm leading-relaxed text-balance">{plan.desc}</p>
                            </div>

                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-5xl md:text-6xl font-black tracking-tight">
                                    {plan.price === 'Custom' || plan.price === 'مخصص' ? plan.price : plan.price}
                                </span>
                                {(plan.price !== 'Custom' && plan.price !== 'مخصص') && (
                                    <div className="flex flex-col">
                                        <span className="text-glow-purple font-bold text-lg leading-none">{t('pricing_currency')}</span>
                                        <span className="text-foreground/40 text-xs font-medium">{t('pricing_period')}</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map(feat => (
                                    <div key={feat} className="flex items-start gap-4">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-glow-purple text-white' : 'bg-glow-purple/20 text-glow-purple'}`}>
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className={`text-sm font-medium ${plan.popular ? 'text-white/90' : 'text-foreground/80'}`}>{feat}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map(feat => (
                                    <div key={feat} className="flex items-start gap-4 opacity-20">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <X className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium line-through">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className={`w-full h-14 rounded-2xl font-black text-lg transition-all active:scale-[0.98] ${plan.popular
                                ? 'bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_rgba(255,255,255,0.2)]'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                <Link href="/demo">{t('pricing_cta')}</Link>
                            </Button>
                        </motion.div>
                    </Reveal>
                ))}
            </div>

            <Reveal width="100%">
                <div className="mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        {t('pricing_comparison_title')}
                    </h2>
                    <div className="border border-white/10 rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-md overflow-x-auto shadow-2xl">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead className="bg-white/5">
                                <tr>
                                    <th className="p-8 font-bold border-b border-white/10 text-foreground/40 uppercase tracking-widest text-xs">Feature</th>
                                    <th className="p-8 text-center border-b border-white/10 font-bold text-lg">Starter</th>
                                    <th className="p-8 text-center border-b border-white/10 text-glow-purple font-black text-xl">Growth</th>
                                    <th className="p-8 text-center border-b border-white/10 font-bold text-lg">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "QR Menu Customization", starter: true, growth: true, enterprise: true },
                                    { name: "Order Tracking", starter: "Basic", growth: "Real-time ETA", enterprise: "Advanced" },
                                    { name: "Payment Integration", starter: "Cash Only", growth: "Cash & Visa", enterprise: "Full Custom" },
                                    { name: "AI Assistant", starter: false, growth: true, enterprise: true },
                                    { name: "Multi-Location Support", starter: false, growth: false, enterprise: true },
                                    { name: "Dashboard Analytics", starter: "Basic", growth: "Advanced", enterprise: "Custom BI" },
                                    { name: "Support", starter: "Email", growth: "Priority", enterprise: "24/7 Dedicated" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/10 text-sm hover:bg-white/[0.02] transition-colors group">
                                        <td className="p-8 font-semibold text-foreground/80 group-hover:text-white transition-colors">{row.name}</td>
                                        <td className="p-8 text-center">{typeof row.starter === 'boolean' ? (row.starter ? <Check className="mx-auto w-5 h-5 text-glow-purple" /> : <X className="mx-auto w-5 h-5 opacity-20" />) : row.starter}</td>
                                        <td className="p-8 text-center font-black bg-glow-purple/[0.02] text-white underline decoration-glow-purple/20 decoration-2 underline-offset-4">{typeof row.growth === 'boolean' ? (row.growth ? <Check className="mx-auto w-6 h-6 text-glow-purple" /> : <X className="mx-auto w-6 h-6 opacity-20" />) : row.growth}</td>
                                        <td className="p-8 text-center">{typeof row.enterprise === 'boolean' ? (row.enterprise ? <Check className="mx-auto w-5 h-5 text-glow-purple" /> : <X className="mx-auto w-5 h-5 opacity-20" />) : row.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Reveal>

            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        {t('pricing_faq_title')}
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {[
                            { q: t('faq_q1'), a: t('faq_a1') },
                            { q: "Can we disable Visa and use Cash only?", a: "Yes, you have full control. You can enable or disable payment methods at any time from your dashboard." },
                            { q: "How long does setup take?", a: t('faq_a3') },
                            { q: "Can we update the menu ourselves?", a: t('faq_a4') },
                            { q: "Are there any yearly discounts?", a: "Yes! Choosing yearly billing gives you 2 months free (approx. 17% discount)." }
                        ].map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl px-6 bg-white/5 backdrop-blur-sm overflow-hidden transition-all hover:border-white/20">
                                <AccordionTrigger className="text-left font-bold text-lg hover:text-glow-purple transition-colors py-6 no-underline rtl:text-right">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/60 leading-relaxed text-base pb-6">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Reveal>
        </div>
    );
}
