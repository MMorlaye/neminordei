"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Facebook, Instagram } from "lucide-react";
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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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

                {/* Mobile Menu Toggle - Significantly Larger */}
                <div className="md:hidden flex items-center gap-4 z-[60]">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "relative w-14 h-14 rounded-full",
                            isOpen ? "text-white hover:bg-white/20" : (isSolid ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10")
                        )}
                    >
                        {isOpen ? <X size={36} /> : <Menu size={36} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 0 0)" }}
                        animate={{ clipPath: "circle(150% at 0 0)" }}
                        exit={{ clipPath: "circle(0% at 0 0)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-50 bg-neutral-950 text-white flex flex-col px-8 md:hidden overflow-hidden"
                    >
                        {/* Header Content in Menu (Logo) */}
                        <div className="pt-6 pb-8">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <img
                                    src="/logo.png"
                                    alt="Neminordei"
                                    className="h-32 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        <nav className="flex flex-col gap-8 mt-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-heading font-bold uppercase tracking-wide hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="mt-4 border-t border-white/10 pt-8 w-max">
                                <Link href="/commander" onClick={() => setIsOpen(false)}>
                                    <Button variant="secondary" size="lg" className="gap-2 text-lg px-8 h-14">
                                        <ShoppingBag size={24} />
                                        Commander en ligne
                                        {itemCount > 0 && (
                                            <span className="bg-white text-secondary text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ml-2">
                                                {itemCount}
                                            </span>
                                        )}
                                    </Button>
                                </Link>
                            </div>
                        </nav>

                        {/* Social Icons at Bottom */}
                        <div className="mt-auto mb-12 flex gap-8">
                            <Link href="#" className="hover:text-primary transition-colors text-white/80" title="Messenger: Restaurant Neminordei">
                                <Facebook size={40} />
                            </Link>
                            <Link href="https://instagram.com/neminordei" className="hover:text-primary transition-colors text-white/80" title="@neminordei">
                                <Instagram size={40} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
