import axios from 'axios';
import { TOURS_ROUTES } from '@/constants';

export default async function getTours() {
  try {
    const res = await axios.get(`${TOURS_ROUTES}`);
    return res.data.data.result;
  } catch (error) {
    console.error(error);
  }
}