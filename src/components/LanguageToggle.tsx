"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';

export function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const changeLocale = (nextLocale: string) => {
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <div className="flex bg-white/5 border border-white/10 rounded-full p-1 relative">
            <motion.div
                className="absolute bg-white/10 rounded-full"
                layoutId="activeTab"
                initial={false}
                animate={{
                    x: locale === 'en' ? 0 : 44, // Adjust based on width
                    width: 44,
                    height: 'calc(100% - 8px)',
                    top: 4
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
            <button
                onClick={() => changeLocale('en')}
                className={`w-11 h-7 text-xs font-bold transition-colors relative z-10 ${locale === 'en' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
            >
                EN
            </button>
            <button
                onClick={() => changeLocale('ar')}
                className={`w-11 h-7 text-xs font-bold transition-colors relative z-10 ${locale === 'ar' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
            >
                AR
            </button>
        </div>
    );
}
