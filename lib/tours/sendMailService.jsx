import axios from 'axios';

export default async function sendMailService(values) {
  const { serviceId, email, phoneNumber } = values;
  try {
    await axios.get(`http://localhost:8080/send-emails/request-from-user/${serviceId}/${email}/${phoneNumber}`)
  } catch (error) {
    console.error(error);
  }
}