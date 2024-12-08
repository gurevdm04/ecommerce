import style from "./SizeOptionSelector.module.scss";

interface SizeOption {
  label: string;
  value: string;
}

interface SizeOptionSelectorProps {
  options: SizeOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export const SizeOptionSelector: React.FC<SizeOptionSelectorProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`${style.size} ${
            selectedValue === option.value ? style.active : ""
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
