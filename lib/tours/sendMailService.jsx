import { SERVICES_ROUTES } from '@/constants';
import axios from 'axios';

export default async function sendMailService(values) {
  const { serviceId, email, phoneNumber } = values;
  try {
    await axios.get(`${SERVICES_ROUTES}/${serviceId}/${email}/${phoneNumber}`)
  } catch (error) {
    console.error(error);
  }
}