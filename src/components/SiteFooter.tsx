"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Linkedin, Globe, MapPin, Sparkles, LucideIcon } from 'lucide-react';

interface FooterLink {
    label: string;
    href: string;
    icon?: LucideIcon;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

export function SiteFooter() {
    const t = useTranslations('Index');
    const currentYear = new Date().getFullYear();

    const sections: FooterSection[] = [
        {
            title: t('footer_contact'),
            links: [
                { icon: Mail, label: "hello@dineq.io", href: "mailto:hello@dineq.io" },
                { icon: MessageCircle, label: "+20 123 456 7890", href: "https://wa.me/201234567890" },
                { icon: MapPin, label: "Cairo, Egypt", href: "#" }
            ]
        },
        {
            title: t('footer_legal'),
            links: [
                { label: t('footer_privacy'), href: "/privacy" },
                { label: t('footer_terms'), href: "/terms" }
            ]
        },
        {
            title: t('footer_social'),
            links: [
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" }
            ]
        }
    ];

    return (
        <footer className="relative z-10 pt-24 pb-12 overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Brand & Description Row */}
                <div className="grid lg:grid-cols-12 gap-16 mb-20">
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-glow-purple to-glow-blue flex items-center justify-center shadow-lg"
                            >
                                <Sparkles className="w-6 h-6 text-white animate-pulse" />
                            </motion.div>
                            <span className="text-3xl font-black italic tracking-tighter text-white group-hover:text-glow-purple transition-colors">
                                DineQ
                            </span>
                        </Link>
                        <p className="text-xl text-foreground/40 font-bold leading-relaxed max-w-md italic">
                            "{t('footer_description')}"
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {sections.map((section, i) => (
                            <div key={i} className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 italic">{section.title}</h4>
                                <ul className="space-y-4">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-3 text-foreground/50 hover:text-white transition-all font-bold group"
                                            >
                                                {link.icon && <link.icon className="w-4 h-4 text-glow-purple/40 group-hover:text-glow-purple transition-colors" />}
                                                <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2 text-foreground/20 text-xs font-black uppercase tracking-widest">
                        <Globe className="w-4 h-4" />
                        Built in MENA • {currentYear} © DineQ
                    </div>

                    <div className="flex items-center gap-8">
                        {/* Status Dot */}
                        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">System Status: All Systems Live</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-glow-purple/5 blur-[120px] -z-10 rounded-full skew-y-12"></div>
        </footer>
    );
}
