import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-heading text-primary">
                            <Link href="/">Neminordei</Link>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Découvrez l'authenticité de la cuisine guinéenne dans un cadre moderne et chaleureux.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-primary transition-colors" title="Messenger: Restaurant Neminordei">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://instagram.com/neminordei" className="hover:text-primary transition-colors" title="@neminordei">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Navigation</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Notre Menu</Link></li>
                            <li><Link href="/reserver" className="hover:text-primary transition-colors">Réserver une table</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>Kagbelen Station Star<br />Conakry, Guinée</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+224 621 29 71 70</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>service.neminordei@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Horaires</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex gap-3">
                                <Clock size={18} className="text-primary shrink-0" />
                                <div>
                                    <p>Lun - Ven: 08h - 22h</p>
                                    <p>Sam - Dim: 10h - 23h</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Neminordei. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
