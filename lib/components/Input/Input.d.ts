import * as React from 'react';
import './Input.css';
export interface InputProps {
    size?: 'small' | 'medium' | 'large';
    label?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export declare const Input: React.FC<InputProps>;
