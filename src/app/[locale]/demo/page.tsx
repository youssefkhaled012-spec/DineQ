"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function DemoPage() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const res = await fetch('/api/demo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setSuccess(true);
        }
    };

    if (success) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center p-6 text-center">
                <div className="bg-glow-purple/20 p-4 rounded-full mb-6">
                    <svg className="w-12 h-12 text-glow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold mb-4">Request Received!</h1>
                <p className="text-foreground/60 max-w-md">
                    Thanks for reaching out! Our team will get back to you shortly to schedule your personalized demo.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen py-24 px-6 items-center">
            <div className="w-full max-w-md border border-white/10 bg-white/5 backdrop-blur-md p-8 rounded-2xl">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Request a Demo</h1>
                <p className="text-foreground/60 mb-8 text-sm">Fill out the form below and we'll be in touch.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="name">Full Name</label>
                        <input required id="name" name="name" className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-glow-purple" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="email">Work Email</label>
                        <input required type="email" id="email" name="email" className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-glow-purple" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="restaurant">Restaurant Name</label>
                        <input required id="restaurant" name="restaurant" className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-glow-purple" />
                    </div>
                    <Button type="submit" className="w-full mt-4 bg-glow-purple text-white hover:bg-glow-purple/80">
                        Submit Request
                    </Button>
                </form>
            </div>
        </div>
    );
}
