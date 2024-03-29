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
import { Home } from "lucide-react";

const BreadCrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter(path => path);
  return (
    <Breadcrumb className="py-3 border-b border-gray-200">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <Home size={16} />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && <BreadcrumbSeparator />}
        {
          pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`;
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
                    <BreadcrumbPage>{linkName}</BreadcrumbPage>
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