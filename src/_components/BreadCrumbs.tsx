"use client";
import { Fragment } from "react";

import { usePathname } from "next/navigation";

import Breadcrumb, {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/_components/ui/breadcrumb";

export default function BreadCrumbs() {
  const pathname = usePathname();
  const pathLinks = pathname.split("/");
  pathLinks.shift();
  const lastPath = pathLinks.at(-1);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {pathLinks.map((link, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              {lastPath === link ? (
                <BreadcrumbPage>{link}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={`/${link}`}>{link}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
