import './button.css';

export interface ButtonProps {
  bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  bg = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={['btn', `btn-${size}`, bg].join(' ')}
      style={{ backgroundColor: backgroundColor! }}
      {...props}
    >
      {label}
    </button>
  );
};
