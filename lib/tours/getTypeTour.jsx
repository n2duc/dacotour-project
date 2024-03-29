export default async function getTypeTour(typeTourId) {
  const response = await fetch(`http://localhost:8080/type-tours/${typeTourId}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}


// const [tour, type] = await Promise.all([userData, typeTour])