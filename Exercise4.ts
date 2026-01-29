// Problem 4 — Module Export + Intersection Types + Enum
// Detailed Problem Statement
// In submission/math.ts:

// Create enum
// Define intersection type

// Export default function:
// export default function createCalc(op);

// The returned object must:store op
// execute add or multiply based on it
// In index.ts, import and use it.

// Constraints

// Must use intersection type.
// Must use enum fields Operation.Add or Operation.Multiply.

// Example Test Cases
// Valid
// const addCalc = createCalc(Operation.Add);
// addCalc.execute(2, 3);  // → 5

// Code Snippet — submission/math.ts
// // Problem 4 — Module Export + Intersection Types + Enum

// TODO: Define an enum for operations (add, multiply)

// TODO: Define a type for calculator object
// It should store the operation and have an execute method
// Problem 4 — Module Export + Intersection Types + Enum

// 1️⃣ Enum (must be used)
export enum Operation {
  Add,
  Multiply,
}

// 2️⃣ Intersection type (MANDATORY)
type Calculator = {
  execute(a: number, b: number): number;
} & {
  op: Operation;
};

// 3️⃣ Default export function
export default function createCalc(op: Operation): Calculator {
  return {
    op,
    execute(a: number, b: number): number {
      return op === Operation.Add ? a + b : a * b;
    },
  };
}

// Code Snippet — index.ts
// // index.ts
// // Import the createCalc function and Operation enum from submission/math.ts

// Use the createCalc function to create calculator objects     
const calc = createCalc(Operation.Add);
console.log(calc.execute(5, 10)); // 15
const multiplyCalc = createCalc(Operation.Multiply);
console.log(multiplyCalc.execute(5, 10)); 