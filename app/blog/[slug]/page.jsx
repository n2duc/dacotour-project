import BreadCrumb from '@/components/BreadCrumb';
import Date from '@/components/common/Date';
import getBlog from '@/lib/blogs/getBlog';
import { notFound } from 'next/navigation'

async function getPostFromParams(params) {
  const blog = await getBlog(params?.slug[0]);

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
    <article className="max-container">
      <BreadCrumb />
      <div className="py-8">
        <h1 className="text-xl font-bold">Blog Post</h1>
        <h2>Title: {post.title}</h2>
        <p>Des: {post.des}</p>
        <p>Create at: <Date dateString={post.createdAt} /></p>
        <div className="w-full max-w-[1000px] mx-auto">
          {post.content.map((content, index) => (
            <div key={index} dangerouslySetInnerHTML={{__html: content}}></div>
          ))}
        </div>
      </div>
    </article>
  );
}