// app/not-found.js
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you’re looking for does not exist. Return to the homepage.",
  robots: {
    index: false, // prevents indexing
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-blue-600">404</h1>
      <h2 className="text-lg md:text-xl text-gray-700 mt-4">
        This page could not be found.
      </h2>
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
