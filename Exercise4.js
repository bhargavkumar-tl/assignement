"use strict";
// Problem 4 — Module Export + Intersection Types + Enum
// Detailed Problem Statement
// In submission/math.ts:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
exports.default = createCalc;
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
var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Multiply"] = 1] = "Multiply";
})(Operation || (exports.Operation = Operation = {}));
// 3️⃣ Default export function
function createCalc(op) {
    return {
        op: op,
        execute: function (a, b) {
            return op === Operation.Add ? a + b : a * b;
        },
    };
}
// Code Snippet — index.ts
// // index.ts
// // Import the createCalc function and Operation enum from submission/math.ts
// Use the createCalc function to create calculator objects     
var calc = createCalc(Operation.Add);
console.log(calc.execute(5, 10)); // 15
var multiplyCalc = createCalc(Operation.Multiply);
console.log(multiplyCalc.execute(5, 10));
