import { TYPE_TOURS_ROUTES } from "@/constants";

export default async function getTypeTour(typeTourId) {
  const response = await fetch(`${TYPE_TOURS_ROUTES}/${typeTourId}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}


// const [tour, type] = await Promise.all([userData, typeTour])