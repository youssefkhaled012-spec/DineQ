"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function TrustSection() {
    const t = useTranslations('Index');

    const testimonials = [
        { author: t('testimonial_1_author'), role: t('testimonial_1_role'), quote: t('testimonial_1_quote') },
        { author: t('testimonial_2_author'), role: t('testimonial_2_role'), quote: t('testimonial_2_quote') },
        { author: t('testimonial_3_author'), role: t('testimonial_3_role'), quote: t('testimonial_3_quote') },
    ];

    const faqs = [
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
        { q: t('faq_q4'), a: t('faq_a4') },
        { q: t('faq_q5'), a: t('faq_a5') },
        { q: t('faq_q6'), a: t('faq_a6') },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Trusted By Logos Placeholder */}
                <div className="mb-24 text-center">
                    <p className="text-sm font-medium text-foreground/40 uppercase tracking-widest mb-8">Trusted by leading venues</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
                        {/* Simple SVG Placeholders for Logos */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-8 w-24 bg-white/10 rounded flex items-center justify-center font-bold text-xs">LOGO {i}</div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('testimonials_title')}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testi, i) => (
                            <motion.div
                                key={i}
                                className="p-8 rounded-2xl border border-white/10 bg-white/5 relative transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] active:scale-[0.98]"
                                whileHover={{ y: -4 }}
                            >
                                <div className="text-glow-purple text-4xl mb-4 font-serif">“</div>
                                <p className="text-lg italic mb-8 text-foreground/80">{testi.quote}</p>
                                <div>
                                    <div className="font-bold">{testi.author}</div>
                                    <div className="text-sm text-foreground/40">{testi.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-32 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('faq_title')}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                                <AccordionTrigger className="text-left py-4 hover:no-underline font-semibold hover:text-glow-purple transition-colors">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/60 leading-relaxed pb-6">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Final CTA */}
                <motion.div
                    className="p-12 md:p-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-glow-purple/20 to-glow-blue/10 text-center relative overflow-hidden active:scale-[0.99] transition-transform duration-500"
                    whileHover={{ boxShadow: "0 0 50px rgba(168,85,247,0.1)" }}
                >
                    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.3),transparent_70%)]"></div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('cta_final_title')}</h2>
                    <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
                        {t('cta_final_desc')}
                    </p>
                    <Button asChild size="lg" className="h-14 px-10 bg-white text-black hover:bg-white/90 font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] active:scale-[0.98]">
                        <Link href="/demo">{t('cta_final_button')}</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
