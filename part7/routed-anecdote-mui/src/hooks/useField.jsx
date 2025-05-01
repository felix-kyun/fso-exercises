import { useState } from "react";

export function useField(type) {
  const [value, setValue] = useState("");

  const onChange = (ev) => {
    setValue(ev.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [
    {
      type,
      value,
      onChange,
    },
    reset,
  ];
}
