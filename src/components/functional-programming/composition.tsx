
import React from 'react';

type ButtonProps = {
  size?: 'large' | 'small';
  color?: string;
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ size = 'small', color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '8px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton: React.FC<Omit<ButtonProps, 'color'>> = (props) => {
  return <Button {...props} color="red" />;
};

export const BigSuccessButton: React.FC<Omit<ButtonProps, 'size' | 'color'>> = (props) => {
  return <Button {...props} size="large" color="green" />;
};