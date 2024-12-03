export interface Product {
  title: string;
  oldPrice: number;
  currentPrice: number;
  description: string;
  shortDesc: string;
  images: string[];
  size: string[];
  color: string[];
  specs: {
    category: string;
    sku: string;
    tags: string;
  };
}
