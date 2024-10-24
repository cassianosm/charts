import React from 'react';

interface InputFieldProps {
  type: 'text' | 'number';
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`block w-full p-2 border border-gray-300 rounded-md ${className}`}
    />
  );
};

export default InputField;
