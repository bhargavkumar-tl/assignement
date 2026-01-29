// Problem 1 — Strongly-Typed Checkout Function
// Detailed Problem Statement
// Implement a function:
// function checkout(price, quantity)

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

export function checkout(price: number, quantity: number):number{
  // TODO: Return total cost as price * quantity
  // TODO: Ensure price and quantity are explicitly typed as number
  // TODO: Reject non-number types at compile time (enforced by TS)
  // TODO: Ensure quantity is a non-negative integer (validation optional, TS typing does not enforce runtime)
  if(typeof(price) === "number" && typeof(quantity) === "number" && quantity >= 0 && price <= 1000000){
    return price*quantity; // placeholder return
  }
  return  0;
}
let a:number=Number(prompt("enter price"));
let b:number=Number(prompt("enter quantity"));
console.log(checkout(a,b));

