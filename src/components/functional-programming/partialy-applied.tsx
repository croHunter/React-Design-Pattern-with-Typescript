import React from 'react';

// Define the type for Button props
type ButtonProps = {
  size?: 'large' | 'small';
  color?: string;
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Button Component
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

// Partially Apply Function
// P extends object: This declares a generic type parameter P that must be an object. This represents the type of the props that the Component accepts.
// K extends keyof P: This declares a second generic type parameter K that must be a key of P. This represents the keys in partialProps that you want to pre-apply to the component.


// Component: React.ComponentType<P>: This specifies that the Component parameter is a React component that accepts props of type P.
// partialProps: Pick<P, K>: This specifies that partialProps is an object containing a subset of the properties of P, defined by the keys K. The Pick<P, K> utility type constructs a type by picking the set of properties K from P.

// props: Omit<P, K>: The returned function accepts props of type Omit<P, K>. The Omit<P, K> utility type constructs a type by omitting the set of properties K from P. This ensures that the returned component expects only the remaining props that were not pre-applied in partialProps.

// K represents the keys of partialProps, not the values or the object itself. Therefore, K cannot be used to type partialProps directly. Using partialProps as K would be a type mismatch because K is not an appropriate type for an object being spread into props.


export const partiallyApply = <P extends object, K extends keyof P>(
  Component: React.ComponentType<P>,
  partialProps: Pick<P, K>
) => {
  return (props: Omit<P, K>) => {
    return <Component {...(partialProps as P)} {...props as P} />;
  };
};

// Create DangerButton and BigSuccessButton using partiallyApply
export const DangerButton = partiallyApply(Button, { color: 'red' });
export const BigSuccessButton = partiallyApply(Button, { color: 'green', size: 'large' });
