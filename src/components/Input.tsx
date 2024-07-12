"use client"

import { useState } from "react";

type InputProps = {
  value?: string;
  type?: string;
  placeholder: string;
  isDisabled?: boolean;
}

function Input({ value = "", type = "text", placeholder, isDisabled = false }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <input
      className="w-full h-9 mx-2 border border-[#cccccc] rounded-sm px-2 outline-[#0090F9]"
      type={type}
      value={inputValue}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default Input;
