"use client";

import { motion } from "framer-motion";

export function LoadingPot() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">

            <div className="relative w-32 h-32">
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

            {/* Title Animation - Appears smoothly AFTER the scene is set */}
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="mt-8 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-[0.2em] text-foreground">
                    NEMINORDEI
                </h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="h-1 bg-primary mx-auto mt-2 rounded-full"
                />
            </motion.div>

            <motion.p
                className="mt-4 font-medium text-gray-400 text-sm tracking-widest uppercase"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Préparation en cours...
            </motion.p>
        </div>
    );
}
