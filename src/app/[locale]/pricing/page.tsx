"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
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
            features: [t('pricing_feature_qr'), t('pricing_feature_orders'), t('pricing_feature_analytics'), t('pricing_feature_support')],
            notIncluded: [t('pricing_feature_ai'), t('pricing_feature_advanced'), t('pricing_feature_dedicated')],
            popular: false,
        },
        {
            name: t('pricing_growth_name'),
            price: t('pricing_growth_price'),
            desc: t('pricing_growth_desc'),
            features: [t('pricing_feature_qr'), t('pricing_feature_orders'), t('pricing_feature_analytics'), t('pricing_feature_support'), t('pricing_feature_ai'), t('pricing_feature_advanced')],
            notIncluded: [t('pricing_feature_dedicated')],
            popular: true,
        },
        {
            name: t('pricing_enterprise_name'),
            price: t('pricing_enterprise_price'),
            desc: t('pricing_enterprise_desc'),
            features: [t('pricing_feature_qr'), t('pricing_feature_orders'), t('pricing_feature_analytics'), t('pricing_feature_support'), t('pricing_feature_ai'), t('pricing_feature_advanced'), t('pricing_feature_dedicated')],
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

            <div className="grid lg:grid-cols-3 gap-8 mb-32">
                {plans.map((plan, i) => (
                    <Reveal key={plan.name} width="100%" delay={i * 0.1}>
                        <motion.div
                            whileHover={{ y: -6 }}
                            className={`flex flex-col h-full p-8 rounded-3xl border relative transition-all duration-500 ${plan.popular
                                ? 'border-glow-purple bg-glow-purple/10 shadow-[0_20px_50px_rgba(168,85,247,0.15)] z-10'
                                : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-glow-purple text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                    {t('pricing_popular_badge')}
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-foreground/60 mb-8 min-h-[3rem] text-sm leading-relaxed text-balance">{plan.desc}</p>

                            <div className="flex items-baseline gap-1 mb-10">
                                <span className="text-4xl md:text-5xl font-bold">
                                    {plan.price === 'Custom' || plan.price === 'مخصص' ? plan.price : `${plan.price} ${t('pricing_currency')}`}
                                </span>
                                {(plan.price !== 'Custom' && plan.price !== 'مخصص') && (
                                    <span className="text-foreground/40 text-sm">{t('pricing_period')}</span>
                                )}
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map(feat => (
                                    <div key={feat} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-glow-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-glow-purple" />
                                        </div>
                                        <span className="text-sm">{feat}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map(feat => (
                                    <div key={feat} className="flex items-start gap-3 opacity-30">
                                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <X className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-sm line-through">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className={`w-full h-12 rounded-xl font-bold text-base transition-all active:scale-[0.98] ${plan.popular ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                <Link href="/demo">{t('pricing_cta')}</Link>
                            </Button>
                        </motion.div>
                    </Reveal>
                ))}
            </div>

            <Reveal width="100%">
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-center mb-16">{t('pricing_comparison_title')}</h2>
                    <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead className="bg-white/5">
                                <tr>
                                    <th className="p-6 font-bold border-b border-white/10">Feature</th>
                                    <th className="p-6 text-center border-b border-white/10">Starter</th>
                                    <th className="p-6 text-center border-b border-white/10 text-glow-purple font-bold">Growth</th>
                                    <th className="p-6 text-center border-b border-white/10">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "QR Menu Customization", starter: true, growth: true, enterprise: true },
                                    { name: "Order Tracking", starter: true, growth: true, enterprise: true },
                                    { name: "Payment Integration", starter: "Cash Only", growth: "Cash & Visa", enterprise: "Full Custom" },
                                    { name: "AI Assistant", starter: false, growth: true, enterprise: true },
                                    { name: "Multi-Location Support", starter: false, growth: false, enterprise: true },
                                    { name: "Dashboard Analytics", starter: "Basic", growth: "Advanced", enterprise: "Custom BI" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/10 text-sm hover:bg-white/[0.02] transition-colors">
                                        <td className="p-6 font-medium text-foreground/80">{row.name}</td>
                                        <td className="p-6 text-center">{typeof row.starter === 'boolean' ? (row.starter ? <Check className="mx-auto w-4 h-4 text-glow-purple" /> : <X className="mx-auto w-4 h-4 opacity-20" />) : row.starter}</td>
                                        <td className="p-6 text-center font-semibold">{typeof row.growth === 'boolean' ? (row.growth ? <Check className="mx-auto w-4 h-4 text-glow-purple" /> : <X className="mx-auto w-4 h-4 opacity-20" />) : row.growth}</td>
                                        <td className="p-6 text-center">{typeof row.enterprise === 'boolean' ? (row.enterprise ? <Check className="mx-auto w-4 h-4 text-glow-purple" /> : <X className="mx-auto w-4 h-4 opacity-20" />) : row.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Reveal>

            <Reveal width="100%">
                <div className="max-w-3xl mx-auto w-full">
                    <h2 className="text-3xl font-bold text-center mb-16">{t('pricing_faq_title')}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-left font-semibold hover:text-glow-purple transition-colors rtl:text-right">Are there any hidden fees?</AccordionTrigger>
                            <AccordionContent className="text-foreground/60 leading-relaxed">No, our subscription includes everything mentioned. The only external fees are standard credit card processor fees if you use Visa payments.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-left font-semibold hover:text-glow-purple transition-colors rtl:text-right">Can I cancel anytime?</AccordionTrigger>
                            <AccordionContent className="text-foreground/60 leading-relaxed">Yes, you can cancel your subscription at the end of any billing cycle with no cancellation fees.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-left font-semibold hover:text-glow-purple transition-colors rtl:text-right">Do you offer yearly discounts?</AccordionTrigger>
                            <AccordionContent className="text-foreground/60 leading-relaxed">Yes! If you choose yearly billing, you get 2 months free. Contact our sales team for more details.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Reveal>
        </div>
    );
}
