import { notFound } from 'next/navigation'

const allPosts = [];

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }) {
  const post = await getPostFromParams(params);
  return {
    title: 'Blog Post',
    description: 'This is a blog post',
  };
}

export default async function BlogPage({ params }) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>Blog Post</h1>
    </article>
  );
}