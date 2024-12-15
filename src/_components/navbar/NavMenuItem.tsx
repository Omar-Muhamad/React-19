import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigationMenu";

import ListItem from "./ListItem";

import { NavMenuHeaderContent, NavMenuItems } from "@/Constants";

interface NavMenuItemProps {
  title: string;
  navMenu?: NavMenuItems;
  headerContent: false | NavMenuHeaderContent;
}

const NavMenuItem: FC<NavMenuItemProps> = ({
  title,
  navMenu,
  headerContent,
}) => {
  return (
    <NavigationMenuItem className="hover:bg-lightGray rounded-sm">
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>

      {headerContent ? (
        <NavigationMenuContent className="bg-white dark:bg-black">
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3 bg-lightGray rounded-md">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href={headerContent.path}
                >
                  <Image
                    src={headerContent.icon}
                    alt="Logo"
                    className="h-6 w-6"
                  />
                  <div className="mb-2 mt-4 text-lg font-bold">Fashion</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {headerContent.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>

            {navMenu?.map((link, index) => (
              <ListItem
                key={link.title + index}
                href={link.path}
                title={link.title}
              >
                {link.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      ) : (
        <NavigationMenuContent className="bg-white dark:bg-black">
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {navMenu &&
              navMenu.length > 0 &&
              navMenu.map((link, index) => (
                <ListItem
                  key={link.title + index}
                  href={link.path}
                  title={link.title}
                >
                  {link.description}
                </ListItem>
              ))}
          </ul>
        </NavigationMenuContent>
      )}
    </NavigationMenuItem>
  );
};

export default NavMenuItem;
