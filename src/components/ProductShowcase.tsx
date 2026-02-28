"use client";

import { useTranslations } from 'next-intl';
import {
    LayoutGrid,
    ShoppingCart,
    Clock,
    CreditCard,
    Bot,
    Sparkles
} from 'lucide-react';
import { Reveal } from './motion/Reveal';

export function ProductShowcase() {
    const t = useTranslations('Index');

    const features = [
        {
            title: t('showcase_menu_title'),
            desc: t('showcase_menu_desc'),
            icon: LayoutGrid,
            color: "from-glow-purple to-glow-blue",
        },
        {
            title: t('showcase_cart_title'),
            desc: t('showcase_cart_desc'),
            icon: ShoppingCart,
            color: "from-glow-blue to-glow-purple",
        },
        {
            title: t('showcase_eta_title'),
            desc: t('showcase_eta_desc'),
            icon: Clock,
            color: "from-glow-purple to-glow-blue",
        },
        {
            title: t('showcase_checkout_title'),
            desc: t('showcase_checkout_desc'),
            icon: CreditCard,
            color: "from-glow-blue to-glow-purple",
        },
        {
            title: t('showcase_ai_title'),
            desc: t('showcase_ai_desc'),
            icon: Bot,
            color: "from-glow-purple to-glow-blue",
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <Reveal width="100%">
                    <div className="text-center mb-32 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <Sparkles className="w-3 h-3" />
                            {t('showcase_title')}
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent italic tracking-tight">
                            {t('showcase_subtitle')}
                        </h2>
                    </div>
                </Reveal>

                <div className="space-y-48">
                    {features.map((feature, i) => (
                        <FeatureBlock key={i} feature={feature} index={i} isLast={i === features.length - 1} />
                    ))}
                </div>
            </div>

            {/* Background highlights */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-glow-blue/5 blur-[150px] -z-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-glow-purple/5 blur-[180px] -z-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </section>
    );
}

function FeatureBlock({ feature, index, isLast }: { feature: any, index: number, isLast: boolean }) {
    const Icon = feature.icon;

    return (
        <div className="relative flex flex-col items-center text-center group">
            {/* Centered Icon with Reveal */}
            <div className="flex justify-center w-full mb-12">
                <Reveal width="fit-content" delay={0.1}>
                    <div className="relative">
                        {/* Icon Container with Glow */}
                        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-glow-purple/40 group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)] icon-pulse">
                            <Icon className={`w-10 h-10 md:w-14 md:h-14 text-white group-hover:text-glow-purple transition-colors duration-500`} />

                            {/* Soft Ambient Background Glow */}
                            <div className={`absolute -inset-8 bg-gradient-to-br ${feature.color} opacity-[0.03] group-hover:opacity-[0.12] blur-[40px] rounded-full transition-opacity duration-700`}></div>
                        </div>

                        {/* Secondary Pulse Ring */}
                        <div className="absolute -inset-2 rounded-[3rem] border border-glow-purple/0 group-hover:border-glow-purple/20 transition-all duration-1000 group-hover:scale-110 -z-10"></div>
                    </div>
                </Reveal>
            </div>

            <div className="max-w-2xl space-y-6">
                <Reveal width="100%" delay={0.2}>
                    <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white group-hover:text-glow-purple transition-colors duration-500">
                        {feature.title}
                    </h3>
                </Reveal>
                <Reveal width="100%" delay={0.3}>
                    <p className="text-xl md:text-2xl text-foreground/50 leading-relaxed font-bold italic">
                        {feature.desc}
                    </p>
                </Reveal>
            </div>

            {/* Subtle Divider Line */}
            {!isLast && (
                <div className="absolute -bottom-28 left-0 right-0 flex justify-center h-24 hidden md:flex pointer-events-none">
                    <Reveal width="100%" delay={0.5}>
                        <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent mx-auto"></div>
                    </Reveal>
                </div>
            )}
        </div>
    );
}
