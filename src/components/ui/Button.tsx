import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent';
  
  const variantStyles = {
    primary: 'bg-secondary-400 hover:bg-secondary-500 text-white focus:ring-secondary-300',
    secondary: 'bg-white hover:bg-cream-50 text-primary-600 border border-primary-200 focus:ring-secondary-300',
    outline: 'bg-transparent hover:bg-secondary-50 text-secondary-400 border border-secondary-400 focus:ring-secondary-300',
    text: 'bg-transparent hover:bg-cream-100 text-primary-600 focus:ring-secondary-300',
  };
  
  const sizeStyles = {
    small: 'text-xs px-3 py-2',
    medium: 'text-sm px-4 py-2',
    large: 'text-base px-6 py-3',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};