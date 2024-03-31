import axios from 'axios';

export default async function getBlogs() {
  try {
    const response = await axios.get('http://localhost:8080/blogs');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}