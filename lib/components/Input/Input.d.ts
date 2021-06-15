import * as React from 'react';
import './input.css';
export interface InputProps {
    size?: 'small' | 'medium' | 'large';
    label?: string;
    placeholder?: string;
    value?: string;
}
export declare const Input: React.FC<InputProps>;
