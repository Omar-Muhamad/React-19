import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";

import favicon from "@/assets/icons/favicon.ico";
import Navbar from "@/_components/navbar/Navbar";
import "./globals.css";
import Footer from "@/_components/ui/Footer";
import cn from "@/lib/utils";

export const inter = Inter({ subsets: ["latin"] });

export const urbanist = Urbanist({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Fashion Plus",
  description: "Home of your favorite fashion",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={cn(
          "flex dark:bg-neutral-900 dark:text-white flex-col tracking-wide font-medium min-h-screen max-w-[1980px] mx-auto",
          urbanist.className,
        )}
      >
        <header>
          <Navbar />
        </header>
        <main className="flex-1 p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
