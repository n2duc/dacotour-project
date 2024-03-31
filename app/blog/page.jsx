import getBlogs from "@/lib/blogs/getBlogs";
import BreadCrumb from "@/components/BreadCrumb";
import Link from 'next/link';
import Image from 'next/image';

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default async function BlogPage() {
  const data = await getBlogs();
  const blogs = data?.data?.result;
  console.log(data);

  return (
    <div className="w-full bg-white py-5" id="blog">
      <div className="max-container md:px-0 px-3">
        <BreadCrumb />
        <h1>Blog Post</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {blogs.map((blog, index) => (
            <Card key={index} className="rounded-2xl">
              <CardContent className="p-4 flex flex-col">
                <Image
                  // src={blog.banner}
                  src="/banner-screen.png"
                  alt="thumbnail"
                  width={700}
                  height={500}
                  className="rounded-lg h-[240px] object-cover"
                />
                <h3 className="text-lg line-clamp-2 font-semibold mt-3">{blog.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600">{blog.des}</p>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/blog/${blog._id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}