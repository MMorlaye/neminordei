"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Réserver", href: "/reserver" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { itemCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Solid background if scrolled OR if not on home page
    const isSolid = isScrolled || !isHome;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isSolid
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Neminordei"
                        className="h-28 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-medium transition-colors hover:text-primary",
                                isSolid ? "text-primary" : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/commander">
                        <Button variant="primary" size="sm" className="relative">
                            <ShoppingBag size={18} className="mr-2" />
                            Commander
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {itemCount}
                                </span>
                            )}
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsOpen(!isOpen)}
                        className={isSolid ? "text-primary" : "text-white"}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-900 text-lg font-medium py-2 border-b border-muted last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/commander" className="w-full">
                                <Button className="w-full justify-between" onClick={() => setIsOpen(false)}>
                                    Commander en ligne
                                    {itemCount > 0 && (
                                        <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
                                            {itemCount}
                                        </span>
                                    )}
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
