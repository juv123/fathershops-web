import Link from "next/link";

export default function NotFound() {
  return (
    <div className="message">
      <h1>404 - Not found</h1>
      <p>Sorry, we could not find what you were looking for.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}