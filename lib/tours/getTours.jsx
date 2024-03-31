import axios from 'axios';

export default async function getTours() {
  try {
    const res = await axios.get(`http://localhost:8080/tours`);
    return res.data.data.result;
  } catch (error) {
    console.error(error);
  }
}