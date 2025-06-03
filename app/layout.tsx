import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajith Babu | Digital Marketing Strategist & SEO Expert", // <-- UPDATE THIS LINE
  description: "Ajith Babu's professional portfolio showcasing expertise in Digital Marketing, SEO, and content strategy.", // <-- UPDATE THIS LINE
  metadataBase: new URL('https://grow-with-ajithbabu.vercel.app'), // <-- ADD THIS NEW LINE
  alternates: {
    canonical: '/', // <-- ADD THIS NEW LINE
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
