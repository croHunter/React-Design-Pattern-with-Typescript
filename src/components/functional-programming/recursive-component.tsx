import React from 'react';

// type NestedObject = {
//   a: number;
//   b: {
//     b1: number;
//     b2: {
//       b23: string;
//     };
//     b3: {
//       b31: {
//         message: string;
//       };
//       b32: {
//         message: string;
//       };
//     };
//   };
//   c: {
//     c1: number;
//     c2: number;
//   };
// };

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};
const isObject = (x: unknown): x is Record<string, unknown> => typeof x === 'object' && x !== null && !Array.isArray(x);;
// Parameter Type (x: unknown):

// The function takes a single parameter x of type unknown. The unknown type in TypeScript is a more restrictive version of any. It means "we don't know the type yet."
// Return Type (x is Record<string, unknown>):

// The return type is a TypeScript type predicate, x is Record<string, unknown>. This syntax is used in TypeScript for type guards. It tells TypeScript that if the function returns true, then x can be treated as a Record<string, unknown> from that point onward.
// Record<string, unknown> is a TypeScript utility type that represents an object with string keys and values of any type.
// Function Body:

// The function checks if x is an object and not null. In JavaScript, typeof null is 'object', so the additional x !== null check is necessary to exclude null.
// Why This is Important
// Type Safety:

// Using unknown is safer than using any because it forces you to perform type checks before you can operate on the value. This helps prevent runtime errors.
// By defining the return type as x is Record<string, unknown>, you provide a type guard. TypeScript can then understand the type of x within any block that follows a successful call to isObject.
// Type Guard:

// A type guard function like isObject refines the type of x within its true block. This allows TypeScript to provide better type inference and catch errors at compile time.

type RecursiveComponentProps = {
  data: unknown;
};

export const RecursiveComponent: React.FC<RecursiveComponentProps> = ({ data }) => {
  if (!isObject(data)) {
    return <li>{String(data)}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};

// Example usage
<RecursiveComponent data={nestedObject} />;