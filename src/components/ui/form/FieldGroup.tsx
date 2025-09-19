import React from 'react';
import { Input } from './fields';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './fields';

interface FieldGroupProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  children?: React.ReactNode;
  className?: string;
}

interface InputFieldProps {
  id?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: string | number;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  required?: boolean;
}

interface SelectFieldProps {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: Array<string | { value: string; label: string }>;
  groupLabel?: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
}

export const FieldGroup: React.FC<FieldGroupProps> = ({
  label,
  htmlFor,
  required = false,
  optional = false,
  children,
  className = '',
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block mb-2 font-normal text-base text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
        {optional && <span className="text-gray-500 text-xs ml-1">(Optional)</span>}
      </label>
      {children}
    </div>
  );
};

export const InputField: React.FC<InputFieldProps> = ({
  id,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  min,
  className = '',
  size = 'default',
  required,
}) => {
  // Always include w-full and merge with additional classes
  const combinedClassName = `w-full ${className}`.trim();
  
  return (
    <Input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      className={combinedClassName}
      size={size}
      required={required}
    />
  );
};

// Helper function to normalize string[] or { value, label }[] into uniform array
const normalizeOptions = (
  options: Array<string | { value: string; label: string }>
): Array<{ value: string; label: string }> => {
  return options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );
};

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  value,
  onValueChange,
  placeholder,
  options,
  groupLabel,
  className = '',
  size = 'default',
}) => {
  const normalizedOptions = normalizeOptions(options);
  
  // Always include w-full and merge with additional classes
  const combinedClassName = `w-full ${className}`.trim();

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger id={id} className={combinedClassName} size={size}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
          {normalizedOptions.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
