export type Category = {
  id: number;
  parent_id: number;
  name: string;
  image: string | null;
};

export type ProductSummary = {
  id: number;
  name: string;
  image: string | null;
  price: number;
  quantity: number;
};

export type ProductOption = {
  name: string;
  values: { name: string; image: string | null }[];
};

export type Product = {
  id: number;
  name: string;
  image: string | null;
  images: string[];
  price: number;
  quantity: number;
  sku: string | null;
  description: string;
  options: ProductOption[];
};