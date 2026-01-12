"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Trash2, ShoppingBag, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CommanderPage() {
    const { items, removeItem, updateQuantity, total, clearCart } = useCart();

    const handleWhatsAppOrder = () => {
        // Generate WhatsApp Message
        const orderDetails = items.map(
            (item) => `- ${item.quantity}x ${item.name} (${formatCurrency(item.price * item.quantity)})`
        ).join("%0A");

        const message = `*Nouvelle Commande Neminordei*%0A${orderDetails}%0A%0A*Total: ${formatCurrency(total)}*`;
        const phoneNumber = "224XXXXXXXX"; // Replace with real number
        const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(waLink, "_blank");
        clearCart();
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-12 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={48} className="text-gray-400" />
                </div>
                <h1 className="text-2xl font-bold font-heading mb-4 text-black">Votre panier est vide</h1>
                <p className="text-gray-800 mb-8 font-medium">Découvrez nos délicieux plats et commencez votre commande.</p>
                <Link href="/menu">
                    <Button size="lg">Voir le Menu</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-heading font-bold mb-8 text-secondary">Votre Commande</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center"
                            >
                                {item.image && (
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                )}
                                <div className="flex-1">
                                    <h3 className="font-bold font-heading text-lg text-gray-900">{item.name}</h3>
                                    <p className="text-primary font-bold">{formatCurrency(item.price)}</p>
                                </div>

                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors font-bold text-gray-900"
                                    >
                                        -
                                    </button>
                                    <span className="w-4 text-center font-bold text-gray-900">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors font-bold text-gray-900"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Checkout Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                            <h3 className="font-bold text-xl mb-4 text-gray-900">Récapitulatif</h3>
                            <div className="flex justify-between mb-4 pb-4 border-b border-gray-100">
                                <span className="text-gray-700 font-medium">Sous-total</span>
                                <span className="font-bold text-gray-900">{formatCurrency(total)}</span>
                            </div>
                            <div className="flex justify-between mb-8">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <span className="text-xl font-bold text-primary">{formatCurrency(total)}</span>
                            </div>

                            <Button onClick={handleWhatsAppOrder} size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                                <Send size={18} className="mr-2" />
                                Commander sur WhatsApp
                            </Button>
                            <p className="text-xs text-gray-400 text-center mt-4">
                                Vous serez redirigé vers WhatsApp pour finaliser votre commande.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
