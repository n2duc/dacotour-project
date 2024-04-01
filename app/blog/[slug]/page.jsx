import BreadCrumb from '@/components/BreadCrumb';
import { Badge } from "@/components/ui/badge"
import Date from '@/components/common/Date';
import getBlog from '@/lib/blogs/getBlog';
import { notFound } from 'next/navigation'

async function getPostFromParams(params) {
  const blog = await getBlog(params?.slug);

  if (!blog || !blog.data) {
    notFound();
  }
  
  return blog.data;
}

export async function generateMetadata({ params }) {
  const data = await getPostFromParams(params);
  const { title, description } = data;
  return {
    title,
    description,
  };
}

export default async function BlogPage({ params }) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-container flex flex-col gap-16">
      <BreadCrumb lastName={post.title} />
      <div className="flex flex-col items-center px-10 justify-center text-center">
        <h5 className="font-bold text-4xl text-gray-900 mb-3">{post.title}</h5>
        <Badge className="mb-6 text-gray-800"><Date dateString={post.createdAt} /></Badge>
        <p className="italic">{post.des}</p>
      </div>
      <div className="w-full px-10 pb-10">
        {post.content.map((content, index) => (
          <div key={index} dangerouslySetInnerHTML={{__html: content}}></div>
        ))}
      </div>
    </article>
  );
}