import { useTranslations } from 'next-intl';

export default function PricingPage() {
    const t = useTranslations('Navigation');

    return (
        <div className="flex flex-col min-h-screen py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Transparent <span className="text-glow-purple">Pricing</span>
                </h1>
                <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
                    Choose the right plan for your restaurant size and needs.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Starter", price: "$49", desc: "Perfect for single-location restaurants." },
                    { name: "Professional", price: "$99", desc: "Advanced features and analytics." },
                    { name: "Enterprise", price: "Custom", desc: "Unlimited locations and integrations." }
                ].map(plan => (
                    <div key={plan.name} className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                        <p className="text-foreground/60 mb-6 flex-1">{plan.desc}</p>
                        <div className="text-4xl font-bold mb-8">{plan.price}<span className="text-sm font-normal text-foreground/40">/mo</span></div>
                        <button className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium">
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
