export interface Product {
  title: string;
  oldPrice?: number | null;
  currentPrice: number | null;
  description: string;
  shortDesc: string;
  images: string[];
  size?: string[];
  color?: string[];
  specs: {
    category?: string;
    sku: string;
    tags?: string;
  };
}
export interface ProductCardProps {
  id: string;
  title: string;
  shortDesc: string;
  currentPrice: number;
  oldPrice: number;
  images: string[];
}

export interface addToCartData {
  productId: string;
  title: string;
  currentPrice: number | null;
  image: string;
  count: number;
  size?: string;
  color?: string;
  specs: {
    sku: string;
  };
}
