import React from "react";
import { InputProps } from "../AddProduct";
import { MultiItemInput } from "../MultiItemInput/MultiItemInput";
import { CategorySelector } from "../CategorySelector/CategorySelector";
import { MultiItemInputUpload } from "../MultiItemInputUpload/MultiItemInputUpload";
import { MultiItemInputColor } from "../MultiItemInputColor/MultiItemInputColor";

export const Input: React.FC<InputProps> = ({
  type,
  title,
  value,
  handle,
  name,
  placeholder,
}) => {
  switch (type) {
    case "text":
      return (
        <label>
          <p>{title}</p>
          <input
            type="text"
            name={name}
            value={value}
            onChange={(e) => handle(type, e)}
            placeholder={placeholder}
          />
        </label>
      );
    case "number":
      return (
        <label>
          <p>{title}</p>
          <input
            type="number"
            name={name}
            value={value || 0}
            onChange={(e) => handle(type, e)}
            placeholder={placeholder}
          />
        </label>
      );
    case "textarea":
      return (
        <label>
          <p>{title}</p>
          <textarea
            name={name}
            value={value}
            onChange={(e) => handle(type, e)}
            placeholder={placeholder}
          />
        </label>
      );
    case "multi":
      return (
        <MultiItemInput
          handle={handle}
          name={name}
          placeholder={placeholder}
          title={title}
          type={type}
          value={value}
        />
      );
    case "color":
      return (
        <MultiItemInputColor
          handle={handle}
          name={name}
          placeholder={placeholder}
          title={title}
          type={type}
          value={value}
        />
      );
    case "upload":
      return (
        <MultiItemInputUpload
          handle={handle}
          name={name}
          placeholder={placeholder}
          title={title}
          type={type}
          value={value}
        />
      );
    case "spec":
      return (
        <label>
          <p>{title}</p>
          <input
            type="text"
            name={name}
            value={value}
            onChange={(e) => handle(type, e)}
            placeholder={placeholder}
          />
        </label>
      );
    case "checkboxes":
      return (
        <CategorySelector
          handle={handle}
          name={name}
          placeholder={placeholder}
          title={title}
          type={type}
          value={value}
        />
      );
  }
};
