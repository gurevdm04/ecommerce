import style from "./Counter.module.scss";

// export const Counter = () => {
//   return (
//     <div className={style.counter}>
//       <button>-</button>
//       <p>1</p>
//       <button>+</button>
//     </div>
//   );
// };

import React from "react";

interface CounterProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  min = 1,
  max = 10,
  onChange,
}) => {
  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    console.log(e.target.value, newValue);

    if (e.target.value === "") {
      onChange(0);
      return;
    }

    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={style.counter}>
      <button
        className={style.decrease}
        onClick={handleDecrease}
        style={{
          // backgroundColor: value > min ? "#fff" : "#f8f8f8",
          color: value > min ? "#000" : "#aaa",
          cursor: value > min ? "pointer" : "not-allowed",
        }}
        disabled={value <= min}
      >
        -
      </button>
      <input
        className={style.value}
        value={value}
        onChange={handleInputChange}
      />
      <button
        className={style.increase}
        onClick={handleIncrease}
        style={{
          // backgroundColor: value < max ? "#fff" : "#f8f8f8",
          color: value < max ? "#000" : "#aaa",
          cursor: value < max ? "pointer" : "not-allowed",
        }}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};
