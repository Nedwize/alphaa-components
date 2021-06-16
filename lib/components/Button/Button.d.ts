import * as React from 'react';
import './Button.css';
export interface ButtonProps {
    bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
