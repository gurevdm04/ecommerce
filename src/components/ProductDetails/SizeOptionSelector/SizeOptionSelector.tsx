import style from "./SizeOptionSelector.module.scss";

interface SizeOptionSelectorProps {
  options: string[] | undefined;
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
}

export const SizeOptionSelector: React.FC<SizeOptionSelectorProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <div>
      {options?.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`${style.size} ${
            selectedValue === option ? style.active : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
