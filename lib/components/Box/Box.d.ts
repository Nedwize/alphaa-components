import * as React from 'react';
import './box.css';
export interface BoxProps {
    bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const Button: React.FC<BoxProps>;
