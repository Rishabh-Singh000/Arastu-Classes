import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arastu Classes - India's Premier Sainik & Navodaya Coaching Institute",
  description:
    "Arastu Classes provides expert coaching for Sainik School (AISSEE) and Jawahar Navodaya Vidyalaya (JNVST) entrance exams. Join 5000+ successful students with our comprehensive courses, mock tests, and expert faculty.",
  keywords: [
    "Arastu Classes",
    "Sainik School coaching",
    "AISSEE preparation",
    "Navodaya Vidyalaya coaching",
    "JNVST preparation",
    "Sainik School entrance exam",
    "JNV entrance exam",
    "online coaching",
    "entrance exam preparation",
  ],
  authors: [{ name: "Arastu Classes" }],
  openGraph: {
    title: "Arastu Classes - Sainik & Navodaya Coaching",
    description:
      "India's premier coaching institute for Sainik School and JNV entrance exams. 5000+ students, 500+ selections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
