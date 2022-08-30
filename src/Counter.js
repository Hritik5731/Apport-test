import { useState } from "react";

const Counter = ({ init = 1, max = 10 }) => {
  const allow = init <= max;
  const [value, setValue] = useState(init);

  const handleChange = (delta) => {
    if (value === max && delta === 1) return;

    setValue((value) => value + delta);
  };
  return allow ? (
    <div class="container">
      <button
        class="button"
        id="neg"
        onClick={() => {
          handleChange(-1);
        }}
      >
        -
      </button>
      <input
        class="button"
        id="num"
        type="number"
        onChange={(e) => {
          if (parseInt(e.target.value) > max) setValue(max);
          else setValue(e.target.value);
        }}
        value={value}
      />
      <button
        class="button"
        id="pos"
        onClick={() => {
          handleChange(1);
        }}
      >
        +
      </button>
    </div>
  ) : (
    <div class="error">Not valid initialising values</div>
  );
};

export default Counter;
