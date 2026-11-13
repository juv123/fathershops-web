import Link from "next/link";
import { getData } from "@/lib/api";
import type { Category } from "@/lib/types";

export default async function HomePage() {
  const categories = await getData<Category[]>("/categories");

  return (
    <>
      <h1>Categories</h1>
      <div className="grid">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`} className="card">
            <img src={category.image ?? undefined} alt={category.name} loading="lazy" />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}