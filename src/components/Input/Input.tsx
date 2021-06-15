import './input.css';

export interface InputProps {
  size?: 'small' | 'medium' | 'large';
  label?: string;
  placeholder?: string;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  size = 'medium',
  label,
  placeholder,
  value,
  ...props
}) => {
  return (
    <input
      type="text"
      className={['form', `form-${size}`].join(' ')}
      {...props}
    />
  );
};
