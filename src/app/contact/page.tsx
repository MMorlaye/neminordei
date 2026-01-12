"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center text-primary">Nous Contacter</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Info Cards */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-primary">Adresse</h3>
                                <p className="text-gray-600">
                                    Kagbelen Station Star<br />
                                    Conakry, Guinée
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-primary">Téléphone</h3>
                                <p className="text-gray-600 mb-1">+224 621 29 71 70</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-primary">Email</h3>
                                <p className="text-gray-600">service.neminordei@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-primary">Heures d'ouverture</h3>
                                <p className="text-gray-600 mb-1">Lundi - Vendredi: 08h00 - 22h00</p>
                                <p className="text-gray-600">Samedi - Dimanche: 10h00 - 23h00</p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-md">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '500px' }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15743.7438456209!2d-13.5011!3d9.7155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDInNTUuOCJOIDEzwrAzMCcwNC4wIlc!5e0!3m2!1sen!2sgn!4v1620000000000!5m2!1sen!2sgn"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
}
