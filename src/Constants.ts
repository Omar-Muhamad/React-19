import { StaticImageData } from "next/image";

import logo from "@/assets/images/logo.png";

type NavMenuHeaderContent = {
  icon: StaticImageData;
  title: string;
  path: string;
  description: string;
};

type NavMenuItem = {
  title: string;
  path: string;
  description: string;
};

type NavMenuItems = NavMenuItem[];

type NavLink = {
  title: string;
  path: string;
  navMenu: false | NavMenuItem[];
  headerContent: false | NavMenuHeaderContent;
};

const navLinks: NavLink[] = [
  { title: "Home", path: "/", navMenu: false, headerContent: false },
  {
    title: "Shop",
    path: "/shop",
    navMenu: [
      {
        title: "Shop",
        path: "/shop",
        description: "Shop throw all our products",
      },
      {
        title: "Men's Fashion",
        path: "/categories/men's clothing",
        description: "See latest trends in men's fashion",
      },
      {
        title: "Women's Fashion",
        path: "/categories/women's clothing",
        description: "See all new trends in women's fashion",
      },
      {
        title: "Jewelry",
        path: "/categories/jewelery",
        description: "Buy the best jewelry for your loved ones",
      },
    ],
    headerContent: false,
  },
  {
    title: "About",
    path: "/about",
    navMenu: [
      {
        title: "Our Story",
        path: "/story",
        description: "Know more about our journey.",
      },
      {
        title: "Our Vision",
        path: "/vision",
        description: "Learn more about our vision.",
      },
      {
        title: "Contact Us",
        path: "/contact",
        description: "Reach out to us for any queries.",
      },
    ],
    headerContent: {
      icon: logo,
      title: "About Us",
      path: "/about",
      description:
        "Fashion is one of the pioneers in cloths industry, Learn more about our story and vision.",
    },
  },
];

export type { NavMenuHeaderContent, NavMenuItems };

export default navLinks;
