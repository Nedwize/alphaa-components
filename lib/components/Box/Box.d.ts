import * as React from 'react';
import './Box.css';
export interface BoxProps {
    bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const Box: React.FC<BoxProps>;
