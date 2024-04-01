'use client'

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = ({ lastName }) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter(path => path);
  // console.log("LOG: " + pathNames);
  return (
    <Breadcrumb className="py-3 border-b border-gray-200">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && <BreadcrumbSeparator />}
        {
          pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`;
            if (link.includes("-")) {
              link = link.split("-").join(" ");
            }
            const linkName = link[0].toUpperCase() + link.slice(1, link.length);
            const isLastPath = pathNames.length === index + 1;
            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {!isLastPath ? (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{linkName}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{lastName}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
              </Fragment>
            )
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb;