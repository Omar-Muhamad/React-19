import { ReactNode } from "react";
import type { Metadata } from "next";

import BreadCrumbs from "@/_components/BreadCrumbs";

export const metadata: Metadata = {
  title: "All Products",
  description: "See all products of Fashion shop.",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="px-20">
      <BreadCrumbs />
      {children}
    </div>
  );
}
