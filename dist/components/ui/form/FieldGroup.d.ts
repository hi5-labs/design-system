import React from 'react';
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
    options: Array<string | {
        value: string;
        label: string;
    }>;
    groupLabel?: string;
    className?: string;
    size?: 'default' | 'sm' | 'lg';
}
export declare const FieldGroup: React.FC<FieldGroupProps>;
export declare const InputField: React.FC<InputFieldProps>;
export declare const SelectField: React.FC<SelectFieldProps>;
export {};
//# sourceMappingURL=FieldGroup.d.ts.map