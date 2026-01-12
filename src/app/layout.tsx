import { CartProvider } from "@/context/CartContext";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { FloatingMenu } from "@/components/layout/FloatingMenu";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neminordei - Restaurant, Fast Food, Patisserie, Lounge & Glacière",
  description: "Découvrez Neminordei à Kagbelen Station Star : Restaurant, Fast Food, Patisserie, Lounge et Glacière.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        <CartProvider>
          <SplashScreen />
          <FloatingMenu />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
