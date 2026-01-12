"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
    activeCategory: string;
    onSelectCategory: (category: string) => void;
    categories?: string[];
}

export function CategoryFilter({ activeCategory, onSelectCategory, categories = ["Tous", "Entrées", "Plats", "Desserts", "Boissons"] }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-4 justify-center py-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={cn(
                        "relative px-6 py-2 rounded-full text-sm font-medium transition-colors",
                        activeCategory === category
                            ? "text-white"
                            : "text-gray-600 hover:text-primary bg-gray-100"
                    )}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-primary rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </button>
            ))}
        </div>
    );
}
