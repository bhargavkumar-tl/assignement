"use strict";
// Problem 1 — Strongly-Typed Checkout Function
// Detailed Problem Statement
// Implement a function:
// function checkout(price, quantity)
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = checkout;
// The function must:
// Return the total cost (price * quantity).
// Use explicit types for parameters and return type for safety.
// Reject any string/number mixing at compile time.
// Ensure TypeScript type inference supports safe callers.
// Constraints
// price ≤ 1,000,000
// quantity must be an integer ≥ 0
// Must not accept "5" or any non-number values.
// Return type must be number, not inferred.
// Example Test Cases
// Valid Cases
// Input	Output
// checkout(10, 3)	30
// checkout(5.5, 2)	11
// checkout(0, 10)	0
// Code Snippet
// // Problem 1 — Strongly-Typed Checkout Function
function checkout(price, quantity) {
    // TODO: Return total cost as price * quantity
    // TODO: Ensure price and quantity are explicitly typed as number
    // TODO: Reject non-number types at compile time (enforced by TS)
    // TODO: Ensure quantity is a non-negative integer (validation optional, TS typing does not enforce runtime)
    if (typeof (price) === "number" && typeof (quantity) === "number" && quantity >= 0 && price <= 1000000) {
        return price * quantity; // placeholder return
    }
    return 0;
}
var a = Number(prompt("enter price"));
var b = Number(prompt("enter quantity"));
console.log(checkout(a, b));
