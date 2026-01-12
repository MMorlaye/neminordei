"use client";

import { useState } from "react";
import { MenuItem } from "@/components/menu/MenuItem";
import { CategoryFilter } from "@/components/menu/CategoryFilter";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/data/menu";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    // Extract unique categories from menuItems plus "Tous"
    const categories = ["Tous", ...Array.from(new Set(menuItems.map(item => item.category)))];

    const filteredItems = activeCategory === "Tous"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-heading font-bold mb-4 text-primary">Notre Carte</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explorez notre sélection de plats guinéens authentiques, préparés avec passion.
                    </p>
                </div>

                <CategoryFilter
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                    categories={categories} // Need to update CategoryFilter to accept custom categories if it doesn't already
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <MenuItem key={item.id} item={item} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
