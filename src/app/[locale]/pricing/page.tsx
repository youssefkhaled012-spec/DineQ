"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, X, Star, CreditCard, Calendar, Zap } from 'lucide-react';
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
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                        {t('pricing_title')}
                    </h1>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
                        {t('pricing_subtitle')}
                    </p>
                    {/* Psychology Upgrade: Billing Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 inline-flex items-center gap-2 text-glow-purple font-bold text-sm uppercase tracking-[0.2em] bg-glow-purple/5 px-6 py-2 rounded-full border border-glow-purple/10"
                    >
                        <Calendar className="w-4 h-4" />
                        {t('pricing_note')}
                    </motion.p>
                </div>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-8 mb-32 items-stretch pt-12">
                {plans.map((plan, i) => (
                    <Reveal key={plan.name} width="100%" delay={i * 0.1}>
                        <motion.div
                            whileHover={{ y: plan.popular ? -15 : -8, scale: plan.popular ? 1.03 : 1.01 }}
                            className={`flex flex-col h-full p-10 rounded-[3rem] border relative transition-all duration-700 premium-card-hover ${plan.popular
                                ? 'border-glow-purple bg-gradient-to-br from-glow-purple/[0.15] to-transparent shadow-[0_45px_100px_rgba(168,85,247,0.25)] z-20 scale-105 overflow-hidden'
                                : 'border-white/10 bg-white/5 z-10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 p-12 -z-10 opacity-10 rotate-12">
                                    <Zap className="w-32 h-32 text-glow-purple fill-current" />
                                </div>
                            )}

                            {plan.popular && (
                                <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-glow-purple to-glow-blue text-white text-[10px] font-black px-8 py-2.5 rounded-b-3xl uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(168,85,247,0.4)] flex items-center gap-2 whitespace-nowrap">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    {t('pricing_popular_badge')}
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className={`text-3xl font-black mb-3 ${plan.popular ? 'text-white' : 'text-white/90'}`}>{plan.name}</h3>
                                <p className="text-foreground/60 min-h-[3rem] text-sm leading-relaxed font-bold uppercase tracking-wider">{plan.desc}</p>
                            </div>

                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-6xl md:text-7xl font-black tracking-tighter">
                                    {plan.price === 'Custom' || plan.price === 'مخصص' ? plan.price : plan.price}
                                </span>
                                {(plan.price !== 'Custom' && plan.price !== 'مخصص') && (
                                    <div className="flex flex-col">
                                        <span className="text-glow-purple font-black text-2xl leading-none">{t('pricing_currency')}</span>
                                        <span className="text-foreground/40 text-[10px] font-black uppercase tracking-tighter">{t('pricing_period')}</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-5 mb-12 flex-1">
                                {plan.features.map(feat => (
                                    <div key={feat} className="flex items-start gap-4 group/item">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 ${plan.popular ? 'bg-glow-purple text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-glow-purple/20 text-glow-purple'}`}>
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className={`text-sm font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-foreground/80'}`}>{feat}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map(feat => (
                                    <div key={feat} className="flex items-start gap-4 opacity-15">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <X className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-sm font-bold tracking-tight line-through italic">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button asChild className={`w-full h-16 rounded-[1.5rem] font-black text-xl transition-all shadow-xl ${plan.popular
                                    ? 'bg-white text-black hover:bg-white/90'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}>
                                    <Link href="/demo">{t('pricing_cta')}</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Reveal>
                ))}
            </div>

            {/* Authority Detail: Comparison Table Refinement */}
            <Reveal width="100%">
                <div className="mb-32">
                    <h2 className="text-3xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        {t('pricing_comparison_title')}
                    </h2>
                    <div className="border border-white/10 rounded-[3rem] overflow-hidden bg-white/[0.03] backdrop-blur-xl overflow-x-auto shadow-2xl">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead className="bg-white/5">
                                <tr>
                                    <th className="p-10 font-black border-b border-white/10 text-foreground/40 uppercase tracking-[0.2em] text-[10px]">Strategic Features</th>
                                    <th className="p-10 text-center border-b border-white/10 font-black text-lg">Starter</th>
                                    <th className="p-10 text-center border-b border-white/10 text-glow-purple font-black text-2xl bg-glow-purple/5">Growth</th>
                                    <th className="p-10 text-center border-b border-white/10 font-black text-lg">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "QR Menu Customization", starter: true, growth: true, enterprise: true },
                                    { name: "Order Tracking", starter: "Basic", growth: "Real-time ETA", enterprise: "Advanced" },
                                    { name: "Payment Integration", starter: "Cash Only", growth: "Cash & Visa", enterprise: "Full Custom" },
                                    { name: "AI Assistant", starter: false, growth: true, enterprise: true },
                                    { name: "Support Level", starter: "Email", growth: "Priority (Slack/WA)", enterprise: "24/7 Dedicated" },
                                    { name: "Analytics Dashboard", starter: "Basic", growth: "Revenue BI", enterprise: "Custom API Access" },
                                    { name: "Multi-Location Support", starter: false, growth: false, enterprise: true },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/10 text-sm hover:bg-white/[0.04] transition-colors group">
                                        <td className="p-10 font-black text-foreground/70 group-hover:text-white transition-colors tracking-tight">{row.name}</td>
                                        <td className="p-10 text-center">{typeof row.starter === 'boolean' ? (row.starter ? <Check className="mx-auto w-5 h-5 text-glow-purple/50" /> : <X className="mx-auto w-5 h-5 opacity-10" />) : row.starter}</td>
                                        <td className="p-10 text-center font-black bg-glow-purple/[0.03] text-white text-base">{typeof row.growth === 'boolean' ? (row.growth ? <Check className="mx-auto w-7 h-7 text-glow-purple" /> : <X className="mx-auto w-7 h-7 opacity-10" />) : row.growth}</td>
                                        <td className="p-10 text-center">{typeof row.enterprise === 'boolean' ? (row.enterprise ? <Check className="mx-auto w-5 h-5 text-glow-purple/50" /> : <X className="mx-auto w-5 h-5 opacity-10" />) : row.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Reveal>

            {/* Strategic Upgrade: Enhanced FAQ */}
            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full mb-24">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        {t('pricing_faq_title')}
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-6">
                        {[
                            { q: t('faq_q1'), a: t('faq_a1') },
                            { q: "Can we disable Visa and use Cash only?", a: "Yes, you have full control. You can enable or disable payment methods at any time from your dashboard." },
                            { q: "How long does setup take?", a: t('faq_a3') },
                            { q: "What's the 'Revenue BI' in the Growth plan?", a: "It's an advanced analytics dashboard that helps you identify peak order times, guest favorites, and automatic upselling performance to maximize table revenue." },
                            { q: "Are there any yearly discounts?", a: "Yes! Choosing yearly billing gives you 2 months free (approx. 17% discount)." }
                        ].map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-[2rem] px-8 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all hover:border-glow-purple/30 group">
                                <AccordionTrigger className="text-left font-black text-xl hover:text-glow-purple transition-colors py-8 no-underline rtl:text-right">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/50 leading-relaxed text-lg pb-8 font-medium">
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
