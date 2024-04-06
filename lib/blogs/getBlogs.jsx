import { BLOGS_ROUTES } from '@/constants';
import axios from 'axios';

export default async function getBlogs() {
  try {
    const response = await axios.get(`${BLOGS_ROUTES}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}