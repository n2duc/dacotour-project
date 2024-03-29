export default async function getBlogs() {
  const response = await fetch('http://localhost:8080/blogs');
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}