import { notFound } from "next/navigation";

const API_URL = process.env.API_URL || "http://127.0.0.1:8000/api";

// Fetches data from our Laravel API.
// 404 -> shows the not-found page, other errors -> shows the error page.
export async function getData<T>(path: string): Promise<T> {
  let res: Response;

  try {
    res = await fetch(`${API_URL}${path}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
  } catch {
    throw new Error("Could not connect to the server. Please try again.");
  }

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Something went wrong while loading data.");
  }

  const json = await res.json();
  return json.data as T;
}