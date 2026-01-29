// Problem 2 — Tuple & Interface Validation
// Detailed Problem Statement
// Define:
// Implement:
// createUser(name, age)

// Returns a proper User object.
// Must validate types at compile time.
// parseTuple(tuple)

// Converts a tuple [name, age] into a User.
// Must guarantee type safety.

// Constraints

// name must be a string.
// age must be a number ≥ 0.
// Tuple length must be exactly 2.

// Example Test Cases
// Valid
// parseTuple(["Alice", 20])
// // → { name: "Alice", age: 20 }

// createUser("Bob", 30)
// // → { name: "Bob", age: 30 }

// Code Snippet
// // Problem 2 — Tuple & Interface Validation
export interface user{
  name:string;
  age:number;
}
export function createUser(name:string, age:number):user {
  // TODO: Return a user object with the given name and age
  // TODO: Validate at compile time that name is string and age is number ≥ 0
  if(typeof(name)==="string" && age>=0){
  return {
    name,age
  };}
}

export function parseTuple(tuple:[string,number]):user {
  // TODO: Convert tuple into a user object
  // TODO: Ensure tuple length is exactly 2 and types are validated at compile time
  const [name,age]=tuple;  
  if(typeof(name)==="string" && age>=0){
  return {
    name,age
  };}
}
console.log(createUser("botsa",22));
console.log(parseTuple(["botsa",22]));