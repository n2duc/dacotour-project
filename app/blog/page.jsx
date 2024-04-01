import getBlogs from "@/lib/blogs/getBlogs";
import BreadCrumb from "@/components/BreadCrumb";
import Link from 'next/link';
import Image from 'next/image';

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import PaginationSection from "@/components/sections/PaginationSection";

export default async function BlogPage({ searchParams }) {
  const data = await getBlogs();
  const blogs = data?.data?.result;

  const page = searchParams["page"] ?? '1';
  const per_page = searchParams["per_page"] ?? '6';

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const blogsPerPage = blogs.slice(start, end);

  return (
    <div className="w-full bg-white" id="blog">
      <div className="max-container mb-10">
        <BreadCrumb lastName="Blog" />
        <div className="md:px-0 px-3">
          <div className="my-8 text-center">
            <h1 className="font-bold text-3xl mb-2 text-gray-800">Useful Travel Experience</h1>
            <p className="text-sm">Travel Experience is a travel guide with many profound and useful articles for travelers preparing for their journey of discovery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-7">
            {blogsPerPage.map((blog, index) => (
              <Card key={index} className="rounded-2xl">
                <CardContent className="p-4 flex flex-col h-full">
                  <Image
                    // src={blog.banner}
                    src="/banner-screen.png"
                    alt="thumbnail"
                    width={700}
                    height={500}
                    className="rounded-lg h-[240px] object-cover"
                  />
                  <Link href={`/blog/${blog.slug}`} className="text-lg line-clamp-2 font-semibold mt-3">{blog.title}</Link>
                  <p className="line-clamp-3 text-sm mt-2 text-gray-600 mb-4">{blog.des}</p>
                  <Button asChild className="w-full mt-auto">
                    <Link href={`/blog/${blog.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {blogs.length > 6 && <PaginationSection hasNextPage={end < blogs.length} hasPrevPage={start < 0} />}
      </div>
      <div className="w-full h-[400px] bg-[url('/blog-footer-banner.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
        <h4 className="text-black text-6xl tracking-wider font-extrabold opacity-80 mb-2 drop-shadow-lg">DACOTOURS</h4>
        <p className="text-xs uppercase font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quam.</p>
      </div>
    </div>
  )
}