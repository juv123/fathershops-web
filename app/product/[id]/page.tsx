import Link from "next/link";
import { getData } from "@/lib/api";
import type { Product } from "@/lib/types";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getData<Product>(`/products/${id}`);

  // fall back to the main image if there is no gallery
  const images =
    product.images.length > 0 ? product.images : product.image ? [product.image] : [];

  return (
    <>
      <Link href="/" className="back">← Back to categories</Link>

      <div className="product">
        <div className="gallery">
          {images[0] && (
            <img src={images[0]} alt={product.name} className="main-image" />
          )}
          <div className="thumbs">
            {images.slice(1).map((src) => (
              <img key={src} src={src} alt={product.name} loading="lazy" />
            ))}
          </div>
        </div>

        <div className="info">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <p>SKU: {product.sku}</p>
          <p>{product.quantity > 0 ? `In stock (${product.quantity})` : "Out of stock"}</p>

          {product.options.map((option) => (
            <div key={option.name} className="option">
              <strong>{option.name}:</strong>{" "}
              {option.values.map((v) => v.name).join(", ")}
            </div>
          ))}

          <h3>Description</h3>
          <p>{product.description || "No description available."}</p>
        </div>
      </div>
    </>
  );
}