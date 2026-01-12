"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                    alt="Restaurant Ambiance"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
                        Saveurs Authentiques <br />
                        <span className="text-primary">de Guinée</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Une expérience culinaire unique au cœur de Conakry.
                        Découvrez nos plats traditionnels revisités avec passion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/menu">
                            <Button size="lg" className="text-lg px-8">
                                Commander maintenant
                            </Button>
                        </Link>
                        <Link href="/reserver">
                            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white/10">
                                Réserver une table
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
