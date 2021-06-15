import { ReactNode } from 'react';
import './box.css';

export interface BoxProps {
  bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<BoxProps> = ({
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
