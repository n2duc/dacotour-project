import { BLOGS_ROUTES } from "@/constants";

export default async function getBlog(blogId) {
  const response = await fetch(`${BLOGS_ROUTES}/${blogId}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
}