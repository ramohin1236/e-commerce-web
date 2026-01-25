export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  shortDescription?: string;
  description?: string;
  rating: number;
  reviewCount: number;
  brand?: string;
  image?: string;
  images?: string[];
  availability?: "InStock" | "OutOfStock";
}
