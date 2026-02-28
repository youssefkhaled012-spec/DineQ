"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    baseX: number;
    baseY: number;
    opacity: number;
    twinkleSpeed: number;
    twinklePhase: number;
}

const STAR_COUNT = 300;
const NEAR_STAR_COUNT = 30;
const MID_STAR_COUNT = 70;
const FAR_STAR_COUNT = 200;

export const StarfieldBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
    const starsRef = useRef<Star[]>([]);
    const requestRef = useRef<number>(0);
    const [reducedMotion, setReducedMotion] = useState(false);

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const initStars = useCallback((width: number, height: number) => {
        const stars: Star[] = [];

        // Near stars (layer 0)
        for (let i = 0; i < NEAR_STAR_COUNT; i++) {
            stars.push(createStar(width, height, 1));
        }
        // Mid stars (layer 1)
        for (let i = 0; i < MID_STAR_COUNT; i++) {
            stars.push(createStar(width, height, 2));
        }
        // Far stars (layer 2)
        for (let i = 0; i < FAR_STAR_COUNT; i++) {
            stars.push(createStar(width, height, 3));
        }

        starsRef.current = stars;
    }, []);

    const createStar = (width: number, height: number, layer: number): Star => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        // z determines depth/speed: 1 near, 3 far
        // Larger stars are closer
        let size = 0;
        if (layer === 1) size = Math.random() * 1.5 + 1; // Near
        else if (layer === 2) size = Math.random() * 0.8 + 0.6; // Mid
        else size = Math.random() * 0.4 + 0.2; // Far

        return {
            x,
            y,
            baseX: x,
            baseY: y,
            z: layer,
            size,
            opacity: Math.random(),
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinklePhase: Math.random() * Math.PI * 2,
        };
    };

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext("2d");
        if (ctx) ctx.scale(dpr, dpr);

        initStars(width, height);
    }, [initStars]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        // Normalize mouse position to [-1, 1]
        mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        const animate = () => {
            if (document.hidden) {
                requestRef.current = requestAnimationFrame(animate);
                return;
            }

            ctx.fillStyle = "#02040a"; // Very deep navy/black
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Smooth mouse movement with lerp
            if (!reducedMotion) {
                mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
                mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
            }

            const stars = starsRef.current;
            const width = window.innerWidth;
            const height = window.innerHeight;

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                // Twinkle effect
                star.twinklePhase += star.twinkleSpeed;
                const currentOpacity = 0.4 + Math.abs(Math.sin(star.twinklePhase)) * 0.6;

                // Parallax movement based on mouse
                // Layer 1 moves more, layer 3 moves less
                const parallaxFactor = 1 / star.z;
                const offsetX = reducedMotion ? 0 : mouseRef.current.x * 20 * (4 - star.z);
                const offsetY = reducedMotion ? 0 : mouseRef.current.y * 20 * (4 - star.z);

                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * star.opacity})`;

                // Draw star
                ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Screen wrapping for ambient drift if we wanted it
                // For now, static base with mouse parallax is cleaner for premium SaaS
            }

            // Optional: Nebula glow
            const gradient = ctx.createRadialGradient(
                width * 0.8, height * 0.2, 0,
                width * 0.8, height * 0.2, width * 0.4
            );
            gradient.addColorStop(0, "rgba(88, 28, 135, 0.05)"); // Deep purple
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            const gradient2 = ctx.createRadialGradient(
                width * 0.2, height * 0.7, 0,
                width * 0.2, height * 0.7, width * 0.3
            );
            gradient2.addColorStop(0, "rgba(30, 58, 138, 0.03)"); // Deep blue
            gradient2.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, width, height);

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [handleResize, handleMouseMove, reducedMotion]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-50 pointer-events-none"
            style={{ background: "#02040a" }}
        />
    );
};
