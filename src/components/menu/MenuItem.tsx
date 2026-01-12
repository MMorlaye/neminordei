"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Copy, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export interface MenuItemProps {
    id: string | number;
    name: string;
    description?: string;
    price: number;
    image: string;
    category: string;
}

export function MenuItem({ item }: { item: MenuItemProps }) {
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const [imageSrc, setImageSrc] = useState(item.image || "/logo.png");

    const handleAdd = () => {
        addItem(item);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
        >
            <div className="h-48 overflow-hidden relative bg-gray-100 flex items-center justify-center">
                <img
                    src={imageSrc}
                    alt={item.name}
                    onError={() => setImageSrc("/logo.png")}
                    className={`w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ${imageSrc === "/logo.png" ? "object-contain p-8 opacity-50" : ""}`}
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-bold text-primary">
                    {formatCurrency(item.price)}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex-1">
                    <h3 className="font-heading font-black text-lg mb-2 text-black">{item.name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                </div>

                <Button
                    onClick={handleAdd}
                    variant={isAdded ? "secondary" : "outline"}
                    className="w-full gap-2"
                >
                    {isAdded ? (
                        <>Ajouté au panier</>
                    ) : (
                        <><Plus size={16} /> Ajouter</>
                    )}
                </Button>
            </div>
        </motion.div>
    );
}
