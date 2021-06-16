import * as React from 'react';
import './Box.css';

export interface BoxProps {
  bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Box: React.FC<BoxProps> = ({
  bg = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <div className={['box', `box-${size}`, bg].join(' ')} {...props}>
      {children}
    </div>
  );
};
