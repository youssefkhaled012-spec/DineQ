"use client";

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Reveal } from '@/components/motion/Reveal';

export default function DemoPage() {
    const t = useTranslations('Index');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="flex flex-col min-h-screen py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="container mx-auto max-w-4xl">
                <Reveal width="100%">
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                            {t('demo_title')}
                        </h1>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                            {t('demo_subtitle')}
                        </p>
                    </div>
                </Reveal>

                <AnimatePresence mode="wait">
                    {!isSuccess ? (
                        <Reveal width="100%" delay={0.2}>
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-glow-purple/10 blur-[80px] -z-10"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-glow-blue/10 blur-[80px] -z-10"></div>

                                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 relative z-10">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{t('demo_label_name')}</Label>
                                        <Input id="name" required placeholder="John Doe" className="bg-white/5 border-white/10 h-12 focus:border-glow-purple transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business">{t('demo_label_business')}</Label>
                                        <Input id="business" required placeholder="My Awesome Cafe" className="bg-white/5 border-white/10 h-12 focus:border-glow-purple transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="city">{t('demo_label_city')}</Label>
                                        <Input id="city" required placeholder="Cairo" className="bg-white/5 border-white/10 h-12 focus:border-glow-purple transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="country">{t('demo_label_country')}</Label>
                                        <Input id="country" required placeholder="Egypt" className="bg-white/5 border-white/10 h-12 focus:border-glow-purple transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>{t('demo_label_tables')}</Label>
                                        <Select required>
                                            <SelectTrigger className="bg-white/5 border-white/10 h-12">
                                                <SelectValue placeholder="Select tables..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">{t('demo_option_tables_1')}</SelectItem>
                                                <SelectItem value="2">{t('demo_option_tables_2')}</SelectItem>
                                                <SelectItem value="3">{t('demo_option_tables_3')}</SelectItem>
                                                <SelectItem value="4">{t('demo_option_tables_4')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">{t('demo_label_phone')}</Label>
                                        <Input id="phone" type="tel" required placeholder="+20 123 456 7890" className="bg-white/5 border-white/10 h-12 focus:border-glow-purple transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">{t('demo_label_email')}</Label>
                                        <Input id="email" type="email" required placeholder="john@example.com" className="bg-white/5 border-white/10 h-12 focus:border-glow-purple transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>{t('demo_label_payment')}</Label>
                                        <Select required>
                                            <SelectTrigger className="bg-white/5 border-white/10 h-12">
                                                <SelectValue placeholder="Select payment..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">{t('demo_option_payment_1')}</SelectItem>
                                                <SelectItem value="2">{t('demo_option_payment_2')}</SelectItem>
                                                <SelectItem value="3">{t('demo_option_payment_3')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <Label htmlFor="message">{t('demo_label_message')}</Label>
                                        <Textarea id="message" rows={4} className="bg-white/5 border-white/10 focus:border-glow-purple transition-all" />
                                    </div>

                                    <div className="md:col-span-2 pt-4">
                                        <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-white text-black hover:bg-white/90 font-bold text-lg rounded-xl shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98]">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    {t('demo_submit')} <Send className="ml-2 h-5 w-5 rtl:rotate-180" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        </Reveal>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/5 text-center flex flex-col items-center shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.1),transparent_70%)]"></div>
                            <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('demo_success_title')}</h2>
                            <p className="text-foreground/60 max-w-lg text-lg leading-relaxed mb-10">
                                {t('demo_success_desc')}
                            </p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl px-8 h-12 font-semibold transition-all active:scale-[0.98]">
                                Back to form
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
