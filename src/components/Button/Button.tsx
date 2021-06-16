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

export const Button: React.FC<ButtonProps> = ({
  bg = 'primary',
  size = 'medium',
  backgroundColor,
  type = 'button',
  onClick = () => null,
  label,
  ...props
}) => {
  return (
    <button
      type={type}
      className={['btn', `btn-${size}`, bg].join(' ')}
      style={{ backgroundColor: backgroundColor! }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
