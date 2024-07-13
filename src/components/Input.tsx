"use client";

type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
  isDisabled?: boolean;
};

function Input({ name, value, onChange, type = "text", placeholder, isDisabled = false }: InputProps) {
  return (
    <input
      className="w-full h-9 mx-2 border border-[#cccccc] rounded-sm px-2 outline-[#0090F9]"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={onChange}
    />
  );
}

export default Input;
