'use client'

import { useRouter, useSearchParams } from "next/navigation"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationSection = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? '1';
  const per_page = searchParams.get("per_page") ?? '6';

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious disable={!hasPrevPage} onClick={() => router.push(`/blog/?page=${Number(page) - 1}&per_page=${per_page}`)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext disable={!hasNextPage} onClick={() => router.push(`/blog/?page=${Number(page) + 1}&per_page=${per_page}`)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationSection;