"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Location() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                            Nous trouver
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
                            Au cœur de Kagbelen
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Idéalement situé à Kagbelen, Conakry, Neminordei est l'endroit parfait pour vos pauses déjeuner ou vos dîners en famille.
                            Parking sécurisé disponible.
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-foreground">Adresse</p>
                                <p className="text-gray-600">Kagbelen Station Star</p>
                            </div>
                        </div>
                        <Button size="lg">Itinéraire</Button>
                    </div>

                    <div className="h-[400px] bg-muted rounded-2xl overflow-hidden shadow-lg relative">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                            <p className="text-gray-500 font-medium flex flex-col items-center gap-2">
                                <MapPin size={40} />
                                Carte Interactive Google Maps
                            </p>
                        </div>
                        {/* Note: In production, embed Google Maps iframe here */}

                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15743.7438456209!2d-13.5011!3d9.7155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDInNTUuOCJOIDEzwrAzMCcwNC4wIlc!5e0!3m2!1sen!2sgn!4v1620000000000!5m2!1sen!2sgn"
                            className="opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
