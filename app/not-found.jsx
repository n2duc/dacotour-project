import Link from 'next/link'
import { TriangleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-container py-10 text-center h-[90vh]">
      <div className="mt-28">
        <h1 class="mb-4 text-6xl font-semibold text-secondary">404</h1>
        <p class="mb-4 text-lg text-gray-600">{"Oops! Looks like you're lost."}</p>
        <div class="animate-bounce">
          <TriangleAlert size={48} className="mx-auto" />
        </div>
        <p>Could not find requested resource</p>
        <p class="mt-4 text-gray-600">{"Let's get you back"} <a href="/" class="text-blue-500">home</a>.</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}