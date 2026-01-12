"use client";

import { motion } from "framer-motion";

export function LoadingPot() {
    return (
        <div className="flex flex-col items-center justify-center relative min-h-[300px]">

            {/* Title Animation Container - Positioned above pot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-20 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="relative"
                >
                    {/* The "Element" that decomposes (A stylized icon/shape) */}
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 2 }}
                        transition={{ delay: 1.5, duration: 0.5 }} // Disappears as text appears
                        className="absolute inset-0 flex items-center justify-center text-primary"
                    >
                        {/* A Chef Hat or Utensils Icon as the seed */}
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                            <path d="M7 2v20" />
                            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3" />
                        </svg>
                    </motion.div>

                    {/* The Text "NEMINORDEI" forming from the center */}
                    <div className="flex gap-1 font-heading font-bold text-3xl tracking-wider text-foreground whitespace-nowrap">
                        {Array.from("NEMINORDEI").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1
                                }}
                                transition={{
                                    delay: 1.8 + (i * 0.05), // Starts appearing after icon bursts
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="relative w-32 h-32 mt-20">
                {/* Steam Animation */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-6 bg-gray-300/50 rounded-full blur-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: [0, 0.8, 0], y: -20 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Pot Lid - Vibrating */}
                <motion.div
                    className="absolute top-[28px] left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-t-lg z-20"
                    animate={{
                        rotate: [-1, 1, -1],
                        y: [-1, 0, -1]
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 bg-gray-900 rounded-t-md" />
                </motion.div>

                {/* Pot Body */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-20 bg-gray-700 rounded-b-3xl z-10 flex items-center justify-center overflow-hidden">
                    {/* Reflection/Shine */}
                    <div className="absolute top-2 right-4 w-16 h-4 bg-white/10 rounded-full rotate-[-10deg]" />
                </div>

                {/* Pot Handles */}
                <div className="absolute top-10 left-0 w-4 h-6 bg-gray-800 rounded-l-md" />
                <div className="absolute top-10 right-0 w-4 h-6 bg-gray-800 rounded-r-md" />

                {/* Fire/Flames */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-end justify-center w-full gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="w-4 h-8 bg-orange-500 rounded-t-full rounded-b-md"
                            animate={{
                                height: [20, 32, 20],
                                backgroundColor: ["#E65100", "#FFD600", "#E65100"],
                            }}
                            transition={{
                                duration: 0.6 + Math.random() * 0.4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: Math.random() * 0.5
                            }}
                            style={{
                                filter: "blur(1px)"
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.p
                className="mt-8 font-heading font-medium text-primary/80 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                Préparation en cours...
            </motion.p>
        </div>
    );
}
