"use client";

type InputProps = {
  name?: string;
  value: string | Date | null;  // null을 허용하도록 타입을 수정합니다.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  isDisabled?: boolean;
};

function Input({ name = '', value, onChange, type = "text", placeholder = '', isDisabled = false }: InputProps) {
  const formatValue = (value: string | Date | null, type: string) => {
    if (value === null) {
      return '';
    }
    if (type === "date" && value instanceof Date) {
      return value.toISOString().split('T')[0];
    }
    return value.toString();
  };

  return (
    <input
      className="w-[95%] h-9 mx-auto border border-[#cccccc] rounded-sm px-2 outline-[#0090F9]"
      type={type}
      name={name}
      value={formatValue(value, type)}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={onChange}
    />
  );
}

export default Input;
