import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300", "800"],
});


export const metadata: Metadata = {
  title: "Interveu Assignment",
  description: "Done By Sanyam Pandey",
  icons: {
    icon: '/favicon-interveu.ico',
    apple: '/favicon-interveu.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sora.className} antialiased`}
      >
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
