"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Fatoumata Barry",
        role: "Cliente Fidèle",
        content: "Le meilleur restaurant de Conakry sans hésitation ! Le Yetisse est incroyable.",
    },
    {
        name: "Mohamed Camara",
        role: "Food Blogger",
        content: "Un cadre magnifique et une cuisine qui respecte les traditions tout en étant moderne.",
    },
    {
        name: "Diallo Ousmane",
        role: "Client",
        content: "Service impeccable et rapide. J'adore venir ici pour mes déjeuners d'affaires.",
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-primary/5 text-foreground relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                    Ce que disent nos clients
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm relative">
                            <Quote className="absolute top-8 right-8 text-primary/20" size={40} />
                            <p className="text-gray-600 italic mb-6 relative z-10">"{t.content}"</p>
                            <div>
                                <p className="font-bold text-foreground font-heading">{t.name}</p>
                                <p className="text-sm text-primary">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
