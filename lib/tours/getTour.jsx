export default async function getTour(tourId) {
  const response = await fetch(`http://localhost:8080/tours/${tourId}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}