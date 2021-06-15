import * as React from 'react';
import './button.css';
export interface ButtonProps {
    bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
