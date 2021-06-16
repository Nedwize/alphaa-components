import * as React from 'react';
import './Input.css';

export interface InputProps {
  size?: 'small' | 'medium' | 'large';
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  size = 'medium',
  label,
  placeholder = 'Name',
  value = '',
  onChange = () => null,
  ...props
}) => {
  return (
    <input
      type="text"
      className={['form', `form-${size}`].join(' ')}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
