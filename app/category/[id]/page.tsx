import Link from "next/link";
import { getData } from "@/lib/api";
import type { ProductSummary } from "@/lib/types";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = await getData<ProductSummary[]>(`/categories/${id}/products`);

  return (
    <>
      <Link href="/" className="back">← Back to categories</Link>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p className="message">No products in this category yet.</p>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="card">
              <img src={product.image ?? undefined} alt={product.name} loading="lazy" />
              <h3 className="title">{product.name}</h3>
              <p className="price">{product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}