"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReservationPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            console.log("Reservation Data:", formState);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Réservation Confirmée !</h2>
                    <p className="text-gray-600 mb-8">
                        Merci {formState.name}, nous avons bien reçu votre demande pour le {formState.date} à {formState.time}.
                        Un SMS de confirmation vous a été envoyé.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Nouvelle réservation</Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary">Réserver une table</h1>
                    <p className="text-gray-600">Rejoignez-nous pour une expérience gastronomique inoubliable.</p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Personal Info */}
                            <div className="space-y-6">
                                <h3 className="font-bold text-lg border-b pb-2 mb-4">Vos Coordonnées</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom Complet</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                        placeholder="600 00 00 00"
                                    />
                                </div>
                            </div>

                            {/* Reservation Details */}
                            <div className="space-y-6">
                                <h3 className="font-bold text-lg border-b pb-2 mb-4">Détails de la réservation</h3>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                                        <Calendar size={16} /> Date
                                    </label>
                                    <input
                                        required
                                        type="date"
                                        name="date"
                                        value={formState.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                                        <Clock size={16} /> Heure
                                    </label>
                                    <select
                                        required
                                        name="time"
                                        value={formState.time}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-white"
                                    >
                                        <option value="">Choisir une heure</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                        <option value="19:00">19:00</option>
                                        <option value="19:30">19:30</option>
                                        <option value="20:00">20:00</option>
                                        <option value="20:30">20:30</option>
                                        <option value="21:00">21:00</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                                        <User size={16} /> Nombre de personnes
                                    </label>
                                    <select
                                        required
                                        name="guests"
                                        value={formState.guests}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-white"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                            <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                                        ))}
                                        <option value="more">Plus de 10 (Groupe)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full md:w-auto px-12 block mx-auto">
                                Confirmer la réservation
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
