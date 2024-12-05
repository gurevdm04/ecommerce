import { Product } from "../types";

export const validateRequiredFields = (data: Product) => {
  const requiredFields = [
    { key: "title", value: data.title.trim() },
    { key: "currentPrice", value: data.currentPrice },
    { key: "description", value: data.description.trim() },
    { key: "shortDesc", value: data.shortDesc.trim() },
    { key: "images", value: data.images.length > 0 },
    { key: "sku", value: data.specs.sku.trim() },
  ];

  return requiredFields
    .filter((field) => !field.value)
    .map((field) => field.key);
};
