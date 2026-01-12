"use client";

import { Leaf, Clock, Award, Wifi } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Ingrédients Frais",
        description: "Nous travaillons directement avec les producteurs locaux pour garantir la fraîcheur de nos produits.",
    },
    {
        icon: Clock,
        title: "Service Rapide",
        description: "Une équipe dynamique pour vous servir rapidement, sur place ou à emporter.",
    },
    {
        icon: Award,
        title: "Qualité Premium",
        description: "Des recettes authentiques préparées par des chefs passionnés avec les meilleurs ingrédients.",
    },
    {
        icon: Wifi,
        title: "Wifi Gratuit",
        description: "Restez connecté grâce à notre connexion haut débit gratuite pour tous nos clients.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
                        Pourquoi Nemi Nordai ?
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 rounded-xl hover:bg-muted/50 transition-colors">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
