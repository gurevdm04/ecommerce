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

export interface ItemCartData {
  productId: string;
  title: string;
  currentPrice: number | null;
  oldPrice: number | null;
  images: string[];
  count: number;
  size?: string;
  color?: string;
  specs: {
    sku: string;
  };
}

export interface CartUserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}

export interface Order {
  id: string;
  orderDate: any;
  status: string;
  items: ItemCartData[];
  totalAmount: number;
}
export type Types =
  | "text"
  | "number"
  | "textarea"
  | "multi"
  | "spec"
  | "checkboxes";
export type HandleType = (
  type: Types,
  e:
    | React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    | { name: string; value: string[] }
) => void;
