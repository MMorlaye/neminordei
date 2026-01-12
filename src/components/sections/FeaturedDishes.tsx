"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { MenuItem } from "@/components/menu/MenuItem";
import Link from "next/link";

import { menuItems } from "@/data/menu";

export function FeaturedDishes() {
    // Select specific featured dishes from the central data

    const featuredDishes = menuItems.filter(item => ["p-4", "pizza-7", "pdj-3"].includes(item.id.toString()));

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
                        Nos Plats Signature
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Découvrez nos créations les plus appréciées, préparées avec des ingrédients frais et locaux.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredDishes.map((dish) => (
                        <MenuItem key={dish.id} item={dish} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/menu">
                        <Button size="lg" variant="secondary">
                            Voir tout le menu
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Reuse MenuItem for consistency (need to import it or recreate logic here if MenuItem is specific).
// To keep it simple and clean, I will import MenuItem.
