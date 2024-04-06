import { TOURS_ROUTES } from "@/constants";

export default async function getTour(tourId) {
  const response = await fetch(`${TOURS_ROUTES}/${tourId}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}