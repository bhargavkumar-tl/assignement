// Problem 5 — API Response Parser with Type Assertion
// Detailed Problem Statement
// Implement:
// export function parseApiResponse(
//   response
// ){ }

// Rules:

// Use type assertion (as) only after runtime validation.
// Validate:id must be a number
// title must be a string
// Return:validated object, OR
// null if validation fails

// Constraints

// Must not trust unknown without checks.
// Must avoid unsafe direct casting before checks.

// Example Test Cases
// Valid
// parseApiResponse({ id: 1, title: "Hello" })
// // → { id: 1, title: "Hello" }

// Code Snippet
// // Problem 5 — API Response Parser with Type Assertion
export function parseApiResponse(
  response
) {
  // TODO: Validate response is non-null object
  // TODO: Check id is number and title is string, else return null
  // TODO: Use type assertion after runtime validation
  return null; // placeholder return
}
