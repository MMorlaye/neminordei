"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, UtensilsCrossed, Calendar, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Menu", href: "/menu", icon: UtensilsCrossed },
    { name: "Réserver", href: "/reserver", icon: Calendar },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Commander", href: "/commander", icon: ShoppingBag },
];

export function FloatingMenu() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Don't show on Home page as it has the main Header
    if (pathname === "/") return null;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={link.href} passHref>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="shadow-lg flex items-center gap-2 pl-6 pr-4 py-8 rounded-full bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="font-bold text-lg">{link.name}</span>
                                        <div className="bg-primary/10 p-2 rounded-full text-primary">
                                            <link.icon size={22} />
                                        </div>
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={toggleMenu}
                className="h-16 w-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </motion.div>
            </Button>
        </div>
    );
}
