import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/components/CartContext";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";

export const metadata = {
  title: "Olympia Fitness — Commercial Gym Equipment",
  description:
    "Commercial cardio, strength and multi-station equipment for gyms opening across India. Built to take a beating.",
  icons: {
    icon: "/olympia-fitness-logo.png",
    shortcut: "/olympia-fitness-logo.png",
    apple: "/olympia-fitness-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-olympia-black text-white antialiased">
        <CartProvider>
          <ScrollProgressBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
