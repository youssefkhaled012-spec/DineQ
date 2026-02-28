"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Coffee, Utensils, LayoutGrid, Hotel, Palmtree, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export default function BusinessPage() {
    const t = useTranslations('Index');

    const sectors = [
        {
            title: t('business_cafes_title'),
            problem: t('business_cafes_problem'),
            bullets: [t('business_cafes_b1'), t('business_cafes_b2'), t('business_cafes_b3')],
            icon: Coffee,
            color: "from-orange-500/20 to-orange-500/5",
            iconColor: "text-orange-500",
        },
        {
            title: t('business_restaurants_title'),
            problem: t('business_restaurants_problem'),
            bullets: [t('business_restaurants_b1'), t('business_restaurants_b2'), t('business_restaurants_b3')],
            icon: Utensils,
            color: "from-blue-500/20 to-blue-500/5",
            iconColor: "text-blue-500",
        },
        {
            title: t('business_foodcourts_title'),
            problem: t('business_foodcourts_problem'),
            bullets: [t('business_foodcourts_b1'), t('business_foodcourts_b2'), t('business_foodcourts_b3')],
            icon: LayoutGrid,
            color: "from-green-500/20 to-green-500/5",
            iconColor: "text-green-500",
        },
        {
            title: t('business_hotels_title'),
            problem: t('business_hotels_problem'),
            bullets: [t('business_hotels_b1'), t('business_hotels_b2'), t('business_hotels_b3')],
            icon: Hotel,
            color: "from-purple-500/20 to-purple-500/5",
            iconColor: "text-purple-500",
        },
        {
            title: t('business_beach_title'),
            problem: t('business_beach_problem'),
            bullets: [t('business_beach_b1'), t('business_beach_b2'), t('business_beach_b3')],
            icon: Palmtree,
            color: "from-cyan-500/20 to-cyan-500/5",
            iconColor: "text-cyan-500",
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
                        {t('business_title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 max-w-2xl mx-auto text-lg"
                    >
                        {t('business_subtitle')}
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={sector.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`p-8 md:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br ${sector.color} flex flex-col md:flex-row gap-12 items-center`}
                        >
                            <div className="flex-1">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${sector.iconColor}`}>
                                    <sector.icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">{sector.title}</h2>
                                <p className="text-lg text-foreground/80 mb-8 max-w-xl italic">
                                    "{sector.problem}"
                                </p>
                                <div className="space-y-4 mb-8">
                                    {sector.bullets.map(bullet => (
                                        <div key={bullet} className="flex items-start gap-3">
                                            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${sector.iconColor}`} />
                                            <span className="text-foreground/70 font-medium">{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button asChild className="bg-white text-black hover:bg-white/90 font-bold px-8">
                                    <Link href="/demo">
                                        {t('business_cta')} <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="hidden md:flex flex-1 justify-center">
                                <div className="w-full max-w-sm aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                    <sector.icon className={`w-32 h-32 opacity-20 ${sector.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
