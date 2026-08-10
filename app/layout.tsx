import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
const Meteors = dynamic(() => import("@/components/magicui/meteors").then((mod) => mod.Meteors));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian Hernández | Full Stack Engineer",
  description:
    "Portafolio de Julian Hernández, Ingeniero Informático Full Stack especializado en React, Next.js, Laravel y automatización de procesos empresariales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white" suppressHydrationWarning>
        <LanguageProvider>
          {/* Fondo Global (Imagen) */}
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-black overflow-hidden">
            <Image
                src="/backg2.jpg"
                alt="Global Background"
                fill
                quality={100}
                priority={true}
                className="object-cover opacity-30"
            />
            <Meteors number={40} />
          </div>
          {children}
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
