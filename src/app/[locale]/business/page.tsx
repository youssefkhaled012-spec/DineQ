import { useTranslations } from 'next-intl';

export default function BusinessPage() {
    return (
        <div className="flex flex-col min-h-screen py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Empowering your <span className="text-glow-blue">Business</span>
                </h1>
                <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
                    Tools designed specifically to scale your restaurant operations, increase efficiency, and maximize profitability.
                </p>
            </div>
        </div>
    );
}
