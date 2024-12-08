import style from "./ColorOptionSelector.module.scss";

interface ColorOptionSelectorProps {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export const ColorOptionSelector: React.FC<ColorOptionSelectorProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <div>
      {options.map((color) => (
        <button
          key={color}
          onClick={() => onSelect(color)}
          className={`${style.color} ${
            selectedValue === color ? style.active : ""
          }`}
          style={{ background: color }}
        ></button>
      ))}
    </div>
  );
};
