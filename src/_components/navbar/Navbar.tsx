"use client";

import Image from "next/image";
import Link from "next/link";

import NavigationMenu, {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigationMenu";

import Cart from "./Cart";
import NavMenuItem from "./NavMenuItem";
import Search from "./Search";
import UserIcon from "./UserIcon";

import logo from "@/assets/images/logo.png";
import navLinks from "@/Constants";

const Navbar = () => {
  return (
    <nav className="h-20 flex justify-between items-center px-16 text-lg">
      <NavigationMenu>
        <NavigationMenuList className="navLinks flex items-center gap-1">
          {navLinks.map((link, index) =>
            link.navMenu && link.navMenu.length > 0 ? (
              <NavMenuItem
                key={index}
                title={link.title}
                navMenu={link.navMenu}
                headerContent={link.headerContent}
              />
            ) : (
              <NavigationMenuItem
                key={index}
                className="mr-1 hover:bg-lightGray rounded-sm"
              >
                <Link href={link.path} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ),
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <Link href="/" className="flex items-center -ml-16">
        <Image src={logo} alt="App logo" height="40" width="40" />
        <span className="text-4xl -ml-1 font-bold">ashion</span>
      </Link>

      <div className="flex items-center gap-5">
        <Search />
        <Cart />
        <UserIcon />
      </div>
    </nav>
  );
};

export default Navbar;
