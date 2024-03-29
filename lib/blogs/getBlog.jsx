export default async function getBlog(blogId) {
  const response = await fetch(`http://localhost:8080/blogs/${blogId}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}