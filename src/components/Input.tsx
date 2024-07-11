"use client"

import { useState } from "react";

type InputProps = {
  value?: string;
  placeholder: string;
  disabled?: boolean;
}

function Input({ value = "", placeholder, disabled = false }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <input
      className="w-full h-9 mx-2 border border-[#cccccc] rounded-sm pl-2 outline-[#0090F9]"
      value={inputValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default Input;
