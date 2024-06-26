import type { Metadata } from "next";
import { Lato } from "next/font/google";
import React from "react";
import Header from "@sections/Header";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';

const description = `Welcome to Tien Tien's portfolio! Explore my website showcasing my recent work over the past 3 years. 
I specialize in website design and development, focusing on user experience to engage and appeal to visitors. 
Whether you're a startup seeking to establish your online presence or a brand in need of a fresh perspective, let's collaborate to bring your vision to life!
Contact me today to discuss your project and take the first step towards achieving your digital goals!`;

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Portfolio | Tien Tien",
  description,
  keywords: ["portfolio", "web design", "web development", "user experience", "website", "design", "development", "startup", "brand", "digital", "goals"],
  authors: {url:"https://portfolio-tientien-truong.vercel.app/",
            name:"Tien Tien Bill Truong"},
  verification: {google: process.env.GOOGLE_KEY},
  icons: [{ rel: 'icon', url: '/img/favicon.ico' }],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {

  return (
    <html lang={locale}>
      <body className={`${lato.className}`}>
        <NextIntlClientProvider >
          <div className="flex flex-col h-screen max-w-full mx-auto items-center text-white overflow-x-clip">
            <Header />
            <div className="w-full h-full">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
